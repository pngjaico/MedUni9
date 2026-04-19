/**
 * fix_bmf3_misalign.mjs
 * Corrige bmf3: as questões 4xxx são farmacologia mislabeled como anatomia/fisiologia.
 * As questões 200-407 são conteúdo cirúrgico/tcar mislabeled.
 * As questões 1600-1900 são o conteúdo correto do bmf3.
 *
 * Estratégia:
 * 1. Demote TODOS os essenciais 4xxx e 200-407 em bmf3
 * 2. Promove das questões 1xxx/2xxx (conteúdo real bmf3) até 5 por aula
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

let demotions = 0, promotions = 0;

// Passo 1: demote todos os essenciais 4xxx e 200-407 em bmf3
for (const q of questoes) {
  if (q.materia !== 'bmf3') continue;
  if (q.essencial !== true) continue;
  if (q.id >= 4000 || (q.id >= 200 && q.id <= 407)) {
    q.essencial = false;
    demotions++;
  }
}

// Passo 2: para cada aula bmf3, promover das questões 1xxx/2xxx até 5 essenciais
const aulas = [...new Set(questoes.filter(q => q.materia==='bmf3').map(q => q.aula_id).filter(Boolean))];

for (const aulaId of aulas) {
  // Contar essenciais restantes (só 1xxx/2xxx que ficaram do trim original)
  const current = questoes.filter(q => q.materia==='bmf3' && q.aula_id===aulaId && q.essencial===true);
  const needed = 5 - current.length;
  if (needed <= 0) continue;

  // Pool: questões 1xxx/2xxx não-essenciais e não-placeholder
  const pool = questoes.filter(q =>
    q.materia === 'bmf3' &&
    q.aula_id === aulaId &&
    q.essencial !== true &&
    !q.enunciado?.startsWith('[QUESTÃO') &&
    q.id >= 1000 && q.id < 4000
  );

  pool.sort((a, b) => qualityScore(b) - qualityScore(a));
  for (let i = 0; i < Math.min(needed, pool.length); i++) {
    pool[i].essencial = true;
    promotions++;
  }
}

writeFileSync(QUESTOES_PATH, JSON.stringify({ ...data, questoes }, null, 2), 'utf8');
console.log(`✅ Demotions: ${demotions} | Promotions: ${promotions}`);

// Verificação
console.log('\nResultado bmf3 por aula:');
for (const aulaId of aulas.sort()) {
  const ess = questoes.filter(q => q.materia==='bmf3' && q.aula_id===aulaId && q.essencial===true);
  const diffs = ess.map(q => 'd'+(q.dificuldade||1)).join(' ');
  const old1k = ess.filter(q => q.id < 4000).length;
  const new4k = ess.filter(q => q.id >= 4000).length;
  const icon = ess.length >= 5 ? '✅' : ess.length === 0 ? '🔴' : '🟡';
  console.log(' ', icon, aulaId+':', ess.length+'ess | 1k:'+old1k+' 4k:'+new4k+' | '+diffs);
}
