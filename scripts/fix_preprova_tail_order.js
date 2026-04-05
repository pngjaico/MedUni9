/**
 * Conteúdo após ### Frase-âncora (seções ## ...) estava DEPOIS de ## Pré-Prova
 * → no app ia todo para o painel Pré-Prova. Move esse tail para ANTES de ## Pré-Prova.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

const FILES = [
  "materiais/modulo3/semiologia3/semio3_a2.md",
  "materiais/modulo3/semiologia3/semio3_a3.md",
  "materiais/modulo3/semiologia3/semio3_a4.md",
  "materiais/modulo3/semiologia3/semio3_a5.md",
  "materiais/modulo3/semiologia3/semio3_a6.md",
  "materiais/modulo3/semio3/semio3_a2.md",
  "materiais/modulo3/semio3/semio3_a3.md",
  "materiais/modulo3/semio3/semio3_a4.md",
  "materiais/modulo3/semio3/semio3_a5.md",
  "materiais/modulo3/semio3/semio3_a6.md",
];

function fixContent(raw) {
  let s = raw.replace(/\r\n/g, "\n");
  const idx = s.indexOf("\n## Pré-Prova\n");
  if (idx < 0) return raw;
  const pre = s.slice(0, idx).replace(/\s+$/, "");
  const fromProva = s.slice(idx + 1); // starts with ## Pré-Prova

  const fraseHeading = "### Frase-âncora para não esquecer";
  const fi = fromProva.indexOf(fraseHeading);
  if (fi < 0) return raw;

  const afterFraseTitle = fromProva.slice(fi + fraseHeading.length);
  const blockMatch = afterFraseTitle.match(/^\s*\n((?:>[^\n]*\n)+)/);
  if (!blockMatch) return raw;
  const endQuote = fi + fraseHeading.length + blockMatch[0].length;
  const provaOnly = fromProva.slice(0, endQuote).trimEnd();
  const tail = fromProva.slice(endQuote).trim();

  if (!tail) return raw;

  const sep = pre.endsWith("---") ? "\n\n" : "\n\n---\n\n";
  return `${pre}\n\n${tail}${sep}${provaOnly}\n`;
}

for (const rel of FILES) {
  const f = path.join(ROOT, rel);
  if (!fs.existsSync(f)) continue;
  const raw = fs.readFileSync(f, "utf8");
  const next = fixContent(raw);
  if (next === raw.replace(/\r\n/g, "\n")) continue;
  fs.writeFileSync(f, next, "utf8");
  const dst = path.join(ROOT, "data", "materiais", rel.replace(/^materiais\//, ""));
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.writeFileSync(dst, next, "utf8");
  console.log("fixed:", rel);
}
