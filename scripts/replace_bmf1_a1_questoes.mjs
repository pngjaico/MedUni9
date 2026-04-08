import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, "..", "data", "questoes.json");

const novas = [
  {
    id: 262,
    materia: "bmf1",
    tema: "bmf1_a1",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "Durante uma colecistectomia, o paciente está em decúbito dorsal. Ao descrever uma estrutura como anterior, qual referência anatômica é correta?",
    opcoes: [
      "A) A face voltada para o cirurgião principal",
      "B) A face superior em relação ao diafragma",
      "C) A face mais próxima da linha média",
      "D) A face voltada para a frente do corpo na posição anatômica"
    ],
    explicacao_geral:
      "Termos direcionais são definidos pela posição anatômica padrão, independentemente da posição na maca.",
    explicacoes_opcoes: {
      A: "Incorreta: a orientação não depende de onde o profissional está.",
      B: "Incorreta: isso descreve relação superior/inferior, não anterior/posterior.",
      C: "Incorreta: isso descreve medial/lateral.",
      D: "Correta: anterior corresponde à face frontal do corpo na posição anatômica."
    },
    explicacao:
      "A nomenclatura anatômica permanece estável para evitar ambiguidade entre equipes. Por isso, mesmo com o paciente em diferentes decúbitos, 'anterior' continua significando a face frontal do corpo."
  },
  {
    id: 263,
    materia: "bmf1",
    tema: "bmf1_a1",
    modulo: 1,
    dificuldade: 1,
    correta: 0,
    enunciado: "Qual plano anatômico divide o corpo em porções direita e esquerda?",
    opcoes: [
      "A) Plano sagital",
      "B) Plano frontal",
      "C) Plano transversal",
      "D) Plano oblíquo"
    ],
    explicacao_geral:
      "O plano sagital separa direita e esquerda; o mediano é um sagital que passa exatamente na linha média.",
    explicacoes_opcoes: {
      A: "Correta: esta é a divisão clássica direita/esquerda.",
      B: "Incorreta: plano frontal divide anterior e posterior.",
      C: "Incorreta: plano transversal divide superior e inferior.",
      D: "Incorreta: plano oblíquo é inclinado e não é a referência principal para essa divisão."
    },
    explicacao:
      "A associação plano-função é essencial para interpretar exame físico e imagens. Sagital corresponde ao eixo direita-esquerda."
  },
  {
    id: 264,
    materia: "bmf1",
    tema: "bmf1_a1",
    modulo: 1,
    dificuldade: 2,
    correta: 1,
    enunciado:
      "Em um laudo, um nódulo é descrito na face medial da coxa direita. Isso significa que ele está:",
    opcoes: [
      "A) Mais próximo do joelho do que do quadril",
      "B) Mais próximo da linha média do corpo",
      "C) Mais superficial que a fáscia muscular",
      "D) Localizado na face posterior da coxa"
    ],
    explicacao_geral:
      "Medial e lateral são termos que comparam distância em relação à linha média corporal.",
    explicacoes_opcoes: {
      A: "Incorreta: isso descreve proximal/distal.",
      B: "Correta: medial indica aproximação da linha média.",
      C: "Incorreta: isso descreve profundidade.",
      D: "Incorreta: posterior é outro eixo descritivo."
    },
    explicacao:
      "Ao ler descrições anatômicas, primeiro identifique qual eixo está sendo usado. 'Medial' nunca descreve profundidade nem altura no membro."
  },
  {
    id: 265,
    materia: "bmf1",
    tema: "bmf1_a1",
    modulo: 1,
    dificuldade: 2,
    correta: 2,
    enunciado:
      "No cotovelo, flexão e extensão ocorrem predominantemente em torno de qual eixo?",
    opcoes: [
      "A) Eixo longitudinal",
      "B) Eixo vertical",
      "C) Eixo transverso",
      "D) Eixo oblíquo único"
    ],
    explicacao_geral:
      "Movimentos de flexão e extensão ocorrem no plano sagital ao redor de um eixo transverso.",
    explicacoes_opcoes: {
      A: "Incorreta: eixo longitudinal está ligado a rotações.",
      B: "Incorreta: eixo vertical não é o predominante para flexoextensão do cotovelo.",
      C: "Correta: este eixo corresponde ao padrão da articulação tipo dobradiça.",
      D: "Incorreta: não existe um eixo oblíquo único como regra para esse movimento."
    },
    explicacao:
      "Entender plano e eixo em conjunto ajuda a prever limitações funcionais após trauma articular. No cotovelo, o padrão dominante é flexoextensão em torno do eixo transverso."
  },
  {
    id: 266,
    materia: "bmf1",
    tema: "bmf1_a1",
    modulo: 1,
    dificuldade: 1,
    correta: 3,
    enunciado:
      "No membro superior, uma lesão no terço distal do antebraço está, em relação ao ombro:",
    opcoes: [
      "A) Medial",
      "B) Superior",
      "C) Proximal",
      "D) Distal"
    ],
    explicacao_geral:
      "Em membros, proximal é mais próximo da raiz do membro e distal é mais afastado.",
    explicacoes_opcoes: {
      A: "Incorreta: medial/lateral usa a linha média corporal.",
      B: "Incorreta: superior/inferior não é o par principal para este tipo de descrição no membro.",
      C: "Incorreta: proximal seria mais perto do ombro.",
      D: "Correta: o terço distal está mais distante da raiz do membro."
    },
    explicacao:
      "Proximal e distal descrevem a progressão ao longo do membro e são fundamentais para localização de fraturas e lesões neurovasculares."
  },
  {
    id: 267,
    materia: "bmf1",
    tema: "bmf1_a1",
    modulo: 1,
    dificuldade: 3,
    correta: 1,
    enunciado:
      "Em tomografia de tórax, os cortes axiais são analisados em sequência crânio-caudal. Cada corte axial separa, naquele nível, as porções:",
    opcoes: [
      "A) Anterior e posterior",
      "B) Superior e inferior",
      "C) Medial e lateral",
      "D) Proximal e distal"
    ],
    explicacao_geral:
      "O plano axial (transversal) é perpendicular ao eixo longitudinal do corpo.",
    explicacoes_opcoes: {
      A: "Incorreta: essa separação principal é do plano frontal.",
      B: "Correta: é a divisão característica do plano axial.",
      C: "Incorreta: medial/lateral não define o plano de corte.",
      D: "Incorreta: proximal/distal é usado sobretudo em membros."
    },
    explicacao:
      "A leitura multiplanar exige reconhecer o que cada plano separa no espaço. O axial organiza o estudo por níveis de altura corporal."
  },
  {
    id: 268,
    materia: "bmf1",
    tema: "bmf1_a1",
    modulo: 1,
    dificuldade: 2,
    correta: 0,
    enunciado:
      "O epicôndilo lateral do úmero recebe esse nome porque está:",
    opcoes: [
      "A) Mais afastado da linha média do corpo",
      "B) Mais próximo do punho do que do ombro",
      "C) Na face posterior do braço",
      "D) Mais superficial que o músculo braquial"
    ],
    explicacao_geral:
      "A distinção medial/lateral depende da relação com a linha média, não de profundidade nem de altura.",
    explicacoes_opcoes: {
      A: "Correta: essa é a definição anatômica de lateral.",
      B: "Incorreta: isso descreve distal/proximal.",
      C: "Incorreta: posterior é outro eixo descritivo.",
      D: "Incorreta: superficial/profundo não define lateralidade."
    },
    explicacao:
      "Termos anatômicos têm significados específicos e não intercambiáveis. Lateral indica afastamento da linha média."
  },
  {
    id: 269,
    materia: "bmf1",
    tema: "bmf1_a1",
    modulo: 1,
    dificuldade: 2,
    correta: 2,
    enunciado:
      "Qual alternativa descreve corretamente a circundução do ombro?",
    opcoes: [
      "A) Movimento exclusivo de rotação lateral",
      "B) Movimento restrito ao plano frontal",
      "C) Sequência combinada de flexão, abdução, extensão e adução",
      "D) Movimento único em torno de eixo longitudinal"
    ],
    explicacao_geral:
      "Circundução é movimento composto, resultante da combinação de vários movimentos articulares.",
    explicacoes_opcoes: {
      A: "Incorreta: rotação isolada não corresponde à circundução.",
      B: "Incorreta: a circundução envolve mais de um plano.",
      C: "Correta: esta sequência representa o cone de movimento do ombro.",
      D: "Incorreta: não se reduz a um único eixo."
    },
    explicacao:
      "A circundução não é um movimento elementar único. Ela resulta da composição coordenada de movimentos em planos diferentes."
  },
  {
    id: 270,
    materia: "bmf1",
    tema: "bmf1_a1",
    modulo: 1,
    dificuldade: 3,
    correta: 1,
    enunciado:
      "Sobre dissecção anatômica e tomografia computadorizada, qual afirmação é correta?",
    opcoes: [
      "A) A tomografia só permite interpretação axial sem reconstruções confiáveis",
      "B) Reconstruções multiplanares permitem analisar estruturas em diferentes orientações anatômicas",
      "C) A cor observada na peça anatômica corresponde diretamente aos valores de atenuação da tomografia",
      "D) A noção de profundidade só existe em dissecção, nunca em imagem"
    ],
    explicacao_geral:
      "Tomografia moderna permite reformatar os dados em vários planos, mantendo coerência anatômica.",
    explicacoes_opcoes: {
      A: "Incorreta: reconstruções sagitais e coronais são rotina diagnóstica.",
      B: "Correta: o recurso multiplanar aproxima a análise de diferentes cortes anatômicos.",
      C: "Incorreta: cor macroscópica e atenuação radiológica são informações distintas.",
      D: "Incorreta: a percepção de profundidade em imagem existe por cortes sequenciais e reconstruções."
    },
    explicacao:
      "A interpretação por múltiplos planos é um dos pilares da imagem seccional. Isso melhora a correlação com a anatomia tridimensional real."
  },
  {
    id: 271,
    materia: "bmf1",
    tema: "bmf1_a1",
    modulo: 1,
    dificuldade: 3,
    correta: 3,
    enunciado:
      "Em um relatório anatômico, a expressão 'face inferior da escápula' indica a superfície orientada:",
    opcoes: [
      "A) Em direção à linha média",
      "B) Em direção ao dorso",
      "C) Em direção ao esterno",
      "D) Em direção aos pés"
    ],
    explicacao_geral:
      "Inferior/superior descreve orientação ao longo do eixo crânio-caudal.",
    explicacoes_opcoes: {
      A: "Incorreta: isso descreve medial.",
      B: "Incorreta: isso descreve posterior.",
      C: "Incorreta: isso descreve anterior para essa região.",
      D: "Correta: inferior corresponde ao sentido caudal."
    },
    explicacao:
      "No vocabulário anatômico, inferior indica direção caudal. Essa convenção é usada de forma padronizada em textos e laudos."
  }
];

function validar(novasQuestoes) {
  const distCorretas = [0, 1, 2, 3].map((k) => novasQuestoes.filter((q) => q.correta === k).length);
  const dif = { 1: 0, 2: 0, 3: 0 };
  for (const q of novasQuestoes) dif[q.dificuldade]++;
  if (distCorretas.join(",") !== "2,3,2,3") {
    throw new Error(`Gabarito fora do alvo A2 B3 C2 D3: ${distCorretas.join(",")}`);
  }
  if (`${dif[1]}/${dif[2]}/${dif[3]}` !== "2/5/3") {
    throw new Error(`Dificuldade fora do alvo 1/2/3 = 2/5/3: ${dif[1]}/${dif[2]}/${dif[3]}`);
  }
}

function main() {
  validar(novas);
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const arr = data.questoes;
  const map = Object.fromEntries(novas.map((q) => [q.id, q]));
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i].id] && arr[i].tema === "bmf1_a1") {
      arr[i] = map[arr[i].id];
      n++;
    }
  }
  if (n !== 10) throw new Error(`bmf1_a1: esperado 10, substituídas ${n}`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
  JSON.parse(fs.readFileSync(file, "utf8"));
  console.log("bmf1_a1 OK");
}

main();
