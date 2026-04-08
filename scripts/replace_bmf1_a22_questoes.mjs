/**
 * Uma aula por vez: substitui somente bmf1_a22 (ids 402-411).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, "..", "data", "questoes.json");

const novas = [
  {
    id: 402,
    materia: "bmf1",
    tema: "bmf1_a22",
    modulo: 1,
    dificuldade: 2,
    correta: 0,
    enunciado:
      "No roteiro pratico do digestorio, qual estrutura marca a fronteira funcional entre esofago e estomago?",
    opcoes: [
      "A) Cardias com o conceito de esfinter esofagico inferior",
      "B) Piloro",
      "C) Valvula ileocecal",
      "D) Linha pectinea",
    ],
    explicacao_geral:
      "A estacao pratica costuma cobrar os pontos de junção principais do tubo.",
    explicacoes_opcoes: {
      A: "Correta: junção esofagogastrica funcional.",
      B: "Incorreta: piloro e junção gastroduodenal.",
      C: "Incorreta: marca transicao delgado-grosso.",
      D: "Incorreta: referencia distal no canal anal.",
    },
    explicacao:
      "Resumo: Cardias/EEI e o primeiro grande marco de transicao no tubo proximal.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 403,
    materia: "bmf1",
    tema: "bmf1_a22",
    modulo: 1,
    dificuldade: 1,
    correta: 1,
    enunciado:
      "A orientacao direita-esquerda no modelo anatomico deve ser feita, segundo a dica da aula, considerando:",
    opcoes: [
      "A) Direita e esquerda do observador de frente para o modelo",
      "B) Direita e esquerda do paciente em decubito dorsal (referencial do cadaver)",
      "C) Sempre o lado com mais estruturas visiveis",
      "D) O sentido cranio-caudal sem referencia lateral",
    ],
    explicacao_geral:
      "Erro comum em prova pratica e inverter lateralidade por referencia do examinador.",
    explicacoes_opcoes: {
      A: "Incorreta: pode inverter lateralidade.",
      B: "Correta: e a orientacao padrao ensinada.",
      C: "Incorreta: criterio arbitrario.",
      D: "Incorreta: falta eixo laterolateral.",
    },
    explicacao:
      "Resumo: A referencia e sempre o paciente/cadaver, nao o observador.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 404,
    materia: "bmf1",
    tema: "bmf1_a22",
    modulo: 1,
    dificuldade: 1,
    correta: 2,
    enunciado:
      "Qual ponto de junção separa estomago de duodeno?",
    opcoes: [
      "A) Cardias",
      "B) Ampola hepatopancreatica",
      "C) Piloro",
      "D) Valvula ileocecal",
    ],
    explicacao_geral:
      "Piloro e marco de transicao indispensavel no roteiro oral->anus.",
    explicacoes_opcoes: {
      A: "Incorreta: cardias e proximal.",
      B: "Incorreta: ampola esta no duodeno descendente.",
      C: "Correta: limite gastroduodenal.",
      D: "Incorreta: limite ileo-colico.",
    },
    explicacao:
      "Resumo: Piloro fecha o estomago e abre o duodeno.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 405,
    materia: "bmf1",
    tema: "bmf1_a22",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "Na etapa do estomago do checklist pratico, quais referencias devem ser priorizadas?",
    opcoes: [
      "A) Apenas coloracao serosa",
      "B) Somente relacao com traqueia",
      "C) Exclusivamente calibre do ileo",
      "D) Curvaturas, piloro e omento maior",
    ],
    explicacao_geral:
      "O roteiro por etapas evita pular marcos macroanatomicos importantes.",
    explicacoes_opcoes: {
      A: "Incorreta: dado insuficiente e pouco util.",
      B: "Incorreta: traqueia se relaciona com esofago toracico.",
      C: "Incorreta: ileo e etapa distal.",
      D: "Correta: corresponde a etapa 3 da aula.",
    },
    explicacao:
      "Resumo: No estomago, reconhecer curvaturas e piloro orienta toda a continuidade distal.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 406,
    materia: "bmf1",
    tema: "bmf1_a22",
    modulo: 1,
    dificuldade: 2,
    correta: 1,
    enunciado:
      "A ampola duodenal (hepatopancreatica) e clinicamente relevante porque:",
    opcoes: [
      "A) Marca a transicao reto-anal",
      "B) Reune o fluxo biliar e pancreatico para desembocar no duodeno",
      "C) Separa jejuno de ileo",
      "D) E origem da veia porta",
    ],
    explicacao_geral:
      "Aula integra anatomia da ampola com cobranca clinica de obstrucao biliar/pancreatite.",
    explicacoes_opcoes: {
      A: "Incorreta: refere-se a outra junção.",
      B: "Correta: e o conceito funcional-chave.",
      C: "Incorreta: nao e essa divisao.",
      D: "Incorreta: veia porta tem outra formacao.",
    },
    explicacao:
      "Resumo: Na ampola, bile e suco pancreatico convergem para o duodeno.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 407,
    materia: "bmf1",
    tema: "bmf1_a22",
    modulo: 1,
    dificuldade: 2,
    correta: 2,
    enunciado:
      "Na etapa do esofago, qual foco de orientacao anatomica e esperado?",
    opcoes: [
      "A) Diferenca entre taenias e haustra",
      "B) Porta hepatica e arvore biliar",
      "C) Relacao torax-versus-abdome e proximidade com a traqueia",
      "D) Topografia da valvula ileocecal",
    ],
    explicacao_geral:
      "A etapa 2 do roteiro destaca trajetoria e relacoes do esofago.",
    explicacoes_opcoes: {
      A: "Incorreta: tema colico.",
      B: "Incorreta: tema hepatobiliar.",
      C: "Correta: sintese da etapa correspondente.",
      D: "Incorreta: ponto distal do delgado-grosso.",
    },
    explicacao:
      "Resumo: No esofago, orientar compartimento e relacoes vizinhas e central.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 408,
    materia: "bmf1",
    tema: "bmf1_a22",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "A valvula ileocecal localiza-se entre:",
    opcoes: [
      "A) Esofago e estomago",
      "B) Estomago e duodeno",
      "C) Reto e canal anal",
      "D) Ileo terminal e ceco (transicao delgado-grosso)",
    ],
    explicacao_geral:
      "E um dos pontos de junção que a aula exige nomear sem hesitacao.",
    explicacoes_opcoes: {
      A: "Incorreta: junção cardial.",
      B: "Incorreta: junção pilorica.",
      C: "Incorreta: transicao anorretal.",
      D: "Correta: descricao anatomica correta.",
    },
    explicacao:
      "Resumo: Ileocecal e a porta de entrada do delgado no grosso.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 409,
    materia: "bmf1",
    tema: "bmf1_a22",
    modulo: 1,
    dificuldade: 3,
    correta: 0,
    enunciado:
      "Durante prova pratica, qual erro de metodo a aula destaca como frequente e capaz de induzir confusao jejuno-versus-ileo?",
    opcoes: [
      "A) Rotular ileo como jejuno sem analisar calibre e posicao das alcas",
      "B) Confirmar lateralidade pelo paciente em decubito",
      "C) Revisar referencias osseas como crista iliaca e xifoide",
      "D) Seguir checklist sequencial do tubo digestorio",
    ],
    explicacao_geral:
      "A secao de erros comuns enfatiza que observacao macro comparativa e indispensavel.",
    explicacoes_opcoes: {
      A: "Correta: e erro explicitamente citado.",
      B: "Incorreta: isso e conduta correta.",
      C: "Incorreta: isso reduz erros de orientacao.",
      D: "Incorreta: checklist melhora desempenho.",
    },
    explicacao:
      "Resumo: Sem criterio de posicao/calibre, a identificacao de alcas fica vulneravel.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 410,
    materia: "bmf1",
    tema: "bmf1_a22",
    modulo: 1,
    dificuldade: 3,
    correta: 1,
    enunciado:
      "Qual diferenciacao macro esta correta em estacao integrada de anatomia do digestorio?",
    opcoes: [
      "A) Omento maior e principal suspensor de jejuno-ileo",
      "B) Omento maior relaciona-se mais a estomago/colon transverso, enquanto mesenterio e o suspensor de jejuno-ileo",
      "C) Ambos sao sinonimos e podem ser usados indistintamente",
      "D) Mesenterio e termo exclusivo para ligamentos hepaticos",
    ],
    explicacao_geral:
      "Tabela de diferenciacoes da aula cobra justamente esse contraste.",
    explicacoes_opcoes: {
      A: "Incorreta: suspensao de jejuno-ileo e do mesenterio.",
      B: "Correta: separa papeis de forma didatica.",
      C: "Incorreta: nao sao sinonimos.",
      D: "Incorreta: definicao inadequada.",
    },
    explicacao:
      "Resumo: Omento maior e prega gastrica/colica; mesenterio ancora delgado.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 411,
    materia: "bmf1",
    tema: "bmf1_a22",
    modulo: 1,
    dificuldade: 3,
    correta: 3,
    enunciado:
      "A linha pectinea, no nivel da aula pratica, e melhor lembrada como:",
    opcoes: [
      "A) Limite entre estomago e duodeno",
      "B) Ponto de desembocadura do ducto pancreatico principal",
      "C) Uniao entre ducto cistico e hepatico comum",
      "D) Referencia de transicao reto-anal com importancia anatomica e variacoes de representacao entre atlas",
    ],
    explicacao_geral:
      "Embora detalhamento proctologico seja posterior, o marco anatomico deve ser reconhecido.",
    explicacoes_opcoes: {
      A: "Incorreta: isso descreve o piloro.",
      B: "Incorreta: isso e papila maior/ampola.",
      C: "Incorreta: isso forma o coledoco.",
      D: "Correta: descreve a linha pectinea no contexto do roteiro.",
    },
    explicacao:
      "Resumo: Linha pectinea e um marco distal anorretal util em integracao anatomica.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
];

function main() {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const arr = data.questoes;
  const map = Object.fromEntries(novas.map((x) => [x.id, x]));
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i].id] && arr[i].tema === "bmf1_a22") {
      arr[i] = map[arr[i].id];
      n++;
    }
  }
  if (n !== 10) throw new Error(`bmf1_a22: esperado 10, obtido ${n}`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
  JSON.parse(fs.readFileSync(file, "utf8"));
  console.log("bmf1_a22 OK (402-411)");
}

main();
