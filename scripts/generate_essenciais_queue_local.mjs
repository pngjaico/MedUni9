import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const QUESTOES_PATH = path.join(ROOT, 'data', 'questoes.json');
const QUEUE_PATH = path.join(ROOT, 'data', 'agent_logs', 'questoes_generation_queue.json');

const STOPWORDS = new Set([
  'a','o','as','os','de','da','do','das','dos','e','em','na','no','nas','nos','um','uma',
  'para','por','com','sem','ao','aos','às','ou','que','se','é','ser','como','mais','menos',
  'entre','sobre','durante','após','antes','até','já','muito','muita','sua','seu','suas','seus',
  'uma','uns','umas','nao','não','seja','todo','toda','todos','todas','onde','qual','quais'
]);

function loadJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf8'));
}

function stripMarkdown(text) {
  return String(text || '')
    .replace(/\*\*/g, '')
    .replace(/`/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(text) {
  return stripMarkdown(text)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((token) => token.length >= 4 && !STOPWORDS.has(token));
}

function stripFigBlocks(md) {
  return md.replace(/### Figura sugerida[\s\S]*?(?=\n## |\n---\n## |\Z)/g, '\n');
}

function extractListFacts(md) {
  const facts = [];
  const re = /^[-*]\s*\*\*([^*]+)\*\*\s*[:\s—–-]+(.+)$/gm;
  let match;
  while ((match = re.exec(md)) !== null) {
    const term = stripMarkdown(match[1]);
    const text = stripMarkdown(match[2]);
    if (term.length < 3 || text.length < 12) continue;
    if (/Figura-ID/i.test(term)) continue;
    facts.push({ type: 'list', anchor: term, correct: text });
  }
  return facts;
}

function extractBulletFacts(md) {
  const facts = [];
  const lines = md.split(/\r?\n/);
  for (const lineRaw of lines) {
    const line = lineRaw.trim();
    if (!/^[-*]\s+/.test(line)) continue;
    const text = stripMarkdown(line.replace(/^[-*]\s+/, ''));
    if (text.length < 16) continue;
    if (/Figura-ID|Momento:|Tipo sugerido:|Legenda/i.test(text)) continue;
    const anchor = text.split(/[.:—–-]/)[0].slice(0, 80).trim();
    facts.push({ type: 'bullet', anchor: anchor || 'conceito central', correct: text });
  }
  return facts;
}

function extractTableFacts(md) {
  const facts = [];
  const lines = md.split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed.startsWith('|')) continue;
    if (/^\|[-:\s|]+\|$/.test(trimmed)) continue;
    const cells = trimmed
      .split('|')
      .map((s) => stripMarkdown(s))
      .filter(Boolean);
    if (cells.length < 2) continue;
    if (cells.some((c) => /conceito a|conceito b|diferencial crítico|como diferenciar/i.test(c))) continue;
    const anchor = cells[0];
    const correct = cells.join(' — ');
    if (correct.length < 16) continue;
    facts.push({ type: 'table', anchor, correct });
  }
  return facts;
}

function extractSentenceFacts(md) {
  const clean = stripFigBlocks(md);
  const paragraphs = clean
    .split(/\n\s*\n/)
    .map((p) => stripMarkdown(p))
    .filter((p) => p.length > 30);
  const facts = [];
  for (const p of paragraphs) {
    if (/pré-prova|figura sugerida/i.test(p)) continue;
    const sentences = p.split(/(?<=[.!?])\s+/).map(stripMarkdown).filter((s) => s.length > 25);
    for (const s of sentences.slice(0, 2)) {
      const anchor = s.split(/[,:]/)[0].slice(0, 80).trim();
      if (anchor.length < 4) continue;
      facts.push({ type: 'sentence', anchor, correct: s });
    }
  }
  return facts;
}

function uniqueFacts(facts) {
  const seen = new Set();
  const out = [];
  for (const fact of facts) {
    const key = `${fact.anchor.toLowerCase()}::${fact.correct.toLowerCase().slice(0, 120)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(fact);
  }
  return out;
}

function difficultyPattern(n) {
  if (n >= 5) return [1, 2, 2, 3, 2].slice(0, n);
  if (n === 4) return [1, 2, 3, 2];
  if (n === 3) return [1, 2, 3];
  if (n === 2) return [2, 3];
  return [2];
}

function correctPattern(n) {
  return [0, 1, 2, 3, 0].slice(0, n);
}

function clinicalPattern(materia, n) {
  const highClinical = /^(bmf\d|mad\d|semiologia\d|fisiopato3|fisiopato_farmaco|saude_trabalhador|clinica_|cirurgia_|mfc\d|tecnica_operatoria)/.test(materia);
  if (!highClinical) return Array(n).fill(false);
  if (n >= 5) return [false, false, true, false, true].slice(0, n);
  if (n === 4) return [false, true, false, true];
  if (n === 3) return [false, true, false];
  return Array(n).fill(false);
}

function buildDistractors(facts, currentIndex) {
  const pool = facts
    .filter((_, idx) => idx !== currentIndex)
    .map((f) => f.correct)
    .filter((text) => text.length > 10);
  const out = [];
  for (const text of pool) {
    if (out.length >= 3) break;
    out.push(text);
  }
  while (out.length < 3) {
    out.push('Alternativa inconsistente com os pontos centrais descritos para esta aula.');
  }
  return out;
}

function buildQuestionFromFact(fact, distractors, opts) {
  const { materia, aulaId, modulo, dificuldade, correta, casoClinico } = opts;
  let enunciado = `Sobre ${fact.anchor}, assinale a alternativa correta.`;
  if (fact.type === 'table') {
    enunciado = `Qual associação está correta sobre ${fact.anchor}?`;
  }
  if (casoClinico) {
    enunciado = `Paciente em contexto clínico compatível com ${fact.anchor.toLowerCase()}. Considerando a aula, assinale a alternativa correta.`;
  }

  const options = [
    fact.correct,
    distractors[0],
    distractors[1],
    distractors[2],
  ].map((text) => stripMarkdown(text));

  const rotated = options.map((_, idx) => options[(idx - correta + 4) % 4]);
  const letters = ['A', 'B', 'C', 'D'];
  const exp = {};
  for (let i = 0; i < 4; i++) {
    exp[letters[i]] = `${i === correta ? 'CORRETA' : 'INCORRETA'}: ${rotated[i]}`;
  }

  return {
    materia,
    tema: aulaId,
    aula_id: aulaId,
    modulo,
    enunciado,
    opcoes: rotated.map((text, idx) => `${letters[idx]}) ${text}`),
    correta,
    dificuldade,
    caso_clinico: casoClinico,
    essencial: true,
    explicacao_geral: `A questão cobra um ponto central de ${fact.anchor}, alinhado ao conteúdo essencial da aula.`,
    explicacoes_opcoes: exp,
    explicacao: `Resumo: ${fact.correct}\nA) ${exp.A}\nB) ${exp.B}\nC) ${exp.C}\nD) ${exp.D}`,
  };
}

function generateForLesson(item, existingQuestions) {
  const material = readFileSync(item.materialPath, 'utf8');
  const clean = stripFigBlocks(material);
  const facts = uniqueFacts([
    ...extractListFacts(clean),
    ...extractBulletFacts(clean),
    ...extractTableFacts(clean),
    ...extractSentenceFacts(clean),
  ]);

  const existingEss = existingQuestions.filter((q) => q.essencial === true).length;
  const needed = Math.max(5 - existingEss, 0);
  if (needed === 0) return [];
  if (facts.length === 0) return [];

  const diffs = difficultyPattern(needed);
  const corretas = correctPattern(needed);
  const clin = clinicalPattern(item.materia, needed);
  const generated = [];

  for (let i = 0; i < needed; i++) {
    const fact = facts[i % facts.length];
    const distractors = buildDistractors(facts, i % facts.length);
    generated.push(buildQuestionFromFact(fact, distractors, {
      materia: item.materia,
      aulaId: item.aula_id,
      modulo: item.modulo,
      dificuldade: diffs[i],
      correta: corretas[i],
      casoClinico: clin[i],
    }));
  }

  return generated;
}

function main() {
  const queue = loadJson(QUEUE_PATH);
  const raw = loadJson(QUESTOES_PATH);
  const questoes = raw.questoes || [];
  let nextId = Math.max(...questoes.map((q) => Number(q.id) || 0)) + 1;

  const byAula = new Map();
  for (const q of questoes) {
    if (!q.aula_id) continue;
    if (!byAula.has(q.aula_id)) byAula.set(q.aula_id, []);
    byAula.get(q.aula_id).push(q);
  }

  let added = 0;
  for (const item of queue) {
    const current = byAula.get(item.aula_id) || [];
    const generated = generateForLesson(item, current);
    const existingKeys = new Set(
      current.map((q) => stripMarkdown(q.enunciado).toLowerCase())
    );
    for (const q of generated) {
      const key = stripMarkdown(q.enunciado).toLowerCase();
      if (existingKeys.has(key)) continue;
      q.id = nextId++;
      questoes.push(q);
      existingKeys.add(key);
      if (!byAula.has(item.aula_id)) byAula.set(item.aula_id, []);
      byAula.get(item.aula_id).push(q);
      added++;
    }
  }

  writeFileSync(QUESTOES_PATH, JSON.stringify({ ...raw, questoes }, null, 2), 'utf8');
  console.log(`✅ Geração local concluída. Questões adicionadas: ${added}`);
}

main();
