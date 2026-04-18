/**
 * trim_semio1_essenciais.mjs
 * Rebaixa essenciais de "semiologia1" para 5–7 por aula.
 * Critérios aplicados: conceito-âncora, presença no .md, recorrência,
 * distingue quem estudou, enunciado autocontido.
 * Aulas práticas/simulação: meta 4–5 (menor volume de teoria testável).
 *
 * semio1_a1 (8→6): Demote 3292 (Supinação - terminologia redundante com 3289),
 *   3296 (meta-didático: estudante observa médico - framing vago).
 *
 * semio1_a2 (8→6): Demote 3300 (SOCRATES - mnemônico de detalhe),
 *   3303 (Claudicação Neurogênica - diferencial mais clínico que semiologia básica).
 *
 * semio1_a3 (8→6): Demote 3308 (cifose = definição trivial d1),
 *   3310 (Atrofia Muscular - conceito genérico sem aplicação específica).
 *
 * semio1_a4 (8→6): Demote 3313 (técnica de dorso-da-mão = detalhe técnico trivial),
 *   3320 (Goteira Bicipital = detalhe anatômico muito específico).
 *
 * semio1_a5 (8→6): Demote 3325 (Goniometria - detalhe técnico de mensuração),
 *   3328 (Escore de Beighton - escala específica menos cobrada em prova).
 *
 * semio1_a6 (8→6): Demote 3335 (Gota vs Pseudogota - redundante com 3332),
 *   3336 (Red Flag neoplásica - sobreposição com semio1_a2).
 *
 * semio1_a7 (8→5, prática simulada): Demote 3339 (checklist = meta-pedagógico),
 *   3341 (Feedback = pedagogia, não medicina), 3342 (meta-didático manequim).
 *
 * semio1_a8 (8→5, ambulatório real): Demote 3347 (sigilo médico = ética geral),
 *   3350 (Adesão Terapêutica = gestão, menos semio), 3352 (periodicidade exames = operacional).
 *
 * semio1_a9 (8→5, reunião clínica): Demote 3356 (Plano Terapêutico = componente operacional),
 *   3358 (impacto funcional = genérico coberto na anamnese), 3359 (meta-interdisciplinar).
 */

import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const QUESTOES_PATH = path.join(ROOT, 'data/questoes.json');

const data = JSON.parse(readFileSync(QUESTOES_PATH, 'utf8'));
const questoes = data.questoes;

const REBAIXAR = new Set([
  3292, 3296,         // semio1_a1
  3300, 3303,         // semio1_a2
  3308, 3310,         // semio1_a3
  3313, 3320,         // semio1_a4
  3325, 3328,         // semio1_a5
  3335, 3336,         // semio1_a6
  3339, 3341, 3342,   // semio1_a7 (prática)
  3347, 3350, 3352,   // semio1_a8 (prática)
  3356, 3358, 3359,   // semio1_a9 (reunião)
]);

// Fix artifact in kept questions
const FIX_TRAILING = new Set([3331]);

let demotions = 0, fixes = 0;
for (const q of questoes) {
  if (REBAIXAR.has(q.id) && q.essencial === true) { q.essencial = false; demotions++; }
  if (FIX_TRAILING.has(q.id) && q.enunciado) {
    const b = q.enunciado;
    q.enunciado = q.enunciado.replace(/\),\s*$/, '').replace(/\)\s*$/, '');
    if (q.enunciado !== b) fixes++;
  }
}

writeFileSync(QUESTOES_PATH, JSON.stringify({ ...data, questoes }, null, 2), 'utf8');
console.log(`✅ Demotions: ${demotions} | Artifacts: ${fixes}`);

const byAula = {};
for (const q of questoes) {
  if (q.materia !== 'semiologia1') continue;
  if (!byAula[q.aula_id]) byAula[q.aula_id] = { ess: 0, tot: 0, diffs: [] };
  byAula[q.aula_id].tot++;
  if (q.essencial === true) { byAula[q.aula_id].ess++; byAula[q.aula_id].diffs.push(q.dificuldade); }
}
for (const [aula, s] of Object.entries(byAula)) {
  const ok = s.ess >= 4 && s.ess <= 7 ? '✅' : s.ess < 4 ? '🟡' : '🔵';
  console.log(`  ${ok} ${aula}: ${s.ess} essenciais | diffs=[${s.diffs.join(',')}]`);
}
