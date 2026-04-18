/**
 * trim_pmh_ds_ind.mjs
 * Rebaixa essenciais de pmh (14), ds (3) e ind (11) — 28 aulas no total.
 * Meta: 5–7 por aula teórica.
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
  // pmh_a1: catabólica/anabólica=trivial; ΔG=0=chemistry detail
  3181, 3183,
  // pmh_a2: vitB cofatores=detalhe; compartimentalização=abstrato
  3190, 3192,
  // pmh_a3: hipoglicemia pediátrica=misaligned(a5?); biotina=detalhe
  3198, 3200,
  // pmh_a4: succinato desidrogenase/Complexo II=detalhe
  3207,
  // pmh_a5: fase não-oxidativa pentoses=detalhe; NADPH síntese=detalhe
  3213, 3215,
  // pmh_a6: adrenalina glicemia=coberto; DM2 sem CAD=detalhe avançado
  3223, 3224,
  // pmh_a7: -2C por ciclo=detalhe numérico; NADPH na síntese=detalhe
  3227, 3231,
  // pmh_a8: LPL=detalhe; VLDL gordura endógena=detalhe classif.
  3236, 3240,
  // pmh_a9: Friedewald=fórmula laboratorial; álcool+TG=coberto
  3241, 3247,
  // pmh_a10: ALT vs AST clínica=detalhe; OTC deficiência=detalhe enzim.
  3252, 3253,
  // pmh_a11: balança nitrogenada=nutricional; histamina=farmacologia
  3261, 3264,
  // pmh_a12: síntese de novo=detalhe; PRPP=detalhe
  3268, 3272,
  // pmh_a13: Ciclo Alanina=similar Cori; adiposo endócrino=sinalização
  3277, 3279,
  // pmh_a14: critérios sínd.metabólica=detalhe; leptina=menos testado
  3286, 3288,

  // ds_a1: 17 ODS=número trivial; obsolescência programada=less health
  3730, 3733,
  // ds_a2: ilha de calor=detalhe; justiça ambiental=abstrato
  3743, 3744,
  // ds_a3: Grupo B=detalhe classif.; Grupo C radioativos=detalhe
  3747, 3751,

  // ind_a1: empatia/simpatia=artifact+coberto; ACP=conteúdo ind_a6
  3754, 3760,
  // ind_a2: P(Perception)=artifact+coberto por intro; S(Summary)=artifact
  3762, 3768,
  // ind_a3: eutanásia vs SA=artifact+detalhe; mistanásia=less tested
  3775, 3776,
  // ind_a4: benefícios PICS=artifact+genérico; termalismo=detalhe
  3780, 3783,
  // ind_a5: despersonalização=artifact+coberto; resiliência=artifact
  3786, 3788,
  // ind_a6: plano conjunto Stewart=detalhe; prevQuaternária=artifact
  3797, 3798,
  // ind_a7: violência institucional=artifact+menos cobrado
  3805,
  // ind_a8: vulnerabilidade pesquisa=artifact; não-maleficência=detalhe
  3814, 3816,
  // ind_a9: horizontalidade=artifact; liderança situacional=artifact
  3820, 3823,
  // ind_a10: religiosidade/espiritualidade=artifact; adesão=artifact
  3825, 3830,
  // ind_a11: prontuário=artifact; justo motivo=artifact
  3834, 3838,
]);

// Fix artifacts in KEPT questions
const FIX_TRAILING = new Set([
  3284, // pmh_a14 kept
  3732, 3734, // ds_a1 kept
  3779, 3831, // ind_a4, ind_a10 kept
]);

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

for (const mat of ['pmh','ds','ind']) {
  console.log(`\n--- ${mat} ---`);
  const byAula = {};
  for (const q of questoes) {
    if (q.materia !== mat) continue;
    if (!byAula[q.aula_id]) byAula[q.aula_id] = { ess: 0, tot: 0, diffs: [] };
    byAula[q.aula_id].tot++;
    if (q.essencial === true) { byAula[q.aula_id].ess++; byAula[q.aula_id].diffs.push(q.dificuldade); }
  }
  for (const [aula, s] of Object.entries(byAula)) {
    const ok = s.ess >= 4 && s.ess <= 7 ? '✅' : s.ess === 0 ? '🔴' : s.ess < 4 ? '🟡' : '🔵';
    console.log(`  ${ok} ${aula}: ${s.ess}/${s.tot} | [${s.diffs.join(',')}]`);
  }
}
