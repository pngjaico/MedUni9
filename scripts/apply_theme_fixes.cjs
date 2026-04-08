const fs = require('fs');

const flashPath = 'data/flashcards.json';
const fixFiles = [
  'scripts/tmp_fix_bmf4_critical.json',
  'scripts/tmp_fix_bioe_ff4_critical.json'
];

const raw = JSON.parse(fs.readFileSync(flashPath, 'utf8'));
const cards = Array.isArray(raw.flashcards) ? raw.flashcards : [];
const fixes = fixFiles.flatMap((f) => JSON.parse(fs.readFileSync(f, 'utf8')));

const themesToReplace = new Set(fixes.map((c) => `${c.materia}|${c.tema}`));
const kept = cards.filter((c) => !themesToReplace.has(`${c.materia}|${c.tema}`));

const groupedFixes = {};
for (const c of fixes) {
  const k = `${c.materia}|${c.tema}`;
  groupedFixes[k] = groupedFixes[k] || [];
  groupedFixes[k].push(c);
}

for (const [k, list] of Object.entries(groupedFixes)) {
  if (list.length !== 12) throw new Error(`Tema fix ${k} com ${list.length} cards`);
}

// Keep deterministic ordering by materia|tema then original insertion of each fix list.
const keys = Object.keys(groupedFixes).sort((a, b) => a.localeCompare(b, 'pt-BR', { numeric: true }));
for (const k of keys) kept.push(...groupedFixes[k]);

let nextId = 1;
for (const c of kept) c.id = nextId++;

raw.flashcards = kept;
fs.writeFileSync(flashPath, JSON.stringify(raw, null, 2) + '\n', 'utf8');
console.log(`Temas corrigidos aplicados: ${keys.length}`);
