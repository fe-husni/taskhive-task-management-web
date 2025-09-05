// scripts/fix-paths.js
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "docs");
const exts = new Set([".html", ".js"]);

// Recursively walk docs/
function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, files);
    else files.push(p);
  }
  return files;
}

function fixContent(s) {
  // from /src/ pages (one level up)
  s = s.replaceAll("../dist/", "dist/");
  s = s.replaceAll("../img/", "img/");
  s = s.replaceAll("../js/", "js/");

  // common variants
  s = s.replaceAll('href="./output.css"', 'href="dist/output.css"');
  s = s.replaceAll("url(../img/", "url(img/");

  return s;
}

const files = walk(ROOT).filter(f => exts.has(path.extname(f)));

let changed = 0;
for (const file of files) {
  const before = fs.readFileSync(file, "utf8");
  const after = fixContent(before);
  if (after !== before) {
    fs.writeFileSync(file, after, "utf8");
    changed++;
  }
}
console.log(`fix-paths: updated ${changed} file(s).`);
