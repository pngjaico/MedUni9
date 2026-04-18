import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3817,
    "materia": "ind",
    "aula_id": "ind_a9",
    "tema": "ind_a9",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O trabalho em equipe no SUS deve ser 'interprofissional'. O que diferencia este modelo do trabalho puramente 'multiprofissional'?),",
    "opcoes": [
      "A) No multiprofissional existem mais médicos.",
      "B) No interprofissional, há uma colaboração real entre as diferentes áreas, com troca de saberes e planejamento conjunto, visando o bem-estar integral do paciente.",
      "C) No interprofissional, ninguém manda em ninguém.",
      "D) É apenas um nome diferente para a mesma coisa."
    ],
    "explicacao_geral": "A interprofissionalidade rompe com a fragmentação do cuidado (cada um faz sua parte isolado).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A quantidade de profissionais não define a interatividade.",
      "B": "[CORRETA] O **Trabalho Interprofissional** foca na **colaboração e integração** de olhares.",
      "C": "[INCORRETA] Existem lideranças situadas, mas focadas no processo dialógico.",
      "D": "[INCORRETA] São conceitos pedagógicos e assistenciais distintos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3818,
    "materia": "ind",
    "aula_id": "ind_a9",
    "tema": "ind_a9",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual a principal característica de uma 'Liderança Democrática' em uma equipe de saúde?),",
    "opcoes": [
      "A) O líder toma todas as decisões sozinho.",
      "B) O líder deixa a equipe fazer o que quiser sem supervisão.",
      "C) O líder é escolhido por sorteio.",
      "D) O líder incentiva a participação dos membros nas decisões, valoriza as opiniões e distribui responsabilidades."
    ],
    "explicacao_geral": "Diferente da liderança autocrática, a democrática gera maior engajamento e satisfação da equipe.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Liderança Autocrática.",
      "B": "[INCORRETA] Liderança Laissez-faire.",
      "C": "[INCORRETA] Liderança não é obra do acaso.",
      "D": "[CORRETA] A **Liderança Democrática** promove o **clima organizacional** positivo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3819,
    "materia": "ind",
    "aula_id": "ind_a9",
    "tema": "ind_a9",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Conflitos interpessoais são comuns em equipes de alta pressão (como UTIs). Qual a melhor estratégia para gestão desses conflitos?),",
    "opcoes": [
      "A) Comunicação assertiva, escuta ativa e foco nos objetivos comuns (o cuidado do paciente) em vez de ataques pessoais.",
      "B) Mandar quem não concorda embora.",
      "C) Fingir que o conflito não existe.",
      "D) Chamar os seguranças do hospital."
    ],
    "explicacao_geral": "Conflitos mal geridos aumentam o risco de erros médicos e desassistência.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Gestão de Conflitos** visa o **alinhamento da equipe**.",
      "B": "[INCORRETA] Gera alta rotatividade e piora o clima.",
      "C": "[INCORRETA] O problema tende a crescer e explodir posteriormente.",
      "D": "[INCORRETA] Resposta desproporcional para divergências de opinião profissional."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3820,
    "materia": "ind",
    "aula_id": "ind_a9",
    "tema": "ind_a9",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A 'Horizontalidade' nas relações interprofissionais significa:),",
    "opcoes": [
      "A) Que todos os profissionais ganham o mesmo salário.",
      "B) Que todos podem fazer cirurgias.",
      "C) O respeito mútuo aos saberes específicos de cada área, sem que uma profissão seja soberana sobre a outra em todas as decisões.",
      "D) Que o médico não tem mais responsabilidade."
    ],
    "explicacao_geral": "O médico mantém a responsabilidade técnica de seus atos, mas reconhece a autonomia clínica do enfermeiro, fisioterapeuta, etc.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Piso salarial é definido por categoria.",
      "B": "[INCORRETA] O ato cirúrgico é privativo do médico.",
      "C": "[CORRETA] A **Horizontalidade Éética** valoriza a **complementaridade** das profissões.",
      "D": "[INCORRETA] A responsabilidade é compartilhada e individual simultaneamente."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3821,
    "materia": "ind",
    "aula_id": "ind_a9",
    "tema": "ind_a9",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Um enfermeiro percebe que o médico prescreveu uma dose errada de um medicamento perigoso. Como deve ser a abordagem interprofissional?),",
    "opcoes": [
      "A) Não falar nada, pois o médico é quem manda.",
      "B) Questionar o médico de forma respeitosa e privada, apresentando sua dúvida técnica para garantir a segurança do paciente.",
      "C) Gritar no corredor para todos ouvirem o erro.",
      "D) Riscar a prescrição sem avisar o médico."
    ],
    "explicacao_geral": "A barreira contra o erro é coletiva; o enfermeiro tem o dever ético de não administrar dose sabidamente errada.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Omissão de socorro e negligência também do enfermeiro.",
      "B": "[CORRETA] A **Segurança do Paciente** é garantida pela **dupla checagem e comunicação aberta**.",
      "C": "[INCORRETA] Desrespeitoso e humilhante; quebra o clima de equipe.",
      "D": "[INCORRETA] Ilegal; alteração de prontuário deve ser discutida."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3822,
    "materia": "ind",
    "aula_id": "ind_a9",
    "tema": "ind_a9",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O conceito de 'PTS' (Projeto Terapêutico Singular) é fruto do trabalho em equipe. O que o define?),",
    "opcoes": [
      "A) Um plano feito apenas por um médico sozinho.",
      "B) Uma cirurgia rápida.",
      "C) Mandar o paciente para casa com remédio.",
      "D) Um conjunto de propostas terapêuticas articuladas pela equipe interprofissional para um sujeito/família em situação de vulnerabilidade, discutido com o próprio paciente."
    ],
    "explicacao_geral": "O PTS é comum na saúde mental e em casos complexos da atenção básica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Plano individual não é PTS.",
      "B": "[INCORRETA] Sem relação.",
      "C": "[INCORRETA] Conduta isolada.",
      "D": "[CORRETA] O **PTS** personifica a **interprofissionalidade no SUS**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3823,
    "materia": "ind",
    "aula_id": "ind_a9",
    "tema": "ind_a9",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A 'Liderança Situacional' recomenda que o líder mude seu estilo conforme:),",
    "opcoes": [
      "A) O nível de maturidade e competência da equipe para a tarefa específica naquele momento.",
      "B) O humor que ele acorda no dia.",
      "C) O salário que ele vai receber no final do mês.",
      "D) O tempo lá fora (sol ou chuva)."
    ],
    "explicacao_geral": "Uma equipe experiente exige menos direcionamento e mais delegação; uma iniciante exige supervisão próxima.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Liderança Situacional** adapta o comando à **realidade do grupo**.",
      "B": "[INCORRETA] Líder deve ser estável emocionalmente.",
      "C": "[INCORRETA] Fator externo.",
      "D": "[INCORRETA] Irrelevante."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3824,
    "materia": "ind",
    "aula_id": "ind_a9",
    "tema": "ind_a9",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Por que o 'Brainstorming' (tempestade de ideias) é útil em reuniões de equipe de saúde?),",
    "opcoes": [
      "A) Para o médico mostrar que sabe mais que os outros.",
      "B) Para fazer a reunião demorar mais.",
      "C) Para estimular a criatividade e encontrar soluções não óbvias para casos complexos através da contribuição livre de todos os membros.",
      "D) Não tem utilidade na medicina."
    ],
    "explicacao_geral": "Diferentes perspectivas ajudam a ver o que um único profissional poderia deixar passar.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Bloqueia a participação alheia.",
      "B": "[INCORRETA] O foco deve ser a eficiência resolutiva.",
      "C": "[CORRETA] A **Colaboração Criativa** enriquece o **cuidado ao paciente**.",
      "D": "[INCORRETA] Essencial em ambientes de incerteza clínica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula ind_a9 adicionadas.`);
