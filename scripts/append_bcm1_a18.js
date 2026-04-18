import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3569,
    "materia": "bcm1",
    "aula_id": "bcm1_a18",
    "tema": "bcm1_a18",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A transcrição é o processo de síntese de RNA a partir de um molde de DNA. Qual enzima é a principal responsável pela síntese do RNA mensageiro (RNAm) em células humanas?),",
    "opcoes": [
      "A) DNA Polimerase.",
      "B) RNA Polimerase II.",
      "C) Helicase.",
      "D) Ribossomo."
    ],
    "explicacao_geral": "Diferentes RNA polimerases (I, II, III) sintetizam diferentes tipos de RNA nos eucariotos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sintetiza o DNA na replicação.",
      "B": "[CORRETA] A **RNA Polimerase II** é especializada na **transcrição de genes** que codificam proteínas.",
      "C": "[INCORRETA] Abre a dupla hélice.",
      "D": "[INCORRETA] Realiza a tradução no citoplasma, não a transcrição no núcleo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3570,
    "materia": "bcm1",
    "aula_id": "bcm1_a18",
    "tema": "bcm1_a18",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "Qual a principal diferença química entre o DNA e o RNA?),",
    "opcoes": [
      "A) O DNA usa Uracila e o RNA usa Timina.",
      "B) O DNA possui 3 fitas e o RNA possui 4.",
      "C) O RNA possui o açúcar Ribose e a base nitrogenada Uracila (em vez de Timina); o DNA possui Desoxirribose.",
      "D) O RNA nunca pode sair do núcleo."
    ],
    "explicacao_geral": "A presença do oxigênio na ribose torna o RNA mais instável que o DNA.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] É o contrário.",
      "B": "[INCORRETA] DNA é dupla-fita; RNA é geralmente fita-única.",
      "C": "[CORRETA] A **Ribose e a Uracila** são as marcas químicas do **RNA**.",
      "D": "[INCORRETA] O RNAm é exportado para o citoplasma para ser traduzido."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3571,
    "materia": "bcm1",
    "aula_id": "bcm1_a18",
    "tema": "bcm1_a18",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O RNA mensageiro recém-sintetizado (pré-RNAm) precisa passar por processamento antes de ir ao citoplasma. Qual o objetivo da adição do 'Cap 5' e da 'Cauda Poli-A'?),",
    "opcoes": [
      "A) Transformar o RNA em proteína.",
      "B) Mudar o código genético.",
      "C) Digerir o RNA desnecessário.",
      "D) Aumentar a estabilidade do RNAm, protegendo-o da degradação por nucleases e facilitando a exportação nuclear e início da tradução."
    ],
    "explicacao_geral": "Sem essas modificações, o RNA seria rapidamente destruído por enzimas citoplasmáticas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Tradução faz isso.",
      "B": "[INCORRETA] O código (sequência de bases) permanece o mesmo.",
      "C": "[INCORRETA] Isso é feito pelo splicing ou degradação seletiva.",
      "D": "[CORRETA] O **Cap e a Cauda Poli-A** garantem a **vida útil do RNAm**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3572,
    "materia": "bcm1",
    "aula_id": "bcm1_a18",
    "tema": "bcm1_a18",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O 'Splicing' é a remoção de sequências não codificantes do pré-RNAm. Como chamamos as sequencias que são removidas e as que permanecem, respectivamente?),",
    "opcoes": [
      "A) Íntrons (removidos) e Éxons (codificantes - permanecem).",
      "B) Éxons (removidos) e Íntrons (permanecem).",
      "C) Genes (removidos) e Proteínas (permanecem).",
      "D) Ambas são removidas."
    ],
    "explicacao_geral": "Os íntrons 'interrompem' o código; os éxons são os que 'expressam' a informação.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] **Íntrons ficam de FORA; Éxons ficam de DENTRO** da molécula final.",
      "B": "[INCORRETA] Termos invertidos.",
      "C": "[INCORRETA] Confusão de níveis de organização genética.",
      "D": "[INCORRETA] O RNA final é composto pelos éxons unidos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3573,
    "materia": "bcm1",
    "aula_id": "bcm1_a18",
    "tema": "bcm1_a18",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "O 'Splicing Alternativo' permite que a célula produza diferentes proteínas a partir de um único gene. Como isso é possível?),",
    "opcoes": [
      "A) Mudando a sequência do DNA original no núcleo.",
      "B) Selecionando diferentes combinações de éxons para compor o RNAm final maduro, dependendo do tipo celular ou estímulo recebido.",
      "C) Usando dois ribossomos ao mesmo tempo.",
      "D) Transformando RNA em DNA reversamente."
    ],
    "explicacao_geral": "Este fenômeno explica por que seres humanos têm cerca de 20.000 genes mas centenas de milhares de proteínas diferentes.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O DNA daquela célula permanece constante (via de regra).",
      "B": "[CORRETA] O **Splicing Alternativo** é a base da **variabilidade proteica** eucariótica.",
      "C": "[INCORRETA] Polirribossomos aumentam a velocidade, não a diversidade da sequência proteica.",
      "D": "[INCORRETA] Função de retrovírus, não explica a diversidade de secreção/proteínas normais."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3574,
    "materia": "bcm1",
    "aula_id": "bcm1_a18",
    "tema": "bcm1_a18",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Certas toxinas de cogumelos (como a Alfa-amanitina) bloqueiam especificamente a RNA Polimerase II. Qual a consequência imediata para a célula?),",
    "opcoes": [
      "A) Explodir na mesma hora.",
      "B) O DNA derreter.",
      "C) Parada imediata da produção de energia por mitocôndria.",
      "D) Cessação da produção de novos mensageiros (RNAm), impedindo a síntese de proteínas essenciais e levando à morte celular e falência de órgãos (como o fígado)."
    ],
    "explicacao_geral": "Sem novos RNAm, a célula consome as proteínas existentes e para de funcionar (asfixia informacional).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O efeito é gradual (horas/dias) até o esgotamento proteico.",
      "B": "[INCORRETA] O DNA permanece lá, mas não consegue ser 'lido'.",
      "C": "[INCORRETA] As mitocôndrias continuam gerando ATP enquanto houver substrato, mas a célula colapsa por falta de renovação proteica.",
      "D": "[CORRETA] A **Alfa-amanitina** é um veneno letal que trava o **sistema de cópia gênica**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3575,
    "materia": "bcm1",
    "aula_id": "bcm1_a18",
    "tema": "bcm1_a18",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "O promotor é uma sequência de DNA que não codifica proteína, mas é crucial. O que ocorre nesta região?),",
    "opcoes": [
      "A) É onde a proteína é destruída.",
      "B) É onde o ribossomo se liga.",
      "C) É o local onde os fatores de transcrição e a RNA Polimerase se ligam para iniciar o processo de transcrição (Ex: TATA Box).",
      "D) É onde o DNA morre."
    ],
    "explicacao_geral": "Mutações no promotor podem causar doenças por falta de expressão genética, mesmo com o gene intacto.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ocorre no proteassoma/lisossomo.",
      "B": "[INCORRETA] Ribossomos ligam-se ao RNAm no citoplasma.",
      "C": "[CORRETA] O **Promotor** é o 'botão de ligar' da **transcrição**.",
      "D": "[INCORRETA] Termo sem fundamento."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3576,
    "materia": "bcm1",
    "aula_id": "bcm1_a18",
    "tema": "bcm1_a18",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A 'Atrofia Muscular Espinhal' (AME) está ligada a um erro no splicing do gene SMN2, onde um éxon crucial é removido por engano, gerando uma proteína não funcional. O uso de medicamentos como o Nusinersen (Spinraza) visa:),",
    "opcoes": [
      "A) Modular o processo de splicing para forçar a inclusão do éxon faltante, restaurando a funcionalidade da proteína SMN.",
      "B) Substituir o sangue do paciente.",
      "C) Queimar a gordura do músculo.",
      "D) Dar choques elétricos nos neurônios."
    ],
    "explicacao_geral": "Trata-se de uma terapia com oligonucleotídeos antisense (ASO) que alteram o processamento do RNA.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A terapia gênica/RNA modernizou o tratamento da **AME** via controle do **splicing**.",
      "B": "[INCORRETA] Não resolve o defeito molecular genético.",
      "C": "[INCORRETA] Não é um problema de obesidade ou reserva energética.",
      "D": "[INCORRETA] Sem benefício reparador molecular."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bcm1_a18 adicionadas.`);
