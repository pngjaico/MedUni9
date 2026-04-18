import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3097,
    "materia": "bmf1",
    "aula_id": "bmf1_a13",
    "tema": "bmf1_a13",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "Qual músculo, localizado na face anterior do braço, é o principal flexor do cotovelo e também atua na supinação do antebraço?",
    "opcoes": [
      "A) Tríceps Braquial.",
      "B) Deltoide.",
      "C) Bíceps Braquial.",
      "D) Peitoral Maior."
    ],
    "explicacao_geral": "O bíceps possui duas cabeças e cruza tanto a articulação do ombro quanto a do cotovelo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O tríceps braquial localiza-se na face posterior e é extensor.",
      "B": "[INCORRETA] O deltoide é o principal abdutor do ombro.",
      "C": "[CORRETA] O **bíceps braquial** realiza flexão e supinação (movimento de girar a palma para cima).",
      "D": "[INCORRETA] O peitoral maior atua principalmente na adução e rotação do úmero."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3098,
    "materia": "bmf1",
    "aula_id": "bmf1_a13",
    "tema": "bmf1_a13",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Um paciente queixa-se de dificuldade para subir escadas após uma lesão nervosa. Ao exame físico, nota-se fraqueza na extensão do joelho. Qual grupo muscular anterior da coxa está provavelmente afetado?",
    "opcoes": [
      "A) Quadríceps Femoral.",
      "B) Isquiotibiais.",
      "C) Adutores da Coxa.",
      "D) Glúteo Máximo."
    ],
    "explicacao_geral": "O quadríceps é composto por quatro ventres (reto femoral e vastos) que se unem no tendão patelar.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **quadríceps** é o motor primário da extensão do joelho, essencial para subir degraus.",
      "B": "[INCORRETA] Isquiotibiais (posteriores) realizam flexão do joelho.",
      "C": "[INCORRETA] Adutores fecham as pernas em direção à linha média.",
      "D": "[INCORRETA] Glúteo máximo é o principal extensor do quadril."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3099,
    "materia": "bmf1",
    "aula_id": "bmf1_a13",
    "tema": "bmf1_a13",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Para realizar o movimento de 'ficar na ponta dos pés' (flexão plantar), o indivíduo utiliza predominantemente qual músculo da panturrilha?",
    "opcoes": [
      "A) Tibial Anterior.",
      "B) Extensor Longo dos Dedos.",
      "C) Sartório.",
      "D) Gastrocnêmio."
    ],
    "explicacao_geral": "Os músculos posteriores da perna inserem-se no calcâneo via tendão de Aquiles.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Tibial anterior realiza dorsiflexão (puxar o pé para cima).",
      "B": "[INCORRETA] Atua na extensão dos dedos e dorsiflexão leve.",
      "C": "[INCORRETA] Sartório é um músculo longo da coxa (o mais longo do corpo).",
      "D": "[CORRETA] O **gastrocnêmio** (junto com o sóleo) é o motor da flexão plantar."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3100,
    "materia": "bmf1",
    "aula_id": "bmf1_a13",
    "tema": "bmf1_a13",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Qual músculo do tronco, com origem nas vértebras torácicas e lombares e inserção no úmero, é apelidado de 'músculo do nadador' por realizar a adução, extensão e rotação medial do braço?",
    "opcoes": [
      "A) Trapézio.",
      "B) Latíssimo do Dorso (Grande Dorsal).",
      "C) Reto Abdominal.",
      "D) Erretor da Espinha."
    ],
    "explicacao_geral": "Este músculo largo recobre a maior parte do dorso inferior e lateral.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Trapézio atua na escápula e pescoço.",
      "B": "[CORRETA] O **latíssimo do dorso** traciona o braço para baixo e para trás, movimento fundamental na natação.",
      "C": "[INCORRETA] Reto abdominal é anterior e flexiona o tronco (abdominal).",
      "D": "[INCORRETA] Os eretores da espinha mantêm a postura e estendem a coluna."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3101,
    "materia": "bmf1",
    "aula_id": "bmf1_a13",
    "tema": "bmf1_a13",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um paciente sofre um trauma no ombro e não consegue afastar o braço lateralmente do corpo (abdução) além dos primeiros 15 graus. Qual o músculo motor principal desse movimento a partir de 15 até 90 graus?",
    "opcoes": [
      "A) Supraespinal.",
      "B) Redondo Maior.",
      "C) Deltoide.",
      "D) Subescapular."
    ],
    "explicacao_geral": "A abdução do ombro é uma sucessão coordenada de músculos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O supraespinal inicia a abdução (os primeiros 15 graus).",
      "B": "[INCORRETA] Redondo maior realiza adução e rotação medial.",
      "C": "[CORRETA] O **deltoide** assume a carga principal para elevar o braço lateralmente após o início do movimento.",
      "D": "[INCORRETA] Subescapular é um rotador medial potente."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3102,
    "materia": "bmf1",
    "aula_id": "bmf1_a13",
    "tema": "bmf1_a13",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Os 'músculos abdominais' auxiliam na expiração forçada, defecação e parto. Qual deles possui ventres musculares separados por interseções tendíneas, dando o aspecto de 'gomos'?",
    "opcoes": [
      "A) Reto Abdominal.",
      "B) Oblíquo Externo.",
      "C) Transverso do Abdome.",
      "D) Quadrado Lombar."
    ],
    "explicacao_geral": "O reto abdominal loca-se na linha média dentro da bainha do reto.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **reto abdominal** é divido por interseções que aumentam sua eficiência de contração segmentar.",
      "B": "[INCORRETA] Oblíquo externo é lateral e suas fibras correm diagonalmente.",
      "C": "[INCORRETA] Transverso é a camada mais profunda, com fibras horizontais.",
      "D": "[INCORRETA] Quadrado lombar fica na parede posterior do abdome."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3103,
    "materia": "bmf1",
    "aula_id": "bmf1_a13",
    "tema": "bmf1_a13",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "Qual músculo é considerado o mais lateral da perna e realiza a eversão do pé (virar a planta para fora)?",
    "opcoes": [
      "A) Tibial Posterior.",
      "B) Sóleo.",
      "C) Plantar Delgado.",
      "D) Fibular Longo."
    ],
    "explicacao_geral": "O compartimento lateral da perna contém músculos que estabilizam o tornozelo contra a inversão excessiva.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Tibial posterior é inversor e situa-se profundamente na face posterior.",
      "B": "[INCORRETA] Sóleo realiza flexão plantar e fica sob o gastrocnêmio.",
      "C": "[INCORRETA] Músculo pequeno e vestigial da face posterior.",
      "D": "[CORRETA] O **fibular longo** (e o curto) são os eversões por excelência."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3104,
    "materia": "bmf1",
    "aula_id": "bmf1_a13",
    "tema": "bmf1_a13",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Um ginasta apresenta dor na região lombar. O médico suspeita de encurtamento do músculo que é o principal flexor do quadril, com origem na coluna lombar e fossa ilíaca. Trata-se do:",
    "opcoes": [
      "A) Glúteo Médio.",
      "B) Iliopsoas.",
      "C) Reto Femoral.",
      "D) Grácil."
    ],
    "explicacao_geral": "O iliopsoas é a fusão funcional dos músculos psoas maior e ilíaco.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Glúteo médio é abdutor do quadril.",
      "B": "[CORRETA] O **iliopsoas** é o motor mais potente da flexão do quadril.",
      "C": "[INCORRETA] Reto femoral ajuda na flexão, mas sua ação principal é a extensão do joelho.",
      "D": "[INCORRETA] Grácil é um adutor da coxa."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf1_a13 adicionadas.`);
