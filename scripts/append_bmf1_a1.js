import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3001,
    "materia": "bmf1",
    "aula_id": "bmf1_a1",
    "tema": "bmf1_a1",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Para garantir a padronização das descrições anatômicas, utiliza-se a 'Posição Anatômica Padrão'. Qual das alternativas descreve corretamente um elemento dessa posição?",
    "opcoes": [
      "A) Indivíduo em decúbito dorsal com braços estendidos.",
      "B) Olhar fixo no horizonte com as palmas das mãos voltadas para a frente.",
      "C) Membros inferiores cruzados para estabilização do tronco.",
      "D) Cabeça inclinada lateralmente para exposição do pescoço."
    ],
    "explicacao_geral": "A posição anatômica é a referência universal: indivíduo em pé, face para frente, olhar no horizonte, membros superiores estendidos com **palmas para o plano anterior** (supinação) e pés paralelos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O indivíduo deve estar em pé (ortostatismo) e não deitado (decúbito).",
      "B": "[CORRETA] O olhar no horizonte e as **palmas voltadas para a frente** são pilares da posição de descrição.",
      "C": "[INCORRETA] Os pés devem estar paralelos e ligeiramente afastados, nunca cruzados.",
      "D": "[INCORRETA] A cabeça deve estar ereta, mantendo o plano de Frankfurt horizontal."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3002,
    "materia": "bmf1",
    "aula_id": "bmf1_a1",
    "tema": "bmf1_a1",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Um estudante de medicina observa uma peça anatômica seccionada de forma a separar o corpo em metades superior e inferior. Este corte foi realizado em qual plano?",
    "opcoes": [
      "A) Plano Transversal (ou Axial).",
      "B) Plano Sagital Mediano.",
      "C) Plano Coronal (ou Frontal).",
      "D) Plano Parasagital."
    ],
    "explicacao_geral": "Os planos seccionais dividem o corpo em eixos específicos. O **Plano Transversal** (horizontal/axial) é o único que separa as partes superior (cefálica) da inferior (podálica).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **plano transversal** corta o corpo horizontalmente, criando as porções superior e inferior.",
      "B": "[INCORRETA] O plano sagital divide em metades direita e esquerda.",
      "C": "[INCORRETA] O plano coronal divide em porções anterior (ventral) e posterior (dorsal).",
      "D": "[INCORRETA] O plano parasagital é paralelo ao mediano, dividindo também em direita/esquerda, mas de forma desigual."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3003,
    "materia": "bmf1",
    "aula_id": "bmf1_a1",
    "tema": "bmf1_a1",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Em uma descrição cirúrgica, o médico relata que uma lesão cutânea está localizada 'proximal ao cotovelo'. Isso significa que a lesão se encontra:",
    "opcoes": [
      "A) Mais próxima da mão em relação ao cotovelo.",
      "B) Na face lateral do antebraço.",
      "C) Exatamente sobre a articulação do cotovelo.",
      "D) Mais próxima da raiz do membro (ombro) em relação ao cotovelo."
    ],
    "explicacao_geral": "Os termos proximal e distal são usados nos membros para indicar a distância em relação ao tronco (raiz do membro).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Isso seria descrito como **distal** ao cotovelo.",
      "B": "[INCORRETA] Termos laterais descrevem a relação com o plano mediano, não com a raiz do membro.",
      "C": "[INCORRETA] Estar 'ao nível de' não é o mesmo que ser proximal.",
      "D": "[CORRETA] **Proximal** indica que a estrutura está mais próxima da origem do membro ou do tronco."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3004,
    "materia": "bmf1",
    "aula_id": "bmf1_a1",
    "tema": "bmf1_a1",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Qual termo de relação descreve corretamente uma estrutura que se encontra mais próxima do plano mediano do que outra estrutura de referência?",
    "opcoes": [
      "A) Lateral.",
      "B) Intermédio.",
      "C) Medial.",
      "D) Inferior."
    ],
    "explicacao_geral": "A terminologia de lateralidade avalia a distância das estruturas em relação à linha média do corpo (plano mediano).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Lateral indica maior afastamento do plano mediano.",
      "B": "[INCORRETA] Intermédio descreve algo entre uma estrutura medial e uma lateral.",
      "C": "[CORRETA] **Medial** é o termo técnico para indicar que algo está mais perto da linha média do corpo.",
      "D": "[INCORRETA] Inferior (ou caudal) refere-se à direção dos pés, no eixo vertical."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3005,
    "materia": "bmf1",
    "aula_id": "bmf1_a1",
    "tema": "bmf1_a1",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "Ao realizar o movimento de encostar o queixo no peito, o indivíduo está executando qual movimento anatômico no pescoço?",
    "opcoes": [
      "A) Flexão.",
      "B) Extensão.",
      "C) Abdução.",
      "D) Rotação lateral."
    ],
    "explicacao_geral": "Movimentos no plano sagital que reduzem o ângulo entre os ossos ou partes do corpo são denominados flexão.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **flexão** cervical inclina a cabeça para frente, aproximando o queixo do tórax.",
      "B": "[INCORRETA] Extensão seria o movimento oposto (olhar para o teto).",
      "C": "[INCORRETA] Abdução é um movimento de afastamento do plano mediano, geralmente nos membros.",
      "D": "[INCORRETA] Rotação lateral envolveria girar a cabeça para o lado (olhar por cima do ombro)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3006,
    "materia": "bmf1",
    "aula_id": "bmf1_a1",
    "tema": "bmf1_a1",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Um paciente sofre um trauma na face anterior da perna. Qual plano anatômico divide o corpo de modo a conter essa face anterior em uma metade e a face posterior em outra?",
    "opcoes": [
      "A) Sagital.",
      "B) Coronal.",
      "C) Transversal.",
      "D) Axial."
    ],
    "explicacao_geral": "O **Plano Coronal** (ou frontal) é o plano vertical que divide o corpo em porção anterior (frontal/ventral) e posterior (dorsal).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O plano sagital divide em direita e esquerda.",
      "B": "[CORRETA] O **plano coronal** é o responsável pela divisão entre as faces anterior e posterior.",
      "C": "[INCORRETA] Plano transversal divide em superior e inferior.",
      "D": "[INCORRETA] Axial é sinônimo de transversal."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3007,
    "materia": "bmf1",
    "aula_id": "bmf1_a1",
    "tema": "bmf1_a1",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O polegar, em posição anatômica, encontra-se em qual posição em relação aos demais dedos da mão?",
    "opcoes": [
      "A) Medial.",
      "B) Proximal.",
      "C) Distal.",
      "D) Lateral."
    ],
    "explicacao_geral": "Lembre-se: em posição anatômica, as palmas estão para frente. Nesse arranjo, o polegar é o dedo mais afastado da linha média.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O dedo mínimo é o mais medial.",
      "B": "[INCORRETA] Proximal indicaria que ele está mais perto do punho que os outros, o que não define sua lateralidade.",
      "C": "[INCORRETA] Distal indicaria que ele é o mais 'longe' do punho, mas os outros dedos terminam em níveis similares.",
      "D": "[CORRETA] O polegar é a estrutura mais **lateral** da mão quando em posição anatômica (supinação)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3008,
    "materia": "bmf1",
    "aula_id": "bmf1_a1",
    "tema": "bmf1_a1",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Se um órgão, como o pâncreas, está localizado atrás do peritônio, utiliza-se qual termo de direção para descrever sua posição em relação aos órgãos intraperitoniais (como o estômago)?",
    "opcoes": [
      "A) Posterior (ou Dorsal).",
      "B) Anterior (ou Ventral).",
      "C) Superficial.",
      "D) Medial."
    ],
    "explicacao_geral": "Termos de profundidade e direção anterior/posterior ajudam a localizar órgãos nas cavidades. O retroperitônio é a região posterior da cavidade abdominal.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Estruturas atrás de outras são descritas como **posteriores** ou dorsais.",
      "B": "[INCORRETA] Anterior indicaria estar à frente.",
      "C": "[INCORRETA] Superficial indica proximidade com a pele, não relação de profundidade entre órgãos internos.",
      "D": "[INCORRETA] Medial refere-se à proximidade com a linha média, não profundidade do abdome."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf1_a1 adicionadas.`);
