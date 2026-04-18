/**
 * trim_semio3_st_semio2_bmf3.mjs
 * Auditoria pedagógica: semio3 (6 aulas), st (8 aulas), semio2 (4 aulas excess), bmf3 (5 aulas excess)
 * Meta: 5–7 essenciais por aula teórica; 4–5 por aula prática (OSCE/simulação).
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
  // semio3_a1 (11→7): placeholders + misaligned pediatric + SOCRATES mnemônico
  4625, // crescimento infantil = misaligned para semio abdominal
  4626, // [QUESTÃO ESSENCIAL SEMIO3 4626] placeholder
  4627, // [QUESTÃO ESSENCIAL SEMIO3 4627] placeholder
  4634, // SOCRATES "R" = mnemônico detalhe (coberto em semio1)

  // semio3_a2 (8→6): Jobert=raro específico; técnica palpação=detalhe
  4639, // Sinal de Jobert = extrema especificidade, raro na prova
  4643, // começar palpação longe da dor = técnica detalhe operacional

  // semio3_a3 (8→7): oligúria <400ml = definição numérica detalhe
  4650, // oligúria <400ml/dia = detalhe numérico, clínica reconhece pelo contexto

  // semio3_a6 (7→5, OSCE prático): placeholders sem conteúdo real
  4671, // [QUESTÃO ESSENCIAL SEMIO3 4671] placeholder
  4672, // [QUESTÃO ESSENCIAL SEMIO3 4672] placeholder

  // st_a1 (10→7): toxicologia detalhes + NR número
  4561, // carvão ativado prazo ideal = detalhe numérico farmacologia
  4562, // lavagem gástrica contraindicação = detalhe técnico + artifact
  4565, // NR PCMSO = detalhe normativo número, menos clínico

  // st_a2 (8→6): NR números específicos
  4572, // NR proíbe reencape agulhas = detalhe de número normativo
  4579, // NR-32 vacinação gratuita = detalhe de obrigação específica

  // st_a3 (9→7): estrutura organizacional, sistema informação
  4581, // CEREST = estrutura organizacional SUS (coberto em sus)
  4583, // SINAN = sistema notificação = detalhe de sistema (sus overlap)

  // st_a4 (8→6): detalhes burocráticos redundantes
  4589, // readaptação LER = similar a 4594 (mudança de função)
  4590, // prazo emissão CAT = detalhe burocrático numérico

  // st_a5 (8→6): PGR detalhes normativos
  4598, // PGR substituiu qual programa = detalhe normativo histórico
  4603, // PGR como processo contínuo = similar ao conceito coberto

  // st_a6 (8→6): metodologia epidemiológica e burocracia previdenciária
  4607, // comparar taxas entre empresas diferentes = metodologia epidemiológica detalhe
  4611, // FAP = fator acidentário prevenção = detalhe previdenciário específico

  // st_a7 (8→6): tipos e prazo de CAT = detalhes burocráticos
  4616, // tipos de CAT (inicial/reabertura/óbito) = detalhe de nomenclatura
  4618, // prazo CAT sem óbito = detalhe burocrático numérico

  // semio2_a1 (8→6): EBM detalhe epidemiológico + caso redundante
  4039, // VPP muda com prevalência = epidemiologia detalhe (cobrado em bioe)
  4040, // caso dor torácica = aplicação redundante c/outras questões

  // semio2_a2 (8→6): overlap semio3 + detalhe percussão
  4045, // Giordano = coberto em semio3_a3 (4645)
  4048, // som maciço fora de área esperada = detalhe de interpretação

  // semio2_a3 (8→6): fisiológico detalhe + timing de sopro
  4053, // sopro sistólico entre B1-B2 = cronologia detalhe (diagnose por contexto)
  4055, // arritmia sinusal respiratória = detalhe fisiológico de jovens

  // semio2_a4 (8→6): definição trivial + técnica menos discriminativa
  4057, // som claro pulmonar = definição trivial d1 (coberto implicitamente)
  4059, // FTV avaliação = menos discriminativa que a questão de pneumotórax (4061)

  // bmf3_a1 (8→6): detalhes específicos do SNA
  4111, // receptores Nm placa motora = detalhe específico de neurofisiologia
  4112, // fibra pós-ganglionar simpática exceção (glândulas sudoríparas) = exceção detalhe

  // bmf3_a2 (8→6): fármacos específicos menos cobrados
  4115, // betanecol = retenção urinária/íleo = fármaco muito específico
  4116, // antagonista muscarínico cinetose = fármaco de viagem (escopolamina)

  // bmf3_a3 (8→6): fármacos adrenérgicos menos essenciais
  4125, // clonidina = agonista α2 = anti-hipertensivo específico detalhe
  4128, // xilometazolina/nafazolina = descongestionante OTC = detalhe produto

  // bmf3_a4 (8→6): COX-2 comparativo + dipirona específica
  4133, // COX-2 seletivo vantagem = comparativo coberto pelo contexto COX-1/2
  4136, // dipirona = pirazolônico = específico de farmacologia brasileira (detalhe)

  // bmf3_a5 (8→6): tramadol mecanismo duplo + codeína secundário
  4141, // tramadol = duplo mecanismo = detalhe específico de farmacologia
  4142, // codeína = antitussígeno = uso secundário menos testado
]);

// Fix trailing ), artifacts in KEPT questions
const FIX_TRAILING = new Set([
  4577, // st_a3: 'Atropinização' tratamento síndrome tóxica
  // semio2 kept questions with trailing ),
  4034, 4036, 4038,       // semio2_a1
  4041, 4044,             // semio2_a2
  4049, 4050, 4051, 4054, // semio2_a3
  4069, 4072,             // semio2_a6 (4 ess, below target, all kept)
  4084,                   // semio2_a8 (trailing ) only)
  4087,                   // semio2_a9
  // bmf3 kept questions with trailing ),
  4129, 4132,             // bmf3_a4
  4146,                   // bmf3_a6
  4149,                   // bmf3_a7
  4191,                   // bmf3_a12
  4221,                   // bmf3_a16
  4235,                   // bmf3_a18
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
console.log(`✅ Demotions: ${demotions} | Artifacts fixed: ${fixes}`);

for (const mat of ['semio3','st','semio2','bmf3']) {
  const byAula = {};
  for (const q of questoes) {
    if (q.materia !== mat) continue;
    if (!byAula[q.aula_id]) byAula[q.aula_id] = { ess: 0, tot: 0, diffs: [] };
    byAula[q.aula_id].tot++;
    if (q.essencial === true) { byAula[q.aula_id].ess++; byAula[q.aula_id].diffs.push(q.dificuldade); }
  }
  console.log(`\n--- ${mat} ---`);
  for (const [aula, s] of Object.entries(byAula)) {
    const ok = s.ess >= 4 && s.ess <= 7 ? '✅' : s.ess === 0 ? '🔴' : s.ess < 4 ? '🟡' : '🔵';
    console.log(`  ${ok} ${aula}: ${s.ess}/${s.tot} | [${s.diffs.join(',')}]`);
  }
}
