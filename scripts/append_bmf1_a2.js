import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3009,
    "materia": "bmf1",
    "aula_id": "bmf1_a2",
    "tema": "bmf1_a2",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "Os tecidos humanos são classificados em quatro grupos fundamentais. Qual tecido é caracterizado por possuir células justapostas com pouquíssima matriz extracelular e função primordial de revestimento?",
    "opcoes": [
      "A) Tecido Conjuntivo.",
      "B) Tecido Muscular.",
      "C) Tecido Epitelial.",
      "D) Tecido Nervoso."
    ],
    "explicacao_geral": "O **tecido epitelial** é definido por células muito próximas (justapostas) e avascularidade, sendo ideal para revestir superfícies e formar glândulas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O conjuntivo possui células afastadas e abundante matriz extracelular.",
      "B": "[INCORRETA] O muscular é especializado em contração.",
      "C": "[CORRETA] A principal característica do **epitélio** é a justaposição celular e o revestimento.",
      "D": "[INCORRETA] O nervoso é especializado em condução de impulsos elatricos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3010,
    "materia": "bmf1",
    "aula_id": "bmf1_a2",
    "tema": "bmf1_a2",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Um patologista analisa uma lâmina de biópsia do esôfago e observa múltiplas camadas de células, sendo que as mais superficiais são achatadas. Como esse epitélio deve ser classificado?",
    "opcoes": [
      "A) Epitélio Estratificado Pavimentoso.",
      "B) Epitélio Simples Cúbico.",
      "C) Epitélio de Transição.",
      "D) Epitélio Pseudoestratificado."
    ],
    "explicacao_geral": "A classificação epitelial baseia-se no número de camadas (simples ou estratificado) e no formato da camada **mais superficial**.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Como há múltiplas camadas e as células do topo são achatadas, o termo é **estratificado pavimentoso**.",
      "B": "[INCORRETA] O epitélio simples possui apenas uma camada.",
      "C": "[INCORRETA] O de transição (urotélio) muda de forma e é típico das vias urinárias.",
      "D": "[INCORRETA] O pseudoestratificado parece ter várias camadas, mas todas as células tocam a membrana basal."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3011,
    "materia": "bmf1",
    "aula_id": "bmf1_a2",
    "tema": "bmf1_a2",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual componente do tecido conjuntivo é responsável por conferir resistência à tração e é o tipo de fibra mais abundante no corpo humano?",
    "opcoes": [
      "A) Fibras Elásticas.",
      "B) Fibras Reticulares.",
      "C) Proteoglicanos.",
      "D) Fibras de Colágeno."
    ],
    "explicacao_geral": "A matriz do tecido conjuntivo é rica em fibras. O **colágeno** (especialmente o tipo I) é o principal responsável pela força e resistência mecânica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Fibras elásticas conferem elasticidade e retorno à forma original.",
      "B": "[INCORRETA] Fibras reticulares formam o arcabouço de órgãos linfoides.",
      "C": "[INCORRETA] Proteoglicanos fazem parte da substância fundamental amorfa.",
      "D": "[CORRETA] O **colágeno** é a proteína estrutural do conjuntivo que resiste à tensão."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3012,
    "materia": "bmf1",
    "aula_id": "bmf1_a2",
    "tema": "bmf1_a2",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "No tecido muscular, qual variedade apresenta células longas, multinucleadas com núcleos periféricos e contração voluntária?",
    "opcoes": [
      "A) Músculo Estriado Cardíaco.",
      "B) Músculo Estriado Esquelético.",
      "C) Músculo Liso.",
      "D) Músculo Visceral."
    ],
    "explicacao_geral": "Os três tipos de músculo diferem em controle, formato e estriação. O **esquelético** é o único sob controle voluntário e com núcleos na periferia da fibra.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O cardíaco tem contração involuntária e núcleos centrais (com discos intercalares).",
      "B": "[CORRETA] As características de **multinucleação periférica** e **voluntariedade** definem o músculo esquelético.",
      "C": "[INCORRETA] O músculo liso não possui estriações visíveis e é involuntário.",
      "D": "[INCORRETA] Musculatura visceral é geralmente sinônimo de músculo liso."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3013,
    "materia": "bmf1",
    "aula_id": "bmf1_a2",
    "tema": "bmf1_a2",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "A neuroglia (ou células da glia) desempenha papéis de suporte fundamentais no tecido nervoso. Qual dessas células é responsável pela formação da bainha de mielina no Sistema Nervoso Central (SNC)?",
    "opcoes": [
      "A) Células de Schwann.",
      "B) Microglia.",
      "C) Oligodendrócitos.",
      "D) Astrócitos."
    ],
    "explicacao_geral": "A mielinização é realizada por células diferentes dependendo da localização: **Oligodendrócitos** no SNC e Células de Schwann no SNP.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] As células de Schwann mielinizam o Sistema Nervoso Periférico (SNP).",
      "B": "[INCORRETA] A microglia atua como células de defesa (macrófagos) do cérebro.",
      "C": "[CORRETA] O **oligodendrócito** é a célula glial que envolve múltiplos axônios no SNC para formar a mielina.",
      "D": "[INCORRETA] Astrócitos fornecem suporte metabólico e formam a barreira hematoencefálica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3014,
    "materia": "bmf1",
    "aula_id": "bmf1_a2",
    "tema": "bmf1_a2",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Um paciente terminal com câncer de pulmão apresenta metástases ósseas. Durante a análise histológica, percebe-se que as células neoplásicas ultrapassaram a barreira que sustenta o epitélio dos brônquios. Qual é o nome dessa estrutura de ancoragem?",
    "opcoes": [
      "A) Membrana Basal.",
      "B) Desmossomo.",
      "C) Junção de Oclusão.",
      "D) Nexo (Gap Junction)."
    ],
    "explicacao_geral": "Todo epitélio repousa sobre uma camada acelular de matriz que o separa do conjuntivo subjacente, chamada **membrana basal**.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **membrana basal** é a estrutura que ancora o epitélio e serve como barreira de contenção.",
      "B": "[INCORRETA] Desmossomos são junções de adesão entre as células, não com o conjuntivo.",
      "C": "[INCORRETA] Junções de oclusão vedam o espaço intercelular no ápice.",
      "D": "[INCORRETA] Junções gap permitem a comunicação entre células."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3015,
    "materia": "bmf1",
    "aula_id": "bmf1_a2",
    "tema": "bmf1_a2",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Sobre o tecido conjuntivo propriamente dito, qual característica diferencia o tipo 'Frouxo' do tipo 'Denso'?",
    "opcoes": [
      "A) O frouxo possui mais fibras colágenas que o denso.",
      "B) O denso é sempre avascular.",
      "C) O frouxo não contém células migratórias como macrófagos.",
      "D) O denso possui predominância de fibras sobre a substância fundamental."
    ],
    "explicacao_geral": "A classificação baseia-se na proporção entre células, fibras e substância fundamental. O **conjuntivo denso** é rico em fibras (colágeno) e pobre em células e matriz amorfa.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] É o oposto: o denso é que possui mais fibras.",
      "B": "[INCORRETA] O tecido conjuntivo é tipicamente vascularizado.",
      "C": "[INCORRETA] O frouxo é o principal local de atuação das células de defesa.",
      "D": "[CORRETA] A alta densidade de **fibras colágenas** define o conjuntivo denso."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3016,
    "materia": "bmf1",
    "aula_id": "bmf1_a2",
    "tema": "bmf1_a2",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A derme, camada profunda da pele, deve ser capaz de suportar tensões vindas de diversas direções. Por isso, ela é composta predominantemente por qual tecido?",
    "opcoes": [
      "A) Tecido Conjuntivo Denso Regular.",
      "B) Tecido Conjuntivo Denso Irregular.",
      "C) Tecido Epitelial de Revestimento.",
      "D) Tecido Adiposo."
    ],
    "explicacao_geral": "Tecidos densos podem ter fibras organizadas paralelamente (regular, como tendões) ou em diversas direções (irregular).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O denso regular suporta tração em apenas um sentido (unidirecional).",
      "B": "[CORRETA] O **denso irregular** possui fibras em arranjo tridimensional, ideal para a pele suportar estiramentos em qualquer direção.",
      "C": "[INCORRETA] A derme não é epitélio (este forma a epiderme).",
      "D": "[INCORRETA] O tecido adiposo fica abaixo da derme (hipoderme)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf1_a2 adicionadas.`);
