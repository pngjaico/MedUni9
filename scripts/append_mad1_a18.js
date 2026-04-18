import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3977,
    "materia": "mad1",
    "aula_id": "mad1_a18",
    "tema": "mad1_a18",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O sistema imune inato reconhece padrões moleculares comuns em grupos de patógenos. Como são chamados esses padrões e os seus respectivos receptores celulares?),",
    "opcoes": [
      "A) DNA e RNA.",
      "B) PAMPs (Padrões Moleculares Associados a Patógenos) e PRRs (Receptores de Reconhecimento de Padrões).",
      "C) Antígenos e Anticorpos.",
      "D) Hormônios e Receptores Nucleares."
    ],
    "explicacao_geral": "Os receptores do tipo Toll (TLRs) são exemplos clássicos de PRRs.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] São moléculas, mas não o termo da interação receptor-padrão.",
      "B": "[CORRETA] O binômio **PAMP/PRR** é a base do **Reconhecimento Inato**.",
      "C": "[INCORRETA] Termos da imunidade adaptativa.",
      "D": "[INCORRETA] Termos do sistema endócrino."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3978,
    "materia": "mad1",
    "aula_id": "mad1_a18",
    "tema": "mad1_a18",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "A 'Inflamação Aguda' apresenta cinco sinais cardinais. Quais são eles?),",
    "opcoes": [
      "A) Tosse, espirro, fome, sede e sono.",
      "B) Febre, calafrio, suor, tremor e palidez.",
      "C) Mancha, verruga, crosta, pápula e úlcera.",
      "D) Calor, Rubor (vermelhidão), Tumor (edema), Dor e Perda de Função."
    ],
    "explicacao_geral": "Esses sinais resultam das alterações vasculares e celulares no local da agressão.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Absurdo.",
      "B": "[INCORRETA] Sinais sistêmicos.",
      "C": "[INCORRETA] Lesões elementares da dermatologia.",
      "D": "[CORRETA] Os **Cinco Sinais Cardinais** definem a **Inflamação**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3979,
    "materia": "mad1",
    "aula_id": "mad1_a18",
    "tema": "mad1_a18",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Qual o papel central do 'Sistema Complemento' na resposta imunitária?),",
    "opcoes": [
      "A) Formar o Complexo de Ataque à Membrana (MAC) para lisar patógenos, opsonizar microrganismos e promover a inflamação (quimiotaxia).",
      "B) Produzir glóbulos vermelhos.",
      "C) Ensinar os linfócitos a ler DNA.",
      "D) Transportar vitaminas para os macrófagos."
    ],
    "explicacao_geral": "O sistema consiste em uma cascata de proteínas plasmáticas ativadas sequencialmente.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Sistema Complemento** atua em **Lise, Opsonização e Inflamação**.",
      "B": "[INCORRETA] Função da medula óssea.",
      "C": "[INCORRETA] Absurdo.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3980,
    "materia": "mad1",
    "aula_id": "mad1_a18",
    "tema": "mad1_a18",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A 'Opsonização' é um processo que facilita a fagocitose. Quais moléculas atuam como as principais opsoninas do corpo?),",
    "opcoes": [
      "A) Histamina e Heparina.",
      "B) Colesterol e Glicose.",
      "C) Anticorpos (IgG) e fragmentos do Complemento (C3b).",
      "D) Insulina e Glucagon."
    ],
    "explicacao_geral": "As opsoninas 'temperam' o patógeno, tornando-o mais atrativo e fácil de ser agarrado pelo fagócito.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Mediadores da inflamação/coagulação.",
      "B": "[INCORRETA] Metabólitos circulantes.",
      "C": "[CORRETA] **Anticorpos e C3b** são as **Opsoninas** fundamentais.",
      "D": "[INCORRETA] Hormônios metabólicos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3981,
    "materia": "mad1",
    "aula_id": "mad1_a18",
    "tema": "mad1_a18",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Qual citocina é considerada o principal pirógeno endógeno, responsável por induzir a FEBRE no hipotálamo durante a inflamação sistêmica?),",
    "opcoes": [
      "A) IL-10.",
      "B) IL-1 (Interleucina-1) e também o TNF-alfa.",
      "C) Eritropoetina.",
      "D) Adrenalina."
    ],
    "explicacao_geral": "A febre auxilia a inibir o crescimento de alguns patógenos e acelera o metabolismo imune.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Citocina anti-inflamatória.",
      "B": "[CORRETA] A **Interleucina-1 (IL-1)** é um potente **Pirógeno**.",
      "C": "[INCORRETA] Estimula produção de hemácias.",
      "D": "[INCORRETA] Neurotransmissor/hormônio de estresse, não pirógeno primário direto."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3982,
    "materia": "mad1",
    "aula_id": "mad1_a18",
    "tema": "mad1_a18",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O processo de saída dos leucócitos do sangue para o tecido inflamado, atravessando o endotélio, é chamado de:),",
    "opcoes": [
      "A) Hemólise.",
      "B) Osmose.",
      "C) Fagocitose.",
      "D) Diapedese (ou Transmigração)."
    ],
    "explicacao_geral": "Envolve etapas de rolamento, adesão firme e passagem entre as células endoteliais.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Destruição de hemácias.",
      "B": "[INCORRETA] Movimento de solvente.",
      "C": "[INCORRETA] Englobamento de partículas.",
      "D": "[CORRETA] A **Diapedese** é a **migração leucocitária** para o tecido."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3983,
    "materia": "mad1",
    "aula_id": "mad1_a18",
    "tema": "mad1_a18",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A 'Via Alternativa' do Sistema Complemento é ativada por qual estímulo?),",
    "opcoes": [
      "A) Presença direta de superfícies microbianas (como LPS ou paredes bacterianas) sem necessidade de anticorpos.",
      "B) Ligação do anticorpo IgM ao antígeno.",
      "C) Hormônios do crescimento.",
      "D) Luz solar."
    ],
    "explicacao_geral": "É uma via de ativação constante e espontânea ('tick-over') que é estabilizada em superfícies estranhas.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Via Alternativa** é independente de **anticorpos**.",
      "B": "[INCORRETA] Estímulo da Via Clássica.",
      "C": "[INCORRETA] Absurdo.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3984,
    "materia": "mad1",
    "aula_id": "mad1_a18",
    "tema": "mad1_a18",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Macrófagos que residem nos tecidos recebem nomes específicos de acordo com a localização. Como são chamados os macrófagos do FÍGADO e do SISTEMA NERVOSO, respectivamente?),",
    "opcoes": [
      "A) Células Beta e Neurônios.",
      "B) Células de Kupffer e Microglia.",
      "C) Osteoclastos e Condrócitos.",
      "D) Hepatócitos e Astrócitos."
    ],
    "explicacao_geral": "Eles formam o sistema fagocítico mononuclear.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pâncreas e parênquima nervoso.",
      "B": "[CORRETA] **Kupffer e Microglia** são os **Macrófagos Residentes** desses órgãos.",
      "C": "[INCORRETA] Osso e cartilagem.",
      "D": "[INCORRETA] Células funcionais e de suporte, não fagócitos profissionais."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad1_a18 adicionadas.`);
