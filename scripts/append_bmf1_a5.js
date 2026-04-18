import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3033,
    "materia": "bmf1",
    "aula_id": "bmf1_a5",
    "tema": "bmf1_a5",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A unidade funcional do tecido ósseo compacto é formada por lamelas concêntricas organizadas ao redor de um canal central. Qual é o nome dessa estrutura?",
    "opcoes": [
      "A) Trabécula.",
      "B) Osteon (Sistema de Havers).",
      "C) Canal de Volkmann.",
      "D) Substância Fundamental."
    ],
    "explicacao_geral": "O **osteon** é a estrutura cilíndrica fundamental que confere rigidez e permite a passagem de vasos no osso compacto.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Trabéculas são as unidades do osso esponjoso.",
      "B": "[CORRETA] O **osteon** ou Sistema de Havers é o arranjo característico da cortical óssea.",
      "C": "[INCORRETA] Canais de Volkmann são canais transversais que conectam os de Havers.",
      "D": "[INCORRETA] Substância fundamental é o componente não fibroso da matriz."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3034,
    "materia": "bmf1",
    "aula_id": "bmf1_a5",
    "tema": "bmf1_a5",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Dentre as células ósseas, qual é a responsável direta pela reabsorção da matriz óssea e originada da linhagem dos monócitos/macrófagos?",
    "opcoes": [
      "A) Osteoclasto.",
      "B) Osteoblasto.",
      "C) Osteócito.",
      "D) Célula Osteoprogenitora."
    ],
    "explicacao_geral": "O remodelamento ósseo depende do equilíbrio entre a formação e a destruição da matriz. Os **osteoclastos** são os responsáveis pela 'limpeza' ou desmineralização do osso.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Os **osteoclastos** são células gigantes multinucleadas que digerem a matriz óssea.",
      "B": "[INCORRETA] Osteoblastos são as células que formam a nova matriz (osteoide).",
      "C": "[INCORRETA] Osteócitos são células maduras que mantêm a matriz e sentem cargas mecânicas.",
      "D": "[INCORRETA] Osteoprogenitoras são as células-tronco que geram novos osteoblastos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3035,
    "materia": "bmf1",
    "aula_id": "bmf1_a5",
    "tema": "bmf1_a5",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A matriz óssea é composta por uma fase orgânica e uma fase inorgânica. A rigidez (dureza) do osso é garantida predominantemente por qual desses componentes?",
    "opcoes": [
      "A) Colágeno Tipo I.",
      "B) Proteoglicanos.",
      "C) Água.",
      "D) Cristais de Hidroxiapatita."
    ],
    "explicacao_geral": "O osso combina flexibilidade (colágeno) com rigidez (minerais). A **hidroxiapatita** (cálcio e fósforo) é o mineral que endurece a matriz.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O colágeno confere flexibilidade e resistência à tração.",
      "B": "[INCORRETA] Proteoglicanos estão presentes em pequena quantidade.",
      "C": "[INCORRETA] O tecido ósseo tem baixa hidratação comparado a outros conjuntivos.",
      "D": "[CORRETA] A dureza óssea vem dos **cristais de hidroxiapatita** (fase inorgânica)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3036,
    "materia": "bmf1",
    "aula_id": "bmf1_a5",
    "tema": "bmf1_a5",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Um recém-nascido apresenta fechamento tardio das fontanelas ('moleiras'). Sabe-se que os ossos da calvária (crânio) se formam sem a necessidade de um molde prévio de cartilagem. Qual é esse tipo de ossificação?",
    "opcoes": [
      "A) Ossificação Endocondral.",
      "B) Ossificação Pericôndrica.",
      "C) Ossificação Intramembranosa.",
      "D) Ossificação Secundária."
    ],
    "explicacao_geral": "Ossos planos, como a maioria dos ossos do crânio, desenvolvem-se diretamente no tecido mesenquimal através da **ossificação intramembranosa**.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A endocondral usa um molde de cartilagem hialina (típica de ossos longos).",
      "B": "[INCORRETA] Termo não utilizado como padrão principal de formação óssea.",
      "C": "[CORRETA] A **ossificação intramembranosa** é a que forma ossos chatos/planos diretamente do mesênquima.",
      "D": "[INCORRETA] Refere-se a centros de ossificação que surgem após o nascimento nas epífises."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3037,
    "materia": "bmf1",
    "aula_id": "bmf1_a5",
    "tema": "bmf1_a5",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O crescimento em comprimento dos ossos longos ocorre em uma região específica composta por cartilagem hialina organizada em zonas. Qual é o nome dessa região?",
    "opcoes": [
      "A) Placa Epifisária (ou Fise).",
      "B) Diáfise.",
      "C) Medula Óssea Amarela.",
      "D) Cápsula Articular."
    ],
    "explicacao_geral": "A **placa epifisária** é o disco de cartilagem que permite o alongamento do osso até o final da puberdade.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **placa epifisária** é onde ocorre o crescimento longitudinal por ossificação endocondral.",
      "B": "[INCORRETA] A diáfise é o corpo do osso já formado.",
      "C": "[INCORRETA] A medula amarela armazena gordura no canal medular.",
      "D": "[INCORRETA] A cápsula articular envolve a junta, não o crescimento ósseo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3038,
    "materia": "bmf1",
    "aula_id": "bmf1_a5",
    "tema": "bmf1_a5",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Uma paciente idosa, com diagnóstico de osteoporose, sofre uma fratura de quadril após uma queda leve. Por definição, a osteoporose caracteriza-se por:",
    "opcoes": [
      "A) Falha exclusiva na mineralização da matriz (osso mole).",
      "B) Redução da massa óssea total com preservação da composição química normal.",
      "C) Aumento exagerado da atividade dos osteoblastos.",
      "D) Excesso de colágeno tipo I na matriz orgânica."
    ],
    "explicacao_geral": "Na osteoporose, há 'pouco osso' (baixa densidade), tornando-o poroso e frágil, embora o tecido presente esteja mineralizado corretamente (diferente da osteomalácia).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Defeito na mineralização é característica da osteomalácia/raquitismo.",
      "B": "[CORRETA] A **osteoporose** é a perda quantitativa de tecido ósseo, desequilibrando o remodelamento.",
      "C": "[INCORRETA] Na osteoporose, a atividade dos osteoclastos supera a dos osteoblastos.",
      "D": "[INCORRETA] Há redução da matriz proteica, não excesso."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3039,
    "materia": "bmf1",
    "aula_id": "bmf1_a5",
    "tema": "bmf1_a5",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Durante a consolidação de uma fratura, após a formação do hematoma, surge um tecido temporário composto por vasos e fibroblastos que evolui para um 'calo mole'. Esse processo é denominado:",
    "opcoes": [
      "A) Formação do Tecido de Granulação e Calo Fibrocartilaginoso.",
      "B) Ossificação Intramembranosa de Urgência.",
      "C) Formação de Tabela Óssea Compacta Imediata.",
      "D) Reabsorção Póstuma de Hematoma."
    ],
    "explicacao_geral": "O reparo ósseo segue fases fixas: hematoma → calo mole (fibrocartilagem) → calo duro (ósseo) → remodelação.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **tecido de granulação** e o **calo fibrocartilaginoso** estabilizam a fratura antes da ossificação final.",
      "B": "[INCORRETA] O reparo de fraturas em ossos longos segue o padrão endocondral (via cartilagem).",
      "C": "[INCORRETA] O osso compacto só se forma na fase final de remodelação do calo duro.",
      "D": "[INCORRETA] A reabsorção do hematoma ocorre paralelamente à formação do tecido de granulação, não é o nome da fase de reparo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3040,
    "materia": "bmf1",
    "aula_id": "bmf1_a5",
    "tema": "bmf1_a5",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "Canais transversais ou oblíquos que atravessam as lamelas ósseas, conectando os canais de Havers entre si e com a cavidade medular, são chamados de:",
    "opcoes": [
      "A) Canais de Havers.",
      "B) Canalículos.",
      "C) Lacunas.",
      "D) Canais de Volkmann."
    ],
    "explicacao_geral": "A vascularização do osso compacto é uma rede integrada. Os canais longitudinais são os de Havers; os **transversais** são os de Volkmann.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Canais de Havers são longitudinais e centrais ao osteon.",
      "B": "[INCORRETA] Canalículos conectam osteócitos vizinhos para troca de nutrientes.",
      "C": "[INCORRETA] Lacunas são os espaços onde residem os osteócitos.",
      "D": "[CORRETA] Os **canais de Volkmann** garantem a comunicação vascular transversal no osso compacto."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf1_a5 adicionadas.`);
