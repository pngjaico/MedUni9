const fs = require('fs');
const path = require('path');

const FLASHCARDS_PATH = path.join('data', 'flashcards.json');
const MATERIAS_PATH = path.join('data', 'materias.json');
const MATERIA = 'semiologia4';
const AULA_RX = /^semio4_a([1-9]|10)$/;

const CATEGORY_ROTATION = ['definicao', 'mecanismo', 'diferenciacao', 'clinica', 'prova'];
const STOPWORDS = new Set([
  'a', 'o', 'as', 'os', 'de', 'da', 'do', 'das', 'dos', 'e', 'em', 'no', 'na', 'nos', 'nas', 'para', 'por',
  'com', 'sem', 'que', 'como', 'ao', 'aos', 'um', 'uma', 'uns', 'umas', 'se', 'ou', 'sao', 'ser', 'mais',
  'menos', 'sobre', 'entre', 'nao', 'quando', 'onde', 'todo', 'toda', 'todos', 'todas', 'aula', 'disciplina',
  'modulo', 'clinica', 'neurologica', 'neurologico', 'neurologia', 'semiologia', 'paciente', 'exame'
]);

const extraByTema = {
  semio4_a1: [
    ['Na avaliação neurológica, o passo inicial é localizar a {{c1::topografia}} da lesão.', 'topografia', ['fundamentos', 'localizacao']],
    ['Sinal alterno combina achado de nervo craniano com déficit {{c1::contralateral}} em trato longo.', 'contralateral', ['tronco', 'sinal-alterno']],
    ['Fraqueza distal com hiporreflexia favorece padrão {{c1::periférico}}.', 'periférico', ['sindrome', 'periferico']],
    ['Dismetria e disdiadococinesia são típicas de síndrome {{c1::cerebelar}}.', 'cerebelar', ['cerebelo', 'coordenacao']],
    ['No padrão piramidal, o sinal plantar pode surgir em {{c1::extensão}}.', 'extensão', ['piramidal', 'reflexos']]
  ],
  semio4_a2: [
    ['Início súbito de déficit focal sugere etiologia {{c1::vascular}}.', 'vascular', ['anamnese', 'tempo']],
    ['Convulsão com aura seguida de confusão pós-ictal sugere crise {{c1::epiléptica}}.', 'epiléptica', ['anamnese', 'convulsao']],
    ['Na cefaleia, red flags como papiledema exigem investigação {{c1::urgente}}.', 'urgente', ['cefaleia', 'alarme']],
    ['Fraqueza progressiva em semanas favorece processo {{c1::subagudo}} ou crônico.', 'subagudo', ['anamnese', 'evolucao']],
    ['Uso de anticoagulante aumenta risco de complicação {{c1::hemorrágica}} em trauma craniano.', 'hemorrágica', ['risco', 'anamnese']]
  ],
  semio4_a3: [
    ['Na Escala de Glasgow, abertura ocular espontânea recebe {{c1::4}} pontos.', '4', ['consciencia', 'glasgow']],
    ['Reflexo fotomotor avalia integridade dos pares {{c1::II e III}}.', 'II e III', ['nervos-cranianos', 'pupila']],
    ['Paralisia facial central poupa a musculatura da testa por inervação {{c1::bilateral}}.', 'bilateral', ['nervo-facial', 'topografia']],
    ['Disfagia e disfonia podem indicar comprometimento bulbar dos pares {{c1::IX e X}}.', 'IX e X', ['degluticao', 'bulbo']],
    ['Diplopia horizontal com incapacidade de abdução sugere lesão do nervo {{c1::abducente}}.', 'abducente', ['nervos-cranianos', 'motricidade-ocular']]
  ],
  semio4_a4: [
    ['Na escala MRC, movimento contra gravidade sem resistência corresponde ao grau {{c1::3}}.', '3', ['forca', 'mrc']],
    ['Espasticidade é aumento de tônus dependente da {{c1::velocidade}} do movimento passivo.', 'velocidade', ['tonus', 'piramidal']],
    ['Arreflexia em membro fraco sugere lesão de neurônio motor {{c1::inferior}}.', 'inferior', ['reflexos', 'motor']],
    ['Hiperreflexia com clônus aponta comprometimento de via {{c1::corticoespinal}}.', 'corticoespinal', ['reflexos', 'piramidal']],
    ['Atrofia muscular associada a fasciculações sugere lesão de neurônio motor {{c1::periférico}}.', 'periférico', ['trofismo', 'nmi']]
  ],
  semio4_a5: [
    ['Prova dedo-nariz alterada com tremor de intenção sugere lesão {{c1::cerebelar}}.', 'cerebelar', ['cerebelo', 'provas']],
    ['Sensibilidade vibratória é testada com diapasão de {{c1::128 Hz}}.', '128 Hz', ['sensibilidade', 'propriocepcao']],
    ['Romberg positivo indica perda de aferência {{c1::proprioceptiva}}.', 'proprioceptiva', ['equilibrio', 'romberg']],
    ['Marcha atáxica com base alargada é compatível com síndrome {{c1::cerebelar}}.', 'cerebelar', ['marcha', 'cerebelo']],
    ['Hipoestesia em dermátomo específico sugere comprometimento {{c1::radicular}}.', 'radicular', ['sensibilidade', 'raiz']]
  ],
  semio4_a6: [
    ['No MEEM, orientação temporal e espacial integram avaliação {{c1::cognitiva}} global.', 'cognitiva', ['cognicao', 'triagem']],
    ['Afasia de Broca cursa com fala não fluente e compreensão relativamente {{c1::preservada}}.', 'preservada', ['linguagem', 'afasia']],
    ['Afasia de Wernicke apresenta fala fluente com prejuízo de {{c1::compreensão}}.', 'compreensão', ['linguagem', 'afasia']],
    ['Apraxia ideomotora é dificuldade em executar gesto sob {{c1::comando}}.', 'comando', ['praxia', 'cortical']],
    ['Comprometimento de memória episódica recente é marcador precoce de síndrome {{c1::amnésica}}.', 'amnésica', ['memoria', 'demencia']]
  ],
  semio4_a7: [
    ['Na síndrome extrapiramidal, a rigidez em roda denteada é achado clássico de {{c1::parkinsonismo}}.', 'parkinsonismo', ['extrapiramidal', 'clinica']],
    ['Síndrome piramidal típica associa fraqueza, hiperreflexia e sinal de {{c1::Babinski}}.', 'Babinski', ['piramidal', 'sindrome']],
    ['Heminegligência espacial sugere lesão no hemisfério {{c1::não dominante}}.', 'não dominante', ['sindrome', 'cortical']],
    ['Crise focal motora sem alteração de consciência pode ocorrer na epilepsia {{c1::focal}}.', 'focal', ['epilepsia', 'sindrome']],
    ['Demência com flutuação cognitiva e alucinações visuais sugere corpos de {{c1::Lewy}}.', 'Lewy', ['demencia', 'diagnostico']]
  ],
  semio4_a8: [
    ['Na suspeita de AVC hemorrágico agudo, o exame inicial mais disponível é a {{c1::tomografia}} de crânio.', 'tomografia', ['propedeutica', 'imagem']],
    ['EEG tem maior utilidade na avaliação de crises {{c1::epilépticas}}.', 'epilépticas', ['propedeutica', 'eeg']],
    ['Ressonância magnética é mais sensível para lesões de fossa {{c1::posterior}}.', 'posterior', ['propedeutica', 'rm']],
    ['Difusão na RM pode detectar isquemia cerebral em fase {{c1::precoce}}.', 'precoce', ['imagem', 'avc']],
    ['Punção lombar é complementar quando há suspeita de processo {{c1::meníngeo}}.', 'meníngeo', ['propedeutica', 'lcr']]
  ],
  semio4_a9: [
    ['No OSCE neurológico, checklist não substitui interpretação {{c1::sindrômica}}.', 'sindrômica', ['pratica', 'osce']],
    ['Em paciente padronizado com vertigem, diferenciar periferia e central depende do exame {{c1::oculomotor}}.', 'oculomotor', ['pratica', 'vertigem']],
    ['Durante simulação, comunicação clara antes da manobra melhora {{c1::adesão}} do paciente.', 'adesão', ['pratica', 'comunicacao']],
    ['Feedback estruturado após cenário deve incluir ponto forte e plano de {{c1::melhoria}}.', 'melhoria', ['pratica', 'debriefing']],
    ['No treino com manequim, repetição técnica aumenta precisão do exame {{c1::neurológico}}.', 'neurológico', ['pratica', 'habilidades']]
  ],
  semio4_a10: [
    ['No ambulatório, consentimento informado deve preceder qualquer exame {{c1::físico}}.', 'físico', ['pratica-real', 'etica']],
    ['Apresentação de caso ao preceptor deve incluir hipótese {{c1::topográfica}} e conduta inicial.', 'topográfica', ['pratica-real', 'raciocinio']],
    ['No seguimento de Parkinson, piora antes da próxima dose sugere fenômeno de {{c1::wearing off}}.', 'wearing off', ['ambulatório', 'parkinson']],
    ['Na epilepsia, orientação de segurança inclui evitar dirigir fora do prazo {{c1::legal}}.', 'legal', ['ambulatório', 'epilepsia']],
    ['Achado neurológico grave inesperado deve ser comunicado ao supervisor de forma {{c1::imediata}}.', 'imediata', ['ambulatório', 'seguranca']]
  ]
};

