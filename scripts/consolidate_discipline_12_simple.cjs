const fs = require('fs');

const [materia, blockFilesRaw] = process.argv.slice(2);
if (!materia || !blockFilesRaw) {
  console.error('Uso: node scripts/consolidate_discipline_12_simple.cjs <materia> <arquivo1,arquivo2,...>');
  process.exit(1);
}

const FLASHCARDS_PATH = 'data/flashcards.json';
const MATERIAS_PATH = 'data/materias.json';
const blockFiles = blockFilesRaw.split(',').map((x) => x.trim()).filter(Boolean);

const ALLOWED_CATEGORIES = new Set([
  'definicao',
  'mecanismo',
  'clinica',
  'diferenciacao',
  'prova',
  'extra_livro'
]);
const CLOZE_REGEX = /\{\{c1::([^}|]+)(?:\|[^}]+)?\}\}/g;
const META_REGEX = /(na aula|no material|este conteudo|esse conteudo|nesta aula|desta aula|do material)/i;

function normalizeDifficulty(raw) {
  if (typeof raw === 'number') return raw <= 1 ? 1 : raw >= 3 ? 2 : raw;
  const t = String(raw || '').trim().toLowerCase();
  if (t === 'facil' || t === 'fácil') return 1;
  return 2;
}

function normalizeCategory(cat, origem) {
  if (origem === 'extra') return 'extra_livro';
  const t = String(cat || '').trim().toLowerCase();
  if (ALLOWED_CATEGORIES.has(t) && t !== 'extra_livro') return t;
  if (t.includes('clin')) return 'clinica';
  if (t.includes('mecan') || t.includes('fisiol') || t.includes('neurofisi')) return 'mecanismo';
  if (t.includes('dif')) return 'diferenciacao';
  if (t.includes('def')) return 'definicao';
  return 'prova';
}

const materias = JSON.parse(fs.readFileSync(MATERIAS_PATH, 'utf8'));
const aulas = (materias[materia]?.aulas || []).map((a) => a.id);
if (!aulas.length) {
  throw new Error(`Materia nao encontrada em materias.json: ${materia}`);
}

function readBlockFile(path) {
  const parsed = JSON.parse(fs.readFileSync(path, 'utf8'));
  if (Array.isArray(parsed)) return parsed;
  if (parsed && Array.isArray(parsed.flashcards)) return parsed.flashcards;
  return [];
}

const rawBlocks = blockFiles.flatMap((f) => readBlockFile(f));
const normalized = rawBlocks.map((c) => {
  const origem = c.origem === 'extra' ? 'extra' : 'material';
  return {
    materia,
    tema: c.tema,
    frente: String(c.frente || '').trim(),
    verso: String(c.verso || '').trim(),
    explicacao: String(c.explicacao || '').trim(),
    dificuldade: normalizeDifficulty(c.dificuldade),
    categoria: normalizeCategory(c.categoria, origem),
    origem,
    tags: Array.isArray(c.tags) ? c.tags.slice(0, 4) : []
  };
});

const byTema = normalized.reduce((acc, c) => {
  acc[c.tema] = acc[c.tema] || [];
  acc[c.tema].push(c);
  return acc;
}, {});

for (const tema of aulas) {
  const list = byTema[tema] || [];
  if (list.length !== 12) throw new Error(`${tema}: esperado 12, recebido ${list.length}`);
  const material = list.filter((x) => x.origem === 'material').length;
  const extra = list.filter((x) => x.origem === 'extra').length;
  if (material !== 10 || extra !== 2) throw new Error(`${tema}: proporcao invalida ${material}/${extra}`);
  for (const card of list) {
    const m = [...card.frente.matchAll(CLOZE_REGEX)];
    if (m.length !== 1) throw new Error(`${tema}: cloze invalida`);
    const lacuna = m[0][1].trim();
    if (card.verso.toLowerCase() !== lacuna.toLowerCase()) throw new Error(`${tema}: verso diferente da lacuna`);
    if (card.frente.includes('?')) throw new Error(`${tema}: formato pergunta nao permitido`);
    if (META_REGEX.test(card.frente) || META_REGEX.test(card.explicacao)) throw new Error(`${tema}: metalinguagem detectada`);
    if (!ALLOWED_CATEGORIES.has(card.categoria)) throw new Error(`${tema}: categoria invalida ${card.categoria}`);
    if (![1, 2].includes(Number(card.dificuldade))) throw new Error(`${tema}: dificuldade fora de 1/2`);
  }
}

const flashRaw = JSON.parse(fs.readFileSync(FLASHCARDS_PATH, 'utf8'));
const existing = Array.isArray(flashRaw.flashcards) ? flashRaw.flashcards : [];
const kept = existing.filter((c) => c.materia !== materia);
let nextId = kept.reduce((max, c) => Math.max(max, Number(c.id) || 0), 0) + 1;
for (const tema of aulas) {
  for (const c of byTema[tema]) {
    c.id = nextId++;
    kept.push(c);
  }
}

flashRaw.flashcards = kept;
fs.writeFileSync(FLASHCARDS_PATH, JSON.stringify(flashRaw, null, 2) + '\n', 'utf8');
console.log(`${materia} consolidada com ${aulas.length * 12} cards.`);
