/**
 * Remove U+00EC (ì) dos .md — carácter inválido para português corrente nos materiais.
 * Espelha data/materiais → materiais/moduloN via materias.json (apenas pastas planas conhecidas).
 *
 * Uso: node scripts/strip_spurious_grave_i.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const MATERIAS = path.join(ROOT, "data", "materias.json");

function loadModulos() {
  const j = JSON.parse(fs.readFileSync(MATERIAS, "utf8"));
  const m = {};
  for (const [id, v] of Object.entries(j)) {
    if (v && typeof v.modulo === "number") m[id] = v.modulo;
  }
  return m;
}

function walkMarkdownFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const n of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, n.name);
    if (n.isDirectory()) walkMarkdownFiles(p, acc);
    else if (n.name.endsWith(".md")) acc.push(p);
  }
  return acc;
}

function fixContent(raw) {
  const n = raw.replace(/\r\n/g, "\n").normalize("NFC");
  if (!n.includes("\u00EC")) return null;
  return n.replace(/\u00EC/g, "i");
}

function main() {
  const modulos = loadModulos();
  const base = path.join(ROOT, "data", "materiais");
  let changed = 0;
  for (const fp of walkMarkdownFiles(base)) {
    const rel = path.relative(base, fp);
    const first = rel.split(path.sep)[0];
    if (first.startsWith("modulo")) continue;
    const mod = modulos[first];
    if (!mod) continue;
    const raw = fs.readFileSync(fp, "utf8");
    const next = fixContent(raw);
    if (next == null) continue;
    fs.writeFileSync(fp, next, "utf8");
    const mirror = path.join(ROOT, "materiais", `modulo${mod}`, first, path.basename(fp));
    fs.mkdirSync(path.dirname(mirror), { recursive: true });
    fs.writeFileSync(mirror, next, "utf8");
    console.log("fixed", rel);
    changed++;
  }
  console.log("strip_spurious_grave_i: files changed", changed);
}

main();
