/**
 * Mescla data/bcm1_refactor/bcm1_a*.json em data/questoes.json (substitui por id).
 * Uso: node scripts/merge-bcm1-questoes.cjs
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const questoesPath = path.join(root, 'data', 'questoes.json');
const refactorDir = path.join(root, 'data', 'bcm1_refactor');

const main = JSON.parse(fs.readFileSync(questoesPath, 'utf8'));
const indexById = new Map(main.questoes.map((q, i) => [q.id, i]));

const replacements = [];
for (let n = 1; n <= 21; n++) {
  const file = path.join(refactorDir, `bcm1_a${n}.json`);
  if (!fs.existsSync(file)) {
    console.error('Ficheiro em falta:', file);
    process.exit(1);
  }
  const chunk = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (!Array.isArray(chunk) || chunk.length !== 10) {
    console.error('Cada ficheiro deve ser array de 10 questões:', file, chunk && chunk.length);
    process.exit(1);
  }
  replacements.push(...chunk);
}

if (replacements.length !== 210) {
  console.error('Esperado 210 questões, obtido', replacements.length);
  process.exit(1);
}

for (const q of replacements) {
  const idx = indexById.get(q.id);
  if (idx === undefined) {
    console.error('id não encontrado em questoes.json:', q.id);
    process.exit(1);
  }
  const prev = main.questoes[idx];
  if (prev.materia !== 'bcm1' || prev.tema !== q.tema) {
    console.error('Mismatch tema/materia no id', q.id, prev.tema, q.tema);
    process.exit(1);
  }
  main.questoes[idx] = q;
}

fs.writeFileSync(questoesPath, JSON.stringify(main, null, 2) + '\n');
console.log('OK: mescladas', replacements.length, 'questões bcm1.');
