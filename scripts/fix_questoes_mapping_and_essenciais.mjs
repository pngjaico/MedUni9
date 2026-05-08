import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const MATERIAS_PATH = path.join(ROOT, 'data', 'materias.json');
const QUESTOES_PATH = path.join(ROOT, 'data', 'questoes.json');
const OUT_DIR = path.join(ROOT, 'data', 'agent_logs');
const OUT_QUEUE = path.join(OUT_DIR, 'questoes_generation_queue.json');
const OUT_SUMMARY = path.join(OUT_DIR, 'questoes_fix_summary.json');
const OUT_ORPHANS = path.join(OUT_DIR, 'questoes_orfas_legado.json');

const TEMPLATE_PATTERNS = [
  /^Paciente em leito, equipe discute achados/i,
  /^Contexto de exame físico sistematizado/i,
  /^Cenário de equipe multiprofissional na UBS/i,
  /^Idoso de \d+ anos/i,
  /^Adolescente de \d+ anos/i,
  /^\[QUESTÃO/i,
];

function loadJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf8'));
}

function loadOptionalJson(filePath, fallbackValue) {
  if (!existsSync(filePath)) return fallbackValue;
  return loadJson(filePath);
}

function isTemplate(enunciado = '') {
  return TEMPLATE_PATTERNS.some((pattern) => pattern.test(String(enunciado || '').trim()));
}

function qualityScore(question) {
  const difficulty = Number(question.dificuldade || 1);
  const base = Number.isFinite(difficulty) ? difficulty * 10 : 10;
  const templatePenalty = isTemplate(question.enunciado) ? -15 : 0;
  const clinicalBonus = question.caso_clinico === true ? 1.5 : 0;
  const lengthBonus = Math.min(String(question.enunciado || '').length * 0.01, 4);
  return base + templatePenalty + clinicalBonus + lengthBonus;
}

function getCatalog() {
  const materias = loadJson(MATERIAS_PATH);
  const aulasById = new Map();
  const aulasWithMaterial = new Set();
  const materialPathByAula = new Map();

  for (const [materiaId, materia] of Object.entries(materias)) {
    for (const aula of materia.aulas || []) {
      aulasById.set(aula.id, {
        aulaId: aula.id,
        materiaId,
        modulo: materia.modulo,
        tema: aula.tema || '',
      });

      const candidatePaths = [
        path.join(ROOT, 'materiais', `modulo${materia.modulo}`, materiaId, `${aula.id}.md`),
        path.join(ROOT, 'data', 'materiais', materiaId, `${aula.id}.md`),
      ];
      const existingPath = candidatePaths.find((candidate) => existsSync(candidate));
      if (existingPath) {
        aulasWithMaterial.add(aula.id);
        materialPathByAula.set(aula.id, existingPath);
      }
    }
  }

  return { materias, aulasById, aulasWithMaterial, materialPathByAula };
}

function ensureBoolean(question, field) {
  const before = question[field];
  const after = before === true;
  question[field] = after;
  return before !== after;
}

function shortQueueItem(meta, totalQuestoes, essenciais, reason, questions) {
  return {
    aula_id: meta.aulaId,
    materia: meta.materiaId,
    modulo: meta.modulo,
    tema: meta.tema,
    totalQuestoes,
    essenciais,
    reason,
    materialPath: meta.materialPath,
    sampleQuestionIds: questions.slice(0, 10).map((q) => q.id),
  };
}

const rawQuestoes = loadJson(QUESTOES_PATH);
const data = Array.isArray(rawQuestoes) ? { questoes: rawQuestoes } : rawQuestoes;
const questoes = data.questoes || [];
const { aulasById, aulasWithMaterial, materialPathByAula } = getCatalog();

const stats = {
  aulaIdCopiadoDeTema: 0,
  materiaNormalizadaPelaAula: 0,
  temaEspelhadoDeAulaId: 0,
  essencialBooleanizado: 0,
  casoClinicoBooleanizado: 0,
  essenciaisPromovidos: 0,
  aulasPromovidas: 0,
  questoesOrfasArquivadas: 0,
};

