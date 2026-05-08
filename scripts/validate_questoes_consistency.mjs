import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const MATERIAS_PATH = path.join(ROOT, 'data', 'materias.json');
const QUESTOES_PATH = path.join(ROOT, 'data', 'questoes.json');

function loadJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf8'));
}

const materias = loadJson(MATERIAS_PATH);
const rawQuestoes = loadJson(QUESTOES_PATH);
const questoes = Array.isArray(rawQuestoes) ? rawQuestoes : rawQuestoes.questoes || [];

const aulasById = new Map();
for (const [materiaId, materia] of Object.entries(materias)) {
  for (const aula of materia.aulas || []) {
    aulasById.set(aula.id, { materiaId, tema: aula.tema || '' });
  }
}

const errors = [];
for (const q of questoes) {
  if (!q.aula_id) {
    errors.push(`ID ${q.id}: sem aula_id`);
    continue;
  }
  if (!aulasById.has(q.aula_id)) {
    errors.push(`ID ${q.id}: aula_id inválido (${q.aula_id})`);
    continue;
  }
  const owner = aulasById.get(q.aula_id);
  if (q.materia !== owner.materiaId) {
    errors.push(`ID ${q.id}: materia ${q.materia} divergente da aula ${q.aula_id} (esperado ${owner.materiaId})`);
  }
  if (q.tema !== q.aula_id) {
    errors.push(`ID ${q.id}: tema ${q.tema} diverge de aula_id ${q.aula_id}`);
  }
}

if (errors.length) {
  console.error(`❌ Validação falhou com ${errors.length} erro(s):`);
  for (const msg of errors.slice(0, 100)) console.error(`- ${msg}`);
  if (errors.length > 100) console.error(`- ... e mais ${errors.length - 100} erro(s)`);
  process.exit(1);
}

console.log(`✅ Validação concluída: ${questoes.length} questões consistentes com o catálogo.`);
