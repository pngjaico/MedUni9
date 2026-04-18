import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3225,
    "materia": "pmh",
    "aula_id": "pmh_a7",
    "tema": "pmh_a7",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A beta-oxidação é a via de degradação dos ácidos graxos para a produção de energia. Em qual compartimento celular este processo ocorre predominantemente?",
    "opcoes": [
      "A) Citosol.",
      "B) Matriz Mitocondrial.",
      "C) Retículo Endoplasmático Liso.",
      "D) Aparelho de Golgi."
    ],
    "explicacao_geral": "Os ácidos graxos devem ser transportados para dentro da mitocôndria para serem oxidados.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A síntese de ácidos graxos ocorre no citosol.",
      "B": "[CORRETA] A **beta-oxidação** clássica é uma via da **matriz mitocondrial**.",
      "C": "[INCORRETA] O REL está envolvido na síntese de lipídios e esteroides.",
      "D": "[INCORRETA] O Golgi atua no empacotamento de secreções."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3226,
    "materia": "pmh",
    "aula_id": "pmh_a7",
    "tema": "pmh_a7",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Para entrar na matriz mitocondrial, os ácidos graxos de cadeia longa dependem de um sistema de transporte específico conhecido como 'lançadeira'. Qual molécula é o transportador essencial desse sistema?",
    "opcoes": [
      "A) Albumina.",
      "B) Colesterol.",
      "C) Ácido Pantotênico.",
      "D) Carnitina."
    ],
    "explicacao_geral": "A carnitina acila-se ao ácido graxo para permitir sua passagem pela membrana interna.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Albumina transporta ácidos graxos no sangue.",
      "B": "[INCORRETA] Colesterol é um lipídio estrutural.",
      "C": "[INCORRETA] Parte da estrutura da Coenzima A.",
      "D": "[CORRETA] A **carnitina** é a molécula que 'carrega' o acil-CoA para dentro da mitocôndria."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3227,
    "materia": "pmh",
    "aula_id": "pmh_a7",
    "tema": "pmh_a7",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A cada ciclo da beta-oxidação, o ácido graxo é encurtado em dois átomos de carbono. Qual o produto final de cada ciclo que entra diretamente no Ciclo de Krebs?",
    "opcoes": [
      "A) Piruvato.",
      "B) Lactato.",
      "C) Acetil-CoA.",
      "D) Succinato."
    ],
    "explicacao_geral": "A beta-oxidação produz moléculas de 2 carbonos prontas para a oxidação total no ciclo de Krebs.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Piruvato é produto da glicólise carboidruada.",
      "B": "[INCORRETA] Lactato é produto da fermentação.",
      "C": "[CORRETA] Cada ciclo de beta-oxidação libera uma unidade de **Acetil-CoA**.",
      "D": "[INCORRETA] Succinato é um intermediário do Ciclo de Krebs."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3228,
    "materia": "pmh",
    "aula_id": "pmh_a7",
    "tema": "pmh_a7",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A síntese de ácidos graxos (lipogênese) ocorre quando há abundância de energia e precursores. Qual a enzima marcapasso (reguladora) desta via, que converte Acetil-CoA em Malonil-CoA?",
    "opcoes": [
      "A) Acetil-CoA Carboxilase (ACC).",
      "B) Ácido Graxo Sintase (FAS).",
      "C) Lipase Sensível a Hormônio (HSL).",
      "D) Hidroximetilglutaril-CoA Redutase (HMG-CoA Redutase)."
    ],
    "explicacao_geral": "A ACC é regulada alostericamente pelo citrato e hormonalmente pela insulina e glucagon.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **ACC** é a enzima regulatória da síntese lipídica.",
      "B": "[INCORRETA] FAS é o complexo multienzimático que estende a cadeia, mas a ACC é quem regula o fluxo.",
      "C": "[INCORRETA] HSL atua na degradação (lipólise) no tecido adiposo.",
      "D": "[INCORRETA] Regula a síntese de colesterol."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3229,
    "materia": "pmh",
    "aula_id": "pmh_a7",
    "tema": "pmh_a7",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "O Malonil-CoA, além de ser o precursor da síntese de gordura, desempenha um papel regulatório fundamental ao inibir a enzima CPT-1 (Carnitina Palmitoil Transferase I). Qual a finalidade biológica dessa inibição?",
    "opcoes": [
      "A) Impedir que o cérebro queime gordura.",
      "B) Impedir que o fígado queime ácidos graxos ao mesmo tempo em que os está sintetizando (evitar ciclo fútil).",
      "C) Estimular a quebra imediata de glicogênio.",
      "D) Aumentar a temperatura corporal através do tremor."
    ],
    "explicacao_geral": "Células organizadas evitam processos opostos simultâneos que desperdiçam energia.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O cérebro não realiza beta-oxidação significativa independente do Malonil-CoA.",
      "B": "[CORRETA] O **Malonil-CoA** bloqueia a entrada de ácidos graxos na mitocôndria, parando a **beta-oxidação** enquanto a síntese está ativa.",
      "C": "[INCORRETA] O Malonil-CoA está associado ao estado pós-prandial, não ao jejum/quebra de glicogênio.",
      "D": "[INCORRETA] Não há relação com a termogênese mecânica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3230,
    "materia": "pmh",
    "aula_id": "pmh_a7",
    "tema": "pmh_a7",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um paciente submetido a uma dieta cetogênica rigorosa (muito baixa ingestão de carboidratos) apresenta níveis elevados de Acetil-CoA hepático que não consegue entrar no Ciclo de Krebs devido à escassez de oxaloacetato (que foi desviado para a gliconeogênese). Como o fígado processa esse excesso de Acetil-CoA?",
    "opcoes": [
      "A) Transformando em álcool no fígado.",
      "B) Convertendo de volta em glicose puríssima.",
      "C) Produzindo corpos cetônicos (Cetogênese).",
      "D) Eliminando-o diretamente na respiração."
    ],
    "explicacao_geral": "A cetogênese ocorre no fígado durante o jejum ou dietas low-carb para fornecer combustível alternativo ao cérebro e músculos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O álcool não é sintetizado a partir de Acetil-CoA nestas condições.",
      "B": "[INCORRETA] Seres humanos não conseguem converter Acetil-CoA (gordura) em glicose diretamente.",
      "C": "[CORRETA] O excesso de Acetil-CoA é desviado para a síntese de **corpos cetônicos**.",
      "D": "[INCORRETA] Apenas a acetona (um corpo cetônico) é eliminada volátil, mas o processamento é químico."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3231,
    "materia": "pmh",
    "aula_id": "pmh_a7",
    "tema": "pmh_a7",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual coenzima é o agente redutor (doador de elétrons) principal para as etapas de síntese na via da Ácido Graxo Sintase (FAS)?",
    "opcoes": [
      "A) NAD+.",
      "B) FADH2.",
      "C) Vitamina C.",
      "D) NADPH."
    ],
    "explicacao_geral": "O NADPH é o 'dinheiro' das vias anabólicas (de construção).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] NAD+ é aceptor de elétrons em vias oxidativas.",
      "B": "[INCORRETA] FADH2 é um carregador reduzido mas atua na fosforilação oxidativa.",
      "C": "[INCORRETA] Atua na síntese de colágeno, não de gordura diretamente.",
      "D": "[CORRETA] O **NADPH** (frequentemente vindo da via das pentoses) é indispensável para a **síntese de lipídios**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3232,
    "materia": "pmh",
    "aula_id": "pmh_a7",
    "tema": "pmh_a7",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Um recém-nascido é diagnosticado com deficiência congênita de Carnitina Aciltransferase I (CPT-1). Qual seria o sintoma metabólico mais provável diante de um período de jejum nestas condições?",
    "opcoes": [
      "A) Hiperglicemia extrema.",
      "B) Hipoglicemia hipocetótica (falta de açúcar e falta de corpos cetônicos).",
      "C) Produção massiva de calor e febre.",
      "D) Aumento súbito da força muscular."
    ],
    "explicacao_geral": "Sem queimar gordura, o corpo gasta toda a glicose (hipoglicemia) e o fígado não consegue fabricar corpos cetônicos (hipocetótica).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pelo contrário, haverá hipoglicemia por consumo excessivo de glicose sem poupança pelas gorduras.",
      "B": "[CORRETA] A **hipoglicemia hipocetótica** é o sinal clínico clássico de defeitos na oxidação de ácidos graxos.",
      "C": "[INCORRETA] O metabolismo oxidativo estará reduzido, diminuindo a produção de calor.",
      "D": "[INCORRETA] O músculo fadiga rapidamente sem acesso à gordura como fonte de energia lenta."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula pmh_a7 adicionadas.`);
