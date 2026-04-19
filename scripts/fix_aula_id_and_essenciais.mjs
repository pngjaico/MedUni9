/**
 * fix_aula_id_and_essenciais.mjs
 *
 * Corrige estrutura de dados para módulos 1-4:
 * 1. Seta aula_id = tema para questões que têm tema mas não aula_id
 * 2. Seleciona essenciais (6 por aula) para bioestatistica, semiologia4,
 *    fisiopato_farmaco e bmf4 (questões antigas sem essencial)
 * 3. Promove mais essenciais para mad2 e bmf3 (atingir mínimo 5)
 *
 * Critério de seleção: dificuldade DESC + penalidade para enunciados
 * genéricos/template. Questões com essencial já definido são preservadas.
 */

import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const QUESTOES_PATH = path.join(ROOT, 'data/questoes.json');

const data = JSON.parse(readFileSync(QUESTOES_PATH, 'utf8'));
const questoes = data.questoes;

// ─── Padrões de enunciado genérico/template (penalizar na seleção) ───────────
const TEMPLATE_PATTERNS = [
  /^Paciente em leito, equipe discute achados/i,
  /^Contexto de exame físico sistematizado com hallazgo/i,
  /^Cenário de equipe multiprofissional na UBS\./i,
  /^Idoso de \d+ anos, morador de área com rede de apoio/i,
  /^Adolescente de 16 anos, relata dor e limitação funcional em membro/i,
];

function isTemplate(enunciado = '') {
  return TEMPLATE_PATTERNS.some(p => p.test(enunciado));
}

// Score para ordenação: d3=30, d2=20, d1=10; template=-15; length bonus leve
function qualityScore(q) {
  const d = (q.dificuldade || 1) * 10;
  const t = isTemplate(q.enunciado) ? -15 : 0;
  const l = Math.min((q.enunciado || '').length * 0.01, 3);
  return d + t + l;
}

// ─── 1. Fix aula_id = tema onde faltando ─────────────────────────────────────
let aulaIdFixed = 0;
for (const q of questoes) {
  if (!q.aula_id && q.tema) {
    q.aula_id = q.tema;
    aulaIdFixed++;
  }
}
console.log(`✅ aula_id setado em ${aulaIdFixed} questões`);

// ─── Helper: agrupar por aula dentro de uma matéria ──────────────────────────
function groupByAula(materia) {
  const map = {};
  for (const q of questoes) {
    if (q.materia !== materia) continue;
    const key = q.aula_id || '(none)';
    if (!map[key]) map[key] = [];
    map[key].push(q);
  }
  return map;
}

// ─── Helper: selecionar essenciais até target, sem alterar já-definidos ───────
function selectEssenciais(questions, target = 6) {
  // Separa os que já têm essencial=true (manter)
  const kept = questions.filter(q => q.essencial === true);
  const remaining = questions.filter(q => q.essencial !== true);

  const toPromote = target - kept.length;
  if (toPromote <= 0) return 0; // já tem o suficiente

  // Ordena restantes por score
  remaining.sort((a, b) => qualityScore(b) - qualityScore(a));

  let promoted = 0;
  for (let i = 0; i < Math.min(toPromote, remaining.length); i++) {
    remaining[i].essencial = true;
    promoted++;
  }
  // Marca o resto como false explicitamente (se ainda undefined)
  for (let i = Math.min(toPromote, remaining.length); i < remaining.length; i++) {
    if (remaining[i].essencial === undefined) remaining[i].essencial = false;
  }
  return promoted;
}

// ─── 2. bioestatistica — 10 reais por aula, nenhum essencial → marcar 6 ─────
{
  const grouped = groupByAula('bioestatistica');
  let total = 0;
  for (const [aula, qs] of Object.entries(grouped)) {
    const real = qs.filter(q => !q.enunciado?.startsWith('[QUESTÃO'));
    const n = selectEssenciais(real, 6);
    // questões não selecionadas mas sem essencial definido → false
    total += n;
  }
  console.log(`✅ bioestatistica: ${total} questões promovidas a essencial`);
}

// ─── 3. semiologia4 — 10 reais por aula → marcar 6 ──────────────────────────
{
  const grouped = groupByAula('semiologia4');
  let total = 0;
  for (const [aula, qs] of Object.entries(grouped)) {
    const real = qs.filter(q => !q.enunciado?.startsWith('[QUESTÃO'));
    const n = selectEssenciais(real, 6);
    total += n;
  }
  console.log(`✅ semiologia4: ${total} questões promovidas a essencial`);
}

// ─── 4. fisiopato_farmaco — 10 reais por aula → marcar 6 ─────────────────────
{
  const grouped = groupByAula('fisiopato_farmaco');
  let total = 0;
  for (const [aula, qs] of Object.entries(grouped)) {
    const real = qs.filter(q => !q.enunciado?.startsWith('[QUESTÃO'));
    const n = selectEssenciais(real, 6);
    total += n;
  }
  console.log(`✅ fisiopato_farmaco: ${total} questões promovidas a essencial`);
}

