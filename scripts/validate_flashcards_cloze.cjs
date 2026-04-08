const fs = require('fs');

const materia = process.argv[2];
if (!materia) {
  console.error('Uso: node scripts/validate_flashcards_cloze.cjs <materia_id>');
  process.exit(1);
}

const raw = JSON.parse(fs.readFileSync('data/flashcards.json', 'utf8'));
const cards = (raw.flashcards || []).filter((c) => c.materia === materia);

if (!cards.length) {
  console.error(`Nenhum flashcard encontrado para materia=${materia}`);
  process.exit(1);
}

const byTema = new Map();
for (const c of cards) {
  const tema = c.tema || '__sem_tema__';
  if (!byTema.has(tema)) byTema.set(tema, []);
  byTema.get(tema).push(c);
}

let hasError = false;
for (const [tema, list] of byTema.entries()) {
  const total = list.length;
  const material = list.filter((c) => c.origem === 'material').length;
  const extra = list.filter((c) => c.origem === 'extra').length;
  const clozeOk = list.every((c) => (String(c.frente || '').match(/\{\{c1::[^}]+\}\}/g) || []).length === 1);
  const versoOk = list.every((c) => {
    const m = String(c.frente || '').match(/\{\{c1::([^}|]+)(?:\|[^}]+)?\}\}/);
    return m && String(c.verso || '').trim().toLowerCase() === String(m[1]).trim().toLowerCase();
  });

  const status = total === 30 && material === 25 && extra === 5 && clozeOk && versoOk ? 'OK' : 'FALHA';
  console.log(`${tema}: ${status} (total=${total}, material=${material}, extra=${extra}, cloze=${clozeOk}, verso=${versoOk})`);
  if (status !== 'OK') hasError = true;
}

if (hasError) process.exit(2);
