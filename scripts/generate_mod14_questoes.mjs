/**
 * Gera questões (módulos 1–4, materias ativas) a partir dos .md canônicos.
 * Regras: 10/aula; dificuldade 2×1 + 5×2 + 3×3; gabarito balanceado;
 * explicacao_geral + explicacoes_opcoes + explicacao; casos clínicos conforme perfil.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const Q_PATH = path.join(ROOT, 'data', 'questoes.json');
const M_PATH = path.join(ROOT, 'data', 'materias.json');

const PAT10 = [0, 1, 2, 3, 0, 1, 2, 3, 0, 2];
const DIF_SHUFFLE_BASE = [1, 1, 2, 2, 2, 2, 2, 3, 3, 3];

/** 5/10 clínico — BMF, Semiologia, MAD, Fisiopato, ST */
const HIGH_CLINICAL = new Set([
  'bmf1',
  'bmf2',
  'bmf3',
  'bmf4',
  'semiologia1',
  'semiologia2',
  'semiologia3',
  'semiologia4',
  'mad1',
  'mad2',
  'fisiopato3',
  'fisiopato_farmaco',
  'saude_trabalhador',
]);

function clinicalTarget(materia) {
  return HIGH_CLINICAL.has(materia) ? 5 : 4;
}

function permuteCorrectFirst(opcoes, textsObj, medIdx) {
  const newO = [0, 1, 2, 3].map((k) => opcoes[(medIdx + k) % 4]);
  const newTexts = {
    summary: textsObj.summary,
    0: textsObj[(medIdx + 0) % 4],
    1: textsObj[(medIdx + 1) % 4],
    2: textsObj[(medIdx + 2) % 4],
    3: textsObj[(medIdx + 3) % 4],
  };
  return { opcoes: newO, texts: newTexts };
}

function rotateToPat(opcoes, textsObj, pat) {
  const newO = [0, 1, 2, 3].map((j) => opcoes[(j - pat + 4) % 4]);
  const newTexts = {
    summary: textsObj.summary,
    0: textsObj[(0 - pat + 4) % 4],
    1: textsObj[(1 - pat + 4) % 4],
    2: textsObj[(2 - pat + 4) % 4],
    3: textsObj[(3 - pat + 4) % 4],
  };
  return { opcoes: newO, texts: newTexts };
}

function buildExplainLines(correta, textsObj) {
  const L = ['A', 'B', 'C', 'D'];
  const explicacoes_opcoes = {};
  let explicacao = `Resumo: ${textsObj.summary}\n`;
  for (let i = 0; i < 4; i++) {
    const tag = i === correta ? 'Correta' : 'Incorreta';
    const line = textsObj[i];
    explicacoes_opcoes[L[i]] = `${tag}: ${line}`;
    explicacao += `${L[i]}) ${i === correta ? 'CORRETA' : 'INCORRETA'}. ${explicacoes_opcoes[L[i]]}\n`;
  }
  return { explicacoes_opcoes, explicacao: explicacao.trimEnd() };
}

