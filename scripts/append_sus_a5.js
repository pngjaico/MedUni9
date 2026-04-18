import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3393,
    "materia": "sus",
    "aula_id": "sus_a5",
    "tema": "sus_a5",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O modelo de atenção à saúde vigente no SUS, que coloca a Atenção Básica como centro do sistema, é orientado por qual visão?),",
    "opcoes": [
      "A) Modelo Hospitalocêntrico (foco na cura de doenças agudas).",
      "B) Estratégia Saúde da Família (foco na promoção, prevenção e acompanhamento contínuo).",
      "C) Modelo Privatista (foco no lucro e especialização).",
      "D) Modelo de Campanha (foco apenas em epidemias isoladas)."
    ],
    "explicacao_geral": "A ESF é o modelo substitutivo ao modelo tradicional focado apenas em hospitais.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O SUS tenta superar este modelo, que é fragmentado e caro.",
      "B": "[CORRETA] A **Estratégia Saúde da Família (ESF)** é o modelo prioritário da Atenção Básica.",
      "C": "[INCORRETA] O SUS é um sistema público e universal.",
      "D": "[INCORRETA] O SUS é permanente e integral."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3394,
    "materia": "sus",
    "aula_id": "sus_a5",
    "tema": "sus_a5",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "A Atenção Primária à Saúde (APS) possui quatro 'Atributos Essenciais'. Qual deles garante que o paciente seja acompanhado pelo mesmo médico/equipe ao longo do tempo?),",
    "opcoes": [
      "A) Acesso (Primerio Contato).",
      "B) Integralidade.",
      "C) Coordenação do Cuidado.",
      "D) Longitudinalidade."
    ],
    "explicacao_geral": "A longitudinalidade cria vínculo e confiança, melhorando os resultados em saúde crônica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Refere-se à porta de entrada aberta.",
      "B": "[INCORRETA] Refere-se à gama de serviços oferecidos.",
      "C": "[INCORRETA] Refere-se ao fluxo do paciente pela rede.",
      "D": "[CORRETA] A **Longitudinalidade** é o acompanhamento do paciente ao longo da vida e dos eventos de saúde."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3395,
    "materia": "sus",
    "aula_id": "sus_a5",
    "tema": "sus_a5",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um paciente com diabetes controlado na UBS precisa de uma cirurgia de catarata. A equipe de saúde da família organiza o encaminhamento para o especialista e, após a cirurgia, monitora o uso dos colírios e a cicatrização. Qual atributo da APS está sendo exercido?),",
    "opcoes": [
      "A) Privatização.",
      "B) Acesso restrito.",
      "C) Coordenação do Cuidado.",
      "D) Centralização Federal."
    ],
    "explicacao_geral": "A APS deve ser o 'maestro' que sabe onde o paciente está e o que está fazendo em outros níveis da rede.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O processo é dentro da rede pública ou contratualizada.",
      "B": "[INCORRETA] Pelo contrário, houve acesso ao nível secundário.",
      "C": "[CORRETA] A **Coordenação do Cuidado** garante que a informação acompanhe o paciente entre os níveis de atenção.",
      "D": "[INCORRETA] O processo é local e estadual/municipal."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3396,
    "materia": "sus",
    "aula_id": "sus_a5",
    "tema": "sus_a5",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O modelo 'Flexneriano' (ou Biomédico), que dominou a medicina por décadas, é criticado no contexto do SUS por qual motivo?),",
    "opcoes": [
      "A) Por ser focado na doença e na especialização excessiva, negligenciando os aspectos sociais e a prevenção.",
      "B) Por ser muito barato e simples.",
      "C) Por proibir o uso de estetoscópios.",
      "D) Por defender que todos devem ter acesso à saúde."
    ],
    "explicacao_geral": "O modelo flexneriano fragmenta o corpo humano e foca apenas no tratamento da patologia biológica isolada.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Modelo Biomédico** é focado na cura da 'máquina' biológica, ignorando o contexto de vida.",
      "B": "[INCORRETA] Pelo contrário, exige alta tecnologia e é muito custoso.",
      "C": "[INCORRETA] Absurdo sem base histórica.",
      "D": "[INCORRETA] Esta é uma defesa do modelo sanitário/comunitário, não do puramente flexneriano."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3397,
    "materia": "sus",
    "aula_id": "sus_a5",
    "tema": "sus_a5",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A 'Territorialização' é uma ferramenta fundamental na Estratégia Saúde da Família. Qual o seu propósito prático?),",
    "opcoes": [
      "A) Construir muros entre os bairros.",
      "B) Mapear a área de atuação da equipe, identificando riscos socioambientais e as condições de vida da população adscrita.",
      "C) Expulsar moradores que não nasceram na cidade.",
      "D) Vender terrenos baldios de posse da prefeitura."
    ],
    "explicacao_geral": "Conhecer o território permite à equipe atuar sobre os determinantes sociais específicos de cada microárea.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] As fronteiras são apenas administrativas e sanitárias.",
      "B": "[CORRETA] A **Territorialização** permite o planejamento estratégico baseado na realidade local.",
      "C": "[INCORRETA] O SUS atende a todos por universalidade.",
      "D": "[INCORRETA] Não é função da saúde."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3398,
    "materia": "sus",
    "aula_id": "sus_a5",
    "tema": "sus_a5",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um médico de família visita uma paciente acamada por sequela de AVC. Durante a visita, ele percebe que o cuidador está exausto e orienta cuidados também para ele. Qual atributo derivado da APS está sendo exercido?),",
    "opcoes": [
      "A) Acesso Facilitado.",
      "B) Eficiência hospitalar.",
      "C) Lucratividade.",
      "D) Orientação Familiar."
    ],
    "explicacao_geral": "O sofrimento de um membro da família afeta a saúde de todos, e a APS deve olhar para esse núcleo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A visita domiciliar facilita o acesso, mas o olhar para o cuidador define outro atributo.",
      "B": "[INCORRETA] Ação domiciliar preventiva/reabilitadora.",
      "C": "[INCORRETA] Alheio ao contexto do SUS.",
      "D": "[CORRETA] A **Orientação Familiar** entende que a família é a unidade de cuidado."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3399,
    "materia": "sus",
    "aula_id": "sus_a5",
    "tema": "sus_a5",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A Política Nacional de Atenção Básica (PNAB) define que a composição MÍNIMA de uma Equipe de Saúde da Família (eSF) deve conter quais profissionais?),",
    "opcoes": [
      "A) Médico (preferencialmente de família), Enfermeiro, Técnico de Enfermagem e Agentes Comunitários de Saúde (ACS).",
      "B) Apenas Médico e Segurança particular.",
      "C) Médico, Dentista e Advogado.",
      "D) Nutricionista, Psicólogo e Fisioterapeuta (exclusivamente)."
    ],
    "explicacao_geral": "Os demais profissionais (como do eMulti/NASF) atuam como apoio matricial e não são a eSF mínima.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Esta é a **composição básica** da eSF segundo a PNAB.",
      "B": "[INCORRETA] Falta a enfermagem e o ACS, que são fundamentais.",
      "C": "[INCORRETA] Equipe de Saúde Bucal é modalidade complementar.",
      "D": "[INCORRETA] São profissionais de apoio especializado na rede básica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3400,
    "materia": "sus",
    "aula_id": "sus_a5",
    "tema": "sus_a5",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Uma UBS decide abrir em horário estendido (até às 21h) para atender trabalhadores que não conseguem ir ao médico durante o horário comercial. Qual atributo essencial da APS está sendo fortalecido?),",
    "opcoes": [
      "A) Integralidade.",
      "B) Longitudinalidade.",
      "C) Acesso (Primer Contato).",
      "D) Regionalização."
    ],
    "explicacao_geral": "Acesso não é apenas ter o prédio aberto, mas ter horários e acolhimento compatíveis com a necessidade da população.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Refere-se à oferta de serviços diversos.",
      "B": "[INCORRETA] Refere-se ao acompanhamento ao longo do tempo.",
      "C": "[CORRETA] A redução de barreiras geográficas, temporais e organizacionais melhora o **Acesso**.",
      "D": "[INCORRETA] Atributo organizativo da rede territorial."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula sus_a5 adicionadas.`);
