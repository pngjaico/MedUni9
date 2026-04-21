/**
 * apply_opcoes_patch.mjs
 *
 * Applies per-option explanations (explicacoes_opcoes) to the 273 replacement questions.
 * Also syncs explicacao_geral from explicacao where missing.
 *
 * Usage: node scripts/apply_opcoes_patch.mjs
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const QUESTOES_PATH = path.join(ROOT, 'data/questoes.json');

const RESULT_FILES = [
  '_opcoes_result_chunk0.json',
  '_opcoes_result_chunk1.json',
  '_opcoes_result_chunk2.json',
  '_opcoes_result_chunk3.json',
];

const data = JSON.parse(readFileSync(QUESTOES_PATH, 'utf8'));
const questoes = data.questoes;
const byId = new Map(questoes.map(q => [q.id, q]));

let applied = 0, skipped = 0, missing = 0;

for (const filename of RESULT_FILES) {
  const filePath = path.join(__dirname, filename);
  if (!existsSync(filePath)) {
    console.log(`⚠️  Missing: ${filename}`);
    missing++;
    continue;
  }

  const results = JSON.parse(readFileSync(filePath, 'utf8'));
  console.log(`\n── ${filename} (${results.length} entries) ──`);

  for (const r of results) {
    const q = byId.get(r.id);
    if (!q) { console.warn(`  ⚠️ id:${r.id} not found`); skipped++; continue; }

    const opcoes = r.explicacoes_opcoes;
    if (!opcoes || typeof opcoes !== 'object') {
      console.warn(`  ⚠️ id:${r.id} invalid explicacoes_opcoes`);
      skipped++;
      continue;
    }

    // Validate all expected keys are present
    const letters = ['A','B','C','D','E'];
    const presentKeys = letters.filter(l => opcoes[l]);
    if (presentKeys.length < 4) {
      console.warn(`  ⚠️ id:${r.id} only ${presentKeys.length} options covered`);
      skipped++;
      continue;
    }

    // Apply
    q.explicacoes_opcoes = opcoes;

    // Sync explicacao_geral if missing
    if (!q.explicacao_geral && q.explicacao) {
      // Use first 2 sentences of explicacao as explicacao_geral
      const sentences = q.explicacao.split(/(?<=[.!?])\s+/);
      q.explicacao_geral = sentences.slice(0, 2).join(' ');
    }

    applied++;
  }
}

writeFileSync(QUESTOES_PATH, JSON.stringify({ ...data, questoes }, null, 2), 'utf8');

console.log(`\n${'='.repeat(50)}`);
console.log(`Applied:  ${applied}`);
console.log(`Skipped:  ${skipped}`);
console.log(`Files missing: ${missing}`);
console.log(`\n✅ questoes.json updated with per-option explanations.`);

// Spot check
console.log('\n── Spot check (3 questions) ──');
const check = [2357, 1643, 2655];
for (const id of check) {
  const q = byId.get(id);
  if (!q) continue;
  console.log(`\nid:${id} | ${q.materia}/${q.aula_id}`);
  console.log(`correta: ${q.correta}`);
  if (q.explicacoes_opcoes) {
    for (const [k,v] of Object.entries(q.explicacoes_opcoes)) {
      console.log(`  ${k}: ${v?.slice(0,70)}`);
    }
  }
}
