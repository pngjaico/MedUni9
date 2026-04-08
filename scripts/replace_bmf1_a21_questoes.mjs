/**
 * Uma aula por vez: substitui somente bmf1_a21 (ids 392-401).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, "..", "data", "questoes.json");

const novas = [
  {
    id: 392,
    materia: "bmf1",
    tema: "bmf1_a21",
    modulo: 1,
    dificuldade: 2,
    correta: 0,
    enunciado:
      "Sobre a anatomia externa hepatica, qual afirmacao esta correta segundo o nivel da aula?",
    opcoes: [
      "A) O lobo direito e maior, e a vesicula biliar se relaciona com sua fossa na face visceral",
      "B) O ligamento falciforme separa os segmentos funcionais de Couinaud de forma definitiva",
      "C) O lobo esquerdo contem obrigatoriamente a vesicula",
      "D) A face diafragmatica abriga a porta hepatica",
    ],
    explicacao_geral:
      "BMF1 prioriza ancoras macroscopicas: lobos, fossa da vesicula e superficies.",
    explicacoes_opcoes: {
      A: "Correta: coincide com os pontos-chave.",
      B: "Incorreta: segmentacao funcional e tema avancado e nao se resume ao falciforme superficial.",
      C: "Incorreta: vesicula nao fica no lobo esquerdo.",
      D: "Incorreta: porta hepatica e referencia da face visceral.",
    },
    explicacao:
      "Resumo: Em prova basica, lobo direito maior + fossa da vesicula e ancora segura.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 393,
    materia: "bmf1",
    tema: "bmf1_a21",
    modulo: 1,
    dificuldade: 1,
    correta: 1,
    enunciado:
      "Na porta hepatica, qual disposicao relativa e a mais classica para memorizar?",
    opcoes: [
      "A) Ducto biliar posterior, veia porta anterior",
      "B) Veia porta mais posterior, com arteria hepatica e ducto biliar em posicao anterior (com variacoes)",
      "C) Apenas veias hepatica direita e esquerda",
      "D) Nervo vago e ducto cistico como elementos centrais",
    ],
    explicacao_geral:
      "Aula recomenda imagem mental do arranjo portal, aceitando variacoes anatomicas.",
    explicacoes_opcoes: {
      A: "Incorreta: inverte relacoes habituais.",
      B: "Correta: resume o arranjo ensinado.",
      C: "Incorreta: veias hepaticas drenam para cava, nao compoem a triade portal no hilo.",
      D: "Incorreta: nao e a triade anatomica padrao.",
    },
    explicacao:
      "Resumo: Porta posterior, arteria e ducto mais anteriores no modelo classico.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 394,
    materia: "bmf1",
    tema: "bmf1_a21",
    modulo: 1,
    dificuldade: 1,
    correta: 2,
    enunciado:
      "Qual sequencia descreve corretamente a formacao do coledoco?",
    opcoes: [
      "A) Ducto pancreatico principal + ducto cistico",
      "B) Ducto hepatocoledociano + veia porta",
      "C) Ducto cistico unindo-se ao ducto hepatico comum",
      "D) Ducto hepatico esquerdo unindo-se diretamente ao duodeno",
    ],
    explicacao_geral:
      "Arvore biliar extra-hepatica e cobranca recorrente em anatomia aplicada.",
    explicacoes_opcoes: {
      A: "Incorreta: mistura via pancreatica com biliar primaria.",
      B: "Incorreta: termo e relacao incorretos.",
      C: "Correta: define o ponto de origem do coledoco.",
      D: "Incorreta: nao ha drenagem direta assim.",
    },
    explicacao:
      "Resumo: Hepatico comum + cistico = coledoco.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 395,
    materia: "bmf1",
    tema: "bmf1_a21",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "Em caso de obstrucao distal do coledoco, qual consequencia anatomoclinica e esperada?",
    opcoes: [
      "A) Drenagem biliar direta para cava inferior sem ictericia",
      "B) Esvaziamento biliar preservado por via principal alternativa sem dilatacao",
      "C) Isquemia mesenterica imediata como evento dominante",
      "D) Ictericia obstrutiva com dilatacao de vias biliares a montante, dependendo do nivel da obstrucao",
    ],
    explicacao_geral:
      "A aula liga local do bloqueio no eixo biliar ao padrao de imagem e laboratorio.",
    explicacoes_opcoes: {
      A: "Incorreta: nao existe esse desvio fisiologico.",
      B: "Incorreta: em obstrucao relevante, ha repercussao proximal.",
      C: "Incorreta: mecanismo principal e biliar, nao mesenterico.",
      D: "Correta: traduz a fisiopatologia anatomica do bloqueio.",
    },
    explicacao:
      "Resumo: Pedra distal pode represar bile e dilatar arvore biliar proximal.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 396,
    materia: "bmf1",
    tema: "bmf1_a21",
    modulo: 1,
    dificuldade: 2,
    correta: 1,
    enunciado:
      "Qual relacao anatomica do pancreas esta correta no nivel desta aula?",
    opcoes: [
      "A) A cabeca pancreatica fica distante do duodeno",
      "B) A cabeca encaixa-se no C duodenal, enquanto a cauda projeta-se em direcao ao baco",
      "C) O corpo pancreatico termina no hilo renal direito",
      "D) A cauda pancreatica situa-se no mediastino posterior",
    ],
    explicacao_geral:
      "Topografia pancreatica e base para interpretar dor, massa e imagem axial.",
    explicacoes_opcoes: {
      A: "Incorreta: contradiz a relacao classica.",
      B: "Correta: corresponde aos pontos-chave da aula.",
      C: "Incorreta: relacao anatomica inadequada.",
      D: "Incorreta: localizacao absurda para pancreas.",
    },
    explicacao:
      "Resumo: Cabeca abraza duodeno; cauda aproxima-se do baco.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 397,
    materia: "bmf1",
    tema: "bmf1_a21",
    modulo: 1,
    dificuldade: 2,
    correta: 2,
    enunciado:
      "No encontro hepatopancreatico-duodenal, a alternativa correta e:",
    opcoes: [
      "A) O ducto de Wirsung drena, por regra, no jejuno proximal",
      "B) O coledoco termina no piloro",
      "C) O ducto pancreatico principal geralmente desemboca na papila maior, frequentemente em conjunto funcional com o coledoco (ampola de Vater)",
      "D) A papila menor e obrigatoria e substitui a maior",
    ],
    explicacao_geral:
      "Relacao entre coledoco, Wirsung e papila maior e ancora de prova e de clinica biliar.",
    explicacoes_opcoes: {
      A: "Incorreta: nao e o trajeto classico.",
      B: "Incorreta: termino e no duodeno descendente.",
      C: "Correta: descricao da aula com variacao anatomica esperavel.",
      D: "Incorreta: papila menor e acessoria, nao obrigatoria substitutiva.",
    },
    explicacao:
      "Resumo: Coledoco e Wirsung convergem funcionalmente para a papila maior na maioria.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 398,
    materia: "bmf1",
    tema: "bmf1_a21",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "Sobre o fluxo sanguineo hepatico, qual frase integra corretamente entrada e saida?",
    opcoes: [
      "A) Veia porta sai do figado para cava inferior",
      "B) Veia hepatica leva sangue do intestino ao figado",
      "C) Arteria hepatica drena para cava pelas veias supra-hepaticas",
      "D) Veia porta e arteria hepatica entram na porta hepatica; drenagem final sai por veias hepaticas para a cava inferior",
    ],
    explicacao_geral:
      "Diferenciar entrada portal/nutritiva de saida sistemica evita erro conceitual frequente.",
    explicacoes_opcoes: {
      A: "Incorreta: porta e aferente ao figado.",
      B: "Incorreta: veias hepaticas fazem saida para cava.",
      C: "Incorreta: arteria e aferente arterial.",
      D: "Correta: sintetiza anatomia vascular basica hepatica.",
    },
    explicacao:
      "Resumo: Entrada dupla (porta + arteria), saida pelas veias hepaticas para cava.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 399,
    materia: "bmf1",
    tema: "bmf1_a21",
    modulo: 1,
    dificuldade: 3,
    correta: 0,
    enunciado:
      "Paciente com dor em hipocondrio direito pos-prandial gorduroso e ultrassom com calculo em vesicula. Qual mecanismo anatomico explica o colico biliar?",
    opcoes: [
      "A) Contracao vesicular contra obstrucao no eixo cistico/biliar, elevando pressao intraluminal e gerando dor",
      "B) Oclusao da AMS como evento inicial obrigatorio",
      "C) Bloqueio do ducto pancreatico acessorio como unica causa",
      "D) Espasmo do esfincter anal interno",
    ],
    explicacao_geral:
      "A anatomia da vesicula e dos ductos explica padrao de dor pos-prandial na colelitiase.",
    explicacoes_opcoes: {
      A: "Correta: relaciona contracao vesicular e obstrucao de via biliar.",
      B: "Incorreta: mecanismo vascular mesenterico nao define colico biliar.",
      C: "Incorreta: nao e o eixo principal do quadro.",
      D: "Incorreta: sem relacao com via biliar.",
    },
    explicacao:
      "Resumo: Pedra + contracao da vesicula apos refeicao gordurosa gera dor tipo colica.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 400,
    materia: "bmf1",
    tema: "bmf1_a21",
    modulo: 1,
    dificuldade: 3,
    correta: 1,
    enunciado:
      "A distincao entre ducto hepatico comum e coledoco e corretamente dada por:",
    opcoes: [
      "A) Sao sinonimos para o mesmo segmento anatomico",
      "B) Ducto hepatico comum existe antes da uniao com o cistico; apos essa uniao, o segmento passa a ser chamado coledoco",
      "C) Coledoco e apenas o ramo esquerdo intra-hepatico",
      "D) Ducto hepatico comum desemboca diretamente no ceco",
    ],
    explicacao_geral:
      "Nomenclatura por segmentos da arvore biliar e classica em prova e em laudo de imagem.",
    explicacoes_opcoes: {
      A: "Incorreta: nomes referem-se a segmentos diferentes.",
      B: "Correta: definicao anatomo-nominal padrao.",
      C: "Incorreta: confunde via extra-hepatica com ramo intra-hepatico.",
      D: "Incorreta: termino e no duodeno.",
    },
    explicacao:
      "Resumo: Antes do cistico = hepatico comum; depois = coledoco.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 401,
    materia: "bmf1",
    tema: "bmf1_a21",
    modulo: 1,
    dificuldade: 3,
    correta: 3,
    enunciado:
      "Qual integracao hepatobiliar-pancreatica esta mais alinhada com a aula?",
    opcoes: [
      "A) Cabeca pancreatica e independente do duodeno e do trajeto biliar",
      "B) Veia porta drena bile para a vesicula",
      "C) Ictericia obstrutiva distal nunca repercute em via biliar intra-hepatica",
      "D) A anatomia do coledoco e da ampola explica por que calculo distal pode gerar ictericia e, em alguns casos, pancreatite biliar",
    ],
    explicacao_geral:
      "Ponte clinica da aula conecta obstrucao distal biliar ao eixo pancreatico-duodenal.",
    explicacoes_opcoes: {
      A: "Incorreta: relacoes anatomicas sao intimas.",
      B: "Incorreta: porta conduz sangue, nao bile.",
      C: "Incorreta: pode haver dilatacao proximal conforme nivel da obstrucao.",
      D: "Correta: integra topografia e manifestacao clinica.",
    },
    explicacao:
      "Resumo: Na ampola, bilio-pancreatico se cruza; obstrucao distal pode repercutir nos dois sistemas.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
];

function main() {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const arr = data.questoes;
  const map = Object.fromEntries(novas.map((x) => [x.id, x]));
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i].id] && arr[i].tema === "bmf1_a21") {
      arr[i] = map[arr[i].id];
      n++;
    }
  }
  if (n !== 10) throw new Error(`bmf1_a21: esperado 10, obtido ${n}`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
  JSON.parse(fs.readFileSync(file, "utf8"));
  console.log("bmf1_a21 OK (392-401)");
}

main();
