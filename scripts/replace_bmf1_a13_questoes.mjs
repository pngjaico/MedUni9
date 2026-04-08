/**
 * Uma aula por vez: substitui somente bmf1_a13 (ids 302–311).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, "..", "data", "questoes.json");

const novas = [
  {
    id: 302,
    materia: "bmf1",
    tema: "bmf1_a13",
    modulo: 1,
    dificuldade: 3,
    correta: 0,
    enunciado:
      "Paciente com trauma na região da cabeça da fíbula e fraqueza dos dorsiflexores. A marcha em ‘steppage’ e a ‘queda’ do pé sugerem comprometimento predominante de qual padrão inervador na perna?",
    opcoes: [
      "A) Ramo fibular (comum/profundo) em contraste com o tibial (ex.: extensão do pé e marcha compensatória)",
      "B) Nervo femoral isolado no compartimento medial da coxa",
      "C) Apenas nervo obturador sem ação no pé",
      "D) Nervo axilar com déficit exclusivo de ombro",
    ],
    explicacao_geral:
      "Fibular profundo inerva dorsiflexores; queda do pé e steppage são clássicos na integração da aula.",
    explicacoes_opcoes: {
      A: "Correta: sintetiza a tabela da perna e a ponte clínica.",
      B: "Incorreta: femoral não explica padrão distal típico do pé.",
      C: "Incorreta: obturador não governa dorsiflexão.",
      D: "Incorreta: nível anatômico errado.",
    },
    explicacao:
      "Resumo: Cabeça de fíbula + pé = pense fibular antes de raiz isolada.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 303,
    materia: "bmf1",
    tema: "bmf1_a13",
    modulo: 1,
    dificuldade: 3,
    correta: 1,
    enunciado:
      "Sobre o manguito do ombro na tabela da aula, qual associação músculo–ação–nervo está correta?",
    opcoes: [
      "A) Subescapular — rotação lateral — axilar",
      "B) Supraespinhal — abdução iniciada (0–15°) — supraescapular",
      "C) Infraespinhal — rotação medial — musculocutâneo",
      "D) Redondo menor — abdução principal — supraescapular",
    ],
    explicacao_geral:
      "Quatro músculos, três nervos — confundir rotações e nervos custa questão.",
    explicacoes_opcoes: {
      A: "Incorreta: subescapular faz rotação medial e inerva-se por subescapular.",
      B: "Correta: linha explícita da tabela do manguito.",
      C: "Incorreta: infraespinhal é rotação lateral e supraescapular.",
      D: "Incorreta: abdução principal é deltoide; redondo menor é lateral com axilar.",
    },
    explicacao:
      "Resumo: Primeiros graus de abdução ≠ deltoide sozinho.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 304,
    materia: "bmf1",
    tema: "bmf1_a13",
    modulo: 1,
    dificuldade: 1,
    correta: 2,
    enunciado:
      "Qual músculo realiza a abdução principal do ombro e qual nervo o aula associa?",
    opcoes: [
      "A) Peitoral maior — nervo peitoral medial",
      "B) Redondo maior — supraescapular",
      "C) Deltoide — axilar",
      "D) Bíceps braquial — musculocutâneo exclusivamente",
    ],
    explicacao_geral:
      "Lesão axilar pode afetar deltoide e área de sensibilidade lateral do braço.",
    explicacoes_opcoes: {
      A: "Incorreta: adução/flexão, não abdução principal.",
      B: "Incorreta: redondo maior não é ‘abdução principal’ do ombro.",
      C: "Correta: tabela deltoide da aula.",
      D: "Incorreta: bíceps não é abdutor principal do ombro.",
    },
    explicacao:
      "Resumo: Abdução ampla = deltoide como protagonista.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 305,
    materia: "bmf1",
    tema: "bmf1_a13",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "No membro inferior, o nervo ciático na coxa segue tipicamente para quais ramos principais na perna, segundo o texto?",
    opcoes: [
      "A) Femoral e obturador exclusivamente",
      "B) Axilar e musculocutâneo",
      "C) Mediano e ulnar",
      "D) Tibial e fibular (comum), distribuindo compartimentos posteriores e anteriores/laterais conforme o mapa",
    ],
    explicacao_geral:
      "Entender o ‘split’ do ciático organiza déficits distais.",
    explicacoes_opcoes: {
      A: "Incorreta: ramos da coxa anterior/medial.",
      B: "Incorreta: membros superiores.",
      C: "Incorreta: nervos de antebraço.",
      D: "Correta: ecoa a ênfase da aula e das tabelas.",
    },
    explicacao:
      "Resumo: Ciático é tronco antes da bifurcação típica na perna.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 306,
    materia: "bmf1",
    tema: "bmf1_a13",
    modulo: 1,
    dificuldade: 2,
    correta: 0,
    enunciado:
      "No braço, o compartimento posterior com tríceps braquial é inervado predominantemente por qual nervo?",
    opcoes: [
      "A) Radial",
      "B) Musculocutâneo",
      "C) Mediano",
      "D) Axilar",
    ],
    explicacao_geral:
      "Extensores de cotovelo seguem mapa radial — integra com punho e dedos.",
    explicacoes_opcoes: {
      A: "Correta: tabela braço anterior × posterior.",
      B: "Incorreta: flexores anteriores (bíceps/braquial).",
      C: "Incorreta: antebraço mediano em flexores profundos, não tríceps.",
      D: "Incorreta: ombro deltoide.",
    },
    explicacao:
      "Resumo: ‘Tríceps’ lembra extensão e radial.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 307,
    materia: "bmf1",
    tema: "bmf1_a13",
    modulo: 1,
    dificuldade: 2,
    correta: 1,
    enunciado:
      "Na perna, os músculos fibulares (peroneais) longo e curto, responsáveis pela eversão, são inervados pelo:",
    opcoes: [
      "A) Tibial na região posterior profunda",
      "B) Fibular superficial",
      "C) Fibular profundo",
      "D) Femoral exclusivamente",
    ],
    explicacao_geral:
      "Profundo = dorsiflexão; superficial = eversão — distinção cobrada junto com inversão.",
    explicacoes_opcoes: {
      A: "Incorreta: tibial inerva flexores plantares posteriores.",
      B: "Correta: tabela lateral da perna.",
      C: "Incorreta: profundo inerva anterior (ex.: tibial anterior).",
      D: "Incorreta: nível proximal errado.",
    },
    explicacao:
      "Resumo: Lateral do pé ≠ compartimento anterior.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 308,
    materia: "bmf1",
    tema: "bmf1_a13",
    modulo: 1,
    dificuldade: 2,
    correta: 2,
    enunciado:
      "Tibial anterior e extensor longo dos dedos, no compartimento anterior da perna, relacionam-se principalmente com qual nervo?",
    opcoes: [
      "A) Tibial (mesmo nome, mesmo compartimento)",
      "B) Fibular superficial",
      "C) Fibular profundo",
      "D) Obturador",
    ],
    explicacao_geral:
      "Confundir ‘tibial’ nervo com compartimento anterior é pegadinha de nomenclatura.",
    explicacoes_opcoes: {
      A: "Incorreta: nervo tibial segue compartimento posterior na distribuição clássica.",
      B: "Incorreta: lateral/eversores.",
      C: "Correta: mapa da tabela anterior da perna.",
      D: "Incorreta: adução da coxa.",
    },
    explicacao:
      "Resumo: Dorsiflexão = fibular profundo na lógica do texto.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 309,
    materia: "bmf1",
    tema: "bmf1_a13",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "Gastrocnêmio e sóleo, no compartimento superficial posterior da perna, são classicamente inervados pelo:",
    opcoes: [
      "A) Fibular superficial",
      "B) Fibular profundo",
      "C) Femoral",
      "D) Tibial",
    ],
    explicacao_geral:
      "Flexão plantar e ‘força de empurrar’ — tríceps sural.",
    explicacoes_opcoes: {
      A: "Incorreta: lateral/eversão.",
      B: "Incorreta: dorsiflexão anterior.",
      C: "Incorreta: quadril/coxa anterior.",
      D: "Correta: tabela posterior superficial.",
    },
    explicacao:
      "Resumo: Posterior superficial da perna conversa com nervo tibial.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 310,
    materia: "bmf1",
    tema: "bmf1_a13",
    modulo: 1,
    dificuldade: 1,
    correta: 1,
    enunciado:
      "A documentação de força pelo MRC 0–5 deve ser feita, segundo a ênfase da aula, avaliando:",
    opcoes: [
      "A) Apenas sensibilidade cutânea sem teste motor",
      "B) Grupos musculares segmentares, não apenas ‘força boa’ de forma vaga",
      "C) Somente articulações, sem músculos nomeáveis",
      "D) Exclusivamente o lado não dominante em qualquer paciente",
    ],
    explicacao_geral:
      "Teste por segmento documenta déficit antes da imagem.",
    explicacoes_opcoes: {
      A: "Incorreta: semiologia combina motor e sensorial quando indicado.",
      B: "Correta: alinha-se ao ‘O que você PRECISA saber’.",
      C: "Incorreta: força muscular é o alvo do MRC.",
      D: "Incorreta: sem base na regra citada.",
    },
    explicacao:
      "Resumo: MRC exige grupo e escala, não adjetivo solto.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 311,
    materia: "bmf1",
    tema: "bmf1_a13",
    modulo: 1,
    dificuldade: 3,
    correta: 3,
    enunciado:
      "Na ponte com a clínica, qual conjunto de achados aproxima-se da suspeita de síndrome compartimental aguda de membro, em termos anatômicos/fisiopatológicos descritos?",
    opcoes: [
      "A) Dor exclusivamente proporcional ao esforço voluntário sem dor à extensão passiva",
      "B) Parestesia isolada sem possibilidade de déficit motor",
      "C) Ausência total de dor em fratura exposta",
      "D) Dor desproporcional com dor à extensão passiva do músculo do compartimento em contexto de pressão elevada no espaço limitado por fáscia",
    ],
    explicacao_geral:
      "Emergência — anatomia do compartimento explica por que dor piora com estiramento passivo.",
    explicacoes_opcoes: {
      A: "Incorreta: extensão passiva dolorosa é pista clássica.",
      B: "Incorreta: déficit pode evoluir.",
      C: "Incorreta: cenário não exclui compartimental.",
      D: "Correta: síntese do alerta da ponte com a clínica.",
    },
    explicacao:
      "Resumo: Compartimento fechado + edema/hematoma = isquemia muscular crescente.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
];

function main() {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const arr = data.questoes;
  const map = Object.fromEntries(novas.map((x) => [x.id, x]));
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i].id] && arr[i].tema === "bmf1_a13") {
      arr[i] = map[arr[i].id];
      n++;
    }
  }
  if (n !== 10) throw new Error(`bmf1_a13: esperado 10, obtido ${n}`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
  JSON.parse(fs.readFileSync(file, "utf8"));
  console.log("bmf1_a13 OK (302–311)");
}

main();
