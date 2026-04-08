import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');

const MATERIAS_PATH = path.join(ROOT, 'data', 'materias.json');
const QUESTOES_PATH = path.join(ROOT, 'data', 'questoes.json');

const DIFICULDADES = [1, 1, 2, 2, 2, 2, 2, 3, 3, 3]; // 2/5/3
const LONGAS_IDX = new Set([4, 9]); // 20%
const MATERIAS_CLINICAS_50 = new Set(['bmf1', 'semiologia1']); // 50% clinico

const LETRAS = ['A', 'B', 'C', 'D'];

function getModulo1Targets(materias) {
  return Object.entries(materias)
    .filter(([, v]) => v.modulo === 1 && v.ativo)
    .map(([id]) => id);
}

function clinicalIndexesForMateria(materiaId) {
  // 50% para BMF e ciclo clinico; 40% para as demais (dentro da faixa 30-40%)
  if (MATERIAS_CLINICAS_50.has(materiaId)) return new Set([1, 3, 5, 7, 9]);
  return new Set([2, 4, 7, 9]);
}

function oneLine(s) {
  return String(s || '').replace(/\s+/g, ' ').trim();
}

function makeFocus(tema, descricao) {
  const t = oneLine(tema).replace(/[—-]/g, ' - ');
  const d = oneLine(descricao);
  const shortD = d.length > 110 ? `${d.slice(0, 107)}...` : d;
  return { t, d: shortD };
}

function makeClinicalStem(focus, idx, longForm) {
  const age = [22, 34, 47, 58, 63, 29, 41, 72, 55, 38][idx % 10];
  const ctx = [
    'atendido na UBS',
    'em retorno ambulatorial',
    'avaliado em consulta compartilhada',
    'em seguimento longitudinal na APS',
    'em primeira consulta com a equipe multiprofissional'
  ][idx % 5];

  if (longForm) {
    return `Paciente de ${age} anos, ${ctx}, apresenta quadro relacionado a ${focus.t}. O caso envolve sinais clinicos e contexto funcional que exigem priorizacao de condutas e interpretacao coerente dos achados. Considerando risco, organizacao do cuidado e tomada de decisao baseada em principios tecnicos, avalie os dados, compare possibilidades e selecione a alternativa que melhor representa a conduta inicial mais consistente para este contexto.`;
  }

  return `Paciente de ${age} anos, ${ctx}, apresenta quadro associado a ${focus.t}. Qual alternativa indica a conduta inicial mais adequada?`;
}

function makeConceptStem(focus, idx, longForm) {
  const starters = [
    `Sobre ${focus.t}, assinale a alternativa correta.`,
    `Na abordagem de ${focus.t}, qual afirmacao esta correta?`,
    `Considerando ${focus.t}, qual opcao melhor representa o raciocinio esperado?`,
    `Em relacao a ${focus.t}, qual alternativa integra melhor conceito e aplicacao?`
  ];
  const base = starters[idx % starters.length];
  if (!longForm) return base;
  return `${base} Analise definicao, mecanismo envolvido, limites de aplicacao e impacto pratico no cuidado para identificar a resposta mais consistente com a aplicacao clinico-didatica do tema, evitando simplificacoes que comprometam o raciocinio tecnico esperado.`;
}

function makeCorrectOption(materiaNome, focus, clinical) {
  if (clinical) {
    return `Priorizar avaliacao estruturada, correlacionar achados com ${focus.t.toLowerCase()} e definir plano inicial com seguranca.`;
  }
  return `Mantem coerencia entre conceito central de ${materiaNome}, mecanismo e aplicacao pratica em ${focus.t.toLowerCase()}.`;
}

function makeWrongOptions(materiaNome, focus) {
  return [
    `Reduz a analise a etapa isolada, desconsiderando integracao necessaria em ${focus.t.toLowerCase()}.`,
    `Apresenta simplificacao indevida do tema e inferencia que contraria a logica tecnica de ${materiaNome}.`,
    `Propõe conduta sem relacao com os achados principais e sem vinculo com ${focus.t.toLowerCase()}.`
  ];
}

