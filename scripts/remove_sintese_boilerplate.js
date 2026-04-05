/**
 * Remove o parágrafo introdutório fixo após ### Síntese para a prova (não altera o restante).
 * Aplica em materiais/ e espelha para data/materiais/.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SRC_ROOT = path.join(ROOT, "materiais");

const BOILER =
  /(\n### Síntese para a prova\n\n)Este trecho reúne, em texto corrido, o que a prova costuma extrair desta aula — use como revisão fechada, não como lista solta\.\n/g;

function walk(dir, acc) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p, acc);
    else if (name.endsWith(".md")) acc.push(p);
  }
}

const files = [];
walk(SRC_ROOT, files);

for (const abs of files) {
  let raw = fs.readFileSync(abs, "utf8");
  const norm = raw.replace(/\r\n/g, "\n");
  const next = norm.replace(BOILER, "$1");
  if (next === norm) continue;
  const out = next.replace(/\n/g, "\r\n");
  fs.writeFileSync(abs, out, "utf8");
  const rel = path.relative(SRC_ROOT, abs);
  const dst = path.join(ROOT, "data", "materiais", rel);
  if (fs.existsSync(dst)) {
    fs.writeFileSync(dst, out, "utf8");
  }
  console.log(rel);
}
