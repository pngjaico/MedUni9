const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const MARK = /\r?\n---\r?\n\r?\n## Pré-Prova\r?\n\r?\n> Leia isso 30 minutos antes da prova\. Vai direto ao ponto\.\r?\n\r?\n### O que você PRECISA saber[\s\S]*$/;

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
  if (!fs.existsSync(f)) continue;
  let c = fs.readFileSync(f, "utf8");
  const n = c.match(/^## Pré-Prova/gm);
  if (!n || n.length < 2) continue;
  const next = c.replace(MARK, "\n");
  if (next === c) {
    console.warn("no change:", rel);
    continue;
  }
  fs.writeFileSync(f, next.replace(/\r\n/g, "\n"), "utf8");
  const dst = path.join(ROOT, "data", "materiais", rel.replace(/^materiais\//, ""));
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.writeFileSync(dst, next.replace(/\r\n/g, "\n"), "utf8");
  console.log("fixed:", rel);
}
