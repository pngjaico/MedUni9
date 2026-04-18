import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3753,
    "materia": "ind",
    "aula_id": "ind_a1",
    "tema": "ind_a1",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "A relação médico-paciente evoluiu ao longo do tempo. Qual o modelo em que o médico toma todas as decisões pelo paciente, sem consultá-lo, acreditando agir no seu 'melhor interesse'?),",
    "opcoes": [
      "A) Modelo Paternalista.",
      "B) Modelo Deliberativo.",
      "C) Modelo Informativo.",
      "D) Modelo Interpretativo."
    ],
    "explicacao_geral": "Embora bem-intencionado, esse modelo ignora a autonomia do paciente.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Modelo Paternalista** é marcado pela **hierarquia e falta de autonomia** do paciente.",
      "B": "[INCORRETA] Focado na discussão de valores e decisão compartilhada.",
      "C": "[INCORRETA] Médico fornece dados e o paciente decide sozinho.",
      "D": "[INCORRETA] Médico ajuda o paciente a entender seus próprios valores para decidir."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3754,
    "materia": "ind",
    "aula_id": "ind_a1",
    "tema": "ind_a1",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "O que diferencia a 'Empatia' da 'Simpatia' no contexto clínico?),",
    "opcoes": [
      "A) É a mesma coisa.",
      "B) Empatia é sentir pena do paciente.",
      "C) Simpatia é técnica; Empatia é amizade.",
      "D) Empatia é a capacidade de compreender os sentimentos e a perspectiva do paciente (colocar-se no lugar dele) mantendo a neutralidade técnica necessária."
    ],
    "explicacao_geral": "A empatia permite uma conexão humana sem que o médico sofra a dor do outro como se fosse sua (fusão emocional).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] São conceitos psicossociais distintos.",
      "B": "[INCORRETA] Pena (piedade) desvia o foco do empoderamento do paciente.",
      "C": "[INCORRETA] Definições incompletas.",
      "D": "[CORRETA] A **Empatia Clínica** é uma ferramenta de **conexão e diagnóstico** humanizado."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3755,
    "materia": "ind",
    "aula_id": "ind_a1",
    "tema": "ind_a1",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um paciente torna-se agressivo com o médico sem motivo aparente. O médico percebe que é parecida com a raiva que o paciente sente do pai. Qual o termo técnico para este fenômeno?),",
    "opcoes": [
      "A) Alucinação.",
      "B) Delírio persecutório.",
      "C) Transferência.",
      "D) Contratransferência."
    ],
    "explicacao_geral": "A transferência projeta sentimentos de figuras passadas no médico no presente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Percepção sem objeto.",
      "B": "[INCORRETA] Juízo falso da realidade.",
      "C": "[CORRETA] A **Transferência** é a projeção de **afetos do paciente** sobre o médico.",
      "D": "[INCORRETA] Seriam os sentimentos do médico projetados sobre o paciente."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3756,
    "materia": "ind",
    "aula_id": "ind_a1",
    "tema": "ind_a1",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "A 'Aliança Terapêutica' é fundamental para a adesão ao tratamento. O que a caracteriza?),",
    "opcoes": [
      "A) O paciente obedecer tudo sem questionar.",
      "B) Um acordo colaborativo entre médico e paciente sobre os objetivos e as tarefas do tratamento, baseado na confiança mútua.",
      "C) O médico pagar pelos remédios do paciente.",
      "D) Uma amizade íntima fora do consultório."
    ],
    "explicacao_geral": "Sem uma boa aliança, prescrições perfeitas podem falhar por falta de uso.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Isso é submissão, não aliança.",
      "B": "[CORRETA] A **Aliança Terapêutica** prevê a **corresponsabilidade** no cuidado.",
      "C": "[INCORRETA] Mistura de papéis e impossível logisticamente.",
      "D": "[INCORRETA] A relação deve manter o setting profissional."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3757,
    "materia": "ind",
    "aula_id": "ind_a1",
    "tema": "ind_a1",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "Em uma situação de urgência risco de morte, o paciente está inconsciente e não há familiares presentes. O médico intervém sem autorização prévia. Qual o respaldo ético?),",
    "opcoes": [
      "A) Não há respaldo, o médico será processado.",
      "B) O médico é dono do corpo do paciente.",
      "C) O paciente assinou um contrato invisível ao nascer.",
      "D) O Princípio da Beneficência e o dever de socorro em emergência, agindo no benefício presumido do paciente na impossibilidade de consultar sua autonomia."
    ],
    "explicacao_geral": "O Código de Ética Médica autoriza a intervenção em risco iminente de morte.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Omitir socorro seria o crime.",
      "B": "[INCORRETA] Visão absurda do direito à vida.",
      "C": "[INCORRETA] Sem valor jurídico.",
      "D": "[CORRETA] A **Presunção de Beneficência** autoriza o agir em **emergências críticas**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3758,
    "materia": "ind",
    "aula_id": "ind_a1",
    "tema": "ind_a1",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O fenômeno da 'Iatrogenia' pode ocorrer por falhas na comunicação. O que significa uma 'iatrogenia de palavra' (ou psicogênica)?),",
    "opcoes": [
      "A) Um dano psicológico ou físico causado ao paciente por uma explicação inadequada, pessimista ou insensível do médico.",
      "B) Um erro na dose do remédio.",
      "C) Um corte acidental durante a cirurgia.",
      "D) Uma alergia desconhecida."
    ],
    "explicacao_geral": "Palavras podem adoecer tanto quanto vírus em pacientes vulneráveis.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Iatrogenia de Palavra** reforça a importância do **cuidado com o discurso** médico.",
      "B": "[INCORRETA] Erro de medicação.",
      "C": "[INCORRETA] Iatrogenia cirúrgica mecânica.",
      "D": "[INCORRETA] Evento adverso (não necessariamente iatrogênico se o padrão de cuidado for seguido)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3759,
    "materia": "ind",
    "aula_id": "ind_a1",
    "tema": "ind_a1",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "O médico sente irritação ou afeto excessivo por um paciente que o lembra de um irmão problemático. Qual a conduta correta perante este sentimento de 'Contratransferência'?),",
    "opcoes": [
      "A) Ignorar e fingir que não sente nada.",
      "B) Perceber o sentimento (autoconhecimento) e buscar supervisão ou terapia para que este afeto não prejudique a objetividade do tratamento.",
      "C) Parar de atender o paciente e mandá-lo embora sem explicação.",
      "D) Tornar-se amigo íntimo para resolver o conflito."
    ],
    "explicacao_geral": "É impossível não sentir, o segredo é o que fazer com o que se sente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O sentimento reprimido pode vazar em condutas médicas inadequadas.",
      "B": "[CORRETA] O **Gerenciamento da Contratransferência** é parte da **maturidade profissional**.",
      "C": "[INCORRETA] Abandono de paciente é antiético.",
      "D": "[INCORRETA] Quebra do contrato terapêutico e profissional."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3760,
    "materia": "ind",
    "aula_id": "ind_a1",
    "tema": "ind_a1",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Na abordagem 'Centrada na Pessoa', qual o foco principal da consulta além da doença (biológico)?),",
    "opcoes": [
      "A) Apenas os exames de imagem.",
      "B) O custo da consulta.",
      "C) A experiência do adoecimento, as expectativas, medos e sentimentos do paciente.",
      "D) A vida pessoal do médico."
    ],
    "explicacao_geral": "Diferencia o 'Disease' (biopatologia) do 'Illness' (experiência subjetiva).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Visão tecnicista fragmentada.",
      "B": "[INCORRETA] Visão administrativa.",
      "C": "[CORRETA] A **Abordagem Centrada na Pessoa** integra o biopsicossocial.",
      "D": "[INCORRETA] O foco deve permanecer no paciente."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula ind_a1 adicionadas.`);
