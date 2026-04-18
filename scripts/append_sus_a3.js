import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3377,
    "materia": "sus",
    "aula_id": "sus_a3",
    "tema": "sus_a3",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O princípio do SUS que garante que TODOS os cidadãos, sem qualquer tipo de discriminação ou barreira de acesso, possam usufruir dos serviços de saúde é a:),",
    "opcoes": [
      "A) Integralidade.",
      "B) Universalidade.",
      "C) Equidade.",
      "D) Descentralização."
    ],
    "explicacao_geral": "A universalidade rompe com o modelo anterior de exclusão de quem não contribuía para a previdência.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A integralidade refere-se à visão completa do paciente e todos os níveis de assistência.",
      "B": "[CORRETA] A **Universalidade** é o 'SUS para todos'.",
      "C": "[INCORRETA] A equidade refere-se a tratar desigualmente os desiguais para atingir a justiça social.",
      "D": "[INCORRETA] É um princípio organizativo sobre a distribuição do poder."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3378,
    "materia": "sus",
    "aula_id": "sus_a3",
    "tema": "sus_a3",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um médico percebe que uma comunidade quilombola em seu território tem maiores índices de desnutrição e menor acesso a saneamento que o centro da cidade. Ele decide priorizar mais consultas e visitas domiciliares para este grupo específico. Qual princípio ele está aplicando?),",
    "opcoes": [
      "A) Universalidade.",
      "B) Hierarquização.",
      "C) Equidade.",
      "D) Participação Popular."
    ],
    "explicacao_geral": "Oferecer mais a quem mais precisa para reduzir disparidades é o foco da equidade.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Universalidade é o direito de todos, mas a equidade é a forma justa de distribuir esse direito.",
      "B": "[INCORRETA] Refere-se aos níveis de complexidade do sistema (Primário, Secundário, Terciário).",
      "C": "[CORRETA] A **Equidade** visa diminuir as desigualdades sociais e de saúde ao dar prioridade a quem tem maior necessidade.",
      "D": "[INCORRETA] Refere-se aos conselhos e conferências de saúde."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3379,
    "materia": "sus",
    "aula_id": "sus_a3",
    "tema": "sus_a3",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O princípio da 'Integralidade' do SUS significa que:),",
    "opcoes": [
      "A) O sistema deve oferecer um conjunto articulado de ações e serviços, desde a prevenção até a reabilitação, considerando o indivíduo como um todo biopsicossocial.",
      "B) O sistema deve atender apenas 100% dos casos de gripe.",
      "C) O sistema deve ser integrado apenas por médicos formados no Brasil.",
      "D) O sistema deve cobrar integralmente o valor da consulta de quem tem alta renda."
    ],
    "explicacao_geral": "A integralidade prevê que o cuidado não deve ser fragmentado em 'pedaços' do corpo ou da doença.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Integralidade** foca na visão holística do paciente e na continuidade do cuidado em todos os níveis.",
      "B": "[INCORRETA] Visão restritiva que nega o princípio.",
      "C": "[INCORRETA] O SUS permite médicos estrangeiros (Ex: Mais Médicos).",
      "D": "[INCORRETA] Fere a gratuidade e a universalidade."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3380,
    "materia": "sus",
    "aula_id": "sus_a3",
    "tema": "sus_a3",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "A divisão do sistema em níveis de complexidade (Atenção Básica, Especialidades e Alta Complexidade) é o que chamamos de:),",
    "opcoes": [
      "A) Regionalização.",
      "B) Universalidade.",
      "C) Resolutividade.",
      "D) Hierarquização."
    ],
    "explicacao_geral": "A hierarquização organiza o fluxo do paciente para que ele seja atendido no nível adequado à sua necessidade.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] É a organização geográfica do sistema.",
      "B": "[INCORRETA] É um princípio doutrinário de acesso.",
      "C": "[INCORRETA] É a capacidade de resolver os problemas no nível de atenção adequado.",
      "D": "[CORRETA] A **Hierarquização** organiza o sistema do menos complexo para o mais complexo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3381,
    "materia": "sus",
    "aula_id": "sus_a3",
    "tema": "sus_a3",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Um paciente atendido em uma Unidade Básica de Saúde (UBS) com suspeita de câncer de laringe é encaminhado para um hospital de referência para realizar biópsia e quimioterapia. Qual princípio organizativo garante que este fluxo funcione?),",
    "opcoes": [
      "A) Descentralização.",
      "B) Regionalização e Hierarquização.",
      "C) Equidade.",
      "D) Controle Social."
    ],
    "explicacao_geral": "A regionalização organiza os serviços por território, e a hierarquização organiza por complexidade.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Refere-se à gestão municipal.",
      "B": "[CORRETA] A **Regionalização e Hierarquização** permitem que o paciente transite pela **Rede de Atenção** conforme a necessidade técnica.",
      "C": "[INCORRETA] Refere-se à justiça distributiva.",
      "D": "[INCORRETA] Refere-se à participação popular na gestão."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3382,
    "materia": "sus",
    "aula_id": "sus_a3",
    "tema": "sus_a3",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "O princípio da 'Resolutividade' no SUS exige que os serviços de saúde estejam preparados para resolver a maioria dos problemas apresentados pela população. Qual a meta de resolutividade esperada da Atenção Básica?),",
    "opcoes": [
      "A) Aproximadamente 80% a 90% dos problemas de saúde da comunidade.",
      "B) Apenas 10%, pois tudo deve ser enviado ao especialista.",
      "C) 100%, sem necessidade de hospitais secundários.",
      "D) 0%, a UBS serve apenas para pesar crianças e medir pressão."
    ],
    "explicacao_geral": "Uma Atenção Básica forte filtra a entrada do sistema e evita a sobrecarga dos hospitais.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Espera-se que a **Atenção Básica** resolva a imensa **maioria (80-90%)** das demandas de saúde.",
      "B": "[INCORRETA] Se fosse assim, o sistema de especialistas colapsaria.",
      "C": "[INCORRETA] Casos complexos e cirurgias exigem níveis superiores de cuidado.",
      "D": "[INCORRETA] Visão preconceituosa que ignora o papel técnico do médico de família."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3383,
    "materia": "sus",
    "aula_id": "sus_a3",
    "tema": "sus_a3",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Qual a diferença fundamental entre 'Regionalização' e 'Descentralização' no contexto do SUS?),",
    "opcoes": [
      "A) São a mesma coisa.",
      "B) Regionalização é dar dinheiro; Descentralização é pedir exames.",
      "C) Descentralização é a transferência de responsabilidade gestora para Municípios e Estados; Regionalização é a articulação geográfica de serviços em territórios definidos.",
      "D) Descentralização ocorre em Brasília; Regionalização ocorre apenas em São Paulo."
    ],
    "explicacao_geral": "A descentralização é política e administrativa; a regionalização é operacional e geográfica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] São conceitos distintos da Lei 8.080.",
      "B": "[INCORRETA] Definições sem sentido técnico.",
      "C": "[CORRETA] A **Descentralização** foca na autonomia local; a **Regionalização** foca na eficiência da rede territorial.",
      "D": "[INCORRETA] São aplicáveis a todo o território nacional."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3384,
    "materia": "sus",
    "aula_id": "sus_a3",
    "tema": "sus_a3",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um conselho municipal de saúde vota contra a construção de uma nova praça com verba da saúde, exigindo que o dinheiro seja usado em remédios. Qual princípio organizativo está sendo exercido?),",
    "opcoes": [
      "A) Hierarquização.",
      "B) Equidade.",
      "C) Resolutividade.",
      "D) Participação Popular (Controle Social)."
    ],
    "explicacao_geral": "O controle social permite à comunidade decidir e fiscalizar as políticas públicas de saúde.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Refere-se aos níveis de atenção.",
      "B": "[INCORRETA] Refere-se à justiça distributiva.",
      "C": "[INCORRETA] Refere-se à capacidade técnica de cura/tratamento.",
      "D": "[CORRETA] A atuação dos **Conselhos de Saúde** é a expressão máxima da **Participação Popular**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula sus_a3 adicionadas.`);