function stripFigBlocks(md) {
  return md.replace(/### Figura sugerida[\s\S]*?(?=\n## |\n---\n## |\Z)/g, '\n');
}

function extractTableFacts(md) {
  const facts = [];
  const lines = md.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line.startsWith('|')) continue;
    if (/^\|[-:\s|]+\|$/.test(line)) continue;
    const cells = line
      .split('|')
      .map((s) => s.trim().replace(/\*\*/g, ''))
      .filter((s) => s.length > 0);
    if (cells.length < 2) continue;
    const c0 = cells[0].trim();
    if (/^conceito\s*[ab]$/i.test(c0)) continue;
    if (/^como\s+diferenciar$/i.test(cells[cells.length - 1] || '')) continue;
    const col1 = (cells[1] || '').trim();
    if (cells.some((c) => /palavra-chave de prova/i.test(c))) continue;
    if (/^fun[cç][aã]o central$/i.test(col1)) continue;
    if (/^tecidos?$/i.test(c0) && /local t[ií]pico/i.test((cells[2] || '').trim())) continue;
    if (c0.toLowerCase() === 'tipo' && /^descri[cç][aã]o$/i.test(col1)) continue;
    if (/^plano$/i.test(c0) && /^o que divide$/i.test(col1)) continue;
    if (/^termo$/i.test(c0) && /^significado$/i.test(col1)) continue;
    if (/^regi[aã]o$/i.test(c0) && /limites/i.test(col1)) continue;
    if (/^n[ií]vel$/i.test(c0) && /objetivo central/i.test(col1)) continue;
    if (/^gl[aâ]ndula$/i.test(c0) && /ducto principal/i.test(col1)) continue;
    if (/^elemento$/i.test(c0) && /^papel$/i.test(col1)) continue;
    if (/^fase$/i.test(c0) && /predomina/i.test(col1)) continue;
    if (/^movimento$/i.test(c0) && /eixo dominante/i.test(col1)) continue;
    if (/^aspecto$/i.test(c0) && /cad[aá]ver|pe[cç]a/i.test(col1)) continue;
    if (/^c[eé]lula$/i.test(c0) && /fun[cç][aã]o resumida/i.test(col1)) continue;
    if (/^fun[cç][aã]o$/i.test(c0) && /responsabilidade principal/i.test(col1)) continue;
    const joined = cells.join(' — ');
    if (/objetivo central|enfoque restrito/i.test(c0) && /exemplo/i.test(joined)) continue;
    if (/conceito\s*a.*conceito\s*b.*como\s+diferenciar/i.test(joined)) continue;
    if (joined.length < 12 || /Momento:|Tipo sugerido:/i.test(joined)) continue;
    facts.push({ kind: 'table', text: joined, cells });
  }
  return facts;
}

function extractListFacts(md) {
  const facts = [];
  const re = /^[-*]\s*\*\*([^*]+)\*\*\s*[:\s—–-]+(.+)$/gm;
  let m;
  while ((m = re.exec(md)) !== null) {
    let term = m[1].trim().replace(/\*\*/g, '');
    const rest = m[2].trim().replace(/\*\*/g, '');
    if (term.length < 3 || rest.length < 8) continue;
    if (/Figura-ID/i.test(term)) continue;
    if (/^(Isto|Três|Três|Dois|Uma|Um)$/i.test(term)) continue;
    facts.push({ kind: 'list', term, text: rest.slice(0, 320) });
  }
  return facts;
}

function extractHeaderFacts(md) {
  const facts = [];
  const re = /^##+\s+(.+)$/gm;
  let m;
  while ((m = re.exec(md)) !== null) {
    const h = m[1].replace(/\*\*/g, '').trim();
    if (h.length < 6) continue;
    if (/Relevância|Pré-Prova|Figura|Prova/i.test(h)) continue;
    facts.push({ kind: 'header', text: h });
  }
  return facts;
}

