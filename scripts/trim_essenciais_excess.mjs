import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const QUESTOES_PATH = path.join(ROOT, 'data', 'questoes.json');

const TEMPLATE_PATTERNS = [
  /^Paciente em leito, equipe discute achados/i,
  /^Contexto de exame físico sistematizado/i,
  /^Cenário de equipe multiprofissional/i,
  /^\[QUESTÃO/i,
];

function isTemplate(text = '') {
  return TEMPLATE_PATTERNS.some((pattern) => pattern.test(String(text).trim()));
}

function score(q) {
  const d = Number(q.dificuldade || 1) * 10;
  const clinical = q.caso_clinico === true ? 1.5 : 0;
  const length = Math.min(String(q.enunciado || '').length * 0.01, 3);
  const penalty = isTemplate(q.enunciado) ? -12 : 0;
  return d + clinical + length + penalty;
}

const raw = JSON.parse(readFileSync(QUESTOES_PATH, 'utf8'));
const questoes = raw.questoes || [];
const byAula = new Map();

for (const q of questoes) {
  if (!q.aula_id || q.essencial !== true) continue;
  if (!byAula.has(q.aula_id)) byAula.set(q.aula_id, []);
  byAula.get(q.aula_id).push(q);
}

let demoted = 0;
for (const [aulaId, essentials] of byAula.entries()) {
  if (essentials.length <= 7) continue;
  essentials.sort((a, b) => score(b) - score(a));
  for (let i = 7; i < essentials.length; i++) {
    if (essentials[i].essencial === true) {
      essentials[i].essencial = false;
      demoted++;
    }
  }
}

writeFileSync(QUESTOES_PATH, JSON.stringify({ ...raw, questoes }, null, 2), 'utf8');
console.log(`✅ Essenciais acima do teto rebaixados: ${demoted}`);
