import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3449,
    "materia": "bcm1",
    "aula_id": "bcm1_a3",
    "tema": "bcm1_a3",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Os carboidratos são as principais fontes de energia rápida para a célula. Qual monossacarídeo é a forma de açúcar mais utilizada no metabolismo energético celular?),",
    "opcoes": [
      "A) Sacarose.",
      "B) Glicose.",
      "C) Amido.",
      "D) Celulose."
    ],
    "explicacao_geral": "A glicose é o combustível universal das células para a produção de ATP.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Dissacarídeo (Glicose + Frutose).",
      "B": "[CORRETA] A **Glicose** é o monossacarídeo central da glicólise.",
      "C": "[INCORRETA] Polissacarídeo de reserva vegetal.",
      "D": "[INCORRETA] Polissacarídeo estrutural vegetal."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3450,
    "materia": "bcm1",
    "aula_id": "bcm1_a3",
    "tema": "bcm1_a3",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "Os lipídios são moléculas orgânicas com diversas funções. Qual das alternativas abaixo descreve uma função EXCLUSIVA dos lipídios na fisiologia humana?),",
    "opcoes": [
      "A) Transporte de código genético.",
      "B) Catalisador de reações bioquímicas.",
      "C) Principal componente estrutural das membranas biológicas (fosfolipídios) e isolamento térmico.",
      "D) Contração das fibras musculares."
    ],
    "explicacao_geral": "A natureza anfipática dos fosfolipídios permite a formação da bicamada lipídica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Função dos ácidos nucleicos.",
      "B": "[INCORRETA] Função das enzimas (proteínas).",
      "C": "[CORRETA] Os **lipídios** formam a barreira das **membranas** e protegem contra o frio.",
      "D": "[INCORRETA] Função das proteínas actina e miosina."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3451,
    "materia": "bcm1",
    "aula_id": "bcm1_a3",
    "tema": "bcm1_a3",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Um paciente em jejum prolongado consome suas reservas de açúcar estocadas no fígado e nos músculos. Qual o nome deste polissacarídeo de reserva animal?),",
    "opcoes": [
      "A) Glicogênio.",
      "B) Amilose.",
      "C) Quitina.",
      "D) Frutose."
    ],
    "explicacao_geral": "O glicogênio é formado por múltiplas unidades de glicose unidas por ligações glicosídicas.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Glicogênio** é a reserva de **curto prazo** de glicose no corpo.",
      "B": "[INCORRETA] Componente do amido (vegetal).",
      "C": "[INCORRETA] Polissacarídeo estrutural de fungos e artrópodes.",
      "D": "[INCORRETA] Monossacarídeo simples encontrado em frutas."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3452,
    "materia": "bcm1",
    "aula_id": "bcm1_a3",
    "tema": "bcm1_a3",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Os esteroides são uma classe importante de lipídios derivedos do colesterol. Qual destas substâncias é um hormônio esteroide produzido a partir do colesterol?),",
    "opcoes": [
      "A) Insulina.",
      "B) Glucagon.",
      "C) Adrenalina.",
      "D) Testosterona."
    ],
    "explicacao_geral": "Hormônios sexuais e do córtex adrenal são lipossolúveis devido à sua origem lipídica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Hormônio proteico.",
      "B": "[INCORRETA] Hormônio proteico.",
      "C": "[INCORRETA] Catecolamina derivada de aminoácidos.",
      "D": "[CORRETA] A **Testosterona** é um exemplo clássico de **hormônio esteroide**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3453,
    "materia": "bcm1",
    "aula_id": "bcm1_a3",
    "tema": "bcm1_a3",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A 'Gordura Trans' é amplamente evitada na dieta devido ao aumento do risco cardiovascular. Do ponto de vista químico-celular, o que caracteriza as gorduras insaturadas saudáveis?),",
    "opcoes": [
      "A) Possuem apenas ligações simples entre os carbonos, sendo sólidas à temperatura ambiente.",
      "B) Possuem uma ou mais ligações duplas (dobras) em sua cadeia de ácidos graxos, o que as torna líquidas (óleos) e mais fluidas na membrana.",
      "C) Não possuem carbonos.",
      "D) São feitas de plástico líquido."
    ],
    "explicacao_geral": "As dobras (cis) das insaturadas impedem o empacotamento denso das moléculas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Definição de gordura saturada (Ex: banha de porco).",
      "B": "[CORRETA] As **ligações duplas** conferem a **insaturação** e a fluidez biológica.",
      "C": "[INCORRETA] Lipídios são cadeias hidrocarbonadas.",
      "D": "[INCORRETA] Absurdo químico."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3454,
    "materia": "bcm1",
    "aula_id": "bcm1_a3",
    "tema": "bcm1_a3",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Uma criança apresenta intolerância à lactose. Do ponto de vista bioquímico, o que está ocorrendo no intestino dessa criança?),",
    "opcoes": [
      "A) Deficiência da enzima lactase, impedindo a quebra do dissacarídeo lactose em glicose e galactose.",
      "B) O açúcar do leite entra na célula e explode as mitocôndrias.",
      "C) Reação alérgica grave às proteínas do leite (caseína).",
      "D) O intestino parou de absorver água."
    ],
    "explicacao_geral": "A intolerância é um problema enzimático de digestão de carboidratos, não imunológico (alergia) de proteínas.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **intolerância** é a falha na quebra do **carboidrato (lactose)**.",
      "B": "[INCORRETA] Explicação fantasiosa.",
      "C": "[INCORRETA] Alergia à proteína (APLV) é um quadro clínico diferente da intolerância ao açúcar.",
      "D": "[INCORRETA] Consequência oscmótica (diarreia), não a causa primária."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3455,
    "materia": "bcm1",
    "aula_id": "bcm1_a3",
    "tema": "bcm1_a3",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Os fosfolipídios são moléculas anfipáticas. Qual a importância biológica dessa característica para a célula?),",
    "opcoes": [
      "A) Eles são venenosos para as bactérias.",
      "B) Eles permitem que a gordura se dissolva completamente no citoplasma.",
      "C) A extremidade hidrofílica (polar) fica em contato com a água e a cauda hidrofóbica (apolar) se isola no interior, permitindo a auto-organização da bicamada lipídica.",
      "D) Eles fazem com que a célula flutue no sangue."
    ],
    "explicacao_geral": "A anfipaticidade é a base da compartimentalização da vida em todas as células conhecidas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] São componentes essenciais de todas as membranas.",
      "B": "[INCORRETA] O citoplasma é aquoso e os lipídios tendem a se agrupar.",
      "C": "[CORRETA] O comportamento **anfipático** é o que cria a **bicamada membronosa**.",
      "D": "[INCORRETA] Não está relacionado à densidade para flutuação seletiva."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3456,
    "materia": "bcm1",
    "aula_id": "bcm1_a3",
    "tema": "bcm1_a3",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um exame de sangue mostra 'Triglicerídeos' elevados. Qual a principal função destas moléculas (Triacilgliceróis) no organismo?),",
    "opcoes": [
      "A) Formação de novas células cerebrais.",
      "B) Transporte de oxigênio.",
      "C) Controlo do pH gástrico.",
      "D) Armazenamento de energia a longo prazo no tecido adiposo."
    ],
    "explicacao_geral": "Os triglicerídeos são a forma mais eficiente de estocar energia densa em pouco espaço.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O cérebro usa preferencialmente glicose e gorduras estruturais.",
      "B": "[INCORRETA] Função da hemoglobina.",
      "C": "[INCORRETA] Sem correlação.",
      "D": "[CORRETA] **Triglicerídeos** são a nossa **reserva energética** principal."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bcm1_a3 adicionadas.`);
