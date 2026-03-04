#!/usr/bin/env node
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..", "..");
const src = path.join(root, "front-end", "src", "pages");
const dest = path.join(root, "rag-api", "kb-pages");

async function sync() {
  await fs.rm(dest, { recursive: true }).catch(() => {});
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const e of entries) {
    const srcPath = path.join(src, e.name);
    const destPath = path.join(dest, e.name);
    if (e.isDirectory()) {
      await fs.cp(srcPath, destPath, { recursive: true });
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
  console.log(`[sync-pages] Copied ${entries.length} items to rag-api/kb-pages`);
}

sync().catch((err) => {
  console.error(err);
  process.exit(1);
});