function shuffle(arr, seed) {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function uniqueStrings(strs) {
  const seen = new Set();
  const out = [];
  for (const s of strs) {
    const k = s.slice(0, 120).toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(s);
  }
  return out;
}

function pickDistractorPool(facts, excludeIdx) {
  const pool = [];
  facts.forEach((f, i) => {
    if (i === excludeIdx) return;
    if (f.kind === 'table') pool.push(f.text);
    else if (f.kind === 'list') pool.push(`${f.term}: ${f.text}`.slice(0, 220));
    else pool.push(f.text);
  });
  return uniqueStrings(pool).filter((s) => s.length > 10);
}

function vignetteFor(materia, modulo, clinical, idx) {
  if (!clinical) return '';
  const v = [
    'Paciente em seguimento clínico com revisão periódica. ',
    'Cenário de equipe multiprofissional em ambulatório. ',
    'Situação clínica com dados epidemiológicos relevantes. ',
    'Avaliação em ambiente hospitalar/ambulatorial. ',
    'Homem de 48 anos, tabagista, hipertenso, em uso irregular de anti-hipertensivos. ',
    'Mulher de 34 anos, gestante, sem pré-natal regular. ',
    'Idoso de 78 anos, morador de área com rede de apoio frágil. ',
    'Adolescente de 16 anos, relata dor e limitação funcional em membro. ',
    'Paciente em leito, equipe discute achados de propedêutica. ',
    'Contexto de exame físico sistematizado com achado local. ',
  ];
  return v[(idx + modulo * 7) % v.length];
}

function makeFromListFact(f, pool, materia, tema, clinical, longStem, qIndex, modulo) {
  const stemBase = `${vignetteFor(materia, modulo, clinical, qIndex)}Qual afirmação sobre “${f.term}” está correta?`;
  const stem = stemBase;
  const correct = f.text.replace(/\s+/g, ' ').trim().slice(0, 280);
  const distractors = [];
  for (const p of pool) {
    if (p.includes(f.term) && p.length < 40) continue;
    distractors.push(p.replace(/\s+/g, ' ').trim().slice(0, 280));
    if (distractors.length >= 6) break;
  }
  while (distractors.length < 3) {
    distractors.push(`Conceito alternativo não sustentado pelo mecanismo descrito para ${f.term}.`);
  }
  const op = [correct, distractors[0], distractors[1], distractors[2]].map((s) =>
    s.length > 240 ? s.slice(0, 237) + '…' : s
  );
  const summary = `A resposta correta é a que melhor reflete a definição ou o mecanismo de “${f.term}”.`;
  const texts = {
    summary,
    0: op[0],
    1: op[1],
    2: op[2],
    3: op[3],
  };
  return { stem, op, texts };
}

function makeFromTableFact(f, pool, clinical, longStem, qIndex, materia, modulo, tema) {
  const c0 = (f.cells[0] || 'item').trim();
  const stem0 = `${vignetteFor(materia, modulo, clinical, qIndex)}Qual alternativa associa corretamente “${c0}” às demais informações da mesma linha (função, local ou critério)?`;
  const stem = stem0;
  const correct = f.text;
  const distractors = [];
  for (const p of pool) {
    if (p === correct) continue;
    distractors.push(p);
    if (distractors.length >= 5) break;
  }
  while (distractors.length < 3)
    distractors.push('Combinação incorreta: mistura atributos de linhas diferentes da mesma classificação.');
  const op = [correct, ...distractors.slice(0, 3)].map((s) =>
    s.length > 260 ? s.slice(0, 257) + '…' : s
  );
  const summary = `A opção correta é a linha em que “${c0}” aparece com os demais dados compatíveis.`;
  const texts = { summary, 0: op[0], 1: op[1], 2: op[2], 3: op[3] };
  return { stem, op, texts };
}

function buildTenForAula(materia, modulo, tema, md) {
  const clean = stripFigBlocks(md);
  const tableFacts = extractTableFacts(clean);
  const listFacts = extractListFacts(clean);
  const headerFacts = extractHeaderFacts(clean);
  let facts = [...listFacts, ...tableFacts];
  if (facts.length < 8) {
    headerFacts.forEach((h) =>
      facts.push({
        kind: 'list',
        term: h.text.slice(0, 60),
        text: `Eixo programatico: ${h.text}.`,
      })
    );
  }
  if (facts.length < 4) {
    facts.push({
      kind: 'list',
      term: 'Objetivos da aula',
      text: 'Integrar conceitos centrais desta aula ao raciocinio clinico e a prova da graduacao.',
    });
  }

  const seed = [...tema].reduce((a, c) => a + c.charCodeAt(0), 0);
  facts = shuffle(facts, seed);
  const clinN = clinicalTarget(materia);
  const clinicalFlags = shuffle(
    [...Array(clinN).fill(true), ...Array(10 - clinN).fill(false)],
    seed + 1
  );
  const longFlags = [true, false, false, false, false, true, false, false, false, false];
  const diffs = shuffle(DIF_SHUFFLE_BASE, seed + 2);

  const raw = [];
  let listIdx = 0;
  let tableIdx = 0;
  for (let i = 0; i < 10; i++) {
    const clinical = clinicalFlags[i];
    const longStem = longFlags[i];
    let m;
    if (listFacts.length > 0 && (i % 2 === 0 || tableFacts.length === 0)) {
      const f = listFacts[listIdx++ % listFacts.length];
      const pi = facts.findIndex(
        (x) => x.kind === 'list' && x.term === f.term && x.text === f.text
      );
      const p = pickDistractorPool(facts, pi >= 0 ? pi : -1);
      m = makeFromListFact(f, p, materia, tema, clinical, longStem, i, modulo);
    } else if (tableFacts.length > 0) {
      const f = tableFacts[tableIdx++ % tableFacts.length];
      const pi = facts.indexOf(f);
      const p = pickDistractorPool(facts, pi >= 0 ? pi : -1);
      m = makeFromTableFact(f, p, clinical, longStem, i, materia, modulo, tema);
    } else {
      const lf = facts.find((x) => x.kind === 'list') || {
        kind: 'list',
        term: tema,
        text: 'Revisar os objetivos e tabelas centrais desta aula no material de apoio.',
      };
      const pi = facts.indexOf(lf);
      const p = pickDistractorPool(facts, pi >= 0 ? pi : -1);
      m = makeFromListFact(lf, p, materia, tema, clinical, longStem, i, modulo);
    }
    raw.push({ ...m, d: diffs[i] });
  }

  const out = [];
  for (let i = 0; i < 10; i++) {
    const row = raw[i];
    const opcoesPlain = row.op;
    const p0 = permuteCorrectFirst(opcoesPlain, row.texts, 0);
    const pat = PAT10[i];
    const bucket = rotateToPat(p0.opcoes, p0.texts, pat);
    const strip = (s) => s.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
    const textsClean = {
      summary: strip(bucket.texts.summary),
      0: strip(bucket.texts[0]),
      1: strip(bucket.texts[1]),
      2: strip(bucket.texts[2]),
      3: strip(bucket.texts[3]),
    };
    const { explicacoes_opcoes, explicacao } = buildExplainLines(pat, textsClean);
    const opts = bucket.opcoes.map((t, j) => `${['A', 'B', 'C', 'D'][j]}) ${strip(t)}`);
    out.push({
      materia,
      tema,
      enunciado: strip(row.stem),
      opcoes: opts,
      correta: pat,
      dificuldade: row.d,
      modulo,
      explicacao_geral: textsClean.summary,
      explicacoes_opcoes,
      explicacao,
    });
  }
  return out;
}

function mdPathFor(materia, modulo, aulaId) {
  const c1 = path.join(ROOT, 'data', 'materiais', materia, `${aulaId}.md`);
  const c2 = path.join(ROOT, 'materiais', `modulo${modulo}`, materia, `${aulaId}.md`);
  if (fs.existsSync(c1)) return c1;
  if (fs.existsSync(c2)) return c2;
  return null;
}

function loadAulas() {
  const materias = JSON.parse(fs.readFileSync(M_PATH, 'utf8'));
  const rows = [];
  for (const [mid, v] of Object.entries(materias)) {
    if (v.modulo < 1 || v.modulo > 4 || v.ativo !== true) continue;
    for (const a of v.aulas || []) {
      rows.push({ materia: mid, modulo: v.modulo, aula_id: a.id });
    }
  }
  rows.sort((a, b) => a.modulo - b.modulo || a.materia.localeCompare(b.materia) || a.aula_id.localeCompare(b.aula_id));
  return rows;
}

function main() {
  const aulas = loadAulas();
  const all = [];
  const errors = [];
  for (const { materia, modulo, aula_id } of aulas) {
    const p = mdPathFor(materia, modulo, aula_id);
    if (!p) {
      errors.push({ aula_id, err: 'md not found' });
      continue;
    }
    const md = fs.readFileSync(p, 'utf8');
    try {
      const qs = buildTenForAula(materia, modulo, aula_id, md);
      all.push(...qs);
    } catch (e) {
      errors.push({ aula_id, err: String(e) });
    }
  }
  const bank = JSON.parse(fs.readFileSync(Q_PATH, 'utf8'));
  const removed = bank.questoes.length;
  bank.questoes = bank.questoes.filter((q) => q.modulo < 1 || q.modulo > 4);
  const removedN = removed - bank.questoes.length;
  let nid = bank.questoes.length ? Math.max(...bank.questoes.map((x) => x.id)) + 1 : 1;
  for (const q of all) {
    bank.questoes.push({ id: nid++, ...q });
  }
  fs.writeFileSync(Q_PATH, JSON.stringify(bank, null, 2) + '\n', 'utf8');
  console.log(
    JSON.stringify(
      { removedMod14: removedN, generated: all.length, aulas: aulas.length, errors, nextId: nid },
      null,
      2
    )
  );
}

main();
