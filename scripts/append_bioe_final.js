import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4681,
    "materia": "bioe",
    "aula_id": "bioe_a5",
    "tema": "bioe_a5",
    "modulo": 4,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "A 'Curva de Kaplan-Meier' é utilizada primordialmente para representar qual tipo de análise estatística?),",
    "opcoes": [
      "A) Correlação entre duas variáveis contínuas.",
      "B) Análise de Sobrevivência (probabilidade de ocorrência de um desfecho ao longo do tempo).",
      "C) Comparação de médias entre três grupos.",
      "D) Distribuição normal de uma variável."
    ],
    "explicacao_geral": "Permite visualizar a estimativa da proporção de indivíduos que 'sobrevivem' (não apresentam o evento) em cada intervalo de tempo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Gráfico de dispersão.",
      "B": "[CORRETA] **Kaplan-Meier** é o gráfico da **Análise de Sobrevivência**.",
      "C": "[INCORRETA] Teste ANOVA.",
      "D": "[INCORRETA] Histograma ou box-plot."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4689,
    "materia": "bioe",
    "aula_id": "bioe_a6",
    "tema": "bioe_a6",
    "modulo": 4,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "Em um estudo de caso-controle sobre fumo e câncer, se os doentes lembrarem com mais detalhes de suas exposições passadas do que os controles saudáveis, qual viés está ocorrendo?),",
    "opcoes": [
      "A) Viés de Seleção.",
      "B) Viés de Confundimento.",
      "C) Viés de Publicação.",
      "D) Viés de Memória (ou Recordação)."
    ],
    "explicacao_geral": "O viés de memória é um tipo de erro sistemático de aferição/mensuração.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Relacionado à forma como os grupos são escolhidos.",
      "B": "[INCORRETA] Quando uma terceira variável distorce a relação entre causa e efeito.",
      "C": "[INCORRETA] Tendência a publicar apenas resultados positivos.",
      "D": "[CORRETA] **Lembrança diferencial** caracteriza o **Viés de Memória**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4697,
    "materia": "bioe",
    "aula_id": "bioe_a7",
    "tema": "bioe_a7",
    "modulo": 4,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Qual técnica do Ensaio Clínico tem como objetivo principal garantir que as características basais (como idade e gravidade) sejam distribuídas de forma equilibrada entre os grupos intervenção e controle?),",
    "opcoes": [
      "A) Randomização (Sorteio).",
      "B) Mascaramento (Cegar).",
      "C) Análise por Intenção de Tratar.",
      "D) Tamanho da amostra."
    ],
    "explicacao_geral": "A randomização reduz o risco de viés de seleção ao tornar as características iniciais homogêneas entre os grupos.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Randomização** gera **grupos comparáveis**.",
      "B": "[INCORRETA] Visa reduzir o viés de aferição (observador ou paciente).",
      "C": "[INCORRETA] Técnica para lidar com perdas de seguimento.",
      "D": "[INCORRETA] Define o poder estatístico, não a distribuição qualitativa."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4705,
    "materia": "bioe",
    "aula_id": "bioe_a8",
    "tema": "bioe_a8",
    "modulo": 4,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "No 'Gráfico de Floresta' (Forest Plot) de uma Meta-análise, o que representa o diamante (losango) central inferior?),",
    "opcoes": [
      "A) O resultado do estudo mais caro.",
      "B) Uma falha na impressão do gráfico.",
      "C) O resultado combinado (estimativa global/sumário) de todos os estudos incluídos na revisão sistemática.",
      "D) O grupo que recebeu placebo."
    ],
    "explicacao_geral": "As extremidades do diamante representam o intervalo de confiança do efeito global calculado.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA]",
      "B": "[INCORRETA]",
      "C": "[CORRETA] O **Diamante** representa o **Efeito Combinado** na meta-análise.",
      "D": "[INCORRETA]"
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4713,
    "materia": "bioe",
    "aula_id": "bioe_a10",
    "tema": "bioe_a10",
    "modulo": 4,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O controle de qualidade da água para consumo humano e a fiscalização de alimentos em restaurantes são atribuições de qual órgão ou vigilância?),",
    "opcoes": [
      "A) Vigilância Epidemiológica.",
      "B) Vigilância Sanitária (VISA).",
      "C) Vigilância Ambiental.",
      "D) Conselhos de Medicina."
    ],
    "explicacao_geral": "A vigilância sanitária atua na prevenção de riscos à saúde decorrentes do ambiente, produção e circulação de bens e serviços.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Foca no controle de doenças e agravos.",
      "B": "[CORRETA] A **Vigilância Sanitária** fiscaliza **bens e serviços** de consumo.",
      "C": "[INCORRETA] Foca em poluição, ventores e contaminantes ambientais (embora por vezes se sobreponham).",
      "D": "[INCORRETA] Ética e fiscalização do exercício profissional."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4721,
    "materia": "bioe",
    "aula_id": "bioe_a11",
    "tema": "bioe_a11",
    "modulo": 4,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O conceito de 'Endemia' refere-se a:),",
    "opcoes": [
      "A) Presença contínua de uma doença em uma determinada área geográfica, mantendo uma incidência dentro do esperado.',",
      "B) Aumento súbito de casos acima do limite esperado.",
      "C) Doença que afeta todos os continentes simultaneamente.",
      "D) Eliminação total de uma doença."
    ],
    "explicacao_geral": "Diferencia-se da epidemia, que é um desvio significativo e súbito da incidência esperada.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] **Endemia** é a ocorrência **habitual/esperada** local.",
      "B": "[INCORRETA] Epidemia ou Surto.",
      "C": "[INCORRETA] Pandemia.",
      "D": "[INCORRETA] Erradicação."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4729,
    "materia": "bioe",
    "aula_id": "bioe_a11",
    "tema": "bioe_a11",
    "modulo": 4,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Ao analisar um Canal Endêmico, quando dizemos que a situação atingiu o nível de 'Epidemia'?),",
    "opcoes": [
      "A) Quando a morte de um paciente ocorre.",
      "B) Quando se gasta muito dinheiro com remédios.",
      "C) Quando um novo vírus é descoberto.",
      "D) Quando a incidência observada ultrapassa o limite superior (limiar) do diagrama de controle."
    ],
    "explicacao_geral": "O canal endêmico utiliza a média histórica e desvios para definir o que é 'normal'.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA]",
      "B": "[INCORRETA]",
      "C": "[INCORRETA]",
      "D": "[CORRETA] A **Epidemia** ocorre quando se **fura o limite superior** do canal."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4737,
    "materia": "bioe",
    "aula_id": "bioe_a12",
    "tema": "bioe_a12",
    "modulo": 4,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Na economia da saúde, qual indicador mede o ganho de anos de vida com qualidade (combinando quantidade e qualidade de vida) gerado por uma intervenção?),",
    "opcoes": [
      "A) PIB.",
      "B) Custo Direto.",
      "C) QALY (Quality-Adjusted Life Year).",
      "D) Taxa de Juros bancária."
    ],
    "explicacao_geral": "Os QALYs são usados em análises de custo-utilidade para comparar diferentes tratamentos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA]",
      "B": "[INCORRETA]",
      "C": "[CORRETA] **QALY** mede **Anos de Vida Ajustados pela Qualidade**.",
      "D": "[INCORRETA]"
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

// O script para completar as 96 de BIOE deve seguir no próximo passo para não exceder limites.
const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: Amostragem final de BIOE adicionada.`);
