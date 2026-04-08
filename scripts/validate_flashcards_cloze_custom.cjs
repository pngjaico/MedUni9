const fs = require('fs');

const materia = process.argv[2];
const expectedTotal = Number(process.argv[3] || 12);
const expectedMaterial = Number(process.argv[4] || 10);
const expectedExtra = Number(process.argv[5] || 2);

if (!materia) {
  console.error('Uso: node scripts/validate_flashcards_cloze_custom.cjs <materia> [total] [material] [extra]');
  process.exit(1);
}

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

const raw = JSON.parse(fs.readFileSync('data/flashcards.json', 'utf8'));
const cards = (raw.flashcards || []).filter((c) => c.materia === materia);
if (!cards.length) {
  console.error(`Nenhum card para ${materia}`);
  process.exit(2);
}

const byTema = new Map();
for (const c of cards) {
  const t = c.tema || '__sem_tema__';
  if (!byTema.has(t)) byTema.set(t, []);
  byTema.get(t).push(c);
}

let failed = false;
for (const [tema, list] of byTema.entries()) {
  const total = list.length;
  const material = list.filter((x) => x.origem === 'material').length;
  const extra = list.filter((x) => x.origem === 'extra').length;
  const cloze = list.every((x) => [...String(x.frente || '').matchAll(CLOZE_REGEX)].length === 1);
  const verso = list.every((x) => {
    const m = String(x.frente || '').match(/\{\{c1::([^}|]+)(?:\|[^}]+)?\}\}/);
    return !!m && String(x.verso || '').trim().toLowerCase() === m[1].trim().toLowerCase();
  });
  const noQuestion = list.every((x) => !String(x.frente || '').includes('?'));
  const noMeta = list.every((x) => !META_REGEX.test(String(x.frente || '')) && !META_REGEX.test(String(x.explicacao || '')));
  const categories = list.every((x) => ALLOWED_CATEGORIES.has(String(x.categoria || '')));
  const diffNumeric = list.every((x) => [1, 2, 3].includes(Number(x.dificuldade)));

  const ok =
    total === expectedTotal &&
    material === expectedMaterial &&
    extra === expectedExtra &&
    cloze &&
    verso &&
    noQuestion &&
    noMeta &&
    categories &&
    diffNumeric;

  console.log(
    `${tema}: ${ok ? 'OK' : 'FALHA'} (total=${total}, material=${material}, extra=${extra}, cloze=${cloze}, verso=${verso}, semPergunta=${noQuestion}, semMeta=${noMeta}, categoria=${categories}, dificuldadeNum=${diffNumeric})`
  );
  if (!ok) failed = true;
}

if (failed) process.exit(3);
