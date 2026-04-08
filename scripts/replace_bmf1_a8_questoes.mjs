/**
 * Uma conteúdo por vez: substitui somente bmf1_a8 (ids 462–471).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, "..", "data", "questoes.json");

const novas = [
  {
    id: 462,
    materia: "bmf1",
    tema: "bmf1_a8",
    modulo: 1,
    dificuldade: 3,
    correta: 0,
    enunciado:
      "A cartilagem madura é predominantemente avascular e aneural. Qual consequência fisiológica a conteúdo destaca como central para nutrição e limite de espessura?",
    opcoes: [
      "A) Troca de metabolitos predominantemente por difusão através da matriz",
      "B) Perfusão arterial direta em toda espessura da cartilagem hialina",
      "C) Absorção exclusiva por linfáticos intra-cartilaginosos densos",
      "D) Sinapse nervosa em cada lacuna para regular o pH da matriz",
    ],
    explicacao_geral:
      "Difusão explica por que cartilagem espessa central sofre mais com metabolismo limitado.",
    explicacoes_opcoes: {
      A: "Correta: alinha-se ao parágrafo inicial e aos pontos-chave.",
      B: "Incorreta: contraria a definição de avascularidade.",
      C: "Incorreta: não é o mecanismo principal descrito.",
      D: "Incorreta: aneural exclui inervação lacunar típica.",
    },
    explicacao:
      "Conceito-chave: Sem vaso, biologia da cartilagem é ‘difusão ou nada’.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 463,
    materia: "bmf1",
    tema: "bmf1_a8",
    modulo: 1,
    dificuldade: 1,
    correta: 1,
    enunciado:
      "Na cartilagem hialina adulta, qual colágeno predomina na matriz, conforme o texto?",
    opcoes: [
      "A) Tipo I como na derme reticular",
      "B) Tipo II (com isoformas IX e XI no contexto da rede, na visão da conteúdo)",
      "C) Tipo III exclusivamente reticular",
      "D) Tipo IV de membrana basal universal",
    ],
    explicacao_geral:
      "Colágeno II define identidade da hialina — contraste com fibrocartilagem rica em tipo I.",
    explicacoes_opcoes: {
      A: "Incorreta: tipo I marca fibrocartilagem e conjuntivo denso.",
      B: "Correta: reproduz o quadro de matriz e células.",
      C: "Incorreta: reticulina não é o marcador principal da hialina articular.",
      D: "Incorreta: colágeno IV é basal epitelial.",
    },
    explicacao:
      "Conceito-chave: Trocar II por I é erro clássico de prova.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 464,
    materia: "bmf1",
    tema: "bmf1_a8",
    modulo: 1,
    dificuldade: 1,
    correta: 2,
    enunciado:
      "A cartilagem elástica distingue-se pela presença de fibras elásticas entre o colágeno. Onde o material a localiza com frequência?",
    opcoes: [
      "A) Superfícies articulares do joelho exclusivamente",
      "B) Menisco medial sem fibras elásticas",
      "C) Orelha externa, epiglote e tubas auditivas",
      "D) Placa epifisária após fusão completa",
    ],
    explicacao_geral:
      "Elástica ≠ hialina: flexibilidade resiliente em vias aéreas superiores e orelha.",
    explicacoes_opcoes: {
      A: "Incorreta: superfície articular sinovial é hialina.",
      B: "Incorreta: menisco é fibrocartilagem.",
      C: "Correta: exemplos explícitos na classificação dos três tipos.",
      D: "Incorreta: placa epifisária é cenário de hialina/crescimento, não elástica típica.",
    },
    explicacao:
      "Conceito-chave: Três tipos — não misturar localização.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 465,
    materia: "bmf1",
    tema: "bmf1_a8",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "A fibrocartilagem combina colágeno tipo I abundante com matriz cartilaginosa e resiste a cisalhamento. Qual conjunto exemplifica o texto?",
    opcoes: [
      "A) Traqueia e brônquios terminais apenas",
      "B) Superfície articular do úmero",
      "C) Epiglote isoladamente",
      "D) Meniscos, anel fibroso do disco intervertebral, sínfises e zona de inserção tendínea",
    ],
    explicacao_geral:
      "Fibrocartilagem ancora e distribui carga — base para hérnia de disco e lesão meniscal.",
    explicacoes_opcoes: {
      A: "Incorreta: traqueia na classificação é hialina.",
      B: "Incorreta: superfície articular é hialina.",
      C: "Incorreta: epiglote é elástica na classificação.",
      D: "Correta: lista canônica da conteúdo.",
    },
    explicacao:
      "Conceito-chave: Função mecânica diferente da hialina de atrito.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 466,
    materia: "bmf1",
    tema: "bmf1_a8",
    modulo: 1,
    dificuldade: 2,
    correta: 1,
    enunciado:
      "Qual distinção corresponde ao par condroblasto versus condrócito no material?",
    opcoes: [
      "A) Condrócito é exclusivamente mitótico superficial; condroblasto é célula morta",
      "B) Condroblasto é célula sintética ativa; condrócito é célula madura na lacuna",
      "C) Ambos são osteoclastos multinucleados",
      "D) Condrócito secreta surfactante; condroblasto reabsorve matriz óssea",
    ],
    explicacao_geral:
      "Lacuna + matriz madura define condrócito; condroblasto deposita matriz nova.",
    explicacoes_opcoes: {
      A: "Incorreta: inverte papéis e sentidos.",
      B: "Correta: classificação revisão final e texto de células.",
      C: "Incorreta: osteoclasto é linhagem óssea distinta.",
      D: "Incorreta: confunde com pulmão e reabsorção óssea.",
    },
    explicacao:
      "Conceito-chave: Analogia osteoblasto/osteócito ajuda a memorizar.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 467,
    materia: "bmf1",
    tema: "bmf1_a8",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "No crescimento intersticial, condrócitos dentro da matriz proliferam e depositam matriz — mecanismo central na epífise antes da ossificação endocondral. Esse modo contrasta com o crescimento aposicional porque:",
    opcoes: [
      "A) Aposicional ocorre apenas após fusão epifisária completa",
      "B) Intersticial acrescenta camadas apenas pelo pericôndrio superficial",
      "C) Intersticial elimina totalmente o pericôndrio na cartilagem hialina",
      "D) Aposicional adiciona na superfície a partir do pericôndrio; intersticial expande de dentro para fora na matriz existente",
    ],
    explicacao_geral:
      "Diferenciar superfície (pericôndrio) versus expansão interna cai em embriologia e ortopedia.",
    explicacoes_opcoes: {
      A: "Incorreta: aposicional é ativo no pericôndrio durante crescimento.",
      B: "Incorreta: descreve aposicional, não intersticial.",
      C: "Incorreta: pericôndrio permanece relevante no modelo geral.",
      D: "Correta: ecoa a classificação revisão final e o texto de crescimento.",
    },
    explicacao:
      "Conceito-chave: Intersticial explica ‘crescer por dentro’ na placa.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 468,
    materia: "bmf1",
    tema: "bmf1_a8",
    modulo: 1,
    dificuldade: 2,
    correta: 0,
    enunciado:
      "Sobre o pericôndrio fibroso, qual afirmação está correta segundo a conteúdo?",
    opcoes: [
      "A) Envolve a cartilagem exceto na superfície articular, lubrificada pelo líquido sinovial",
      "B) Reveste integralmente inclusive a cartilagem hialina articular exposta na cavidade",
      "C) Está ausente em qualquer cartilagem costal",
      "D) É idêntico ao periósteo ósseo em todos os níveis sem camada condrogênica",
    ],
    explicacao_geral:
      "Superfície articular sem pericôndrio é detalhe de prova e de reparo limitado.",
    explicacoes_opcoes: {
      A: "Correta: texto do bloco sobre pericôndrio e transição.",
      B: "Incorreta: superfície articular não é coberta por pericôndrio.",
      C: "Incorreta: generalização falsa.",
      D: "Incorreta: a conteúdo destaca camada condrogênica no pericôndrio.",
    },
    explicacao:
      "Conceito-chave: ‘Exceto superfície articular’ explica nutrição por sinóvia.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 469,
    materia: "bmf1",
    tema: "bmf1_a8",
    modulo: 1,
    dificuldade: 3,
    correta: 1,
    enunciado:
      "Na osteoartrite, a ‘dica de prova’ do material sugere que alterações iniciais da matriz costumam incluir, antes do estreitamento radiológico evidente:",
    opcoes: [
      "A) Aumento brusco de espessura cortical diafisária como primeiro evento",
      "B) Perda de proteoglicanos e alteração da água da matriz",
      "C) Ossificação endocondral acelerada da placa epifisária no adulto",
      "D) Metaplasia completa para osso compacto sem fibrose",
    ],
    explicacao_geral:
      "Mecanismo antes da imagem tardia — pensa degeneração bioquímica da matriz.",
    explicacoes_opcoes: {
      A: "Incorreta: não resume a primeira alteração matricial descrita.",
      B: "Correta: citação direta da dica de prova.",
      C: "Incorreta: placa epifisária fundida não reaparece assim na OA típica.",
      D: "Incorreta: remodelação óssea subcondral vem depois; metaplasia total não é o núcleo.",
    },
    explicacao:
      "Conceito-chave: OA é doença da matriz e do osso subcondral ao longo do tempo.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 470,
    materia: "bmf1",
    tema: "bmf1_a8",
    modulo: 1,
    dificuldade: 3,
    correta: 2,
    enunciado:
      "Após lesão osteocondral profunda, por que a cartilagem hialina madura raramente se regenera de modo completo, segundo o texto?",
    opcoes: [
      "A) Porque o condrócito volta a dividir ilimitadamente como epitélio escamoso",
      "B) Porque a matriz vascular irriga plenamente o defeito em dias",
      "C) O defeito tende a preencher com tecido fibroso ou fibrocartilagem funcionalmente inferior",
      "D) Porque o líquido sinovial desaparece permanentemente da articulação",
    ],
    explicacao_geral:
      "Expectativa de reparo realista guia conduta ortopédica e reabilitação.",
    explicacoes_opcoes: {
      A: "Incorreta: não há regeneração epitelial ilimitada na cartilagem.",
      B: "Incorreta: irrigação direta não ocorre na cartilagem.",
      C: "Correta: frase central do bloco degeneração/reparo.",
      D: "Incorreta: sinóvia pode persistir; o problema é biologia do defeito.",
    },
    explicacao:
      "Conceito-chave: Fibrocartilagem de reparo ≠ hialina primária.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 471,
    materia: "bmf1",
    tema: "bmf1_a8",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "A ponte clínica menciona meniscectomia extensa. Qual efeito conceitual a conteúdo associa a esse cenário?",
    opcoes: [
      "A) Eliminação total do risco de gonartrose por reduzir líquido sinovial",
      "B) Aumento exclusivo da vascularização da cartilagem hialina central",
      "C) Estabilização articular absoluta sem redistribuição de carga",
      "D) Pode redistribuir carga e acelerar degeneração compartimental",
    ],
    explicacao_geral:
      "Menisco é amortecedor fibrocartilaginoso — retirada altera biomecânica.",
    explicacoes_opcoes: {
      A: "Incorreta: não elimina risco; pode piorar mecânica.",
      B: "Incorreta: cartilagem não se vasculariza assim.",
      C: "Incorreta: a lógica é sobrecarga compensatória, não estabilização perfeita.",
      D: "Correta: texto explícito na ponte com a clínica.",
    },
    explicacao:
      "Conceito-chave: Cirurgia salva sintomas, mas mecânica do compartimento muda.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
];

function main() {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const arr = data.questoes;
  const map = Object.fromEntries(novas.map((x) => [x.id, x]));
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i].id] && arr[i].tema === "bmf1_a8") {
      arr[i] = map[arr[i].id];
      n++;
    }
  }
  if (n !== 10) throw new Error(`bmf1_a8: esperado 10, obtido ${n}`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
  JSON.parse(fs.readFileSync(file, "utf8"));
  console.log("bmf1_a8 OK (462–471)");
}

main();
