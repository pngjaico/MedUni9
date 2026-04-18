import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3433,
    "materia": "bcm1",
    "aula_id": "bcm1_a1",
    "tema": "bcm1_a1",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A Teoria Celular é um dos pilares da biologia moderna. Qual das afirmações abaixo define corretamente um de seus postulados centrais?),",
    "opcoes": [
      "A) As células surgem espontaneamente da matéria bruta (Abiogênese).",
      "B) Todos os seres vivos são constituídos por uma ou mais células, que são as unidades morfológicas e funcionais da vida.",
      "C) Apenas os animais possuem células; as plantas são feitas de fibras sólidas.",
      "D) As células não possuem material genético próprio."
    ],
    "explicacao_geral": "A teoria celular estabelece que a vida depende da estrutura celular preexistente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A teoria afirma a Biogênese (células vêm de células preexistentes).",
      "B": "[CORRETA] Este é o postulado fundamental da **Teoria Celular**.",
      "C": "[INCORRETA] Todos os seres vivos (incluindo plantas e fungos) são celulares.",
      "D": "[INCORRETA] O material genético é essencial para a vida celular."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3434,
    "materia": "bcm1",
    "aula_id": "bcm1_a1",
    "tema": "bcm1_a1",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "Qual a principal diferença estrutural entre uma célula Procariótica (como a de uma bactéria) e uma célula Eucariótica (como a humana)?),",
    "opcoes": [
      "A) A ausência de um núcleo delimitado por membrana (envelope nuclear) nos procariotos.",
      "B) A presença de ribossomos apenas nos eucariotos.",
      "C) As bactérias possuem DNA e os humanos possuem apenas RNA.",
      "D) Procariotos são sempre pluricelulares."
    ],
    "explicacao_geral": "A compartimentação interna é a grande inovação das células eucarióticas.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **núcleo** (carioteca) é a distinção clássica dos **eucariotos**.",
      "B": "[INCORRETA] Ambos possuem ribossomos para síntese proteica.",
      "C": "[INCORRETA] Ambos possuem DNA como material genético principal.",
      "D": "[INCORRETA] Procariotos são tipicamente unicelulares."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3435,
    "materia": "bcm1",
    "aula_id": "bcm1_a1",
    "tema": "bcm1_a1",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um pesquisador deseja observar detalhes da ultraestrutura interna de uma mitocôndria, como as cristas e a matriz, em cortes extremamente finos. Qual o tipo de microscopia mais adequado?),",
    "opcoes": [
      "A) Microscopia Óptica de Luz.",
      "B) Microscopia de Varredura (MEV).",
      "C) Lupa manual.",
      "D) Microscopia Eletrônica de Transmissão (MET)."
    ],
    "explicacao_geral": "A MET permite visualizar o interior das estruturas celulares com altíssima resolução.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Não tem resolução suficiente para detalhes de organelas.",
      "B": "[INCORRETA] O MEV foca na superfície 3D (topografia).",
      "C": "[INCORRETA] Poder de aumento irrisório para biologia celular.",
      "D": "[CORRETA] O **MET** é o padrão ouro para visualizar a **ultraestrutura interna** celular."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3436,
    "materia": "bcm1",
    "aula_id": "bcm1_a1",
    "tema": "bcm1_a1",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A resolução de um microscópio é definida como a menor distância entre dois pontos para que eles sejam vistos como distintos. Qual o limite de resolução aproximado do olho humano e do microscópio óptico, respectivamente?),",
    "opcoes": [
      "A) 1 metro e 1 centímetro.",
      "B) 1 micrometro e 1 nanometro.",
      "C) 0,2 milímetros e 0,2 micrômetros.",
      "D) 10 nanômetros e 10 angstrons."
    ],
    "explicacao_geral": "O microscópio óptico aumenta a resolução do olho humano em cerca de 1000 vezes.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Valores macroscópicos demais.",
      "B": "[INCORRETA] O olho humano não enxerga micrômetros.",
      "C": "[CORRETA] O **microscópio óptico** atinge o limite de **0,2 µm** devido ao comprimento de onda da luz visível.",
      "D": "[INCORRETA] Faixa de resolução da microscopia eletrônica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3437,
    "materia": "bcm1",
    "aula_id": "bcm1_a1",
    "tema": "bcm1_a1",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Ao preparar uma lâmina histológica para microscopia de luz, o tecido deve passar por várias etapas. Qual a finalidade da etapa de 'Fixação' (geralmente com formaldeído)?),",
    "opcoes": [
      "A) Deixar as células vivas por mais tempo.",
      "B) Preservar a estrutura celular e evitar a autólise (autodestruição por enzimas), interrompendo o metabolismo imediatamente.",
      "C) Aumentar o tamanho das células para facilitar a visão.",
      "D) Dar cor às organelas."
    ],
    "explicacao_geral": "A fixação cria pontes químicas que estabilizam as proteínas e componentes celulares.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A fixação mata as células para conservá-las na forma em que estavam.",
      "B": "[CORRETA] A **fixação** impede a decomposição e mantém a **morfologia tecidual**.",
      "C": "[INCORRETA] Etapa de inclusão e corte lida com o tamanho e espessura.",
      "D": "[INCORRETA] Esta é a etapa de coloração (Ex: Hematoxilina e Eosina)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3438,
    "materia": "bcm1",
    "aula_id": "bcm1_a1",
    "tema": "bcm1_a1",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A principal vantagem da Microscopia Eletrônica de Varredura (MEV) em relação à de Transmissão é:),",
    "opcoes": [
      "A) A visualização de imagens tridimensionais (3D) da superfície das amostras.",
      "B) O custo muito mais baixo que a microscopia óptica.",
      "C) A capacidade de ver células vivas em movimento.",
      "D) Não necessita de vácuo para funcionar."
    ],
    "explicacao_geral": "O MEV varre a amostra com elétrons, criando um mapa topográfico detalhado.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **MEV** é excelente para ver a **superfície e relevo** celular.",
      "B": "[INCORRETA] Ambos os modelos eletrônicos são extremamente caros.",
      "C": "[INCORRETA] Amostras eletrônicas são fixadas, desidratadas e mantidas em vácuo (mortas).",
      "D": "[INCORRETA] O feixe de elétrons exige vácuo para não ser desviado pelo ar."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3439,
    "materia": "bcm1",
    "aula_id": "bcm1_a1",
    "tema": "bcm1_a1",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "Por que o poder de resolução de um microscópio eletrônico é milhares de vezes superior ao de um microscópio óptico?),",
    "opcoes": [
      "A) Porque as lentes são feitas de cristal de rocha puro.",
      "B) Porque ele usa uma lâmpada mais potente.",
      "C) Porque não usa lentes, apenas espelhos.",
      "D) Porque o comprimento de onda do feixe de elétrons é muito menor que o comprimento de onda da luz visível."
    ],
    "explicacao_geral": "A resolução é inversamente proporcional ao comprimento de onda da radiação utilizada.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Usa lentes eletromagnéticas.",
      "B": "[INCORRETA] Usa um canhão de elétrons.",
      "C": "[INCORRETA] Usa lentes eletromagnéticas para focar o feixe.",
      "D": "[CORRETA] **Menor comprimento de onda** significa **maior resolução**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3440,
    "materia": "bcm1",
    "aula_id": "bcm1_a1",
    "tema": "bcm1_a1",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um patologista recebe uma amostra de biópsia e precisa identificar se há invasão de células cancerosas no tecido saudável. Qual técnica de microscopia e coloração é a mais utilizada na rotina diagnóstica inicial?),",
    "opcoes": [
      "A) Microscopia Eletrônica com contraste de ouro.",
      "B) Microscopia de Fluorescência com anticorpos.",
      "C) Microscopia Óptica com coloração por Hematoxilina e Eosina (H&E).",
      "D) Microscopia de Contraste de Fase sem coloração."
    ],
    "explicacao_geral": "A coloração H&E destaca o núcleo (azul/roxo) e o citoplasma (rosa/vermelho), permitindo análise morfológica rápida.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Técnica de pesquisa avançada, não de rotina hospitalar.",
      "B": "[INCORRETA] Usada em casos específicos de imunopatologia, não na triagem inicial.",
      "C": "[CORRETA] O **H&E** é o padrão universal da **patologia diagnóstica**.",
      "D": "[INCORRETA] Usada para ver células vivas em cultura, mas não é o padrão de biópsia fixada."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bcm1_a1 adicionadas.`);
