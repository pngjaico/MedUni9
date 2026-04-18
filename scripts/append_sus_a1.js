import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3361,
    "materia": "sus",
    "aula_id": "sus_a1",
    "tema": "sus_a1",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "Antes da criação do SUS, o acesso à saúde pública no Brasil era fragmentado. Quem tinha direito à assistência médica pelo INAMPS (Instituto Nacional de Assistência Médica da Previdência Social)?),",
    "opcoes": [
      "A) Toda a população brasileira, independente de renda.",
      "B) Apenas as crianças e gestantes.",
      "C) Apenas os trabalhadores com carteira assinada (contribuintes da previdência).",
      "D) Apenas os moradores de áreas rurais."
    ],
    "explicacao_geral": "O sistema era contributivo, deixando os 'indigentes' (não trabalhadores formais) dependentes de caridade ou santas casas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A universalidade só veio com a Constituição de 1988 e o SUS.",
      "B": "[INCORRETA] Havia programas específicos, mas o sistema previdenciário era para o trabalhador.",
      "C": "[CORRETA] O **INAMPS** era voltado ao **trabalhador formal**; o restante da população era excluída.",
      "D": "[INCORRETA] Os trabalhadores rurais foram incluídos tardiamente pelo FUNRURAL."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3362,
    "materia": "sus",
    "aula_id": "sus_a1",
    "tema": "sus_a1",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "Qual evento histórico, realizado em 1986, é considerado o marco fundamental da Reforma Sanitária e base para a criação do SUS na Constituição de 1988?),",
    "opcoes": [
      "A) 8ª Conferência Nacional de Saúde.",
      "B) Revolta da Vacina.",
      "C) Criação do Ministério da Saúde.",
      "D) Conferência de Alma-Ata."
    ],
    "explicacao_geral": "A 8ª Conferência foi a primeira com ampla participação popular e definiu o conceito de saúde como direito de todos.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **8ª CNS** consolidou as diretrizes do **SUS** e a democracia na saúde.",
      "B": "[INCORRETA] Ocorreu em 1904, contra a vacinação obrigatória liderada por Oswaldo Cruz.",
      "C": "[INCORRETA] Ocorreu em 1953, mas a reforma sanitária foi um movimento posterior.",
      "D": "[INCORRETA] Ocorreu na URSS em 1978, definindo a Atenção Primária em nível mundial."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3363,
    "materia": "sus",
    "aula_id": "sus_a1",
    "tema": "sus_a1",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Um historiador estuda o período de 1923, quando a 'Lei Eloy Chaves' foi promulgada. Qual a importância dessa lei para a previdência e saúde no Brasil?),",
    "opcoes": [
      "A) Criou o Ministério da Educação e Saúde.",
      "B) Criou as Caixas de Aposentadoria e Pensões (CAPs) por empresa.",
      "C) Instituiu a vacinação obrigatória contra a gripe.",
      "D) Deu fim ao INAMPS."
    ],
    "explicacao_geral": "As CAPs eram organizadas por empresas (como ferroviários) e iniciaram a relação entre trabalho formal e acesso à saúde.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ocorreu na década de 30 com Vargas.",
      "B": "[CORRETA] A **Lei Eloy Chaves** é o marco inicial da **Previdência Social** no Brasil via **CAPs**.",
      "C": "[INCORRETA] Não está relacionado à lei.",
      "D": "[INCORRETA] O INAMPS foi criado muito depois e extinto na década de 90."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3364,
    "materia": "sus",
    "aula_id": "sus_a1",
    "tema": "sus_a1",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Na 'Era Vargas', as CAPs (por empresa) foram substituídas por modelos organizados por categorias profissionais. Qual o nome dessa nova estrutura?),",
    "opcoes": [
      "A) SUS regionais.",
      "B) Santas Casas de Misericórdia.",
      "C) Unidades de Pronto Atendimento.",
      "D) Institutos de Aposentadoria e Pensões (IAPs)."
    ],
    "explicacao_geral": "Os IAPs (Ex: Marítimos, Bancários) centralizaram os recursos e o poder sobre o estado.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O SUS é pós-1988.",
      "B": "[INCORRETA] Instituições filantrópicas que existem desde o período colonial.",
      "C": "[INCORRETA] Modelo recente de atenção às urgências.",
      "D": "[CORRETA] Os **IAPs** centralizaram a previdência por **categoria profissional** durante o governo Vargas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3365,
    "materia": "sus",
    "aula_id": "sus_a1",
    "tema": "sus_a1",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Durante o início do século XX, o Brasil adotou o 'Sanitarismo Campanhista', liderado por figuras como Oswaldo Cruz. Qual era a principal estratégia desse modelo?),",
    "opcoes": [
      "A) Investimento pesado na atenção primária e prevenção individual.",
      "B) Democratização total das decisões de saúde.",
      "C) Ações autoritárias e impositivas focadas no controle de doenças específicas (pestes) que ameaçavam a economia exportadora.",
      "D) Criação de hospitais de luxo para a população carente."
    ],
    "explicacao_geral": "O objetivo era 'limpar' os portos (Rio e Santos) para garantir o comércio, muitas vezes usando a força policial.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O foco era no coletivo 'peste' e não no indivíduo ou prevenção ampla.",
      "B": "[INCORRETA] Era um modelo extremamente autoritário (gerando a Revolta da Vacina).",
      "C": "[CORRETA] O **Sanitarismo Campanhista** visava erradicar focos de doenças para proteger o **fluxo econômico**.",
      "D": "[INCORRETA] Absurdo para a época."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3366,
    "materia": "sus",
    "aula_id": "sus_a1",
    "tema": "sus_a1",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A Conferência de Alma-Ata (1978) influenciou profundamente a Reforma Sanitária Brasileira ao defender qual conceito fundamental?),",
    "opcoes": [
      "A) Atenção Primária à Saúde como porta de entrada e centro do sistema para atingir 'Saúde para todos no ano 2000'.",
      "B) Privatização total dos hospitais públicos.",
      "C) Uso obrigatório de tecnologia de última geração para todos os sintomas.",
      "D) Extinção da profissão de médico de família."
    ],
    "explicacao_geral": "Alma-Ata definiu que a saúde requer ações intersetoriais e foco na necessidade social básica.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] **Alma-Ata** é o marco mundial da **Atenção Primária à Saúde**.",
      "B": "[INCORRETA] Defendia justamente o papel do estado e da comunidade.",
      "C": "[INCORRETA] Defendia tecnologias apropriadas e custo-efetivas.",
      "D": "[INCORRETA] Pelo contrário, valorizou a medicina geral e comunitária."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3367,
    "materia": "sus",
    "aula_id": "sus_a1",
    "tema": "sus_a1",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "No período do Milagre Econômico (Ditadura Militar), houve um incentivo maciço ao 'Modelo Médico-Assistencial Privatista'. Como isso se refletia no sistema de saúde da época?),",
    "opcoes": [
      "A) Criação de milhares de postos de saúde na periferia.",
      "B) O governo (INAMPS) comprava serviços de hospitais privados e focava em cura/hospitalização, em vez de prevenção.",
      "C) Proibição do funcionamento de clínicas particulares.",
      "D) O foco era total na saúde ambiental e saneamento básico."
    ],
    "explicacao_geral": "Neste período, a 'medicina de cura' e a indústra hospitalar cresceram com subsidios estatais, negligenciando a saúde pública preventiva.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A rede pública de postos era mínima e negligenciada.",
      "B": "[CORRETA] O **Modelo Privatista** financiou o setor privado com verbas do **INAMPS**, focando no hospital.",
      "C": "[INCORRETA] Pelo contrário, houve estímulo à iniciativa privada.",
      "D": "[INCORRETA] O saneamento básico sofreu grande desinvestimento relativo nesse período."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3368,
    "materia": "sus",
    "aula_id": "sus_a1",
    "tema": "sus_a1",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Antes do SUS, os cidadãos que não tinham carteira assinada nem dinheiro para pagar consultas eram chamados na linguagem da época de:),",
    "opcoes": [
      "A) Clientes preferenciais.",
      "B) Segurados obrigatórios.",
      "C) Contribuintes facultativos.",
      "D) Indigentes."
    ],
    "explicacao_geral": "O termo refletia a falta de cidadania na saúde e a dependência da caridade.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ironia sem base técnica.",
      "B": "[INCORRETA] Eram os trabalhadores formais.",
      "C": "[INCORRETA] Não define o grupo excluído.",
      "D": "[CORRETA] O termo **indigente** era usado para designar os brasileiros sem direito ao sistema previdenciário de saúde."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula sus_a1 adicionadas.`);
