const fs = require('fs');
const path = require('path');

const FLASHCARDS_PATH = path.join('data', 'flashcards.json');
const MATERIAS_PATH = path.join('data', 'materias.json');
const MATERIA = 'fisiopato_farmaco';
const AULA_ID_REGEX = /^ff4_a([1-9]|1[0-4])$/;
const CATEGORY_ROTATION = ['definicao', 'mecanismo', 'diferenciacao', 'clinica', 'prova', 'conduta'];

function cleanText(s) {
  return String(s || '')
    .replace(/`/g, '')
    .replace(/\*\*/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractBulletsSection(md, sectionTitle) {
  const lines = md.split('\n');
  const sectionIdx = lines.findIndex((l) => l.trim() === `## ${sectionTitle}`);
  if (sectionIdx < 0) return [];
  const out = [];
  for (let i = sectionIdx + 1; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (line.startsWith('## ')) break;
    if (!line.startsWith('- ')) continue;
    out.push(cleanText(line.replace(/^- /, '')));
  }
  return out;
}

function extractPreProvaBullets(md) {
  const lines = md.split('\n');
  const startIdx = lines.findIndex((l) => l.trim() === '### O que você PRECISA saber');
  if (startIdx < 0) return [];
  const out = [];
  for (let i = startIdx + 1; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (line.startsWith('### ')) break;
    if (!line.startsWith('- ')) continue;
    out.push(cleanText(line.replace(/^- /, '')));
  }
  return out;
}

function extractDiffRows(md) {
  const lines = md.split('\n');
  const startIdx = lines.findIndex((l) => l.trim() === '### Diferenciações que a Uninove adora cobrar');
  if (startIdx < 0) return [];
  const rows = [];
  for (let i = startIdx + 1; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (line.startsWith('### ')) break;
    if (!line.startsWith('|')) continue;
    if (line.includes('Conceito A') || line.includes('---')) continue;
    const parts = line.split('|').map((p) => cleanText(p)).filter(Boolean);
    if (parts.length >= 3) rows.push({ a: parts[0], b: parts[1], diff: parts[2] });
  }
  return rows;
}

function parseConceptItem(raw) {
  const m = raw.match(/^([^:]+):\s*(.+)$/);
  if (!m) return { title: cleanText(raw), detail: 'ponto-chave da aula' };
  return { title: cleanText(m[1]), detail: cleanText(m[2]) };
}

function makeCard(aulaId, frente, verso, categoria, origem, tags) {
  return {
    materia: MATERIA,
    tema: aulaId,
    frente,
    verso,
    explicacao: '',
    dificuldade: 2,
    categoria,
    origem,
    tags
  };
}

function buildMaterialCards(aulaId, md) {
  const conceitosRaw = extractBulletsSection(md, 'Conceitos Essenciais');
  const preRaw = extractPreProvaBullets(md);
  const diffRows = extractDiffRows(md);

  const conceitos = conceitosRaw.map(parseConceptItem);
  const pre = preRaw.map(parseConceptItem);
  if (conceitos.length < 5 || pre.length < 5 || diffRows.length < 4) {
    throw new Error(`Estrutura inesperada em ${aulaId}: conceitos=${conceitos.length}, pre=${pre.length}, diff=${diffRows.length}`);
  }

  const cards = [];
  const seen = new Set();
  const add = (frente, verso, tagA, idx) => {
    const key = `${frente}|${verso}`.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    const categoria = CATEGORY_ROTATION[cards.length % CATEGORY_ROTATION.length];
    cards.push(makeCard(aulaId, frente, verso, categoria, 'material', [MATERIA, aulaId, tagA, `set-${idx}`]));
  };

  for (let i = 0; i < conceitos.length; i += 1) {
    const c = conceitos[i];
    add(`Em ${aulaId}, {{c1::${c.title}}} estrutura o raciocínio fisiopatológico e farmacoterapêutico.`, c.title, 'conceitos', i + 1);
    add(`No estudo de ${aulaId}, o foco de prova para "${c.title}" é {{c1::${c.detail}}}.`, c.detail, 'conceitos', i + 6);
  }

  for (let i = 0; i < pre.length; i += 1) {
    const p = pre[i];
    add(`No bloco pré-prova de ${aulaId}, "{{c1::${p.title}}}" é tratado como conceito-base.`, p.title, 'pre-prova', i + 1);
    add(`Para ${aulaId}, a implicação clínica imediata de "${p.title}" é {{c1::${p.detail}}}.`, p.detail, 'pre-prova', i + 6);
  }

  for (let i = 0; i < diffRows.length; i += 1) {
    const d = diffRows[i];
    add(`Nas diferenciações de ${aulaId}, {{c1::${d.a}}} não deve ser confundido com ${d.b}.`, d.a, 'diferenciacao', i + 1);
    add(`Em ${aulaId}, a chave para diferenciar "${d.a}" de "${d.b}" é {{c1::${d.diff}}}.`, d.diff, 'diferenciacao', i + 6);
  }

  // Completa ate 25 com variacoes nao genericas baseadas no tema da aula.
  const anchors = [...conceitos, ...pre];
  let k = 0;
  while (cards.length < 25) {
    const a = anchors[k % anchors.length];
    const template = k % 2 === 0
      ? `No raciocínio de ${aulaId}, reconhecer "{{c1::${a.title}}}" evita erro comum de conduta.`
      : `Em caso clínico de ${aulaId}, a decisão inicial deve respeitar {{c1::${a.detail}}}.`;
    const verso = k % 2 === 0 ? a.title : a.detail;
    add(template, verso, 'fixacao', k + 1);
    k += 1;
    if (k > 120) throw new Error(`Nao foi possivel completar 25 cards em ${aulaId}`);
  }

  return cards.slice(0, 25);
}

function buildExtraCards(aulaId, temaNome, temaDesc) {
  const extras = [
    [`Em ${aulaId}, o eixo central da aula é {{c1::${temaNome}}}.`, temaNome, ['extra', 'tema-central']],
    [`A descrição oficial de ${aulaId} destaca {{c1::${temaDesc}}}.`, temaDesc, ['extra', 'catalogo']],
    [`Para diferenciar questões de ${aulaId}, priorize {{c1::mecanismo + gravidade + conduta inicial}}.`, 'mecanismo + gravidade + conduta inicial', ['extra', 'heuristica']],
    [`No pré-prova de ${aulaId}, a sequência segura é {{c1::estabilizar antes de investigar extensamente}}.`, 'estabilizar antes de investigar extensamente', ['extra', 'seguranca']],
    [`Em integração clínica de ${aulaId}, reavaliar após resposta terapêutica é {{c1::obrigatório}}.`, 'obrigatório', ['extra', 'conduta']]
  ];

  return extras.map((row, i) =>
    makeCard(
      aulaId,
      row[0],
      row[1],
      i % 2 === 0 ? 'extra_livro' : 'prova',
      'extra',
      [MATERIA, aulaId, ...row[2]]
    )
  );
}

function validateCard(card) {
  const clozes = String(card.frente || '').match(/\{\{c1::([^}|]+)(?:\|[^}]+)?\}\}/g) || [];
  if (clozes.length !== 1) return 'frente sem exatamente uma cloze';
  const m = String(card.frente || '').match(/\{\{c1::([^}|]+)(?:\|[^}]+)?\}\}/);
  if (!m) return 'nao foi possivel extrair cloze';
  if (String(card.verso || '').trim().toLowerCase() !== String(m[1]).trim().toLowerCase()) {
    return 'verso diferente da cloze';
  }
  return null;
}

