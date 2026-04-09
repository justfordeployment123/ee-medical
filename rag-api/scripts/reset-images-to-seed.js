import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Database from 'better-sqlite3';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, '..', 'content.db');
const dbSourcePath = path.join(__dirname, '..', 'src', 'db.js');

const source = fs.readFileSync(dbSourcePath, 'utf8');

// Matches: img('page','section','key','label','url',w,h,'alt');
const imgCallRegex = /img\('([^']*)','([^']*)','([^']*)','([^']*)','([^']*)',\s*(\d+),\s*(\d+),\s*'([^']*)'\);/g;

const seeds = [];
let match;
while ((match = imgCallRegex.exec(source)) !== null) {
  const [, page, section, fieldKey, , url, , , alt] = match;
  seeds.push({ page, section, fieldKey, url, alt });
}

if (seeds.length === 0) {
  console.error('No image seeds found in src/db.js');
  process.exit(1);
}

const db = new Database(dbPath);
const updateStmt = db.prepare(`
  UPDATE images
  SET filename = NULL,
      url = ?,
      alt = ?
  WHERE page = ? AND section = ? AND field_key = ?
`);

const tx = db.transaction((rows) => {
  let updated = 0;
  for (const row of rows) {
    const res = updateStmt.run(row.url, row.alt, row.page, row.section, row.fieldKey);
    updated += res.changes;
  }
  return updated;
});

const updatedCount = tx(seeds);

db.close();

console.log(`Restored ${updatedCount} image records to seeded URLs.`);
