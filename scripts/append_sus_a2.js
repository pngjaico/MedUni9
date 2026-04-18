import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3369,
    "materia": "sus",
    "aula_id": "sus_a2",
    "tema": "sus_a2",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "De acordo com o Artigo 196 da Constituição Federal de 1988, qual a definição de SAÚDE e o papel do Estado?),",
    "opcoes": [
      "A) A saúde é direito de todos e dever do Estado.",
      "B) A saúde é dever de cada cidadão e o Estado só intervém em casos de morte.",
      "C) A saúde é opcional e cabe às empresas privadas garanti-la.",
      "D) A saúde é direito apenas de quem contribui com impostos específicos."
    ],
    "explicacao_geral": "O Art. 196 é a pedra fundamental do SUS, estabelecendo a universalidade.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Esta é a redação literal e o princípio máximo da **universalidade** e dever estatal.",
      "B": "[INCORRETA] O Estado tem papel proativo e preventivo, não apenas reativo.",
      "C": "[INCORRETA] A iniciativa privada é complementar, não a responsável primária pelo direito.",
      "D": "[INCORRETA] O SUS é financiado por toda a sociedade, mas o acesso é independente da contribuição direta."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3370,
    "materia": "sus",
    "aula_id": "sus_a2",
    "tema": "sus_a2",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "A Constituição de 1988 insere a Saúde dentro de um sistema maior de proteção social. Qual o nome desse sistema?),",
    "opcoes": [
      "A) Bolsa Família.",
      "B) Seguro Desemprego.",
      "C) Previdência Privada.",
      "D) Seguridade Social."
    ],
    "explicacao_geral": "A Seguridade Social compreende um conjunto integrado de ações destinadas a assegurar os direitos à Saúde, Previdência e Assistência Social.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Programa de transferência de renda, parte da assistência social.",
      "B": "[INCORRETA] Benefício trabalhista específico.",
      "C": "[INCORRETA] Complemento individual de renda.",
      "D": "[CORRETA] A **Seguridade Social** (Tríade: Saúde, Previdência e Assistência) é o guarda-chuva constitucional."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3371,
    "materia": "sus",
    "aula_id": "sus_a2",
    "tema": "sus_a2",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Um paciente estrangeiro, em visita ao Brasil, sofre um acidente automobilístico. Ele tem direito a ser atendido pelo SUS sem custos?),",
    "opcoes": [
      "A) Não, o SUS é apenas para brasileiros natos.",
      "B) Sim, pois a Constituição garante o direito à saúde de forma universal a todos no território nacional.",
      "C) Sim, mas apenas se ele tiver seguro saúde internacional que reembolse o governo.",
      "D) Não, ele deve ser encaminhado para um hospital privado imediatamente."
    ],
    "explicacao_geral": "A universalidade do SUS não discrimina nacionalidade ou condição migratória.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Estrangeiros têm direito pleno ao atendimento de urgência e emergência.",
      "B": "[CORRETA] O **SUS é universal**, atendendo qualquer pessoa em solo brasileiro baseado no preceito constitucional.",
      "C": "[INCORRETA] O atendimento é gratuito no ponto de entrega, independente de seguro.",
      "D": "[INCORRETA] A rede pública deve realizar o atendimento inicial e estabilização."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3372,
    "materia": "sus",
    "aula_id": "sus_a2",
    "tema": "sus_a2",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O Artigo 199 da Constituição Federal trata da participação da iniciativa privada na saúde. Como essa participação é definida?),",
    "opcoes": [
      "A) A iniciativa privada é a gestora principal do SUS.",
      "B) É proibida a participação de hospitais particulares no território nacional.",
      "C) A assistência à saúde é livre à iniciativa privada, podendo participar do SUS de forma complementar.",
      "D) Hospitais privados devem ser estatizados obrigatoriamente."
    ],
    "explicacao_geral": "O Estado recorre ao setor privado quando sua capacidade instalada é insuficiente, priorizando entidades filantrópicas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A gestão é pública (federal, estadual ou municipal).",
      "B": "[INCORRETA] É livre ao setor privado explorar o mercado de saúde.",
      "C": "[CORRETA] O setor privado atua em **caráter complementar**, seguindo as diretrizes do SUS.",
      "D": "[INCORRETA] Não há previsão de estatização forçada."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3373,
    "materia": "sus",
    "aula_id": "sus_a2",
    "tema": "sus_a2",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "O Artigo 200 da CF/88 lista as competências do SUS. Qual destas ações é, constitucionalmente, dever do sistema único de saúde?),",
    "opcoes": [
      "A) Executar ações de vigilância sanitária e epidemiológica, bem como as de saúde do trabalhador.",
      "B) Garantir lucro para a indústria farmacêutica multinacional.",
      "C) Regular apenas planos de saúde privados, sem cuidar da rede pública.",
      "D) Construir moradias populares diretamente."
    ],
    "explicacao_geral": "As competências do SUS vão muito além da assistência médica hospitalar.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] As **vigilâncias** (sanitária, epidemiológica, ambiental) são atribuições centrais do SUS.",
      "B": "[INCORRETA] Objetivo contrário ao interesse público de saúde.",
      "C": "[INCORRETA] O SUS cuida de toda a rede e a ANS regula os planos.",
      "D": "[INCORRETA] Embora habitação seja um determinante social, a construção direta cabe a outros órgãos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3374,
    "materia": "sus",
    "aula_id": "sus_a2",
    "tema": "sus_a2",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Um prefeito decide cobrar uma taxa de serviço 'simbólica' para o atendimento de urgência em uma UPA municipal, alegando falta de verbas. Essa atitude é constitucional?),",
    "opcoes": [
      "A) Sim, desde que o valor seja baixo e aprovado pela câmara de vereadores.",
      "B) Não, pois um dos princípios explícitos da saúde na Constituição é a gratuidade do serviço público de saúde.",
      "C) Sim, apenas para pacientes que possuem plano de saúde.",
      "D) Poderia ser, se houvesse uma lei federal permitindo cobranças no SUS."
    ],
    "explicacao_geral": "O acesso deve ser igualitário e sem barreiras financeiras para o usuário no momento do uso.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Fere o princípio da gratuidade e universalidade.",
      "B": "[CORRETA] O atendimento no SUS é **gratuito no ponto de entrega**, financiado por impostos.",
      "C": "[INCORRETA] O hospital pode cobrar o plano de saúde via ressarcimento, mas não o paciente.",
      "D": "[INCORRETA] Nenhuma lei inferior pode contrariar o texto constitucional da saúde como direito e dever do estado."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3375,
    "materia": "sus",
    "aula_id": "sus_a2",
    "tema": "sus_a2",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "A 'Descentralização' com comando único em cada esfera de governo é uma diretriz constitucional do SUS. O que isso significa na prática municipal?),",
    "opcoes": [
      "A) Que o Ministério da Saúde de Brasília decide todos os detalhes da consulta local.",
      "B) Que cada bairro pode ter seu próprio sistema de saúde independente.",
      "C) Que o governo federal não tem nenhuma responsabilidade sobre a saúde.",
      "D) Que o Município tem autonomia e responsabilidade direta pela execução das ações de saúde em seu território, com comando único do Secretário Municipal de Saúde."
    ],
    "explicacao_geral": "A municipalização foi o grande motor da expansão do SUS na década de 90.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O Ministério formula políticas gerais e financia, mas não executa localmente tudo.",
      "B": "[INCORRETA] A descentralização para no nível municipal para garantir escala e gestão.",
      "C": "[INCORRETA] O financiamento é tripartite (União, Estados e Municípios).",
      "D": "[CORRETA] **Descentralização** significa passar o poder e a execução para as instâncias mais próximas do cidadão."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3376,
    "materia": "sus",
    "aula_id": "sus_a2",
    "tema": "sus_a2",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A Constituição de 1988 proíbe a destinação de recursos públicos para auxílios ou subvenções a instituições privadas com fins lucrativos. Qual a exceção a essa regra que permite o financiamento complementar?),",
    "opcoes": [
      "A) Entidades filantrópicas e sem fins lucrativos (como as Santas Casas).",
      "B) Grandes redes de hospitais de luxo estrangeiros.",
      "C) Clínicas de estética para a classe alta.",
      "D) Não existe exceção, nenhuma verba pública pode ir para o privado."
    ],
    "explicacao_geral": "O SUS prioriza o contratualismo com quem tem vocação social demonstrada.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] As **entidades filantrópicas** são as parceiras preferenciais do SUS na rede complementar.",
      "B": "[INCORRETA] Fere o preceito de prioridade social.",
      "C": "[INCORRETA] Assistência estética não essencial não é prioridade do financiamento SUS.",
      "D": "[INCORRETA] Existe a previsão legal para o caráter complementar."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula sus_a2 adicionadas.`);
