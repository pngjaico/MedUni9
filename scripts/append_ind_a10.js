import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3825,
    "materia": "ind",
    "aula_id": "ind_a10",
    "tema": "ind_a10",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "No contexto da saúde, o que diferencia 'Religiosidade' de 'Espiritualidade'?),",
    "opcoes": [
      "A) É a mesma coisa.",
      "B) Religiosidade refere-se à adesão a sistemas organizados de crenças e rituais; Espiritualidade é a busca pessoal de sentido e propósito na vida, independente de uma religião formal.",
      "C) Religiosidade é para idosos e espiritualidade para jovens.",
      "D) Somente a religião tem valor terapêutico."
    ],
    "explicacao_geral": "Um paciente pode ser espiritualizado sem possuir uma religião específica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] São dimensões distintas da experiência humana.",
      "B": "[CORRETA] A **Espiritualidade** é um fenômeno **universal e subjetivo**.",
      "C": "[INCORRETA] Ambas podem estar presentes em qualquer idade.",
      "D": "[INCORRETA] Ambas as dimensões impactam positivamente o enfrentamento da doença."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3826,
    "materia": "ind",
    "aula_id": "ind_a10",
    "tema": "ind_a10",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "O Protocolo FICA é uma ferramenta para abordar a espiritualidade na consulta. O que a letra 'F' (Faith/Fé) questiona?),",
    "opcoes": [
      "A) Quanto dinheiro o paciente doa para a igreja.",
      "B) Se o paciente acredita em milagres.",
      "C) Onde o paciente vai ser enterrado.",
      "D) Se o paciente se considera uma pessoa espiritualizada ou religiosa, ou se possui crenças que o ajudam a lidar com o estresse."
    ],
    "explicacao_geral": "A pergunta deve ser aberta e não impositiva.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Invasivo e irrelevante clinicamente.",
      "B": "[INCORRETA] Específico demais.",
      "C": "[INCORRETA] Refere-se a cuidados pós-morte/terminalidade, não ao drive inicial do FICA.",
      "D": "[CORRETA] O **FICA** ajuda a integrar a **dimensão espiritual** na anamnese."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3827,
    "materia": "ind",
    "aula_id": "ind_a10",
    "tema": "ind_a10",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual a principal diretriz ética para o médico ao abordar a religião de um paciente?),",
    "opcoes": [
      "A) Tentar converter o paciente à sua própria religião para ele se sentir melhor.",
      "B) Dizer que a religião dele não tem base científica e ele deve parar de rezar.",
      "C) Respeitá-la integralmente, reconhecendo seu papel no enfrentamento da doença, sem impor suas próprias crenças ou julgar as do paciente.",
      "D) Ignorar o assunto, pois não é papel do médico."
    ],
    "explicacao_geral": "O proselitismo (tentar converter o outro) é vedado pela ética médica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Abuso de poder e antiético.",
      "B": "[INCORRETA] Desrespeitoso e destrói o vínculo.",
      "C": "[CORRETA] A **Neutralidade Ética** vige na abordagem da **religiosidade**.",
      "D": "[INCORRETA] A espiritualidade é um determinante de saúde e deve ser considerada se relevante para o paciente."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3828,
    "materia": "ind",
    "aula_id": "ind_a10",
    "tema": "ind_a10",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Um paciente terminal pede para que o líder de sua comunidade religiosa faça uma oração no quarto do hospital. Qual a conduta da equipe?),",
    "opcoes": [
      "A) Permitir a entrada (seguindo as normas de higiene e horários), respeitando o desejo do paciente e garantindo sua assistência espiritual.",
      "B) Proibir, pois o hospital é um lugar de ciência.",
      "C) Só permitir se o médico for da mesma religião.",
      "D) Chamar a polícia."
    ],
    "explicacao_geral": "O direito à assistência religiosa em hospitais é garantido por lei federal no Brasil.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Assistência Religiosa Hospitalar** é um direito do paciente.",
      "B": "[INCORRETA] Viola o direito à liberdade religiosa e o bem-estar do paciente.",
      "C": "[INCORRETA] Irrelevante.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3829,
    "materia": "ind",
    "aula_id": "ind_a10",
    "tema": "ind_a10",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A 'Angústia Espiritual' pode se manifestar clinicamente em um paciente grave. O que ela representa?),",
    "opcoes": [
      "A) Quando o paciente esquece as rezas.",
      "B) Uma crise de sentido, onde o paciente questiona suas crenças, sente-se abandonado por Deus ou punido pela doença, o que pode agravar a percepção da dor física.",
      "C) Um sintoma de falta de oxigênio no cérebro.",
      "D) O desejo de comer doces."
    ],
    "explicacao_geral": "A dor total (conceito de Cicely Saunders) inclui a dor física, social, emocional e espiritual.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Perda de memória, não angústia de sentido.",
      "B": "[CORRETA] A **Angústia Espiritual** requer **atenção e suporte** da equipe paliativa.",
      "C": "[INCORRETA] Hipóxia tem outros sinais clínicos.",
      "D": "[INCORRETA] Irrelevante."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3830,
    "materia": "ind",
    "aula_id": "ind_a10",
    "tema": "ind_a10",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Por que abordar a espiritualidade pode ajudar na 'Adesão ao Tratamento'?),",
    "opcoes": [
      "A) Porque o paciente tem medo de ir para o inferno se não tomar o remédio.",
      "B) Porque o médico ganha mais confiança da igreja.",
      "C) Não ajuda.",
      "D) Porque permite entender se alguma crença do paciente conflita com o tratamento e ajuda a encontrar motivações internas (vontade de viver/significado) para o autocuidado."
    ],
    "explicacao_geral": "Crenças sobre 'castigo' ou 'vontade divina' podem fazer o paciente abandonar medicações se não discutidas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Visão baseada no medo, não é o foco da abordagem clínica técnica.",
      "B": "[INCORRETA] Sem benefício administrativo/mercantil.",
      "C": "[INCORRETA] Estudos mostram impacto positivo.",
      "D": "[CORRETA] A **Espiritualidade** influencia as **escolhas terapêuticas** do paciente."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3831,
    "materia": "ind",
    "aula_id": "ind_a10",
    "tema": "ind_a10",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A letra 'C' (Community/Comunidade) do protocolo FICA busca identificar:),",
    "opcoes": [
      "A) Se o paciente participa de algum grupo ou comunidade que o apoie emocionalmente em momentos de crise.",
      "B) O nome da rua onde o paciente mora.",
      "C) Se ele deve ser isolado do bairro.",
      "D) A quantidade de pessoas que vivem na mesma casa."
    ],
    "explicacao_geral": "O suporte social via comunidades de fé é um forte protetor de saúde mental.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Suporte Comunitário** é um recurso no **plano de cuidados**.",
      "B": "[INCORRETA] Dado de endereço/identificação.",
      "C": "[INCORRETA] Pelo contrário, busca integração.",
      "D": "[INCORRETA] Refere-se a composição familiar primária."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3832,
    "materia": "ind",
    "aula_id": "ind_a10",
    "tema": "ind_a10",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um paciente recusa uma transfusão de sangue por motivo religioso (ex: Testemunha de Jeová), estando consciente e capaz. Qual a diretriz do CFM (Resolução 2232/2019) para esse caso fora de emergência?),",
    "opcoes": [
      "A) O médico deve obrigar a transfusão.",
      "B) O paciente deve ser expulso do hospital.",
      "C) O médico deve respeitar a recusa terapêutica do paciente capaz, informando os riscos e buscando alternativas terapêuticas se possível.",
      "D) O médico deve chamar a justiça para prender o paciente."
    ],
    "explicacao_geral": "A autonomia prevalece sobre o desejo do médico de tratar se o risco de morte não for iminente e imediato.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Fora de risco de morte iminente, é violação da liberdade religiosa e física.",
      "B": "[INCORRETA] Abandono de incapaz/paciente.",
      "C": "[CORRETA] O **Direito de Recusa Terapêutica** por convicção é garantido ao **paciente lúcido**.",
      "D": "[INCORRETA] O paciente não comete crime ao recusar tratamento para si."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula ind_a10 adicionadas.`);