// ─── 5. bmf4 — questões antigas (sem essencial) → completar até 5 por aula ──
//    Nota: aulas a2,a3,a5,a6,a8,a9,a11,a12,a14,a15,a17,a18 têm 0 essenciais;
//    aulas a1,a4,a7,a10,a13,a16 têm 1 (os kept do trim anterior).
//    Queremos 5 essenciais por aula (não 6, pois as questões antigas têm
//    qualidade mista — melhor ser conservador).
{
  const grouped = groupByAula('bmf4');
  let total = 0;
  for (const [aula, qs] of Object.entries(grouped)) {
    const real = qs.filter(q => !q.enunciado?.startsWith('[QUESTÃO'));
    const n = selectEssenciais(real, 5);
    total += n;
  }
  console.log(`✅ bmf4: ${total} questões promovidas a essencial`);
}

// ─── 6. mad2 — promover até 5 essenciais por aula (já tem 1-3) ───────────────
//    Preferimos questões originais (id < 4000) pois os de id > 4000 podem
//    ter conteúdo desalinhado.
{
  const grouped = groupByAula('mad2');
  let total = 0;
  for (const [aula, qs] of Object.entries(grouped)) {
    // Separa originais (mais confiáveis) de geradas recentes
    const original = qs.filter(q => !q.enunciado?.startsWith('[QUESTÃO') && q.id < 4000);
    const recent   = qs.filter(q => !q.enunciado?.startsWith('[QUESTÃO') && q.id >= 4000);
    // Ordena: primeiro as originais por score, depois as recentes
    const prioritized = [
      ...original.sort((a, b) => qualityScore(b) - qualityScore(a)),
      ...recent.sort((a, b) => qualityScore(b) - qualityScore(a)),
    ];
    const n = selectEssenciais(prioritized, 5);
    total += n;
  }
  console.log(`✅ mad2: ${total} questões promovidas a essencial`);
}

// ─── 7. bmf3 — promover até 5 essenciais por aula (já tem 2-4) ───────────────
{
  const grouped = groupByAula('bmf3');
  let total = 0;
  for (const [aula, qs] of Object.entries(grouped)) {
    const original = qs.filter(q => !q.enunciado?.startsWith('[QUESTÃO') && q.id < 4000);
    const recent   = qs.filter(q => !q.enunciado?.startsWith('[QUESTÃO') && q.id >= 4000);
    const prioritized = [
      ...original.sort((a, b) => qualityScore(b) - qualityScore(a)),
      ...recent.sort((a, b) => qualityScore(b) - qualityScore(a)),
    ];
    const n = selectEssenciais(prioritized, 5);
    total += n;
  }
  console.log(`✅ bmf3: ${total} questões promovidas a essencial`);
}

// ─── Salvar ───────────────────────────────────────────────────────────────────
writeFileSync(QUESTOES_PATH, JSON.stringify({ ...data, questoes }, null, 2), 'utf8');
console.log('\n✅ questoes.json salvo\n');

// ─── Relatório final por módulo 1-4 ──────────────────────────────────────────
const MOD14 = {
  1: ['sus','semiologia1','bmf1','pmh'],
  2: ['bmf2','semiologia2','mad1','bcm1','indicadores','ds'],
  3: ['bmf3','semiologia3','mad2','fisiopato3','saude_trabalhador'],
  4: ['bmf4','semiologia4','fisiopato_farmaco','bioestatistica'],
};

for (const [mod, mats] of Object.entries(MOD14)) {
  console.log(`\n=== MÓDULO ${mod} ===`);
  for (const mat of mats) {
    const byAula = {};
    for (const q of questoes) {
      if (q.materia !== mat) continue;
      const key = q.aula_id || '(none)';
      if (!byAula[key]) byAula[key] = { ess: 0, tot: 0 };
      byAula[key].tot++;
      if (q.essencial === true) byAula[key].ess++;
    }
    const issues = Object.entries(byAula).filter(([,v]) => v.ess < 5).sort(([a],[b]) => a.localeCompare(b));
    if (issues.length === 0) {
      const ok = Object.entries(byAula).filter(([k]) => k !== '(none)').length;
      console.log(`  ✅ ${mat} (${ok} aulas ok)`);
    } else {
      console.log(`  📋 ${mat}`);
      for (const [id, v] of issues) {
        const icon = v.ess === 0 ? '🔴' : v.ess <= 2 ? '🟠' : '🟡';
        console.log(`     ${icon} ${id}: ${v.ess}ess/${v.tot}tot`);
      }
    }
  }
}
