import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3065,
    "materia": "bmf1",
    "aula_id": "bmf1_a9",
    "tema": "bmf1_a9",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "Qual articulação da coluna vertebral é especificamente classificada como sinovial do tipo Trocoide (ou em Pivô), permitindo o movimento de rotação da cabeça (gesto de 'não')?",
    "opcoes": [
      "A) Articulação Atlantoaxial.",
      "B) Articulação Atlanto-occipital.",
      "C) Sínfise Intervertebral.",
      "D) Articulação Facetária Lombar."
    ],
    "explicacao_geral": "A junta entre C1 (Atlas) e C2 (Áxis) é especializada em rotação.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **articulação atlantoaxial** permite que o atlas gire ao redor do dente do áxis.",
      "B": "[INCORRETA] A atlanto-occipital é elipsoide e permite o movimento de 'sim' (flexão/extensão).",
      "C": "[INCORRETA] São articulações cartilaginosas entre os corpos vertebrais.",
      "D": "[INCORRETA] São articulações sinoviais planas que guiam o deslizamento, não rotação pura como em pivô."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3066,
    "materia": "bmf1",
    "aula_id": "bmf1_a9",
    "tema": "bmf1_a9",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Um jogador de futebol sofre uma entorse de joelho com o pé fixo no gramado. O exame físico revela o 'Sinal da Gaveta Anterior' positivo. Qual estrutura ligamentar foi provavelmente lesionada?",
    "opcoes": [
      "A) Ligamento Cruzado Posterior (LCP).",
      "B) Ligamento Cruzado Anterior (LCA).",
      "C) Ligamento Colateral Medial (LCM).",
      "D) Menisco Medial."
    ],
    "explicacao_geral": "O LCA impede a translação anterior da tíbia em relação ao fêmur. Sua ruptura é testada pela manobra da gaveta anterior ou teste de Lachman.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O LCP impede a translação posterior (gaveta posterior).",
      "B": "[CORRETA] A **lesão do LCA** é a causa clássica da instabilidade anterior do joelho.",
      "C": "[INCORRETA] O LCM estabiliza contra o estresse em valgo.",
      "D": "[INCORRETA] Meniscos amortecem carga, mas não impedem a gaveta anterior."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3067,
    "materia": "bmf1",
    "aula_id": "bmf1_a9",
    "tema": "bmf1_a9",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Comparando as articulações do Ombro e do Quadril, ambas são esferoides. Qual a principal diferença mecânica e funcional entre elas?",
    "opcoes": [
      "A) O ombro é mais estável devido ao encaixe profundo no acetábulo.",
      "B) O quadril prioriza a mobilidade extrema em detrimento da carga.",
      "C) Ambas possuem o mesmo grau de estabilidade óssea.",
      "D) O ombro prioriza a mobilidade, enquanto o quadril prioriza a estabilidade e suporte de carga."
    ],
    "explicacao_geral": "A articulação glenoumeral é rasa (móvel), enquanto a coxofemoral é profunda (estável).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O quadril é que possui o acetábulo profundo.",
      "B": "[INCORRETA] O quadril precisa suportar o peso do corpo (estabilidade).",
      "C": "[INCORRETA] A cavidade glenoide é muito mais rasa que o acetábulo.",
      "D": "[CORRETA] O **ombro** é a articulação mais móvel do corpo; o **quadril** é designed para carga."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3068,
    "materia": "bmf1",
    "aula_id": "bmf1_a9",
    "tema": "bmf1_a9",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Durante uma queda sobre a mão estendida, a energia do impacto é transmitida do rádio para os ossos do carpo. Qual destes ossos, ao ser lesionado, causa dor exacerbada na região da 'Tabaqueira Anatômica'?",
    "opcoes": [
      "A) Semilunar.",
      "B) Piramidal.",
      "C) Escafóide.",
      "D) Trapézio."
    ],
    "explicacao_geral": "O escafóide loca-se justamente no fundo da tabaqueira anatômica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Semilunar é central na fileira proximal.",
      "B": "[INCORRETA] Piramidal é medial.",
      "C": "[CORRETA] A **fratura do escafóide** é uma emergência diagnóstica comum em quedas.",
      "D": "[INCORRETA] Trapézio articula-se com o polegar, mas a tabaqueira foca no escafóide."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3069,
    "materia": "bmf1",
    "aula_id": "bmf1_a9",
    "tema": "bmf1_a9",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "A entorse de tornozelo por 'Inversão' (pé vira para dentro) é a lesão ligamentar mais comum do membro inferior. Qual ligamento é tipicamente o primeiro a ser estirado ou rompido nesse trauma?",
    "opcoes": [
      "A) Ligamento Deltoide.",
      "B) Ligamento Talofibular Anterior.",
      "C) Ligamento Calcaneofibular.",
      "D) Ligamento Tibiofibular Posterior."
    ],
    "explicacao_geral": "Os ligamentos laterais são os mais fracos e sofrem em traumas de inversão.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O deltoide é medial e muito resistente, sofrendo em eversão.",
      "B": "[CORRETA] O **ligamento talofibular anterior** é o 'elo mais fraco' na lateral do tornozelo.",
      "C": "[INCORRETA] O calcaneofibular é o segundo a sofrer em entorses graves.",
      "D": "[INCORRETA] O tibiofibular posterior faz parte da sindesmose, lesionado em entorses altas."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3070,
    "materia": "bmf1",
    "aula_id": "bmf1_a9",
    "tema": "bmf1_a9",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "O 'Manguito Rotador' é um grupo de músculos e tendões essencial para a estabilidade de qual articulação?",
    "opcoes": [
      "A) Glenoumeral (Ombro).",
      "B) Coxofemoral (Quadril).",
      "C) Fêmuro-tibial (Joelho).",
      "D) Úmero-ulnar (Cotovelo)."
    ],
    "explicacao_geral": "Devido à cavidade glenoide rasa, o ombro depende de um suporte dinâmico muscular.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **manguito rotador** (supraespinal, infraespinal, redondo menor e subescapular) mantém a cabeça do úmero centrada na glenoide.",
      "B": "[INCORRETA] O quadril tem estabilidade óssea e ligamentar predominante.",
      "C": "[INCORRETA] O joelho depende de cruzados e colaterais.",
      "D": "[INCORRETA] O cotovelo é uma articulação estável em dobradiça."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3071,
    "materia": "bmf1",
    "aula_id": "bmf1_a9",
    "tema": "bmf1_a9",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual movimento é realizado pela articulação sinovial do tipo Gínglimo (Dobradiça), como a do cotovelo?",
    "opcoes": [
      "A) Rotação lateral e medial.",
      "B) Abdução e adução.",
      "C) Circunvizinhança.",
      "D) Flexão e extensão."
    ],
    "explicacao_geral": "Articulações em dobradiça são uniaxiais, operando em apenas um plano.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Rotação exige pivô ou esferoide.",
      "B": "[INCORRETA] Abdução exige biaxial ou multiaxial.",
      "C": "[INCORRETA] Circundução é a combinação de múltiplos eixos.",
      "D": "[CORRETA] O **gínglimo** é especializado em movimentos de **abertura e fechamento** (flexão/extensão)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3072,
    "materia": "bmf1",
    "aula_id": "bmf1_a9",
    "tema": "bmf1_a9",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "A 'Gomfose' é um tipo especial de articulação fibrosa encontrada em qual local do corpo?",
    "opcoes": [
      "A) Entre os ossos do quadril.",
      "B) Entre as raízes dos dentes e os alvéolos dentários.",
      "C) Entre as costelas e o esterno.",
      "D) Entre as vértebras cervicais."
    ],
    "explicacao_geral": "A gonfose é a ancoragem do dente na mandíbula ou maxila.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Quadril possui sínfises e articulações sinoviais (sacroilíaca).",
      "B": "[CORRETA] A **gonfose** é a articulação 'em pino' dos dentes.",
      "C": "[INCORRETA] Entre costela e esterno temos sincondroses e sinoviais.",
      "D": "[INCORRETA] Vértebras possuem sínfises e sinoviais planas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf1_a9 adicionadas.`);
