import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3969,
    "materia": "mad1",
    "aula_id": "mad1_a17",
    "tema": "mad1_a17",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O sistema imune é organizado em órgãos linfoides primários e secundários. Qual a principal função dos órgãos linfoides PRIMÁRIOS (Medula Óssea e Timo)?),",
    "opcoes": [
      "A) Local de encontro entre antígeno e linfócito.",
      "B) Local de produção (hematopoese) e maturação dos linfócitos.",
      "C) Filtragem do sangue para remover bactérias.",
      "D) Digestão de gorduras."
    ],
    "explicacao_geral": "Os linfócitos B maturam na medula óssea e os linfócitos T maturam no timo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Função dos órgãos secundários (linfonodos, baço).",
      "B": "[CORRETA] Os **Órgãos Primários** são os locais de **Geração e Maturação** linfocitária.",
      "C": "[INCORRETA] Função do baço.",
      "D": "[INCORRETA] Função do sistema digestório."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3970,
    "materia": "mad1",
    "aula_id": "mad1_a17",
    "tema": "mad1_a17",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual célula do sistema imune inato é a primeira a chegar ao local da infecção em grande número, sendo a principal constituinte do pus?),",
    "opcoes": [
      "A) Linfócito B.",
      "B) Macrófago.",
      "C) Célula Dendrítica.",
      "D) Neutrófilo."
    ],
    "explicacao_geral": "Os neutrófilos são leucócitos polimorfonucleares com vida curta e alta capacidade fagocítica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Célula da imunidade adaptativa.",
      "B": "[INCORRETA] Chegam mais tarde e persistem por mais tempo no tecido.",
      "C": "[INCORRETA] Principal função é apresentação de antígenos, não fagocitose em massa para pus.",
      "D": "[CORRETA] Os **Neutrófilos** são as células de **primeira linha** na inflamação aguda."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3971,
    "materia": "mad1",
    "aula_id": "mad1_a17",
    "tema": "mad1_a17",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Os Linfócitos NK (Natural Killer) possuem uma função única na imunidade inata. Qual é ela?),",
    "opcoes": [
      "A) Destruir células infectadas por vírus ou células tumorais que apresentam baixa expressão de MHC classe I.",
      "B) Produzir anticorpos IgM.",
      "C) Apresentar antígenos para os linfócitos T CD4.",
      "D) Engolir bactérias grandes."
    ],
    "explicacao_geral": "Diferente dos linfócitos T, as NK não precisam de reconhecimento específico de antígeno via MHC.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] As **Natural Killer** realizam a **vigilância imunológica** celular.",
      "B": "[INCORRETA] Função dos plasmócitos (Linfócitos B).",
      "C": "[INCORRETA] Função das APCs (Dendríticas, Macrófagos, Células B).",
      "D": "[INCORRETA] Função de fagócitos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3972,
    "materia": "mad1",
    "aula_id": "mad1_a17",
    "tema": "mad1_a17",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual célula é considerada a 'ponte' entre a imunidade inata e a adaptativa, sendo a mais eficiente Célula Apresentadora de Antígenos (APC)?),",
    "opcoes": [
      "A) Basófilo.",
      "B) Hemácia.",
      "C) Célula Dendrítica.",
      "D) Eosinófilo."
    ],
    "explicacao_geral": "As dendríticas capturam antígenos nos tecidos e migram para os linfonodos para ativar linfócitos T virgens.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Envolvido em alergias.",
      "B": "[INCORRETA] Transporte de gases.",
      "C": "[CORRETA] A **Célula Dendrítica** é a principal **APC profissional**.",
      "D": "[INCORRETA] Defesa contra helmintos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3973,
    "materia": "mad1",
    "aula_id": "mad1_a17",
    "tema": "mad1_a17",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A esplenectomia (remoção do baço) aumenta o risco de infecções graves por qual tipo de microrganismo?),",
    "opcoes": [
      "A) Vírus pequenos.",
      "B) Bactérias encapsuladas (ex: Streptococcus pneumoniae, Neisseria meningitidis, Haemophilus influenzae).",
      "C) Fungos filamentares.",
      "D) Príons."
    ],
    "explicacao_geral": "O baço é o principal local de fagocitose de bactérias opsonizadas que circulam no sangue.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Imunidade antiviral depende mais de células NK e T.",
      "B": "[CORRETA] O **Baço** é vital para eliminar **Bactérias Encapsuladas** circulantes.",
      "C": "[INCORRETA] Imunidade celular/neutrófilos são mais críticos.",
      "D": "[INCORRETA] Sem relação imunológica de filtragem esplênica clássica."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3974,
    "materia": "mad1",
    "aula_id": "mad1_a17",
    "tema": "mad1_a17",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Os Mastócitos e Basófilos liberam grânulos de histamina em resposta a qual estímulo imunológico?),",
    "opcoes": [
      "A) Contato com oxigênio.",
      "B) Alta concentração de glicose.",
      "C) Presença de anticorpos IgG anti-bacterianos.",
      "D) Ligação de antígenos a anticorpos IgE fixados em sua superfície (desgranulação)."
    ],
    "explicacao_geral": "Este processo é central nas reações de hipersensibilidade tipo I (alergias e anafilaxia).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Irrelevante.",
      "B": "[INCORRETA] Metabólico.",
      "C": "[INCORRETA] IgG via Fc-gamma, mas a histamina é classicamente via IgE/Fc-epsilon.",
      "D": "[CORRETA] A **Desgranulação via IgE** é o mecanismo das **Reações Alérgicas**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3975,
    "materia": "mad1",
    "aula_id": "mad1_a17",
    "tema": "mad1_a17",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "O sistema MALT (Tecido Linfoide Associado à Mucosa), como as Placas de Peyer no intestino, é rico em qual classe de anticorpo?),",
    "opcoes": [
      "A) IgA Secretora.",
      "B) IgE circulante.",
      "C) IgD de membrana.",
      "D) IgM pentamérica sistêmica."
    ],
    "explicacao_geral": "A IgA é resistente à proteólise e protege as superfícies mucosas contra invasão.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **MALT** produz predominantemente **IgA** para proteção de mucosas.",
      "B": "[INCORRETA] Relacionada a alergias nas mucosas, mas não a principal de defesa constituinte estável.",
      "C": "[INCORRETA] Pouco abundante e de função reguladora inicial.",
      "D": "[INCORRETA] Primeira resposta, mas a IgA é a rainha das mucosas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3976,
    "materia": "mad1",
    "aula_id": "mad1_a17",
    "tema": "mad1_a17",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um paciente com verminose (helmintíase) costuma apresentar no hemograma um aumento de qual linhagem celular?),",
    "opcoes": [
      "A) Linfocitose.",
      "B) Monocitose.",
      "C) Eosinofilia.",
      "D) Basofilia."
    ],
    "explicacao_geral": "Os eosinófilos liberam proteínas básicas potentes para destruir a cutícula dos vermes.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Comum em infecções virais.",
      "B": "[INCORRETA] Comum em infecções crônicas.",
      "C": "[CORRETA] A **Eosinofilia** é o sinal clássico de **Parasitoses por Helmintos**.",
      "D": "[INCORRETA] Raro de forma isolada clinicamente importante nestes termos."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad1_a17 adicionadas.`);
