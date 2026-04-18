import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3473,
    "materia": "bcm1",
    "aula_id": "bcm1_a6",
    "tema": "bcm1_a6",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "O modelo aceito para descrever a estrutura da membrana plasmática é o 'Modelo do Mosaico Fluido'. O que o termo 'mosaico' representa nesta analogia?),",
    "opcoes": [
      "A) A distribuição heterogênea de diversas proteínas inseridas ou ligadas à bicamada lipídica.",
      "B) O fato de a membrana ser feita de vidro colorido.",
      "C) A rigidez da membrana, que impede qualquer movimento.",
      "D) A presença exclusiva de carboidratos na face interna."
    ],
    "explicacao_geral": "A membrana é um 'mar' de lipídios com 'ilhas' de proteínas e carboidratos.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **mosaico** refere-se à variedade de **proteínas e lipídios** que compõem a membrana.",
      "B": "[INCORRETA] Analogia artística, não literal.",
      "C": "[INCORRETA] O termo 'fluido' indica exatamente o oposto da rigidez.",
      "D": "[INCORRETA] O glicocálix (carboidratos) fica na face externa."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3474,
    "materia": "bcm1",
    "aula_id": "bcm1_a6",
    "tema": "bcm1_a6",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "Qual o papel principal do Colesterol presente nas membranas plasmáticas das células animais?),",
    "opcoes": [
      "A) Destruir a célula.",
      "B) Armazenar material genético.",
      "C) Regular a fluidez da membrana, impedindo que ela se torne excessivamente fluida ou rígida demais em diferentes temperaturas.",
      "D) Produzir energia (ATP) para a célula."
    ],
    "explicacao_geral": "O colesterol estabiliza os fosfolipídios, mantendo a integridade da barreira.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O colesterol é essencial para a vida celular.",
      "B": "[INCORRETA] Função do núcleo.",
      "C": "[CORRETA] O **colesterol** atua como um **amortecedor de fluidez**.",
      "D": "[INCORRETA] Função da mitocôndria."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3475,
    "materia": "bcm1",
    "aula_id": "bcm1_a6",
    "tema": "bcm1_a6",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O 'Glicocálix' é uma camada de carboidratos ligada a proteínas e lipídios na face externa da membrana. Qual a sua função principal na imunologia e no reconhecimento celular?),",
    "opcoes": [
      "A) Filtrar a entrada de luz na célula.",
      "B) Permitir que a célula se mova como um peixe.",
      "C) Digerir bactérias externas.",
      "D) Atuar no reconhecimento celular (identidade da célula) e proteção contra danos mecânicos e químicos."
    ],
    "explicacao_geral": "O glicocálix funciona como uma 'impressão digital' da célula.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sem correlação óptica.",
      "B": "[INCORRETA] Função do citoesqueleto.",
      "C": "[INCORRETA] Função de proteínas de defesa ou lisossomos.",
      "D": "[CORRETA] O **Glicocálix** é vital para a **adesão** e **comunicação** célula-célula."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3476,
    "materia": "bcm1",
    "aula_id": "bcm1_a6",
    "tema": "bcm1_a6",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Um fármaco hidrofóbico (lipossolúvel) consegue atravessar a membrana plasmática muito mais facilmente que um fármaco hidrofílico carregado. Por que isso ocorre?),",
    "opcoes": [
      "A) Porque as proteínas da membrana expulsam a água.",
      "B) Devido ao núcleo apolar da bicamada lipídica (caudas dos fosfolipídios), que barram substâncias polares mas permitem a passagem de moléculas lipídicas.",
      "C) Porque a membrana tem buracos por onde a gordura passa.",
      "D) Porque a glicose puxa o fármaco para dentro."
    ],
    "explicacao_geral": "A permeabilidade seletiva é ditada pela natureza química da bicamada.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] As aquaporinas facilitam a passagem de água, mas não definem a passagem de fármacos por esse motivo.",
      "B": "[CORRETA] O **centro hidrofóbico** da membrana é uma barreira para **moléculas polares/carregadas**.",
      "C": "[INCORRETA] A membrana é contínua e íntegra.",
      "D": "[INCORRETA] A glicose precisa de transportadores (GLUT) para entrar."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3477,
    "materia": "bcm1",
    "aula_id": "bcm1_a6",
    "tema": "bcm1_a6",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "As Proteínas Integrais de Membrana (transmembrana) possuem domínios que atravessam a bicamada. Qual a característica química esperada dos aminoácidos que ficam em contato direto com as caudas dos fosfolipídios?),",
    "opcoes": [
      "A) Aminoácidos Hidrofóbicos (Não-polares).",
      "B) Aminoácidos Hidrofílicos (Carregados positivamente).",
      "C) Aminoácidos de natureza ácida apenas.",
      "D) Aminoácidos que se dissolvem em água facilmente."
    ],
    "explicacao_geral": "O domínio transmembrana deve 'sentir-se em casa' no ambiente gorduroso da membrana.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Somente **aminoácidos hidrofóbicos** conseguem se estabilizar no **centro lipídico**.",
      "B": "[INCORRETA] Seriam repelidos pelas caudas apolares.",
      "C": "[INCORRETA] Resíduos ácidos são polares/carregados.",
      "D": "[INCORRETA] Estes domínios seriam instáveis no interior da membrana."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3478,
    "materia": "bcm1",
    "aula_id": "bcm1_a6",
    "tema": "bcm1_a6",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O teste de FRAP (Ferramenta de Recuperação de Fluorescência após Fotobranqueamento) provou qual aspecto fundamental da biologia de membranas?),",
    "opcoes": [
      "A) Que a membrana é rígida como metal.",
      "B) Que as proteínas nunca mudam de lugar.",
      "C) Que os componentes da membrana (lipídios e proteínas) possuem difusão lateral (movimentam-se pelo plano da membrana).",
      "D) Que a membrana brilha no escuro naturalmente."
    ],
    "explicacao_geral": "O FRAP mostrou que áreas 'apagadas' por laser são preenchidas por moléculas vizinhas que migram para lá.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O FRAP prova o oposto.",
      "B": "[INCORRETA] Quase todas as proteínas se difundem, a menos que ancoradas ao citoesqueleto.",
      "C": "[CORRETA] O **FRAP** confirmou a **fluidez** do modelo do mosaico fluido.",
      "D": "[INCORRETA] O brilho vem do corante fluorescente adicionado pelo pesquisador."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3479,
    "materia": "bcm1",
    "aula_id": "bcm1_a6",
    "tema": "bcm1_a6",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Certas regiões da membrana são ricas em colesterol e esfingolipídios, formando microdomínios mais rígidos e espessos que servem como plataformas para sinalização celular. Qual o nome dessas estruturas?),",
    "opcoes": [
      "A) Desmossomos.",
      "B) 'Lipid Rafts' (Balsas Lipídicas).",
      "C) Ribossomos de membrana.",
      "D) Canais de Sódio."
    ],
    "explicacao_geral": "As balsas lipídicas organizam as proteínas receptoras para facilitar a sinalização.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Junções de ancoragem celular.",
      "B": "[CORRETA] As **Balsas Lipídicas** são domínios de **especialização funcional** na membrana.",
      "C": "[INCORRETA] Ribossomos ficam no citoplasma ou RE rugoso.",
      "D": "[INCORRETA] Proteínas transmembrana específicas, não microdomínios lipídicos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3480,
    "materia": "bcm1",
    "aula_id": "bcm1_a6",
    "tema": "bcm1_a6",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A 'Assimetria de Membrana' significa que as faces interna e externa possuem composições lipídicas e proteicas diferentes. Qual a relevância clínica de encontrar 'Fosfatidilserina' (normalmente interna) exposta na face EXTERNA da célula?),",
    "opcoes": [
      "A) Indica que a célula está com excesso de energia.",
      "B) Indica que a célula está se dividindo rapidamente.",
      "C) Indica que a célula é jovem e saudável.",
      "D) É um sinal de 'Coma-me' para os macrófagos, indicando que a célula está entrando em morte celular (Apoptose)."
    ],
    "explicacao_geral": "A exposição de lipídios da face interna no exterior é um marcador de estresse ou falência celular.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sem correlação.",
      "B": "[INCORRETA] A cicatrização/divisão não exige essa sinalização de morte.",
      "C": "[INCORRETA] Células saudáveis mantêm a assimetria rigorosamente.",
      "D": "[CORRETA] A **exposição da fosfatidilserina** é um marcador precoce de **Apoptose**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bcm1_a6 adicionadas.`);
