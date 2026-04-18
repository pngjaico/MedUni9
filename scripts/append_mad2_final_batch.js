import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4521,
    "materia": "mad2",
    "aula_id": "mad2_a16",
    "tema": "mad2_a16",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual a composição MÍNIMA de uma equipe de Estratégia de Saúde da Família (ESF)?),",
    "opcoes": [
      "A) Médico, Enfermeiro e Faxineiro.",
      "B) Médico generalista ou de família, Enfermeiro, Auxiliar/Técnico de enfermagem e Agente Comunitário de Saúde (ACS).",
      "C) Apenas um médico e um atendente.",
      "D) Somente Agentes Comunitários de Saúde e um coordenador."
    ],
    "explicacao_geral": "Pode haver também a inclusão de profissionais de saúde bucal.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] ACS é peça fundamental e obrigatória.",
      "B": "[CORRETA] A **Equipe Mínima da ESF** inclui o **Médico, Enfermeiro, Técnico e ACS**.",
      "C": "[INCORRETA] Não segue a Portaria da PNAB.",
      "D": "[INCORRETA] Não segue a Portaria da PNAB."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4522,
    "materia": "mad2",
    "aula_id": "mad2_a16",
    "tema": "mad2_a16",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O 'NASF' (Núcleo Ampliado de Saúde da Família) tem como principal objetivo:),",
    "opcoes": [
      "A) Fazer cirurgias na UBS.",
      "B) Substituir a equipe de Saúde da Família.",
      "C) Gerenciar a limpeza da unidade.",
      "D) Apoiar, ampliar e aperfeiçoar a atenção e a gestão da saúde na Atenção Básica através do Apoio Matricial."
    ],
    "explicacao_geral": "O NASF é composto por diversas categorias profissionais (Psicólogo, Fisioterapeuta, Nutricionista, etc.).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Atenção secundária/terciária.",
      "B": "[INCORRETA] Atua de forma complementar e colaborativa.",
      "C": "[INCORRETA] Administrativo.",
      "D": "[CORRETA] O **NASF** realiza o **Apoio Matricial** às equipes de referência."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4523,
    "materia": "mad2",
    "aula_id": "mad2_a17",
    "tema": "mad2_a17",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "O 'Genograma' é uma ferramenta de abordagem familiar que permite visualizar:),",
    "opcoes": [
      "A) Apenas as doenças genéticas do paciente.",
      "B) O mapa da rua onde o paciente mora.",
      "C) A estrutura familiar e as relações entre seus membros em pelo menos três gerações.",
      "D) O saldo bancário da família."
    ],
    "explicacao_geral": "Utiliza uma simbologia padronizada para identificar padrões de saúde e relacionamentos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Inclui doenças, mas foca na estrutura e dinâmica relacional.",
      "B": "[INCORRETA] Este seria o Ecomapa (em relação ao território).",
      "C": "[CORRETA] O **Genograma** foca na **Estrutura e Vínculos Familiares**.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4524,
    "materia": "mad2",
    "aula_id": "mad2_a17",
    "tema": "mad2_a17",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Qual a utilidade do 'Ecomapa' na prática da Medicina de Família e Comunidade?),",
    "opcoes": [
      "A) Avaliar as relações da família com o meio ambiente social (trabalho, igreja, escola, saúde, lazer) e o suporte social disponível.",
      "B) Contar o número de árvores no bairro.",
      "C) Medir a poluição sonora da casa.",
      "D) Avaliar o consumo de energia elétrica da família."
    ],
    "explicacao_geral": "O ecomapa complementa o genograma ao mostrar o fluxo de energia e recursos entre a família e a comunidade.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Ecomapa** avalia a **Rede de Apoio Social**.",
      "B": "[INCORRETA] Absurdo.",
      "C": "[INCORRETA] Absurdo.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4525,
    "materia": "mad2",
    "aula_id": "mad2_a18",
    "tema": "mad2_a18",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Segundo o Ministério da Saúde, qual o valor de pressão arterial para diagnóstico de Hipertensão Arterial Sistêmica em adultos em medidas de consultório?),",
    "opcoes": [
      "A) >= 120 / 80 mmHg.",
      "B) >= 140 / 90 mmHg (confirmada em duas ocasiões).",
      "C) >= 160 / 100 mmHg.",
      "D) Qualquer valor acima de 110 de sistólica."
    ],
    "explicacao_geral": "Devem ser consideradas as condições adequadas de medida e a média de pelo menos duas aferições.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Valor ótimo/normal.",
      "B": "[CORRETA] A **Hipertensão** é definida como **>= 140/90** no consultório.",
      "C": "[INCORRETA] Estágio 2 de hipertensão.",
      "D": "[INCORRETA] Valor comum de normalidade."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4526,
    "materia": "mad2",
    "aula_id": "mad2_a19",
    "tema": "mad2_a19",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual a principal ferramenta recomendada para a triagem de 'Fragilidade' no idoso na Atenção Básica?),",
    "opcoes": [
      "A) Apenas perguntar a idade.",
      "B) Teste do pezinho.",
      "C) Medir a pressão sentado e de cócoras.",
      "D) IVCF-20 (Índice de Vulnerabilidade Clínico-Funcional) ou critérios de Fried (perda de peso, exaustão, força de preensão, velocidade de marcha e atividade física)."
    ],
    "explicacao_geral": "O objetivo é identificar idosos vulneráveis para intervenções multidimensionais precoces.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Idade cronológica nem sempre reflete fragilidade biológica.",
      "B": "[INCORRETA] Teste neonatal.",
      "C": "[INCORRETA] Avalia hipotensão ortostática, importante mas não define fragilidade total.",
      "D": "[CORRETA] O **IVCF-20** avalia a **Vulnerabilidade Clínico-Funcional** do idoso."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4527,
    "materia": "mad2",
    "aula_id": "mad2_a20",
    "tema": "mad2_a20",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "De acordo com o Código de Ética Médica, o 'Sigilo Profissional' pode ser quebrado em qual situação?),",
    "opcoes": [
      "A) Por motivo justo, dever legal ou consentimento por escrito do paciente.",
      "B) Se o médico brigar com o paciente.",
      "C) Para fofocar com outros médicos no corredor do hospital.",
      "D) Se o paciente não pagar a consulta."
    ],
    "explicacao_geral": "O sigilo deve ser mantido mesmo que o fato seja de conhecimento público ou que o paciente tenha falecido.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Sigilo Médico** tem exceções como o **Dever Legal**.",
      "B": "[INCORRETA] Antiético.",
      "C": "[INCORRETA] Antiético.",
      "D": "[INCORRETA] Antiético."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4528,
    "materia": "mad2",
    "aula_id": "mad2_a20",
    "tema": "mad2_a20",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "O conceito de 'Responsabilidade Civil' do médico na maioria dos casos é baseada na comprovação de culpa (imprudência, negligência ou imperícia). Qual o termo jurídico para esta modalidade?),",
    "opcoes": [
      "A) Responsabilidade Objetiva.",
      "B) Crime Doloso.",
      "C) Responsabilidade Subjetiva.",
      "D) Culpa Presumida Automática."
    ],
    "explicacao_geral": "Na responsabilidade subjetiva, deve-se provar que o dano ocorreu por falha técnica ou falta de cuidado do profissional.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Aplicada geralmente a hospitais ou estado, onde não se discute a culpa, apenas o nexo causal.",
      "B": "[INCORRETA] Refere-se à intenção de causar o mal.",
      "C": "[CORRETA] A **Responsabilidade Médica** é, em regra, **Subjetiva** (obrigação de meio).",
      "D": "[INCORRETA] Termo incorreto para a regra geral médica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad2_a16-a20 adicionadas.`);
