const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");

const files = [
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

for (const rel of files) {
  const f = path.join(ROOT, rel);
  let s = fs.readFileSync(f, "utf8").replace(/\r\n/g, "\n");
  const n = s.replace(/\n---\n\n\n## Erros Comuns de Prova/g, "\n---\n\n## Erros Comuns de Prova");
  if (n === s) continue;
  const out = n.replace(/\n/g, "\r\n");
  fs.writeFileSync(f, out, "utf8");
  const dst = path.join(ROOT, "data", "materiais", rel.replace(/^materiais\//, ""));
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.writeFileSync(dst, out, "utf8");
  console.log("ok", rel);
}
