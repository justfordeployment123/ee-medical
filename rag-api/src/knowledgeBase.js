// Dynamic knowledge base loader.
// Loads the FULL TSX content for all pages in `front-end/src/pages`
// so the RAG assistant can use every page on the site as context.

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { existsSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..", "..");
// Docker: kb-pages (relative to cwd). Local dev: ../front-end/src/pages.
const kbPagesPath = path.join(process.cwd(), "kb-pages");
const frontEndPagesPath = path.join(projectRoot, "front-end", "src", "pages");

const pagesDir = process.env.PAGES_DIR
  ? process.env.PAGES_DIR
  : existsSync(kbPagesPath)
    ? kbPagesPath
    : frontEndPagesPath;

// Optional tags for better retrieval weighting on key pages.
// Keys are TSX file base names (without extension).
const tagOverrides = {
  AiRegulatoryStrategy: ["ai", "regulatory", "strategy", "medical devices", "ai act", "fda"],
  AiSamdPathway: ["ai", "samd", "pathway", "510k", "de novo", "pma"],
  AiFdaReadiness: ["ai", "fda", "readiness", "audit"],
  AiDesignControls: ["ai", "design controls", "qmsr"],
  FdaInteractionDefense: ["fda", "interaction", "defense", "ai"],
  PccpAuthoring: ["pccp", "ai", "lifecycle"],
  MedicalDevices: ["medical devices", "quality", "qms", "iso 13485"],
  PostmarketCompliance: ["postmarket", "mdr", "clinical data"],
  Fda483Warning: ["fda", "483", "warning letters", "remediation"],
  CEMarkApproval: ["ce mark", "mdr", "ivdr"],
  CCCMarkApproval: ["ccc mark", "china"],
  Fda510kApplication: ["510k", "fda", "submissions"],
  QualitySystemRegulation: ["qsr", "qmsr", "quality system"],
  Iso13485: ["iso 13485", "qms"],
  Iso14971: ["iso 14971", "risk management"],
  Iso9001Implementation: ["iso 9001", "qms"],
  Reliability: ["reliability", "healthcare"],
  SixSigmaHealthcare: ["six sigma", "healthcare"],
  DrugMasterFile: ["dmf", "drugs", "cmc"],
  CmcServices: ["cmc", "chemistry", "manufacturing", "controls"],
  NdaApplication: ["nda", "drugs"],
  AndaApplication: ["anda", "generics"],
  BiologicsLicenseApplication: ["bla", "biologics"],
  IndApplication: ["ind", "clinical trials"],
  About: ["about", "company", "mission"],
  Media: ["media", "news", "articles"]
};

function inferTitleFromBase(base) {
  // Convert PascalCase to "Title Case"
  const withSpaces = base.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
  return withSpaces.replace(/\s+/g, " ").trim();
}

function inferUrlFromBase(base) {
  // Fallback URL if we don't have the exact route path;
  // this is only used as a label in the prompt.
  if (base === "Home") return "/";
  return `/${base.toLowerCase()}`;
}

async function discoverPageConfigs() {
  const entries = await fs.readdir(pagesDir, { withFileTypes: true });

  return entries
    .filter((e) => e.isFile() && e.name.endsWith(".tsx"))
    .map((e) => {
      const file = e.name;
      const base = file.replace(/\.tsx$/, "");
      return {
        id: base.toLowerCase(),
        file,
        title: inferTitleFromBase(base),
        url: inferUrlFromBase(base),
        tags: tagOverrides[base] ?? []
      };
    });
}

async function loadPageContent(config) {
  const fullPath = path.join(pagesDir, config.file);
  try {
    const raw = await fs.readFile(fullPath, "utf8");

    // Remove import lines; keep JSX + textual content.
    const withoutImports = raw.replace(/^import[^;]+;?\s*$/gm, "").trim();

    return {
      id: config.id,
      title: config.title,
      url: config.url,
      tags: config.tags,
      content: withoutImports
    };
  } catch (err) {
    console.error("[RAG] Failed to load page for KB:", fullPath, err.message);
    return null;
  }
}

export async function loadKnowledgeBase() {
  const pageConfigs = await discoverPageConfigs();
  const docs = await Promise.all(pageConfigs.map(loadPageContent));
  const filtered = docs.filter(Boolean);
  console.log(`[RAG] Knowledge base built from ${filtered.length} pages.`);
  return filtered;
}


