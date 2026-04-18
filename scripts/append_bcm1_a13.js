import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3529,
    "materia": "bcm1",
    "aula_id": "bcm1_a13",
    "tema": "bcm1_a13",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "O Complexo de Golgi é o 'centro de triagem' da célula. Qual o caminho clássico de uma proteína desde sua síntese até a secreção?),",
    "opcoes": [
      "A) Retículo Endoplasmático Rugoso -> Vesícula de Transporte -> Face Cis do Golgi -> Face Trans do Golgi -> Vesícula de Secreção -> Membrana Plasmática.",
      "B) Mitocôndria -> Núcleo -> Citoplasma.",
      "C) Membrana Plasmática -> Golgi -> Núcleo.",
      "D) Lisossomo -> REL -> Meio Extracelular."
    ],
    "explicacao_geral": "O fluxo é polarizado, entrando pela face cis (próxima ao RE) e saindo pela trans (próxima à membrana).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Esta é a **via biossintética-secretora** clássica.",
      "B": "[INCORRETA] Rota inexistente.",
      "C": "[INCORRETA] Rota de endocitose/retrograda inversa.",
      "D": "[INCORRETA] Lisossomos são o destino final de degradação, não início de via secretora."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3530,
    "materia": "bcm1",
    "aula_id": "bcm1_a13",
    "tema": "bcm1_a13",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "Qual das funções abaixo NÃO é realizada pelo Complexo de Golgi?),",
    "opcoes": [
      "A) Modificação de cadeias de oligossacarídeos (Glicosilação tardia).",
      "B) Empacotamento de proteínas em vesículas.",
      "C) Tradução de RNA mensageiro em cadeias de aminoácidos.",
      "D) Síntese de polissacarídeos (como a pectina em plantas ou GAGs animais)."
    ],
    "explicacao_geral": "O Golgi processa e endereça as proteínas, mas não as fabrica a partir do RNA.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Função central do Golgi.",
      "B": "[INCORRETA] Função central do Golgi.",
      "C": "[CORRETA] A **tradução** ocorre nos **ribossomos** (RER ou citoplasma), não no Golgi.",
      "D": "[INCORRETA] O Golgi participa da biosíntese de carboidratos complexos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3531,
    "materia": "bcm1",
    "aula_id": "bcm1_a13",
    "tema": "bcm1_a13",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Para que uma proteína (enzima hidrolítica) seja enviada especificamente para o LISOSSOMO, ela deve receber um marcador químico no Golgi. Qual é esse marcador?),",
    "opcoes": [
      "A) Etiqueta de glicose.",
      "B) Rabo de poli-A.",
      "C) Adrenalina.",
      "D) Manose-6-Fosfato (M6P)."
    ],
    "explicacao_geral": "O marcador M6P é reconhecido por receptores na face trans do Golgi que brotam vesículas destinadas ao endossomo/lisossomo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Glicose simples é energia ou parte de estruturas maiores.",
      "B": "[INCORRETA] Estabilizador de RNA mensageiro.",
      "C": "[INCORRETA] Hormônio circulante.",
      "D": "[CORRETA] A **Manose-6-Fosfato** é o 'CEP' do **Lisossomo**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3532,
    "materia": "bcm1",
    "aula_id": "bcm1_a13",
    "tema": "bcm1_a13",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "As vesículas de transporte são revestidas por proteínas que ajudam no seu brotamento. Qual proteína reveste as vesículas que levam proteínas do Retículo Endoplasmático para o Golgi (Transporte Anterógrado)?),",
    "opcoes": [
      "A) COP I.",
      "B) COP II.",
      "C) Clatrina.",
      "D) Actina."
    ],
    "explicacao_geral": "Os revestimentos selecionam a carga e definem a direção da vesícula.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Reveste transporte retrógrado (Golgi -> RE).",
      "B": "[CORRETA] **COP II** faz o caminho **RE para o Golgi**.",
      "C": "[INCORRETA] Reveste exocitose e endocitose mediada por receptores.",
      "D": "[INCORRETA] Proteina do citoesqueleto que ajuda no transporte, mas não é o revestimento vesiculoso de brotamento proteico do RE."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3533,
    "materia": "bcm1",
    "aula_id": "bcm1_a13",
    "tema": "bcm1_a13",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "O 'Tráfego Retrógrado' utiliza vesículas revestidas por COP I. Qual a sua importância biológica para a célula?),",
    "opcoes": [
      "A) Recuperar proteínas residentes do RE que 'escaparam' para o Golgi e reciclar porções de membrana de volta ao RE.",
      "B) Levar comida para fora da célula.",
      "C) Digerir o núcleo durante a morte celular.",
      "D) Não tem importância, é um erro celular."
    ],
    "explicacao_geral": "A reciclagem de membranas e proteínas é essencial para a homeostase do sistema de endomembranas.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Transporte Retrógrado (COP I)** mantém as organelas com seus componentes corretos.",
      "B": "[INCORRETA] Exocitose faz isso.",
      "C": "[INCORRETA] Funçao de nucleases/caspases em outros compartimentos.",
      "D": "[INCORRETA] É um processo regulado e dinâmico."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3534,
    "materia": "bcm1",
    "aula_id": "bcm1_a13",
    "tema": "bcm1_a13",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A secreção de neurotransmissores nos neurônios só ocorre após um estímulo (como a entrada de cálcio). Como chamamos este tipo de exocitose?),",
    "opcoes": [
      "A) Secreção Constitutiva (Contínua).",
      "B) Secreção por difusão simples.",
      "C) Secreção Regulada.",
      "D) Secreção por transpiração."
    ],
    "explicacao_geral": "Diferente da constitutiva (que libera proteínas de membrana o tempo todo), a regulada exige sinalização.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ocorre sem necessidade de estímulo externo imediato.",
      "B": "[INCORRETA] Vesículas não realizam difusão simples; fundem-se à membrana.",
      "C": "[CORRETA] A **Secreção Regulada** estoca vesículas e as libera sob sinal (Ex: Cálcio).",
      "D": "[INCORRETA] Termo sem fundamento celular."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3535,
    "materia": "bcm1",
    "aula_id": "bcm1_a13",
    "tema": "bcm1_a13",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A 'Doença de Células I' (I-cell disease) é uma patologia rara onde as enzimas hidrolíticas do lisossomo são secretadas para fora da célula em vez de serem enviadas ao lisossomo. Qual o defeito molecular no Golgi desses pacientes?),",
    "opcoes": [
      "A) O Golgi explodiu.",
      "B) Falha na enzima que adiciona o marcador Manose-6-Fosfato, fazendo com que o Golgi não reconheça as enzimas como destinadas ao lisossomo.",
      "C) Excesso de glicose no citoplasma.",
      "D) Falta de ribossomos e mitocôndrias."
    ],
    "explicacao_geral": "Sem a etiqueta M6P, as enzimas seguem o 'fluxo padrão' (default pathway) que é a secreção constitutiva para o exterior.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Organela permanece íntegra, mas funcionalmente cega.",
      "B": "[CORRETA] Na **Doença de Células I**, o **endereçamento lisossomal** falha radicalmente.",
      "C": "[INCORRETA] Diabetes não causa esse defeito de tráfego proteico.",
      "D": "[INCORRETA] Outras organelas estão normais; o erro é de processamento pós-traducional."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3536,
    "materia": "bcm1",
    "aula_id": "bcm1_a13",
    "tema": "bcm1_a13",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um plasmócito (célula de defesa) está produzindo anticorpos em massa que serão jogados no sangue continuamente. Qual a sequência de organelas que estes anticorpos percorrem?),",
    "opcoes": [
      "A) Mitocôndria -> REL -> Peroxissomo.",
      "B) Citoplasma -> Lisossomo -> Membrana.",
      "C) Núcleo -> Aparelho de Golgi -> Ribossomo livre.",
      "D) RER (Síntese) -> Golgi (Processamento/Triagem) -> Vesícula de Secreção (Exocitose)."
    ],
    "explicacao_geral": "Proteínas de exportação seguem sempre a rota RER-Golgi-Membrana.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Relação metabólica/lipídica, não de secreção proteica.",
      "B": "[INCORRETA] Rota de degradação.",
      "C": "[INCORRETA] Sequência invertida e ribossomos livres ficam no citoplasma.",
      "D": "[CORRETA] Esta é a **via clássica de secreção** de anticorpos."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bcm1_a13 adicionadas.`);
