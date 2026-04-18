import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3249,
    "materia": "pmh",
    "aula_id": "pmh_a10",
    "tema": "pmh_a10",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O metabolismo de aminoácidos gera amônia (NH3), uma substância altamente tóxica para o cérebro. Qual o principal produto, solúvel e atóxico, em que o fígado transforma a amônia para ser excretada pelos rins em grandes quantidades?",
    "opcoes": [
      "A) Ácido Úrico.",
      "B) Ureia.",
      "C) Creatinina.",
      "D) Acetil-CoA."
    ],
    "explicacao_geral": "O ciclo da ureia é a principal via de desintoxicação de nitrogênio em mamíferos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ácido úrico é o produto final do metabolismo de nucleotídeos (purinas).",
      "B": "[CORRETA] A **Ureia** é o destino final do nitrogênio dos aminoácidos no corpo humano.",
      "C": "[INCORRETA] Deriva do metabolismo da fosfocreatina muscular.",
      "D": "[INCORRETA] É um intermediário energético, não um resíduo nitrogenado."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3250,
    "materia": "pmh",
    "aula_id": "pmh_a10",
    "tema": "pmh_a10",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "As transaminases (AST e ALT) são marcadores de lesão hepática. Qual vitamina atua como um cofator indispensável para todas as reações de transaminação no corpo?",
    "opcoes": [
      "A) Vitamina B1 (Tiamina).",
      "B) Vitamina B12 (Cobalamina).",
      "C) Ácido Fólico (B9).",
      "D) Vitamina B6 (Piridoxina/Fosfato de Piridoxal)."
    ],
    "explicacao_geral": "Sem o fosfato de piridoxal, o grupo amina não pode ser transferido de um aminoácido para um cetoácido.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Atua em descarboxilações oxidativas (PDH).",
      "B": "[INCORRETA] Atua no metabolismo de ácidos graxos e DNA.",
      "C": "[INCORRETA] Envolvido na síntese de bases nitrogenadas.",
      "D": "[CORRETA] O **Fosfato de Piridoxal (B6)** é o cofator universal das **transaminases**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3251,
    "materia": "pmh",
    "aula_id": "pmh_a10",
    "tema": "pmh_a10",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Um paciente cirrótico apresenta-se desorientado, com confusão mental e tremores nas mãos (asterixe). O médico diagnostica encefalopatia hepática. Bioquimicamente, qual o motivo da toxicidade da amônia no sistema nervoso central?",
    "opcoes": [
      "A) Desvio do alfa-cetoglutarato para a formação de glutamato/glutamina, paralisando o Ciclo de Krebs nos neurônios.",
      "B) Bloqueio direto da entrada de oxigênio nos pulmões.",
      "C) Destruição física das membranas dos neurônios por corrosão química.",
      "D) A amônia se transforma em glicose pura dentro do cérebro, causando coma diabético."
    ],
    "explicacao_geral": "O excesso de amônia 'sequestra' intermediários do metabolismo energético mitocondrial neuronais.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A alta amônia consome **alfa-cetoglutarato**, o que interrompe a produção de ATP no cérebro por falha no **Ciclo de Krebs**.",
      "B": "[INCORRETA] A amônia atua no cérebro, não na ventilação pulmonar.",
      "C": "[INCORRETA] A toxicidade é metabólica e funcional, não corrosiva anatômica.",
      "D": "[INCORRETA] Amônia nunca se transforma em glicose."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3252,
    "materia": "pmh",
    "aula_id": "pmh_a10",
    "tema": "pmh_a10",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Qual a diferença clínica importante na interpretação laboratorial de ALT (TGP) e AST (TGO)?),",
    "opcoes": [
      "A) AST é exclusiva do fígado.",
      "B) ALT é mais específica para o fígado, enquanto a AST está presente também no coração e músculos.",
      "C) Ambas são exclusivas do rim.",
      "D) O valor de AST nunca aumenta em doenças do fígado."
    ],
    "explicacao_geral": "Embora ambas aumentem na hepatite, o aumento isolado da AST sugere outro foco de lesão tecidual.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] ALT é a mais específica.",
      "B": "[CORRETA] A **ALT (TGP)** é o marcador mais fiel da integridade do **hepatócito**.",
      "C": "[INCORRETA] São enzimas de perfil hepático/muscular.",
      "D": "[INCORRETA] A AST aumenta na hepatite, às vezes proporcionalmente à ALT."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3253,
    "materia": "pmh",
    "aula_id": "pmh_a10",
    "tema": "pmh_a10",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "A deficiência de Ornitina Transcarbamoilase (OTC) é o defeito enzimático mais comum do ciclo da ureia. Qual o padrão de herança genética desta enzima?",
    "opcoes": [
      "A) Autossômica Recessiva.",
      "B) Herança Mitocondrial.",
      "C) Herança Ligada ao X.",
      "D) Dominante com penetrância incompleta."
    ],
    "explicacao_geral": "Diferente da maioria dos defeitos metabólicos, a OTC não é autossômica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A maioria das outras enzimas do ciclo são autossômicas recessivas.",
      "B": "[INCORRETA] A enzima está na mitocôndria mas o gene está no núcleo.",
      "C": "[CORRETA] A **OTC** tem padrão de herança **Ligada ao X**, afetando mais severamente os meninos.",
      "D": "[INCORRETA] Não é o padrão descrito."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3254,
    "materia": "pmh",
    "aula_id": "pmh_a10",
    "tema": "pmh_a10",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Durante o jejum prolongado, o músculo degrada proteínas para fornecer energia. Parte desse nitrogênio é transportado até o fígado por um aminoácido que serve de precursor para a gliconeogênese. Qual é esse transportador?),",
    "opcoes": [
      "A) Leucina.",
      "B) Triptofano.",
      "C) Prolina.",
      "D) Alanina."
    ],
    "explicacao_geral": "O Ciclo da Alanina (Ciclo de Cahill) interconecta o metabolismo proteico muscular com a produção de glicose hepática.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] É um aminoácido cetogênico, não precursor de glicose no fígado.",
      "B": "[INCORRETA] Aminoácido essencial, mas não o principal transportador de nitrogênio do jejum.",
      "C": "[INCORRETA] Aminoácido estrutural do colágeno.",
      "D": "[CORRETA] A **Alanina** é o principal elo entre o **músculo** e o **fígado** no jejum."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3255,
    "materia": "pmh",
    "aula_id": "pmh_a10",
    "tema": "pmh_a10",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Um recém-nascido de 3 dias de vida apresenta vômitos, letargia intensa e dosagem de amônia altíssima (800 µmol/L). O médico suspeita de um erro inato do ciclo da ureia. Qual é a reação inicial 'marcapasso' desse ciclo que ocorre dentro da mitocôndria e consome ATP?),",
    "opcoes": [
      "A) Formação do Carbamoil-Fosfato.",
      "B) Divisão da Arginina em Ureia e Ornitina.",
      "C) Síntese de Citrulina.",
      "D) Oxidação do Glutamato."
    ],
    "explicacao_geral": "A enzima Carbamoil-fosfato sintetase I (CPSI) é o ponto de entrada e controle do ciclo.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A síntese de **Carbamoil-Fosfato** pela CPSI é a etapa inicial e limitante do ciclo.",
      "B": "[INCORRETA] Esta é a etapa final, realizada pela arginase.",
      "C": "[INCORRETA] Segunda etapa do ciclo.",
      "D": "[INCORRETA] Esta etapa libera amônia para o ciclo, mas não faz parte dele propriamente dito."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3256,
    "materia": "pmh",
    "aula_id": "pmh_a10",
    "tema": "pmh_a10",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Pacientes com encefalopatia hepática frequentemente recebem 'Lactulose' para diminuir a absorção de amônia no intestino. Qual o mecanismo de ação deste medicamento nestes casos?",
    "opcoes": [
      "A) Inibir as enzimas pancreáticas.",
      "B) Destruir fisicamente as bactérias do cólon por radiação.",
      "C) Acidificar o meio intestinal, transformando a amônia (NH3) em íon amônio (NH4+) que não é absorvido.",
      "D) Aumentar a síntese de ureia diretamente nas bactérias intestinais."
    ],
    "explicacao_geral": "A lactulose é um laxante osmótico que acidifica o pH fecal por ação bacteriana benéfica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Não afeta enzimas digestivas.",
      "B": "[INCORRETA] Não é radiação; é ação farmacológica química.",
      "C": "[CORRETA] O pH ácido 'aprisiona' o nitrogênio na forma de **íon amônio (NH4+)**, impedindo sua passagem para o sangue.",
      "D": "[INCORRETA] Bactérias não fazem ciclo da ureia humano."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula pmh_a10 adicionadas.`);