function orderOptions(correct, wrongs, correctIndex) {
  const list = [];
  let w = 0;
  for (let i = 0; i < 4; i++) {
    list.push(i === correctIndex ? correct : wrongs[w++]);
  }
  return list.map((txt, i) => `${LETRAS[i]}) ${txt}`);
}

function makeExplanations(meta, correctIndex) {
  const geral = meta.clinical
    ? `Questao clinica contextualizada em ${meta.focus.t}, exigindo priorizacao de conduta e interpretacao integrada dos dados.`
    : `Questao conceitual aplicada em ${meta.focus.t}, cobrando coerencia entre fundamento teorico e uso pratico.`;

  const op = {};
  for (let i = 0; i < 4; i++) {
    op[LETRAS[i]] = i === correctIndex
      ? 'Correta: resposta consistente com o problema e com os criterios tecnico-cientificos esperados.'
      : 'Incorreta: alternativa contem erro de raciocinio, simplificacao indevida ou conduta inadequada para o contexto.';
  }

  const explicacao = [
    `Resumo: ${geral}`,
    `A) ${correctIndex === 0 ? 'CORRETA' : 'INCORRETA'}. ${op.A}`,
    `B) ${correctIndex === 1 ? 'CORRETA' : 'INCORRETA'}. ${op.B}`,
    `C) ${correctIndex === 2 ? 'CORRETA' : 'INCORRETA'}. ${op.C}`,
    `D) ${correctIndex === 3 ? 'CORRETA' : 'INCORRETA'}. ${op.D}`
  ].join('\n');

  return { explicacao_geral: geral, explicacoes_opcoes: op, explicacao };
}

function makeQuestion({ materiaId, materiaNome, modulo, aula, idx, clinicalSet }) {
  const focus = makeFocus(aula.tema, aula.descricao);
  const clinical = clinicalSet.has(idx);
  const longForm = LONGAS_IDX.has(idx);

  const enunciado = clinical
    ? makeClinicalStem(focus, idx, longForm)
    : makeConceptStem(focus, idx, longForm);

  const correctText = makeCorrectOption(materiaNome, focus, clinical);
  const wrongs = makeWrongOptions(materiaNome, focus);
  const correta = idx % 4;
  const opcoes = orderOptions(correctText, wrongs, correta);
  const ex = makeExplanations({ focus, clinical }, correta);

  return {
    materia: materiaId,
    tema: aula.id,
    enunciado,
    opcoes,
    correta,
    dificuldade: DIFICULDADES[idx],
    modulo,
    ...ex
  };
}

function main() {
  const materias = JSON.parse(fs.readFileSync(MATERIAS_PATH, 'utf8'));
  const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf8'));
  const atuais = Array.isArray(data.questoes) ? data.questoes : [];

  const targets = getModulo1Targets(materias);
  const kept = atuais.filter((q) => !targets.includes(q.materia));
  let nextId = kept.reduce((m, q) => Math.max(m, Number(q.id) || 0), 0) + 1;

  const novas = [];
  for (const materiaId of targets) {
    const m = materias[materiaId];
    const clinicalSet = clinicalIndexesForMateria(materiaId);
    for (const aula of m.aulas) {
      for (let i = 0; i < 10; i++) {
        const q = makeQuestion({
          materiaId,
          materiaNome: m.nome,
          modulo: m.modulo,
          aula,
          idx: i,
          clinicalSet
        });
        q.id = nextId++;
        novas.push(q);
      }
    }
  }

  const merged = [...kept, ...novas].sort((a, b) => Number(a.id) - Number(b.id));
  fs.writeFileSync(QUESTOES_PATH, JSON.stringify({ questoes: merged }, null, 2), 'utf8');

  const byMateria = {};
  for (const q of novas) {
    byMateria[q.materia] = (byMateria[q.materia] || 0) + 1;
  }

  console.log('Materias modulo 1 geradas:', targets.join(', '));
  console.log('Questoes removidas modulo 1:', atuais.length - kept.length);
  console.log('Questoes inseridas modulo 1:', novas.length);
  console.log('Total final:', merged.length);
  console.log('Por materia:', JSON.stringify(byMateria));
}

main();
