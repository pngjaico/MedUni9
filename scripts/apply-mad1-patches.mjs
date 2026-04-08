/**
 * Aplica array de objetos de questão (mesmo id) sobre data/questoes.json
 * Uso: node scripts/apply-mad1-patches.mjs caminho/para/patch.json
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const questoesPath = path.join(root, 'data', 'questoes.json');

const patchFile = process.argv[2];
if (!patchFile) {
  console.error('Uso: node scripts/apply-mad1-patches.mjs <patch.json>');
  process.exit(1);
}

const patch = JSON.parse(fs.readFileSync(patchFile, 'utf8'));
if (!Array.isArray(patch)) {
  console.error('patch.json deve ser um array de questões');
  process.exit(1);
}

const db = JSON.parse(fs.readFileSync(questoesPath, 'utf8'));
for (const p of patch) {
  const i = db.questoes.findIndex((x) => x.id === p.id);
  if (i < 0) {
    console.error('id não encontrado:', p.id);
    process.exit(1);
  }
  db.questoes[i] = p;
}

fs.writeFileSync(questoesPath, JSON.stringify(db, null, 2) + '\n');
console.log('OK:', patch.length, 'questões aplicadas');
