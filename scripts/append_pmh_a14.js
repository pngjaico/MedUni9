import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3281,
    "materia": "pmh",
    "aula_id": "pmh_a14",
    "tema": "pmh_a14",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "No estado absortivo (logo após uma refeição balanceada), qual o hormônio predominante e qual a sua principal ação metabólica no fígado?),",
    "opcoes": [
      "A) Insulina; Estimula a glicogênese e síntese de ácidos graxos.",
      "B) Glucagon; Estimula a gliconeogênese.",
      "C) Adrenalina; Estimula a lipólise.",
      "D) Cortisol; Estimula a proteólise."
    ],
    "explicacao_geral": "A insulina é o hormônio da abundância, promovendo o armazenamento de nutrientes.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **insulina** sinaliza para as células estocarem energia na forma de **glicogênio** e **gordura**.",
      "B": "[INCORRETA] Glucagon predomina no jejum.",
      "C": "[INCORRETA] Adrenalina atua no estresse/exercício.",
      "D": "[INCORRETA] Cortisol atua no estresse crônico/jejum longo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3282,
    "materia": "pmh",
    "aula_id": "pmh_a14",
    "tema": "pmh_a14",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Após cerca de 12 a 18 horas de jejum, as reservas de glicogênio hepático tornam-se escassas. Qual processo torna-se a principal fonte de glicemia para o corpo a partir deste ponto?),",
    "opcoes": [
      "A) Fermentação lática.",
      "B) Glicogenólise muscular.",
      "C) Absorção intestinal de fibras.",
      "D) Gliconeogênese hepática."
    ],
    "explicacao_geral": "A gliconeogênese assume o papel de manter o açúcar no sangue quando o estoque termina.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Aumenta o lactato, mas não gera glicose no sangue de forma isolada.",
      "B": "[INCORRETA] O músculo não libera glicose para o sangue (falta de G6Pase).",
      "C": "[INCORRETA] O paciente está em jejum.",
      "D": "[CORRETA] A **Gliconeogênese** é a via de salvação do **jejum** pós-glicogênio."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3283,
    "materia": "pmh",
    "aula_id": "pmh_a14",
    "tema": "pmh_a14",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um paciente em greve de fome há 5 dias apresenta hálito com odor de acetona. O que este sinal indica sobre a adaptação do seu metabolismo?),",
    "opcoes": [
      "A) Que ele está consumindo doces escondido.",
      "B) Que seu pâncreas parou de funcionar totalmente.",
      "C) Que ele entrou em cetose, utilizando gorduras para poupar proteínas musculares.",
      "D) Que ele está com uma infecção bacteriana grave na boca."
    ],
    "explicacao_geral": "A produção de corpos cetônicos é uma adaptação vital para alimentar o cérebro sem destruir todo o músculo do corpo via gliconeogênese.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O açúcar não causa cheiro de acetona.",
      "B": "[INCORRETA] O pâncreas continua funcionando (secreta glucagon).",
      "C": "[CORRETA] A **cetogênese** é a adaptação metabólica clássica do **jejum prolongado**.",
      "D": "[INCORRETA] O odor de acetona é sistêmico metabólico (volátil pulmonar)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3284,
    "materia": "pmh",
    "aula_id": "pmh_a14",
    "tema": "pmh_a14",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Qual a principal causa metabólica da morte por inanição (fome extrema)?),",
    "opcoes": [
      "A) Perda excessiva de componentes proteicos vitais (Músculo cardíaco e respiratório) para fornecer energia.",
      "B) Acúmulo de gordura no cérebro.",
      "C) Excesso de vitaminas hidrossolúveis.",
      "D) O corpo se torna tão eficiente que esquece como comer."
    ],
    "explicacao_geral": "Quando as gorduras terminam ou o catabolismo proteico atinge órgãos vitais, o sistema colapsa.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **proteólise** final destrói o **diafragma e o coração**, levando à morte.",
      "B": "[INCORRETA] No jejum extremo os estoques de gordura são os primeiros a acabar.",
      "C": "[INCORRETA] Vitaminas são depletadas.",
      "D": "[INCORRETA] Fantasia biológica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3285,
    "materia": "pmh",
    "aula_id": "pmh_a14",
    "tema": "pmh_a14",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um indivíduo obeso apresenta resistência insulínica e níveis elevados de ácidos graxos livres no sangue. Qual a principal causa molecular dessa resistência associada à obesidade?),",
    "opcoes": [
      "A) Falta de receptores de insulina no fígado.",
      "B) Excesso de atividade física.",
      "C) Deficiência de Vitamina B12.",
      "D) Inflamação crônica de baixo grau no tecido adiposo com liberação de citocinas (TNF-alfa/IL-6)."
    ],
    "explicacao_geral": "O tecido adiposo inflamado libera moléculas que interferem na sinalização pós-receptor da insulina.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Os receptores estão lá, mas a sinalização está bloqueada.",
      "B": "[INCORRETA] A atividade física MELHORA a sensibilidade à insulina.",
      "C": "[INCORRETA] Não é a causa primária da resistência insulínica.",
      "D": "[CORRETA] A **inflamação do tecido adiposo** é a base patogênica da resistência insulínica na obesidade."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3286,
    "materia": "pmh",
    "aula_id": "pmh_a14",
    "tema": "pmh_a14",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A 'Síndrome Metabólica' é um conjunto de fatores de risco cardiovascular. Qual das combinações abaixo define corretamente parte dos critérios diagnósticos?),",
    "opcoes": [
      "A) Miopia, Gastrite e Fadiga crônica.",
      "B) Circunferência abdominal aumentada, Hipertensão, HDL baixo e Triglicerídeos altos.",
      "C) Febre persistente e Perda de peso rápida.",
      "D) Apenas o valor da glicemia de jejum isolada."
    ],
    "explicacao_geral": "A síndrome reflete o estado de resistência insulínica sistêmica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Não são critérios metabólicos.",
      "B": "[CORRETA] Estes são os **pilares da Síndrome Metabólica**, associados a alto risco de infarto.",
      "C": "[INCORRETA] Sugere infecção ou câncer.",
      "D": "[INCORRETA] É necessária uma combinação de fatores."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3287,
    "materia": "pmh",
    "aula_id": "pmh_a14",
    "tema": "pmh_a14",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Durante um esforço físico explosivo (Ex: Levantamento de peso olímpico), qual o sistema energético mais recrutado nos primeiros 5 segundos?),",
    "opcoes": [
      "A) Oxidação de gordura lenta.",
      "B) Sistema ATP-Creatina Fosfato (Fosfagênios).",
      "C) Respiração aeróbia completa.",
      "D) Degradação de proteínas da pele."
    ],
    "explicacao_geral": "O sistema de fosfagênios fornece energia quase instantânea mas é exaurido muito rápido.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Lento demais para esforços explosivos.",
      "B": "[CORRETA] A **reserva de ATP/CP** é o motor de arranque dos exercícios de potência.",
      "C": "[INCORRETA] Requer tempo para ativação cardiovascular.",
      "D": "[INCORRETA] O corpo não usa pele como combustível imediato."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3288,
    "materia": "pmh",
    "aula_id": "pmh_a14",
    "tema": "pmh_a14",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "O hormônio leptina é produzido pelos adipócitos e sinaliza saciedade no cérebro. Por que muitos obesos continuam com fome mesmo tendo níveis altíssimos de leptina?),",
    "opcoes": [
      "A) Porque a leptina transborda na urina e se perde.",
      "B) Porque a leptina é destruída pelo suco gástrico.",
      "C) Devido à Resistência à Leptina, onde o cérebro deixa de responder ao sinal de 'estoque cheio'.",
      "D) Porque a leptina causa dor de cabeça, impedindo o sono mas não a fome."
    ],
    "explicacao_geral": "Semelhante à insulina, o excesso crônico de sinalização pode levar à falha na recepção do sinal celular.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Não é o mecanismo.",
      "B": "[INCORRETA] É um hormônio sanguíneo.",
      "C": "[CORRETA] A **resistência à leptina** contribui para o desequilíbrio do apetite na obesidade grave.",
      "D": "[INCORRETA] Sem correlação fisiológica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula pmh_a14 adicionadas.`);
