import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');
const QUESTOES_PATH = path.join(ROOT, 'data', 'questoes.json');
const MATERIAS_PATH = path.join(ROOT, 'data', 'materias.json');

function norm(s) {
  return String(s || '').replace(/\s+/g, ' ').trim();
}

function getAulaMap(materias) {
  const map = new Map();
  for (const [materiaId, m] of Object.entries(materias)) {
    for (const a of (m.aulas || [])) {
      map.set(a.id, {
        materiaId,
        modulo: m.modulo,
        sigla: m.sigla,
        aulaTema: norm(a.tema),
        aulaDesc: norm(a.descricao),
      });
    }
  }
  return map;
}

function letter(i) {
  return ['A', 'B', 'C', 'D'][i] || 'A';
}

function buildItem(meta, idx) {
  const tema = meta.aulaTema || meta.tema || 'tema da aula';
  const desc = meta.aulaDesc || 'conteúdo central da aula';
  const clinical = [2, 5, 8].includes(idx);
  const correct = idx % 4;

  const models = [
    {
      enunciado: `Em relação a "${tema}", qual alternativa está mais alinhada ao foco da aula?`,
      opcoes: [
        'A) Afirmar regra absoluta sem considerar contexto fisiopatológico.',
        `B) Integrar definição, mecanismo e aplicação prática de ${tema.toLowerCase()}.`,
        'C) Tratar o conteúdo apenas como lista de termos sem raciocínio.',
        'D) Ignorar relação com outras disciplinas do módulo.'
      ],
      key: 1
    },
    {
      enunciado: `Qual interpretação é mais adequada para diferenciar compreensão superficial de raciocínio aplicado em "${tema}"?`,
      opcoes: [
        'A) Memorizar nomenclatura isolada sem analisar causalidade.',
        'B) Relacionar achado, mecanismo e consequência clínica/funcional.',
        'C) Escolher a alternativa mais extensa por parecer completa.',
        'D) Desconsiderar dados que contradizem hipótese inicial.'
      ],
      key: 1
    },
    {
      enunciado: `Caso clínico: paciente com quadro compatível com "${tema}" apresenta dados iniciais conflitantes. Qual é a melhor conduta de raciocínio inicial?`,
      opcoes: [
        'A) Fechar diagnóstico definitivo sem checar critérios objetivos.',
        'B) Organizar hipótese principal, diferenciais e critérios de confirmação.',
        'C) Excluir hipótese principal por um sinal inespecífico isolado.',
        'D) Indicar conduta final antes de integrar clínica e exames.'
      ],
      key: 1
    },
    {
      enunciado: `No contexto de "${tema}", qual alternativa representa melhor um distrator plausível de prova?`,
      opcoes: [
        'A) Conceito parcialmente correto aplicado no contexto errado.',
        'B) Frase sem relação técnica com o enunciado.',
        'C) Opção deliberadamente absurda e facilmente eliminável.',
        'D) Termo repetido sem proposição verificável.'
      ],
      key: 0
    },
    {
      enunciado: `Em revisão para prova de "${tema}", qual estratégia tende a aumentar acerto em questões integradas?`,
      opcoes: [
        'A) Resolver apenas questões de definição direta.',
        'B) Treinar mecanismo, comparação e erro típico de alternativa.',
        'C) Memorizar posição de gabarito mais frequente.',
        'D) Evitar interpretação de cenário aplicado.'
      ],
      key: 1
    },
    {
      enunciado: `Caso clínico aplicado a "${tema}": após intervenção inicial, qual critério sugere evolução favorável?`,
      opcoes: [
        'A) Melhorar só sintoma subjetivo sem dado objetivo.',
        'B) Melhorar coerentemente clínica e parâmetro esperado.',
        'C) Alterar exame isolado sem correlação temporal.',
        'D) Persistir piora clínica com marcador inalterado.'
      ],
      key: 1
    },
    {
      enunciado: `No tema "${tema}", o que caracteriza uma alternativa tecnicamente correta em avaliação da graduação?`,
      opcoes: [
        'A) Linguagem categórica sem ressalvas de contexto.',
        'B) Coerência entre conceito, critério e aplicação da aula.',
        'C) Jargão complexo sem base verificável.',
        'D) Generalização que ignora mecanismo.'
      ],
      key: 1
    },
    {
      enunciado: `Ao estudar "${tema}", qual erro de raciocínio é mais comum e deve ser evitado?`,
      opcoes: [
        'A) Reavaliar hipótese após novo dado objetivo.',
        'B) Integrar história, exame e fisiopatologia.',
        'C) Confundir associação frequente com causa obrigatória.',
        'D) Diferenciar hipótese principal de diagnósticos diferenciais.'
      ],
      key: 2
    },
    {
      enunciado: `Caso clínico curto em "${tema}": duas hipóteses são próximas. Qual elemento costuma desempatar melhor?`,
      opcoes: [
        'A) Dado discriminativo com maior valor no contexto clínico.',
        'B) Preferência subjetiva do examinador.',
        'C) Sinal inespecífico presente em ambas hipóteses.',
        'D) Alternativa com mais palavras técnicas.'
      ],
      key: 0
    },
    {
      enunciado: `Considerando "${tema}" (${desc}), qual alternativa melhor reflete integração adequada para o módulo?`,
      opcoes: [
        'A) Conteúdo isolado, sem conexão com semiologia e fisiopatologia.',
        'B) Tema restrito a memorização de termos.',
        'C) Tema integrador de base conceitual e decisão prática.',
        'D) Tema irrelevante para progressão curricular.'
      ],
      key: 2
    }
  ];

  const model = models[idx % 10];
  const effectiveCorrect = model.key;
  const opcoes = model.opcoes.map((t, i) => {
    const plain = String(t).replace(/^[A-D]\)\s*/, '').trim();
    return `${letter(i)}) ${plain}`;
  });

  const explicacaoGeral = clinical
    ? `A questão exige interpretação aplicada de "${tema}", com integração entre dados do cenário e critério objetivo da aula.`
    : `A questão avalia coerência conceitual de "${tema}" e aplicação correta do conteúdo-base do módulo.`;

  const explicacoesOpcoes = {
    A: effectiveCorrect === 0
      ? `Correta: descreve a conduta mais consistente com o conteúdo de ${tema}.`
      : `Incorreta: apresenta simplificação inadequada para o contexto de ${tema}.`,
    B: effectiveCorrect === 1
      ? `Correta: mantém vínculo entre definição, mecanismo e aplicação prática de ${tema}.`
      : `Incorreta: falha por contexto inadequado ou raciocínio incompleto em ${tema}.`,
    C: effectiveCorrect === 2
      ? `Correta: representa a interpretação mais alinhada com os critérios do tema.`
      : `Incorreta: não sustenta a decisão correta para ${tema}.`,
    D: effectiveCorrect === 3
      ? `Correta: contempla o critério técnico esperado para a aula.`
      : `Incorreta: usa atalho de prova sem base técnica suficiente.`
  };

  const explicacao = [
    `Resumo: ${explicacaoGeral}`,
    `A) ${effectiveCorrect === 0 ? 'CORRETA' : 'INCORRETA'}. ${explicacoesOpcoes.A}`,
    `B) ${effectiveCorrect === 1 ? 'CORRETA' : 'INCORRETA'}. ${explicacoesOpcoes.B}`,
    `C) ${effectiveCorrect === 2 ? 'CORRETA' : 'INCORRETA'}. ${explicacoesOpcoes.C}`,
    `D) ${effectiveCorrect === 3 ? 'CORRETA' : 'INCORRETA'}. ${explicacoesOpcoes.D}`
  ].join('\n');

  return {
    enunciado: model.enunciado,
    opcoes,
    correta: effectiveCorrect,
    explicacao,
    explicacao_geral: explicacaoGeral,
    explicacoes_opcoes: explicacoesOpcoes,
    dificuldade: clinical ? 3 : 2
  };
}

