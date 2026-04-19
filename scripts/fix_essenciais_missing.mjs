/**
 * fix_essenciais_missing.mjs
 * Completa essenciais para materias que ficaram de fora do script anterior:
 * semiologia2, indicadores, semiologia3, fisiopato3, saude_trabalhador, bmf1
 * Mesmo critério: dificuldade DESC + penalidade template → top 6 por aula.
 */

import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const QUESTOES_PATH = path.join(ROOT, 'data/questoes.json');

const data = JSON.parse(readFileSync(QUESTOES_PATH, 'utf8'));
const questoes = data.questoes;

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

function qualityScore(q) {
  const d = (q.dificuldade || 1) * 10;
  const t = isTemplate(q.enunciado) ? -15 : 0;
  const l = Math.min((q.enunciado || '').length * 0.01, 3);
  return d + t + l;
}

function groupByAula(materia) {
  const map = {};
  for (const q of questoes) {
    if (q.materia !== materia) continue;
    const key = q.aula_id || q.tema || '(none)';
    if (!map[key]) map[key] = [];
    map[key].push(q);
  }
  return map;
}

function selectEssenciais(questions, target = 6) {
  const kept = questions.filter(q => q.essencial === true);
  const remaining = questions.filter(q => q.essencial !== true && !q.enunciado?.startsWith('[QUESTÃO'));
  const toPromote = target - kept.length;
  if (toPromote <= 0) return 0;
  remaining.sort((a, b) => qualityScore(b) - qualityScore(a));
  let promoted = 0;
  for (let i = 0; i < Math.min(toPromote, remaining.length); i++) {
    remaining[i].essencial = true;
    promoted++;
  }
  for (let i = Math.min(toPromote, remaining.length); i < remaining.length; i++) {
    if (remaining[i].essencial === undefined) remaining[i].essencial = false;
  }
  return promoted;
}

// Materias com questões reais mas sem essencial definido
const TARGETS = {
  'semiologia2': 6,
  'indicadores': 6,
  'semiologia3': 6,
  'fisiopato3':  6,
  'saude_trabalhador': 6,
  'bmf1': 5,  // bmf1 já tem bastante; só completa onde falta
};

let grandTotal = 0;
for (const [mat, target] of Object.entries(TARGETS)) {
  const grouped = groupByAula(mat);
  let matTotal = 0;
  for (const [aula, qs] of Object.entries(grouped)) {
    if (aula === '(none)') continue;
    const n = selectEssenciais(qs, target);
    matTotal += n;
  }
  grandTotal += matTotal;
  console.log(`✅ ${mat}: ${matTotal} promovidas`);
}

writeFileSync(QUESTOES_PATH, JSON.stringify({ ...data, questoes }, null, 2), 'utf8');
console.log(`\n✅ questoes.json salvo | total promovidas: ${grandTotal}\n`);

// Auditoria final módulos 1-4
const MOD14 = {
  1: ['sus','semiologia1','bmf1','pmh'],
  2: ['bmf2','semiologia2','mad1','bcm1','indicadores','ds'],
  3: ['bmf3','semiologia3','mad2','fisiopato3','saude_trabalhador'],
  4: ['bmf4','semiologia4','fisiopato_farmaco','bioestatistica'],
};

let totalOk = 0, totalIssues = 0;
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
    const entries = Object.entries(byAula).filter(([k]) => k !== '(none)');
    const issues = entries.filter(([,v]) => v.ess < 5);
    if (issues.length === 0) {
      console.log(`  ✅ ${mat} (${entries.length} aulas)`);
      totalOk += entries.length;
    } else {
      console.log(`  📋 ${mat}`);
      for (const [id, v] of issues.sort(([a],[b]) => a.localeCompare(b))) {
        const icon = v.ess === 0 ? '🔴' : v.ess <= 2 ? '🟠' : '🟡';
        console.log(`     ${icon} ${id}: ${v.ess}ess/${v.tot}tot`);
        totalIssues++;
      }
    }
  }
}
console.log(`\n📊 Resumo: ${totalOk} aulas ✅ | ${totalIssues} aulas ainda abaixo do target`);
