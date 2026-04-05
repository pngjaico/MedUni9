/**
 * Reduz negritos excessivos nos .md do módulo 6 (só remove marcadores **,
 * não altera o texto entre eles). Espelha para data/materiais/.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "materiais", "modulo6");

function countBoldSegments(line) {
  const m = line.match(/\*\*[^*]+\*\*/g);
  return m ? m.length : 0;
}

function stripAllBold(line) {
  return line.replace(/\*\*([^*]+)\*\*/g, "$1");
}

function processLine(line) {
  const t = line.trimStart();

  if (t.startsWith("```")) return line;
  // Bloco de meta do topo (uma ou duas linhas com rótulos)
  if (
    t.includes("**Disciplina:**") ||
    (t.includes("**Módulo:**") &&
      (t.includes("**Referência principal:**") || t.includes("**Tempo de estudo sugerido:**")))
  ) {
    return line;
  }

  if (t.startsWith("#")) {
    if (countBoldSegments(line) > 2) return stripAllBold(line);
    return line;
  }

  if (t.startsWith(">")) {
    const m = t.match(/^(\> \*\*(Dica de Prova|Pegadinha):\*\*\s*)(.*)$/);
    if (m) {
      return m[1] + stripAllBold(m[3]);
    }
    if (countBoldSegments(line) > 4) return stripAllBold(line);
    return line;
  }

  if (t.startsWith("|")) {
    return stripAllBold(line);
  }

  if (/^-\s+/.test(t) || /^\d+\.\s+/.test(t)) {
    if (countBoldSegments(line) > 2) return stripAllBold(line);
    return line;
  }

  if (t.startsWith("---")) return line;

  // Parágrafos normais: mais de 3 trechos em negrito → remover todos nesta linha
  if (countBoldSegments(line) > 3) return stripAllBold(line);
  return line;
}

function processFile(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const lines = raw.split(/\r?\n/);
  const out = lines.map(processLine).join("\n");
  if (out !== raw) {
    fs.writeFileSync(filePath, out, "utf8");
    return true;
  }
  return false;
}

function walk(dir, acc) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p, acc);
    else if (name.endsWith(".md")) acc.push(p);
  }
}

const files = [];
walk(SRC, files);
let changed = 0;
for (const f of files.sort()) {
  if (processFile(f)) changed++;
  const rel = path.relative(path.join(ROOT, "materiais"), f);
  const dst = path.join(ROOT, "data", "materiais", rel);
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.writeFileSync(dst, fs.readFileSync(f, "utf8"), "utf8");
}
console.log("modulo6 md files:", files.length, "changed:", changed, "synced to data/materiais");
