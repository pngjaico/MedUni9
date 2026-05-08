import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const ENV_PATH = path.join(ROOT, '.env');
const QUESTOES_PATH = path.join(ROOT, 'data', 'questoes.json');
const QUEUE_PATH = path.join(ROOT, 'data', 'agent_logs', 'questoes_generation_queue.json');
const LOG_DIR = path.join(ROOT, 'data', 'agent_logs', 'gemini_essenciais');
const MODELS = [
  'gemini-2.5-flash',
  'gemini-2.5-flash-lite',
  'gemini-2.0-flash',
  'gemini-2.0-flash-lite',
];

function loadEnv() {
  const env = {};
  if (!existsSync(ENV_PATH)) return env;
  const lines = readFileSync(ENV_PATH, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    if (!line || line.trim().startsWith('#')) continue;
    const idx = line.indexOf('=');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    env[key] = value;
  }
  return env;
}

const ENV = loadEnv();
const GEMINI_API_KEY = ENV.GEMINI_API_KEY || process.env.GEMINI_API_KEY || '';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function ensureDir(dir) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

function stripCodeFences(text) {
  return String(text || '')
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim();
}

function extractJson(text) {
  const clean = stripCodeFences(text);
  try {
    return JSON.parse(clean);
  } catch (_) {
    const start = clean.indexOf('{');
    const end = clean.lastIndexOf('}');
    if (start !== -1 && end !== -1 && end > start) {
      return JSON.parse(clean.slice(start, end + 1));
    }
    throw new Error('JSON ausente ou inválido no retorno do Gemini.');
  }
}

function prefixOptions(opcoes) {
  const letters = ['A', 'B', 'C', 'D'];
  return (opcoes || []).map((op, idx) => {
    const text = String(op || '').replace(/^[A-D]\)\s*/i, '').trim();
    return `${letters[idx]}) ${text}`;
  });
}

function lessonPrompt(item, material, count, startId) {
  const clinicalTarget = /^(bmf\d|mad\d|semiologia\d|fisiopato3|fisiopato_farmaco|saude_trabalhador|clinica_|cirurgia_|mfc\d|tecnica_operatoria)/.test(item.materia)
    ? Math.min(2, count)
    : Math.min(1, count);

  return `
Você está gerando questões para o app MedGradPlus.

Tarefa:
- gerar EXATAMENTE ${count} questões essenciais para a aula \`${item.aula_id}\`
- materia: \`${item.materia}\`
- modulo: ${item.modulo}
- tema deve ser exatamente \`${item.aula_id}\`
- aula_id deve ser exatamente \`${item.aula_id}\`
- todas as questões devem combinar diretamente com o conteúdo do material
- não use metatexto ("na aula", "no material", etc.)
- 4 alternativas por questão
- correta deve ser número 0-3
- incluir explicacao_geral, explicacoes_opcoes (A-D) e explicacao
- essencial = true em todas
- caso_clinico = true em ${clinicalTarget} questão(ões) e false nas demais
- misturar dificuldade de forma plausível entre 1, 2 e 3
- evitar repetir a mesma ideia com redação mínima
- evitar alternativas absurdas

Formato de saída:
Retorne APENAS JSON válido no formato:
{
  "questoes": [
    {
      "enunciado": "...",
      "opcoes": ["texto A", "texto B", "texto C", "texto D"],
      "correta": 0,
      "explicacao_geral": "...",
      "explicacoes_opcoes": {
        "A": "...",
        "B": "...",
        "C": "...",
        "D": "..."
      },
      "explicacao": "...",
      "dificuldade": 2,
      "caso_clinico": false
    }
  ]
}

Regras editoriais adicionais:
- se o material trouxer mnemônico, anatomia aplicada, síndrome, relação clínica ou tabela comparativa, use isso a favor
- preserve precisão técnica
- use português natural de prova médica
- cada questão deve ser resolvível sem depender do texto fonte explicitamente

Contexto da aula:
- tema: ${item.tema}
- materialPath: ${item.materialPath}
- próximo id disponível no banco: ${startId} (não inclua id na resposta; o script adiciona)

Material da aula:
${material}
`.trim();
}

