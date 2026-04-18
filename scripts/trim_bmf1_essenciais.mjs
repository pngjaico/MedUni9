/**
 * trim_bmf1_essenciais.mjs
 * Auditoria pedagógica das essenciais de bmf1 (22 aulas).
 *
 * ⚠ ALINHAMENTO: Detectado swap sistemático de conteúdo:
 *   bmf1_a17 (Boca/Língua/Glândulas): questões são sobre CÉLULAS DO SANGUE → misaligned
 *   bmf1_a18 (Parede Abdominal): questões são sobre LÍNGUA/DENTES → misaligned
 *   bmf1_a19 (Intestinos): questões são sobre ESÔFAGO/ESTÔMAGO HISTOLOGIA → misaligned
 *   → Todas rebaixadas; essas aulas precisarão de novas questões (Fase 3).
 *
 * Decisões por aula (alinhadas ao .md e critérios em prompts/criterios_essencial.md):
 * a1→6: demote 3004(redundante c/3003), 3007(polegar detalhe)
 * a2→6: demote 3013(neuroglia=bmf4 topic), 3015(conj.frouxo vs denso=detalhe)
 * a3→6: demote 3018(sesamoide=classif.detalhe), 3024(função protetora=trivial)
 * a4→6: demote 3028(GAGs molecular=detalhe), 3030(adiposo=trivial)
 * a5→7: demote 3040(Canais Volkmann=detalhe específico)
 * a6→6: demote 3044(trocânter posterolateral=detalhe), 3048(apófise torácica=detalhe)
 * a7→6: demote 3054(fibrocartilagem intra-articular=detalhe), 3055(sindesmose=detalhe)
 * a8→6: demote 3061(pericôndrio=redundante c/3059), 3062(crescimento intersticial=classif.)
 * a9→6: demote 3070(manguito=muscular, fora do escopo articular), 3072(gomfose=detalhe)
 * a10→6: demote 3074(penada vs paralela=biomecânica detalhe), 3078(origem/inserção=terminologia)
 * a11→6: demote 3082(tríade=detalhe histológico), 3088(músculo liso sem estriação=trivial)
 * a12→6: demote 3093(3 papéis do ATP=detalhe), 3096(teoria filamentos=redundante)
 * a13→6: demote 3100(grande dorsal=detalhe anatômico), 3103(fibular=detalhe)
 * a14→6: demote 3109(estrato granuloso=detalhe histo), 3111(pele espessa=comparativo detalhe)
 * a15→6: demote 3117(ácinos coloração=detalhe histo), 3119(endócrina vs exócrina=repetição)
 * a16→5: demote 3123(reticulares=específico), 3124(frouxo=detalhe), 3126(mucoso=raro)
 * a17→0: DEMOTE TODAS - conteúdo é células do sangue, não boca/língua
 * a18→0: DEMOTE TODAS - conteúdo é língua/dentes, não parede abdominal
 * a19→0: DEMOTE TODAS - conteúdo é esôfago/estômago histologia, não intestinos
 * a20→6: demote 3157(características externas cólon=visual), 3160(esfíncteres=detalhe)
 * a21→6: demote 3162(porta hepática disposição=detalhe), 3168(baço=off-topic)
 * a22→6: demote 3173(piloro espessamento=detalhe técnico), 3174(pâncreas nível vertebral=detalhe)
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
  // a1
  3004, 3007,
  // a2
  3013, 3015,
  // a3
  3018, 3024,
  // a4
  3028, 3030,
  // a5
  3040,
  // a6
  3044, 3048,
  // a7
  3054, 3055,
  // a8
  3061, 3062,
  // a9
  3070, 3072,
  // a10
  3074, 3078,
  // a11
  3082, 3088,
  // a12
  3093, 3096,
  // a13
  3100, 3103,
  // a14
  3109, 3111,
  // a15
  3117, 3119,
  // a16
  3123, 3124, 3126,
  // a17 - misaligned: blood cells not mouth/tongue
  3129, 3130, 3131, 3132, 3133, 3134, 3135, 3136,
  // a18 - misaligned: tongue/teeth not abdominal wall
  3137, 3138, 3139, 3140, 3141, 3142, 3143, 3144,
  // a19 - misaligned: esophagus/stomach histology not intestines
  3145, 3146, 3147, 3148, 3149, 3150, 3151, 3152,
  // a20
  3157, 3160,
  // a21
  3162, 3168,
  // a22
  3173, 3174,
]);

let demotions = 0;
for (const q of questoes) {
  if (REBAIXAR.has(q.id) && q.essencial === true) { q.essencial = false; demotions++; }
}

writeFileSync(QUESTOES_PATH, JSON.stringify({ ...data, questoes }, null, 2), 'utf8');
console.log(`✅ Demotions: ${demotions}`);

const byAula = {};
for (const q of questoes) {
  if (q.materia !== 'bmf1') continue;
  if (!byAula[q.aula_id]) byAula[q.aula_id] = { ess: 0, tot: 0 };
  byAula[q.aula_id].tot++;
  if (q.essencial === true) byAula[q.aula_id].ess++;
}
let warnings = 0;
for (const [aula, s] of Object.entries(byAula)) {
  const ok = s.ess >= 4 && s.ess <= 7 ? '✅' : s.ess === 0 ? '🔴' : s.ess < 4 ? '🟡' : '🔵';
  if (s.ess === 0) warnings++;
  console.log(`  ${ok} ${aula}: ${s.ess}/${s.tot}`);
}
if (warnings) console.log(`\n⚠ ${warnings} aulas com 0 essenciais (misaligned content — precisam de novas questões na Fase 3)`);
