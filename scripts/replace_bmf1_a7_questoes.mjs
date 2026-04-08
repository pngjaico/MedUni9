/**
 * Uma conteúdo por vez: substitui somente bmf1_a7 (ids 452–461).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, "..", "data", "questoes.json");

const novas = [
  {
    id: 452,
    materia: "bmf1",
    tema: "bmf1_a7",
    modulo: 1,
    dificuldade: 3,
    correta: 0,
    enunciado:
      "Qual tipo de união articula suturas do crânio e inclui, como exemplo distal citado na classificação, a sindesmose tibiofibular?",
    opcoes: [
      "A) Fibrosa",
      "B) Cartilaginosa primária",
      "C) Sinovial esferóide",
      "D) Sinovial plana",
    ],
    explicacao_geral:
      "Fibrosa prioriza resistência com pouco ou nenhum movimento — base para entender imobilidade relativa.",
    explicacoes_opcoes: {
      A: "Correta: exemplos explícitos na primeira classificação da conteúdo.",
      B: "Incorreta: cartilaginosa permite algum movimento limitado, padrão distinto.",
      C: "Incorreta: sinovial implica cavidade e líquido, não sutura típica.",
      D: "Incorreta: plana é subtipo funcional de sinovial, não categoria de união por tecido.",
    },
    explicacao:
      "Conceito-chave: Classificar por tecido de união vem antes da forma sinovial.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 453,
    materia: "bmf1",
    tema: "bmf1_a7",
    modulo: 1,
    dificuldade: 1,
    correta: 1,
    enunciado:
      "A união cartilaginosa caracteriza-se por movimento limitado. Quais exemplos aparecem juntos na classificação introdutória?",
    opcoes: [
      "A) Suturas sagital e lambdóide",
      "B) Disco intervertebral e sínfise púbica",
      "C) Articulações do joelho e do ombro",
      "D) Articulação atlanto-occiptal isoladamente",
    ],
    explicacao_geral:
      "Disco e sínfise são cartilaginosas; joelho e ombro são sinoviais.",
    explicacoes_opcoes: {
      A: "Incorreta: suturas são fibrosas.",
      B: "Correta: reproduz a linha da classificação de união por tecido.",
      C: "Incorreta: essas são sinoviais com cavidade.",
      D: "Incorreta: não resume o par didático da classificação.",
    },
    explicacao:
      "Conceito-chave: Erro típico é rotular disco IV como sinovial.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 454,
    materia: "bmf1",
    tema: "bmf1_a7",
    modulo: 1,
    dificuldade: 2,
    correta: 2,
    enunciado:
      "Em relação às três famílias de união, a articulação sinovial distingue-se fundamentalmente por:",
    opcoes: [
      "A) Ausência de qualquer cartilagem no contato ósseo",
      "B) Substituir o líquido sinovial por tecido fibroso denso exclusivo",
      "C) Apresentar cavidade articular, líquido sinovial e cartilagem hialina nas superfícies",
      "D) Permitir apenas movimento fibroso mínimo como sutura",
    ],
    explicacao_geral:
      "Frase-âncora da conteúdo: sinovial = cavidade + líquido; demais uniões são mais rígidas.",
    explicacoes_opcoes: {
      A: "Incorreta: há cartilagem hialina nas superfícies.",
      B: "Incorreta: líquido é central na definição.",
      C: "Correta: coincide com a coluna da classificação e com a estrutura sinovial.",
      D: "Incorreta: descreve fibrosa, não sinovial.",
    },
    explicacao:
      "Conceito-chave: Este é o filtro conceitual antes de decorar subtipos (dobradiça, esferóide…).\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 455,
    materia: "bmf1",
    tema: "bmf1_a7",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "A cartilagem hialina que recobre as superfícies articulares em sinoviais é avascular. Qual mecanismo a conteúdo destaca para nutrição e lubrificação?",
    opcoes: [
      "A) Perfusão arterial direta em toda espessura da cartilagem",
      "B) Absorção exclusiva pelo osso cortical sem participação articular",
      "C) Sinovite fisiológica permanente como única fonte",
      "D) Difusão a partir do líquido sinovial produzido pela membrana sinovial",
    ],
    explicacao_geral:
      "Liga líquido sinovial à sobrevivência da cartilagem — relevante em artrite e gonartrose.",
    explicacoes_opcoes: {
      A: "Incorreta: cartilagem articular não é vascularizada dessa forma.",
      B: "Incorreta: ignora o papel do fluido intra-articular.",
      C: "Incorreta: sinovite é processo patológico/inflamatório, não estado basal descrito assim.",
      D: "Correta: texto da estrutura sinovial.",
    },
    explicacao:
      "Conceito-chave: Por isso inflamação sinovial altera composição e volume do líquido.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 456,
    materia: "bmf1",
    tema: "bmf1_a7",
    modulo: 1,
    dificuldade: 1,
    correta: 0,
    enunciado:
      "A articulação do cotovelo é classificada funcionalmente como dobradiça (ginglimo) porque permite predominantemente:",
    opcoes: [
      "A) Flexão e extensão",
      "B) Rotação pura em torno de um eixo vertical longo isolado",
      "C) Oposição do polegar como movimento principal",
      "D) Apenas deslizamento mínimo entre ossos do carpo",
    ],
    explicacao_geral:
      "Dobradiça = flexo-extensão; o cotovelo compartilha classe com interfalangeanas.",
    explicacoes_opcoes: {
      A: "Correta: movimento típico da classificação de classificação funcional.",
      B: "Incorreta: descreve melhor pivô.",
      C: "Incorreta: oposição é selar na 1ª metacarpofalangeana do polegar.",
      D: "Incorreta: descreve articulação plana/intercarpica.",
    },
    explicacao:
      "Conceito-chave: O cotovelo também tem componentes adicionais na vida real, mas a classe didática é dobradiça.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 457,
    materia: "bmf1",
    tema: "bmf1_a7",
    modulo: 1,
    dificuldade: 2,
    correta: 1,
    enunciado:
      "A articulação atlantoaxial envolvendo o processo odontoide (dens) exemplifica qual tipo sinovial na classificação de formas?",
    opcoes: [
      "A) Esferóide",
      "B) Pivô (trocoide)",
      "C) Selar",
      "D) Elipsoide",
    ],
    explicacao_geral:
      "Pivô = rotação; cai em trauma cervical e exame neurológico.",
    explicacoes_opcoes: {
      A: "Incorreta: multiaxial amplo é esferóide (ombro/quadril).",
      B: "Correta: exemplo explícito na classificação.",
      C: "Incorreta: selar é polegar MCP1.",
      D: "Incorreta: elipsoide é radiocarpiana na classificação.",
    },
    explicacao:
      "Conceito-chave: Memorizar exemplo ancora a nome técnico.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 458,
    materia: "bmf1",
    tema: "bmf1_a7",
    modulo: 1,
    dificuldade: 3,
    correta: 3,
    enunciado:
      "Sobre o compromisso mobilidade–estabilidade entre ombro e quadril, qual afirmação reproduz a regra prática da conteúdo?",
    opcoes: [
      "A) O quadril é mais móvel e menos estável que o ombro",
      "B) O ombro é mais estável e menos móvel que o quadril",
      "C) Ambos têm profundidade acetabular equivalente à fossa glenóide",
      "D) O ombro tende a alta mobilidade com menor estabilidade relativa; o quadril prioriza estabilidade com cabeça mais profunda no acetábulo",
    ],
    explicacao_geral:
      "Base para entender luxação glenoumeral anterior versus quadril menos luxável.",
    explicacoes_opcoes: {
      A: "Incorreta: inverte o padrão descrito.",
      B: "Incorreta: inverte mobilidade relativa.",
      C: "Incorreta: morfologia e estabilidade não são equivalentes.",
      D: "Correta: síntese da classificação de estabilidade versus mobilidade.",
    },
    explicacao:
      "Conceito-chave: Lesões típicas (Bankart no ombro) seguem esse desequilíbrio.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 459,
    materia: "bmf1",
    tema: "bmf1_a7",
    modulo: 1,
    dificuldade: 2,
    correta: 2,
    enunciado:
      "Na classificação funcional das sinoviais, o joelho é citado como exemplo clássico de articulação do tipo:",
    opcoes: [
      "A) Pivô puro",
      "B) Selar",
      "C) Côndilo, com meniscos no complexo articular",
      "D) Plana exclusivamente, sem flexão nem extensão",
    ],
    explicacao_geral:
      "revisão final cita joelho como “côndilo” clássico; meniscos são fibrocartilagem.",
    explicacoes_opcoes: {
      A: "Incorreta: pivô é atlantoaxial.",
      B: "Incorreta: selar é polegar MCP.",
      C: "Correta: alinha-se à classificação (com meniscos).",
      D: "Incorreta: joelho realiza flexo-extensão importante.",
    },
    explicacao:
      "Conceito-chave: LCA e menisco compartilham cinemática — ponte clínica da conteúdo.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 460,
    materia: "bmf1",
    tema: "bmf1_a7",
    modulo: 1,
    dificuldade: 3,
    correta: 1,
    enunciado:
      "Por que os meniscos do joelho são descritos como fibrocartilagem e não como cartilagem hialina das superfícies articulares?",
    opcoes: [
      "A) Porque são vascularizados diretamente de forma extensa em todo o tecido",
      "B) Porque resistem compressão e cisalhamento em disco/menisco, função distinta da cartilagem hialina superficial",
      "C) Porque são exclusivamente osso cortical",
      "D) Porque não participam da estabilização do joelho",
    ],
    explicacao_geral:
      "classificação contraste hialina (superfície) × fibrocartilagem (meniscos, disco TMJ).",
    explicacoes_opcoes: {
      A: "Incorreta: não é o critério histológico/função da conteúdo.",
      B: "Correta: ecoa a diferenciação explícita do material.",
      C: "Incorreta: confunde com tecido ósseo.",
      D: "Incorreta: meniscos contribuem para congruência e carga.",
    },
    explicacao:
      "Conceito-chave: Erro comum é chamar menisco de ‘cartilagem hialina’.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 461,
    materia: "bmf1",
    tema: "bmf1_a7",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "O líquido sinovial é descrito como ultrafiltrado do plasma com hialuronato. Qual função principal a conteúdo atribui a ele em articulações normais?",
    opcoes: [
      "A) Substituir o sangue no interior do osso cortical",
      "B) Induzir anquilose como objetivo fisiológico",
      "C) Impedir qualquer movimento para proteger o menisco",
      "D) Lubrificar e nutrir a cartilagem articular",
    ],
    explicacao_geral:
      "Sinovite altera volume e composição — ponte com artrites e derrame articular.",
    explicacoes_opcoes: {
      A: "Incorreta: circulação óssea é independente.",
      B: "Incorreta: anquilose é patológica, não função do fluido.",
      C: "Incorreta: movimento é esperado em sinovial saudável.",
      D: "Correta: texto do bloco sobre líquido sinovial.",
    },
    explicacao:
      "Conceito-chave: Fluido saudável ≠ articulação ‘seca’.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
];

function main() {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const arr = data.questoes;
  const map = Object.fromEntries(novas.map((x) => [x.id, x]));
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i].id] && arr[i].tema === "bmf1_a7") {
      arr[i] = map[arr[i].id];
      n++;
    }
  }
  if (n !== 10) throw new Error(`bmf1_a7: esperado 10, obtido ${n}`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
  JSON.parse(fs.readFileSync(file, "utf8"));
  console.log("bmf1_a7 OK (452–461)");
}

main();
