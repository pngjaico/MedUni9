import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3161,
    "materia": "bmf1",
    "aula_id": "bmf1_a21",
    "tema": "bmf1_a21",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "O fígado é a maior glândula do corpo e recebe suprimento sanguíneo de duas fontes principais. Qual vaso é responsável por trazer cerca de 75% do sangue, sendo ele rico em nutrientes absorvidos pelo trato digestório?",
    "opcoes": [
      "A) Artéria Hepática Própria.",
      "B) Veia Cava Inferior.",
      "C) Veia Porta do Fígado.",
      "D) Veia Hepática Supra-hepática."
    ],
    "explicacao_geral": "O sistema porta drena o sangue das vísceras abdominais diretamente para o fígado para processamento metabólico.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A artéria hepática traz sangue bem oxigenado (25%).",
      "B": "[INCORRETA] A cava inferior recebe o sangue após passar pelo fígado.",
      "C": "[CORRETA] A **veia porta** é o principal vaso aferente do fígado.",
      "D": "[INCORRETA] As veias hepáticas drenam o fígado em direção à veia cava."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3162,
    "materia": "bmf1",
    "aula_id": "bmf1_a21",
    "tema": "bmf1_a21",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "A 'Porta Hepática' (Hilo hepático) é a entrada e saída de vasos e ductos. Qual a disposição correta das estruturas na porta hepática, de anterior para posterior?",
    "opcoes": [
      "A) Veia Porta, Artéria Hepática e Ducto Biliar.",
      "B) Ducto Biliar, Artéria Hepática e Veia Porta.",
      "C) Artéria Hepática, Veia Porta e Ducto Biliar.",
      "D) Veia Cava, Aorta e Esôfago."
    ],
    "explicacao_geral": "A anatomia da tríade portal no hilo é fundamental para procedimentos cirúrgicos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A veia porta é a mais posterior.",
      "B": "[CORRETA] A tríade padrão na porta hepática é: **Ducto Biliar (lat. direita), Artéria (lat. esquerda) e Veia Porta (posterior)**.",
      "C": "[INCORRETA] A ordem posterior está errada.",
      "D": "[INCORRETA] Estruturas que não compõem a porta hepática."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3163,
    "materia": "bmf1",
    "aula_id": "bmf1_a21",
    "tema": "bmf1_a21",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente de 45 anos apresenta icterícia (pele amarela) e fezes claras (acolia fecal). O exame de imagem mostra um cálculo impactado no ducto formado pela união do ducto cístico com o ducto hepático comum. Qual é esse ducto?",
    "opcoes": [
      "A) Ducto de Wirsung.",
      "B) Ducto Colédoco.",
      "C) Ducto de Santorini.",
      "D) Veia Porta."
    ],
    "explicacao_geral": "O colédoco leva a bile até a papila maior do duodeno.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Wirsung é o ducto pancreático principal.",
      "B": "[CORRETA] O **ducto colédoco** transporta a bile para o duodeno; sua obstrução causa icterícia obstrutiva.",
      "C": "[INCORRETA] Santorini é o ducto pancreático acessório.",
      "D": "[INCORRETA] A veia porta transporta sangue, não bile."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3164,
    "materia": "bmf1",
    "aula_id": "bmf1_a21",
    "tema": "bmf1_a21",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "O pâncreas é uma glândula mista. Qual das alternativas descreve corretamente sua função exócrina e o local de desembocadura de sua secreção?",
    "opcoes": [
      "A) Produção de suco pancreático e liberação no duodeno.",
      "B) Produção de insulina e liberação no sangue.",
      "C) Produção de bile e liberação na vesícula.",
      "D) Produção de HCl e liberação no estômago."
    ],
    "explicacao_geral": "O suco pancreático contém enzimas digestivas essenciais e bicarbonato.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A função **exócrina** é secretar enzimas no **duodeno** para digestão.",
      "B": "[INCORRETA] Esta é a função endócrina do pâncreas.",
      "C": "[INCORRETA] Bile é função hepática.",
      "D": "[INCORRETA] HCl é função gástrica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3165,
    "materia": "bmf1",
    "aula_id": "bmf1_a21",
    "tema": "bmf1_a21",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "O pâncreas é dividido anatomicamente em quatro partes. Qual delas está intimamente relacionada com o 'C' do duodeno e, caso apresente um tumor, pode causar icterícia precoce por obstrução do colédoco?",
    "opcoes": [
      "A) Cauda do pâncreas.",
      "B) Cabeça do pâncreas.",
      "C) Corpo do pâncreas.",
      "D) Processo uncinado posterior."
    ],
    "explicacao_geral": "A cabeça do pâncreas é a porção mais volumosa e medial.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A cauda toca o baço.",
      "B": "[CORRETA] A **cabeça do pâncreas** é abraçada pelo duodeno.",
      "C": "[INCORRETA] O corpo situa-se atrás do estômago.",
      "D": "[INCORRETA] O processo uncinado é uma projeção da cabeça, mas a icterícia é mais associada à massa da cabeça como um todo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3166,
    "materia": "bmf1",
    "aula_id": "bmf1_a21",
    "tema": "bmf1_a21",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "A secreção biliar e a pancreática desembocam conjuntamente em qual local específico do duodeno?",
    "opcoes": [
      "A) Piloro.",
      "B) Cárdia.",
      "C) Papila menor do duodeno.",
      "D) Papila maior do duodeno (Ampola de Vater)."
    ],
    "explicacao_geral": "A ampola de Vater é o local de convergência do colédoco e do ducto pancreático principal.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Piloro é a fronteira estômago-duodeno.",
      "B": "[INCORRETA] Cárdia é a entrada do estômago.",
      "C": "[INCORRETA] A papila menor recebe o ducto acessório (Santorini), quando presente.",
      "D": "[CORRETA] A **papila maior** é o óstio principal na segunda porção do duodeno."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3167,
    "materia": "bmf1",
    "aula_id": "bmf1_a21",
    "tema": "bmf1_a21",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A vesícula biliar tem a função de armazenar e concentrar a bile. Qual ducto conecta a vesícula biliar ao ducto hepático comum para formar o colédoco?",
    "opcoes": [
      "A) Ducto Hepático Direito.",
      "B) Ducto Pancreático.",
      "C) Ducto Cístico.",
      "D) Ducto Torácico."
    ],
    "explicacao_geral": "O fluxo de bile na vesícula é bidirecionante através deste ducto.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Coleta bile do lobo direito do fígado.",
      "B": "[INCORRETA] Coleta suco pancreático.",
      "C": "[CORRETA] O **ducto cístico** liga a vesícula biliar à árvore biliar principal.",
      "D": "[INCORRETA] O ducto torácico é um vaso linfático."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3168,
    "materia": "bmf1",
    "aula_id": "bmf1_a21",
    "tema": "bmf1_a21",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Um paciente sofre um trauma abdominal penetrante com laceração do baço (esplenectomia). Qual parte do pâncreas corre o risco de ser lesionada por estar em íntimo contato com o hilo esplênico?",
    "opcoes": [
      "A) Cauda do pâncreas.",
      "B) Cabeça do pâncreas.",
      "C) Colo do pâncreas.",
      "D) Esfíncter de Oddi."
    ],
    "explicacao_geral": "O pâncreas é um órgão retroperitoneal que se estende transversalmente no abdome superior.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **cauda do pâncreas** projeta-se para a esquerda até atingir o baço.",
      "B": "[INCORRETA] A cabeça fica à direita.",
      "C": "[INCORRETA] O colo é a porção estreita entre a cabeça e o corpo.",
      "D": "[INCORRETA] O esfíncter de Oddi fica no duodeno (lado oposto)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf1_a21 adicionadas.`);
