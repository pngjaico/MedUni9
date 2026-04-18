import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3617,
    "materia": "bmf2",
    "aula_id": "bmf2_a3",
    "tema": "bmf2_a3",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A hemodinâmica estuda os princípios físicos do fluxo sanguíneo. Qual a fórmula fundamental que relaciona Pressão Arterial (PA), Débito Cardíaco (DC) e Resistência Periférica Total (RPT)?),",
    "opcoes": [
      "A) PA = DC / RPT.",
      "B) PA = DC x RPT.",
      "C) PA = DC + RPT.",
      "D) PA = RPT - DC."
    ],
    "explicacao_geral": "A pressão arterial é o produto do volume ejetado e da dificuldade imposta pelos vasos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Relação matemática errada; se a resistência aumenta, a pressão sobe.",
      "B": "[CORRETA] **PA = DC x RPT** é o pilar da fisiologia cardiovascular.",
      "C": "[INCORRETA] Variáveis de unidades e naturezas físicas multiplicativas.",
      "D": "[INCORRETA] Inexistente."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3618,
    "materia": "bmf2",
    "aula_id": "bmf2_a3",
    "tema": "bmf2_a3",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "De acordo com a Lei de Poiseuille, qual variável tem o maior impacto sobre a resistência ao fluxo sanguíneo em um vaso?),",
    "opcoes": [
      "A) Comprimento do vaso.",
      "B) Viscosidade do sangue.",
      "C) Cor dos olhos do paciente.",
      "D) Raio do vaso (elevado à quarta potência)."
    ],
    "explicacao_geral": "Pequenas mudanças no raio geram grandes mudanças na resistência e no fluxo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Impacto linear, menos significativo que o raio.",
      "B": "[INCORRETA] Importante em policitemias, mas menos dinâmico que o raio.",
      "C": "[INCORRETA] Irrelevante.",
      "D": "[CORRETA] O **Raio do Vaso** é o principal determinante da **resistência vascular**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3619,
    "materia": "bmf2",
    "aula_id": "bmf2_a3",
    "tema": "bmf2_a3",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O 'Fluxo Turbulento' gera ruídos (como os sopros cardíacos). Qual parâmetro físico-químico é usado para prever a transição de fluxo laminar para turbulento?),",
    "opcoes": [
      "A) Número de Reynolds (Re).",
      "B) Velocidade da luz.",
      "C) pH sanguíneo.",
      "D) Temperatura corporal."
    ],
    "explicacao_geral": "Valores acima de 2000-3000 indicam alta probabilidade de turbulência.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Número de Reynolds** relaciona velocidade, diâmetro e viscosidade.",
      "B": "[INCORRETA] Hemodinâmica é sub-sônica e clássica.",
      "C": "[INCORRETA] Não define o padrão de fluxo mecânico.",
      "D": "[INCORRETA] Altera a viscosidade, mas o parâmetro de predição é o Re."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3620,
    "materia": "bmf2",
    "aula_id": "bmf2_a3",
    "tema": "bmf2_a3",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Embora a velocidade do sangue seja alta na aorta, ela cai drasticamente nos capilares. Por que isso ocorre fisiologicamente?),",
    "opcoes": [
      "A) Porque os capilares são muito estreitos.",
      "B) Porque o coração para de bater nos capilares.",
      "C) Devido à enorme área de secção transversal total de todos os capilares somados, o que reduz a velocidade para permitir as trocas gasosas.",
      "D) Porque o sangue gela na periferia."
    ],
    "explicacao_geral": "Velocidade é inversamente proporcional à área de secção transversal (V = Q / A).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Vasos individuais são estreitos, mas a área TOTAL é gigantesca.",
      "B": "[INCORRETA] O fluxo é contínuo em todo o circuito fechado.",
      "C": "[CORRETA] A **baixa velocidade nos capilares** é essencial para a **difusão de nutrientes**.",
      "D": "[INCORRETA] Termorregulação mantém a temperatura estável."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3621,
    "materia": "bmf2",
    "aula_id": "bmf2_a3",
    "tema": "bmf2_a3",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A 'Complacência Vascular' é a capacidade de um vaso expandir-se para acomodar volume. Qual o comportamento comparativo de veias e artérias?),",
    "opcoes": [
      "A) Artérias são muito mais complacentes que veias.",
      "B) Veias são muito mais complacentes (até 20x mais), funcionando como reservatórios de volume (capacitância).",
      "C) Ambas possuem complacência zero.",
      "D) As veias perdem complacência quando o coração bate rápido."
    ],
    "explicacao_geral": "Pequenas mudanças de pressão em veias geram grandes mudanças de volume.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Artérias são rígidas e elásticas (resistência).",
      "B": "[CORRETA] As **Veias** são os grandes **reservatórios de volume** do corpo devido à alta complacência.",
      "C": "[INCORRETA] Vasos biológicos são distensíveis.",
      "D": "[INCORRETA] Propriedade elástica/muscular intrínseca da parede venosa."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3622,
    "materia": "bmf2",
    "aula_id": "bmf2_a3",
    "tema": "bmf2_a3",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente em choque anafilático apresenta vasodilatação periférica extrema. Qual a consequência biofísica direta na pressão arterial?),",
    "opcoes": [
      "A) A pressão sobe para compensar.",
      "B) O débito cardíaco aumenta dez vezes.",
      "C) Nada acontece.",
      "D) Queda brusca da Resistência Periférica Total (RPT) e consequente queda da Pressão Arterial (Hipotensão grave)."
    ],
    "explicacao_geral": "O 'calibre' do sistema aumenta demais para a quantidade de sangue circulante.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A pressão cai devido ao colapso da resistência.",
      "B": "[INCORRETA] O coração tenta compensar (taquicardia), mas o DC pode cair por redução do retorno venoso.",
      "C": "[INCORRETA] Choque é uma falha circulatória aguda.",
      "D": "[CORRETA] O **choque distributivo** (anafilaxia) mata por falência da **RPT**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3623,
    "materia": "bmf2",
    "aula_id": "bmf2_a3",
    "tema": "bmf2_a3",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A Lei de Laplace relaciona tensão de parede (T), pressão interna (P) e raio (r). Por que um aneurisma (dilatação de um vaso) tem maior risco de romper quanto maior for o seu tamanho?),",
    "opcoes": [
      "A) Porque para uma mesma pressão, o aumento do raio eleva a tensão na parede do vaso (T = P x r / espessura), tornando-a mais frágil e propensa à ruptura.",
      "B) Porque vasos grandes explodem sozinhos.",
      "C) Porque o fluxo torna-se laminar demais.",
      "D) Porque o raio diminui com o tempo."
    ],
    "explicacao_geral": "A tensão de distensão aumenta proporcionalmente ao diâmetro do aneurisma.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Lei de Laplace** explica por que **aneurismas grandes** são mais perigosos.",
      "B": "[INCORRETA] Justificativa não técnica.",
      "C": "[INCORRETA] Torna-se turbulento no aneurisma devido ao aumento de Re.",
      "D": "[INCORRETA] O aneurisma é uma dilatação progressiva."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3624,
    "materia": "bmf2",
    "aula_id": "bmf2_a3",
    "tema": "bmf2_a3",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um indivíduo levanta-se rapidamente da cama e sente uma leve tontura. Biofisicamente, a gravidade causou o 'represamento' de sangue nas veias das pernas. Qual o efeito imediato no retorno venoso e débito cardíaco?),",
    "opcoes": [
      "A) Aumentam imediatamente.",
      "B) Nada acontece devido ao cérebro.",
      "C) Queda transitória do retorno venoso, do volume sistólico e, consequentemente, do débito cardíaco, reduzindo a pressão arterial cerebral.",
      "D) O sangue sobe para a cabeça com mais força."
    ],
    "explicacao_geral": "O sistema barorreceptor será ativado em segundos para corrigir essa queda (reflexo barorreceptor).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A gravidade 'puxa' o sangue para baixo, dificultando o retorno.",
      "B": "[INCORRETA] Mecanismos compensatórios existem, mas a perturbação inicial ocorre.",
      "C": "[CORRETA] A **Hipotensão Ortostática** é causada pela queda momentânea do **Débito Cardíaco**.",
      "D": "[INCORRETA] Descreve o oposto do efeito gravitacional em pé."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf2_a3 adicionadas.`);
