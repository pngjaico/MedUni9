/**
 * Mescla um patch de questões mad2 em data/questoes.json (substituição por id).
 * Uso: node scripts/merge-mad2-patch.cjs data/patches/mad2_block_1.json
 */
const fs = require('fs');
const path = require('path');

const patchPath = process.argv[2];
if (!patchPath) {
  console.error('Uso: node scripts/merge-mad2-patch.cjs <ficheiro-patch.json>');
  process.exit(1);
}

const root = path.join(__dirname, '..');
const dbPath = path.join(root, 'data', 'questoes.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const patch = JSON.parse(fs.readFileSync(path.resolve(patchPath), 'utf8'));

if (!Array.isArray(patch)) {
  console.error('O patch deve ser um array de objetos de questão.');
  process.exit(1);
}

const byId = new Map(patch.map((q) => [q.id, q]));
let replaced = 0;
for (let i = 0; i < db.questoes.length; i++) {
  const q = db.questoes[i];
  if (byId.has(q.id)) {
    db.questoes[i] = byId.get(q.id);
    replaced++;
  }
}

if (replaced !== patch.length) {
  console.warn(`Aviso: patch tem ${patch.length} itens; substituídos ${replaced} ids no banco.`);
}

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2) + '\n');
console.log(`OK: mesclados ${replaced} ids a partir de ${patchPath}`);
