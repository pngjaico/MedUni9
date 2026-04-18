import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3121,
    "materia": "bmf1",
    "aula_id": "bmf1_a16",
    "tema": "bmf1_a16",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "Qual célula é a mais comum no tecido conjuntivo propriamente dito, sendo responsável pela síntese das fibras (colágeno, elásticas) e da substância fundamental da matriz?",
    "opcoes": [
      "A) Fibroblasto.",
      "B) Macrófago.",
      "C) Mastócito.",
      "D) Plasmócito."
    ],
    "explicacao_geral": "Os **fibroblastos** são os 'arquitetos' do tecido conjuntivo, mantendo a integridade da matriz extracelular.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **fibroblasto** é a célula produtora da matriz e das fibras.",
      "B": "[INCORRETA] Macrófagos são células de defesa que realizam fagocitose.",
      "C": "[INCORRETA] Mastócitos estão envolvidos em reações alérgicas e liberação de histamina.",
      "D": "[INCORRETA] Plasmócitos derivam dos linfócitos B e produzem anticorpos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3122,
    "materia": "bmf1",
    "aula_id": "bmf1_a16",
    "tema": "bmf1_a16",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Um paciente apresenta uma reação alérgica aguda (anafilaxia) após picada de inseto. Qual célula do tecido conjuntivo é a principal responsável pela liberação rápida de histamina e heparina armazenadas em seus grânulos?",
    "opcoes": [
      "A) Plasmócito.",
      "B) Mastócito.",
      "C) Fibroblasto.",
      "D) Macrófago."
    ],
    "explicacao_geral": "Os **mastócitos** possuem receptores para IgE e desencadeiam a resposta inflamatória imediata.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Plasmócitos sintetizam anticorpos, mas não liberam histamina diretamente.",
      "B": "[CORRETA] O **mastócito** degranula em resposta a alérgenos, causando vasodilatação e edema.",
      "C": "[INCORRETA] Fibroblastos sintetizam colágeno.",
      "D": "[INCORRETA] Macrófagos fagocitam debris e patógenos."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3123,
    "materia": "bmf1",
    "aula_id": "bmf1_a16",
    "tema": "bmf1_a16",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "As fibras reticulares formam um arcabouço delicado em órgãos como o baço e linfonodos. Essas fibras são compostas predominantemente por qual proteína?",
    "opcoes": [
      "A) Elastina.",
      "B) Queratina.",
      "C) Colágeno Tipo I.",
      "D) Colágeno Tipo III."
    ],
    "explicacao_geral": "O colágeno tipo III organiza-se em redes (reticulum) para suporte celular em órgãos hematopoiéticos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Elastina compõe as fibras elásticas.",
      "B": "[INCORRETA] Queratina é uma proteína epitelial.",
      "C": "[INCORRETA] Colágeno tipo I forma fibras espessas e resistentes (ex: derme, osso).",
      "D": "[CORRETA] As **fibras reticulares** são compostas por **colágeno tipo III**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3124,
    "materia": "bmf1",
    "aula_id": "bmf1_a16",
    "tema": "bmf1_a16",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O tecido conjuntivo que possui equilíbrio entre células, fibras e substância fundamental, sendo o principal local de atuação das células de defesa e nutrição dos epitélios, é classificado como:",
    "opcoes": [
      "A) Tecido Conjuntivo Frouxo.",
      "B) Tecido Conjuntivo Denso Regular.",
      "C) Tecido Conjuntivo Denso Irregular.",
      "D) Tecido Adiposo Unilocular."
    ],
    "explicacao_geral": "O tecido frouxo é flexível e muito vascularizado, ao contrário dos tecidos densos.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **tecido conjuntivo frouxo** sustenta os epitélios e permite a migração de leucócitos.",
      "B": "[INCORRETA] O denso regular possui fibras paralelas e poucas células (ex: tendões).",
      "C": "[INCORRETA] O denso irregular possui fibras em várias direções para resistência (ex: derme profunda).",
      "D": "[INCORRETA] O adiposo é especializado em reserva de energia."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3125,
    "materia": "bmf1",
    "aula_id": "bmf1_a16",
    "tema": "bmf1_a16",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Um paciente com Síndrome de Marfan apresenta hipermobilidade articular e risco de aneurisma de aorta devido a uma mutação na proteína fibrilina-1. Qual componente do tecido conjuntivo está primariamente afetado?",
    "opcoes": [
      "A) Fibras de Colágeno.",
      "B) Substância Fundamental Amorfa.",
      "C) Fibras Elásticas.",
      "D) Proteoglicanos."
    ],
    "explicacao_geral": "A fibrilina-1 forma o microarcabouço necessário para a deposição de elastina.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Alterações no colágeno causam doenças como Escorbuto ou Osteogênese Imperfeita.",
      "B": "[INCORRETA] A substância amorfa é hidratada e viscosa (água + GAGs).",
      "C": "[CORRETA] A **fibrilina** é essencial para a integridade das **fibras elásticas**, comuns em vasos e ligamentos.",
      "D": "[INCORRETA] Proteoglicanos retêm água, mas não dão a elasticidade afetada na Marfan."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3126,
    "materia": "bmf1",
    "aula_id": "bmf1_a16",
    "tema": "bmf1_a16",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "O tecido conjuntivo mucoso, encontrado no cordão umbilical, é caracterizado por possuir uma matriz gelatinosa muito rica em ácido hialurônico e poucas fibras. Qual o epônimo clássico para essa substância?",
    "opcoes": [
      "A) Corpo de Barr.",
      "B) Geleia de Wharton.",
      "C) Substância Fundamental de Purkinje.",
      "D) Matriz de Golgi."
    ],
    "explicacao_geral": "Este tecido é transiente no desenvolvimento e protege os vasos do cordão contra compressão.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Corpo de Barr é o cromossomo X inativado.",
      "B": "[CORRETA] A **Geleia de Wharton** é a denominação específica do tecido conjuntivo mucoso do cordão umbilical.",
      "C": "[INCORRETA] Células de Purkinje são neurônios do cerebelo ou do sistema de condução cardíaco.",
      "D": "[INCORRETA] Complexo de Golgi é uma organela celular."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3127,
    "materia": "bmf1",
    "aula_id": "bmf1_a16",
    "tema": "bmf1_a16",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "No processo de cicatrização de um corte profundo na pele, fibroblastos sofrem diferenciação para auxiliar na contração das bordas da ferida. Essas células especializadas são chamadas de:",
    "opcoes": [
      "A) Macrófagos ativados.",
      "B) Mastócitos degranulados.",
      "C) Plasmócitos produtores.",
      "D) Miofibroblastos."
    ],
    "explicacao_geral": "Estas células combinam propriedades de síntese de matriz com a capacidade contrátil de células musculares lisas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Macrófagos limpam a ferida mas não fecham as bordas mecanicamente.",
      "B": "[INCORRETA] Mastócitos promovem inflamação.",
      "C": "[INCORRETA] Plasmócitos combatem infecção via anticorpos.",
      "D": "[CORRETA] Os **miofibroblastos** são essenciais para o fechamento (contração) de feridas cirúrgicas ou traumáticas."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3128,
    "materia": "bmf1",
    "aula_id": "bmf1_a16",
    "tema": "bmf1_a16",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual dos tecidos abaixo é projetado especificamente para suportar tensões mecânicas em um único sentido (unidirecional), como ocorre nos tendões de fixação muscular?",
    "opcoes": [
      "A) Tecido Conjuntivo Frouxo.",
      "B) Tecido Conjuntivo Denso Regular (modelado).",
      "C) Tecido Conjuntivo Denso Irregular (não modelado).",
      "D) Tecido Adiposo Multilocular."
    ],
    "explicacao_geral": "A organização das fibras reflete a função mecânica do tecido.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O frouxo não suporta grandes tensões.",
      "B": "[CORRETA] O **denso regular** possui fibras paralelas, ideal para cordões de tração como os **tendões**.",
      "C": "[INCORRETA] O denso irregular suporta tensões em várias direções (ex: derme).",
      "D": "[INCORRETA] O adiposo multilocular (gordura marrom) gera calor, não resiste à tração."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf1_a16 adicionadas.`);
