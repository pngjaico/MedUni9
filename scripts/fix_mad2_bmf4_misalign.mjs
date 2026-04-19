/**
 * fix_mad2_bmf4_misalign.mjs
 *
 * mad2: As questões 4xxx NÃO são conteúdo mad2 (imunologia/infecção).
 *   São ESF, geriatria, ética, epidemiologia mislabeled com aula_id de mad2.
 *   Exceção: mad2_a8 (Hepatites Virais) ids 4445-4446 são sobre hepatites → manter.
 *   Também: id 376 em mad2_a10 (Herpesvírus) é desmielinização SNC → demote.
 *   Fix: demote todos os 4xxx (exceto 4445, 4446) + id 376, promover de 2xxx/3xxx pool.
 *
 * bmf4: ids 331, 332, 337 são histologia geral (secreção, epiderme, folículo)
 *   mislabeled em bmf4_a2 (Embriologia SN) e bmf4_a3 (Formação Nervo Espinal).
 *   Fix: demote esses 3, promover de 2xxx/3xxx pool.
 */

import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const QUESTOES_PATH = path.join(ROOT, 'data/questoes.json');

const data = JSON.parse(readFileSync(QUESTOES_PATH, 'utf8'));
const questoes = data.questoes;

const TEMPLATE = [
  /^Paciente em leito, equipe discute achados/i,
  /^Contexto de exame físico sistematizado com hallazgo/i,
  /^Cenário de equipe multiprofissional na UBS\./i,
  /^Idoso de \d+ anos, morador de área com rede de apoio/i,
  /^Adolescente de 16 anos, relata dor e limitação funcional/i,
];
const isTpl = e => TEMPLATE.some(p => p.test(e || ''));

function qualityScore(q) {
  const d = (q.dificuldade || 1) * 10;
  const t = isTpl(q.enunciado) ? -15 : 0;
  const l = Math.min((q.enunciado || '').length * 0.01, 3);
  return d + t + l;
}

// IDs explicitamente preservados (on-topic para a aula):
const PRESERVE_MAD2 = new Set([4445, 4446]); // hepatites virais → mad2_a8

// IDs explicitamente demovidos (além da regra 4xxx):
const EXTRA_DEMOTE = new Set([376]); // desmielinização SNC em mad2_a10

// IDs bmf4 fora de tema:
const BMF4_DEMOTE = new Set([331, 332, 337]);

let demotions = 0, promotions = 0;

// ─── Passo 1: Demote mad2 4xxx essenciais (exceto PRESERVE) ──────────────────
for (const q of questoes) {
  if (q.materia !== 'mad2') continue;
  if (q.essencial !== true) continue;
  if (q.id >= 4000 && !PRESERVE_MAD2.has(q.id)) {
    q.essencial = false;
    demotions++;
  }
  if (EXTRA_DEMOTE.has(q.id)) {
    q.essencial = false;
    demotions++;
  }
}

// ─── Passo 2: Demote bmf4 misaligned IDs ─────────────────────────────────────
for (const q of questoes) {
  if (q.materia !== 'bmf4') continue;
  if (q.essencial !== true) continue;
  if (BMF4_DEMOTE.has(q.id)) {
    q.essencial = false;
    demotions++;
  }
}

// ─── Passo 3: Promover em mad2 — do pool 2xxx/3xxx por aula ──────────────────
const mad2Aulas = [...new Set(
  questoes.filter(q => q.materia === 'mad2').map(q => q.aula_id).filter(Boolean)
)];

for (const aulaId of mad2Aulas) {
  const current = questoes.filter(
    q => q.materia === 'mad2' && q.aula_id === aulaId && q.essencial === true
  );
  const needed = 5 - current.length;
  if (needed <= 0) continue;

  const pool = questoes.filter(q =>
    q.materia === 'mad2' &&
    q.aula_id === aulaId &&
    q.essencial !== true &&
    !q.enunciado?.startsWith('[QUESTÃO') &&
    q.id >= 2000 && q.id < 4000
  );

  pool.sort((a, b) => qualityScore(b) - qualityScore(a));
  for (let i = 0; i < Math.min(needed, pool.length); i++) {
    pool[i].essencial = true;
    promotions++;
  }
}

// ─── Passo 4: Promover em bmf4 — do pool 2xxx/3xxx por aula ──────────────────
const bmf4Aulas = [...new Set(
  questoes.filter(q => q.materia === 'bmf4').map(q => q.aula_id).filter(Boolean)
)];

for (const aulaId of bmf4Aulas) {
  const current = questoes.filter(
    q => q.materia === 'bmf4' && q.aula_id === aulaId && q.essencial === true
  );
  const needed = 5 - current.length;
  if (needed <= 0) continue;

  const pool = questoes.filter(q =>
    q.materia === 'bmf4' &&
    q.aula_id === aulaId &&
    q.essencial !== true &&
    !q.enunciado?.startsWith('[QUESTÃO') &&
    q.id >= 2000 && q.id < 4000
  );

  pool.sort((a, b) => qualityScore(b) - qualityScore(a));
  for (let i = 0; i < Math.min(needed, pool.length); i++) {
    pool[i].essencial = true;
    promotions++;
  }
}

writeFileSync(QUESTOES_PATH, JSON.stringify({ ...data, questoes }, null, 2), 'utf8');
console.log(`✅ Demotions: ${demotions} | Promotions: ${promotions}`);

// ─── Verificação ─────────────────────────────────────────────────────────────
console.log('\n── mad2 por aula ──');
for (const aulaId of mad2Aulas.sort()) {
  const ess = questoes.filter(q => q.materia === 'mad2' && q.aula_id === aulaId && q.essencial === true);
  const new4k = ess.filter(q => q.id >= 4000).length;
  const old2k = ess.filter(q => q.id >= 2000 && q.id < 4000).length;
  const low  = ess.filter(q => q.id < 1000).length;
  const icon = ess.length >= 5 ? '✅' : ess.length === 0 ? '🔴' : '🟡';
  const diffs = ess.map(q => 'd'+(q.dificuldade||1)).join(' ');
  console.log(` ${icon} ${aulaId}: ${ess.length}ess | 2k:${old2k} 4k:${new4k} low:${low} | ${diffs}`);
}

console.log('\n── bmf4 por aula ──');
for (const aulaId of bmf4Aulas.sort()) {
  const ess = questoes.filter(q => q.materia === 'bmf4' && q.aula_id === aulaId && q.essencial === true);
  const new4k = ess.filter(q => q.id >= 4000).length;
  const low  = ess.filter(q => q.id < 1000).length;
  const icon = ess.length >= 5 ? '✅' : ess.length === 0 ? '🔴' : '🟡';
  const diffs = ess.map(q => 'd'+(q.dificuldade||1)).join(' ');
  console.log(` ${icon} ${aulaId}: ${ess.length}ess | 4k:${new4k} low:${low} | ${diffs}`);
}

// Spot-check: sample de 3 aulas mad2 → imprimir enunciados
const SPOT = ['mad2_a10', 'mad2_a16', 'mad2_a19'];
console.log('\n── Spot-check mad2 ──');
for (const aulaId of SPOT) {
  const ess = questoes.filter(q => q.materia === 'mad2' && q.aula_id === aulaId && q.essencial === true);
  console.log(`\n${aulaId} (${ess.length}):`);
  ess.forEach(q => console.log(`  id:${q.id} d${q.dificuldade} ${q.enunciado?.slice(0,90)}`));
}
