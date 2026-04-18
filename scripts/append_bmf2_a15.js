import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3713,
    "materia": "bmf2",
    "aula_id": "bmf2_a15",
    "tema": "bmf2_a15",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A maior parte da reabsorção de água, glicose e aminoácidos (cerca de 65-70%) ocorre em qual segmento do néfron?),",
    "opcoes": [
      "A) Alça de Henle.",
      "B) Túbulo Contorcido Proximal (TCP).",
      "C) Ducto Coletor.",
      "D) Bexiga urinária."
    ],
    "explicacao_geral": "O TCP possui um metabolismo altíssimo e borda em escova para esta função massiva.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Focada em gradiente osmótico medular.",
      "B": "[CORRETA] O **TCP** é o local de **reabsorção obrigatória** da maioria dos solutos.",
      "C": "[INCORRETA] Ajuste final e facultativo sob controle hormonal.",
      "D": "[INCORRETA] A bexiga apenas armazena a urina pronta."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3714,
    "materia": "bmf2",
    "aula_id": "bmf2_a15",
    "tema": "bmf2_a15",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "A reabsorção de glicose no rim depende de transportadores específicos (SGLT). Qual íon é transportado junto com a glicose (simporte) para fornecer a energia necessária?),",
    "opcoes": [
      "A) Potássio (K+).",
      "B) Cálcio (Ca++).",
      "C) Ferro (Fe++).",
      "D) Sódio (Na+)."
    ],
    "explicacao_geral": "O gradiente de sódio gerado pela bomba Na+/K+ ATPase na membrana basolateral impulsiona o sódio para dentro da célula, trazendo a glicose junto.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Geralmente é secretado em troca de sódio no distal.",
      "B": "[INCORRETA] Reabsorção via canais específicos e transporte transcelular complexo.",
      "C": "[INCORRETA] Metabolismo de ferro não utiliza simporte tubular renal para glicose.",
      "D": "[CORRETA] O **Sódio** fornece a energia do **transporte ativo secundário** da glicose."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3715,
    "materia": "bmf2",
    "aula_id": "bmf2_a15",
    "tema": "bmf2_a15",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O 'Transporte Máximo' (Tm) de glicose é o limite de reabsorção dos túbulos. O que ocorre quando a glicemia excede este limiar (cerca de 180-200 mg/dL)?),",
    "opcoes": [
      "A) Aparecimento de glicose na urina (Glicosúria) e consequente aumento do volume urinário (Poliúria por diurese osmótica).",
      "B) O rim produz mais glicose para o corpo.",
      "C) A glicose é transformada em gordura no néfron.",
      "D) O paciente para de urinar."
    ],
    "explicacao_geral": "A glicose não reabsorvida 'puxa' água por osmose para dentro do túbulo.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Glicosúria** é um sinal clássico de **Diabetes Melito** descompensado.",
      "B": "[INCORRETA] O rim pode fazer gliconeogênese, mas não em resposta ao excesso filtrado.",
      "C": "[INCORRETA] Sem fundamento metabólico tubular.",
      "D": "[INCORRETA] O volume urinário aumenta significativamente."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3716,
    "materia": "bmf2",
    "aula_id": "bmf2_a15",
    "tema": "bmf2_a15",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual a principal função do 'Segmento Espesso da Alça de Henle' no transporte de eletrólitos?),",
    "opcoes": [
      "A) Reabsorver água livre.",
      "B) Secretar glicose.",
      "C) Reabsorção ativa de Na+, K+ e Cl- (via transportador NKCC2), contribuindo para a hiperosmolaridade medular.",
      "D) Filtrar proteínas."
    ],
    "explicacao_geral": "Este segmento é impermeável à água, sendo chamado de 'segmento diluidor' do fluido tubular.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O segmento descendente é permeável; o espesso é impermeável.",
      "B": "[INCORRETA] Glicose é reabsorvida no proximal.",
      "C": "[CORRETA] O **Transportador NKCC2** é o alvo dos diuréticos de alça (Ex: Furosemida).",
      "D": "[INCORRETA] Filtração ocorre apenas no glomérulo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3717,
    "materia": "bmf2",
    "aula_id": "bmf2_a15",
    "tema": "bmf2_a15",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A 'Aldosterona' age principalmente nas Células Principais do túbulo distal e ducto coletor. Como ela regula o potássio?),",
    "opcoes": [
      "A) Reabsorvendo potássio do sangue.",
      "B) Estimulando a Secreção de Potássio (K+) para o túbulo em troca da reabsorção de Sódio (Na+).",
      "C) Transformando potássio em cálcio.",
      "D) Impedindo o potássio de sair na urina."
    ],
    "explicacao_geral": "O excesso de aldosterona pode levar à hipocalemia (baixo potássio no sangue).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Aldosterona excreta potássio.",
      "B": "[CORRETA] Através da via da **Aldosterona**, o corpo livra-se do excesso de **Potássio**.",
      "C": "[INCORRETA] Impossível.",
      "D": "[INCORRETA] O efeito é a eliminação urinária do íon."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3718,
    "materia": "bmf2",
    "aula_id": "bmf2_a15",
    "tema": "bmf2_a15",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual organela é extremamente abundante nas células do túbulo contorcido proximal para sustentar o transporte ativo?),",
    "opcoes": [
      "A) Lisossomos.",
      "B) Ribossomos livres.",
      "C) Centríolos.",
      "D) Mitocôndrias."
    ],
    "explicacao_geral": "A reabsorção ativa consome massivas quantidades de ATP.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Papel degradativo secundário aqui.",
      "B": "[INCORRETA] Síntese proteica ocorre, mas não define a especialização tubular primária.",
      "C": "[INCORRETA] Divisão celular.",
      "D": "[CORRETA] As **Mitocôndrias** fornecem o **ATP** para o transporte de sódio."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3719,
    "materia": "bmf2",
    "aula_id": "bmf2_a15",
    "tema": "bmf2_a15",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "O hormônio 'PTH' (Paratormônio) atua no túbulo renal para regular o Cálcio e o Fosfato. Qual o seu efeito?),",
    "opcoes": [
      "A) Aumentar a reabsorção de Cálcio e aumentar a excreção (secreção) de Fosfato (efeito fosfatúrico).",
      "B) Retener fosfato e perder cálcio.",
      "C) Perder ambos na urina.",
      "D) Transformar fosfato em urina."
    ],
    "explicacao_geral": "Isso evita a precipitação de fosfato de cálcio no sangue enquanto eleva a calcemia.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **PTH** é o guardião do **Cálcio** no rim.",
      "B": "[INCORRETA] Justificativa oposta ao efeito biológico.",
      "C": "[INCORRETA] O foco é poupar cálcio.",
      "D": "[INCORRETA] Irrelevante."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3720,
    "materia": "bmf2",
    "aula_id": "bmf2_a15",
    "tema": "bmf2_a15",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A 'Reabsorção de Bicarbonato' (HCO3-) no túbulo proximal é crucial para o equilíbrio ácido-básico. Como ela ocorre?),",
    "opcoes": [
      "A) Por transporte direto simples.",
      "B) Por fagocitose de cristais de bicarbonato.",
      "C) Através da enzima Anidrase Carbônica, que converte o bicarbonato filtrado em CO2 e água para entrar na célula e depois ser reconstituído no sangue.",
      "D) O bicarbonato não é reabsorvido, ele é fabricado no rim do zero."
    ],
    "explicacao_geral": "80-90% do bicarbonato filtrado é recuperado no TCP.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A membrana é impermeável ao íon bicarbonato livre diretamente do lúmen.",
      "B": "[INCORRETA] Absurdo.",
      "C": "[CORRETA] A **Anidrase Carbônica** permite a reciclagem do **Bicarbonato**.",
      "D": "[INCORRETA] Ele deve ser recuperado da filtração glomerular massiva."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf2_a15 adicionadas.`);
