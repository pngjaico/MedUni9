import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3761,
    "materia": "ind",
    "aula_id": "ind_a2",
    "tema": "ind_a2",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O Protocolo SPIKES é uma diretriz reconhecida para a comunicação de notícias difíceis. O que a letra 'S' (Setting up the interview) recomenda?),",
    "opcoes": [
      "A) Dar a notícia no corredor lotado.",
      "B) Preparar o ambiente, garantindo privacidade, silêncio e evitando interrupções, além de envolver acompanhantes desejados pelo paciente.",
      "C) Ser o mais rápido possível.",
      "D) Usar um megafone."
    ],
    "explicacao_geral": "O ambiente influencia diretamente a forma como a notícia será processada emocionalmente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Quebra o sigilo e a dignidade.",
      "B": "[CORRETA] O **Acolhimento Físico** é o primeiro passo do **SPIKES**.",
      "C": "[INCORRETA] Exige tempo e paciência.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3762,
    "materia": "ind",
    "aula_id": "ind_a2",
    "tema": "ind_a2",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "No protocolo SPIKES, a etapa 'P' (Perception) orienta que o médico deve:),",
    "opcoes": [
      "A) Falar tudo o que sabe sobre o câncer.",
      "B) Pedir para o paciente sair da sala.",
      "C) Perguntar quanto o paciente pode pagar.",
      "D) Verificar a percepção do paciente: o que ele já sabe, suspeita ou entende sobre sua condição de saúde antes de prosseguir."
    ],
    "explicacao_geral": "Isso permite ao médico ajustar a linguagem e o tom da conversa ao nível de entendimento do paciente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pode causar sobrecarga de informação desnecessária.",
      "B": "[INCORRETA] É o foco da conversa.",
      "C": "[INCORRETA] Sem ética clínica.",
      "D": "[CORRETA] Entender o **conhecimento prévio** é vital para uma comunicação eficaz."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3763,
    "materia": "ind",
    "aula_id": "ind_a2",
    "tema": "ind_a2",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Durante a comunicação de um diagnóstico grave, o médico usa o termo 'Verdade Progressiva'. Em que consiste essa técnica?),",
    "opcoes": [
      "A) Dar a notícia em etapas, de acordo com o ritmo e a capacidade de absorção emocional demonstrada pelo paciente na conversa.",
      "B) Mentir para o paciente até ele melhorar.",
      "C) Dizer toda a verdade em 30 segundos.",
      "D) Mandar um e-mail com o diagnóstico."
    ],
    "explicacao_geral": "A verdade é um processo, não um evento único traumático.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Verdade Progressiva** respeita as **defesas psíquicas** do paciente.",
      "B": "[INCORRETA] Mentir é antiético e destrói a confiança.",
      "C": "[INCORRETA] Pode causar choque e incapacidade de entendimento.",
      "D": "[INCORRETA] Notícias difíceis devem ser dadas presencialmente."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3764,
    "materia": "ind",
    "aula_id": "ind_a2",
    "tema": "ind_a2",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Ao receber a notícia de uma doença terminal, o paciente começa a chorar intensamente. Qual a resposta mais adequada dentro da etapa 'E' (Emotions) do SPIKES?),",
    "opcoes": [
      "A) Sair da sala para deixar o paciente sozinho.",
      "B) Dizer 'não chore, vai ficar tudo bem'.",
      "C) Oferecer suporte empático, validar o sentimento ('vejo que isso é muito difícil para você') e permitir o silêncio para que a emoção seja exposta.",
      "D) Chamar a segurança."
    ],
    "explicacao_geral": "Tentar silenciar o choro (falsa alegria) demonstra incapacidade do médico de lidar com o sofrimento do outro.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Abandono no momento de maior necessidade.",
      "B": "[INCORRETA] Frase feita que invalida a dor legítima (clichê).",
      "C": "[CORRETA] O **Acolhimento da Emoção** fortalece o vínculo médico-paciente.",
      "D": "[INCORRETA] Reação desproporcional e agressiva."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3765,
    "materia": "ind",
    "aula_id": "ind_a2",
    "tema": "ind_a2",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "Um médico comunica um óbito pelo telefone por pressa. Por que essa prática é considerada inadequada no contexto da humanização?),",
    "opcoes": [
      "A) Porque o telefone custa caro.",
      "B) Porque o paciente pode estar dormindo.",
      "C) Porque a voz não é real.",
      "D) Porque impede o acolhimento imediato, a leitura de sinais não-verbais e desumaniza o momento da perda, devendo ser evitada salvo absoluta impossibilidade de encontro presencial."
    ],
    "explicacao_geral": "O contato visual e o toque (se adequado) são terapêuticos no luto.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Irrelevante.",
      "B": "[INCORRETA] Foco é a notícia, não o sono.",
      "C": "[INCORRETA] Visão técnica irrelevante.",
      "D": "[CORRETA] A **Presencialidade** é ética na **comunicação de óbito**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3766,
    "materia": "ind",
    "aula_id": "ind_a2",
    "tema": "ind_a2",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "A etapa 'K' (Knowledge) recomenda evitar termos técnicos. Como o médico deve explicar um 'Carcinoma Espinocelular com metástase hepática' para um paciente leigo?),",
    "opcoes": [
      "A) Repetir o termo técnico até ele decorar.",
      "B) 'O senhor está com um câncer de pele que se espalhou para o fígado'.",
      "C) 'Houve uma mutação p53 com infiltração parenquimatosa'.",
      "D) 'O senhor tem uma manchinha que não é nada'."
    ],
    "explicacao_geral": "A linguagem deve ser clara e honesta, sem jargões mas sem infantilização.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Não garante entendimento.",
      "B": "[CORRETA] A **Clareza na Linguagem** é essencial para o consentimento informado.",
      "C": "[INCORRETA] Linguagem de laboratório/acadêmica.",
      "D": "[INCORRETA] Mentir ou minimizar gravemente a doença é má prática."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3767,
    "materia": "ind",
    "aula_id": "ind_a2",
    "tema": "ind_a2",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A etapa 'I' (Invitation) do SPIKES refere-se a:),",
    "opcoes": [
      "A) Perguntar ao paciente o quanto ele quer saber agora sobre os detalhes da doença e do prognóstico.",
      "B) Convidar o paciente para jantar.",
      "C) Convidar outros médicos para assistir a consulta.",
      "D) Mandar um convite de casamento."
    ],
    "explicacao_geral": "Alguns pacientes preferem focar no tratamento inicialmente, outros querem cada detalhe técnico/prognóstico.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Convite** respeita a **autonomia e o tempo** do paciente.",
      "B": "[INCORRETA] Quebra de ética profissional.",
      "C": "[INCORRETA] Exige autorização do paciente e foco deve permanecer nele.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3768,
    "materia": "ind",
    "aula_id": "ind_a2",
    "tema": "ind_a2",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O que deve ser feito na etapa 'S' (Summary and Strategy) final do protocolo?),",
    "opcoes": [
      "A) Pedir para o paciente pagar a conta.",
      "B) Ir embora sem falar mais nada.",
      "C) Resumir o que foi discutido, pactuar os próximos passos do tratamento e certificar-se de que o paciente sabe como contatar a equipe em caso de dúvidas.",
      "D) Dizer para o paciente procurar no Google."
    ],
    "explicacao_geral": "O encerramento deve dar uma sensação de direção e segurança ao paciente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Administrativo.",
      "B": "[INCORRETA] Deixa o paciente desamparado.",
      "C": "[CORRETA] A **Estratégia e Resumo** garantem a continuidade do **cuidado**.",
      "D": "[INCORRETA] Desrespeitoso e perigoso tecnicamente."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula ind_a2 adicionadas.`);
