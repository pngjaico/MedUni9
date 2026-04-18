import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3185,
    "materia": "pmh",
    "aula_id": "pmh_a2",
    "tema": "pmh_a2",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "As enzimas são catalisadores biológicos fundamentais para o metabolismo. Qual a principal função de uma enzima em uma reação química?",
    "opcoes": [
      "A) Diminuir a energia de ativação da reação.",
      "B) Alterar o ΔG final da reação, tornando-a espontânea.",
      "C) Aumentar a temperatura do sistema celular.",
      "D) Consumir-se durante o processo para gerar produtos."
    ],
    "explicacao_geral": "As enzimas aceleram reações que já ocorreriam, mas em velocidade insuficiente para a vida.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **energia de ativação** é a barreira que a enzima reduz para acelerar a reação.",
      "B": "[INCORRETA] Enzimas não alteram a termodinâmica (ΔG), apenas a cinética (velocidade).",
      "C": "[INCORRETA] O aumento da temperatura pode desnaturar a enzima; ela atua em temperatura constante.",
      "D": "[INCORRETA] As enzimas não são consumidas; elas saem intactas da reação."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3186,
    "materia": "pmh",
    "aula_id": "pmh_a2",
    "tema": "pmh_a2",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Na cinética de Michaelis-Menten, o valor de Km (constante de Michaelis) é um parâmetro importante. O que um Km BAIXO indica sobre a relação entre enzima e substrato?",
    "opcoes": [
      "A) Baixa afinidade entre a enzima e o substrato.",
      "B) Alta afinidade entre a enzima e o substrato.",
      "C) Que a enzima está inibida irreversivelmente.",
      "D) Que a velocidade máxima da reação foi atingida."
    ],
    "explicacao_geral": "O Km corresponde à concentração de substrato necessária para atingir metade da velocidade máxima (Vmax/2).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Um Km alto indicaria baixa afinidade (precisa de muito substrato para reagir).",
      "B": "[CORRETA] **Km baixo** significa que a enzima atinge 50% da sua velocidade mesmo com pouco substrato disponível (**alta afinidade**).",
      "C": "[INCORRETA] Km é uma constante cinética, não um marcador de inibição per se.",
      "D": "[INCORRETA] Vmax é o parâmetro de velocidade máxima."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3187,
    "materia": "pmh",
    "aula_id": "pmh_a2",
    "tema": "pmh_a2",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente ingere metanol acidentalmente. O tratamento hospitalar envolve a administração de etanol, que compete pelo sítio ativo da enzima álcool desidrogenase, impedindo a formação de metabólitos tóxicos. Esse é um exemplo de qual tipo de inibição?",
    "opcoes": [
      "A) Inibição Irreversível.",
      "B) Inibição Não Competitiva.",
      "C) Inibição Alostérica.",
      "D) Inibição Competitiva."
    ],
    "explicacao_geral": "Inibidores competitivos assemelham-se ao substrato e disputam o mesmo local de ligação na enzima.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Inibições irreversíveis envolvem ligações covalentes permanentes (venenos).",
      "B": "[INCORRETA] Na não competitiva, o inibidor liga-se em local diferente do sítio ativo.",
      "C": "[INCORRETA] Regulação alostérica envolve moduladores em sítios distantes que alteram a conformação da enzima.",
      "D": "[CORRETA] Como o etanol e o metanol disputam o **sítio ativo**, trata-se de **inibição competitiva**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3188,
    "materia": "pmh",
    "aula_id": "pmh_a2",
    "tema": "pmh_a2",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "O envenenamento por organofosforados (inseticidas) ocorre porque essas substâncias se ligam covalentemente ao sítio ativo da acetilcolinesterase, inativando-a permanentemente. Esse mecanismo é classificado como:",
    "opcoes": [
      "A) Inibição Competitiva Reversível.",
      "B) Ativação Enzimática por Feedback.",
      "C) Inibição Irreversível ('Inibidores Suicidas').",
      "D) Modulação Alostérica Positiva."
    ],
    "explicacao_geral": "A ligação covalente impede que a enzima volte a funcionar, exigindo a síntese de novas moléculas enzimáticas pelo corpo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Inibições competitivas podem ser revertidas aumentando a concentração do substrato.",
      "B": "[INCORRETA] É um processo de inativação, não ativação.",
      "C": "[CORRETA] Os organofosforados são **inibidores irreversíveis**, causando intoxicação grave.",
      "D": "[INCORRETA] Moduladores positivos aumentam a atividade."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3189,
    "materia": "pmh",
    "aula_id": "pmh_a2",
    "tema": "pmh_a2",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A regulação por 'Feedback Negativo' (Retroalimentação negativa) é onipresente no metabolismo. Qual a sua função principal em uma via metabólica?",
    "opcoes": [
      "A) O produto final da via inibe a primeira enzima para evitar o acúmulo desnecessário.",
      "B) O primeiro substrato acelera a última enzima para terminar a reação mais rápido.",
      "C) Garantir que todas as reações ocorram na velocidade máxima permitida (Vmax).",
      "D) Degradar a enzima assim que o primeiro produto é formado."
    ],
    "explicacao_geral": "Este mecanismo permite a homeostase, ajustando a oferta de produtos à demanda celular.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **feedback negativo** economiza energia e precursores ao 'desligar' a via quando o produto já é suficiente.",
      "B": "[INCORRETA] Isso seria um tipo de ativação 'feedforward'.",
      "C": "[INCORRETA] A regulação justamente evita que a via rode em Vmax sem necessidade.",
      "D": "[INCORRETA] A regulação geralmente é via modulação da atividade, não destruição da proteína."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3190,
    "materia": "pmh",
    "aula_id": "pmh_a2",
    "tema": "pmh_a2",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "As vitaminas do complexo B são essenciais na dieta humana porque atuam frequentemente como:",
    "opcoes": [
      "A) Substratos energéticos diretos para a síntese de ATP.",
      "B) Precursores de coenzimas necessárias para a atividade enzimática.",
      "C) Hormônios que controlam o ciclo celular.",
      "D) Componentes estruturais das membranas plasmáticas."
    ],
    "explicacao_geral": "Muitas enzimas requerem componentes não proteicos (cofatores ou coenzimas) para catalisar reações.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Vitaminas não são 'queimadas' como combustível.",
      "B": "[CORRETA] Vitaminas como a B1 (Tiamina) ou B2 (Riboflavina) formam **coenzimas** vitais para o metabolismo oxidativo.",
      "C": "[INCORRETA] Vitaminas e hormônios são classes diferentes de moléculas sinalizadoras/reguladoras.",
      "D": "[INCORRETA] Membranas são compostas por fosfolipídios e proteínas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3191,
    "materia": "pmh",
    "aula_id": "pmh_a2",
    "tema": "pmh_a2",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "As 'Enzimas Alostéricas' apresentam uma curva de velocidade pelo substrato em formato sigmoide (S), ao contrário da curva hiperbólica clássica. O que esse formato indica?",
    "opcoes": [
      "A) Que a enzima obedece estritamente à cinética de Michaelis-Menten.",
      "B) Cooperatividade, onde a ligação do substrato facilita a ligação de outros substratos.",
      "C) Que a enzima é totalmente insensível a inibidores.",
      "D) Que a reação ocorre apenas no núcleo celular."
    ],
    "explicacao_geral": "A cooperatividade permite uma resposta muito mais sensível a pequenas variações na concentração de substrato.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A curva de Michaelis-Menten é hiperbólica.",
      "B": "[CORRETA] O formato **sigmoide** reflete a interação entre subunidades da enzima (**cooperatividade**).",
      "C": "[INCORRETA] Enzimas alostéricas são as mais reguláveis por inibidores e ativadores.",
      "D": "[INCORRETA] Localização celular não determina o formato da curva cinética."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3192,
    "materia": "pmh",
    "aula_id": "pmh_a2",
    "tema": "pmh_a2",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual o papel da 'Compartimentalização Celular' na regulação metabólica?",
    "opcoes": [
      "A) Impedir que o DNA saia do núcleo.",
      "B) Garantir que todas as células do corpo tenham o mesmo metabolismo.",
      "C) Destruir organelas envelhecidas através da apoptose.",
      "D) Separar vias catabólicas e anabólicas para evitar ciclos fúteis e permitir controle independente."
    ],
    "explicacao_geral": "Manter enzimas de síntese e degradação em compartimentos diferentes (ex: citosol vs mitocôndria) é uma estratégia de controle.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Embora seja uma função da carioteca, não é o foco da regulação metabólica clássica.",
      "B": "[INCORRETA] Células diferentes possuem metabolismos diferentes (especialização).",
      "C": "[INCORRETA] Autofagia é o processo de reciclagem de organelas.",
      "D": "[CORRETA] A **compartimentalização** permite que a célula sintetize e degrade moléculas simultaneamente de forma coordenada."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula pmh_a2 adicionadas.`);
