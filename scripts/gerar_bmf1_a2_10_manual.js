import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');
const QUESTOES_PATH = path.join(ROOT, 'data', 'questoes.json');

function explain(geral, correta) {
  const letras = ['A', 'B', 'C', 'D'];
  const op = {};
  for (let i = 0; i < 4; i++) {
    op[letras[i]] = i === correta
      ? 'Correta: alternativa alinhada à histologia básica e à aplicação clínico-patológica esperada.'
      : 'Incorreta: alternativa apresenta erro de conceito, classificação tecidual ou correlação clínica.'
  }
  const txt = [
    `Resumo: ${geral}`,
    `A) ${correta === 0 ? 'CORRETA' : 'INCORRETA'}. ${op.A}`,
    `B) ${correta === 1 ? 'CORRETA' : 'INCORRETA'}. ${op.B}`,
    `C) ${correta === 2 ? 'CORRETA' : 'INCORRETA'}. ${op.C}`,
    `D) ${correta === 3 ? 'CORRETA' : 'INCORRETA'}. ${op.D}`
  ].join('\n');
  return { explicacao_geral: geral, explicacoes_opcoes: op, explicacao: txt };
}

const questoesBase = [
  {
    enunciado: 'Qual tecido é caracterizado por alta celularidade, polaridade apical-basal e baixa matriz extracelular?',
    opcoes: ['A) Tecido epitelial.', 'B) Tecido conjuntivo denso.', 'C) Tecido cartilaginoso.', 'D) Tecido ósseo.'],
    correta: 0, dificuldade: 1, clin: false
  },
  {
    enunciado: 'Paciente de 46 anos, tabagista, apresenta bronquite crônica com substituição do epitélio respiratório cilíndrico ciliado por epitélio escamoso estratificado. Esse achado corresponde a:',
    opcoes: ['A) Displasia de alto grau.', 'B) Metaplasia epitelial adaptativa.', 'C) Neoplasia invasiva obrigatória.', 'D) Hiperplasia conjuntiva.'],
    correta: 1, dificuldade: 2, clin: true
  },
  {
    enunciado: 'No tecido conjuntivo, qual componente é mais diretamente responsável pela resistência à tração?',
    opcoes: ['A) Fibras reticulares.', 'B) Substância fundamental amorfa.', 'C) Fibras colágenas, especialmente colágeno tipo I.', 'D) Mastócitos ativados.'],
    correta: 2, dificuldade: 1, clin: false
  },
  {
    enunciado: 'Paciente de 59 anos, com dor torácica aguda, evolui com infarto do miocárdio. Na análise histológica do tecido muscular cardíaco, qual característica o diferencia do músculo esquelético?',
    opcoes: [
      'A) Ausência total de estriações.',
      'B) Fibras multinucleadas com núcleos periféricos predominantes.',
      'C) Presença de discos intercalares e núcleos centrais.',
      'D) Controle voluntário pelo córtex motor.'
    ],
    correta: 2, dificuldade: 2, clin: true
  },
  {
    enunciado: 'Paciente com ferida cirúrgica no pós-operatório evolui para fase proliferativa de cicatrização. Nesse estágio, espera-se aumento de fibroblastos, angiogênese e formação de tecido de granulação. Qual afirmação melhor descreve esse processo e sua relação com reparo tecidual?',
    opcoes: [
      'A) Há predomínio de necrose sem síntese de matriz extracelular.',
      'B) O reparo ocorre sem participação vascular e sem deposição de colágeno.',
      'C) O tecido de granulação contribui para preenchimento da lesão e organização da cicatriz.',
      'D) A fase proliferativa impede remodelação posterior do colágeno.'
    ],
    correta: 2, dificuldade: 3, clin: true
  },
  {
    enunciado: 'Qual célula glial é responsável pela mielinização no sistema nervoso periférico?',
    opcoes: ['A) Astrócito.', 'B) Oligodendrócito.', 'C) Micróglia.', 'D) Célula de Schwann.'],
    correta: 3, dificuldade: 2, clin: false
  },
  {
    enunciado: 'Paciente de 34 anos apresenta reação anafilática após uso de antibiótico. Qual célula do tecido conjuntivo participa diretamente da liberação de histamina nesse contexto?',
    opcoes: ['A) Fibroblasto.', 'B) Mastócito.', 'C) Condrócito.', 'D) Osteoblasto.'],
    correta: 1, dificuldade: 2, clin: true
  },
  {
    enunciado: 'Em relação aos epitélios de revestimento, qual alternativa está correta?',
    opcoes: [
      'A) O epitélio estratificado escamoso sempre é queratinizado.',
      'B) O epitélio pseudostratificado possui todas as células tocando a membrana basal.',
      'C) O epitélio simples cúbico é típico do endotélio vascular.',
      'D) O epitélio colunar simples não participa de absorção.'
    ],
    correta: 1, dificuldade: 2, clin: false
  },
  {
    enunciado: 'Paciente de 62 anos com cirrose avançada apresenta substituição progressiva do parênquima hepático por septos fibrosos, com distorção da arquitetura lobular e perda funcional. À luz da histologia tecidual e dos mecanismos de reparo, qual interpretação é mais adequada?',
    opcoes: [
      'A) Regeneração completa do epitélio hepático sem impacto funcional.',
      'B) Reparo fibroso crônico com deposição de matriz extracelular e prejuízo estrutural.',
      'C) Metaplasia óssea fisiológica do fígado em resposta ao estresse.',
      'D) Aumento de tecido muscular liso como principal base da doença.'
    ],
    correta: 1, dificuldade: 3, clin: true
  },
  {
    enunciado: 'Paciente em revisão tardia de ferida cirúrgica apresenta cicatriz estável em fase de remodelação. A substituição predominante do colágeno tipo III por tipo I está associada a:',
    opcoes: [
      'A) Maior resistência tênsil do tecido reparado.',
      'B) Redução completa da matriz extracelular.',
      'C) Desaparecimento de fibroblastos e vasos no primeiro dia.',
      'D) Conversão obrigatória em tecido cartilaginoso.'
    ],
    correta: 0, dificuldade: 3, clin: true
  }
];

function main() {
  const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf8'));
  const arr = Array.isArray(data.questoes) ? data.questoes : [];
  const kept = arr.filter((q) => !(q.materia === 'bmf1' && q.tema === 'bmf1_a2'));
  let nextId = kept.reduce((m, q) => Math.max(m, Number(q.id) || 0), 0) + 1;

  const novas = questoesBase.map((q) => {
    const ex = explain(
      q.clin
        ? 'Questão clínica de histologia aplicada, relacionando estrutura tecidual, adaptação e repercussão funcional.'
        : 'Questão conceitual de tecidos humanos, focada em classificação, estrutura e função.',
      q.correta
    );
    return {
      id: nextId++,
      materia: 'bmf1',
      tema: 'bmf1_a2',
      enunciado: q.enunciado,
      opcoes: q.opcoes,
      correta: q.correta,
      explicacao: ex.explicacao,
      explicacao_geral: ex.explicacao_geral,
      explicacoes_opcoes: ex.explicacoes_opcoes,
      dificuldade: q.dificuldade,
      modulo: 1
    };
  });

  const merged = [...kept, ...novas].sort((a, b) => Number(a.id) - Number(b.id));
  fs.writeFileSync(QUESTOES_PATH, JSON.stringify({ questoes: merged }, null, 2), 'utf8');
  console.log('Removidas bmf1_a2:', arr.length - kept.length);
  console.log('Inseridas bmf1_a2:', novas.length);
}

main();
