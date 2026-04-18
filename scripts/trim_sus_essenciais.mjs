/**
 * trim_sus_essenciais.mjs
 * Rebaixa essenciais de "sus" de acordo com auditoria pedagógica.
 * Meta: 5–7 por aula, mix de dificuldades, alinhado ao .md correspondente.
 *
 * Lógica de cada aula (pós-leitura do material e aplicação dos 5 critérios):
 *
 * sus_a1 (16→7): IDs 2922-2928 cobrem DSS + história natural + prevenção → MANTER.
 *   2929 (DSS fumante) redunda com 2922+2925. IDs 3361-3368 são de sus_a2 content
 *   (antecedentes históricos): misassignados, rebaixar todos.
 *
 * sus_a2 (8→5): IDs 3369-3376 testam CF/88, correto para sus_a2.
 *   3370 (Seguridade Social - muito amplo), 3372 (Art 199 setor privado - detalhe),
 *   3376 (CF88 proíbe auxílios - menor relevância clínica) → rebaixar.
 *
 * sus_a3 (8→6): 3377-3384 testam princípios SUS.
 *   3382 (Resolutividade - princípio menor), 3384 (Intersetorialidade voto praça -
 *   tema de sus_a9) → rebaixar.
 *
 * sus_a4 (8→6): 3385-3392 testam Leis 8.080/8.142.
 *   3389 (Conferências - coberto pela 8.142, menos específico), 3391 (saúde trabalhador
 *   na 8.080 - tangencial para prova) → rebaixar.
 *
 * sus_a5 (8→6): 3393-3400 testam APS/ESF/PNAB.
 *   3396 (modelo Flexneriano - mais histórico/teórico), 3400 (horário estendido -
 *   detalhe operacional) → rebaixar.
 *
 * sus_a6 (8→6): 3401-3408 testam financiamento.
 *   3407 (municípios com baixa cobertura - redundante com 3405), 3408 (Gestão
 *   Plena - detalhe + enunciado com artifact) → rebaixar.
 *
 * sus_a7 (8→6): 3409-3416 testam controle social/Conselhos.
 *   3414 (Ouvidoria - secundária + enunciado artifact), 3416 (trabalhadores no
 *   Conselho - analítico demais para dif=3 como essencial) → rebaixar.
 *
 * sus_a8 (8→6): 3417-3424 testam RAS.
 *   3418 (rede temática - trivial dif=1), 3422 (Sistema de Apoio - detalhe) → rebaixar.
 *
 * sus_a9 (8→6): 3425-3432 testam ferramentas/tendências.
 *   3430 (Saúde Digital - menos cobrado em prova), 3432 (Literacia em Saúde -
 *   conceito tangencial) → rebaixar.
 */

import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const QUESTOES_PATH = path.join(ROOT, 'data/questoes.json');

const data = JSON.parse(readFileSync(QUESTOES_PATH, 'utf8'));
const questoes = data.questoes;

// IDs a rebaixar (essencial: true → false)
const REBAIXAR = new Set([
  // sus_a1: misaligned history content + minor redundancy
  2929, 3361, 3362, 3363, 3364, 3365, 3366, 3367, 3368,
  // sus_a2: less essential CF/88 details
  3370, 3372, 3376,
  // sus_a3: minor principles
  3382, 3384,
  // sus_a4: less tested 8.080 details
  3389, 3391,
  // sus_a5: historical/operational details
  3396, 3400,
  // sus_a6: redundant case + artifact enunciado
  3407, 3408,
  // sus_a7: ouvidoria (artifact) + analytic dif=3
  3414, 3416,
  // sus_a8: trivial intro + support detail
  3418, 3422,
  // sus_a9: technology + literacy tangentials
  3430, 3432,
]);

// Enunciados com artifact trailing ), a corrigir (apenas nos que ficam essenciais)
const FIX_TRAILING = new Set([3379, 3423]);

let demotions = 0;
let artifactFixes = 0;

for (const q of questoes) {
  if (REBAIXAR.has(q.id)) {
    if (q.essencial === true) {
      q.essencial = false;
      demotions++;
    }
  }
  if (FIX_TRAILING.has(q.id) && q.enunciado) {
    const before = q.enunciado;
    q.enunciado = q.enunciado.replace(/\),\s*$/, '').replace(/\)\s*$/, '');
    if (q.enunciado !== before) artifactFixes++;
  }
}

writeFileSync(QUESTOES_PATH, JSON.stringify({ ...data, questoes }, null, 2), 'utf8');

console.log(`✅ Demotions aplicadas: ${demotions}`);
console.log(`✅ Artifacts corrigidos: ${artifactFixes}`);
console.log('');

// Verify final counts
const byAula = {};
for (const q of questoes) {
  if (q.materia !== 'sus') continue;
  if (!byAula[q.aula_id]) byAula[q.aula_id] = { ess: 0, tot: 0, diffs: [] };
  byAula[q.aula_id].tot++;
  if (q.essencial === true) {
    byAula[q.aula_id].ess++;
    byAula[q.aula_id].diffs.push(q.dificuldade);
  }
}

console.log('Resultado final por aula de sus:');
for (const [aula, s] of Object.entries(byAula)) {
  const ok = s.ess >= 5 && s.ess <= 7 ? '✅' : s.ess < 5 ? '🟡' : '🔵';
  console.log(`  ${ok} ${aula}: ${s.ess} essenciais / ${s.tot} total | diffs=[${s.diffs.join(',')}]`);
}
