/**
 * Uma conteúdo por vez: substitui somente bmf1_a11 (ids 282–291).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, "..", "data", "questoes.json");

const novas = [
  {
    id: 282,
    materia: "bmf1",
    tema: "bmf1_a11",
    modulo: 1,
    dificuldade: 3,
    correta: 0,
    enunciado:
      "Qual definição operacional de sarcômero está alinhada ao texto (unidade estrutural mínima de repetição no esquelético estriado)?",
    opcoes: [
      "A) Segmento contrátil delimitado por discos Z, organizando filamentos finos e grossos em série",
      "B) Apenas o núcleo do miócito sem miofibrilas",
      "C) Disco intercalado completo entre cardiomiócitos",
      "D) Corpo denso do músculo liso vascular",
    ],
    explicacao_geral:
      "Disco Z ancora actina e delimita o sarcômero repetido ao longo da miofibrila.",
    explicacoes_opcoes: {
      A: "Correta: ecoa pontos-chave e revisão final.",
      B: "Incorreta: nível nuclear não define sarcômero.",
      C: "Incorreta: disco intercalado é cardíaco, não sarcômero esquelético.",
      D: "Incorreta: liso não usa sarcômero estriado clássico.",
    },
    explicacao:
      "Conceito-chave: ‘Ver banda’ = localizar força no padrão repetido.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 283,
    materia: "bmf1",
    tema: "bmf1_a11",
    modulo: 1,
    dificuldade: 1,
    correta: 1,
    enunciado:
      "Na banda A do sarcômero, o texto atribui presença predominante de qual filamento e sobreposição?",
    opcoes: [
      "A) Apenas actina sem miosina em toda a banda",
      "B) Miosina (filamento grosso) e região de sobreposição com actina",
      "C) Somente titina sem miosina",
      "D) Apenas proteína C em toda espessura",
    ],
    explicacao_geral:
      "Banda A = grosso + sobreposição; linha H = região só de miosina no centro.",
    explicacoes_opcoes: {
      A: "Incorreta: isso descreve melhor banda I pura.",
      B: "Correta: compatível com banda A e com a dica A × I.",
      C: "Incorreta: titina ancora, mas não substitui o filamento grosso na definição.",
      D: "Incorreta: irrelevante ao núcleo da questão.",
    },
    explicacao:
      "Conceito-chave: A × I = sobreposição versus só actina.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 284,
    materia: "bmf1",
    tema: "bmf1_a11",
    modulo: 1,
    dificuldade: 2,
    correta: 2,
    enunciado:
      "A banda I do sarcômero contém, em termos de filamentos finos, predominantemente:",
    opcoes: [
      "A) Miosina pura sem actina",
      "B) Apenas filamentos grossos empilhados",
      "C) Actina (filamento fino), sem sobreposição de miosina na região puramente I",
      "D) Disco intercalado com nexos comunicantes",
    ],
    explicacao_geral:
      "I claro = actina; escurece na sobreposição com A.",
    explicacoes_opcoes: {
      A: "Incorreta: miosina é grossa.",
      B: "Incorreta: grossos formam banda A.",
      C: "Correta: alinha-se à classificação revisão final A × I.",
      D: "Incorreta: estrutura cardíaca, não banda de sarcômero.",
    },
    explicacao:
      "Conceito-chave: Confundir I com A custa questão de microscopia.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 285,
    materia: "bmf1",
    tema: "bmf1_a11",
    modulo: 1,
    dificuldade: 3,
    correta: 3,
    enunciado:
      "No acoplamento excitação-contração, qual par de estruturas corresponde à distinção ‘estoque de Ca²⁺’ versus ‘propagação do potencial’?",
    opcoes: [
      "A) Disco Z e banda H",
      "B) Mitocôndria e núcleo periférico",
      "C) Junções comunicantes e desmossomos isoladamente",
      "D) Retículo sarcoplasmático (armazena Ca²⁺) e túbulos T (propagam despolarização)",
    ],
    explicacao_geral:
      "T-tubule invagina; SR libera Ca²⁺ via canal de rianodina na visão integrada.",
    explicacoes_opcoes: {
      A: "Incorreta: elementos estruturais do sarcômero, não acoplamento de membrana.",
      B: "Incorreta: energia e DNA não substituem o par SR/T.",
      C: "Incorreta: disco intercalado é cardíaco.",
      D: "Correta: classificação revisão final RS × túbulos T.",
    },
    explicacao:
      "Conceito-chave: Sem Ca²⁺ não há ponte cruzada; sem T-túbulo, excitação não chega fundo.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 286,
    materia: "bmf1",
    tema: "bmf1_a11",
    modulo: 1,
    dificuldade: 2,
    correta: 0,
    enunciado:
      "Em lâmina de músculo esquelético, qual padrão nuclear é esperado segundo a conteúdo?",
    opcoes: [
      "A) Múltiplos núcleos periféricos no sincício multinucleado",
      "B) Núcleo central único em toda fibra sem exceção",
      "C) Ausência de núcleo visível por ser sincicial sem DNA",
      "D) Núcleo ramificado com disco intercalado em toda fibra",
    ],
    explicacao_geral:
      "Contraste com liso central e cardíaco ramificado.",
    explicacoes_opcoes: {
      A: "Correta: texto sobre HE e classificação esquelético × cardíaco.",
      B: "Incorreta: descreve melhor liso ou fibra única.",
      C: "Incorreta: fibra contém núcleos.",
      D: "Incorreta: disco intercalado é cardíaco.",
    },
    explicacao:
      "Conceito-chave: Periferia nuclear é marca de esquelético em corte longitudinal.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 287,
    materia: "bmf1",
    tema: "bmf1_a11",
    modulo: 1,
    dificuldade: 2,
    correta: 1,
    enunciado:
      "Nos cardiomiócitos, os discos intercalados agregam desmossomas e junções comunicantes. Qual função justifica a propagação elétrica coordenada?",
    opcoes: [
      "A) Impedir qualquer despolarização entre células",
      "B) Junções comunicantes permitem passagem de íons e continuidade funcional entre células adjacentes",
      "C) Substituir completamente o sistema de condução específico do coração",
      "D) Tornar o miocárdio um sincício multinucleado contínuo como o esquelético",
    ],
    explicacao_geral:
      "Desmossoma = tração; gap junction = corrente iônica.",
    explicacoes_opcoes: {
      A: "Incorreta: comunicação existe.",
      B: "Correta: alinha-se ao parágrafo do cardíaco.",
      C: "Incorreta: nó sinusal e vias de condução permanecem.",
      D: "Incorreta: texto nega sincício longo como esquelético.",
    },
    explicacao:
      "Conceito-chave: ‘Células encaixadas’ ≠ fibra esquelética única.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 288,
    materia: "bmf1",
    tema: "bmf1_a11",
    modulo: 1,
    dificuldade: 1,
    correta: 2,
    enunciado:
      "Qual descrição distingue o músculo liso do esquelético na visão de lâmina clássica citada?",
    opcoes: [
      "A) Estriações evidentes e núcleos múltiplos periféricos",
      "B) Sincício multinucleado com bandas A e I nítidas",
      "C) Células fusiformes, núcleo central, sem estriações visíveis ao microscópio óptico clássico",
      "D) Ramificação com disco intercalado obrigatório em todo órgão",
    ],
    explicacao_geral:
      "Liso sustenta tônus de órgãos ocos e vasos — controle autonômico.",
    explicacoes_opcoes: {
      A: "Incorreta: descreve esquelético.",
      B: "Incorreta: estriações são esquelético/cardíaco.",
      C: "Correta: texto do bloco do músculo liso.",
      D: "Incorreta: cardíaco, não liso universal.",
    },
    explicacao:
      "Conceito-chave: Sem estriação visível ≠ sem filamento — mas a prova cobra o padrão óptico.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 289,
    materia: "bmf1",
    tema: "bmf1_a11",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "Na placa motora, qual evento inicia a despolarização da fibra muscular esquelética na visão resumida da conteúdo?",
    opcoes: [
      "A) Noradrenalina direta nos receptores muscarínicos da fibra",
      "B) GABA inibitório na placa motora exclusivamente",
      "C) Serotonina como neurotransmissor primário da placa",
      "D) Acetilcolina ativando receptores nicotínicos na membrana postsináptica",
    ],
    explicacao_geral:
      "Neuromuscular liga comando nervoso a contração — base para bloqueio e miastenia em outras disciplinas.",
    explicacoes_opcoes: {
      A: "Incorreta: receptor e transmissor não batem com placa motora.",
      B: "Incorreta: GABA não é o eixo da placa.",
      C: "Incorreta: não é o neurotransmissor descrito.",
      D: "Correta: essencial do bloco da junção neuromuscular.",
    },
    explicacao:
      "Conceito-chave: ACh → despolarização → potencial de ação na fibra.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 290,
    materia: "bmf1",
    tema: "bmf1_a11",
    modulo: 1,
    dificuldade: 2,
    correta: 1,
    enunciado:
      "Na comparação conceitual tipo I versus tipo II do texto, qual afirmação sobre fadiga em esforço máximo está correta?",
    opcoes: [
      "A) Tipo I fadiga mais precocemente que tipo II em sprint",
      "B) Tipo II tende a fadigar mais precocemente em esforço máximo; tipo I sustenta melhor trabalho prolongado",
      "C) Não há diferença de perfil oxidativo versus glicolítico",
      "D) Tipo II é exclusivamente oxidativa lenta",
    ],
    explicacao_geral:
      "Contraste conceitual importa mais que percentuais por músculo.",
    explicacoes_opcoes: {
      A: "Incorreta: inverte o padrão.",
      B: "Correta: classificação da conteúdo.",
      C: "Incorreta: coexistem perfis no mesmo músculo.",
      D: "Incorreta: tipo II é eixo rápido/glicolítico relativo.",
    },
    explicacao:
      "Conceito-chave: Postural/endurance versus sprint/potência.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 291,
    materia: "bmf1",
    tema: "bmf1_a11",
    modulo: 1,
    dificuldade: 3,
    correta: 3,
    enunciado:
      "A ponte clínica menciona rabdomiólise com liberação de mioglobina. Qual base histológica essa condição pressupõe?",
    opcoes: [
      "A) Destruição exclusiva de tecido adiposo perimuscular",
      "B) Perda apenas de cartilagem articular sem envolvimento muscular",
      "C) Hipertrofia concêntrica do músculo liso vascular como causa única",
      "D) Lesão/destruição de fibra muscular esquelética com extravasamento de conteúdo celular",
    ],
    explicacao_geral:
      "Mioglobina vem do citoplasma muscular — explica risco renal e enzimas.",
    explicacoes_opcoes: {
      A: "Incorreta: não é o tecido fonte da mioglobina.",
      B: "Incorreta: cartilagem não libera mioglobina.",
      C: "Incorreta: não descreve rabdomiólise típica.",
      D: "Correta: integra ponte com clínica e destruição de fibra.",
    },
    explicacao:
      "Conceito-chave: Histologia explica biomarcadores — CK/mioglobina.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
];

function main() {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const arr = data.questoes;
  const map = Object.fromEntries(novas.map((x) => [x.id, x]));
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i].id] && arr[i].tema === "bmf1_a11") {
      arr[i] = map[arr[i].id];
      n++;
    }
  }
  if (n !== 10) throw new Error(`bmf1_a11: esperado 10, obtido ${n}`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
  JSON.parse(fs.readFileSync(file, "utf8"));
  console.log("bmf1_a11 OK (282–291)");
}

main();
