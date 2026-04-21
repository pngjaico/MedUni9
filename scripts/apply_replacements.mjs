/**
 * apply_replacements.mjs
 *
 * Patches questoes.json with replacement questions from all _replacements_*.json files.
 * For each replacement entry, finds the question by id in questoes and overwrites:
 *   enunciado, opcoes, correta, dificuldade, explicacao
 * Preserves: id, materia, aula_id, tema, essencial, and all other fields.
 *
 * Usage: node scripts/apply_replacements.mjs
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const QUESTOES_PATH = path.join(ROOT, 'data/questoes.json');
const SCRIPTS_DIR = __dirname;

// All replacement files to apply
const REPLACEMENT_FILES = [
  '_replacements_bio_ind.json',
  '_replacements_bmf3_a.json',
  '_replacements_bmf3_b.json',
  '_replacements_ff4_st.json',
  '_replacements_bmf4_semio4.json',
];

const data = JSON.parse(readFileSync(QUESTOES_PATH, 'utf8'));
const questoes = data.questoes;

// Build a lookup map by id
const byId = new Map(questoes.map(q => [q.id, q]));

let applied = 0, notFound = 0, skipped = 0;
const notFoundIds = [];
const appliedLog = [];

for (const filename of REPLACEMENT_FILES) {
  const filePath = path.join(SCRIPTS_DIR, filename);
  if (!existsSync(filePath)) {
    console.log(`⚠️  Missing: ${filename} — skipping`);
    skipped++;
    continue;
  }

  let replacements;
  try {
    replacements = JSON.parse(readFileSync(filePath, 'utf8'));
  } catch (e) {
    console.error(`❌ Failed to parse ${filename}: ${e.message}`);
    continue;
  }

  if (!Array.isArray(replacements)) {
    console.error(`❌ ${filename}: expected array, got ${typeof replacements}`);
    continue;
  }

  console.log(`\n── ${filename} (${replacements.length} entries) ──`);

  for (const r of replacements) {
    const q = byId.get(r.id);
    if (!q) {
      console.warn(`  ⚠️  id:${r.id} not found in questoes.json`);
      notFound++;
      notFoundIds.push(r.id);
      continue;
    }

    // Validate replacement has required fields
    if (!r.enunciado || !Array.isArray(r.opcoes) || !r.correta || !r.explicacao) {
      console.warn(`  ⚠️  id:${r.id} missing required fields — skipping`);
      skipped++;
      continue;
    }

    // Validate correta is a valid letter
    if (!['A','B','C','D','E'].includes(r.correta)) {
      console.warn(`  ⚠️  id:${r.id} invalid correta "${r.correta}" — skipping`);
      skipped++;
      continue;
    }

    // Validate opcoes has 5 entries
    if (r.opcoes.length !== 5) {
      console.warn(`  ⚠️  id:${r.id} opcoes has ${r.opcoes.length} entries (expected 5) — skipping`);
      skipped++;
      continue;
    }

    // Apply the replacement
    const oldEnun = q.enunciado?.slice(0, 60);
    q.enunciado = r.enunciado;
    q.opcoes = r.opcoes;
    q.correta = r.correta;
    q.dificuldade = r.dificuldade || q.dificuldade;
    q.explicacao = r.explicacao;

    applied++;
    appliedLog.push({ id: r.id, materia: q.materia, aula_id: q.aula_id });
    console.log(`  ✅ id:${r.id} | ${q.materia}/${q.aula_id} | was: "${oldEnun}..."`);
  }
}

// Write back
writeFileSync(QUESTOES_PATH, JSON.stringify({ ...data, questoes }, null, 2), 'utf8');

console.log(`\n${'='.repeat(60)}`);
console.log(`Applied:  ${applied}`);
console.log(`Not found: ${notFound}${notFoundIds.length ? ' ids: ' + notFoundIds.join(', ') : ''}`);
console.log(`Skipped:  ${skipped}`);
console.log(`Total:    ${applied + notFound + skipped}`);
console.log(`\n✅ questoes.json updated.`);

// Verification: check that no more bad-format questions remain in essenciais
const BAD_PATTERN = /associa corretamente|às demais informações da mesma linha|Qual afirmação sobre "/i;
const remainingBad = questoes.filter(q => q.essencial === true && BAD_PATTERN.test(q.enunciado || ''));
console.log(`\n── Remaining bad-format essenciais: ${remainingBad.length} ──`);
if (remainingBad.length > 0) {
  remainingBad.forEach(q => console.log(`  id:${q.id} ${q.materia}/${q.aula_id}: ${q.enunciado?.slice(0,80)}`));
}
