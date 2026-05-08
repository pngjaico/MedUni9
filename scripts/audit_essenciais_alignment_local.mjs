import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const QUESTOES_PATH = path.join(ROOT, 'data', 'questoes.json');
const MATERIAS_PATH = path.join(ROOT, 'data', 'materias.json');
const OUT_PATH = path.join(ROOT, 'data', 'agent_logs', 'essenciais_alignment_audit.json');

const STOPWORDS = new Set([
  'a','o','as','os','de','da','do','das','dos','e','em','na','no','nas','nos','um','uma',
  'para','por','com','sem','ao','aos','às','ou','que','se','é','ser','como','mais','menos',
  'entre','sobre','durante','após','antes','até','já','muito','muita','sua','seu','suas','seus',
  'uma','uns','umas','nao','não','seja','todo','toda','todos','todas','onde','qual','quais'
]);

function strip(text) {
  return String(text || '')
    .replace(/\*\*/g, '')
    .replace(/`/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokens(text) {
  return strip(text)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length >= 4 && !STOPWORDS.has(t));
}

const materias = JSON.parse(readFileSync(MATERIAS_PATH, 'utf8'));
const raw = JSON.parse(readFileSync(QUESTOES_PATH, 'utf8'));
const questoes = raw.questoes || [];

const lessonKeywords = new Map();
for (const [materiaId, materia] of Object.entries(materias)) {
  for (const aula of materia.aulas || []) {
    const mdPaths = [
      path.join(ROOT, 'materiais', `modulo${materia.modulo}`, materiaId, `${aula.id}.md`),
      path.join(ROOT, 'data', 'materiais', materiaId, `${aula.id}.md`),
    ];
    const p = mdPaths.find((candidate) => {
      try {
        readFileSync(candidate, 'utf8');
        return true;
      } catch {
        return false;
      }
    });
    if (!p) continue;
    const md = readFileSync(p, 'utf8');
    const kws = new Set([...tokens(aula.tema), ...tokens(md)].slice(0, 200));
    lessonKeywords.set(aula.id, kws);
  }
}

const suspicious = [];
for (const q of questoes) {
  if (q.essencial !== true || !q.aula_id || !lessonKeywords.has(q.aula_id)) continue;
  const kws = lessonKeywords.get(q.aula_id);
  const overlap = tokens(q.enunciado).filter((t) => kws.has(t));
  if (overlap.length === 0) {
    suspicious.push({
      id: q.id,
      aula_id: q.aula_id,
      materia: q.materia,
      enunciado: strip(q.enunciado),
      overlap: [],
    });
  }
}

writeFileSync(OUT_PATH, JSON.stringify({
  generatedAt: new Date().toISOString(),
  suspiciousCount: suspicious.length,
  suspicious: suspicious.slice(0, 500),
}, null, 2), 'utf8');

console.log(`✅ Auditoria local de alinhamento salva em: ${OUT_PATH}`);
console.log(`Suspicious essentials: ${suspicious.length}`);
