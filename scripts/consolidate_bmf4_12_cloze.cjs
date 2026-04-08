const fs = require('fs');

const FLASHCARDS_PATH = 'data/flashcards.json';
const BLOCK_PATHS = [
  'scripts/tmp_bmf4_block1.json',
  'scripts/tmp_bmf4_block2.json',
  'scripts/tmp_bmf4_block3.json'
];

const ALLOWED_CATEGORIES = new Set([
  'definicao',
  'mecanismo',
  'clinica',
  'diferenciacao',
  'prova',
  'extra_livro'
]);

const META_REGEX = /(na aula|no material|este conteudo|esse conteudo|nesta aula|desta aula|do material)/i;
const CLOZE_REGEX = /\{\{c1::([^}|]+)(?:\|[^}]+)?\}\}/g;

function normalizeDifficulty(raw) {
  if (typeof raw === 'number') {
    if (raw < 1) return 1;
    if (raw > 3) return 3;
    return raw;
  }
  const t = String(raw || '').trim().toLowerCase();
  if (t === 'facil' || t === 'fácil') return 1;
  if (t === 'dificil' || t === 'difícil') return 3;
  return 2;
}

function normalizeCategory(cat, origem, frente) {
  if (origem === 'extra') return 'extra_livro';
  const t = String(cat || '').trim().toLowerCase();
  if (ALLOWED_CATEGORIES.has(t)) return t;
  if (t.includes('clin')) return 'clinica';
  if (t.includes('mecan') || t.includes('fisiol') || t.includes('neurofisi')) return 'mecanismo';
  if (t.includes('dif')) return 'diferenciacao';
  if (t.includes('def')) return 'definicao';
  if (frente.includes('pegadinha') || frente.includes('clássico') || frente.includes('prova')) return 'prova';
  return 'prova';
}

function readBlock(path) {
  return JSON.parse(fs.readFileSync(path, 'utf8'));
}

const blockCards = BLOCK_PATHS.flatMap(readBlock);

const normalized = blockCards.map((c) => {
  const origem = c.origem === 'extra' ? 'extra' : 'material';
  return {
    materia: 'bmf4',
    tema: c.tema,
    frente: String(c.frente || '').trim(),
    verso: String(c.verso || '').trim(),
    explicacao: String(c.explicacao || '').trim(),
    dificuldade: normalizeDifficulty(c.dificuldade),
    categoria: normalizeCategory(c.categoria, origem, String(c.frente || '')),
    origem,
    tags: Array.isArray(c.tags) ? c.tags.slice(0, 4) : []
  };
});

const byTema = normalized.reduce((acc, c) => {
  if (!acc[c.tema]) acc[c.tema] = [];
  acc[c.tema].push(c);
  return acc;
}, {});

const temas = Object.keys(byTema).sort((a, b) => a.localeCompare(b, 'pt-BR', { numeric: true }));

for (const tema of temas) {
  const list = byTema[tema];
  if (list.length !== 12) throw new Error(`Tema ${tema} com ${list.length} cards (esperado 12)`);
  const nMaterial = list.filter((x) => x.origem === 'material').length;
  const nExtra = list.filter((x) => x.origem === 'extra').length;
  if (nMaterial !== 10 || nExtra !== 2) throw new Error(`Tema ${tema} proporcao invalida material/extra: ${nMaterial}/${nExtra}`);
  for (const card of list) {
    const clozes = [...card.frente.matchAll(CLOZE_REGEX)];
    if (clozes.length !== 1) throw new Error(`Cloze invalida em ${tema}: ${card.frente}`);
    const lacuna = clozes[0][1].trim();
    if (card.verso.trim().toLowerCase() !== lacuna.toLowerCase()) {
      throw new Error(`Verso difere da lacuna em ${tema}: "${card.verso}" vs "${lacuna}"`);
    }
    if (card.frente.includes('?')) throw new Error(`Formato pergunta detectado em ${tema}: ${card.frente}`);
    if (META_REGEX.test(card.frente) || META_REGEX.test(card.explicacao)) {
      throw new Error(`Metalinguagem detectada em ${tema}`);
    }
    if (!ALLOWED_CATEGORIES.has(card.categoria)) {
      throw new Error(`Categoria fora do padrao em ${tema}: ${card.categoria}`);
    }
  }
}

const flashRaw = JSON.parse(fs.readFileSync(FLASHCARDS_PATH, 'utf8'));
const existing = Array.isArray(flashRaw.flashcards) ? flashRaw.flashcards : [];
const kept = existing.filter((c) => c.materia !== 'bmf4');
let nextId = kept.reduce((max, c) => Math.max(max, Number(c.id) || 0), 0) + 1;
normalized.forEach((c) => {
  c.id = nextId++;
});

flashRaw.flashcards = [...kept, ...normalized];
fs.writeFileSync(FLASHCARDS_PATH, JSON.stringify(flashRaw, null, 2) + '\n', 'utf8');

console.log(`bmf4 consolidado com ${normalized.length} cards (${temas.length} temas).`);
