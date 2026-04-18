import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3401,
    "materia": "sus",
    "aula_id": "sus_a6",
    "tema": "sus_a6",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "O financiamento do SUS é uma responsabilidade compartilhada entre a União, os Estados e os Municípios. Qual a origem principal dos recursos federais que compõem o Fundo Nacional de Saúde?),",
    "opcoes": [
      "A) Apenas doações de empresas privadas.",
      "B) Empréstimos internacionais obrigatórios.",
      "C) Impostos e contribuições sociais que compõem o Orçamento da Seguridade Social.",
      "D) Cobrança de taxas de consulta na rede pública."
    ],
    "explicacao_geral": "O SUS é financiado por toda a sociedade através da arrecadação tributária.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Podem haver doações, mas não são a base do sistema.",
      "B": "[INCORRETA] O financiamento é majoritariamente nacional.",
      "C": "[CORRETA] O orçamento vem da **arrecadação tributária** e contribuições sociais (como a antiga CPMF ou CSLL).",
      "D": "[INCORRETA] O SUS é gratuito para o usuário no ponto de uso."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3402,
    "materia": "sus",
    "aula_id": "sus_a6",
    "tema": "sus_a6",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A Lei Complementar nº 141/2012 estabelece os percentuais MÍNIMOS que cada ente federado deve investir de sua receita em saúde. Qual o percentual mínimo anual para os MUNICÍPIOS?),",
    "opcoes": [
      "A) 15%.",
      "B) 10%.",
      "C) 25%.",
      "D) 5%."
    ],
    "explicacao_geral": "Os municípios são os que mais investem proporcionalmente no SUS devido à responsabilidade direta pela execução.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Os **Municípios** devem aplicar no mínimo **15%** de sua receita própria em saúde.",
      "B": "[INCORRETA] Percentual abaixo do exigido por lei.",
      "C": "[INCORRETA] Percentual comum para investimento em educação.",
      "D": "[INCORRETA] Percentual insuficiente para as demandas de saúde pública."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3403,
    "materia": "sus",
    "aula_id": "sus_a6",
    "tema": "sus_a6",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O repasse de recursos da União para Estados e Municípios no SUS é feito de forma direta, de conta bancária para conta bancária, sem necessidade de convênios burocráticos para cada ação. Qual o nome dessa modalidade?),",
    "opcoes": [
      "A) Repasse por cheque nominal.",
      "B) Transferência via PIX pessoal do Ministro.",
      "C) Financiamento por produtividade hospitalar apenas.",
      "D) Repasse Fundo a Fundo (do Fundo Nacional para o Fundo Municipal/Estadual)."
    ],
    "explicacao_geral": "Essa modalidade agiliza o acesso à verba e garante a autonomia gestora local.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Modalidade inexistente na administração pública moderna.",
      "B": "[INCORRETA] O repasse deve ser institucional e auditável.",
      "C": "[INCORRETA] O financiamento engloba custeio fixo, variável e investimentos.",
      "D": "[CORRETA] O **Repasse Fundo a Fundo** é a base da descentralização financeira do SUS."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3404,
    "materia": "sus",
    "aula_id": "sus_a6",
    "tema": "sus_a6",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A Emenda Constitucional nº 95/2016 (Teto de Gastos) impactou o financiamento do SUS por um longo período. Qual foi o principal efeito dessa emenda?),",
    "opcoes": [
      "A) Aumentar o salário de todos os médicos do SUS imediatamente.",
      "B) Congelar o valor real dos gastos federais em saúde pelo índice da inflação, gerando o fenômeno do 'desfinanciamento' perante o envelhecimento populacional.",
      "C) Proibir a construção de novos hospitais particulares.",
      "D) Obrigar os municípios a pagarem 50% da receita em saúde."
    ],
    "explicacao_geral": "O teto limitou a expansão do SUS federal, mesmo com o aumento das demandas de saúde da população.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pelo contrário, limitou reajustes e contratações.",
      "B": "[CORRETA] A **EC 95** gerou uma perda bilionária de recursos potenciais para o SUS ao longo dos anos.",
      "C": "[INCORRETA] Não tratava do setor privado, mas do gasto público primário.",
      "D": "[INCORRETA] Os limites municipais mantiveram-se regidos pela LC 141."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3405,
    "materia": "sus",
    "aula_id": "sus_a6",
    "tema": "sus_a6",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Um Secretário Municipal de Saúde deseja comprar novas ambulâncias e realizar uma reforma em 10 Unidades Básicas de Saúde. De qual 'Bloco de Financiamento' virá este recurso federal?),",
    "opcoes": [
      "A) Bloco de Investimento.",
      "B) Bloco de Custeio.",
      "C) Bloco de Emergências Sanitárias.",
      "D) Doações de caridade."
    ],
    "explicacao_geral": "Os recursos de investimento destinam-se a obras e equipamentos permanentes.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Bloco de Investimento** é voltado para a expansão da rede e ativos permanentes.",
      "B": "[INCORRETA] O Custeio serve para pagar salários, remédios e manutenção diária.",
      "C": "[INCORRETA] Voltado para crises agudas como pandemias.",
      "D": "[INCORRETA] O financiamento federal é estruturado em orçamento público."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3406,
    "materia": "sus",
    "aula_id": "sus_a6",
    "tema": "sus_a6",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "A gestão do SUS é pautada pelo diálogo entre os entes. Em qual instância os Secretários Municipais e o Secretário Estadual de Saúde pactuam as metas e a organização da rede dentro do Estado?),",
    "opcoes": [
      "A) CIT (Comissão Intergestores Tripartite).",
      "B) CONASEMS.",
      "C) CIB (Comissão Intergestores Bipartite).",
      "D) Conselho Municipal de Saúde."
    ],
    "explicacao_geral": "A CIB é o espaço de pactuação entre Estado e Municípios para organizar as referências e os fluxos regionais.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Atua em nível federal (União, Estados e Municípios).",
      "B": "[INCORRETA] É o órgão de representação política dos secretários municipais.",
      "C": "[CORRETA] A **CIB** é a instância de pactuação entre **Estado e Municípios**.",
      "D": "[INCORRETA] Instância de participação popular local, não de pactuação entre gestores estaduais/municipais."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3407,
    "materia": "sus",
    "aula_id": "sus_a6",
    "tema": "sus_a6",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Um município apresenta baixos indicadores de cobertura vacinal e alta mortalidade infantil. O governo federal utiliza repasses financeiros extras vinculados ao cumprimento de metas de desempenho. Qual o nome dessa lógica de financiamento por resultados?),",
    "opcoes": [
      "A) Piso de Atenção Básica Fixo.",
      "B) Pagamento por Desempenho (dentro do modelo atual como o Previne Brasil).",
      "C) Multa eleitoral.",
      "D) Subsídio por km rodado."
    ],
    "explicacao_geral": "Atualmente, parte do financiamento municipal depende do alcance de indicadores de saúde específicos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Valor per capita fixo que era comum no passado, independentemente do desempenho.",
      "B": "[CORRETA] O **Pagamento por Desempenho** busca induzir melhorias nos resultados de saúde pública.",
      "C": "[INCORRETA] Não é uma multa, mas um incentivo ao cumprimento de metas.",
      "D": "[INCORRETA] Não reflete a complexidade da gestão em saúde."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3408,
    "materia": "sus",
    "aula_id": "sus_a6",
    "tema": "sus_a6",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A 'Gestão Plena do Sistema' por um Município significa que:),",
    "opcoes": [
      "A) O prefeito pode fechar todos os hospitais e usar o dinheiro em festas.",
      "B) O município não precisa mais prestar contas ao Tribunal de Contas.",
      "C) O governo federal assume as dívidas do prefeito.",
      "D) O município assume a responsabilidade total pela gestão de todos os serviços de saúde em seu território, inclusive os prestadores privados e estaduais contratualizados."
    ],
    "explicacao_geral": "Isso demonstra a maturidade administrativa do município no comando do SUS local.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Fere o dever constitucional de assistência pública.",
      "B": "[INCORRETA] A prestação de contas é obrigatória e rigorosa.",
      "C": "[INCORRETA] O financiamento é pactuado, não há assumção de dívidas irresponsáveis.",
      "D": "[CORRETA] A **Gestão Plena** é o teto da autonomia municipal na **descentralização do SUS**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula sus_a6 adicionadas.`);
