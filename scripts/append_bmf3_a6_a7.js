import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4145,
    "materia": "bmf3",
    "aula_id": "bmf3_a6",
    "tema": "bmf3_a6",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual hormônio hipofisário é responsável pelo estímulo da ejeção de leite durante a amamentação e pela contração uterina no parto?),",
    "opcoes": [
      "A) Prolactina.",
      "B) Ocitocina.",
      "C) Hormônio do Crescimento (GH).",
      "D) ADH (Hormônio Antidiurético)."
    ],
    "explicacao_geral": "A ocitocina é sintetizada no hipotálamo e armazenada na neuro-hipófise.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Estimula a produção (síntese) de leite, não a ejeção.",
      "B": "[CORRETA] A **Ocitocina** promove a **ejeção de leite e parto**.",
      "C": "[INCORRETA] Atua no crescimento linear e metabolismo.",
      "D": "[INCORRETA] Atua na reabsorção de água nos rins."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4146,
    "materia": "bmf3",
    "aula_id": "bmf3_a6",
    "tema": "bmf3_a6",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "A 'Desmopressina' (análogo do ADH) é o tratamento de escolha para qual condição clínica?),",
    "opcoes": [
      "A) Diabetes Mellitus Tipo 2.",
      "B) Acromegalia.",
      "C) Nanismo hipofisário.",
      "D) Diabetes Insipidus Neurogênico (Central)."
    ],
    "explicacao_geral": "No diabetes insipidus central, há falta de produção de ADH, levando a poliúria extrema.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Tratada com antidiabéticos orais/insulina.",
      "B": "[INCORRETA] Excesso de GH.",
      "C": "[INCORRETA] Deficiência de GH.",
      "D": "[CORRETA] A **Desmopressina** trata o **Diabetes Insipidus Central**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4147,
    "materia": "bmf3",
    "aula_id": "bmf3_a6",
    "tema": "bmf3_a6",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O hormônio 'Somatostatina' inibe a liberação de diversos outros hormônios. Qual o análogo sintético da somatostatina usado para tratar Acromegalia e tumores carcinoides?),",
    "opcoes": [
      "A) Octreotida.",
      "B) Somatropina.",
      "C) Bromocriptina.",
      "D) Leuprolida."
    ],
    "explicacao_geral": "A octreotida tem meia-vida muito mais longa que a somatostatina natural.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Octreotida** é um análogo da **Somatostatina**.",
      "B": "[INCORRETA] É o próprio hormônio do crescimento sintético.",
      "C": "[INCORRETA] Agonista dopaminérgico (usado para prolactinoma).",
      "D": "[INCORRETA] Análogo de GnRH."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4148,
    "materia": "bmf3",
    "aula_id": "bmf3_a6",
    "tema": "bmf3_a6",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual classe de fármacos (ex: Cabergolina e Bromocriptina) é utilizada para tratar Prolactinomas (tumores que secretam prolactina)?),",
    "opcoes": [
      "A) Antagonistas dopaminérgicos.",
      "B) Agonistas de ocitocina.",
      "C) Agonistas dopaminérgicos (D2).",
      "D) Antagonistas de GH."
    ],
    "explicacao_geral": "A dopamina é o inibidor fisiológico natural da liberação de prolactina.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Causariam hiperprolactinemia (como os antipsicóticos).",
      "B": "[INCORRETA] Sem aplicação nestes tumores.",
      "C": "[CORRETA] A **Dopamina inibe a Prolactina**.",
      "D": "[INCORRETA] Usados na acromegalia (ex: Pegvisomanto)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4149,
    "materia": "bmf3",
    "aula_id": "bmf3_a7",
    "tema": "bmf3_a7",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual o fármaco de primeira escolha para a reposição hormonal no Hipotireoidismo?),",
    "opcoes": [
      "A) Liotironina (T3 sintético).",
      "B) Levotiroxina (T4 sintético).",
      "C) Metimazol.",
      "D) Propiltiouracil."
    ],
    "explicacao_geral": "A levotiroxina tem meia-vida longa e é convertida perifericamente em T3 conforme a necessidade do corpo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Meia-vida muito curta, uso restrito.",
      "B": "[CORRETA] A **Levotiroxina (T4)** é o padrão de **reposição tireoidiana**.",
      "C": "[INCORRETA] Usado no hipertireoidismo.",
      "D": "[INCORRETA] Usado no hipertireoidismo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4150,
    "materia": "bmf3",
    "aula_id": "bmf3_a7",
    "tema": "bmf3_a7",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual o mecanismo de ação das Tionamidas (Metimazol e Propiltiouracil) no tratamento do hipertireoidismo?),",
    "opcoes": [
      "A) Destroem a glândula tireoide irreversivelmente.",
      "B) Bloqueiam os receptores de hormônio tireoidiano nas células.",
      "C) Impedem a absorção de iodo no intestino.",
      "D) Inibem a enzima peroxidase tireoidiana (TPO), bloqueando a síntese de novos hormônios."
    ],
    "explicacao_geral": "O excesso de hormônio pré-formado na glândula pode retardar o início do efeito clínico do fármaco.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Iodo radioativo faz isso.",
      "B": "[INCORRETA] Agem na síntese, não no receptor periférico.",
      "C": "[INCORRETA] Não afetam a absorção intestinal primária.",
      "D": "[CORRETA] As **Tionamidas** bloqueiam a **Produção de T3/T4**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4151,
    "materia": "bmf3",
    "aula_id": "bmf3_a7",
    "tema": "bmf3_a7",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Em uma 'Tempestade Tireoidiana' (crise tireotóxica), qual fármaco é adicionado para controlar rapidamente os sintomas adrenérgicos (taquicardia, tremor)?),",
    "opcoes": [
      "A) Propranolol (Betabloqueador).",
      "B) Adrenalina.",
      "C) Dobutamina.",
      "D) Insulina."
    ],
    "explicacao_geral": "O propranolol também inibe levemente a conversão periférica de T4 em T3.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] **Betabloqueadores** são essenciais no **Hipertireoidismo Agudo**.",
      "B": "[INCORRETA] Pioraria fatalmente o quadro.",
      "C": "[INCORRETA] Pioraria a taquicardia.",
      "D": "[INCORRETA] Sem efeito tireoidiano."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4152,
    "materia": "bmf3",
    "aula_id": "bmf3_a7",
    "tema": "bmf3_a7",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Qual efeito colateral RARO mas GRAVE deve ser monitorado em pacientes usando Metimazol ou PTU (Propiltiouracil)?),",
    "opcoes": [
      "A) Queda de cabelo apenas.",
      "B) Diarreia.",
      "C) Agranulocitose (queda severa de glóbulos brancos).",
      "D) Hipertensão."
    ],
    "explicacao_geral": "O paciente deve ser orientado a procurar o médico se apresentar febre e dor de garganta durante o tratamento.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sintoma comum da própria doença tireoidiana.",
      "B": "[INCORRETA] Inespecífico.",
      "C": "[CORRETA] A **Agranulocitose** é o efeito adverso temido das **Tionamidas**.",
      "D": "[INCORRETA] O fármaco tende a normalizar a PA ao tratar o hipertireoidismo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf3_a6/a7 adicionadas.`);
