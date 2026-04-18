/**
 * trim_bmf2_essenciais.mjs
 * Auditoria pedagógica de bmf2 (16 aulas: cardio + respiratório + renal fisiologia/histologia)
 * Meta: 5–7 essenciais por aula.
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
  // a1: Nó SA localização=detalhe; veias pulm.=básico
  3604, 3608,
  // a2: túnica íntima trivial d1; vasa vasorum=detalhe
  3610, 3613,
  // a3: número Reynolds=física detalhe; velocidade/área=física básica
  3619, 3620,
  // a4: Fase 0 Na+=similar 3625; QRS>P=artifact+detalhe
  3626, 3632,
  // a5: Ejeção=trivial d1; B1=valvas=semiologia detalhe
  3633, 3635,
  // a6: PNA=detalhe; ADH=água=básico
  3646, 3648,
  // a7: diafragma=quase trivial d3; carina nível T4=detalhe
  3655, 3656,
  // a8: cartilagem traqueal=detalhe; barreira hemato-aérea=detalhe
  3659, 3664,
  // a9: expiração passiva=artifact+trivial; surfactante=artifact+coberto
  3666, 3672,
  // a10: hematose=difusão=trivial d1; mioglobina vs Hb curva=detalhe
  3673, 3679,
  // a11: bulbo=trivial d1; reflexo Hering-Breuer=detalhe reflexo
  3681, 3685,
  // a12: córtex/medula=artifact+trivial; trígono vesical=detalhe
  3690, 3692,
  // a13: TCP bordas em escova=detalhe histo; mácula densa localização=artifact
  3698, 3700,
  // a14: autorregulação mecanismo=detalhe; clearance creatinina=detalhe
  3706, 3712,
  // a15: SGLT+Na=detalhe molecular; mitocôndrias TCP=detalhe histo
  3714, 3718,
  // a16: vasa recta=mecanismo detalhe; ureia medular=detalhe
  3723, 3725,
]);

// Artifacts to fix in KEPT questions
const FIX_TRAILING = new Set([
  3630, // bmf2_a4 ECG onda P
  3634, // bmf2_a5 DC definição
  3674, // bmf2_a10 O2 transportado pela Hb
  3675, // bmf2_a10 CO2 como bicarbonato
  3688, // bmf2_a11 febre + respiração
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

const byAula = {};
for (const q of questoes) {
  if (q.materia !== 'bmf2') continue;
  if (!byAula[q.aula_id]) byAula[q.aula_id] = { ess: 0, tot: 0, diffs: [] };
  byAula[q.aula_id].tot++;
  if (q.essencial === true) { byAula[q.aula_id].ess++; byAula[q.aula_id].diffs.push(q.dificuldade); }
}
for (const [aula, s] of Object.entries(byAula)) {
  const ok = s.ess >= 5 && s.ess <= 7 ? '✅' : s.ess < 5 ? '🟡' : '🔵';
  console.log(`  ${ok} ${aula}: ${s.ess}/${s.tot} | [${s.diffs.join(',')}]`);
}
