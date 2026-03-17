import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import http from "node:http";
import https from "node:https";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, "..");
const defaultScanDir = path.join(repoRoot, "front-end", "src");

// Capture any http(s) URL; we'll validate by checking Content-Type via HEAD.
// This intentionally includes providers like Unsplash/CDNs where URLs don't end in an extension.
const URL_REGEX = /https?:\/\/[^\s"'()<>]+/gi;

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === "node_modules" || e.name === "dist" || e.name.startsWith(".")) continue;
      yield* walk(p);
    } else if (e.isFile()) {
      if (!/\.(tsx|ts|jsx|js|css|scss|html)$/.test(e.name)) continue;
      yield p;
    }
  }
}

function requestHead(url, timeoutMs = 12000) {
  return new Promise((resolve) => {
    const u = new URL(url);
    const lib = u.protocol === "https:" ? https : http;

    const req = lib.request(
      url,
      { method: "HEAD", timeout: timeoutMs, headers: { "User-Agent": "ee-medical-image-check/1.0" } },
      (res) => {
        const status = res.statusCode ?? 0;
        const location = res.headers.location;
        const contentType = Array.isArray(res.headers["content-type"])
          ? res.headers["content-type"].join(", ")
          : res.headers["content-type"] ?? "";
        res.resume();
        resolve({ ok: status >= 200 && status < 400, status, contentType, location: location ?? "" });
      }
    );

    req.on("timeout", () => {
      req.destroy(new Error("timeout"));
    });
    req.on("error", (err) => {
      resolve({ ok: false, status: 0, contentType: "", location: "", error: err?.message ?? "error" });
    });
    req.end();
  });
}

function isImageContentType(contentType) {
  return /^image\//i.test(contentType.trim());
}

async function main() {
  const scanDir = process.argv[2] ? path.resolve(process.argv[2]) : defaultScanDir;
  const files = [];
  for await (const f of walk(scanDir)) files.push(f);

  const urlToHits = new Map();

  for (const file of files) {
    const text = await fs.readFile(file, "utf8");
    const matches = text.match(URL_REGEX) ?? [];
    for (const m of matches) {
      const url = m.trim().replace(/[),.;]+$/, "");
      const rel = path.relative(repoRoot, file);
      const hits = urlToHits.get(url) ?? [];
      hits.push(rel);
      urlToHits.set(url, hits);
    }
  }

  const urls = [...urlToHits.keys()].sort();
  if (urls.length === 0) {
    console.log(`No image URLs found under: ${scanDir}`);
    return;
  }

  console.log(`Scanning ${urls.length} image URL(s) found under: ${scanDir}\n`);

  const results = [];
  for (const url of urls) {
    // Only check likely image URLs to avoid spamming unrelated endpoints
    const looksLikeImage =
      /\.(png|jpe?g|webp|svg)(\?|$)/i.test(url) ||
      /images\.unsplash\.com/i.test(url) ||
      /\/wp-content\/uploads\//i.test(url);
    if (!looksLikeImage) continue;

    const r = await requestHead(url);
    results.push({ url, ...r, files: urlToHits.get(url) ?? [] });
  }

  if (results.length === 0) {
    console.log("No likely image URLs found to check.");
    return;
  }

  const broken = results.filter((r) => !r.ok || (r.contentType && !isImageContentType(r.contentType)));

  for (const r of results) {
    const ct = r.contentType ? ` | ${r.contentType}` : "";
    const loc = r.location ? ` | location: ${r.location}` : "";
    const err = r.error ? ` | error: ${r.error}` : "";
    const flags = [];
    if (!r.ok) flags.push("BAD_STATUS");
    if (r.contentType && !isImageContentType(r.contentType)) flags.push("NOT_IMAGE");
    const flagStr = flags.length ? ` | ${flags.join(",")}` : "";
    console.log(`${r.status.toString().padStart(3, " ")}${ct}${loc}${err}${flagStr}`);
    console.log(`  ${r.url}`);
    if (r.files.length) console.log(`  referenced in: ${r.files.join(", ")}`);
    console.log("");
  }

  console.log(`Done. Potential problems: ${broken.length}/${results.length}`);
  if (broken.length) {
    console.log("\nTip: focus on entries flagged NOT_IMAGE or BAD_STATUS.");
  }
}

await main();

