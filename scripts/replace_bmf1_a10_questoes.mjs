/**
 * Uma conteúdo por vez: substitui somente bmf1_a10 (ids 272–281).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, "..", "data", "questoes.json");

const novas = [
  {
    id: 272,
    materia: "bmf1",
    tema: "bmf1_a10",
    modulo: 1,
    dificuldade: 2,
    correta: 0,
    enunciado:
      "Na hierarquia do músculo esquelético, qual associação descreve corretamente os envoltórios conjuntivos?",
    opcoes: [
      "A) Endomísio envolve cada fibra muscular; epimísio envolve o músculo inteiro",
      "B) Epimísio circunda cada miócito isoladamente",
      "C) Perimísio reveste apenas tendões, nunca fascículos",
      "D) Endomísio substitui o perimísio no ventre muscular",
    ],
    explicacao_geral:
      "Perimísio circunda fascículos; continuidade com tendão transmite força.",
    explicacoes_opcoes: {
      A: "Correta: alinha-se à classificação mental miócito → fascículo → órgão.",
      B: "Incorreta: nível mais externo é epimísio do músculo.",
      C: "Incorreta: perimísio envolve fascículos.",
      D: "Incorreta: são camadas distintas.",
    },
    explicacao:
      "Conceito-chave: Do íntimo ao externo: fibra → fascículo → músculo.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 273,
    materia: "bmf1",
    tema: "bmf1_a10",
    modulo: 1,
    dificuldade: 1,
    correta: 1,
    enunciado:
      "Qual definição corresponde à unidade motora no músculo esquelético?",
    opcoes: [
      "A) Um sarcômero e todos os seus filamentos finos",
      "B) Um motoneurônio somático e todas as fibras musculares que ele inerva",
      "C) Apenas fibras tipo II de um mesmo ventre",
      "D) O epimísio e o tendão sem participação neural",
    ],
    explicacao_geral:
      "Doenças da junção ou do neurônio alteram recrutamento antes da força máxima isolada.",
    explicacoes_opcoes: {
      A: "Incorreta: sarcômero é subunidade contrátil, não recrutamento neural.",
      B: "Correta: definição explícita na conteúdo.",
      C: "Incorreta: unidade motora mistura fibras conforme inervação.",
      D: "Incorreta: sem neurônio não há unidade motora.",
    },
    explicacao:
      "Conceito-chave: Menor fração recrutável independentemente é neural + fibras.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 274,
    materia: "bmf1",
    tema: "bmf1_a10",
    modulo: 1,
    dificuldade: 2,
    correta: 2,
    enunciado:
      "Sobre arquitetura muscular, o texto contrasta músculos fusiformes e pennados. Qual trade-off está correto?",
    opcoes: [
      "A) Pennado sempre maximiza excursionamento e velocidade",
      "B) Fusiforme alinha fibras obliquamente ao tendão central",
      "C) Fusiforme privilegia excursão e encurtamento; pennado aumenta força isométrica relativa com menor excursionamento útil",
      "D) Não há diferença de força por área entre os desenhos",
    ],
    explicacao_geral:
      "Frase-âncora: arquitetura decide força versus amplitude.",
    explicacoes_opcoes: {
      A: "Incorreta: pennado sacrifica excursionamento relativo.",
      B: "Incorreta: obliquidade descreve pennado.",
      C: "Correta: síntese do parágrafo de arquitetura.",
      D: "Incorreta: geometria altera seção efetiva de fibra.",
    },
    explicacao:
      "Conceito-chave: Por isso tendinopatias e treino diferem entre grupos pennados e fusiformes.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 275,
    materia: "bmf1",
    tema: "bmf1_a10",
    modulo: 1,
    dificuldade: 1,
    correta: 3,
    enunciado:
      "Em relação aos tipos de fibra, as fibras tipo I (oxidativas lentas) são caracterizadas por:",
    opcoes: [
      "A) Priorizar sprint e pico imediato de força em detrimento total da resistência",
      "B) Ausência de mitocôndrias e mioglobina",
      "C) Especialização exclusiva em glicólise anaeróbia pura",
      "D) Melhor sustentação de trabalho prolongado (eixo oxidativo/fadiga)",
    ],
    explicacao_geral:
      "SO/FOG/FG: entender eixo oxidativo versus glicolítico, não percentuais por músculo.",
    explicacoes_opcoes: {
      A: "Incorreta: descreve melhor fibras rápidas.",
      B: "Incorreta: tipo I é rico em equipamento oxidativo.",
      C: "Incorreta: tipo I não é ‘só anaeróbio’.",
      D: "Correta: texto dos tipos de fibra e revisão final.",
    },
    explicacao:
      "Conceito-chave: Endurance versus potência é o eixo cobrável.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 276,
    materia: "bmf1",
    tema: "bmf1_a10",
    modulo: 1,
    dificuldade: 2,
    correta: 1,
    enunciado:
      "Na convenção de ações musculares, qual par está correto?",
    opcoes: [
      "A) Sinergistas oponem-se na mesma articulação; antagonistas sempre atuam isolados sem co-contração",
      "B) Sinergistas cooperam na mesma ação; antagonistas exercem ações opostas",
      "C) Antagonista é sinônimo de sinergista em qualquer movimento",
      "D) Sinergista só existe em músculos pennados",
    ],
    explicacao_geral:
      "Base para interpretar agonistas em kinesiologia e reabilitação.",
    explicacoes_opcoes: {
      A: "Incorreta: inverte definições.",
      B: "Correta: classificação revisão final.",
      C: "Incorreta: termos são opostos conceituais.",
      D: "Incorreta: sinergia não depende de pennação.",
    },
    explicacao:
      "Conceito-chave: Nomenclatura de ação precede memorizar nomes latinos.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 277,
    materia: "bmf1",
    tema: "bmf1_a10",
    modulo: 1,
    dificuldade: 2,
    correta: 2,
    enunciado:
      "Qual estrutura envolve grupos de fibras musculares agrupadas em fascículos?",
    opcoes: [
      "A) Endomísio exclusivamente, sem outra camada",
      "B) Epimísio apenas, ignorando fascículos",
      "C) Perimísio",
      "D) Aponeurose obrigatoriamente em todos os músculos",
    ],
    explicacao_geral:
      "endomísio < perimísio (fascículo) < epimísio (músculo).",
    explicacoes_opcoes: {
      A: "Incorreta: endomísio é ao redor de cada fibra.",
      B: "Incorreta: epimísio é mais externo.",
      C: "Correta: definido na hierarquia da conteúdo.",
      D: "Incorreta: aponeurose é inserção achatada, não envoltório padronizado de fascículo.",
    },
    explicacao:
      "Conceito-chave: ‘Fascículo’ lembra feixe — perimísio é o saco do feixe.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 278,
    materia: "bmf1",
    tema: "bmf1_a10",
    modulo: 1,
    dificuldade: 3,
    correta: 3,
    enunciado:
      "Sobre origem e inserção, a conteúdo enfatiza que a convenção anatômica (proximal/medial versus distal/lateral) não substitui qual critério clínico central?",
    opcoes: [
      "A) O tamanho absoluto do ventre muscular",
      "B) A cor do tendão na imagem radiológica",
      "C) O número exato de sarcomeros por fibra",
      "D) Qual extremidade se move em relação à outra durante a ação considerada",
    ],
    explicacao_geral:
      "Origem/inserção são âncoras — o movimento relativo é o que importa na função.",
    explicacoes_opcoes: {
      A: "Incorreta: volume não define dinâmica sozinho.",
      B: "Incorreta: irrelevante.",
      C: "Incorreta: detalhe microscópico não é o foco do parágrafo.",
      D: "Correta: texto ‘o que importa clinicamente’.",
    },
    explicacao:
      "Conceito-chave: Fixar isso evita dogma rígido de ‘origem nunca se move’.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 279,
    materia: "bmf1",
    tema: "bmf1_a10",
    modulo: 1,
    dificuldade: 3,
    correta: 0,
    enunciado:
      "Após trauma fechado importante, a conteúdo lembra que o músculo esquelético está em compartimento limitado por fáscia. Qual ideia anatômica isso sustenta clinicamente?",
    opcoes: [
      "A) Hematoma/edema podem elevar pressão no compartimento — contexto de síndrome compartimental",
      "B) A fáscia impede qualquer vascularização muscular",
      "C) O compartimento elimina a necessidade de inervação segmentar",
      "D) Trauma fechado nunca altera pressão intersticial",
    ],
    explicacao_geral:
      "Não decorar conduta — entender que músculo + fáscia = espaço fechado.",
    explicacoes_opcoes: {
      A: "Correta: ecoa a nota sobre compartimento e decisão clínica.",
      B: "Incorreta: circulação é rica, mas limitada pelo espaço.",
      C: "Incorreta: inervação permanece obrigatória.",
      D: "Incorreta: edema pode elevar pressão.",
    },
    explicacao:
      "Conceito-chave: Anatomia explica por que dor desproporcional e tensão importam no trauma.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 280,
    materia: "bmf1",
    tema: "bmf1_a10",
    modulo: 1,
    dificuldade: 3,
    correta: 1,
    enunciado:
      "A ponte clínica cita que roturas musculares completas ocorrem mais frequentemente em músculos biarticulares em elongamento rápido. Qual princípio explica a maior exposição?",
    opcoes: [
      "A) Biarticulares são sempre tipo I exclusivamente",
      "B) Atravessam duas articulações e podem ser colocados em alongamento máximo combinado em movimentos rápidos",
      "C) Não possuem tendão de inserção",
      "D) Estão isentos de co-contração antagonista",
    ],
    explicacao_geral:
      "Isquiotibiais e adutor longo são exemplos típicos da conteúdo.",
    explicacoes_opcoes: {
      A: "Incorreta: composição de fibra não é o argumento central aqui.",
      B: "Correta: mecanismo de tensão multiarticulares.",
      C: "Incorreta: inserem-se como outros músculos.",
      D: "Incorreta: co-contração pode ocorrer.",
    },
    explicacao:
      "Conceito-chave: ‘Dois pivôs’ aumentam comprimento exigido ao músculo.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 281,
    materia: "bmf1",
    tema: "bmf1_a10",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "Na comparação aponeurose versus tendão, qual distinção corresponde ao texto?",
    opcoes: [
      "A) Aponeurose é sempre mais elástica que qualquer ligamento sem exceção",
      "B) Tendão nunca contém colágeno tipo I",
      "C) Aponeurose substitui epimísio em todos os músculos",
      "D) Aponeurose é folha achatada; tendão é cordão denso de inserção",
    ],
    explicacao_geral:
      "Continuidade conjuntiva com arquitetura diferente — transmissão de força similar.",
    explicacoes_opcoes: {
      A: "Incorreta: generalização excessiva.",
      B: "Incorreta: tendão é denso em colágeno.",
      C: "Incorreta: epimísio persiste como conceito independente.",
      D: "Correta: classificação revisão final.",
    },
    explicacao:
      "Conceito-chave: Reto abdominal versus tendão calcâneo — mesma lógica de forma.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
];

function main() {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const arr = data.questoes;
  const map = Object.fromEntries(novas.map((x) => [x.id, x]));
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i].id] && arr[i].tema === "bmf1_a10") {
      arr[i] = map[arr[i].id];
      n++;
    }
  }
  if (n !== 10) throw new Error(`bmf1_a10: esperado 10, obtido ${n}`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
  JSON.parse(fs.readFileSync(file, "utf8"));
  console.log("bmf1_a10 OK (272–281)");
}

main();
