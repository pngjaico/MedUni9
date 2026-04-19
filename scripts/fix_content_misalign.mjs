/**
 * fix_content_misalign.mjs
 * Corrige questões essenciais com conteúdo fora de tema:
 *
 * bmf3_a11 (Histologia do Néfron): remove farmacologia (IECA/furosemida/CCB)
 *   → promove questões de histologia renal
 *
 * mad2_a7 (Exantemas Virais — Sarampo/Rubéola): remove ISTs (sífilis/corrimento)
 *   → promove questões sobre exantemas virais
 */

import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const QUESTOES_PATH = path.join(ROOT, 'data/questoes.json');

const data = JSON.parse(readFileSync(QUESTOES_PATH, 'utf8'));
const questoes = data.questoes;

const DEMOTE = new Set([
  // bmf3_a11: farmacologia (IECA, furosemida, bloqueadores canal Ca, IECAtossse)
  4185, // IECA mecanismo de ação
  4186, // Furosemida ação renal
  4187, // BCC (amlodipino/nifedipino)
  4188, // IECA → tosse seca em hipertenso diabético

  // mad2_a7: ISTs mislabeled como exantemas virais
  4443, // sífilis — úlcera indolor, chancre
  4444, // corrimento uretral sindrômico
]);

const PROMOTE = new Set([
  // bmf3_a11: histologia do néfron — glomerular
  1662, // "Glomérulo:" — estrutura glomerular d2
  1665, // "Podócito" — função, localização d2
  1669, // "Célula mesangial" — associação d3
  2902, // síndrome nefrótica em criança — albumina/proteinúria d2

  // mad2_a7: exantemas virais corretos
  2182, // criança não vacinada, febre, tosse, coriza → sarampo clássico d2
  2185, // surto escolar, baixa cobertura vacinal → diagnóstico diferencial d2
]);

let demotions = 0, promotions = 0;
for (const q of questoes) {
  if (DEMOTE.has(q.id) && q.essencial === true)  { q.essencial = false; demotions++; }
  if (PROMOTE.has(q.id) && q.essencial !== true) { q.essencial = true;  promotions++; }
}

writeFileSync(QUESTOES_PATH, JSON.stringify({ ...data, questoes }, null, 2), 'utf8');
console.log(`✅ Demotions: ${demotions} | Promotions: ${promotions}`);

// Verificação
for (const [mat, aula] of [['bmf3','bmf3_a11'],['mad2','mad2_a7']]) {
  const ess = questoes.filter(q => q.materia === mat && q.essencial === true && q.aula_id === aula);
  const diffs = ess.map(q => 'd'+(q.dificuldade||1)).join(' ');
  console.log(`\n${aula} (${ess.length} | ${diffs})`);
  ess.forEach(q => console.log(`  id:${q.id} d${q.dificuldade} ${q.enunciado?.slice(0,90)}`));
}