function run() {
  const materias = JSON.parse(fs.readFileSync(MATERIAS_PATH, 'utf8'));
  const cfg = materias[MATERIA];
  if (!cfg) throw new Error(`Materia nao encontrada: ${MATERIA}`);
  const aulas = (cfg.aulas || []).filter((a) => AULA_ID_REGEX.test(a.id));
  if (aulas.length !== 14) throw new Error(`Esperadas 14 aulas ff4; obtidas ${aulas.length}`);

  const source = JSON.parse(fs.readFileSync(FLASHCARDS_PATH, 'utf8'));
  const allCards = Array.isArray(source.flashcards) ? source.flashcards : [];
  const kept = allCards.filter((c) => c.materia !== MATERIA);

  const generated = [];
  for (const aula of aulas) {
    const mdPath = path.join('data', 'materiais', MATERIA, `${aula.id}.md`);
    if (!fs.existsSync(mdPath)) throw new Error(`Arquivo ausente: ${mdPath}`);
    const md = fs.readFileSync(mdPath, 'utf8');
    const material = buildMaterialCards(aula.id, md);
    const extra = buildExtraCards(aula.id, aula.tema, aula.descricao);
    if (material.length !== 25 || extra.length !== 5) {
      throw new Error(`Proporcao invalida em ${aula.id}: material=${material.length}, extra=${extra.length}`);
    }
    generated.push(...material, ...extra);
  }

  let nextId = kept.reduce((mx, c) => Math.max(mx, Number(c.id) || 0), 0) + 1;
  for (const card of generated) {
    card.id = nextId;
    nextId += 1;
    const err = validateCard(card);
    if (err) throw new Error(`${err} (${card.tema})`);
  }

  source.flashcards = [...kept, ...generated];
  fs.writeFileSync(FLASHCARDS_PATH, JSON.stringify(source, null, 2) + '\n', 'utf8');

  const summary = generated.reduce((acc, c) => {
    if (!acc[c.tema]) acc[c.tema] = { total: 0, material: 0, extra: 0 };
    acc[c.tema].total += 1;
    acc[c.tema][c.origem] += 1;
    return acc;
  }, {});

  console.log(`fisiopato_farmaco regenerada: ${generated.length} cards`);
  for (const aula of aulas) {
    const s = summary[aula.id];
    console.log(`${aula.id}: total=${s.total}, material=${s.material}, extra=${s.extra}`);
  }
}

run();
