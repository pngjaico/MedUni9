const fs = require('fs');
const path = require('path');

const ANTIGAS_PATH = path.join(__dirname, '..', 'data', 'questoes_antigas.json');
const data = JSON.parse(fs.readFileSync(ANTIGAS_PATH, 'utf-8'));

data.questoes = data.questoes.filter(q => q.id < 47);

const novasQuestoes = [
  {
    "id": 47, "materia": "pmh", "categoria": "antiga",
    "enunciado": "Diferentemente do metabolismo anaeróbio, o metabolismo aeróbio é capaz de aproveitar a energia das oxidações dos substratos, garantindo uma maior capacidade de síntese de ATP por molécula de Glicose oxidada. De que maneira isso é realizado?",
    "opcoes": [
      "A) A energia da oxidação das coenzimas (NADH e FADH2) é convertida em um gradiente de íons H+, o qual será utilizado pela ATP-Sintase para a fosforilação de ADP em ATP.",
      "B) A energia da oxidação das coenzimas (NADH e FADH2) é convertida em um gradiente de íons H+, o qual será utilizado pela bomba de Na+/K+ para a fosforilação de ADP em ATP.",
      "C) A energia da oxidação das coenzimas (NADH, NADPH e FADH2) é convertida em um gradiente de íons H+, o qual será utilizado pela ATP-Sintase para a fosforilação de ADP em ATP.",
      "D) As mitocôndrias possuem enzimas capazes de converter glicose 6-fosfato em Ribose 5-Fosfato, garantindo assim uma maior produção de ATP."
    ],
    "correta": 0, "explicacao": "Na fosforilação oxidativa...", "tema": "pmh_a4", "dificuldade": 2, "fonte": "Atividade - Metabolismo Aeróbico", "ano": 2024, "semestre": "1/2024", "modulo": 1, "caso_clinico": false
  },
  {
    "id": 48, "materia": "pmh", "categoria": "antiga",
    "enunciado": "Por que a presença de O2 diminui a taxa de consumo de glicose?",
    "opcoes": [
      "A) Em aerobiose, haverá uma MENOR [ATP]/[ADP], resultando em uma regulação alostérica POSITIVA sobre a enzima PFK-1.",
      "B) Em aerobiose, haverá uma MAIOR [ATP]/[ADP], resultando em uma regulação alostérica POSITIVA sobre a enzima PFK-1.",
      "C) Em aerobiose, haverá uma MAIOR [ATP]/[ADP], resultando em uma regulação alostérica NEGATIVA sobre a enzima PFK-1.",
      "D) Em aerobiose, haverá uma MENOR [ATP]/[ADP], resultando em uma regulação alostérica NEGATIVA sobre a enzima PFK-1."
    ],
    "correta": 2, "explicacao": "O O2 gera fosforilação oxidativa.", "tema": "pmh_a3", "dificuldade": 3, "fonte": "Atividade - Metabolismo", "ano": 2024, "semestre": "1/2024", "modulo": 1, "caso_clinico": false
  },
  {
    "id": 49, "materia": "pmh", "categoria": "antiga",
    "enunciado": "Quando a [NADH] > [NAD+], é correto afirmar que a velocidade do ciclo do ácido cítrico estará:",
    "opcoes": ["A) INALTERADA.", "B) REDUZIDA.", "C) AUMENTADA.", "D) INVERTIDA."],
    "correta": 1, "explicacao": "O NADH é um inibidor forte das enzimas...", "tema": "pmh_a4", "dificuldade": 2, "fonte": "Atividade - Metabolismo", "ano": 2024, "semestre": "1/2024", "modulo": 1, "caso_clinico": false
  },
  {
    "id": 50, "materia": "pmh", "categoria": "antiga",
    "enunciado": "Qual o destino dos carbonos da glicose no ciclo de Krebs?",
    "opcoes": ["A) Acetil-CoA", "B) ATP", "C) CO2", "D) Piruvato"],
    "correta": 2, "explicacao": "Perdem-se na forma de dióxido de carbono.", "tema": "pmh_a4", "dificuldade": 1, "fonte": "Atividade", "ano": 2024, "semestre": "1/2024", "modulo": 1, "caso_clinico": false
  },
  {
    "id": 51, "materia": "pmh", "categoria": "antiga",
    "enunciado": "A oxidação completa de glicose (até a formação de CO2) ocorre em todos os tecidos?",
    "opcoes": ["A) Sim", "B) Não"],
    "correta": 1, "explicacao": "Hemácias não possuem mitocôndrias.", "tema": "pmh_a3", "dificuldade": 1, "fonte": "Atividade", "ano": 2024, "semestre": "1/2024", "modulo": 1, "caso_clinico": false
  },
  {
    "id": 52, "materia": "pmh", "categoria": "antiga",
    "enunciado": "A falta de **Tiamina** leva a interrupção da atividade das enzimas Piruvato Desidrogenase e Alfacetoglutarato Desidrogenase, ambas essenciais para a continuação da oxidação do piruvato. Sendo assim, a falta de Tiamina pode levar à:",
    "opcoes": [
      "A) Hiperglicemia por superativação da neoglicogênese (por excesso de piruvato)",
      "B) Hipoglicemia por interrupção da neoglicogênese (por falta de lactato)",
      "C) Dislipidemia por excesso de acetil-CoA (que é um precursor dos lipídeos)",
      "D) Acidose láctica por acúmulo de piruvato (que é então convertido em lactato)."
    ],
    "correta": 3, "explicacao": "Acúmulo de piruvato desviado para ácido lático.", "tema": "pmh_a4", "dificuldade": 2, "fonte": "Atividade", "ano": 2024, "semestre": "1/2024", "modulo": 1, "caso_clinico": false
  },
  {
    "id": 53, "materia": "pmh", "categoria": "antiga",
    "enunciado": "Reações que servem de 'preenchimento' do ciclo de Krebs recebem o nome de:",
    "opcoes": ["A) michaelianas", "B) anapleróticas", "C) alostéricas", "D) enzimáticas"],
    "correta": 1, "explicacao": "Reações anapleróticas.", "tema": "pmh_a4", "dificuldade": 1, "fonte": "Atividade", "ano": 2024, "semestre": "1/2024", "modulo": 1, "caso_clinico": false
  },
  {
    "id": 54, "materia": "pmh", "categoria": "antiga",
    "enunciado": "A formação de Acetil-CoA a partir de carboidratos:",
    "opcoes": [
      "A) ocorre nas hemácias a partir do piruvato que é o produto final da via glicolítica",
      "B) ocorre no núcleo das células e tem como molécula original o lactato",
      "C) na mitocôndria a partir da descarboxilação da molécula de piruvato, quando oriunda da glicose",
      "D) no citossol a partir de lactato oriundo da glicólise"
    ],
    "correta": 2, "explicacao": "A PDH atua na matriz mitocondrial.", "tema": "pmh_a4", "dificuldade": 1, "fonte": "Atividade", "ano": 2024, "semestre": "1/2024", "modulo": 1, "caso_clinico": false
  },
  {
    "id": 55, "materia": "pmh", "categoria": "antiga",
    "enunciado": "Qual é o saldo energético da oxidação completa da glicose?",
    "opcoes": ["A) 4 ATPs", "B) 2 ATPs", "C) 64 ATPs", "D) Aproximadamente 32 ATPs."],
    "correta": 3, "explicacao": "A oxidação aeróbica completa rende aproximadamente 30 a 32 ATPs.", "tema": "pmh_a4", "dificuldade": 1, "fonte": "Atividade", "ano": 2024, "semestre": "1/2024", "modulo": 1, "caso_clinico": false
  },
  {
    "id": 56, "materia": "pmh", "categoria": "antiga",
    "enunciado": "Por que o excesso de lactato somente será observado em anaerobiose?",
    "opcoes": ["A) Pois, em anaerobiose, o Lactato é produzido a partir do piruvato, permitindo que NADH seja oxidado a NAD+ e a glicólise continue.", "B) Pois o lactato gera NADH.", "C) Pois a necrose celular vaza lactato.", "D) Porque a apoptose é obrigatória em hipóxia."],
    "correta": 0, "explicacao": "A LDG converte piruvato em lactato para reoxigenar NAD+.", "tema": "pmh_a3", "dificuldade": 2, "fonte": "Atividade", "ano": 2024, "semestre": "1/2024", "modulo": 1, "caso_clinico": false
  },
  {
    "id": 57, "materia": "pmh", "categoria": "antiga",
    "enunciado": "Uma manifestação comum da deficiência da enzima Piruvato Desidrogenase (PDH) é a acidemia láctica. Você seria capaz de explicar?",
    "opcoes": ["A) O defeito inibe a insulina", "B) O Krebs para totalmente", "C) Indivíduos com deficiência de PDH acumulam piruvato que é então desviado para ácido lático.", "D) Síntese de lipídios é bloqueada."],
    "correta": 2, "explicacao": "Acúmulo de lactato origina acidose láctica.", "tema": "pmh_a4", "dificuldade": 2, "fonte": "Atividade", "ano": 2024, "semestre": "1/2024", "modulo": 1, "caso_clinico": false
  },
  {
    "id": 58, "materia": "pmh", "categoria": "antiga",
    "enunciado": "Durante a cadeia de transporte de elétrons, a energia das oxidações é utilizada para criar um gradiente de prótons (H+). O que é a força próton-motriz resultante?",
    "opcoes": ["A) É a força resultante do gradiente eletroquímico que promove a síntese de ATP pela enzima ATP sintase no retorno dos prótons para a matriz mitocondrial.", "B) Bombeamento pelo ciclo de Krebs", "C) É a força hidrostática da água", "D) Complexo citocromo giratório"],
    "correta": 0, "explicacao": "Girando a ATP sintase para formar ATP.", "tema": "pmh_a4", "dificuldade": 1, "fonte": "Atividade", "ano": 2024, "semestre": "1/2024", "modulo": 1, "caso_clinico": false
  },
  {
    "id": 59, "materia": "pmh", "categoria": "antiga",
    "enunciado": "Qual é a função da Coenzima Q (ubiquinona) na cadeia respiratória?",
    "opcoes": ["A) Transportar elétrons dos complexos I e II para o complexo III.", "B) Catalisar a formação de ATP", "C) Captar radicais livres no citosol", "D) Transferir elétrons do complexo III para o IV"],
    "correta": 0, "explicacao": "A ubiquinona recolhe de I e II para o III.", "tema": "pmh_a4", "dificuldade": 1, "fonte": "Atividade", "ano": 2024, "semestre": "1/2024", "modulo": 1, "caso_clinico": false
  },
  {
    "id": 60, "materia": "pmh", "categoria": "antiga",
    "enunciado": "A adição de um determinado composto químico a uma suspensão de mitocôndrias em aerobiose resultará em lesão mitocondrial se esta suspensão for suplementada SOMENTE com Acetil-CoA... Dentre os compostos abaixo, qual resultaria em um efeito similar?",
    "opcoes": [
      "A) Antimicina A, um antibiótico tóxico que impede a oxidação da Coenzima Q pelo complexo III.",
      "B) Oligomicina, um interferente da fosforilação oxidativa que impede a síntese de ATP (inibe a ATP sintase).",
      "C) Rotenona, um interferente da cadeia de transporte de elétrons (inibindo o complexo 1) que impede a oxidação de NADH.",
      "D) Cianeto, um interferente da cadeia de transporte de elétrons que impede a transferência de elétrons ao oxigênio (inibindo o complexo 4)."
    ],
    "correta": 2, "explicacao": "Bloqueia subtratos dependentes apenas de NAD.", "tema": "pmh_a4", "dificuldade": 3, "fonte": "Atividade", "ano": 2024, "semestre": "1/2024", "modulo": 1, "caso_clinico": false
  }
];

data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(ANTIGAS_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log("Re-categorização (Transcrição Longa Fiel) realizada com sucesso.");
