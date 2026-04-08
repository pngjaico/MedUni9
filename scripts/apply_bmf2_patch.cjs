/**
 * Aplica questões refatoradas BMF2 (bmf2_a2–bmf2_a16) em data/questoes.json.
 * Fonte: lotes gerados em paralelo — bmf2_loteA.cjs … bmf2_loteD.cjs
 *
 * Uso: node scripts/apply_bmf2_patch.cjs
 */
"use strict";

const fs = require("fs");
const path = require("path");

const p = path.join(__dirname, "..", "data", "questoes.json");
const root = JSON.parse(fs.readFileSync(p, "utf8"));
const questoes = root.questoes;

const loteA = require("./bmf2_loteA.cjs");
const loteB = require("./bmf2_loteB.cjs");
const loteC = require("./bmf2_loteC.cjs");
const loteD = require("./bmf2_loteD.cjs");

const byTema = {
  ...loteA,
  ...loteB,
  ...loteC,
  ...loteD,
};

const temas = [
  "bmf2_a2",
  "bmf2_a3",
  "bmf2_a4",
  "bmf2_a5",
  "bmf2_a6",
  "bmf2_a7",
  "bmf2_a8",
  "bmf2_a9",
  "bmf2_a10",
  "bmf2_a11",
  "bmf2_a12",
  "bmf2_a13",
  "bmf2_a14",
  "bmf2_a15",
  "bmf2_a16",
];

for (const t of temas) {
  if (!byTema[t] || byTema[t].length !== 10) {
    console.error("Tema incompleto ou ausente:", t, byTema[t] && byTema[t].length);
    process.exit(1);
  }
}

let total = 0;
for (let i = 0; i < questoes.length; i++) {
  const q = questoes[i];
  const batch = byTema[q.tema];
  if (!batch || q.materia !== "bmf2") continue;
  const neu = batch.find((x) => x.id === q.id);
  if (neu) {
    questoes[i] = neu;
    total++;
  }
}

const expected = 150;
if (total !== expected) {
  console.error("Substituições:", total, "esperado:", expected);
  process.exit(1);
}

fs.writeFileSync(p, JSON.stringify(root, null, 2) + "\n", "utf8");
console.log("OK — substituídas", total, "questões BMF2 (bmf2_a2–bmf2_a16).");
