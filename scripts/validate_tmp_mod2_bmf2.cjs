const fs = require("fs");

const cards = JSON.parse(fs.readFileSync("scripts/tmp_mod2_bmf2.json", "utf8"));
const allowed = new Set([
  "definicao",
  "mecanismo",
  "clinica",
  "diferenciacao",
  "prova",
  "extra_livro",
]);
const meta = /(na aula|no material|este conteudo|esse conteudo|nesta aula|desta aula|do material)/i;
const cloze = /\{\{c1::([^}|]+)(?:\|[^}]+)?\}\}/g;

const byTema = {};
for (const c of cards) {
  byTema[c.tema] = byTema[c.tema] || [];
  byTema[c.tema].push(c);
}

const temas = Object.keys(byTema).sort(
  (a, b) => Number(a.split("_a")[1]) - Number(b.split("_a")[1])
);
let falhas = 0;

for (const tema of temas) {
  const list = byTema[tema];
  const total = list.length;
  const material = list.filter((x) => x.origem === "material").length;
  const extra = list.filter((x) => x.origem === "extra").length;
  const diff = list.every((x) => [1, 2].includes(Number(x.dificuldade)));
  const noQ = list.every((x) => !String(x.frente || "").includes("?"));
  const noMeta = list.every(
    (x) =>
      !meta.test(String(x.frente || "")) && !meta.test(String(x.explicacao || ""))
  );
  const cat = list.every((x) => allowed.has(String(x.categoria || "")));
  const one = list.every((x) => {
    const m = [...String(x.frente || "").matchAll(cloze)];
    return m.length === 1;
  });
  const verso = list.every((x) => {
    const m = String(x.frente || "").match(/\{\{c1::([^}|]+)(?:\|[^}]+)?\}\}/);
    return m && String(x.verso || "").trim() === m[1].trim();
  });
  const ok =
    total === 12 && material === 10 && extra === 2 && diff && noQ && noMeta && cat && one && verso;
  if (!ok) falhas += 1;

  console.log(
    `${tema}: ${ok ? "OK" : "FALHA"} total=${total} material=${material} extra=${extra} diff12=${diff} sem?=${noQ} cloze1=${one} versoEq=${verso} semMeta=${noMeta} categoria=${cat}`
  );
}

console.log(`TOTAL_TEMAS=${temas.length} FALHAS=${falhas}`);
