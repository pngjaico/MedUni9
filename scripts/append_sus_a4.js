import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3385,
    "materia": "sus",
    "aula_id": "sus_a4",
    "tema": "sus_a4",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "A Lei Federal nº 8.080/1990 é conhecida como a Lei Orgânica da Saúde. Qual o seu principal objetivo?),",
    "opcoes": [
      "A) Dispor sobre as condições para a promoção, proteção e recuperação da saúde, a organização e o funcionamento dos serviços correspondentes.",
      "B) Criar impostos novos para financiar apenas os hospitais militares.",
      "C) Proibir a entrada de médicos estrangeiros no Brasil.",
      "D) Definir que a saúde não é um dever do Estado."
    ],
    "explicacao_geral": "A 8.080 detalha o funcionamento prático do SUS prometido na Constituição.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Esta é a ementa e o **objetivo central da Lei 8.080**.",
      "B": "[INCORRETA] O financiamento é tratado em outras leis e na 8.142.",
      "C": "[INCORRETA] A lei não trata de xenofobia médica e sim de organização do sistema.",
      "D": "[INCORRETA] A lei reafirma o dever do Estado estabelecido na CF/88."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3386,
    "materia": "sus",
    "aula_id": "sus_a4",
    "tema": "sus_a4",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "A Lei Federal nº 8.142/1990 foi criada logo após a 8.080 para suprir vetos presidenciais. Qual o foco principal desta lei?),",
    "opcoes": [
      "A) Definir as doenças que o SUS deve tratar.",
      "B) Criar o Ministério da Saúde.",
      "C) Dispor sobre a participação da comunidade na gestão do SUS e sobre as transferências de recursos financeiros entre as esferas de governo.",
      "D) Privatizar o sistema de saúde brasileiro."
    ],
    "explicacao_geral": "Sem a 8.142, o SUS não teria controle social nem verba descentralizada.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O SUS trata de todas as doenças (integralidade).",
      "B": "[INCORRETA] O Ministério é anterior à lei.",
      "C": "[CORRETA] A **Lei 8.142** é a 'lei do dinheiro e do povo' (Participação + Financiamento).",
      "D": "[INCORRETA] A lei justamente fortalece o caráter público do controle social."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3387,
    "materia": "sus",
    "aula_id": "sus_a4",
    "tema": "sus_a4",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "A Lei 8.080 elenca os 'Determinantes Sociais de Saúde'. Qual destas opções contém apenas fatores considerados determinantes pela lei?),",
    "opcoes": [
      "A) Sorte, genética e cor dos olhos.",
      "B) Alimentação, moradia, saneamento básico, meio ambiente, trabalho e transporte.",
      "C) Telefone celular, internet e marcas de roupas.",
      "D) Apenas o acesso a hospitais de alta complexidade."
    ],
    "explicacao_geral": "Saúde não é apenas ausência de doença, mas o resultado das condições de vida.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A genética influencia, mas a lei foca no que é passível de política pública social.",
      "B": "[CORRETA] Estes são os **determinantes sociais** explícitos no Artigo 3º da Lei 8.080.",
      "C": "[INCORRETA] São bens de consumo, não determinantes básicos de saúde pública na lei.",
      "D": "[INCORRETA] O sistema de saúde é apenas um dos determinantes."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3388,
    "materia": "sus",
    "aula_id": "sus_a4",
    "tema": "sus_a4",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Sobre o 'Conselho de Saúde' definido na Lei 8.142, qual a sua composição em termos de representatividade?),",
    "opcoes": [
      "A) 100% de médicos.",
      "B) 50% de políticos e 50% de empresários.",
      "C) Apenas representantes do governo federal.",
      "D) Paritário, sendo 50% de representantes dos usuários e 50% divididos entre governo, prestadores e trabalhadores da saúde."
    ],
    "explicacao_geral": "A paridade garante que os usuários tenham voz igual à soma dos outros grupos interessados.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O conselho é multiprofissional e popular.",
      "B": "[INCORRETA] Foca na gestão e nos beneficiários diretos do sistema.",
      "C": "[INCORRETA] Existem conselhos municipais, estaduais e nacional.",
      "D": "[CORRETA] O **Conselho é paritário**, com **50% de usuários**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3389,
    "materia": "sus",
    "aula_id": "sus_a4",
    "tema": "sus_a4",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "As Conferências de Saúde são fóruns de debate para avaliar a situação de saúde e propor diretrizes. Qual a periodicidade obrigatória de realização das Conferências de Saúde segundo a Lei 8.142?),",
    "opcoes": [
      "A) Todos os meses.",
      "B) A cada 2 anos.",
      "C) A cada 4 anos.",
      "D) Apenas quando o presidente da república solicitar."
    ],
    "explicacao_geral": "As conferências ocorrem nas três esferas de governo para planejar o futuro do sistema.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Inviável logisticamente para conferências amplas.",
      "B": "[INCORRETA] Os conselhos são permanentes, as conferências não.",
      "C": "[CORRETA] As **Conferências de Saúde** ocorrem obrigatoriamente a cada **4 anos**.",
      "D": "[INCORRETA] É um dever legal independente da vontade política pontual."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3390,
    "materia": "sus",
    "aula_id": "sus_a4",
    "tema": "sus_a4",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Um município deixa de criar o seu Conselho de Saúde. De acordo com a Lei 8.142, qual a consequência direta para a gestão desse município?),",
    "opcoes": [
      "A) O prefeito é preso imediatamente.",
      "B) O município fica impedido de receber os repasses de recursos financeiros do Fundo Nacional de Saúde destinados a investimentos e custeio.",
      "C) O governo federal assume a prefeitura.",
      "D) Nenhuma consequência, o conselho é opcional."
    ],
    "explicacao_geral": "A lei vincula a participação popular ao recebimento da verba federal.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Trata-se de uma sanção administrativa e financeira contra o ente público.",
      "B": "[CORRETA] Sem conselho e fundo de saúde, o **município não recebe verba fedeal**.",
      "C": "[INCORRETA] Intervenção federal é um processo muito mais complexo e raro.",
      "D": "[INCORRETA] O controle social é obrigatório para a existência do SUS local."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3391,
    "materia": "sus",
    "aula_id": "sus_a4",
    "tema": "sus_a4",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A Lei 8.080 estabelece que as ações de saúde do trabalhador incluem a revisão periódica da listagem oficial de doenças originadas no processo de trabalho. Qual a finalidade assistencial dessa ação?),",
    "opcoes": [
      "A) Garantir o nexo causal para fins de diagnóstico, tratamento e proteção previdenciária do trabalhador.",
      "B) Aumentar o preço dos planos de saúde das empresas.",
      "C) Culpar o trabalhador pela própria doença.",
      "D) Impedir que o trabalhador se aposente."
    ],
    "explicacao_geral": "O SUS deve olhar para o ambiente de trabalho como um local de risco e prevenção.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Saúde do Trabalhador** visa integrar o cuidado com a realidade laboral.",
      "B": "[INCORRETA] O SUS não foca no lucro de planos privados.",
      "C": "[INCORRETA] O foco é na responsabilidade ambiental e laboral do empregador/estado.",
      "D": "[INCORRETA] Visa o contrário: proteger os direitos do trabalhador adoecido."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3392,
    "materia": "sus",
    "aula_id": "sus_a4",
    "tema": "sus_a4",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um cidadão deseja participar ativamente das decisões de saúde de seu bairro. De acordo com as leis orgânicas, qual a instância PERMANENTE e DELIBERATIVA em que ele pode atuar?),",
    "opcoes": [
      "A) Apenas no dia da eleição para prefeito.",
      "B) Nas Conferências de Saúde a cada 4 anos.",
      "C) Através de reclamações na rede social pessoal.",
      "D) No Conselho de Saúde local/municipal."
    ],
    "explicacao_geral": "Diferente da Conferência (periódica), o Conselho funciona continuamente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Democracia direta na saúde vai além do voto eletivo.",
      "B": "[INCORRETA] É uma instância de diretrizes, mas o conselho é que delibera no dia a dia.",
      "C": "[INCORRETA] Não tem validade legal de gestão participativa.",
      "D": "[CORRETA] O **Conselho de Saúde** é a instância **permanente e deliberativa**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula sus_a4 adicionadas.`);
