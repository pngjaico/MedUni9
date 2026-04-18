import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4673,
    "materia": "bioe",
    "aula_id": "bioe_a1",
    "tema": "bioe_a1",
    "modulo": 4,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual o tipo de variável estatística que descreve o 'Sexo' (Masculino/Feminino) ou a 'Cor da Pele'?),",
    "opcoes": [
      "A) Quantitativa Discreta.",
      "B) Qualitativa Nominal.",
      "C) Qualitativa Ordinal.",
      "D) Quantitativa Contínua."
    ],
    "explicacao_geral": "Variáveis qualitativas nominais não possuem uma ordem ou hierarquia entre as categorias.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Envolve contagem de números inteiros.",
      "B": "[CORRETA] **Qualitativa Nominal** define categorias sem ordem.",
      "C": "[INCORRETA] Categorias com ordem (ex: Estágio da doença I, II, III).",
      "D": "[INCORRETA] Envolve medições com casas decimais (ex: peso, altura)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4674,
    "materia": "bioe",
    "aula_id": "bioe_a1",
    "tema": "bioe_a1",
    "modulo": 4,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual medida de tendência central é mais recomendada para descrever uma distribuição de dados enviesada (assimétrica), como a renda de uma população?),",
    "opcoes": [
      "A) Média aritmética.",
      "B) Desvio padrão.",
      "C) Variância.",
      "D) Mediana."
    ],
    "explicacao_geral": "A mediana é menos sensível a valores extremos (outliers) do que a média.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Muito afetada por valores extremos.",
      "B": "[INCORRETA] Medida de dispersão, não de tendência central.",
      "C": "[INCORRETA] Medida de dispersão.",
      "D": "[CORRETA] A **Mediana** é preferível em **Distribuições Assimétricas**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4675,
    "materia": "bioe",
    "aula_id": "bioe_a2",
    "tema": "bioe_a2",
    "modulo": 4,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Qual o principal tipo de estudo epidemiológico observacional que parte do 'efeito' (doentes) para buscar a 'causa' (exposição retroativamente)?),",
    "opcoes": [
      "A) Estudo de Caso-controle.",
      "B) Estudo de Coorte.",
      "C) Ensaio Clínico Randomizado.",
      "D) Estudo Ecológico."
    ],
    "explicacao_geral": "É um estudo retrospectivo, ideal para doenças raras ou com longo período de latência.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Caso-Controle** parte do **Desfecho para a Exposição**.",
      "B": "[INCORRETA] Parte da exposição para o desfecho (prospectivo).",
      "C": "[INCORRETA] Estudo experimental e prospectivo.",
      "D": "[INCORRETA] Avalia populações/grupos, não indivíduos isolados."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4676,
    "materia": "bioe",
    "aula_id": "bioe_a2",
    "tema": "bioe_a2",
    "modulo": 4,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Qual a medida de associação principal utilizada em um 'Estudo de Coorte'?),",
    "opcoes": [
      "A) Odds Ratio (Razão de Chances).",
      "B) Risco Relativo (RR).",
      "C) Coeficiente de Correlação.",
      "D) Sensibilidade."
    ],
    "explicacao_geral": "O Risco Relativo compara a incidência nos expostos com a incidência nos não expostos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Medida típica do estudo de Caso-controle.",
      "B": "[CORRETA] O **Estudo de Coorte** utiliza o **Risco Relativo**.",
      "C": "[INCORRETA] Mede força de relação entre variáveis contínuas.",
      "D": "[INCORRETA] Medida de acurácia diagnóstica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4677,
    "materia": "bioe",
    "aula_id": "bioe_a3",
    "tema": "bioe_a3",
    "modulo": 4,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um teste diagnóstico com alta 'Sensibilidade' é ideal para qual finalidade principal?),",
    "opcoes": [
      "A) Confirmar a doença em quem deu positivo.",
      "B) Reduzir o número de falsos-positivos.",
      "C) Rastreamento (screening), pois um resultado negativo descarta a doença com alta confiança (alto valor preditivo negativo).",
      "D) Economizar dinheiro do hospital."
    ],
    "explicacao_geral": "Sensibilidade é a capacidade do teste de identificar os verdadeiros doentes.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Função de testes altamente específicos.",
      "B": "[INCORRETA] Testes sensíveis podem gerar mais falsos-positivos.",
      "C": "[CORRETA] Testes **Sensíveis** são excelentes para **Exclusão/Screening**.",
      "D": "[INCORRETA] Irrelevante tecnicamente."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4678,
    "materia": "bioe",
    "aula_id": "bioe_a3",
    "tema": "bioe_a3",
    "modulo": 4,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "O que acontece com o 'Valor Preditivo Positivo' (VPP) de um teste quando a prevalência da doença na população aumenta?),",
    "opcoes": [
      "A) O VPP aumenta (um resultado positivo tem mais chance de ser verdadeiro).",
      "B) O VPP diminui.",
      "C) O VPP permanece inalterado, pois depende apenas das características do teste.",
      "D) A sensibilidade do teste aumenta."
    ],
    "explicacao_geral": "Diferente de sensibilidade e especificidade, os valores preditivos dependem diretamente da prevalência na população testada.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **VPP aumenta com a maior prevalência**.",
      "B": "[INCORRETA]",
      "C": "[INCORRETA] Prevalência afeta os valores preditivos.",
      "D": "[INCORRETA] Sensibilidade é intrínseca ao teste, não muda com a prevalência."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4679,
    "materia": "bioe",
    "aula_id": "bioe_a4",
    "tema": "bioe_a4",
    "modulo": 4,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Na interpretação de um 'p-valor' (p < 0.05), o que os pesquisadores geralmente concluem?),",
    "opcoes": [
      "A) Que a hipótese nula é verdadeira.",
      "B) Que o resultado foi devido ao acaso.",
      "C) Que o estudo deve ser cancelado.",
      "D) Que existe significância estatística, rejeitando a hipótese nula de que não há diferença entre os grupos."
    ],
    "explicacao_geral": "Indica que a probabilidade de o resultado observado ter ocorrido apenas por acaso é menor que 5%.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] P-valor baixo rejeita a hipótese nula.",
      "B": "[INCORRETA] Justamente o oposto é sugerido.",
      "C": "[INCORRETA] Inapropriado.",
      "D": "[CORRETA] **p < 0.05** indica **Significância Estatística**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4680,
    "materia": "bioe",
    "aula_id": "bioe_a4",
    "tema": "bioe_a4",
    "modulo": 4,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Se um Intervalo de Confiança de 95% (IC 95%) para um Risco Relativo (RR) for [0.85 - 1.15], qual a interpretação correta?),",
    "opcoes": [
      "A) O fator protege contra a doença.",
      "B) O fator aumenta o risco da doença.",
      "C) O resultado não é estatisticamente significativo, pois o intervalo inclui o valor 1.0 (nulidade).",
      "D) O intervalo prova que a cura existe."
    ],
    "explicacao_geral": "Se o IC de uma razão (RR ou OR) inclui o 1.0, não se pode afirmar que há diferença real entre os grupos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Precisaria estar totalmente abaixo de 1.0.",
      "B": "[INCORRETA] Precisaria estar totalmente acima de 1.0.",
      "C": "[CORRETA] Se o **IC inclui o 1.0**, o resultado é **Não Significativo**.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bioe_a1-a4 adicionadas.`);
