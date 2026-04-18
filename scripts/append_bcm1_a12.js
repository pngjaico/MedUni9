import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3521,
    "materia": "bcm1",
    "aula_id": "bcm1_a12",
    "tema": "bcm1_a12",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O Retículo Endoplasmático Rugoso (RER) recebe este nome devido à presença de quais estruturas em sua face citoplasmática?),",
    "opcoes": [
      "A) Mitocôndrias.",
      "B) Ribossomos.",
      "C) Lisossomos.",
      "D) Cristais de açúcar."
    ],
    "explicacao_geral": "Os ribossomos aderidos ao RER são os locais de síntese de proteínas de exportação ou membrana.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Organelas independentes.",
      "B": "[CORRETA] Os **ribossomos** conferem o aspecto **rugoso** ao microscópio eletrônico.",
      "C": "[INCORRETA] Organelas digestivas.",
      "D": "[INCORRETA] A glicosilação ocorre no interior, não como cristais externos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3522,
    "materia": "bcm1",
    "aula_id": "bcm1_a12",
    "tema": "bcm1_a12",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual a principal função do Retículo Endoplasmático Liso (REL) nas células hepáticas (fígado)?),",
    "opcoes": [
      "A) Produção de energia rápida (ATP).",
      "B) Tradução de RNA mensageiro.",
      "C) Digestão de bactérias invasoras.",
      "D) Síntese de lipídios e desintoxicação de substâncias (como fármacos e álcool) via citocromo P450."
    ],
    "explicacao_geral": "O REL é hiperatrofiado em células que processam esteroides ou substâncias tóxicas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Função mitocondrial.",
      "B": "[INCORRETA] Função do RER ou ribossomos livres.",
      "C": "[INCORRETA] Função lisossomal.",
      "D": "[CORRETA] O **REL** é o centro de **síntese lipídica e desintoxicação**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3523,
    "materia": "bcm1",
    "aula_id": "bcm1_a12",
    "tema": "bcm1_a12",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "As proteínas destinadas à secreção ou à membrana possuem uma 'Sequência Sinal' em sua extremidade N-terminal. Qual molécula reconhece essa sequência e leva o ribossomo até o RER?),",
    "opcoes": [
      "A) SRP (Partícula de Reconhecimento de Sinal).",
      "B) DNA polimerase.",
      "C) Hemoglobina.",
      "D) Insulina."
    ],
    "explicacao_geral": "A SRP pausa a tradução até que o complexo ribossomo-cadeia sinal se ancore no translocon do RE.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **SRP** é o 'guia' que endereça a proteína para o **Retículo Endoplasmático**.",
      "B": "[INCORRETA] Atua na replicação do DNA no núcleo.",
      "C": "[INCORRETA] Proteína de transporte de gases.",
      "D": "[INCORRETA] Hormônio produzido pelo pâncreas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3524,
    "materia": "bcm1",
    "aula_id": "bcm1_a12",
    "tema": "bcm1_a12",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "No músculo (células musculares), o retículo endoplasmático liso é altamente especializado e recebe o nome de Retículo Sarcoplasmático. Qual a sua função vital para a contração muscular?),",
    "opcoes": [
      "A) Produzir glicose.",
      "B) Quebrar gorduras.",
      "C) Armazenar e liberar íons Cálcio (Ca++) sob demanda elétrica.",
      "D) Secretar anticorpos no sangue."
    ],
    "explicacao_geral": "A liberação do cálcio no citoplasma permite o deslizamento das fibras de actina e miosina.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Processo metabólico citoplasmático/mitocondrial.",
      "B": "[INCORRETA] Ocorre na matriz mitocondrial (Beta-oxidação).",
      "C": "[CORRETA] O **Retículo Sarcoplasmático** é o reservatório de **Cálcio** do músculo.",
      "D": "[INCORRETA] Função dos plasmócitos (glóbulos brancos)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3525,
    "materia": "bcm1",
    "aula_id": "bcm1_a12",
    "tema": "bcm1_a12",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "O 'Estresse do Retículo' ocorre quando proteínas mal dobradas se acumulam em seu lúmen. Qual a resposta celular imediata para tentar resolver esse problema?),",
    "opcoes": [
      "A) Aumentar a síntese de todas as proteínas.",
      "B) Resposta de Proteínas Não Dobradas (UPR), que aumenta a produção de chaperonas e diminui a síntese proteica global temporariamente.",
      "C) Expulsar as proteínas mal dobradas para fora da célula imediatamente.",
      "D) Transformar o retículo rugoso em liso."
    ],
    "explicacao_geral": "Se a UPR falhar em restaurar o equilíbrio, a célula pode entrar em apoptose.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pioraria o congestionamento do RE.",
      "B": "[CORRETA] A **UPR** visa o controle de qualidade e a **sobrevivência celular** sob estresse.",
      "C": "[INCORRETA] Proteínas mal dobradas são retidas e enviadas para o proteassoma.",
      "D": "[INCORRETA] São organelas com funções distintas e especializadas."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3526,
    "materia": "bcm1",
    "aula_id": "bcm1_a12",
    "tema": "bcm1_a12",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Células produtoras de hormônios esteroides (como as glândulas adrenais e gônadas) apresentam qual organela muito mais desenvolvida que o normal?),",
    "opcoes": [
      "A) Lisossomos.",
      "B) Retículo Endoplasmático Rugoso.",
      "C) Mitocôndrias pequenas.",
      "D) Retículo Endoplasmático Liso (REL)."
    ],
    "explicacao_geral": "Hormônios esteroides são derivados do colesterol (lipídios), sintetizados no REL.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Focados em digestão celular.",
      "B": "[INCORRETA] Focados em proteínas (Ex: Pâncreas para insulina).",
      "C": "[INCORRETA] Mitocôndrias produzem energia necessária, mas não são o sítio de síntese lipídica steroidogênica.",
      "D": "[CORRETA] O **REL** é hipertrofiado em células que fabricam **esteroides**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3527,
    "materia": "bcm1",
    "aula_id": "bcm1_a12",
    "tema": "bcm1_a12",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A 'N-glicosilação' é a adição de oligossacarídeos a resíduos de asparagina das proteínas. Onde este processo se INICIA no sistema de endomembranas?),",
    "opcoes": [
      "A) No lúmen do Retículo Endoplasmático Rugoso.",
      "B) No exterior da célula.",
      "C) Dentro dos lisossomos.",
      "D) No núcleo."
    ],
    "explicacao_geral": "O refinamento da glicosilação ocorre no Golgi, mas a base é montada no RER.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **RER** inicia o processo de **glicosilação** proteica.",
      "B": "[INCORRETA] Processo interno estruturante.",
      "C": "[INCORRETA] Lisossomos removem açúcares por digestão, não os adicionam na síntese.",
      "D": "[INCORRETA] No núcleo ocorre a transcrição e processamento de RNA."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3528,
    "materia": "bcm1",
    "aula_id": "bcm1_a12",
    "tema": "bcm1_a12",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O alcoolismo crônico leva à tolerância ao etanol e também a outros medicamentos (Ex: anestésicos). Do ponto de vista celular, por que isso ocorre?),",
    "opcoes": [
      "A) Porque o cérebro congela.",
      "B) Porque as mitocôndrias morrem.",
      "C) Porque o uso crônico de drogas tóxicas induz a proliferação do REL e o aumento de enzimas detoxicantes (como o citocromo P450), facilitando a degradação de substâncias semelhantes.",
      "D) Porque o fígado para de funcionar imediatamente."
    ],
    "explicacao_geral": "A hiperplasia do REL é um mecanismo adaptativo frente ao consumo de xenobióticos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Metáfora popular, não realidade biológica.",
      "B": "[INCORRETA] Pode haver dano mitocondrial (cirrose), mas não explica a tolerância cruzada inicial.",
      "C": "[CORRETA] A **hipertrofia do REL** é a base celular para a **tolerância medicamentosa** e ao álcool.",
      "D": "[INCORRETA] A insuficiência é o estágio final da doença hepática, não o início da tolerância."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bcm1_a12 adicionadas.`);
