import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3137,
    "materia": "bmf1",
    "aula_id": "bmf1_a18",
    "tema": "bmf1_a18",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A digestão dos alimentos inicia-se na cavidade oral. Qual a principal função da língua durante a fase preparatória da digestão?",
    "opcoes": [
      "A) Produzir a maior parte da enzima pepsina.",
      "B) Manipular o bolo alimentar e auxiliar na articulação da fala.",
      "C) Filtrar as bactérias patogênicas do alimento.",
      "D) Absorver os nutrientes simples diretamente para o sangue."
    ],
    "explicacao_geral": "A língua é um órgão muscular extremamente móvel que desempenha papéis mecânicos e sensoriais.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A pepsina é produzida no estômago.",
      "B": "[CORRETA] Além da **gustação**, a língua é essencial para posicionar o alimento sob os dentes e iniciar a **deglutição**.",
      "C": "[INCORRETA] As tonsilas (amígdalas) têm papel imune, não a superfície da língua.",
      "D": "[INCORRETA] Ocorre absorção mínima de fármacos, mas nutrientes são absorvidos no intestino."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3138,
    "materia": "bmf1",
    "aula_id": "bmf1_a18",
    "tema": "bmf1_a18",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "As papilas linguais possuem diferentes morfologias. Quais são as papilas mais numerosas, responsáveis por conferir rugosidade à língua, mas que NÃO possuem botões gustativos?",
    "opcoes": [
      "A) Papilas Fungiformes.",
      "B) Papilas Circunvaladas (Caliciformes).",
      "C) Papilas Filiformes.",
      "D) Papilas Foliadas."
    ],
    "explicacao_geral": "As papilas filiformes têm função puramente mecânica (fricção).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Têm formato de cogumelo e possuem botões gustativos.",
      "B": "[INCORRETA] São as maiores e ficam no 'V' lingual, ricas em botões gustativos.",
      "C": "[CORRETA] As **papilas filiformes** são pontiagudas e apenas mecânicas.",
      "D": "[INCORRETA] Localizam-se nas bordas laterais e possuem botões gustativos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3139,
    "materia": "bmf1",
    "aula_id": "bmf1_a18",
    "tema": "bmf1_a18",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Um paciente queixa-se de hipersensibilidade dentária ao ingerir bebidas frias. Anatomorfologicamente, a dor ocorre quando o estímulo atinge as terminações nervosas localizadas em qual tecido do dente?",
    "opcoes": [
      "A) Polpa.",
      "B) Esmalte.",
      "C) Dentina.",
      "D) Cemento."
    ],
    "explicacao_geral": "O dente possui camadas minerais que protegem o centro vivo e inervado.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **polpa** é o tecido conjuntivo frouxo rico em vasos e nervos no interior do dente.",
      "B": "[INCORRETA] O esmalte é a substância mais dura do corpo e é acelular/insensível.",
      "C": "[INCORRETA] A dentina possui túbulos que transmitem o estímulo, mas os nervos residem na polpa.",
      "D": "[INCORRETA] O cemento recobre apenas a raiz."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3140,
    "materia": "bmf1",
    "aula_id": "bmf1_a18",
    "tema": "bmf1_a18",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Qual é a substância mais dura do corpo humano, que recobre a coroa do dente e não possui capacidade de regeneração por ser acelular após a erupção dentária?",
    "opcoes": [
      "A) Dentina.",
      "B) Esmalte.",
      "C) Cartilagem Calcificada.",
      "D) Osteoide."
    ],
    "explicacao_geral": "O esmalte é composto por 96% de minerais, sendo produzido pelos ameloblastos apenas durante a formação do dente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A dentina é o tecido principal do dente, menos dura que o esmalte.",
      "B": "[CORRETA] O **esmalte** protege a coroa e sua perda é irreversível (cáries).",
      "C": "[INCORRETA] Cartilagem calcificada não faz parte da estrutura dentária.",
      "D": "[INCORRETA] Osteoide é a matriz óssea não mineralizada."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3141,
    "materia": "bmf1",
    "aula_id": "bmf1_a18",
    "tema": "bmf1_a18",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O teto da cavidade oral é formado pelos palatos duro e mole. Qual dessas estruturas é composta pela aponeurose de músculos esqueléticos e termina na úvula?",
    "opcoes": [
      "A) Palato Duro.",
      "B) Processo Alveolar.",
      "C) Coanas.",
      "D) Palato Mole."
    ],
    "explicacao_geral": "O palato mole atua como uma válvula que fecha a nasofaringe durante a deglutição.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O palato duro é ósseo (maxila e palatino).",
      "B": "[INCORRETA] Processos alveolares sustentam os dentes.",
      "C": "[INCORRETA] Coanas são as aberturas posteriores das cavidades nasais.",
      "D": "[CORRETA] O **palato mole** é a porção muscular e posterior do teto da boca."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3142,
    "materia": "bmf1",
    "aula_id": "bmf1_a18",
    "tema": "bmf1_a18",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A língua é inervada por diversos nervos cranianos. Qual deles é o responsável por toda a motricidade (movimento) da língua?",
    "opcoes": [
      "A) Nervo Hipoglosso (XII).",
      "B) Nervo Glossofaringeo (IX).",
      "C) Nervo Facial (VII).",
      "D) Nervo Trigêmeo (V)."
    ],
    "explicacao_geral": "O controle motor da língua é quase inteiramente realizado por um único par de nervos.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Nervo Hipoglosso** comanda os músculos intrínsecos e extrínsecos da língua.",
      "B": "[INCORRETA] O IX par é responsável pela sensibilidade e paladar do 1/3 posterior.",
      "C": "[INCORRETA] O VII par é responsável pelo paladar dos 2/3 anteriores.",
      "D": "[INCORRETA] O V par faz a sensibilidade geral (dor/tato) dos 2/3 anteriores."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3143,
    "materia": "bmf1",
    "aula_id": "bmf1_a18",
    "tema": "bmf1_a18",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Um paciente traumatizado apresenta 'fratura de mandíbula' com perda dos dentes incisivos. Qual o nome das cavidades ósseas onde as raízes dentárias se articulam na mandíbula?",
    "opcoes": [
      "A) Forames Mandibulares.",
      "B) Seios Maxilares.",
      "C) Alvéolos Dentários.",
      "D) Fossas Cranianas."
    ],
    "explicacao_geral": "Os alvéolos são recessos revestidos por ligamento periodontal.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Forames são 'furos' para passagem de vasos e nervos.",
      "B": "[INCORRETA] Seios são cavidades pneumáticas nos ossos da face.",
      "C": "[CORRETA] Os **alvéolos** são as 'casas' dos dentes nos processos alveolares.",
      "D": "[INCORRETA] Fossas cranianas suportam o encéfalo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3144,
    "materia": "bmf1",
    "aula_id": "bmf1_a18",
    "tema": "bmf1_a18",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual dos seguintes órgãos NÃO faz parte do canal alimentar, sendo classificado como um órgão acessório do sistema digestório?",
    "opcoes": [
      "A) Esôfago.",
      "B) Estômago.",
      "C) Intestino Delgado.",
      "D) Glândulas Salivares."
    ],
    "explicacao_geral": "O canal alimentar é o tubo contínuo da boca ao ânus; os acessórios auxiliam na digestão externamente a esse tubo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O esôfago é parte integrante do tubo.",
      "B": "[INCORRETA] O estômago é o reservatório do tubo.",
      "C": "[INCORRETA] O delgado é o principal local de absorção do tubo.",
      "D": "[CORRETA] **Glândulas salivares**, dentes, fígado e pâncreas são **órgãos acessórios**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf1_a18 adicionadas.`);
