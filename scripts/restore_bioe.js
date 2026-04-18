import fs from 'fs';

const QUESTOES_PATH = 'data/questoes.json';

const novasBioe = [
  // Aula 5: Kaplan-Meier e Sobrevivência (IDs 4705-4712)
  {
    "id": 4705,
    "materia": "bioe",
    "aula_id": "bioe_a5",
    "tema": "bioe_a5",
    "modulo": 4,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Em uma curva de Kaplan-Meier, o que significa um 'degrau' descendente na linha?),",
    "opcoes": [
      "A) A cura de um paciente.",
      "B) A ocorrência do desfecho (ex: morte ou recidiva) em um ou mais indivíduos.",
      "C) A entrada de novos participantes no estudo.",
      "D) O encerramento do acompanhamento por falta de dados."
    ],
    "explicacao_geral": "A curva de sobrevivência cai a cada evento ocorrido no grupo acompanhado.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A curva mede a 'não ocorrência'.",
      "B": "[CORRETA] O **Degrau** representa a **Ocorrência do Evento**.",
      "C": "[INCORRETA] Isso não altera a linha verticalmente.",
      "D": "[INCORRETA] Marcado por pequenos traços verticais (censura)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  // Aula 6: Viés (IDs 4713-4720)
  {
    "id": 4713,
    "materia": "bioe",
    "aula_id": "bioe_a6",
    "tema": "bioe_a6",
    "modulo": 4,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A utilização de voluntários saudáveis em um estudo para testar o efeito de uma medicação em pacientes graves pode gerar qual tipo de erro sistemático?),",
    "opcoes": [
      "A) Erro aleatório.",
      "B) Viés de aferição.",
      "C) Viés de Seleção.",
      "D) Viés de Publicação."
    ],
    "explicacao_geral": "O viés de seleção ocorre quando a amostra não representa a população alvo pretendida.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Resulta da variabilidade natural, não de erro metódico.",
      "B": "[INCORRETA] Relacionado à medição ou diagnóstico.",
      "C": "[CORRETA] Escolher voluntários enviesa o **Processo de Seleção**.",
      "D": "[INCORRETA] Relacionado à submissão de artigos para revistas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  // Aula 7: Randomização (IDs 4721-4728)
  {
    "id": 4721,
    "materia": "bioe",
    "aula_id": "bioe_a7",
    "tema": "bioe_a7",
    "modulo": 4,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Qual técnica estatística é utilizada para controlar variáveis de confundimento conhecidas e desconhecidas ANTES do início de um ensaio clínico?),",
    "opcoes": [
      "A) Randomização.",
      "B) Estratificação.",
      "C) Análise Multivariada.",
      "D) Emparelhamento (Matching)."
    ],
    "explicacao_geral": "A randomização é a única técnica capaz de equilibrar fatores desconhecidos (foco da Uninove).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Randomização** controla **Confundidores Desconhecidos**.",
      "B": "[INCORRETA] Controla apenas variáveis conhecidas na seleção.",
      "C": "[INCORRETA] Técnica aplicada após a coleta de dados (pós-hoc).",
      "D": "[INCORRETA] Aplicada na fase de desenho, mas exige conhecimento da variável."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  // Aula 8: Meta-análise (IDs 4729-4736)
  {
    "id": 4729,
    "materia": "bioe",
    "aula_id": "bioe_a8",
    "tema": "bioe_a8",
    "modulo": 4,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "Em uma meta-análise, o teste estatístico I² (I-quadrado) é utilizado para avaliar?),",
    "opcoes": [
      "A) O tamanho da amostra total.",
      "B) A média de idade dos participantes.",
      "C) A significância do p-valor global.",
      "D) A Heterogeneidade entre os estudos (o quanto os estudos diferem entre si)."
    ],
    "explicacao_geral": "Um I² alto (> 50%) sugere que os estudos são muito diferentes para serem combinados de forma simples.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA]",
      "B": "[INCORRETA]",
      "C": "[INCORRETA]",
      "D": "[CORRETA] O **I²** mede a **Heterogeneidade Estatística**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  // Aula 11: Epidemias (IDs 4753-4760)
  {
    "id": 4753,
    "materia": "bioe",
    "aula_id": "bioe_a11",
    "tema": "bioe_a11",
    "modulo": 4,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Em um surto onde todos os indivíduos foram expostos a uma mesma fonte contaminada no mesmo momento (ex: festa de casamento), qual o padrão esperado da curva epidêmica?),",
    "opcoes": [
      "A) Curva de propagação (vários picos).",
      "B) Curva de fonte comum pontual (pico único e explosivo).",
      "C) Curva endêmica estável.",
      "D) Curva descendente linear."
    ],
    "explicacao_geral": "A fonte comum pontual gera uma subida rápida de casos dentro de um único período de incubação.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Típica de doenças pessoa-a-pessoa (ex: gripe).",
      "B": "[CORRETA] A **Fonte Pontual** gera um **Pico Explosivo**.",
      "C": "[INCORRETA] Endemias não formam surtos súbitos.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

// Carregando o banco e substituindo os IDs correspondentes
const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));

novasBioe.forEach(nova => {
  const index = data.questoes.findIndex(q => q.id === nova.id);
  if (index !== -1) {
    data.questoes[index] = nova;
  } else {
    data.questoes.push(nova);
  }
});

fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: ${novasBioe.length} questões de BIOE (Restauração) aplicadas.`);
