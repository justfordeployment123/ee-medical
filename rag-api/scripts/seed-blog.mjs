/**
 * One-time / dev: extracts blogPosts array from front-end blogData.ts and writes blogSeedPosts.json
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const tsPath = path.join(__dirname, '../../front-end/src/data/blogData.ts');
const outPath = path.join(__dirname, '../src/blogSeedPosts.json');

const s = fs.readFileSync(tsPath, 'utf8');
const startMarker = 'export const blogPosts: BlogPost[] = ';
const start = s.indexOf(startMarker);
if (start === -1) throw new Error('Could not find blogPosts export');
let i = start + startMarker.length;
while (i < s.length && /\s/.test(s[i])) i++;
if (s[i] !== '[') throw new Error('Expected [ after blogPosts =');

let depth = 0;
const begin = i;
for (; i < s.length; i++) {
  const c = s[i];
  if (c === '[') depth++;
  else if (c === ']') {
    depth--;
    if (depth === 0) {
      i++;
      break;
    }
  }
}
const literal = s.slice(begin, i);
const posts = new Function(`return ${literal}`)();
fs.writeFileSync(outPath, JSON.stringify(posts, null, 2), 'utf8');
console.log(`Wrote ${posts.length} posts to ${outPath}`);
