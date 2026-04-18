import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3169,
    "materia": "bmf1",
    "aula_id": "bmf1_a22",
    "tema": "bmf1_a22",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Ao identificar o estômago em uma peça anatômica, nota-se uma borda côncava menor à direita e uma borda convexa maior à esquerda. Como se chama a prega de peritônio (omento) que se liga à borda côncava superior e conecta o estômago ao fígado?",
    "opcoes": [
      "A) Omento Maior.",
      "B) Omento Menor.",
      "C) Mesentério.",
      "D) Ligamento Falciforme."
    ],
    "explicacao_geral": "Os omentos são dobras de peritônio que conectam o estômago a outros órgãos ou à parede abdominal.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O omento maior pende da grande curvatura como um avental.",
      "B": "[CORRETA] O **omento menor** estende-se da pequena curvatura do estômago ao fígado.",
      "C": "[INCORRETA] O mesentério fixa as alças do intestino delgado à parede posterior.",
      "D": "[INCORRETA] O ligamento falciforme fixa o fígado ao diafragma e à parede abdominal anterior."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3170,
    "materia": "bmf1",
    "aula_id": "bmf1_a22",
    "tema": "bmf1_a22",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Durante o reconhecimento do intestino grosso em um modelo, o aluno identifica o local onde o íleo desemboca no ceco. Qual estrutura anatômica impede o refluxo de conteúdo fecal para o intestino delgado?",
    "opcoes": [
      "A) Esfíncter de Oddi.",
      "B) Óstio Pilórico.",
      "C) Canal Anal.",
      "D) Papila Ileal (ou Válvula Ileocecal)."
    ],
    "explicacao_geral": "A transição entre o intestino delgado e o grosso é marcada por uma prega mucosa e muscular.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Controla a bíle no duodeno.",
      "B": "[INCORRETA] Saída do estômago.",
      "C": "[INCORRETA] Saída do reto.",
      "D": "[CORRETA] A **papila ileal** (válvula ileocecal) é a fronteira entre o íleo e o ceco."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3171,
    "materia": "bmf1",
    "aula_id": "bmf1_a22",
    "tema": "bmf1_a22",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Ao observar o cólon, nota-se que ele faz uma curva brusca logo abaixo do fígado para se tornar o cólon transverso. Qual o nome dessa curvatura?",
    "opcoes": [
      "A) Flexura Hepática (Flexura Direita).",
      "B) Flexura Esplênica (Flexura Esquerda).",
      "C) Flexura Duodenojejunal.",
      "D) Promontório Sacro."
    ],
    "explicacao_geral": "A orientação das flexuras cólicas segue a posição dos órgãos vizinhos (fígado e baço).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **flexura hepática** é o ângulo que o cólon faz à direita, sob o fígado.",
      "B": "[INCORRETA] A flexura esplênica fica à esquerda, sob o baço.",
      "C": "[INCORRETA] Fixa o duodeno ao jejuno via ligamento de Treitz.",
      "D": "[INCORRETA] Acidente ósseo da coluna sacral."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3172,
    "materia": "bmf1",
    "aula_id": "bmf1_a22",
    "tema": "bmf1_a22",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Um cirurgião inicia uma colecistectomia (retirada da vesícula) e precisa identificar o ducto que deve ser grampeado. Sabendo que a vesícula está na face visceral do fígado, ela se localiza especificamente em qual lobo hepático?",
    "opcoes": [
      "A) Lobo Caudado.",
      "B) Lobo Esquerdo.",
      "C) Lobo Quadrado.",
      "D) Lobo Inferior Dianteiro."
    ],
    "explicacao_geral": "O lobo quadrado situa-se na face visceral, entre a vesícula biliar e o ligamento redondo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O lobo caudado fica próximo à veia cava inferior.",
      "B": "[INCORRETA] A vesícula loca-se à direita da linha média do fígado.",
      "C": "[CORRETA] A vesícula biliar está adjacente ao **lobo quadrado** na face inferior do fígado.",
      "D": "[INCORRETA] Terminologia anatômica inexistente para a divisão clássica do fígado."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3173,
    "materia": "bmf1",
    "aula_id": "bmf1_a22",
    "tema": "bmf1_a22",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Ao realizar a palpação em uma peça de estômago, identifica-se um espessamento circular muscular na saída do órgão. Qual estrutura é essa?",
    "opcoes": [
      "A) Esfíncter Pilórico.",
      "B) Cárdia.",
      "C) Óstio Esofágico.",
      "D) Plexo de Meissner."
    ],
    "explicacao_geral": "O piloro é facilmente identificável na prática como uma área firme e estreitada.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **piloro** é o esfíncter que regula o fluxo gástrico para o duodeno.",
      "B": "[INCORRETA] Cárdia é a entrada, geralmente sem um esfíncter muscular anatômico tão evidente quanto o piloro.",
      "C": "[INCORRETA] Óstio esofágico é apenas a abertura de entrada.",
      "D": "[INCORRETA] Plexo nervoso microscópico."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3174,
    "materia": "bmf1",
    "aula_id": "bmf1_a22",
    "tema": "bmf1_a22",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "No modelo de pâncreas, nota-se que o órgão cruza a coluna vertebral horizontalmente. Qual estrutura vascular importante passa 'abraçada' pela cabeça do pâncreas e pela porção descendente do duodeno?",
    "opcoes": [
      "A) Veia Porta.",
      "B) Artéria e Veia Mesentérica Superior.",
      "C) Veia Cava Superior.",
      "D) Artéria Carótida."
    ],
    "explicacao_geral": "Os vasos mesentéricos superiores emergem por trás do colo do pâncreas e passam sobre o processo uncinado.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A veia porta forma-se atrás do colo do pâncreas, mas não passa anteriormente no 'C' duodenal.",
      "B": "[CORRETA] Os **vasos mesentéricos superiores** têm relação íntima com o complexo duodeno-pancreático.",
      "C": "[INCORRETA] A veia cava superior está no tórax.",
      "D": "[INCORRETA] Artéria do pescoço."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3175,
    "materia": "bmf1",
    "aula_id": "bmf1_a22",
    "tema": "bmf1_a22",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual estrutura de peritônio, em formato de leque, suspende e permite a mobilidade das alças do jejuno e íleo, além de levar os vasos sanguíneos até o intestino delgado?",
    "opcoes": [
      "A) Mesocolon Transverso.",
      "B) Omento Menor.",
      "C) Ligamento Redondo.",
      "D) Mesentério."
    ],
    "explicacao_geral": "O mesentério fixa o intestino à parede abdominal posterior.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Fixa o cólon transverso.",
      "B": "[INCORRETA] Conecta estômago ao fígado.",
      "C": "[INCORRETA] Remanescente da veia umbilical no fígado.",
      "D": "[CORRETA] O **mesentério** é o suporte vital e mecânico do intestino delgado."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3176,
    "materia": "bmf1",
    "aula_id": "bmf1_a22",
    "tema": "bmf1_a22",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Um paciente de 20 anos apresenta dor intensa na 'Fossa Ilíaca Direita' (quadrante inferior direito). Na cirurgia, o médico localiza o Ceco e usa as tênias como guia para encontrar uma estrutura pequena e avermelhada inflamada. Trata-se do:",
    "opcoes": [
      "A) Apêndice Vermiforme.",
      "B) Flexura Esplênica.",
      "C) Piloro.",
      "D) Divertículo de Zenker."
    ],
    "explicacao_geral": "As três tênias do cólon convergem na base do apêndice, servindo como roteiro cirúrgico.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **apêndice** loca-se na base do ceco e é a causa da apendicite.",
      "B": "[INCORRETA] Fica no quadrante superior esquerdo.",
      "C": "[INCORRETA] Fica no centro-superior do abdome.",
      "D": "[INCORRETA] Divertículo esofágico (pescoço/tórax)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf1_a22 adicionadas.`);
