import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3793,
    "materia": "ind",
    "aula_id": "ind_a6",
    "tema": "ind_a6",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A Abordagem Centrada na Pessoa (ACP) propõe uma mudança de paradigma. Qual o foco principal além do diagnóstico puramente biológico?),",
    "opcoes": [
      "A) No custo dos medicamentos.",
      "B) Na compreensão da experiência subjetiva do paciente sobre sua doença (sentimentos, ideias, expectativas e impacto na função).",
      "C) No desejo da família apenas.",
      "D) Na rapidez do atendimento."
    ],
    "explicacao_geral": "O MCCP utiliza o acrônimo SIFE (Sentimentos, Ideias, Função e Expectativas) para explorar a doença.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Administrativo.",
      "B": "[CORRETA] A **Abordagem Centrada na Pessoa** integra o **biológico e o existencial**.",
      "C": "[INCORRETA] A família é importante, mas o foco é o indivíduo e sua autonomia.",
      "D": "[INCORRETA] Rapidez pode prejudicar a escuta qualificada."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3794,
    "materia": "ind",
    "aula_id": "ind_a6",
    "tema": "ind_a6",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "A 'Decisão Compartilhada' é um pilar da medicina moderna. O que ela significa na prática?),",
    "opcoes": [
      "A) O médico decide tudo e o paciente assina.",
      "B) O paciente decide tudo sem ouvir o médico.",
      "C) Sortear o tratamento.",
      "D) Médico e paciente discutem as opções, riscos e benefícios, integrando as evidências científicas aos valores e preferências do paciente para uma escolha mútua."
    ],
    "explicacao_geral": "A decisão compartilhada aumenta a adesão e a satisfação do paciente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Paternalismo.",
      "B": "[INCORRETA] Autonomismo radical ou abandono da responsabilidade médica.",
      "C": "[INCORRETA] Absurdo.",
      "D": "[CORRETA] A **Decisão Compartilhada** é a base da **ética clínica** atual."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3795,
    "materia": "ind",
    "aula_id": "ind_a6",
    "tema": "ind_a6",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "No modelo de Stewart (MCCP), o componente 'Entender a pessoa como um todo' envolve qual compreensão?),",
    "opcoes": [
      "A) Compreender o paciente no seu contexto familiar, social e de ciclo de vida.",
      "B) Saber apenas a altura e o peso.",
      "C) Conhecer os outros médicos que ele visita.",
      "D) Saber o time de futebol dele."
    ],
    "explicacao_geral": "O contexto social define muitas vezes a capacidade de autocuidado do paciente.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Contexto do Paciente** é fundamental para o **plano terapêutico** viável.",
      "B": "[INCORRETA] Insuficiente.",
      "C": "[INCORRETA] Importante para coordenação do cuidado, mas não define a pessoa 'como um todo'.",
      "D": "[INCORRETA] Curiosidade social, não pilar técnico da ACP."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3796,
    "materia": "ind",
    "aula_id": "ind_a6",
    "tema": "ind_a6",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um paciente recusa uma cirurgia cardíaca necessária por medo de morrer na mesa, preferindo tentar um tratamento clínico menos eficaz. Qual a conduta do médico na ACP?),",
    "opcoes": [
      "A) Dizer que ele é burro e vai morrer.",
      "B) Operar à força enquanto ele dorme.",
      "C) Validar o medo do paciente, explicar os riscos de ambas as escolhas e respeitar sua autonomia após garantir que ele compreendeu as consequências.",
      "D) Chamar a polícia para denunciar o paciente."
    ],
    "explicacao_geral": "A autonomia deve ser respeitada se o paciente for capaz e esclarecido.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Desrespeitoso e agressivo.",
      "B": "[INCORRETA] Crime de cárcere privado/agressão física se não houver risco iminente de morte súbita sem alternativa.",
      "C": "[CORRETA] O **Respeito à Autonomia** é prioridade na **Abordagem Centrada na Pessoa**.",
      "D": "[INCORRETA] Não há ilícito do paciente em recusar tratamento."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3797,
    "materia": "ind",
    "aula_id": "ind_a6",
    "tema": "ind_a6",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "O componente 'Elaborar um plano conjunto' do MCCP prevê pactuar objetivos. Por que isso é importante?),",
    "opcoes": [
      "A) Para o paciente pagar a consulta antes de sair.",
      "B) Porque se os objetivos do tratamento não forem os mesmos para médico e paciente, as chances de frustração e não-adesão são altas.",
      "C) Para o médico ter menos trabalho.",
      "D) Não é importante, o médico manda e pronto."
    ],
    "explicacao_geral": "O paciente deve sentir que o plano faz sentido na sua vida real.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Administrativo.",
      "B": "[CORRETA] O **Pacto Terapêutico** garante a **Aliança e Adesão**.",
      "C": "[INCORRETA] Pelo contrário, exige mais diálogo e tempo.",
      "D": "[INCORRETA] Paternalismo obsoleto."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3798,
    "materia": "ind",
    "aula_id": "ind_a6",
    "tema": "ind_a6",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A 'Prevenção Quaternária' está ligada à ACP. O que ela propõe?),",
    "opcoes": [
      "A) Vacinar todo mundo no bairro.",
      "B) Fazer check-ups anuais desnecessários.",
      "C) Operar todos os idosos preventivamente.",
      "D) Identificar pacientes em risco de excesso de medicalização (exames ou tratamentos inúteis) e protegê-los de intervenções médicas desnecessárias."
    ],
    "explicacao_geral": "O excesso de medicina também pode causar dano (sobre-diagnóstico).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Prevenção primária.",
      "B": "[INCORRETA] Pode gerar dano iatrogênico por falsos positivos.",
      "C": "[INCORRETA] Agrava riscos cirúrgicos sem necessidade.",
      "D": "[CORRETA] A **Prevenção Quaternária** evita o **dano iatrogênico** do sistema."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3799,
    "materia": "ind",
    "aula_id": "ind_a6",
    "tema": "ind_a6",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Uma mãe leva o filho com febre leve à UBS e exige antibiótico, mesmo após o médico explicar que é uma virose. Qual a abordagem correta usando a ACP?),",
    "opcoes": [
      "A) Explorar os medos e expectativas da mãe (ex: medo de pneumonia) antes de reafirmar a desnecessidade técnica, buscando um terreno comum para o cuidado sintomático.",
      "B) Dar o antibiótico para ela ir embora rápido.",
      "C) Expulsar a mãe da sala por ignorância.",
      "D) Dizer que o filho dela vai morrer se ela não obedecer."
    ],
    "explicacao_geral": "O pedido de antibiótico muitas vezes esconde uma angústia ('e se for algo grave?') que precisa de acolhimento, não apenas negação técnica.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Expectativa do Paciente**/família deve ser acolhida na **negociação** clínica.",
      "B": "[INCORRETA] Prática tecnicamente errada e antiética (gera resistência bacteriana).",
      "C": "[INCORRETA] Destrói o vínculo e o acesso à saúde.",
      "D": "[INCORRETA] Iatrogenia de palavra e agressão psicológica."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3800,
    "materia": "ind",
    "aula_id": "ind_a6",
    "tema": "ind_a6",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O fortalecimento da relação médico-pessoa é o 4º componente do modelo de Stewart. Como se consegue isso?),",
    "opcoes": [
      "A) Dando presentes ao paciente.",
      "B) Sendo paternalista e decidindo tudo pelo bem dele.",
      "C) Mantendo uma postura de honestidade, compaixão e continuidade do cuidado ao longo do tempo.",
      "D) Não atendendo o paciente se ele discordar do médico."
    ],
    "explicacao_geral": "O vínculo é a melhor ferramenta terapêutica que o médico possui.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Antiético.",
      "B": "[INCORRETA] Isso enfraquece a autonomia e a parceria.",
      "C": "[CORRETA] O **Vínculo Longitudinal** é o alicerce da **Medicina de Família e Comunidade**.",
      "D": "[INCORRETA] A divergência faz parte da relação e deve ser mediada."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula ind_a6 adicionadas.`);