function normalizeText(s) {
  return String(s || '')
    .replace(/`+/g, '')
    .replace(/\*\*/g, '')
    .replace(/__/g, '')
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1')
    .replace(/^\s*>+\s?/gm, '')
    .replace(/\|/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function sentenceSplit(text) {
  return text
    .split(/(?<=[.!?;:])\s+/)
    .map((x) => normalizeText(x))
    .filter((x) => x.length >= 55 && x.length <= 220);
}

function pickKeyword(sentence) {
  const tokens = sentence.match(/[A-Za-zÀ-ÖØ-öø-ÿ0-9\-+/]{3,}/g) || [];
  const candidates = tokens
    .map((t) => t.replace(/[.,;:()]/g, ''))
    .filter((t) => t.length >= 4)
    .filter((t) => !STOPWORDS.has(t.toLowerCase()))
    .filter((t) => !/^\d+$/.test(t))
    .sort((a, b) => {
      const score = (v) => {
        let s = 0;
        if (/[A-Z]/.test(v)) s += 3;
        if (/\d/.test(v)) s += 2;
        if (v.length >= 8) s += 2;
        if (v.length >= 11) s += 1;
        return s;
      };
      return score(b) - score(a) || b.length - a.length;
    });
  return candidates[0] || null;
}

function makeCloze(sentence, keyword) {
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const rgx = new RegExp(`\\b${escaped}\\b`);
  if (!rgx.test(sentence)) return null;
  return sentence.replace(rgx, `{{c1::${keyword}}}`);
}

function readAulaMarkdown(aulaId) {
  const p1 = path.join('data', 'materiais', MATERIA, `${aulaId}.md`);
  const p2 = path.join('materiais', 'modulo4', MATERIA, `${aulaId}.md`);
  if (fs.existsSync(p1)) return fs.readFileSync(p1, 'utf8');
  if (fs.existsSync(p2)) return fs.readFileSync(p2, 'utf8');
  throw new Error(`Arquivo da aula ausente: ${aulaId}`);
}

function buildMaterialCards(aulaId, text) {
  const lines = text
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l)
    .filter((l) => !l.startsWith('#'))
    .filter((l) => !l.startsWith('---'))
    .filter((l) => !l.startsWith('|'))
    .filter((l) => !l.startsWith('**Figura-ID:**'));

  const raw = sentenceSplit(lines.join(' '));
  const seenFront = new Set();
  const cards = [];

  for (const sentence of raw) {
    if (cards.length >= 25) break;
    if (sentence.includes('{{c1::')) continue;
    if (/^\*\*/.test(sentence)) continue;
    const keyword = pickKeyword(sentence);
    if (!keyword) continue;
    const frente = makeCloze(sentence, keyword);
    if (!frente) continue;
    const matches = frente.match(/\{\{c1::[^}]+\}\}/g) || [];
    if (matches.length !== 1) continue;
    const norm = frente.toLowerCase().replace(/\s+/g, ' ');
    if (seenFront.has(norm)) continue;
    seenFront.add(norm);
    cards.push({
      materia: MATERIA,
      tema: aulaId,
      frente,
      verso: keyword,
      explicacao: '',
      dificuldade: 2,
      categoria: CATEGORY_ROTATION[cards.length % CATEGORY_ROTATION.length],
      origem: 'material',
      tags: [MATERIA, aulaId, `topico-${(cards.length % 5) + 1}`]
    });
  }

  if (cards.length < 25) {
    throw new Error(`Material insuficiente em ${aulaId}: ${cards.length}/25`);
  }
  return cards.slice(0, 25);
}

function buildExtraCards(aulaId) {
  const base = extraByTema[aulaId];
  if (!base || base.length !== 5) throw new Error(`Tema ${aulaId} sem 5 extras definidos`);
  return base.map((item, idx) => ({
    materia: MATERIA,
    tema: aulaId,
    frente: item[0],
    verso: item[1],
    explicacao: '',
    dificuldade: 2,
    categoria: idx % 2 === 0 ? 'extra_livro' : 'prova',
    origem: 'extra',
    tags: [MATERIA, aulaId, ...item[2]]
  }));
}

function validateCard(card) {
  const required = ['materia', 'tema', 'frente', 'verso', 'explicacao', 'dificuldade', 'categoria', 'origem', 'tags', 'id'];
  for (const key of required) {
    if (!(key in card)) return `Card sem campo ${key}`;
  }
  const cloze = String(card.frente).match(/\{\{c1::([^}|]+)(?:\|[^}]+)?\}\}/g) || [];
  if (cloze.length !== 1) return 'Card sem exatamente uma cloze';
  const picked = String(card.frente).match(/\{\{c1::([^}|]+)(?:\|[^}]+)?\}\}/);
  if (!picked || String(card.verso).trim().toLowerCase() !== String(picked[1]).trim().toLowerCase()) {
    return 'Verso diferente do preenchimento da cloze';
  }
  return null;
}

function run() {
  const materias = JSON.parse(fs.readFileSync(MATERIAS_PATH, 'utf8'));
  const aulas = (((materias || {})[MATERIA] || {}).aulas || [])
    .map((a) => a.id)
    .filter((id) => AULA_RX.test(id));

  if (aulas.length !== 10) throw new Error(`Esperadas 10 aulas de ${MATERIA}, obtidas ${aulas.length}`);

  const data = JSON.parse(fs.readFileSync(FLASHCARDS_PATH, 'utf8'));
  const current = Array.isArray(data.flashcards) ? data.flashcards : [];
  const kept = current.filter((c) => c.materia !== MATERIA);

  const generated = [];
  for (const aulaId of aulas) {
    const md = readAulaMarkdown(aulaId);
    const material = buildMaterialCards(aulaId, md);
    const extra = buildExtraCards(aulaId);
    if (material.length !== 25 || extra.length !== 5) {
      throw new Error(`Falha na proporcao ${aulaId}: material=${material.length}, extra=${extra.length}`);
    }
    generated.push(...material, ...extra);
  }

  let nextId = kept.reduce((mx, c) => Math.max(mx, Number(c.id) || 0), 0) + 1;
  generated.forEach((card) => {
    card.id = nextId++;
    const err = validateCard(card);
    if (err) throw new Error(`${err} em ${card.tema}`);
  });

  data.flashcards = [...kept, ...generated];
  fs.writeFileSync(FLASHCARDS_PATH, JSON.stringify(data, null, 2) + '\n', 'utf8');

  const summary = generated.reduce((acc, c) => {
    if (!acc[c.tema]) acc[c.tema] = { total: 0, material: 0, extra: 0 };
    acc[c.tema].total += 1;
    acc[c.tema][c.origem] += 1;
    return acc;
  }, {});

  console.log(`semiologia4 regenerada: ${generated.length} cards`);
  aulas.forEach((aulaId) => {
    const s = summary[aulaId];
    console.log(`${aulaId}: total=${s.total}, material=${s.material}, extra=${s.extra}`);
  });
}

run();
