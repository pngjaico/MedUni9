import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3105,
    "materia": "bmf1",
    "aula_id": "bmf1_a14",
    "tema": "bmf1_a14",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "A epiderme é composta por um epitélio estratificado pavimentoso queratinizado. Qual é a camada mais profunda, onde ocorre a intensa divisão mitótica celular (proliferação)?",
    "opcoes": [
      "A) Estrato Basal (ou Germinativo).",
      "B) Estrato Córneo.",
      "C) Estrato Granuloso.",
      "D) Estrato Lúcido."
    ],
    "explicacao_geral": "A renovação da pele ocorre da profundidade para a superfície.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **estrato basal** contém as células-tronco que dão origem aos queratinócitos.",
      "B": "[INCORRETA] O estrato córneo é a camada mais superficial, composta por células mortas e queratina.",
      "C": "[INCORRETA] O granuloso caracteriza-se pela presença de grânulos de queratohialina.",
      "D": "[INCORRETA] O lúcido é visível apenas na pele espessa (palmas e plantas)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3106,
    "materia": "bmf1",
    "aula_id": "bmf1_a14",
    "tema": "bmf1_a14",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Qual célula da epiderme é responsável por sintetizar o pigmento que protege o DNA dos queratinócitos contra os danos causados pela radiação ultravioleta?",
    "opcoes": [
      "A) Célula de Langerhans.",
      "B) Melanócito.",
      "C) Célula de Merkel.",
      "D) Adipócito."
    ],
    "explicacao_geral": "O melanócito transfere melanina para os queratinócitos através de prolongamentos citoplasmáticos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Célula de Langerhans é o macrófago residente (defesa) da epiderme.",
      "B": "[CORRETA] O **melanócito** produz a melanina, determinante da cor da pele e proteção UV.",
      "C": "[INCORRETA] Célula de Merkel atua na percepção tátil (mecanoreceptor).",
      "D": "[INCORRETA] Adipócitos localizam-se na hipoderme (tecido subcutâneo)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3107,
    "materia": "bmf1",
    "aula_id": "bmf1_a14",
    "tema": "bmf1_a14",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A derme é dividida em duas camadas. Qual delas é a mais profunda, composta por tecido conjuntivo denso irregular e rica em feixes espessos de colágeno que conferem resistência à pele?",
    "opcoes": [
      "A) Camada Papilar.",
      "B) Camada Germinativa.",
      "C) Hipoderme.",
      "D) Camada Reticular."
    ],
    "explicacao_geral": "A derme papilar é superficial (tecido frouxo) e a reticular é profunda (tecido denso).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A camada papilar é superficial e forma as papilas dérmicas.",
      "B": "[INCORRETA] Camada germinativa refere-se à base da epiderme.",
      "C": "[INCORRETA] Hipoderme é o tecido adiposo abaixo da derme.",
      "D": "[CORRETA] A **camada reticular** é a porção robusta da derme.",
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3108,
    "materia": "bmf1",
    "aula_id": "bmf1_a14",
    "tema": "bmf1_a14",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Um paciente acamado evolui com uma lesão ulcerada no calcanhar que atinge o tecido gorduroso localizado abaixo da derme. Anatomorfologicamente, qual camada foi atingida?",
    "opcoes": [
      "A) Estrato Córneo.",
      "B) Derme Papilar.",
      "C) Hipoderme (Tecido Subcutâneo).",
      "D) Epitélio de Revestimento."
    ],
    "explicacao_geral": "O tecido adiposo que isola o corpo termicamente e amortece impactos fica na camada mais profunda do tegumento.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O estrato córneo é superficial.",
      "B": "[INCORRETA] A derme papilar é conjuntivo frouxo sem gordura predominante.",
      "C": "[CORRETA] A **hipoderme** é a fáscia superficial rica em adipócitos atingida em úlceras de pressão profundas.",
      "D": "[INCORRETA] Epitélio de revestimento refere-se apenas à epiderme."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3109,
    "materia": "bmf1",
    "aula_id": "bmf1_a14",
    "tema": "bmf1_a14",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Qual estrato da epiderme caracteriza-se por células repletas de grânulos basofílicos de queratohialina e é o local onde se inicia a desintegração dos núcleos celulares?",
    "opcoes": [
      "A) Estrato Granuloso.",
      "B) Estrato Espinhoso.",
      "C) Estrato Lúcido.",
      "D) Estrato Basal."
    ],
    "explicacao_geral": "O nome da camada reflete o aspecto microscópico das células em processo de maturação.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] No **estrato granuloso**, os queratinócitos tornam-se pavimentosos e granulados.",
      "B": "[INCORRETA] O estrato espinhoso possui desmossomos que dão aparência de 'espinhos' às células.",
      "C": "[INCORRETA] O estrato lúcido é uma camada de transição e transparente.",
      "D": "[INCORRETA] O estrato basal possui células cilíndricas/cúbicas íntegras e em divisão."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3110,
    "materia": "bmf1",
    "aula_id": "bmf1_a14",
    "tema": "bmf1_a14",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "No diagnóstico de câncer de pele melanoma, o patologista avalia a profundidade de invasão da derme. Sabendo que a epiderme é avascular, de onde provém a nutrição dos queratinócitos?",
    "opcoes": [
      "A) Das glândulas sudoríparas.",
      "B) Por difusão a partir dos capilares das papilas dérmicas.",
      "C) Diretamente do ar ambiente.",
      "D) Da própria melanina produzida."
    ],
    "explicacao_geral": "Epitélios não possuem vasos próprios; dependem do conjuntivo subjacente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Glândulas secretam suor, não nutrem o tecido epitelial circundante.",
      "B": "[CORRETA] O oxigênio e nutrientes chegam por **difusão** vindo da derme papilar.",
      "C": "[INCORRETA] Somente a camada córnea tem contato com o ar e ela é composta por células mortas.",
      "D": "[INCORRETA] Melanina é um pigmento protetor, não nutritivo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3111,
    "materia": "bmf1",
    "aula_id": "bmf1_a14",
    "tema": "bmf1_a14",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A 'Pele Espessa' é encontrada nas palmas das mãos e plantas dos pés. Qual característica histológica diferencia a pele espessa da pele fina?",
    "opcoes": [
      "A) Presença de muitos folículos pilosos.",
      "B) Ausência de glândulas sudoríparas.",
      "C) Camada granulosa mais delgada.",
      "D) Presença do Estrato Lúcido e estrato córneo muito desenvolvido."
    ],
    "explicacao_geral": "Locais de alto atrito e pressão possuem adaptações epidérmicas específicas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pele espessa é glabra (sem pelos).",
      "B": "[INCORRETA] Possui muitas glândulas sudoríparas.",
      "C": "[INCORRETA] O estrato granuloso é proporcionalmente mais evidente na pele espessa.",
      "D": "[CORRETA] O **estrato lúcido** e um **estrato córneo massivo** são os definidores da pele espessa."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3112,
    "materia": "bmf1",
    "aula_id": "bmf1_a14",
    "tema": "bmf1_a14",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Uma criança apresenta uma queimadura solar moderada com formação de bolhas. Histologicamente, a bolha ocorre devido ao acúmulo de fluido em qual interface?",
    "opcoes": [
      "A) Interface entre a epiderme e a derme (junção dermoepidérmica).",
      "B) Entre o osso e o periósteo.",
      "C) Dentro da medula óssea.",
      "D) No tecido adiposo da hipoderme."
    ],
    "explicacao_geral": "O descolamento da epiderme em relação à derme cria o espaço para o edema localizado.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **separação dermoepidérmica** é o local de formação de bolhas em queimaduras de 2º grau.",
      "B": "[INCORRETA] Isso envolveria trauma ósseo grave, não queimadura superficial.",
      "C": "[INCORRETA] Localização interna profunda.",
      "D": "[INCORRETA] Queimaduras que atingem a hipoderme são de 3º grau e geralmente formam escaras, não bolhas serosas simples."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf1_a14 adicionadas.`);
