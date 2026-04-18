import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3289,
    "materia": "semiologia1",
    "aula_id": "semio1_a1",
    "tema": "semio1_a1",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "Na terminologia semiológica do aparelho locomotor, qual o termo utilizado para descrever o movimento que AFASTA um membro da linha média do corpo?),",
    "opcoes": [
      "A) Abdução.",
      "B) Adução.",
      "C) Flexão.",
      "D) Extensão."
    ],
    "explicacao_geral": "Os termos de movimento são a base para descrever o exame físico articular.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] **Abdução** é o afastamento lateral do membro em relação ao eixo central.",
      "B": "[INCORRETA] Adução é a aproximação da linha média.",
      "C": "[INCORRETA] Flexão diminui o ângulo entre os ossos.",
      "D": "[INCORRETA] Extensão aumenta o ângulo entre os ossos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3290,
    "materia": "semiologia1",
    "aula_id": "semio1_a1",
    "tema": "semio1_a1",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Os sinais cardinais da inflamação (tétrade de Celsus + Galeno) são fundamentais na inspeção articular. Qual sinal representa o aumento de volume de uma articulação devido ao edema?),",
    "opcoes": [
      "A) Calor.",
      "B) Rubor.",
      "C) Perda de função.",
      "D) Tumor."
    ],
    "explicacao_geral": "Identificar inflamação aguda diferencia causas traumáticas/infecciosas de causas degenerativas crônicas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Representa o aumento da temperatura local.",
      "B": "[INCORRETA] Representa a vermelhidão (hiperemia).",
      "C": "[INCORRETA] Representa a incapacidade de realizar o movimento normal.",
      "D": "[CORRETA] **Tumor** (ou tumefação) é o aumento de volume por edema ou derrame articular."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3291,
    "materia": "semiologia1",
    "aula_id": "semio1_a1",
    "tema": "semio1_a1",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Um paciente de 60 anos apresenta dificuldade para caminhar, mantendo os braços fletidos ao lado do corpo, tronco inclinado para a frente e passos curtos e rápidos (marcha festinante). Qual síndrome este padrão de marcha sugere?),",
    "opcoes": [
      "A) Insuficiência Venosa Crônica.",
      "B) Síndrome de Parkinson.",
      "C) Acidente Vascular Cerebral (Marcha ceifante).",
      "D) Hérnia de Disco Lombar (Marcha antálgica)."
    ],
    "explicacao_geral": "O exame físico começa com a inspeção dinâmica (observação da marcha).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Não causa alteração neurológica do padrão de marcha festinante.",
      "B": "[CORRETA] A **marcha festinante** ou parkinsoniana é clássica da **doença de Parkinson**.",
      "C": "[INCORRETA] Na ceifante, o paciente arrasta a perna em semicírculo.",
      "D": "[INCORRETA] A marcha antálgica visa evitar a dor, encurtando o tempo de apoio na perna afetada."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3292,
    "materia": "semiologia1",
    "aula_id": "semio1_a1",
    "tema": "semio1_a1",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Ao descrever a posição de um paciente no prontuário, o médico utiliza o termo 'Supinação' do antebraço. Qual movimento manual isso representa?),",
    "opcoes": [
      "A) Palma da mão voltada para trás.",
      "B) Palma da mão voltada para baixo.",
      "C) Palma da mão voltada para cima (como se estivesse pedindo algo).",
      "D) Mão fechada em punho."
    ],
    "explicacao_geral": "A supinação e pronação são movimentos rotacionais do rádio sobre a ulna.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Seria a posição anatômica ou pronação dependendo do referencial.",
      "B": "[INCORRETA] Este é o movimento de pronação.",
      "C": "[CORRETA] **Supinação** mantém a palma da mão voltada para cima ou para a frente.",
      "D": "[INCORRETA] Não define o movimento rotacional."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3293,
    "materia": "semiologia1",
    "aula_id": "semio1_a1",
    "tema": "semio1_a1",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Durante o exame físico ortopédico, qual a ordem técnica recomendada para a avaliação sistemática de uma articulação?),",
    "opcoes": [
      "A) Palpação, Testes Especiais e Inspeção por último.",
      "B) Inspeção (estática e dinâmica), Palpação, Movimentação (ativa e passiva) e Testes Especiais.",
      "C) Testes Especiais primeiro para poupar tempo.",
      "D) Apenas Palpação se o paciente tiver muita dor."
    ],
    "explicacao_geral": "Seguir uma ordem lógica aumenta a acurácia diagnóstica e reduz o desconforto do paciente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Inicia-se sempre com o que é menos invasivo/doloroso.",
      "B": "[CORRETA] Esta é a **sequência semiológica** clássica do aparelho locomotor.",
      "C": "[INCORRETA] Testes especiais são a última etapa após a triagem física.",
      "D": "[INCORRETA] A inspeção é soberana e deve ser realizada mesmo com dor."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3294,
    "materia": "semiologia1",
    "aula_id": "semio1_a1",
    "tema": "semio1_a1",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente relata que após uma queda, sua articulação do joelho apresenta dor, rubor e está quente ao toque. Ao exame, o médico percebe que o paciente não consegue estender a perna. Qual sinal cardinal da inflamação está sendo descrito pelo prejuízo funcional?),",
    "opcoes": [
      "A) Dor.",
      "B) Rubor.",
      "C) Tumor.",
      "D) Functio laesa (Perda de função)."
    ],
    "explicacao_geral": "A perda de função é o quinto sinal de Virchow que completa a tétrade de Celsus.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] É o sintoma doloroso referido.",
      "B": "[INCORRETA] É a vermelhidão.",
      "C": "[INCORRETA] É o inchaço.",
      "D": "[CORRETA] A incapacidade de realizar o arco de movimento é a **perda de função**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3295,
    "materia": "semiologia1",
    "aula_id": "semio1_a1",
    "tema": "semio1_a1",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A 'Atitude Articular' refere-se à posição em que o paciente mantém o membro afetado. Qual a relevância clínica de observar uma atitude antálgica ou de flexão persistente?),",
    "opcoes": [
      "A) Indica uma posição de menor pressão intra-articular que o paciente adota para aliviar a dor.",
      "B) Indica que o osso está quebrado em múltiplos pedaços.",
      "C) Significa que o paciente está simulando a doença.",
      "D) É apenas um vício de postura sem importância médica."
    ],
    "explicacao_geral": "Muitas vezes, a posição viciosa é a que permite o maior volume interno da cápsula com a menor tensão.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **atitude antálgica** é um sinal importante de patologia articular ativa.",
      "B": "[INCORRETA] Nem sempre há fratura; pode haver apenas derrame articular.",
      "C": "[INCORRETA] É um reflexo neuromuscular de proteção.",
      "D": "[INCORRETA] É um achado físico crucial."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3296,
    "materia": "semiologia1",
    "aula_id": "semio1_a1",
    "tema": "semio1_a1",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um estudante de medicina observa um médico avaliando a coluna vertebral de um paciente. O médico solicita que o paciente incline o tronco lateralmente. Este movimento ocorre em qual plano anatômico?),",
    "opcoes": [
      "A) Plano Sagital.",
      "B) Plano Transversal.",
      "C) Plano Coronal (Frontal).",
      "D) Plano Horizontal."
    ],
    "explicacao_geral": "Movimentos de inclinação lateral ocorrem no plano que divide o corpo em anterior e posterior.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O sagital divide em direita e esquerda; permite flexão e extensão.",
      "B": "[INCORRETA] O transversal divide em superior e inferior; permite rotações.",
      "C": "[CORRETA] A inclinação lateral (adução/abdução) ocorre no **plano coronal**.",
      "D": "[INCORRETA] Equivalente ao plano transversal."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula semio1_a1 adicionadas.`);
