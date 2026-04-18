import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3057,
    "materia": "bmf1",
    "aula_id": "bmf1_a8",
    "tema": "bmf1_a8",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A cartilagem é um tecido conjuntivo especializado com características únicas. Qual das alternativas descreve corretamente uma propriedade fundamental do tecido cartilaginoso?",
    "opcoes": [
      "A) Alta vascularização e inervação.",
      "B) Ausência de vasos sanguíneos, linfáticos e nervos.",
      "C) Presença de osteócitos em lacunas.",
      "D) Capacidade de regeneração rápida após lesão."
    ],
    "explicacao_geral": "O tecido cartilaginoso é **avascular**, dependendo do pericôndrio (quando presente) ou do líquido sinovial para sua nutrição por difusão.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A cartilagem é avascular e indolor (sem nervos).",
      "B": "[CORRETA] A **ausência de vasos** é a marca registrada da cartilagem escolar.",
      "C": "[INCORRETA] Lacunas na cartilagem contêm condrócitos, não osteócitos.",
      "D": "[INCORRETA] Devido à avascularidade, a cartilagem tem cura muito lenta ou nula."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3058,
    "materia": "bmf1",
    "aula_id": "bmf1_a8",
    "tema": "bmf1_a8",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A cartilagem hialina é o tipo mais comum no corpo humano. Em qual desses locais ela pode ser encontrada servindo como suporte estrutural?",
    "opcoes": [
      "A) Anéis da traqueia e brônquios.",
      "B) Pavilhão auricular (orelha).",
      "C) Discos intervertebrais.",
      "D) Epiglote."
    ],
    "explicacao_geral": "A cartilagem **hialina** possui matriz com colágeno tipo II e é encontrada nas vias respiratórias, superfícies articulares e esqueleto fetal.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **traqueia** é mantida aberta por anéis de cartilagem hialina.",
      "B": "[INCORRETA] O pavilhão auricular é feito de cartilagem elástica.",
      "C": "[INCORRETA] Discos intervertebrais são compostos por fibrocartilagem.",
      "D": "[INCORRETA] A epiglote é cartilagem elástica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3059,
    "materia": "bmf1",
    "aula_id": "bmf1_a8",
    "tema": "bmf1_a8",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual célula da cartilagem localiza-se na periferia do tecido e é responsável pela produção ativa da matriz extracelular inicial?",
    "opcoes": [
      "A) Condrócito.",
      "B) Osteoblasto.",
      "C) Fibroblasto.",
      "D) Condroblasto."
    ],
    "explicacao_geral": "As células da cartilagem evoluem de blastos (jovens/produtores) para citos (maduros/manutenção).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Condrócitos são células maduras que ficam aprisionadas em lacunas na matriz profunda.",
      "B": "[INCORRETA] Osteoblastos são células do osso.",
      "C": "[INCORRETA] Fibroblastos são do conjuntivo propriamente dito.",
      "D": "[CORRETA] O **condroblasto** é a célula jovem periférica que sintetiza a matriz cartilaginosa."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3060,
    "materia": "bmf1",
    "aula_id": "bmf1_a8",
    "tema": "bmf1_a8",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Um atleta de levantamento de peso sofre uma rotura no menisco do joelho. Sabendo que o menisco é composto por fibrocartilagem, qual é a principal diferença na constituição desta em relação à cartilagem hialina?",
    "opcoes": [
      "A) Presença exclusiva de fibras elásticas.",
      "B) Grande quantidade de feixes espessos de colágeno tipo I.",
      "C) Ausência total de condrócitos.",
      "D) Presença de muitos vasos sanguíneos internos."
    ],
    "explicacao_geral": "A **fibrocartilagem** é um tecido intermediário entre o conjuntivo denso e a cartilagem hialina, projetada para suportar grandes pressões.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Fibras elásticas definem a cartilagem elástica.",
      "B": "[CORRETA] A fibrocartilagem possui abundância de **colágeno tipo I**, conferindo resistência à tração e compressão.",
      "C": "[INCORRETA] Condrócitos estão presentes em fileiras organizadas.",
      "D": "[INCORRETA] A fibrocartilagem também é predominantemente avascular."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3061,
    "materia": "bmf1",
    "aula_id": "bmf1_a8",
    "tema": "bmf1_a8",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A camada de tecido conjuntivo denso que envolve a maioria das cartilagens (exceto as articulares) e fornece as células precursoras para o crescimento é chamada de:",
    "opcoes": [
      "A) Periósteo.",
      "B) Endomísio.",
      "C) Pericôndrio.",
      "D) Cápsula Articular."
    ],
    "explicacao_geral": "O **pericôndrio** é a 'capa' nutridora e germinativa da cartilagem.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Periósteo envolve os ossos.",
      "B": "[INCORRETA] Endomísio envolve fibras musculares.",
      "C": "[CORRETA] O **pericôndrio** é essencial para a nutrição e crescimento por aposição da cartilagem.",
      "D": "[INCORRETA] A cápsula articular envolve a junta, mas a cartilagem articular em si não tem pericôndrio."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3062,
    "materia": "bmf1",
    "aula_id": "bmf1_a8",
    "tema": "bmf1_a8",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "O crescimento da cartilagem pode ocorrer de duas formas. Como é chamado o crescimento que acontece a partir da divisão mitótica dos condrócitos já existentes dentro das lacunas, formando grupos isógenos?",
    "opcoes": [
      "A) Crescimento Intersticial.",
      "B) Crescimento por Aposição.",
      "C) Ossificação Endocondral.",
      "D) Metaplasia."
    ],
    "explicacao_geral": "O crescimento **intersticial** ocorre de 'dentro para fora', comum nas fases iniciais do desenvolvimento e nas placas epifisárias.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **crescimento intersticial** envolve a mitose celular dentro da matriz já formada.",
      "B": "[INCORRETA] O crescimento por aposição ocorre na periferia, a partir do pericôndrio.",
      "C": "[INCORRETA] Ossificação endocondral é a substituição de cartilagem por osso.",
      "D": "[INCORRETA] Metaplasia é a troca de um tecido adulto por outro."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3063,
    "materia": "bmf1",
    "aula_id": "bmf1_a8",
    "tema": "bmf1_a8",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Pacientes com picnidisostose ou condrodisplasias apresentam alterações no crescimento ósseo porque o molde cartilaginoso inicial falha. Na vida fetal, a cartilagem que forma esse molde é a:",
    "opcoes": [
      "A) Fibrocartilagem.",
      "B) Cartilagem Hialina.",
      "C) Cartilagem Elástica.",
      "D) Cartilagem de Meckel exclusiva."
    ],
    "explicacao_geral": "O esqueleto embrionário é majoritariamente composto por um tipo de cartilagem que depois servirá de base para a ossificação endocondral.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Fibrocartilagem não forma moldes de ossos longos.",
      "B": "[CORRETA] A **cartilagem hialina** compõe o esqueleto fetal e os moldes de ossificação.",
      "C": "[INCORRETA] A elástica fica restrita a locais que exigem flexibilidade deformável.",
      "D": "[INCORRETA] A cartilagem de Meckel é específica da mandíbula, não do corpo todo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3064,
    "materia": "bmf1",
    "aula_id": "bmf1_a8",
    "tema": "bmf1_a8",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual dos locais abaixo é composto por cartilagem elástica, permitindo que a estrutura retorne à forma original após ser dobrada?",
    "opcoes": [
      "A) Superfície articular do fêmur.",
      "B) Discos de cartilagem da traqueia.",
      "C) Sínfise Púbica.",
      "D) Epiglote."
    ],
    "explicacao_geral": "A cartilagem **elástica** possui matriz rica em elastina, sendo típica de locais que precisam de sustentação com grande flexibilidade.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Superfícies articulares são hialinas.",
      "B": "[INCORRETA] Traqueia é hialina.",
      "C": "[INCORRETA] Sínfise púbica é fibrocartilagem.",
      "D": "[CORRETA] A **epiglote** e a orelha externa são os exemplos clássicos de cartilagem elástica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf1_a8 adicionadas.`);
