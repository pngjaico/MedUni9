import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3465,
    "materia": "bcm1",
    "aula_id": "bcm1_a5",
    "tema": "bcm1_a5",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "As enzimas são catalisadores biológicos. Como elas conseguem aumentar a velocidade de uma reação química na célula?),",
    "opcoes": [
      "A) Aumentando a temperatura da célula para 100°C.",
      "B) Diminuindo a energia de ativação necessária para que a reação ocorra.",
      "C) Mudando a cor dos reagentes.",
      "D) Consumindo-se durante a reação e virando o produto final."
    ],
    "explicacao_geral": "As enzimas facilitam a formação do estado de transição entre reagente e produto.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Aumentar a temperatura a esse nível mataria a célula.",
      "B": "[CORRETA] Reduzir a **energia de ativação** é o mecanismo fundamental da **catálise enzimática**.",
      "C": "[INCORRETA] A cor é irrelevante para a cinética química.",
      "D": "[INCORRETA] Enzimas não são consumidas; elas saem ilesas da reação e podem ser reutilizadas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3466,
    "materia": "bcm1",
    "aula_id": "bcm1_a5",
    "tema": "bcm1_a5",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual o nome da região específica da enzima onde o substrato se liga e a reação química é catalisada?),",
    "opcoes": [
      "A) Núcleo enzimático.",
      "B) Cauda de poli-A.",
      "C) Membrana externa.",
      "D) Sítio Ativo."
    ],
    "explicacao_geral": "O sítio ativo é uma fenda ou cavidade com propriedades químicas específicas para um substrato.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Termo inexistente.",
      "B": "[INCORRETA] Estrutura do RNA mensageiro.",
      "C": "[INCORRETA] Referência a organelas, não enzimas isoladas.",
      "D": "[CORRETA] O **Sítio Ativo** garante a **especificidade** da enzima."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3467,
    "materia": "bcm1",
    "aula_id": "bcm1_a5",
    "tema": "bcm1_a5",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A pepsina é uma enzima digestiva do estômago que atua em pH ácido (cerca de 2,0). Se essa enzima for para o intestino delgado (onde o pH é básico, cerca de 8,0), o que acontecerá?),",
    "opcoes": [
      "A) Ela perderá sua atividade catalítica devido à desnaturação causada pela mudança drástica de pH.",
      "B) Ela digerirá o intestino com mais força.",
      "C) Ela se transformará em gordura.",
      "D) Ela funcionará perfeitamente, pois enzimas ignoram o ambiente."
    ],
    "explicacao_geral": "Cada enzima possui um pH ótimo de atuação e é inativada fora dele.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **pH extremo** altera as cargas elétricas e a **forma da enzima**.",
      "B": "[INCORRETA] Outras enzimas (como a tripsina) atuam no intestino básico.",
      "C": "[INCORRETA] Enzimas são proteínas.",
      "D": "[INCORRETA] Enzimas são extremamente sensíveis ao ambiente (pH e temperatura)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3468,
    "materia": "bcm1",
    "aula_id": "bcm1_a5",
    "tema": "bcm1_a5",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Na cinética enzimática de Michaelis-Menten, o valor de Km (Constante de Michaelis) é um parâmetro importante. O que um Km BAIXO indica sobre uma enzima?),",
    "opcoes": [
      "A) Que a enzima é muito lenta.",
      "B) Que a enzima está quebrada.",
      "C) Que a enzima tem alta afinidade pelo seu substrato (precisa de pouca concentração para atingir metade da velocidade máxima).",
      "D) Que a enzima não precisa de substrato."
    ],
    "explicacao_geral": "Km é a concentração de substrato necessária para atingir 1/2 da Vmax.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Velocidade é medida pela Vmax e Kcat.",
      "B": "[INCORRETA] Km é uma característica intrínseca funcional da enzima estável.",
      "C": "[CORRETA] **Km baixo = Alta afinidade**. É uma relação inversamente proporcional.",
      "D": "[INCORRETA] Toda enzima depende de substrato para agir."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3469,
    "materia": "bcm1",
    "aula_id": "bcm1_a5",
    "tema": "bcm1_a5",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Muitos medicamentos agem como inibidores enzimáticos. Se um inibidor se liga ao SÍTIO ATIVO da enzima, impedindo a ligação do substrato real, mas pode ser 'vencido' se aumentarmos muito a dose do substrato, que tipo de inibição é esta?),",
    "opcoes": [
      "A) Inibição Irreversível.",
      "B) Inibição Competitiva.",
      "C) Inibição Alostérica.",
      "D) Inibição Não-competitiva."
    ],
    "explicacao_geral": "Inibidores competitivos 'competem' pelo mesmo lugar (o sítio ativo).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Inibidores irreversíveis ligam-se por pontes covalentes e não saem da enzima.",
      "B": "[CORRETA] A **Inibição Competitiva** aumenta o Km aparente mas mantém a Vmax inalterada.",
      "C": "[INCORRETA] Ocorre em sítios diferentes do sítio ativo.",
      "D": "[INCORRETA] Não é revertida pelo aumento do substrato, pois o inibidor não ocupa o sítio ativo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3470,
    "materia": "bcm1",
    "aula_id": "bcm1_a5",
    "tema": "bcm1_a5",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Certas enzimas precisam de componentes não-proteicos para funcionar, como vitaminas do complexo B ou íons metálicos. Qual o nome dado a esse componente não-proteico orgânico?),",
    "opcoes": [
      "A) Catalisador.",
      "B) Resíduo.",
      "C) Substrato secundário.",
      "D) Coenzima (ou Cofator se for inorgânico)."
    ],
    "explicacao_geral": "A enzima completa e ativa com seu cofator é chamada de Holoenzima.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A enzima toda é o catalisador.",
      "B": "[INCORRETA] Resíduos são as cadeias laterais de aminoácidos.",
      "C": "[INCORRETA] O substrato é o que será transformado.",
      "D": "[CORRETA] **Coenzimas** (orgânicas/vitaminas) e **Cofatores** (íons) são ajudantes essenciais."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3471,
    "materia": "bcm1",
    "aula_id": "bcm1_a5",
    "tema": "bcm1_a5",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A 'Inibição por Retroalimentação' (Feedback Inhibition) é um mecanismo de controle metabólico. Como ela funciona?),",
    "opcoes": [
      "A) O produto final de uma via metabólica inibe uma enzima do início daquela mesma via quando em alta concentração.",
      "B) O médico deve dar um feedback para a enzima para ela trabalhar mais.",
      "C) A enzima se autodestrói quando termina de trabalhar.",
      "D) O DNA impede a síntese de proteínas novas."
    ],
    "explicacao_geral": "Isso evita o desperdício de energia e matéria-prima quando a célula já tem produto suficiente.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Feedback Negativo** mantém o equilíbrio das vias metabólicas celulares.",
      "B": "[INCORRETA] Piada sem fundamento biológico.",
      "C": "[INCORRETA] Enzimas são recicladas ou degradadas de forma regulada pelo proteassoma.",
      "D": "[INCORRETA] Ocorre em nível de atividade enzimática, não necessariamente de transcrição gênica imediata."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3472,
    "materia": "bcm1",
    "aula_id": "bcm1_a5",
    "tema": "bcm1_a5",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Um paciente ingere álcool metílico (metanol) por acidente, o que é tóxico. O tratamento hospitalar envolve a administração de álcool etílico (etanol), que tem maior afinidade pela mesma enzima (Álcool Desidrogenase) que metaboliza o metanol. Esse é um exemplo clínico de:),",
    "opcoes": [
      "A) Ingestão de veneno com veneno.",
      "B) Inibição Competitiva usada como tratamento (Antídoto).",
      "C) Desnaturação enzimática intencional.",
      "D) Reação de síntese desidratada."
    ],
    "explicacao_geral": "O etanol 'ganha' a vaga na enzima, impedindo que o metanol seja transformado em ácido fórmico (tóxico).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O etanol é menos tóxico que os subprodutos do metanol.",
      "B": "[CORRETA] A **competição pelo sítio ativo** evita a produção de metabólitos fatais.",
      "C": "[INCORRETA] Nenhuma enzima é desnaturada, apenas ocupada.",
      "D": "[INCORRETA] É uma reação de desidrogenação (oxidação)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bcm1_a5 adicionadas.`);
