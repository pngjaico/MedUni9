import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3177,
    "materia": "pmh",
    "aula_id": "pmh_a1",
    "tema": "pmh_a1",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A moeda energética universal da célula é o ATP. Qual a principal razão para o ATP ser considerado uma molécula de alta energia?",
    "opcoes": [
      "A) Presença de uma base nitrogenada complexa.",
      "B) Repulsão eletrostática entre as cargas negativas dos grupos fosfato.",
      "C) Capacidade de se ligar permanentemente à glicose.",
      "D) O fato de ser a menor molécula da célula."
    ],
    "explicacao_geral": "A quebra das ligações fosfoanidrido libera energia utilizável pela célula.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A base nitrogenada (adenina) não armazena a energia de transferência.",
      "B": "[CORRETA] As **cargas negativas dos fosfatos** próximas geram instabilidade vinculada à alta energia potencial.",
      "C": "[INCORRETA] O ATP transfere fosfato, mas a ligação não é permanente.",
      "D": "[INCORRETA] O ATP não é a menor molécula celular."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3178,
    "materia": "pmh",
    "aula_id": "pmh_a1",
    "tema": "pmh_a1",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Para que uma reação bioquímica ocorra de forma espontânea numa célula, o valor da variação de Energia Livre de Gibbs (ΔG) deve ser:",
    "opcoes": [
      "A) Negativo (ΔG < 0).",
      "B) Positivo (ΔG > 0).",
      "C) Igual a zero (ΔG = 0).",
      "D) Infinito."
    ],
    "explicacao_geral": "Reações espontâneas são exergônicas, liberando energia livre no sistema.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Um **ΔG negativo** indica que a reação libera energia e é termodinamicamente favorável.",
      "B": "[INCORRETA] ΔG positivo indica reação endergônica (não espontânea).",
      "C": "[INCORRETA] ΔG = 0 indica que o sistema está em equilíbrio (sem trabalho útil).",
      "D": "[INCORRETA] Valores infinitos não se aplicam a sistemas biológicos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3179,
    "materia": "pmh",
    "aula_id": "pmh_a1",
    "tema": "pmh_a1",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "A síntese da Glicose-6-Fosfato a partir de Glicose e Fosfato inorgânico isolados possui ΔG = +13,8 kJ/mol (não espontânea). Contudo, a célula realiza essa reação acoplando-a à hidrólise do ATP (ΔG = -30,5 kJ/mol). Qual o ΔG resultante da reação acoplada?",
    "opcoes": [
      "A) +44,3 kJ/mol.",
      "B) -30,5 kJ/mol.",
      "C) -16,7 kJ/mol.",
      "D) Zero."
    ],
    "explicacao_geral": "O acoplamento permite que reações desfavoráveis ocorram somando-se os valores de ΔG.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Soma errada dos valores.",
      "B": "[INCORRETA] Este é apenas o valor do ATP isolado.",
      "C": "[CORRETA] (+13,8) + (-30,5) = **-16,7 kJ/mol**. O valor negativo torna o processo viável.",
      "D": "[INCORRETA] Não há cancelamento exato."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3180,
    "materia": "pmh",
    "aula_id": "pmh_a1",
    "tema": "pmh_a1",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente em estado crítico apresenta febre alta e aumento do consumo de oxigênio. Do ponto de vista metabólico, o calor liberado pelo corpo é uma forma de energia que não pode ser convertida em trabalho biológico. Esse aumento da desordem do sistema refere-se a qual lei da termodinâmica?",
    "opcoes": [
      "A) Primeira Lei (Conservação da Energia).",
      "B) Lei da Gravidade Metabólica.",
      "C) Lei do Tudo ou Nada.",
      "D) Segunda Lei (Aumento da Entropia)."
    ],
    "explicacao_geral": "Transformações energéticas nunca são 100% eficientes; parte da energia é dissipada como calor.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A primeira lei diz que a energia se transforma, mas não explica a perda de qualidade (calor/desordem).",
      "B": "[INCORRETA] Termo inexistente.",
      "C": "[INCORRETA] Aplica-se à fisiologia nervosa/muscular.",
      "D": "[CORRETA] A **Segunda Lei** estabelece que processos naturais tendem ao aumento da **entropia** (desordem)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3181,
    "materia": "pmh",
    "aula_id": "pmh_a1",
    "tema": "pmh_a1",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "As vias metabólicas podem ser classificadas em catabólicas e anabólicas. Qual das alternativas descreve corretamente o fluxo energético no anabolismo?",
    "opcoes": [
      "A) Consumo de ATP para síntese de moléculas complexas.",
      "B) Produção de ATP através da quebra de nutrientes.",
      "C) Liberação de calor sem transformação química.",
      "D) Oxidação total da glicose para gerar água."
    ],
    "explicacao_geral": "O anabolismo é o conjunto de reações de síntese que requerem investimento de energia.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] No **anabolismo**, a célula usa energia livre (ATP) para construir estruturas.",
      "B": "[INCORRETA] Esta é a definição de catabolismo.",
      "C": "[INCORRETA] Todas as vias envolvem transformações químicas.",
      "D": "[INCORRETA] Este é um processo catabólico (respiração celular)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3182,
    "materia": "pmh",
    "aula_id": "pmh_a1",
    "tema": "pmh_a1",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "O cianeto é um veneno letal que bloqueia a cadeia de transporte de elétrons na mitocôndria. Bioenergeticamente, qual a consequência imediata para a célula?",
    "opcoes": [
      "A) Aumento súbito da produção de ATP.",
      "B) Queda drástica dos níveis de ATP e falha nos processos endergônicos.",
      "C) Inversão da polaridade da membrana plasmática por excesso de energia.",
      "D) Conversão espontânea de gordura em açúcar."
    ],
    "explicacao_geral": "Sem a produção de ATP, os processos que exigem energia (como bombas iônicas) param, levando à morte celular.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O cianeto interrompe a produção.",
      "B": "[CORRETA] O bloqueio da síntese de ATP impede o **acoplamento energético** necessário para a vida celular.",
      "C": "[INCORRETA] A membrana despolariza por falta de energia para as bombas, não por excesso.",
      "D": "[INCORRETA] O metabolismo oxidativo é bloqueado, impedindo interconversões complexas."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3183,
    "materia": "pmh",
    "aula_id": "pmh_a1",
    "tema": "pmh_a1",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Em uma reação em equilíbrio químico, qual o valor da variação de energia livre de Gibbs (ΔG)?",
    "opcoes": [
      "A) ΔG é fortemente negativo.",
      "B) ΔG é fortemente positivo.",
      "C) ΔG varia conforme a temperatura ambiente.",
      "D) ΔG é igual a zero."
    ],
    "explicacao_geral": "O equilíbrio químico representa o estado de menor energia livre possível para aquele sistema, sem fluxo resultante.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] ΔG negativo indica reação fora do equilíbrio indo para frente.",
      "B": "[INCORRETA] ΔG positivo indica reação fora do equilíbrio vindo para trás.",
      "C": "[INCORRETA] Embora o ΔG padrão dependa da temperatura, o ΔG no equilíbrio é definido como zero.",
      "D": "[CORRETA] No **equilíbrio**, as taxas de reação direta e inversa se igualam e **ΔG = 0**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3184,
    "materia": "pmh",
    "aula_id": "pmh_a1",
    "tema": "pmh_a1",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um exercício físico intenso provoca a quebra rápida de ATP no músculo. Para manter a atividade, a célula precisa regenerar o ATP com rapidez. Qual molécula atua como uma 'reserva rápida' de grupos fosfato de alta energia no músculo esquelético?",
    "opcoes": [
      "A) Glicogênio.",
      "B) Ácido Lático.",
      "C) Fosfocreatina.",
      "D) Colesterol."
    ],
    "explicacao_geral": "A fosfocreatina permite a ressíntese imediata de ATP sem depender inicialmente da glicólise ou respiração.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O glicogênio é reserva de glicose, requer mais tempo para gerar ATP.",
      "B": "[INCORRETA] O lactato é um subproduto da glicólise anaeróbia.",
      "C": "[CORRETA] A **fosfocreatina** transfere seu fosfato diretamente ao ADP, regenerando ATP em segundos.",
      "D": "[INCORRETA] Colesterol é um lipídio estrutural/hormonal, não energético."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula pmh_a1 adicionadas.`);
