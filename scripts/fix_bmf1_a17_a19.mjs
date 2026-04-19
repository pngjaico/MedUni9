/**
 * fix_bmf1_a17_a19.mjs
 * Corrige questões essenciais fora de tema em bmf1_a17, a18, a19
 * e melhora o mix de dificuldade.
 *
 * bmf1_a17 (Boca/Língua/Glândulas): remove 3132 (plaquetas=sangue), promove 1056 d2
 * bmf1_a18 (Parede Abdominal): remove 3140 (esmalte dente) e 3143 (mandíbula), promove 1063+1065
 * bmf1_a19 (Intestinos): remove 3150 (esôfago) e 3152 (glândulas gástricas), promove 1075+1078
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
  3132, // bmf1_a17: plaquetas (é histologia do sangue, não boca/língua)
  3140, // bmf1_a18: esmalte do dente (pertence à aula de boca, não parede abdominal)
  3143, // bmf1_a18: fratura de mandíbula (boca, não parede abdominal)
  3150, // bmf1_a19: epitélio esôfago vs estômago (TGI superior, não intestinos)
  3152, // bmf1_a19: glândulas gástricas (estômago, não intestinos)
]);

const PROMOTE = new Set([
  // bmf1_a17: inervação língua/faringe d2 → mix d2+d3
  1056, // "Qual a relação anatômica crítica entre Nervo Facial (VII) e glândula Parótida"
  // bmf1_a18: Hesselbach d2 + peritônio d3 → mix
  1063, // "Triângulo de Hesselbach — áreas de fraqueza, hérnia direta" d2
  1065, // "Peritônio Parietal vs Visceral — percepção de dor" d3
  // bmf1_a19: vilosidades d2 + apendicectomia d3
  1075, // "especialização da mucosa do Intestino Delgado — vilosidades" d2
  1078, // "apendicectomia — estrutura anatômica para localizar apêndice" d3
]);

let demotions = 0, promotions = 0;
for (const q of questoes) {
  if (DEMOTE.has(q.id) && q.essencial === true)  { q.essencial = false; demotions++; }
  if (PROMOTE.has(q.id) && q.essencial !== true) { q.essencial = true;  promotions++; }
}

writeFileSync(QUESTOES_PATH, JSON.stringify({ ...data, questoes }, null, 2), 'utf8');
console.log(`✅ Demotions: ${demotions} | Promotions: ${promotions}`);

// Verificação
for (const aula of ['bmf1_a17','bmf1_a18','bmf1_a19']) {
  const ess = questoes.filter(q => q.materia === 'bmf1' && q.aula_id === aula && q.essencial === true);
  const diffs = ess.map(q => 'd' + (q.dificuldade || 1)).join(',');
  console.log(`\n${aula} (${ess.length} essenciais | diffs: ${diffs})`);
  ess.forEach(q => console.log(`  id:${q.id} d${q.dificuldade} ${q.enunciado?.slice(0,75)}`));
}
