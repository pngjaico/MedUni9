/**
 * fix_template_essenciais.mjs
 * Substitui questões template nos essenciais por questões reais (mesmo d1)
 * onde há alternativa disponível.
 * semio4_a3 e ff4_a7: sem alternativa real → permanecem como estão.
 */

import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const QUESTOES_PATH = path.join(ROOT, 'data/questoes.json');

const data = JSON.parse(readFileSync(QUESTOES_PATH, 'utf8'));
const questoes = data.questoes;

// [templateId, realAlternativeId]
const SWAPS = [
  [1265, 1264], // ind_a5:   template → "Incidência:" d1
  [2259, 2255], // st_a5:    template → "PCMSO (NR-7)" d1
  [2277, 2273], // st_a7:    template → "Insalubridade" d1
  [2795, 2798], // semio4_a1: template → "Sinal alterno:" d1
  [2835, 2836], // semio4_a4: template → "Hipotonia:" d1
  [2675, 2676], // ff4_a11:  template → "Hiperaldosteronismo:" d1
  [2355, 2359], // bioe_a1:  template → "Parâmetro" d1
  [2365, 2364], // bioe_a10: template → "OR maior que 1:" d1
  [2390, 2386], // bioe_a12: template → "Nenhuma intervenção:" d1
  // semio4_a3 e ff4_a7: sem alternativa real disponível — mantidos
];

let demotions = 0, promotions = 0;
for (const [tplId, realId] of SWAPS) {
  const tpl  = questoes.find(q => q.id === tplId);
  const real = questoes.find(q => q.id === realId);
  if (tpl  && tpl.essencial === true)  { tpl.essencial  = false; demotions++; }
  if (real && real.essencial !== true) { real.essencial = true;  promotions++; }
}

writeFileSync(QUESTOES_PATH, JSON.stringify({ ...data, questoes }, null, 2), 'utf8');
console.log(`✅ Swaps: ${demotions} demotions + ${promotions} promotions`);
console.log('📝 semio4_a3 e ff4_a7: sem alternativa real — templates permanecem');

// Verificação final de templates remanescentes nos essenciais
const TEMPLATE = [
  /^Paciente em leito, equipe discute achados/i,
  /^Contexto de exame físico sistematizado com hallazgo/i,
  /^Cenário de equipe multiprofissional na UBS\./i,
  /^Idoso de \d+ anos, morador de área com rede de apoio/i,
  /^Adolescente de 16 anos, relata dor e limitação funcional/i,
];
const isTpl = e => TEMPLATE.some(p => p.test(e || ''));

const MOD14 = new Set(['sus','semiologia1','bmf1','pmh','bmf2','semiologia2','mad1','bcm1','indicadores','ds','bmf3','semiologia3','mad2','fisiopato3','saude_trabalhador','bmf4','semiologia4','fisiopato_farmaco','bioestatistica']);

const remaining = questoes.filter(q => MOD14.has(q.materia) && q.essencial === true && isTpl(q.enunciado));
console.log(`\n🔍 Templates remanescentes nos essenciais: ${remaining.length}`);
remaining.forEach(q => console.log(`  id:${q.id} ${q.materia} ${q.aula_id} — sem alternativa disponível`));
