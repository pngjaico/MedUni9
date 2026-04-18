import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4025,
    "materia": "mad1",
    "aula_id": "mad1_a24",
    "tema": "mad1_a24",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "No sistema sanguíneo ABO, um indivíduo do 'Grupo A' possui quais antígenos nas hemácias e quais anticorpos no plasma?),",
    "opcoes": [
      "A) Antígeno B e Anticorpo Anti-A.",
      "B) Antígeno A e Anticorpo Anti-B.",
      "C) Ambos os antígenos e nenhum anticorpo.",
      "D) Nenhum antígeno e ambos os anticorpos."
    ],
    "explicacao_geral": "Os anticorpos do sistema ABO são naturais (IgM) e surgem nos primeiros meses de vida.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Descrição do Grupo B.",
      "B": "[CORRETA] O **Grupo A** tem **Antígeno A e Anti-B**.",
      "C": "[INCORRETA] Descrição do Grupo AB (receptor universal).",
      "D": "[INCORRETA] Descrição do Grupo O (doador universal)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4026,
    "materia": "mad1",
    "aula_id": "mad1_a24",
    "tema": "mad1_a24",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "A 'Imunidade de Rebanho' (ou coletiva) é um conceito fundamental em vacinação. Como ela ocorre?),",
    "opcoes": [
      "A) Quando todos os animais de uma fazenda são vacinados.",
      "B) Quando apenas os idosos são vacinados.",
      "C) Quando as pessoas param de se encontrar.",
      "D) Quando uma grande parte da população torna-se imune, dificultando a circulação do patógeno e protegendo indiretamente os indivíduos não imunizados."
    ],
    "explicacao_geral": "É essencial para proteger pessoas que não podem ser vacinadas (imunodeprimidos, alérgicos graves).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Termo veterinário de origem, mas o conceito aqui é epidemiológico humano.",
      "B": "[INCORRETA] Insuficiente para proteção coletiva contra a maioria dos patógenos.",
      "C": "[INCORRETA] Refere-se a distanciamento social, não imunidade.",
      "D": "[CORRETA] A **Imunidade de Rebanho** interrompe a **cadeia de transmissão**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4027,
    "materia": "mad1",
    "aula_id": "mad1_a24",
    "tema": "mad1_a24",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A Doença Hemolítica do Recém-nascido (DHRN) por incompatibilidade Rh ocorre tipicamente em qual situação?),",
    "opcoes": [
      "A) Mãe Rh NEGATIVO, previamente sensibilizada, gestando um feto Rh POSITIVO.",
      "B) Mãe Rh POSITIVO gestando feto Rh NEGATIVO.",
      "C) Pai Rh NEGATIVO e Mãe Rh NEGATIVO.",
      "D) Somente em partos prematuros."
    ],
    "explicacao_geral": "Os anticorpos anti-D (IgG) da mãe atravessam a placenta e atacam as hemácias do feto.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **DHRN Rh** exige a **sensibilização da mãe Rh-**.",
      "B": "[INCORRETA] A mãe Rh+ não produz anti-D.",
      "C": "[INCORRETA] Feto será Rh- obrigatoriamente, sem incompatibilidade.",
      "D": "[INCORRETA] Ocorre em qualquer idade gestacional após a sensibilização."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4028,
    "materia": "mad1",
    "aula_id": "mad1_a24",
    "tema": "mad1_a24",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "As vacinas de 'Vírus Vivos Atenuados' (ex: Tríplice Viral, BCG, Sabin) são contraindicadas para qual grupo de pessoas?),",
    "opcoes": [
      "A) Atletas de alto rendimento.",
      "B) Crianças com mais de 5 anos.",
      "C) Indivíduos severamente imunodeprimidos e gestantes.",
      "D) Pessoas que comem muita carne."
    ],
    "explicacao_geral": "O microrganismo atenuado ainda pode se replicar e causar doença grave em quem não tem sistema imune funcional.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sem contraindicação.",
      "B": "[INCORRETA] Período vacinal normal.",
      "C": "[CORRETA] **Vacinas Vivas** podem causar doença em **Imunodeprimidos**.",
      "D": "[INCORRETA] Sem relação."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4029,
    "materia": "mad1",
    "aula_id": "mad1_a24",
    "tema": "mad1_a24",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Qual a função dos 'Adjuvantes' (como o Alúmen) adicionados a algumas vacinas inativadas?),",
    "opcoes": [
      "A) Matar o vírus da vacina.",
      "B) Potencializar a resposta imunitária ao antígeno, estimulando a imunidade inata e criando um depósito local para liberação lenta.",
      "C) Fazer a vacina brilhar no escuro.",
      "D) Impedir que a agulha entorte."
    ],
    "explicacao_geral": "Vacinas inativadas são menos imunogênicas e geralmente precisam desse 'impulso' extra.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Função de agentes inativantes (ex: formaldeído).",
      "B": "[CORRETA] Os **Adjuvantes** aumentam a **imunogenicidade** vacinal.",
      "C": "[INCORRETA] Absurdo.",
      "D": "[INCORRETA] Design mecânico."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4030,
    "materia": "mad1",
    "aula_id": "mad1_a24",
    "tema": "mad1_a24",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente do grupo sanguíneo 'O Rh NEGATIVO' sofre um acidente e precisa de sangue urgente. Qual o sangue ideal para ele e por quê?),",
    "opcoes": [
      "A) Qualquer sangue, ele é receptor universal.",
      "B) Sangue AB Positivo.",
      "C) Sangue A Negativo.",
      "D) Apenas sangue O Rh NEGATIVO, pois ele possui anticorpos Anti-A, Anti-B e pode produzir Anti-D se receber sangue Rh+."
    ],
    "explicacao_geral": "O grupo O- é o doador universal, mas só pode receber dele mesmo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] AB+ é o receptor universal.",
      "B": "[INCORRETA] Causaria hemólise imediata e morte.",
      "C": "[INCORRETA] Causaria hemólise (Anti-A).",
      "D": "[CORRETA] O **Doador Universal (O-)** é o receptor mais **restrito**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4031,
    "materia": "mad1",
    "aula_id": "mad1_a24",
    "tema": "mad1_a24",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Por que a vacina contra o Tétano (toxoide tetânico) exige doses de reforço a cada 10 anos?),",
    "opcoes": [
      "A) Porque a memória imunológica contra toxinas proteicas (não associadas ao patógeno vivo) tende a decair com o tempo, necessitando de novos estímulos.",
      "B) Porque o ferro do prego muda de formato.",
      "C) Porque o médico ganha mais dinheiro com os reforços.",
      "D) Para manter o braço forte."
    ],
    "explicacao_geral": "Diferente de doenças virais vivas (imunidade vitalícia geralmente), toxoides têm memória mais curta.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Reforço Vacinal** é necessário para manter os **níveis protetores** de anticorpos.",
      "B": "[INCORRETA] Fatores físicos externos irrelevantes imunitariamente desta forma.",
      "C": "[INCORRETA] Antiético/Irrelevante biológico.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4032,
    "materia": "mad1",
    "aula_id": "mad1_a24",
    "tema": "mad1_a24",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual das vacinas abaixo é produzida por 'Engenharia Genética' (Recombinante), utilizando apenas uma proteína purificada do vírus?),",
    "opcoes": [
      "A) Sabin (Poliomielite oral).",
      "B) BCG (Tuberculose).",
      "C) Hepatite B (HBsAg recombinante).",
      "D) Sarampo."
    ],
    "explicacao_geral": "Essa vacina é extremamente segura, pois não contém material genético viral íntegro capaz de replicação.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Atenuada.",
      "B": "[INCORRETA] Atenuada (bactéria viva).",
      "C": "[CORRETA] A vacina da **Hepatite B** é o modelo de **Vacina Recombinante**.",
      "D": "[INCORRETA] Atenuada."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad1_a24 adicionadas.`);
