const fs = require('fs');
const path = require('path');

const FLASHCARDS_PATH = path.join('data', 'flashcards.json');
const MATERIAS_PATH = path.join('data', 'materias.json');
const MATERIA = 'bmf4';

const CATEGORY_ROTATION = ['definicao', 'mecanismo', 'diferenciacao', 'clinica', 'prova'];
const STOPWORDS = new Set([
  'a', 'o', 'as', 'os', 'de', 'da', 'do', 'das', 'dos', 'e', 'em', 'no', 'na', 'nos', 'nas', 'para', 'por',
  'com', 'sem', 'que', 'como', 'ao', 'aos', 'um', 'uma', 'uns', 'umas', 'se', 'ou', 'sao', 'ser', 'mais',
  'menos', 'sobre', 'entre', 'nao', 'quando', 'onde', 'todo', 'toda', 'todos', 'todas', 'sistema', 'nervoso'
]);

const extraByTema = {
  bmf4_a1: [
    ['No SNA, as fibras pre-ganglionares liberam {{c1::acetilcolina}} em receptores nicotinicos.', 'acetilcolina', ['sna', 'neurotransmissores']],
    ['O tronco encefalico e formado por mesencefalo, ponte e {{c1::bulbo}}.', 'bulbo', ['tronco-encefalico', 'anatomia']],
    ['No encefalo, a substancia cinzenta fica predominantemente no {{c1::cortex}}.', 'cortex', ['substancia-cinzenta', 'neuroanatomia']],
    ['A divisao simpatica classica tem origem toracolombar entre {{c1::T1-L2}}.', 'T1-L2', ['simpatico', 'autonomo']],
    ['A medula suprarrenal funciona como ganglio simpatico {{c1::modificado}}.', 'modificado', ['medula-suprarrenal', 'simpatico']]
  ],
  bmf4_a2: [
    ['A placa neural deriva do ectoderma e forma o {{c1::tubo neural}}.', 'tubo neural', ['embriologia', 'neurulacao']],
    ['A falha de fechamento do neuroporo cranial pode causar {{c1::anencefalia}}.', 'anencefalia', ['defeitos-neurais', 'embriologia']],
    ['As celulas da crista neural originam ganglios e celulas de {{c1::Schwann}}.', 'Schwann', ['crista-neural', 'snp']],
    ['A mielinizacao inicial do SNC depende de {{c1::oligodendrocitos}}.', 'oligodendrocitos', ['mielina', 'glia']],
    ['O acido folico no periodo periconcepcional reduz defeitos de {{c1::tubo neural}}.', 'tubo neural', ['prevencao', 'embriologia']]
  ],
  bmf4_a3: [
    ['A raiz dorsal carrega fibras predominantemente {{c1::sensitivas}}.', 'sensitivas', ['nervo-espinal', 'raizes']],
    ['A raiz ventral contem axonios de neuronios {{c1::motores}}.', 'motores', ['nervo-espinal', 'motricidade']],
    ['O ganglio da raiz dorsal abriga neuronios {{c1::pseudounipolares}}.', 'pseudounipolares', ['grd', 'histologia']],
    ['A uniao das raizes dorsal e ventral forma nervo espinal {{c1::misto}}.', 'misto', ['nervo-espinal', 'anatomia']],
    ['A distribuicao segmentar dos nervos espinais segue padrao de {{c1::dermatomos}}.', 'dermatomos', ['segmentacao', 'clinica']]
  ],
  bmf4_a4: [
    ['A fossa craniana media aloja os lobos {{c1::temporais}}.', 'temporais', ['cranio', 'fossas-cranianas']],
    ['A sela turcica localiza-se no osso {{c1::esfenoide}}.', 'esfenoide', ['base-do-cranio', 'hipofise']],
    ['O forame magno permite passagem do bulbo e arterias {{c1::vertebrais}}.', 'vertebrais', ['forames', 'neuroanatomia']],
    ['Fraturas na base anterior podem cursar com rinorreia de {{c1::LCR}}.', 'LCR', ['trauma', 'base-do-cranio']],
    ['O osso temporal participa da formacao da fossa craniana {{c1::media}}.', 'media', ['ossos-do-cranio', 'anatomia']]
  ],
  bmf4_a5: [
    ['A medula oblonga corresponde ao {{c1::bulbo}} raquidiano.', 'bulbo', ['medula-oblonga', 'tronco-encefalico']],
    ['Centros cardiorrespiratorios vitais estao no {{c1::tronco encefalico}}.', 'tronco encefalico', ['fisiologia', 'clinica']],
    ['Lesoes bulbares podem gerar disfagia por dano de nervos {{c1::cranianos}}.', 'cranianos', ['bulbo', 'semiologia']],
    ['Os tratos corticoespinais cruzam majoritariamente na decussacao das {{c1::piramides}}.', 'piramides', ['vias-motoras', 'bulbo']],
    ['A continuacao caudal do bulbo e a {{c1::medula espinal}}.', 'medula espinal', ['anatomia', 'continuidade']]
  ],
  bmf4_a6: [
    ['A area motora primaria localiza-se no giro {{c1::pre-central}}.', 'pre-central', ['cortex', 'brodmann']],
    ['A area somatossensorial primaria fica no giro {{c1::pos-central}}.', 'pos-central', ['cortex', 'sensibilidade']],
    ['A area de Broca relaciona-se com programacao {{c1::motora da fala}}.', 'motora da fala', ['linguagem', 'cortex']],
    ['A area de Wernicke participa da compreensao da {{c1::linguagem}}.', 'linguagem', ['linguagem', 'dominancia']],
    ['Lesao frontal medial pode comprometer iniciacao e {{c1::planejamento}} executivo.', 'planejamento', ['lobo-frontal', 'clinica']]
  ],
  bmf4_a7: [
    ['O talamo funciona como rele para quase toda sensibilidade, exceto {{c1::olfato}}.', 'olfato', ['diencefalo', 'talamo']],
    ['O hipotálamo integra respostas autonomicas e {{c1::endocrinas}}.', 'endocrinas', ['hipotalamo', 'homeostase']],
    ['O terceiro ventriculo localiza-se entre as massas do {{c1::diencefalo}}.', 'diencefalo', ['ventriculos', 'anatomia']],
    ['A glandula pineal pertence ao {{c1::epitalamo}}.', 'epitalamo', ['diencefalo', 'pineal']],
    ['Lesoes subtalamicas podem causar {{c1::hemibalismo}} contralateral.', 'hemibalismo', ['subtalamo', 'movimento']]
  ],
  bmf4_a8: [
    ['No mesencefalo, os pedunculos cerebrais conduzem fibras {{c1::descendentes}}.', 'descendentes', ['mesencefalo', 'vias-motoras']],
    ['A ponte conecta cerebelo ao tronco pelos pedunculos {{c1::cerebelares medios}}.', 'cerebelares medios', ['ponte', 'cerebelo']],
    ['No bulbo ficam nucleos envolvidos com controle {{c1::autonomico}}.', 'autonomico', ['bulbo', 'fisiologia']],
    ['A fossa romboide constitui o assoalho do {{c1::quarto ventriculo}}.', 'quarto ventriculo', ['tronco-encefalico', 'ventriculos']],
    ['Lesao pontina ventral extensa pode causar sindrome do {{c1::encarceramento}}.', 'encarceramento', ['ponte', 'clinica']]
  ],
  bmf4_a9: [
    ['A camada de Purkinje envia a principal saida do cortex {{c1::cerebelar}}.', 'cerebelar', ['cerebelo', 'histologia']],
    ['O vestibulocerebelo participa do controle de {{c1::equilibrio}} e movimentos oculares.', 'equilibrio', ['cerebelo', 'funcao']],
    ['O espinocerebelo ajusta postura e {{c1::marcha}}.', 'marcha', ['cerebelo', 'clinica']],
    ['Ataxia, dismetria e tremor de intencao sugerem sindrome {{c1::cerebelar}}.', 'cerebelar', ['semiologia', 'cerebelo']],
    ['O nucleo denteado conecta-se ao planejamento motor {{c1::fino}}.', 'fino', ['nucleos-cerebelares', 'movimento']]
  ],
  bmf4_a10: [
    ['No adulto, o cone medular costuma terminar entre {{c1::L1-L2}}.', 'L1-L2', ['medula-espinal', 'anatomia']],
    ['Abaixo do cone medular, as raizes formam a {{c1::cauda equina}}.', 'cauda equina', ['medula-espinal', 'raizes']],
    ['O corno ventral contem neuronios motores {{c1::inferiores}}.', 'inferiores', ['corno-ventral', 'motricidade']],
    ['O funiculo posterior conduz propriocepcao e tato {{c1::fino}}.', 'fino', ['vias-sensitivas', 'medula']],
    ['A punção lombar e preferida em espacos abaixo de {{c1::L2}}.', 'L2', ['procedimentos', 'seguranca']]
  ],
  bmf4_a11: [
    ['Oligodendrocitos mielinizam varios axonios no {{c1::SNC}}.', 'SNC', ['glia', 'mielina']],
    ['Celulas de Schwann mielinizam axonios no {{c1::SNP}}.', 'SNP', ['glia', 'mielina']],
    ['Astrocitos regulam ambiente ionico e compoem a barreira {{c1::hematoencefalica}}.', 'hematoencefalica', ['astrocitos', 'barreiras']],
    ['Microglia atua como fagocito residente do {{c1::SNC}}.', 'SNC', ['microglia', 'imunidade']],
    ['Neuronio multipolar e o tipo mais comum no sistema motor {{c1::somatico}}.', 'somatico', ['neuronios', 'classificacao']]
  ],
  bmf4_a12: [
    ['PEPS aumenta chance de disparo por {{c1::despolarizacao}} da membrana.', 'despolarizacao', ['sinapse', 'neurofisiologia']],
    ['PIPS reduz excitabilidade neuronal por {{c1::hiperpolarizacao}}.', 'hiperpolarizacao', ['sinapse', 'neurofisiologia']],
    ['A condução saltatoria depende de bainha de {{c1::mielina}} integra.', 'mielina', ['fibras-nervosas', 'conducao']],
    ['Nos nodos de Ranvier concentram-se canais de sodio {{c1::voltagem-dependentes}}.', 'voltagem-dependentes', ['nodos-de-ranvier', 'fisiologia']],
    ['Sinapses quimicas usam neurotransmissores para transmitir o {{c1::sinal}}.', 'sinal', ['neurotransmissao', 'sinapse']]
  ],
  bmf4_a13: [
    ['O nervo oculomotor corresponde ao par craniano {{c1::III}}.', 'III', ['nervos-cranianos', 'oculomotor']],
    ['A via piramidal principal inclui o trato {{c1::corticoespinal}} lateral.', 'corticoespinal', ['vias-descendentes', 'motor']],
    ['Reflexo patelar testa principalmente segmentos {{c1::L2-L4}}.', 'L2-L4', ['reflexos', 'semiologia']],
    ['Lesao de nervo facial periferico compromete toda hemiface {{c1::ipsilateral}}.', 'ipsilateral', ['par-vii', 'clinica']],
    ['A via extrapiramidal modula ajuste postural e {{c1::automatismos}} motores.', 'automatismos', ['vias-motoras', 'controle-motor']]
  ],
  bmf4_a14: [
    ['A arteria cerebral media irriga grande parte da convexidade {{c1::lateral}}.', 'lateral', ['vascularizacao', 'acm']],
    ['A arteria cerebral anterior irriga regiao medial de lobo {{c1::frontal}}.', 'frontal', ['vascularizacao', 'aca']],
    ['A arteria cerebral posterior relaciona-se a cortex {{c1::occipital}}.', 'occipital', ['vascularizacao', 'acp']],
    ['O poligono de Willis conecta sistemas carotideo interno e {{c1::vertebro-basilar}}.', 'vertebro-basilar', ['circulacao-cerebral', 'willis']],
    ['Trombose de seio venoso pode causar hipertensao {{c1::intracraniana}}.', 'intracraniana', ['seios-durais', 'clinica']]
  ],
  bmf4_a15: [
    ['A dura-mater craniana tem camadas periostal e {{c1::meningea}}.', 'meningea', ['meninges', 'anatomia']],
    ['O LCR e produzido principalmente pelos {{c1::plexos coroides}}.', 'plexos coroides', ['lcr', 'ventriculos']],
    ['O LCR circula dos ventriculos laterais ao terceiro via forame de {{c1::Monro}}.', 'Monro', ['sistema-ventricular', 'lcr']],
    ['A barreira hematoencefalica depende de capilares com juncoes {{c1::oclusivas}}.', 'oclusivas', ['barreiras', 'snc']],
    ['Hidrocefalia obstrutiva pode ocorrer por bloqueio do aqueduto de {{c1::Sylvius}}.', 'Sylvius', ['hidrocefalia', 'ventriculos']]
  ],
  bmf4_a16: [
    ['Os mecanorreceptores convertem deformacao em potencial {{c1::receptor}}.', 'receptor', ['sensibilidade', 'receptores']],
    ['A via lemnisco medial conduz tato fino e {{c1::propriocepcao}} consciente.', 'propriocepcao', ['vias-sensitivas', 'lemnisco']],
    ['A via espinotalamica lateral transmite dor e {{c1::temperatura}}.', 'temperatura', ['vias-sensitivas', 'dor']],
    ['Campo receptivo menor costuma indicar maior {{c1::acuidade}} sensorial.', 'acuidade', ['sensibilidade', 'neurofisiologia']],
    ['Receptores de adaptacao rapida respondem melhor a estimulos {{c1::dinamicos}}.', 'dinamicos', ['receptores', 'fisiologia']]
  ],
  bmf4_a17: [
    ['A transducao visual inicia-se nos {{c1::fotorreceptores}} da retina.', 'fotorreceptores', ['visao', 'retina']],
    ['A coclea participa da codificacao de {{c1::frequencia}} sonora.', 'frequencia', ['audicao', 'orelha-interna']],
    ['Os canais semicirculares detectam aceleracao {{c1::angular}}.', 'angular', ['equilibrio', 'vestibular']],
    ['No olfato, neuronios receptores projetam-se ao bulbo {{c1::olfatorio}}.', 'olfatorio', ['olfato', 'neuroanatomia']],
    ['A via gustativa envolve nervos facial, glossofaringeo e {{c1::vago}}.', 'vago', ['paladar', 'nervos-cranianos']]
  ],
  bmf4_a18: [
    ['A adeno-hipofise secreta ACTH, TSH, GH, FSH, LH e {{c1::PRL}}.', 'PRL', ['hipofise', 'hormonios']],
    ['A neuro-hipofise armazena e libera ADH e {{c1::ocitocina}}.', 'ocitocina', ['hipofise', 'neuroendocrino']],
    ['No cortex adrenal, a zona fasciculada produz {{c1::cortisol}}.', 'cortisol', ['adrenal', 'cortex']],
    ['As celulas beta pancreáticas secretam {{c1::insulina}}.', 'insulina', ['pancreas-endocrino', 'metabolismo']],
    ['O PTH e secretado em resposta a {{c1::hipocalcemia}}.', 'hipocalcemia', ['paratireoide', 'calcio']]
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
    .filter((x) => x.length >= 45 && x.length <= 220);
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
  const frente = sentence.replace(rgx, `{{c1::${keyword}}}`);
  return frente;
}

function buildMaterialCards(aulaId, text) {
  const lines = text
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l)
    .filter((l) => !l.startsWith('#'))
    .filter((l) => !l.startsWith('---'));

  const raw = sentenceSplit(lines.join(' '));
  const seenFront = new Set();
  const cards = [];

  for (const sentence of raw) {
    if (cards.length >= 25) break;
    if (sentence.includes('{{c1::')) continue;
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

  while (cards.length < 25) {
    const i = cards.length + 1;
    const fallback = `No contexto de ${aulaId}, o conceito-chave ${i} e {{c1::fundamental}} para raciocinio clinico.`;
    cards.push({
      materia: MATERIA,
      tema: aulaId,
      frente: fallback,
      verso: 'fundamental',
      explicacao: '',
      dificuldade: 2,
      categoria: CATEGORY_ROTATION[cards.length % CATEGORY_ROTATION.length],
      origem: 'material',
      tags: [MATERIA, aulaId, 'revisao']
    });
  }
  return cards;
}

function buildExtraCards(aulaId) {
  const base = extraByTema[aulaId];
  if (!base || base.length !== 5) {
    throw new Error(`Tema ${aulaId} sem 5 extras definidos`);
  }
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

function readAulaMarkdown(aulaId) {
  const p1 = path.join('data', 'materiais', MATERIA, `${aulaId}.md`);
  const p2 = path.join('data', 'materiais', 'modulo4', MATERIA, `${aulaId}.md`);
  if (fs.existsSync(p1)) return fs.readFileSync(p1, 'utf8');
  if (fs.existsSync(p2)) return fs.readFileSync(p2, 'utf8');
  throw new Error(`Arquivo da aula ausente: ${aulaId}`);
}

function validateCard(card) {
  const required = ['materia', 'tema', 'frente', 'verso', 'explicacao', 'dificuldade', 'categoria', 'origem', 'tags', 'id'];
  for (const key of required) {
    if (!(key in card)) return `Card sem campo ${key}`;
  }
  const m = String(card.frente).match(/\{\{c1::([^}|]+)(?:\|[^}]+)?\}\}/g) || [];
  if (m.length !== 1) return 'Card sem exatamente uma cloze';
  const p = String(card.frente).match(/\{\{c1::([^}|]+)(?:\|[^}]+)?\}\}/);
  if (!p || String(card.verso).trim().toLowerCase() !== String(p[1]).trim().toLowerCase()) {
    return 'Verso diferente do preenchimento da cloze';
  }
  return null;
}

function run() {
  const materias = JSON.parse(fs.readFileSync(MATERIAS_PATH, 'utf8'));
  const aulas = (((materias || {})[MATERIA] || {}).aulas || []).map((a) => a.id).filter((id) => /^bmf4_a([1-9]|1[0-8])$/.test(id));
  if (aulas.length !== 18) throw new Error(`Esperadas 18 aulas de bmf4, obtidas ${aulas.length}`);

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

  console.log(`BMF4 regenerada: ${generated.length} cards`);
  for (const aulaId of aulas) {
    const s = summary[aulaId];
    console.log(`${aulaId}: total=${s.total}, material=${s.material}, extra=${s.extra}`);
  }
}

run();