async function callGemini(prompt, attempt = 1, modelIndex = 0) {
  const model = MODELS[modelIndex];
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
  const body = {
    contents: [
      {
        parts: [{ text: prompt }],
      },
    ],
    generationConfig: {
      temperature: 0.4,
      topP: 0.9,
      responseMimeType: 'application/json',
    },
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const json = await res.json();
  if (!res.ok) {
    const msg = JSON.stringify(json);
    const quotaExceeded = res.status === 429 || /quota|RESOURCE_EXHAUSTED/i.test(msg);
    if (quotaExceeded && modelIndex < MODELS.length - 1) {
      await sleep(1200);
      return callGemini(prompt, 1, modelIndex + 1);
    }
    if (attempt < 4) {
      await sleep(2000 * attempt);
      return callGemini(prompt, attempt + 1, modelIndex);
    }
    throw new Error(`Gemini HTTP ${res.status}: ${msg}`);
  }

  const text =
    json?.candidates?.[0]?.content?.parts?.map((p) => p.text || '').join('\n') || '';

  if (!text) {
    if (attempt < 4) {
      await sleep(1500 * attempt);
      return callGemini(prompt, attempt + 1, modelIndex);
    }
    throw new Error('Gemini retornou resposta vazia.');
  }

  return { raw: json, text, model };
}

function validateGeneratedQuestions(questions, item, expectedCount) {
  if (!Array.isArray(questions) || questions.length < expectedCount) {
    throw new Error(`Quantidade inválida: esperado ${expectedCount}, recebido ${questions?.length ?? 'n/a'}.`);
  }
  const normalizedInput = questions.slice(0, expectedCount);
  const letters = ['A', 'B', 'C', 'D'];
  return normalizedInput.map((q) => {
    if (!Array.isArray(q.opcoes) || q.opcoes.length !== 4) {
      throw new Error('Questão sem 4 opções.');
    }
    if (![0, 1, 2, 3].includes(q.correta)) {
      throw new Error('Campo correta fora do intervalo 0-3.');
    }
    const explicacoes = q.explicacoes_opcoes || {};
    for (const L of letters) {
      if (!explicacoes[L]) throw new Error(`Falta explicação da opção ${L}.`);
    }
    return {
      materia: item.materia,
      tema: item.aula_id,
      aula_id: item.aula_id,
      modulo: item.modulo,
      enunciado: String(q.enunciado || '').trim(),
      opcoes: prefixOptions(q.opcoes),
      correta: q.correta,
      explicacao_geral: String(q.explicacao_geral || '').trim(),
      explicacoes_opcoes: {
        A: String(explicacoes.A).trim(),
        B: String(explicacoes.B).trim(),
        C: String(explicacoes.C).trim(),
        D: String(explicacoes.D).trim(),
      },
      explicacao: String(q.explicacao || '').trim(),
      dificuldade: Number(q.dificuldade || 2),
      caso_clinico: q.caso_clinico === true,
      essencial: true,
    };
  });
}

function mainQueue() {
  return JSON.parse(readFileSync(QUEUE_PATH, 'utf8'));
}

function loadQuestions() {
  return JSON.parse(readFileSync(QUESTOES_PATH, 'utf8'));
}

async function main() {
  if (!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY ausente em .env/process.env.');
  }
  ensureDir(LOG_DIR);

  const queue = mainQueue();
  const bank = loadQuestions();
  const questoes = bank.questoes || [];
  const existingByAula = new Map();
  for (const q of questoes) {
    if (!q.aula_id) continue;
    if (!existingByAula.has(q.aula_id)) existingByAula.set(q.aula_id, []);
    existingByAula.get(q.aula_id).push(q);
  }

  let nextId = Math.max(...questoes.map((q) => Number(q.id) || 0)) + 1;
  const summary = [];

  for (const item of queue) {
    const current = existingByAula.get(item.aula_id) || [];
    const currentEss = current.filter((q) => q.essencial === true).length;
    const needed = Math.max(5 - currentEss, 0);
    if (needed === 0) {
      summary.push({ aula_id: item.aula_id, skipped: true, reason: 'already_has_5' });
      continue;
    }

    const material = readFileSync(item.materialPath, 'utf8');
    const prompt = lessonPrompt(item, material, needed, nextId);

    const outBase = path.join(LOG_DIR, `${item.aula_id}`);
    writeFileSync(`${outBase}.prompt.txt`, prompt, 'utf8');

    const response = await callGemini(prompt);
    writeFileSync(`${outBase}.response.json`, JSON.stringify(response.raw, null, 2), 'utf8');

    const parsed = extractJson(response.text);
    const generated = validateGeneratedQuestions(parsed.questoes, item, needed);

    const existingKeys = new Set(
      questoes.map((q) => `${q.materia}:${q.aula_id}:${String(q.enunciado || '').trim().toLowerCase()}`)
    );
    let added = 0;
    for (const q of generated) {
      const key = `${q.materia}:${q.aula_id}:${q.enunciado.toLowerCase()}`;
      if (existingKeys.has(key)) continue;
      q.id = nextId++;
      questoes.push(q);
      existingKeys.add(key);
      if (!existingByAula.has(q.aula_id)) existingByAula.set(q.aula_id, []);
      existingByAula.get(q.aula_id).push(q);
      added++;
    }

    writeFileSync(QUESTOES_PATH, JSON.stringify({ ...bank, questoes }, null, 2), 'utf8');
    summary.push({ aula_id: item.aula_id, needed, added });
    await sleep(1200);
  }

  writeFileSync(path.join(LOG_DIR, 'summary.json'), JSON.stringify(summary, null, 2), 'utf8');
  console.log(JSON.stringify({
    processed: summary.length,
    added: summary.reduce((acc, row) => acc + (row.added || 0), 0),
    remainingWithoutWriteFailure: 0,
  }, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