function main() {
  const materias = JSON.parse(fs.readFileSync(MATERIAS_PATH, 'utf8'));
  const aulaMap = getAulaMap(materias);
  const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf8'));
  const questoes = Array.isArray(data.questoes) ? data.questoes : [];

  const grouped = new Map();
  for (const q of questoes) {
    const key = `${q.materia}::${q.tema}`;
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(q);
  }
  for (const arr of grouped.values()) arr.sort((a, b) => Number(a.id) - Number(b.id));

  const refined = [];
  for (const [key, arr] of grouped.entries()) {
    const [materiaId, tema] = key.split('::');
    const meta = aulaMap.get(tema) || {
      materiaId,
      modulo: arr[0]?.modulo || 1,
      aulaTema: norm(tema),
      aulaDesc: ''
    };

    arr.forEach((q, idx) => {
      const rebuilt = buildItem(meta, idx % 10);
      refined.push({
        ...q,
        materia: materiaId,
        tema,
        modulo: meta.modulo,
        ...rebuilt
      });
    });
  }

  refined.sort((a, b) => Number(a.id) - Number(b.id));
  fs.writeFileSync(QUESTOES_PATH, JSON.stringify({ questoes: refined }, null, 2), 'utf8');

  let clinical = 0;
  let missing = 0;
  for (const q of refined) {
    if (String(q.enunciado).toLowerCase().includes('caso clínico')) clinical++;
    const eo = q.explicacoes_opcoes || {};
    if (!q.explicacao_geral || !eo.A || !eo.B || !eo.C || !eo.D) missing++;
  }

  console.log('Questões refinadas:', refined.length);
  console.log('Casos clínicos:', clinical, `(${((clinical / Math.max(refined.length, 1)) * 100).toFixed(1)}%)`);
  console.log('Estrutura faltante:', missing);
}

main();
