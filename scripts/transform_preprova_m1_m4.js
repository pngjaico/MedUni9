/**
 * Substitui ### O que você PRECISA saber + lista por ### Síntese para a prova em prosa.
 * Pastas: materiais/modulo1 .. modulo4 → espelha em data/materiais/
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const MODULES = [1, 2, 3, 4].map((n) => path.join(ROOT, "materiais", `modulo${n}`));

const RE_BLOCK =
  /### O que você PRECISA saber\s*\n\n([\s\S]*?)\n+(### Diferenciações[^\n]+)\n/m;

function stripMdBold(s) {
  return s.replace(/\*\*([^*]+)\*\*/g, "$1");
}

function sentenceCase(s) {
  s = s.trim();
  if (!s) return s;
  if (!/[.!?]$/.test(s)) s += ".";
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function listToProse(listText) {
  const lines = listText.split(/\r?\n/);
  const items = [];
  for (const line of lines) {
    const m = line.match(/^\s*-\s+(.*)$/);
    if (m) items.push(stripMdBold(m[1]).trim());
  }
  if (items.length === 0) return null;

  const n = items.length;
  const nParas = n <= 4 ? 2 : n <= 8 ? 3 : 4;
  const perChunk = Math.ceil(n / nParas);
  const paras = [];
  for (let i = 0; i < n; i += perChunk) {
    const chunk = items.slice(i, i + perChunk).map(sentenceCase);
    paras.push(chunk.join(" "));
  }
  return paras.join("\n\n");
}

function transformContent(content) {
  content = content.replace(/\r\n/g, "\n");
  if (content.includes("### Síntese para a prova")) return content;
  const m = content.match(RE_BLOCK);
  if (!m) return content;
  const prose = listToProse(m[1]);
  if (!prose) return content;
  const replacement = `### Síntese para a prova\n\n${prose}\n\n$2\n`;
  return content.replace(RE_BLOCK, replacement);
}

function walk(dir, acc) {
  if (!fs.existsSync(dir)) return;
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p, acc);
    else if (name.endsWith(".md")) acc.push(p);
  }
}

let total = 0;
let changed = 0;
for (const mod of MODULES) {
  const files = [];
  walk(mod, files);
  for (const f of files.sort()) {
    total++;
    const raw = fs.readFileSync(f, "utf8");
    const next = transformContent(raw);
    if (next === raw.replace(/\r\n/g, "\n")) continue;
    fs.writeFileSync(f, next, "utf8");
    changed++;
    const rel = path.relative(path.join(ROOT, "materiais"), f);
    const dst = path.join(ROOT, "data", "materiais", rel);
    fs.mkdirSync(path.dirname(dst), { recursive: true });
    fs.writeFileSync(dst, next, "utf8");
  }
}
console.log("files scanned:", total, "preprova blocks transformed:", changed);
