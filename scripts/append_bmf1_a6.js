import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3041,
    "materia": "bmf1",
    "aula_id": "bmf1_a6",
    "tema": "bmf1_a6",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "Qual região da coluna vertebral é composta por 5 vértebras fundidas que formam uma estrutura única responsável pela articulação com a cintura pélvica?",
    "opcoes": [
      "A) Cervical.",
      "B) Torácica.",
      "C) Sacra.",
      "D) Lombar."
    ],
    "explicacao_geral": "O sacro resulta da fusão de cinco vértebras sacrais, provendo estabilidade à base da coluna e conectando-se aos ossos do quadril.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A cervical possui 7 vértebras independentes no pescoço.",
      "B": "[INCORRETA] A torácica possui 12 vértebras que se articulam com as costelas.",
      "C": "[CORRETA] O **sacro** é a estrutura formada pela fusão de 5 vértebras, sendo o pilar central da pelve.",
      "D": "[INCORRETA] A lombar possui 5 vértebras grandes e independentes."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3042,
    "materia": "bmf1",
    "aula_id": "bmf1_a6",
    "tema": "bmf1_a6",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Um paciente apresenta dor intensa à palpação na 'Tabaqueira Anatômica' após queda com a mão estendida. Qual osso do carpo, localizado no assoalho dessa região, é o mais frequentemente fraturado nesse tipo de trauma?",
    "opcoes": [
      "A) Pisiforme.",
      "B) Escafóide.",
      "C) Hamato.",
      "D) Capitato."
    ],
    "explicacao_geral": "O escafóide é o osso mais lateral da fileira proximal do carpo e o local de maior incidência de fraturas em quedas típicas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O pisiforme é um osso pequeno e medial.",
      "B": "[CORRETA] A dor na **tabaqueira anatômica** é o sinal clássico de fratura do **escafóide**.",
      "C": "[INCORRETA] O hamato possui um hâmulo característico, mas é medial.",
      "D": "[INCORRETA] O capitato é o osso central e maior do carpo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3043,
    "materia": "bmf1",
    "aula_id": "bmf1_a6",
    "tema": "bmf1_a6",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "As vértebras cervicais possuem características únicas que as diferenciam das demais. Qual acidente anatômico é EXCLUSIVO das vértebras cervicais?",
    "opcoes": [
      "A) Processo Espinhoso.",
      "B) Fóveas Costais.",
      "C) Processos Transversos.",
      "D) Forame Transverso."
    ],
    "explicacao_geral": "As cervicais permitem a passagem da artéria vertebral através de forames específicos em seus processos laterais.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Todas as vértebras possuem processo espinhoso (embora o da cervical possa ser bífido).",
      "B": "[INCORRETA] Fóveas costais são exclusivas das vértebras torácicas.",
      "C": "[INCORRETA] Praticamente todas as vértebras possuem processos transversos.",
      "D": "[CORRETA] O **forame transverso** é o 'furo' no processo transverso típico das cervicais para a passagem da **artéria vertebral**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3044,
    "materia": "bmf1",
    "aula_id": "bmf1_a6",
    "tema": "bmf1_a6",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Ao examinar um fêmur, nota-se uma grande projeção óssea posterolateral na extremidade proximal, que serve como importante local de fixação para os músculos glúteos. Trata-se do:",
    "opcoes": [
      "A) Trocânter Maior.",
      "B) Trocânter Menor.",
      "C) Epicôndilo Lateral.",
      "D) Maléolo Medial."
    ],
    "explicacao_geral": "O fêmur possui projeções proximais (trocânteres) e distais (côndilos). O trocânter maior é palpável na lateral do quadril.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **trocânter maior** é o acidente lateral marcante do fêmur proximal.",
      "B": "[INCORRETA] O trocânter menor é medial e posterior, servindo para fixação do iliopsoas.",
      "C": "[INCORRETA] Epicôndilos localizam-se na extremidade distal do fêmur (joelho).",
      "D": "[INCORRETA] Maléolos são acidentes da tíbia e fíbula (tornozelo)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3045,
    "materia": "bmf1",
    "aula_id": "bmf1_a6",
    "tema": "bmf1_a6",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um corredor de maratona sente dor na face lateral do tornozelo após uma entorse por inversão. Além dos ligamentos, qual acidente ósseo da fíbula serve como referência externa para essa região?",
    "opcoes": [
      "A) Maléolo Medial.",
      "B) Tuberosidade da Tíbia.",
      "C) Maléolo Lateral.",
      "D) Cabeça do Rádio."
    ],
    "explicacao_geral": "O tornozelo possui duas 'bolas' ósseas: uma interna (tíbia) e uma externa (fíbula).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O maléolo medial pertence à tíbia e fica na face interna.",
      "B": "[INCORRETA] A tuberosidade da tíbia fica na face anterior, logo abaixo do joelho.",
      "C": "[CORRETA] O **maléolo lateral** é a extremidade distal da fíbula que forma a proeminência lateral do tornozelo.",
      "D": "[INCORRETA] Cabeça do rádio localiza-se no cotovelo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3046,
    "materia": "bmf1",
    "aula_id": "bmf1_a6",
    "tema": "bmf1_a6",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Qual osso do antebraço localiza-se medialmente em posição anatômica e possui um processo chamado 'Olécrano' que forma a ponta do cotovelo?",
    "opcoes": [
      "A) Rádio.",
      "B) Ulna.",
      "C) Úmero.",
      "D) Escápula."
    ],
    "explicacao_geral": "Lembre-se: em posição anatômica (palmas para frente), o rádio é lateral e a ulna é medial.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O rádio é lateral (lado do polegar) e não possui olécrano.",
      "B": "[CORRETA] A **ulna** é o osso medial e o **olécrano** é sua projeção proximal que entra na fosa do úmero.",
      "C": "[INCORRETA] O úmero é o osso do braço.",
      "D": "[INCORRETA] A escápula localiza-se no dorso."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3047,
    "materia": "bmf1",
    "aula_id": "bmf1_a6",
    "tema": "bmf1_a6",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Ao palpar a base do pescoço, o osso que se estende horizontalmente do esterno até a escápula e é o mais frequentemente fraturado no corpo humano é:",
    "opcoes": [
      "A) Clavícula.",
      "B) Costela I.",
      "C) Processo Coracoide.",
      "D) Acrômio."
    ],
    "explicacao_geral": "A clavícula atua como um suporte que mantém o membro superior afastado do tronco, sendo vulnerável a traumas diretos e indiretos.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **clavícula** é o osso horizontal que conecta o axial ao apendicular superior.",
      "B": "[INCORRETA] A primeira costela é profunda e protegida pela clavícula.",
      "C": "[INCORRETA] O processo coracoide é uma projeção da escápula.",
      "D": "[INCORRETA] O acrômio é a ponta lateral da escápula que se articula com a clavícula."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3048,
    "materia": "bmf1",
    "aula_id": "bmf1_a6",
    "tema": "bmf1_a6",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual dessas estruturas é uma característica marcante e diagnóstica das vértebras torácicas?",
    "opcoes": [
      "A) Forames transversos grandes.",
      "B) Processo espinhoso curto e bífido.",
      "C) Corpo vertebral em formato de rim.",
      "D) Fóveas costais para articulação com as costelas."
    ],
    "explicacao_geral": "Vértebras torácicas são as únicas que se conectam ao gradil costal.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Esta é característica das cervicais.",
      "B": "[INCORRETA] Esta também é típica das cervicais.",
      "C": "[INCORRETA] O corpo em formato de rim é típico das vértebras lombares.",
      "D": "[CORRETA] As **fóveas costais** (no corpo e nos processos transversos) são o 'RG' das vértebras torácicas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf1_a6 adicionadas.`);
