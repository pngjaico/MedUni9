/**
 * fix_bmf4_pharma_bmf3a18.mjs
 *
 * bmf4: 6 questões de farmacologia (ISRS/benzos/levodopa/lítio) marcadas como
 *   essenciais em aulas de neuroanatomia pura (a1/a4/a7/a10/a13/a16).
 *   Fix: demover as 4k+ farmacológicas, promover melhor 2k-3k por aula.
 *
 * bmf3_a18: essencial id:1737 é template genérico. Há real em id:1736 (d1 on-topic).
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

// IDs a demovar explicitamente
const DEMOTE = new Set([
  4769, // bmf4_a1: ISRS — farmacologia, não divisão SN
  4793, // bmf4_a4: extrapiramidal — farmacologia, não crânio/fossas
  4817, // bmf4_a7: benzodiazepínicos — farmacologia, não diencéfalo
  4841, // bmf4_a10: anticonvulsivante/fenitoína — farmacologia, não medula
  4865, // bmf4_a13: levodopa/carbidopa — farmacologia, não nervos cranianos
  4889, // bmf4_a16: lítio — farmacologia, não sensibilidade geral
  1737, // bmf3_a18: template genérico — substituível por real
]);

let demotions = 0, promotions = 0;

// Demote explícito
for (const q of questoes) {
  if (DEMOTE.has(q.id) && q.essencial === true) {
    q.essencial = false;
    demotions++;
  }
}

// Promover 1 substituto 2k-3k para cada aula bmf4 afetada
const BMF4_AULAS = ['bmf4_a1','bmf4_a4','bmf4_a7','bmf4_a10','bmf4_a13','bmf4_a16'];
for (const aulaId of BMF4_AULAS) {
  const current = questoes.filter(q => q.materia==='bmf4' && q.aula_id===aulaId && q.essencial===true);
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

// Promover substituto para bmf3_a18
const bmf3a18Pool = questoes.filter(q =>
  q.materia === 'bmf3' &&
  q.aula_id === 'bmf3_a18' &&
  q.essencial !== true &&
  !q.enunciado?.startsWith('[QUESTÃO') &&
  q.id >= 1000 && q.id < 4000 &&
  !isTpl(q.enunciado)
);
bmf3a18Pool.sort((a, b) => qualityScore(b) - qualityScore(a));
if (bmf3a18Pool.length > 0) {
  bmf3a18Pool[0].essencial = true;
  promotions++;
}

writeFileSync(QUESTOES_PATH, JSON.stringify({ ...data, questoes }, null, 2), 'utf8');
console.log(`✅ Demotions: ${demotions} | Promotions: ${promotions}`);

// Verificação
console.log('\n── bmf4 aulas corrigidas ──');
for (const aulaId of BMF4_AULAS) {
  const ess = questoes.filter(q => q.materia==='bmf4' && q.aula_id===aulaId && q.essencial===true);
  const n4k = ess.filter(q=>q.id>=4000).length;
  const icon = ess.length>=5 && n4k===0 ? '✅' : ess.length>=5 ? '🟡' : '🔴';
  const diffs = ess.map(q=>'d'+(q.dificuldade||1)).join(' ');
  console.log(` ${icon} ${aulaId}: ${ess.length}ess | 4k:${n4k} | ${diffs}`);
  ess.forEach(q => console.log(`    id:${q.id} ${q.enunciado?.slice(0,70)}`));
}

console.log('\n── bmf3_a18 ──');
const bmf3a18 = questoes.filter(q => q.materia==='bmf3' && q.aula_id==='bmf3_a18' && q.essencial===true);
bmf3a18.forEach(q => console.log(` id:${q.id} d${q.dificuldade} tpl:${isTpl(q.enunciado)} | ${q.enunciado?.slice(0,80)}`));
