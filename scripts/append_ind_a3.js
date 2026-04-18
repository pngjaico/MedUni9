import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3769,
    "materia": "ind",
    "aula_id": "ind_a3",
    "tema": "ind_a3",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A Bioética fundamenta-se em quatro princípios principais. Qual o princípio que garante ao paciente o direito de decidir sobre seu próprio corpo e tratamento, desde que devidamente informado?),",
    "opcoes": [
      "A) Princípio da Justiça.",
      "B) Princípio da Autonomia.",
      "C) Princípio da Beneficência.",
      "D) Princípio da Não Maleficência."
    ],
    "explicacao_geral": "A autonomia exige capacidade de decisão e ausência de coerção.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Equidade no acesso e distribuição de recursos.",
      "B": "[CORRETA] A **Autonomia** é o pilar da **decisão compartilhada**.",
      "C": "[INCORRETA] Agir para o bem do paciente.",
      "D": "[INCORRETA] Dever de não causar dano intencional ('Primum non nocere')."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3770,
    "materia": "ind",
    "aula_id": "ind_a3",
    "tema": "ind_a3",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual o termo que define a morte no seu tempo natural, sem abreviamento artificial (eutanásia) e sem prolongamento inútil do sofrimento (distanásia), focando no conforto do paciente terminal?),",
    "opcoes": [
      "A) Mistanásia.",
      "B) Adinamia.",
      "C) Necrose.",
      "D) Ortotanásia."
    ],
    "explicacao_geral": "A ortotanásia é a prática ética defendida pelos cuidados paliativos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Morte social ou por negligência do sistema.",
      "B": "[INCORRETA] Sintoma de fraqueza muscular.",
      "C": "[INCORRETA] Morte tecidual.",
      "D": "[CORRETA] A **Ortotanásia** busca a dignidade no processo de **morrer**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3771,
    "materia": "ind",
    "aula_id": "ind_a3",
    "tema": "ind_a3",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A 'Distanásia' é frequentemente criticada na bioética moderna. O que ela representa?),",
    "opcoes": [
      "A) Obstinação terapêutica ou uso de meios desproporcionais e inúteis para prolongar a vida biológica de um paciente terminal, aumentando seu sofrimento.",
      "B) Ajudar o paciente a morrer rápido.",
      "C) Dar remédio para dor.",
      "D) Levar o paciente para casa."
    ],
    "explicacao_geral": "Ocorre quando a tecnologia é usada além do limite da dignidade humana.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Distanásia** é considerada uma má prática por gerar **sofrimento fútil**.",
      "B": "[INCORRETA] Eutanásia/Suicídio Assistido.",
      "C": "[INCORRETA] Analgesia (parte dos paliativos).",
      "D": "[INCORRETA] Desospitalização."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3772,
    "materia": "ind",
    "aula_id": "ind_a3",
    "tema": "ind_a3",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "As 'Diretivas Antecipadas de Vontade' (ou Testamento Vital) são documentos onde o paciente registra suas preferências de tratamento para o futuro. Qual a sua validade?),",
    "opcoes": [
      "A) Não servem para nada no Brasil.",
      "B) Só valem se tiverem a assinatura de 5 médicos.",
      "C) Devem ser respeitadas pelo médico, desde que não violem o Código de Ética (como pedido de eutanásia), servindo de guia quando o paciente estiver incapaz de se comunicar.",
      "D) Valem apenas para pessoas ricas."
    ],
    "explicacao_geral": "Regulamentado pela Resolução CFM 1.995/2012.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] São instrumentos legais e éticos fortes.",
      "B": "[INCORRETA] Exige apenas a manifestação clara e pode ser registrado em prontuário.",
      "C": "[CORRETA] As **Diretivas Antecipadas** protegem a **autonomia futura** do paciente.",
      "D": "[INCORRETA] É um direito de qualquer cidadão."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3773,
    "materia": "ind",
    "aula_id": "ind_a3",
    "tema": "ind_a3",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Um paciente terminal apresenta dor intensa refratária. O médico prescreve doses de morfina que, sabidamente, podem encurtar a vida do paciente em alguns dias (devido à depressão respiratória), mas que são essenciais para o alívio do sofrimento. Qual o princípio bioético que justifica isso?),",
    "opcoes": [
      "A) Princípio da Justiça.",
      "B) Princípio do Duplo Efeito.",
      "C) Princípio da Austeridade.",
      "D) Infalibilidade médica."
    ],
    "explicacao_geral": "A intenção primária é o bem (alívio da dor); o mal (encurtamento da vida) é uma consequência não pretendida mas prevista.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Refere-se a recursos sociais.",
      "B": "[CORRETA] O **Princípio do Duplo Efeito** fundamenta o uso de **sedação paliativa**.",
      "C": "[INCORRETA] Termo econômico.",
      "D": "[INCORRETA] Médicos são falíveis e respondem à ética."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3774,
    "materia": "ind",
    "aula_id": "ind_a3",
    "tema": "ind_a3",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Os 'Cuidados Paliativos' devem ser iniciados em qual momento da história natural de uma doença grave?),",
    "opcoes": [
      "A) Apenas nas últimas 24 horas de vida.",
      "B) Quando o paciente para de respirar.",
      "C) Quando o paciente não tem mais dinheiro para o tratamento curativo.",
      "D) Precocemente, no momento do diagnóstico de uma doença ameaçadora da vida, em conjunto com o tratamento curativo/modificador da doença."
    ],
    "explicacao_geral": "A paliatividade não exclui a tentativa de cura, ela foca na qualidade de vida e controle de sintomas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Visão tardia e equivocada ('terminalidade').",
      "B": "[INCORRETA] Tardio.",
      "C": "[INCORRETA] Critério econômico inadmissível.",
      "D": "[CORRETA] O **Cuidado Paliativo Precoce** melhora o **prognóstico e qualidade de vida**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3775,
    "materia": "ind",
    "aula_id": "ind_a3",
    "tema": "ind_a3",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Qual a diferença entre Eutanásia e Suicídio Assistido?),",
    "opcoes": [
      "A) Na eutanásia, o médico executa a ação final (injeção); no suicídio assistido, o médico fornece os meios e o próprio paciente executa a ação final.",
      "B) É a mesma coisa.",
      "C) Eutanásia é para plantas e suicídio para humanos.",
      "D) Na eutanásia o paciente não quer morrer."
    ],
    "explicacao_geral": "Ambos são proibidos legalmente no Brasil atualmente.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A diferença reside em **quem executa** o ato letal.",
      "B": "[INCORRETA] Conceitos distintos em países onde são legalizados.",
      "C": "[INCORRETA] Absurdo.",
      "D": "[INCORRETA] Ambos pressupõem o pedido/consentimento do paciente (eutanásia voluntária)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3776,
    "materia": "ind",
    "aula_id": "ind_a3",
    "tema": "ind_a3",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O conceito de 'Mistanásia' é particularmente relevante na saúde pública brasileira. O que ele descreve?),",
    "opcoes": [
      "A) Morte por falta de oxigênio no avião.",
      "B) Morte por excesso de remédio.",
      "C) A morte 'infeliz', social e evitável, causada por negligência, falta de recursos ou assistência inadequada pelo Estado e sociedade.",
      "D) Morte por velhice."
    ],
    "explicacao_geral": "É a morte dos 'excluídos' do sistema de saúde.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Evento acidental.",
      "B": "[INCORRETA] Erro médico/acidental.",
      "C": "[CORRETA] A **Mistanásia** é a **morte por injustiça social**.",
      "D": "[INCORRETA] Senescência."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula ind_a3 adicionadas.`);
