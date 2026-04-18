import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3409,
    "materia": "sus",
    "aula_id": "sus_a7",
    "tema": "sus_a7",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A participação da comunidade na gestão do SUS é um direito conquistado na Reforma Sanitária. Qual o nome dado a esse mecanismo de fiscalização e decisão exercido pelos cidadãos?),",
    "opcoes": [
      "A) Marketing Social.",
      "B) Controle Social.",
      "C) Auditoria Privada.",
      "D) Consultoria Política."
    ],
    "explicacao_geral": "O controle social garante que as políticas de saúde reflitam as necessidades reais da população.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ferramenta de comunicação, não de gestão democrática.",
      "B": "[CORRETA] O **Controle Social** é a participação da sociedade na gestão e fiscalização do SUS.",
      "C": "[INCORRETA] O controle social é público e democrático.",
      "D": "[INCORRETA] Vai além da consultoria, tendo caráter deliberativo nos conselhos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3410,
    "materia": "sus",
    "aula_id": "sus_a7",
    "tema": "sus_a7",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Os Conselhos de Saúde são instâncias colegiadas que atuam em cada esfera de governo. Sobre sua composição, o que significa ela ser 'Paritária'?),",
    "opcoes": [
      "A) Que 100% dos membros são médicos.",
      "B) Que todos os membros devem ter a mesma idade.",
      "C) Que 50% dos membros são políticos e 50% são empresas.",
      "D) Que 50% dos membros obrigatoriamente representam os usuários do SUS."
    ],
    "explicacao_geral": "A paridade protege a voz da comunidade contra o domínio técnico ou político isolado.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Conselhos são multiprofissionais e populares.",
      "B": "[INCORRETA] Não há critério de idade para paridade.",
      "C": "[INCORRETA] Os usuários devem ser a maioria relativa.",
      "D": "[CORRETA] **Paridade** no SUS significa que os **usuários detêm 50% das cadeiras**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3411,
    "materia": "sus",
    "aula_id": "sus_a7",
    "tema": "sus_a7",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um grupo de moradores de um bairro está insatisfeito com a falta de pediatras na UBS local. Qual a via institucional MAIS EFICAZ para que eles levem essa demanda diretamente para a gestão municipal do SUS?),",
    "opcoes": [
      "A) Organizar uma fila na frente do banco.",
      "B) Enviar uma carta anônima para o Papa.",
      "C) Comparecer às reuniões do Conselho Municipal de Saúde e levar a demanda através de seu representante de usuários.",
      "D) Postar um vídeo engraçado na internet."
    ],
    "explicacao_geral": "O Conselho de Saúde é o fórum oficial para a discussão e aprovação dos planos de saúde.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Não tem poder de gestão sobre a saúde.",
      "B": "[INCORRETA] Ineficaz administrativamente.",
      "C": "[CORRETA] O **Conselho de Saúde** é a instância onde as **demandas da comunidade** ganham força legal.",
      "D": "[INCORRETA] Pode gerar visibilidade, mas não garante a tramitação administrativa da solução."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3412,
    "materia": "sus",
    "aula_id": "sus_a7",
    "tema": "sus_a7",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Diferente dos Conselhos (permanentes), as Conferências de Saúde ocorrem em intervalos maiores. Qual a função primordial de uma Conferência Nacional de Saúde?),",
    "opcoes": [
      "A) Avaliar a situação de saúde e propor as diretrizes para a formulação da política de saúde naquele nível governamental.",
      "B) Julgar processos criminais contra médicos.",
      "C) Escolher o novo Ministro da Saúde por voto direto entre os presentes.",
      "D) Definir o teto do dólar para compra de vacinas estrangeiras."
    ],
    "explicacao_geral": "A Conferência é um grande fórum de planejamento estratégico participativo.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Conferência** define o **rumo estratégico** das políticas de saúde para os próximos 4 anos.",
      "B": "[INCORRETA] Função dos conselhos de ética profissional (CRM) e justiça.",
      "C": "[INCORRETA] O Ministro é cargo de confiança do Presidente da República.",
      "D": "[INCORRETA] Função da política econômica federal."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3413,
    "materia": "sus",
    "aula_id": "sus_a7",
    "tema": "sus_a7",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Para que as decisões de um Conselho Municipal de Saúde tenham validade plena, elas devem ser:),",
    "opcoes": [
      "A) Aprovadas pelo Governador do Estado.",
      "B) Homologadas pelo Secretário de Saúde (chefe do poder executivo local).",
      "C) Mantidas em segredo absoluto.",
      "D) Registradas apenas em guardanapos de papel."
    ],
    "explicacao_geral": "Embora o conselho delibere, o gestor deve homologar a decisão para que ela vire ato administrativo público.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O município tem autonomia administrativa.",
      "B": "[CORRETA] A **homologação do gestor** (Prefeito/Secretário) formaliza a decisão do conselho.",
      "C": "[INCORRETA] As reuniões devem ser públicas e as atas publicadas.",
      "D": "[INCORRETA] Devem ser registradas em atas oficiais de fé pública."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3414,
    "materia": "sus",
    "aula_id": "sus_a7",
    "tema": "sus_a7",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A Ouvidoria do SUS desempenha qual papel principal no controle social?),",
    "opcoes": [
      "A) Castigar os funcionários que chegam atrasados.",
      "B) Servir apenas para elogios ao governo.",
      "C) Vender planos de saúde privados.",
      "D) Ser um canal de comunicação entre o cidadão e o sistema para denúncias, reclamações, sugestões e elogios."
    ],
    "explicacao_geral": "A ouvidoria permite o acompanhamento individual da experiência do usuário no sistema.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Função administrativa/correcional indireta, baseada nos relatórios da ouvidoria.",
      "B": "[INCORRETA] Deve aceitar críticas e denúncias para melhoria do sistema.",
      "C": "[INCORRETA] Incompatível com a função pública.",
      "D": "[CORRETA] A **Ouvidoria** é o canal de escuta e **exercício de cidadania** do usuário."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3415,
    "materia": "sus",
    "aula_id": "sus_a7",
    "tema": "sus_a7",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Uma conselheira de saúde percebe que os medicamentos da farmácia municipal estão todos vencidos. De acordo com sua função, qual a atitude correta?),",
    "opcoes": [
      "A) Relatar o fato oficialmente no plenário do Conselho de Saúde para que o gestor seja cobrado e as medidas corretivas tomadas.",
      "B) Queimar as caixas escondido.",
      "C) Levar os remédios para casa e tentar vendê-los.",
      "D) Ignorar, pois ela não é médica e não entende de prazos."
    ],
    "explicacao_geral": "O conselheiro tem dever de fiscalização sobre o uso correto dos recursos e a qualidade do serviço.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O conselheiro exerce o **papel fiscalizador** da execução das políticas de saúde.",
      "B": "[INCORRETA] Destruição de patrimônio público sem processo legal.",
      "C": "[INCORRETA] Crime de peculato/corrupção.",
      "D": "[INCORRETA] O conhecimento básico do controle social é acessível a todos os leigos treinados para o conselho."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3416,
    "materia": "sus",
    "aula_id": "sus_a7",
    "tema": "sus_a7",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Por que a participação dos 'Trabalhadores da Saúde' no Conselho (25% das vagas) é considerada fundamental?),",
    "opcoes": [
      "A) Para que eles possam pedir aumento de salário toda semana.",
      "B) Porque eles são os únicos que entendem de biologia.",
      "C) Para que a perspectiva técnica de quem executa o cuidado real seja integrada às decisões políticas e dos usuários.",
      "D) Porque eles representam os interesses das multinacionais farmacêuticas."
    ],
    "explicacao_geral": "O trabalhador conhece as dificuldades operacionais que o gestor e o usuário podem desconhecer.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A pauta deve ser a política de saúde, não apenas corporativa.",
      "B": "[INCORRETA] O saber dos usuários (saber de experiência) também é valorizado.",
      "C": "[CORRETA] O **trabalhador da saúde** traz a **experiência do cotidiano** assistencial para o conselho.",
      "D": "[INCORRETA] Absurdo ético."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula sus_a7 adicionadas.`);
