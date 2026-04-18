import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3505,
    "materia": "bcm1",
    "aula_id": "bcm1_a10",
    "tema": "bcm1_a10",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "Os microfilamentos são os componentes mais finos do citoesqueleto. Qual proteína os compõe?),",
    "opcoes": [
      "A) Actina.",
      "B) Miosina.",
      "C) Tubulina.",
      "D) Elastina."
    ],
    "explicacao_geral": "Os filamentos de actina são polímeros de actina-G que formam hélices de actina-F.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Actina** é a proteína formadora dos **microfilamentos**.",
      "B": "[INCORRETA] É uma proteína motora que interage com a actina.",
      "C": "[INCORRETA] Forma os microtúbulos.",
      "D": "[INCORRETA] Proteína de matriz extracelular."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3506,
    "materia": "bcm1",
    "aula_id": "bcm1_a10",
    "tema": "bcm1_a10",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "Qual a principal função dos 'Filamentos Intermediários' na célula?),",
    "opcoes": [
      "A) Produzir ATP.",
      "B) Transportar vesículas como trilhos.",
      "C) Oferecer resistência mecânica contra estresses de tração e sustentar a integridade dos tecidos.",
      "D) Mover a célula por meio de flagelos."
    ],
    "explicacao_geral": "Diferente dos outros, eles são mais estáveis e semelhantes a cabos de aço.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Função energética (mitocôndria).",
      "B": "[INCORRETA] Função dos microtúbulos.",
      "C": "[CORRETA] Os **Filamentos Intermediários** (Ex: Queratina) dão a **resistência mecânica**.",
      "D": "[INCORRETA] Função dos microtúbulos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3507,
    "materia": "bcm1",
    "aula_id": "bcm1_a10",
    "tema": "bcm1_a10",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "As microvilosidades do epitélio intestinal servem para aumentar a área de absorção. Qual componente do citoesqueleto sustenta a estrutura interna dessas projeções?),",
    "opcoes": [
      "A) Microtúbulos.",
      "B) Feixes paralelos de Microfilamentos de Actina.",
      "C) Filamentos de Queratina.",
      "D) Colágeno."
    ],
    "explicacao_geral": "Os filamentos de actina são ancorados no córtex celular para manter a projeção ereta.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Microtúbulos formam cílios e flagelos, não microvilosidades.",
      "B": "[CORRETA] A **Actina** é o esqueleto das **microvilosidades**.",
      "C": "[INCORRETA] Atuam na resistência epitelial global via desmossomos.",
      "D": "[INCORRETA] Componente externo à célula."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3508,
    "materia": "bcm1",
    "aula_id": "bcm1_a10",
    "tema": "bcm1_a10",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A 'Miosina' é a proteína motora clássica associada à actina. Em qual processo celular a interação actina-miosina NÃO está diretamente envolvida?),",
    "opcoes": [
      "A) Contração Muscular.",
      "B) Citocinese (divisão do citoplasma na mitose via anel contrátil).",
      "C) Movimento ameboide (emissão de pseudópodes).",
      "D) Batimento do flagelo do espermatozoide."
    ],
    "explicacao_geral": "O flagelo é movido por microtúbulos e dineína.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O sarcômero é a base da actina-miosina.",
      "B": "[INCORRETA] O anel contrátil é feito de actina e miosina II.",
      "C": "[INCORRETA] A actina empurra a membrana sob controle de proteínas motoras e sinalização.",
      "D": "[CORRETA] O **flagelo** usa **Microtúbulos**, não o sistema actina-miosina."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3509,
    "materia": "bcm1",
    "aula_id": "bcm1_a10",
    "tema": "bcm1_a10",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A Queratina é o filamento intermediário típico dos epitélios. Uma mutação genética que impede a formação correta da queratina na pele causa qual doença caracterizada por bolhas ao menor toque?),",
    "opcoes": [
      "A) Epidermólise Bolhosa Simples.",
      "B) Vitiligo.",
      "C) Acne juvenil.",
      "D) Hanseníase."
    ],
    "explicacao_geral": "Sem a queratina funcional, as células epiteliais se rompem facilmente sob pressão mecânica.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Epidermólise Bolhosa** é a patologia clássica ligada à falha nos **filamentos intermediários**.",
      "B": "[INCORRETA] Doença de pigmentação (melanócitos).",
      "C": "[INCORRETA] Obstrução de glândulas sebáceas.",
      "D": "[INCORRETA] Infecção bacteriana profunda."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3510,
    "materia": "bcm1",
    "aula_id": "bcm1_a10",
    "tema": "bcm1_a10",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "A lâmina nuclear é uma rede de filamentos que reveste a face interna do envelope nuclear. Qual a sua função?),",
    "opcoes": [
      "A) Produzir ribossomos.",
      "B) Dar suporte mecânico ao núcleo e organizar a cromatina (DNA).",
      "C) Facilitar a respiração celular.",
      "D) Guardar gordura."
    ],
    "explicacao_geral": "A lamina nuclear é composta por filamentos intermediários do tipo Laminas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Função do nucléolo.",
      "B": "[CORRETA] A **Lâmina Nuclear** mantém a **arquitetura do núcleo**.",
      "C": "[INCORRETA] Função de membranas mitocondriais.",
      "D": "[INCORRETA] Função do tecido adiposo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3511,
    "materia": "bcm1",
    "aula_id": "bcm1_a10",
    "tema": "bcm1_a10",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "A 'Coréia de Huntington' e outras doenças neurodegenerativas podem estar ligadas ao acúmulo de quais componentes do citoesqueleto desregulados nos neurônios?),",
    "opcoes": [
      "A) Actina muscular.",
      "B) Queratina na pele.",
      "C) Cílios imóveis.",
      "D) Neurofilamentos (filamentos intermediários neuronais) anormais ou agregados proteicos."
    ],
    "explicacao_geral": "O colapso do citoesqueleto interrompe o transporte axonal e leva à morte neuronal.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Localização incorreta.",
      "B": "[INCORRETA] Localização externa ao neurônio.",
      "C": "[INCORRETA] Causa Síndrome de Kartagener, não Huntington.",
      "D": "[CORRETA] Os **Neurofilamentos** são marcadores de **integridade e patologia axonal**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3512,
    "materia": "bcm1",
    "aula_id": "bcm1_a10",
    "tema": "bcm1_a10",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual molécula fornece a energia para a polimerização (crescimento) da Actina e qual para a Tubulina, respectivamente?),",
    "opcoes": [
      "A) Glicose e Oxigênio.",
      "B) Ambas usam NADH.",
      "C) ATP (para Actina) e GTP (para Tubulina).",
      "D) Gordura e Vitaminas."
    ],
    "explicacao_geral": "A hidrólise desses nucleotídeos regula a velocidade de crescimento e a instabilidade dos filamentos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Substratos energéticos celulares básicos.",
      "B": "[INCORRETA] Transportador de elétrons.",
      "C": "[CORRETA] **Actina consume ATP** e **Tubulina consume GTP** para polimerizar.",
      "D": "[INCORRETA] Não são fontes de energia imediata para o citoesqueleto."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bcm1_a10 adicionadas.`);