for (const q of questoes) {
  if (!q.aula_id && q.tema && aulasById.has(q.tema)) {
    q.aula_id = q.tema;
    stats.aulaIdCopiadoDeTema++;
  }

  if (q.aula_id && aulasById.has(q.aula_id)) {
    const owner = aulasById.get(q.aula_id);
    if (q.materia !== owner.materiaId) {
      q.materia = owner.materiaId;
      stats.materiaNormalizadaPelaAula++;
    }
    if (q.tema !== q.aula_id) {
      q.tema = q.aula_id;
      stats.temaEspelhadoDeAulaId++;
    }
  }

  if (ensureBoolean(q, 'essencial')) stats.essencialBooleanizado++;
  if (ensureBoolean(q, 'caso_clinico')) stats.casoClinicoBooleanizado++;
}

const questoesByAula = new Map();
for (const q of questoes) {
  if (!q.aula_id || !aulasById.has(q.aula_id)) continue;
  if (!questoesByAula.has(q.aula_id)) questoesByAula.set(q.aula_id, []);
  questoesByAula.get(q.aula_id).push(q);
}

for (const aulaId of aulasWithMaterial) {
  const aulaQuestions = questoesByAula.get(aulaId) || [];
  if (!aulaQuestions.length) continue;

  const keptEssentials = aulaQuestions.filter((q) => q.essencial === true);
  if (keptEssentials.length >= 5) continue;

  const candidates = aulaQuestions
    .filter((q) => q.essencial !== true)
    .sort((a, b) => qualityScore(b) - qualityScore(a));

  const needed = Math.min(5 - keptEssentials.length, candidates.length);
  if (needed <= 0) continue;

  for (let i = 0; i < needed; i++) {
    candidates[i].essencial = true;
    stats.essenciaisPromovidos++;
  }
  stats.aulasPromovidas++;
}

const queue = [];
for (const aulaId of aulasWithMaterial) {
  const owner = aulasById.get(aulaId);
  const questions = questoesByAula.get(aulaId) || [];
  const essenciais = questions.filter((q) => q.essencial === true).length;
  const meta = {
    ...owner,
    materialPath: materialPathByAula.get(aulaId) || null,
  };

  if (questions.length === 0) {
    queue.push(shortQueueItem(meta, 0, 0, 'sem_questoes', questions));
  } else if (essenciais < 5) {
    queue.push(shortQueueItem(meta, questions.length, essenciais, 'abaixo_minimo_essenciais', questions));
  }
}

queue.sort((a, b) =>
  a.modulo - b.modulo ||
  a.materia.localeCompare(b.materia) ||
  a.aula_id.localeCompare(b.aula_id)
);

const orphanQuestions = [];
const activeQuestions = [];
for (const q of questoes) {
  if (q.aula_id && !aulasById.has(q.aula_id)) {
    orphanQuestions.push({
      id: q.id,
      materia: q.materia ?? null,
      aula_id: q.aula_id,
      tema: q.tema ?? null,
      enunciado: q.enunciado ?? '',
      reason: 'aula_id legado sem correspondencia no catalogo atual',
      archivedAt: new Date().toISOString(),
    });
    continue;
  }
  activeQuestions.push(q);
}
stats.questoesOrfasArquivadas = orphanQuestions.length;

const existingOrphans = loadOptionalJson(OUT_ORPHANS, []);
const mergedOrphans = new Map();
for (const item of [...existingOrphans, ...orphanQuestions]) {
  mergedOrphans.set(item.id, item);
}

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(QUESTOES_PATH, JSON.stringify({ ...data, questoes: activeQuestions }, null, 2), 'utf8');
writeFileSync(OUT_QUEUE, JSON.stringify(queue, null, 2), 'utf8');
writeFileSync(OUT_SUMMARY, JSON.stringify({
  generatedAt: new Date().toISOString(),
  stats,
  queueLength: queue.length,
}, null, 2), 'utf8');
writeFileSync(OUT_ORPHANS, JSON.stringify([...mergedOrphans.values()], null, 2), 'utf8');

console.log(`✅ questoes.json atualizado: ${QUESTOES_PATH}`);
console.log(`✅ fila de geração salva em: ${OUT_QUEUE}`);
console.log(`✅ órfãs legadas arquivadas em: ${OUT_ORPHANS}`);
console.log(JSON.stringify({ ...stats, queueLength: queue.length }, null, 2));
