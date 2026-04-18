import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3417,
    "materia": "sus",
    "aula_id": "sus_a8",
    "tema": "sus_a8",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "As Redes de Atenção à Saúde (RAS) visam superar a fragmentação do cuidado. Qual é o nó da rede que deve atuar como o 'centro de comunicação' e coordenador de todo o sistema?),",
    "opcoes": [
      "A) Hospital de Alta Complexidade.",
      "B) Atenção Primária à Saúde (UBS/ESF).",
      "C) Laboratórios de exames especializados.",
      "D) O gabinete do Prefeito."
    ],
    "explicacao_geral": "A APS conhece o território e o histórico do paciente, sendo capaz de organizar sua jornada pela rede.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O hospital é um ponto de atenção para casos agudos ou complexos, não um coordenador contínuo.",
      "B": "[CORRETA] A **Atenção Primária** é o centro ordenador da **Rede de Atenção à Saúde**.",
      "C": "[INCORRETA] São serviços de apoio diagnóstico.",
      "D": "[INCORRETA] Instância política, não assistencial."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3418,
    "materia": "sus",
    "aula_id": "sus_a8",
    "tema": "sus_a8",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual das redes temáticas do SUS é voltada especificamente para o cuidado integral à gestante e à criança até os 24 meses?),",
    "opcoes": [
      "A) Rede de Cuidados à Pessoa com Deficiência.",
      "B) Rede de Atenção Psicossocial (RAPS).",
      "C) Rede de Urgência e Emergência (RUE).",
      "D) Rede Cegonha."
    ],
    "explicacao_geral": "A Rede Cegonha visa reduzir a mortalidade materna e infantil através da humanização e segurança no parto.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Foco em reabilitação e inclusão.",
      "B": "[INCORRETA] Foco em saúde mental e dependência química.",
      "C": "[INCORRETA] Foco no pronto atendimento e SAMU.",
      "D": "[CORRETA] A **Rede Cegonha** organiza o cuidado materno-infantil em todos os pontos da rede."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3419,
    "materia": "sus",
    "aula_id": "sus_a8",
    "tema": "sus_a8",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Diferente dos modelos tradicionais piramidais (onde o hospital manda em tudo), as Redes de Atenção à Saúde são consideradas estruturas:),",
    "opcoes": [
      "A) Unilaterais.",
      "B) Ditatoriais.",
      "C) Poliárquicas (com horizontalidade entre os pontos de atenção e centralidade na APS).",
      "D) Caóticas e sem ordem."
    ],
    "explicacao_geral": "A poliarquia significa que cada ponto tem sua importância técnica integrada, sem um 'mestre' absoluto acima dos outros em termos de valor assistencial.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O fluxo é multidirecional.",
      "B": "[INCORRETA] O SUS é democrático e pactuado.",
      "C": "[CORRETA] A **estrutura poliárquica** permite a integração coordenada dos diversos serviços.",
      "D": "[INCORRETA] A rede é planejada e organizada através de protocolos e diretrizes."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3420,
    "materia": "sus",
    "aula_id": "sus_a8",
    "tema": "sus_a8",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente sofre um infarto em via pública. Ele é socorrido pelo SAMU e levado para um Hospital de Referência Cardíaca com sala de hemodinâmica. Qual rede está sendo acionada nesta jornada?),",
    "opcoes": [
      "A) Rede de Atenção às Doenças Crônicas em estágio inicial.",
      "B) Rede de Cuidados Paliativos.",
      "C) Rede de Atenção Básica apenas.",
      "D) Rede de Urgência e Emergência (RUE)."
    ],
    "explicacao_geral": "A RUE integra o atendimento pré-hospitalar móvel (SAMU), as portas de entrada hospitalares e as UPAs.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Embora o IAM seja uma agudização de doença crônica, o atendimento é de urgência.",
      "B": "[INCORRETA] Voltada para pacientes sem possibilidade de cura e sofrimento grave.",
      "C": "[INCORRETA] A UBS não tem suporte para hemodinâmica imediata.",
      "D": "[CORRETA] O complexo SAMU + Hospital de Referência compõe a **RUE**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3421,
    "materia": "sus",
    "aula_id": "sus_a8",
    "tema": "sus_a8",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Quais são os três elementos fundamentais que compõem a operação de uma Rede de Atenção à Saúde?),",
    "opcoes": [
      "A) População sob responsabilidade, Estrutura Operacional (pontos de atenção) e Modelo de Atenção à Saúde.",
      "B) Médicos, Enfermeiros e Prédios luxuosos.",
      "C) Dinheiro, Carros e Computadores.",
      "D) Leis, Decretos e Multas."
    ],
    "explicacao_geral": "A rede precisa saber a quem atende (população), onde atende (estrutura) e como atende (modelo).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Estes são os **pilares da base teórica da RAS** proposta por Eugênio Vilaça.",
      "B": "[INCORRETA] São recursos da rede, mas não definem seus elementos estruturantes conceituais.",
      "C": "[INCORRETA] Recursos instrumentais.",
      "D": "[INCORRETA] Meios regulatórios."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3422,
    "materia": "sus",
    "aula_id": "sus_a8",
    "tema": "sus_a8",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "O 'Sistema de Apoio' de uma RAS inclui serviços transversais que dão suporte a todos os pontos de atenção. Qual destes é um exemplo de Sistema de Apoio?),",
    "opcoes": [
      "A) Recepção da UBS.",
      "B) Assistência Farmacêutica e Apoio Diagnóstico (exames).",
      "C) O pátio do estacionamento do hospital.",
      "D) O jornal da cidade."
    ],
    "explicacao_geral": "Os sistemas de apoio garantem insumos e informações necessárias para o cuidado em qualquer nível.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ponto de acolhimento específico de uma unidade.",
      "B": "[CORRETA] **Farmácia** e **Laboratório** são serviços de apoio fundamentais na rede.",
      "C": "[INCORRETA] Infraestrutura física secundária.",
      "D": "[INCORRETA] Meio de comunicação social externo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3423,
    "materia": "sus",
    "aula_id": "sus_a8",
    "tema": "sus_a8",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "A 'Coordenação do Cuidado' pela APS falha quando:),",
    "opcoes": [
      "A) O médico da UBS encaminha o paciente corretamente.",
      "B) O paciente perde o papel do encaminhamento.",
      "C) O sistema de referência e contrarreferência não funciona, fazendo com que a informação do especialista nunca chegue de volta à equipe da família.",
      "D) A UBS abre no horário certo."
    ],
    "explicacao_geral": "Sem contrarreferência, o cuidado torna-se fragmentado ('mudo') entre os profissionais.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Faz parte da coordenação.",
      "B": "[INCORRETA] Erro operacional de adesão/organização do usuário, mas o sistema pode mitigar com prontuário eletrônico.",
      "C": "[CORRETA] A falha na **Contrarreferência** é o grande gargalo da coordenação de redes no SUS.",
      "D": "[INCORRETA] Condição básica de funcionamento, não falha."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3424,
    "materia": "sus",
    "aula_id": "sus_a8",
    "tema": "sus_a8",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Na Rede de Atenção Psicossocial (RAPS), qual o papel do CAPS (Centro de Atenção Psicossocial)?),",
    "opcoes": [
      "A) Oferecer tratamento especializado e reabilitação psicossocial para pessoas com sofrimento mental grave ou persistente.",
      "B) Servir como depósito de loucos para que não incomodem a sociedade.",
      "C) Funcionar apenas como farmácia de psicotrópicos.",
      "D) Substituir totalmente a necessidade de hospitais gerais."
    ],
    "explicacao_geral": "O CAPS é um serviço comunitário substitutivo ao modelo manicomial de exclusão.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **CAPS** é o nó estratégico da **RAPS** para casos de maior complexidade em saúde mental.",
      "B": "[INCORRETA] Visão contrária à Reforma Psiquiátrica e ao SUS.",
      "C": "[INCORRETA] Oferece cuidado multiprofissional (grupos, oficinas, atendimentos individuais).",
      "D": "[INCORRETA] Casos agudos graves podem exigir internação em leitos de psiquiatria em hospitais gerais."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula sus_a8 adicionadas.`);
