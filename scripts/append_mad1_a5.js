import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3873,
    "materia": "mad1",
    "aula_id": "mad1_a5",
    "tema": "mad1_a5",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O teste da 'Coagulase' é fundamental para diferenciar as espécies de Staphylococcus. Qual das espécies abaixo é Coagulase-positiva e considerada a mais patogênica?),",
    "opcoes": [
      "A) Staphylococcus epidermidis.",
      "B) Staphylococcus aureus.",
      "C) Staphylococcus saprophyticus.",
      "D) Streptococcus pyogenes."
    ],
    "explicacao_geral": "A coagulase converte fibrinogênio em fibrina, ajudando a bactéria a se proteger no tecido.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Coagulase-negativo; comum em infecções de próteses.",
      "B": "[CORRETA] O **Staphylococcus aureus** é o único **Coagulase-positivo** de importância clínica humana rotineira.",
      "C": "[INCORRETA] Coagulase-negativo; associado a ITUs em mulheres jovens.",
      "D": "[INCORRETA] Gênero diferente; Staphylococcus são Catalase-positivos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3874,
    "materia": "mad1",
    "aula_id": "mad1_a5",
    "tema": "mad1_a5",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual bactéria é a causa mais comum de faringite bacteriana e pode levar a complicações graves como a Febre Reumática?),",
    "opcoes": [
      "A) Staphylococcus aureus.",
      "B) Streptococcus agalactiae.",
      "C) Streptococcus pneumoniae.",
      "D) Streptococcus pyogenes (Grupo A)."
    ],
    "explicacao_geral": "O pyogenes é Beta-hemolítico e possui a Proteína M como principal fator de virulência.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Causa infecções de pele, mas raramente faringite isolada.",
      "B": "[INCORRETA] Grupo B; causa sepse neonatal.",
      "C": "[INCORRETA] Causa pneumonia, meningite e otite, não faringite purulenta comum.",
      "D": "[CORRETA] O **Streptococcus pyogenes** é o agente da **Faringite Estreptocócica**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3875,
    "materia": "mad1",
    "aula_id": "mad1_a5",
    "tema": "mad1_a5",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Um recém-nascido apresenta febre, letargia e sinais de sepse logo após o parto vaginal. Qual o agente bacteriano mais provavelmente envolvido, colonizador do trato genital materno?),",
    "opcoes": [
      "A) Streptococcus agalactiae (Grupo B).",
      "B) Staphylococcus aureus.",
      "C) Streptococcus pneumoniae.",
      "D) Escherichia coli."
    ],
    "explicacao_geral": "A triagem materna e profilaxia intraparto reduzem drasticamente essa infecção.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Streptococcus do Grupo B** é o principal causa de **Sepse Neonatal precoce**.",
      "B": "[INCORRETA] Pode causar, mas não é o colonizador vaginal clássico epidemiológico nestes termos.",
      "C": "[INCORRETA] Raro em recém-nascidos nesta cronologia.",
      "D": "[INCORRETA] Segunda causa mais comum, mas a pergunta foca na colonização vaginal clássica de 'cocos'."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3876,
    "materia": "mad1",
    "aula_id": "mad1_a5",
    "tema": "mad1_a5",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O 'Streptococcus pneumoniae' (pneumococo) é um diplococo Gram-positivo. Qual sua morfologia característica observada no microscópio?),",
    "opcoes": [
      "A) Cachos de uva.",
      "B) Longas cadeias flexíveis.",
      "C) Diplococos lanceolados (em forma de ponta de lança).",
      "D) Bastonetes finos vermelhos."
    ],
    "explicacao_geral": "A presença de uma cápsula proeminente também é característica marcante (Teste de Quellung positivo).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Staphylococcus.",
      "B": "[INCORRETA] Estreptococos de outros grupos.",
      "C": "[CORRETA] O **Pneumococo** apresenta-se como **Diplococos Lanceolados**.",
      "D": "[INCORRETA] Bacilos ácido-álcool resistentes (BAAR)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3877,
    "materia": "mad1",
    "aula_id": "mad1_a5",
    "tema": "mad1_a5",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A 'Síndrome do Choque Tóxico' causada por S. aureus está associada à produção de qual superantígeno?),",
    "opcoes": [
      "A) Enterotoxina térmica.",
      "B) TSST-1 (Toxic Shock Syndrome Toxin-1).",
      "C) Estreptoquinase.",
      "D) Coagulase livre."
    ],
    "explicacao_geral": "Os superantígenos ativam massivamente os linfócitos T, causando uma 'tempestade de citocinas'.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Causa intoxicação alimentar (vômito rápido).",
      "B": "[CORRETA] A **TSST-1** é o mediador do **Choque Tóxico Estafilocócico**.",
      "C": "[INCORRETA] Enzima fibrinolítica do Streptococcus.",
      "D": "[INCORRETA] Fator de proteção local/invasão, não superantígeno sistêmico."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3878,
    "materia": "mad1",
    "aula_id": "mad1_a5",
    "tema": "mad1_a5",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente desenvolve uma infecção em uma prótese de joelho colocada há 3 meses. O laboratório isola um Staphylococcus Catalase-positivo e Coagulase-negativo. Qual o agente mais provável?),",
    "opcoes": [
      "A) Streptococcus mutans.",
      "B) Staphylococcus aureus.",
      "C) Clostridium difficile.",
      "D) Staphylococcus epidermidis."
    ],
    "explicacao_geral": "S. epidermidis produz biofilmes (polissacarídeo extracelular) que facilitam a adesão a materiais sintéticos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Associado a cáries dentárias.",
      "B": "[INCORRETA] Seria Coagulase-positivo.",
      "C": "[INCORRETA] Bacilo Gram-positivo anaeróbio (intestino).",
      "D": "[CORRETA] O **S. epidermidis** é o principal agente de infecções em **Biofilmes de Próteses**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3879,
    "materia": "mad1",
    "aula_id": "mad1_a5",
    "tema": "mad1_a5",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A Glomerulonefrite Pós-Estreptocócica (GNPE) é uma complicação 'não supurativa'. Qual o mecanismo fisiopatológico dessa doença?),",
    "opcoes": [
      "A) Deposição de imunocomplexos (antígeno-anticorpo) nos glomérulos renais após uma infecção de faringe ou pele por cepas nefritogênicas.",
      "B) Invasão direta da bactéria no rim.",
      "C) Efeito tóxico direto da penicilina nos néfrons.",
      "D) Resposta alérgica ao glúten."
    ],
    "explicacao_geral": "Manifesta-se com hematúria, edema e hipertensão semanas após a infecção inicial.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **GNPE** é uma doença por **Hipersensibilidade Tipo III (Imunocomplexos)**.",
      "B": "[INCORRETA] Isso seria uma pielonefrite.",
      "C": "[INCORRETA] Antibiótico trata a infecção, não causa a GNPE.",
      "D": "[INCORRETA] Sem relação biológica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3880,
    "materia": "mad1",
    "aula_id": "mad1_a5",
    "tema": "mad1_a5",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual a principal base laboratorial para diferenciar Streptococcus de Staphylococcus?),",
    "opcoes": [
      "A) Coloração de Gram (um é azul, outro vermelho).",
      "B) Morfologia (um é coco, outro é bacilo).",
      "C) Teste da Catalase (Staphylococcus são +, Streptococcus são -).",
      "D) Somente pelo quadro clínico."
    ],
    "explicacao_geral": "A catalase quebra o peróxido de hidrogênio (H2O2) em água e oxigênio (borbulhamento).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ambos são Gram-positivos (roxos).",
      "B": "[INCORRETA] Ambos são cocos.",
      "C": "[CORRETA] O **Teste da Catalase** é o divisor de águas entre **Staphylo e Strepto**.",
      "D": "[INCORRETA] Testes laboratoriais são confirmatórios e essenciais."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad1_a5 adicionadas.`);
