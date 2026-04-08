/**
 * Uma conteúdo por vez: substitui somente bmf1_a9 (ids 472–481).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, "..", "data", "questoes.json");

const novas = [
  {
    id: 472,
    materia: "bmf1",
    tema: "bmf1_a9",
    modulo: 1,
    dificuldade: 3,
    correta: 0,
    enunciado:
      "Na coluna, entre os arcos vertebrais, as articulações interfacetárias (zigapofisárias) diferenciam-se do disco intervertebral. Qual descrição está correta?",
    opcoes: [
      "A) Zigapofisárias são sinoviais entre arcos; o disco é complexo fibrocartilaginoso entre corpos",
      "B) Ambos são sinoviais com líquido abundante entre corpos",
      "C) O disco é articulação sinovial pura sem núcleo pulposo",
      "D) Zigapofisárias são suturas fibrosas imóveis como o crânio",
    ],
    explicacao_geral:
      "Confundir disco com facetas é erro clássico em radiologia e semiologia.",
    explicacoes_opcoes: {
      A: "Correta: reproduz a classificação revisão final da conteúdo.",
      B: "Incorreta: disco não é sinovial típico.",
      C: "Incorreta: núcleo e anel definem o disco.",
      D: "Incorreta: facetas são sinoviais e móveis em grau variável.",
    },
    explicacao:
      "Conceito-chave: Nomear a estrutura prevê o tipo de lesão (hérnia vs facetopatia).\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 473,
    materia: "bmf1",
    tema: "bmf1_a9",
    modulo: 1,
    dificuldade: 1,
    correta: 1,
    enunciado:
      "O disco intervertebral funciona como amortecedor entre corpos vertebrais. Qual composição corresponde ao texto?",
    opcoes: [
      "A) Apenas cartilagem hialina sem núcleo",
      "B) Núcleo pulposo central e anel fibroso periférico",
      "C) Labrum glenóide e ligamento redondo",
      "D) Menisco medial e lateral exclusivamente",
    ],
    explicacao_geral:
      "Anel fibroso + núcleo explicam hérnia de disco e mecânica de cisalhamento.",
    explicacoes_opcoes: {
      A: "Incorreta: estrutura é fibrocartilaginosa complexa.",
      B: "Correta: descrição explícita no primeiro bloco da coluna.",
      C: "Incorreta: estruturas do ombro.",
      D: "Incorreta: meniscos são joelho.",
    },
    explicacao:
      "Conceito-chave: Base para entender protrusão versus extrusão em imagem.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 474,
    materia: "bmf1",
    tema: "bmf1_a9",
    modulo: 1,
    dificuldade: 2,
    correta: 2,
    enunciado:
      "Na região lombar, a conteúdo destaca que níveis como L4–L5 e L5–S1 concentram carga e incidência de hérnia discal. Isso ocorre porque:",
    opcoes: [
      "A) São os únicos níveis com articulação zigapofisária",
      "B) A caixa torácica limita exclusivamente esses níveis",
      "C) Há maior demanda biomecânica nessa transição lombossacra",
      "D) A medula termina sempre exatamente em L5",
    ],
    explicacao_geral:
      "Epidemiologia de hérnia segue curvas de carga — correlato clínico diário.",
    explicacoes_opcoes: {
      A: "Incorreta: facetas existem em todos os níveis típicos.",
      B: "Incorreta: tórax limita mais os níveis torácicos.",
      C: "Correta: síntese do texto sobre lombar e hérnia.",
      D: "Incorreta: nível de conus varia; não é o argumento da conteúdo.",
    },
    explicacao:
      "Conceito-chave: ‘Onde carrega mais’ tende a lesionar mais.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 475,
    materia: "bmf1",
    tema: "bmf1_a9",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "Na junção occipito-atlo-axial, qual distinção de movimento predomina, segundo o material?",
    opcoes: [
      "A) Rotação pura em occipito-atlas e flexo-extensão apenas em C2–C3",
      "B) Apenas inclinação lateral em todo o bloqueo occipito-cervical",
      "C) Flexão e extensão exclusivamente abaixo de C3",
      "D) Occipito-atlas predomina flexão/extensão da cabeça; C1–C2 destaca-se por rotação (dens)",
    ],
    explicacao_geral:
      "Diferenciar O-C1 de C1–C2 evita erro em trauma cervical.",
    explicacoes_opcoes: {
      A: "Incorreta: inverte papéis descritos.",
      B: "Incorreta: generalização falsa.",
      C: "Incorreta: ignora occipito-atlas.",
      D: "Correta: texto do parágrafo sobre occipito-atlo-axial.",
    },
    explicacao:
      "Conceito-chave: Atlas vira a cabeça ‘sim/não’; axis gira o ‘não’.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 476,
    materia: "bmf1",
    tema: "bmf1_a9",
    modulo: 1,
    dificuldade: 2,
    correta: 1,
    enunciado:
      "Na articulação glenoumeral, o padrão clássico de luxação descrito na conteúdo ocorre em qual contexto mecânico?",
    opcoes: [
      "A) Adução forçada com cotovelo em extensão máxima exclusivamente",
      "B) Abdução e rotação externa (luxação anterior frequente)",
      "C) Pronação do antebraço com punho flexionado apenas",
      "D) Inversão do pé em declive",
    ],
    explicacao_geral:
      "Mecanismo explica lesão labral tipo Bankart e abordagem de redução.",
    explicacoes_opcoes: {
      A: "Incorreta: não descreve o padrão clássico citado.",
      B: "Correta: correlato do bloco do membro superior.",
      C: "Incorreta: mistura punho sem o eixo glenoumeral.",
      D: "Incorreta: mecanismo de tornozelo.",
    },
    explicacao:
      "Conceito-chave: Ombro mobiliza muito — rompe estabilizadores em vetores típicos.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 477,
    materia: "bmf1",
    tema: "bmf1_a9",
    modulo: 1,
    dificuldade: 2,
    correta: 2,
    enunciado:
      "No joelho, qual é a função biomecânica básica atribuída ao LCA no texto?",
    opcoes: [
      "A) Limitar valgo isoladamente sem relação com rotação",
      "B) Substituir totalmente o papel dos meniscos",
      "C) Limitar translação anterior da tíbia em relação ao fêmur (mecânica de pivot)",
      "D) Impedir extensão completa do joelho em qualquer indivíduo",
    ],
    explicacao_geral:
      "LCA rompido altera cinemática — predispõe lesão meniscal secundária.",
    explicacoes_opcoes: {
      A: "Incorreta: simplifica demais o controle rotacional.",
      B: "Incorreta: menisco e ligamento têm papéis complementares.",
      C: "Correta: frase da seção do membro inferior.",
      D: "Incorreta: extensão não é bloqueio fisiológico do LCA.",
    },
    explicacao:
      "Conceito-chave: Testes como Lachman pressupõem essa anatomia.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 478,
    materia: "bmf1",
    tema: "bmf1_a9",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "No tornozelo, a mortaise medial (maléolo tibial) e lateral (fibular) com o talus associa-se a qual vulnerabilidade descrita na conteúdo?",
    opcoes: [
      "A) Ligamentos mediais são os mais lesionados na eversão forçada",
      "B) O talus está ausente da mortaise em ortostatismo",
      "C) Inversão do pé protege integralmente os ligamentos laterais",
      "D) Ligamentos laterais são mais vulneráveis à entorse por inversão",
    ],
    explicacao_geral:
      "Mecanismo típico de entorse — talofibular anterior é clássico na prática.",
    explicacoes_opcoes: {
      A: "Incorreta: eversão estressa mais o complexo medial.",
      B: "Incorreta: talus compõe a mortaise.",
      C: "Incorreta: inversão é justamente o mecanismo de tensão lateral.",
      D: "Correta: texto explícito sobre inversão e ligamentos laterais.",
    },
    explicacao:
      "Conceito-chave: Anatomia prevê qual estrutura ‘cai primeiro’ no trauma.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 479,
    materia: "bmf1",
    tema: "bmf1_a9",
    modulo: 1,
    dificuldade: 1,
    correta: 0,
    enunciado:
      "Qual distinção corresponde ao par articulação radiocarpica versus mediocarpica na classificação da conteúdo?",
    opcoes: [
      "A) Rádio com a primeira fileira carpal versus articulações entre fileiras carpais",
      "B) Úmero com rádio versus rádio com ulna",
      "C) Punho com metacarpiano exclusivamente",
      "D) Articulação do cotovelo umero-ulnar apenas",
    ],
    explicacao_geral:
      "Separa níveis de lesão e abordagem cirúrgica no punho.",
    explicacoes_opcoes: {
      A: "Correta: diferenciação explícita na revisão final.",
      B: "Incorreta: nível anatômico errado.",
      C: "Incorreta: metacarpiano é distal ao carpo.",
      D: "Incorreta: cotovelo não é punho.",
    },
    explicacao:
      "Conceito-chave: Primeira fileira versus entre fileiras — mapa do carpo.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 480,
    materia: "bmf1",
    tema: "bmf1_a9",
    modulo: 1,
    dificuldade: 3,
    correta: 1,
    enunciado:
      "Desnível de joelhos em lactente levanta hipótese de displasia de quadril no contexto da ponte clínica. Anatomicamente, isso dialoga com:",
    opcoes: [
      "A) Glenóide profunda e acetábulo raso universal",
      "B) Relação cabeça femoral e acetábulo na articulação do quadril",
      "C) Luxação patelar exclusivamente por impacto repetitivo",
      "D) Articulação tibiofibular proximal isolada",
    ],
    explicacao_geral:
      "Triagem de quadril busca congruência cabeça–acetábulo — outra esferóide ‘profunda’.",
    explicacoes_opcoes: {
      A: "Incorreta: inverte estabilidade típica quadril versus ombro.",
      B: "Correta: desnível sugere assimetria do desenvolvimento coxofemoral.",
      C: "Incorreta: foco não é patelofemoral isolado.",
      D: "Incorreta: nível anatômico incorreto para displasia de quadril.",
    },
    explicacao:
      "Conceito-chave: ‘Desnível’ é sinal de triagem, não diagnóstico por imagem sozinho.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 481,
    materia: "bmf1",
    tema: "bmf1_a9",
    modulo: 1,
    dificuldade: 3,
    correta: 3,
    enunciado:
      "A classificação revisão final contrasta menisco medial e lateral. Qual diferença conceitual a conteúdo enfatiza?",
    opcoes: [
      "A) O lateral é sempre mais fixo perifericamente que o medial",
      "B) Ambos têm mobilidade idêntica e irrigação idêntica em todos os adultos",
      "C) O medial é estritamente intra-articular sem ancoragem óssea",
      "D) Há diferença de padrão de fixação periférica e implicação em lesão típica em mecanismo valgo/rotacional",
    ],
    explicacao_geral:
      "Menisco não é ‘dois discos iguais’ — cinemática e lesões diferem.",
    explicacoes_opcoes: {
      A: "Incorreta: classicamente o medial é descrito como mais fixo (dependendo da fonte), não o lateral ‘sempre mais fixo’.",
      B: "Incorreta: mobilidade e vascularização têm gradiente.",
      C: "Incorreta: meniscos ancoram na periferia.",
      D: "Correta: reproduz a linha da classificação de diferenciação.",
    },
    explicacao:
      "Conceito-chave: McMurray e pivot shift pressupõem essa anatomia funcional.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
];

function main() {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const arr = data.questoes;
  const map = Object.fromEntries(novas.map((x) => [x.id, x]));
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i].id] && arr[i].tema === "bmf1_a9") {
      arr[i] = map[arr[i].id];
      n++;
    }
  }
  if (n !== 10) throw new Error(`bmf1_a9: esperado 10, obtido ${n}`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
  JSON.parse(fs.readFileSync(file, "utf8"));
  console.log("bmf1_a9 OK (472–481)");
}

main();
