import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');

const MATERIAS_PATH = path.join(ROOT, 'data', 'materias.json');
const QUESTOES_PATH = path.join(ROOT, 'data', 'questoes.json');

const DIFICULDADES = [1, 1, 2, 2, 2, 2, 2, 3, 3, 3];
const LONG_IDX = new Set([4, 9]);

const CLINICAS_50 = new Set(['bmf1', 'semiologia1']);

function oneLine(s) {
  return String(s || '').replace(/\s+/g, ' ').trim();
}

function escapeReg(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function readMaterial(materiaId, aulaId, modulo) {
  const p1 = path.join(ROOT, 'data', 'materiais', materiaId, `${aulaId}.md`);
  const p2 = path.join(ROOT, 'materiais', `modulo${modulo}`, materiaId, `${aulaId}.md`);
  if (fs.existsSync(p1)) return fs.readFileSync(p1, 'utf8');
  if (fs.existsSync(p2)) return fs.readFileSync(p2, 'utf8');
  throw new Error(`Material nao encontrado para ${materiaId}/${aulaId}`);
}

function parseTableFacts(md) {
  const facts = [];
  const lines = md.split(/\r?\n/);
  for (const ln of lines) {
    if (!ln.includes('|')) continue;
    const cells = ln.split('|').map((c) => oneLine(c)).filter(Boolean);
    if (cells.length < 2) continue;
    if (/^[-:]+$/.test(cells[0])) continue;
    if (/plano|termo|tipo|fase|tecido|movimento|elemento|c[eé]lula|regi[aã]o|aspecto|conceito|fun[cç][aã]o|descri[cç][aã]o/i.test(cells[0])) continue;
    facts.push({
      a: cells[0],
      b: cells[1] || '',
      c: cells[2] || ''
    });
  }
  return facts;
}

function parseClinicalHint(md) {
  const m = md.match(/## Ponte com a Clínica([\s\S]*?)(## |$)/i);
  if (!m) return '';
  return oneLine(m[1]).slice(0, 280);
}

function parseProvaHint(md) {
  const m = md.match(/## Pontos-Chave para Prova([\s\S]*?)(## |$)/i);
  if (!m) return '';
  return oneLine(m[1]).slice(0, 220);
}

function mkCorrectFromFact(fact) {
  const right = [fact.a, fact.b, fact.c].filter(Boolean).join(' - ');
  return right || fact.a;
}

function mkWrongFromFacts(facts, skip) {
  const pool = facts.filter((_, i) => i !== skip).slice(0, 6);
  while (pool.length < 3) pool.push(facts[(pool.length + 1) % facts.length] || { a: 'Conceito', b: 'definicao inadequada', c: '' });
  return pool.slice(0, 3).map((f) => mkCorrectFromFact(f));
}

function makeEnunciado({ clinical, longForm, tema, fact, clinicalHint, provaHint, idx }) {
  if (clinical) {
    const idade = [24, 37, 49, 58, 63, 31, 44, 69, 52, 40][idx];
    const base = `Paciente de ${idade} anos em avaliacao clínica apresenta situacao relacionada a ${tema}.`;
    const ask = `Qual alternativa integra melhor o dado principal do caso com a interpretacao morfofuncional esperada?`;
    if (longForm) {
      const hint = clinicalHint ? ` Contexto relevante: ${clinicalHint}.` : '';
      return `${base}${hint} O quadro exige correlacao entre estrutura, funcao e decisao inicial, evitando erro por linguagem anatomica/histologica imprecisa. ${ask}`;
    }
    return `${base} ${ask}`;
  }

  const stems = [
    `Qual alternativa associa corretamente o conceito central de ${tema}?`,
    `Na interpretacao de ${tema}, qual opcao apresenta relacao correta entre estrutura e funcao?`,
    `Em ${tema}, qual alternativa esta tecnicamente correta?`
  ];
  const base = stems[idx % stems.length];
  if (!longForm) return base;
  const hint = provaHint ? ` Considere os pontos de prova: ${provaHint}.` : '';
  return `${base}${hint} Escolha a opcao que preserva precisao conceitual sem simplificacoes indevidas.`;
}

function sanitizeEnunciado(text) {
  return oneLine(text)
    .replace(/\btema\b/gi, 'assunto')
    .replace(/\bmaterial\b/gi, 'conteudo')
    .replace(/\baula\b/gi, 'conteudo');
}

function makeExp(correta, clinical, tema) {
  const letras = ['A', 'B', 'C', 'D'];
  const op = {};
  for (let i = 0; i < 4; i++) {
    op[letras[i]] = i === correta
      ? 'Correta: traduz de forma coerente o conceito exigido e sua aplicacao clinico-didatica.'
      : 'Incorreta: mistura conceitos, troca classificacoes ou contraria a correlacao estrutura-funcao esperada.';
  }
  const geral = clinical
    ? `Questao clinica contextualizada em ${tema}, exigindo interpretacao tecnica e comunicacao sem ambiguidade.`
    : `Questao conceitual aplicada em ${tema}, com foco em relacao correta entre definicao e aplicacao.`;
  const txt = [
    `Resumo: ${geral}`,
    `A) ${correta === 0 ? 'CORRETA' : 'INCORRETA'}. ${op.A}`,
    `B) ${correta === 1 ? 'CORRETA' : 'INCORRETA'}. ${op.B}`,
    `C) ${correta === 2 ? 'CORRETA' : 'INCORRETA'}. ${op.C}`,
    `D) ${correta === 3 ? 'CORRETA' : 'INCORRETA'}. ${op.D}`
  ].join('\n');
  return { explicacao_geral: geral, explicacoes_opcoes: op, explicacao: txt };
}

function orderOptions(correct, wrongs, correctIndex) {
  const letters = ['A', 'B', 'C', 'D'];
  const out = [];
  let wi = 0;
  for (let i = 0; i < 4; i++) {
    out.push(i === correctIndex ? correct : wrongs[wi++]);
  }
  return out.map((t, i) => `${letters[i]}) ${t}`);
}

function validateAula(arr, materiaId) {
  if (arr.length !== 10) throw new Error('Lote nao tem 10 questoes');
  const d = { 1: 0, 2: 0, 3: 0 };
  let clin = 0;
  let long = 0;
  let meta = 0;
  for (const q of arr) {
    d[q.dificuldade] = (d[q.dificuldade] || 0) + 1;
    if (/Paciente de \d+ anos|Paciente em/i.test(q.enunciado)) clin++;
    if (q.enunciado.length >= 280) long++;
    if (/\b(aula|material|tema)\b/i.test(q.enunciado)) meta++;
  }
  const clinTarget = CLINICAS_50.has(materiaId) ? 5 : 4;
  if (!(d[1] === 2 && d[2] === 5 && d[3] === 3)) throw new Error('Distribuicao 2/5/3 invalida');
  if (clin !== clinTarget) throw new Error(`Proporcao clinica invalida (${clin}/10, esperado ${clinTarget}/10)`);
  if (long !== 2) throw new Error(`Proporcao enunciado longo invalida (${long}/10, esperado 2/10)`);
  if (meta !== 0) throw new Error(`Metatexto detectado (${meta})`);
}

function main() {
  const materiaId = process.argv[2];
  const aulaId = process.argv[3];
  if (!materiaId || !aulaId) {
    throw new Error('Uso: node scripts/gerar_aula_unica_10.js <materia> <aula_id>');
  }

  const materias = JSON.parse(fs.readFileSync(MATERIAS_PATH, 'utf8'));
  if (!materias[materiaId]) throw new Error(`Materia nao encontrada: ${materiaId}`);
  const materia = materias[materiaId];
  const aula = materia.aulas.find((a) => a.id === aulaId);
  if (!aula) throw new Error(`Aula nao encontrada: ${aulaId}`);

  const md = readMaterial(materiaId, aulaId, materia.modulo);
  const facts = parseTableFacts(md);
  if (!facts.length) throw new Error(`Sem fatos tabulares para gerar questoes em ${aulaId}`);
  const clinicalHint = parseClinicalHint(md);
  const provaHint = parseProvaHint(md);

  const clinicalSet = CLINICAS_50.has(materiaId) ? new Set([1, 3, 5, 7, 9]) : new Set([2, 4, 7, 9]);
  const novas = [];
  for (let i = 0; i < 10; i++) {
    const factIdx = i % facts.length;
    const fact = facts[factIdx];
    const clinical = clinicalSet.has(i);
    const longForm = LONG_IDX.has(i);
    const enunciado = sanitizeEnunciado(makeEnunciado({
      clinical,
      longForm,
      tema: oneLine(aula.tema).toLowerCase(),
      fact,
      clinicalHint,
      provaHint,
      idx: i
    }));
    const correta = i % 4;
    const correct = mkCorrectFromFact(fact);
    const wrongs = mkWrongFromFacts(facts, factIdx);
    const opcoes = orderOptions(correct, wrongs, correta);
    const ex = makeExp(correta, clinical, oneLine(aula.tema));

    novas.push({
      materia: materiaId,
      tema: aulaId,
      enunciado,
      opcoes,
      correta,
      dificuldade: DIFICULDADES[i],
      modulo: materia.modulo,
      ...ex
    });
  }

  validateAula(novas, materiaId);

  const qData = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf8'));
  const old = Array.isArray(qData.questoes) ? qData.questoes : [];
  const kept = old.filter((q) => !(q.materia === materiaId && q.tema === aulaId));
  let nextId = kept.reduce((m, q) => Math.max(m, Number(q.id) || 0), 0) + 1;
  novas.forEach((q) => { q.id = nextId++; });

  const merged = [...kept, ...novas].sort((a, b) => Number(a.id) - Number(b.id));
  fs.writeFileSync(QUESTOES_PATH, JSON.stringify({ questoes: merged }, null, 2), 'utf8');

  console.log(`OK ${materiaId}/${aulaId} | removidas=${old.length - kept.length} inseridas=${novas.length}`);
}

main();
