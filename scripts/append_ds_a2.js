import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3737,
    "materia": "ds",
    "aula_id": "ds_a2",
    "tema": "ds_a2",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "O conceito de 'Saúde Única' (One Health) propõe uma abordagem integrada para enfrentar desafios de saúde. Quais são os três pilares que o compõem?),",
    "opcoes": [
      "A) Saúde do Coração, Saúde do Cérebro e Saúde do Rim.",
      "B) Saúde Pública, Saúde Privada e Convênios.",
      "C) Saúde Humana, Saúde Animal e Saúde Ambiental.",
      "D) Medicina, Direito e Engenharia."
    ],
    "explicacao_geral": "A saúde humana está intrinsecamente ligada à saúde dos animais e do ecossistema.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Visão clínica individual/especializada.",
      "B": "[INCORRETA] Visão de gestão de sistemas de saúde.",
      "C": "[CORRETA] A **Saúde Única** reconhece a **interdependência** global da vida.",
      "D": "[INCORRETA] Áreas do saber, mas não os pilares do conceito One Health."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3738,
    "materia": "ds",
    "aula_id": "ds_a2",
    "tema": "ds_a2",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "As 'Zoonoses' são doenças transmitidas de animais para humanos. Qual fator ambiental contribui fortemente para o surgimento de novas epidemias zoonóticas?),",
    "opcoes": [
      "A) Desmatamento e invasão de habitats silvestres pelo homem, facilitando o contato com novos microrganismos.",
      "B) O excesso de plantação de árvores no quintal.",
      "C) O uso de energia solar.",
      "D) O tratamento de água e esgoto."
    ],
    "explicacao_geral": "A degradação ambiental rompe o equilíbrio que mantinha vírus e bactérias isolados em espécies selvagens.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Dano Ambiental** é o principal motor de novas **Zoonoses**.",
      "B": "[INCORRETA] Pelo contrário, ajuda na manutenção de ecossistemas locais (se planejado).",
      "C": "[INCORRETA] Sustentabilidade energética sem relação direta negativa com surto viral.",
      "D": "[INCORRETA] Saneamento previne doenças, não causa zoonoses."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3739,
    "materia": "ds",
    "aula_id": "ds_a2",
    "tema": "ds_a2",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "As mudanças climáticas globais têm impacto direto na saúde pública brasileira. Qual o efeito esperado no perfil de doenças do país?),",
    "opcoes": [
      "A) Desaparecimento total dos vírus.",
      "B) Todas as doenças se tornam incuráveis.",
      "C) Nada mudará nos próximos 100 anos.",
      "D) Expansão geográfica de vetores e aumento de doenças como Dengue, Malária e Leishmaniose devido ao aquecimento e mudança no regime de chuvas."
    ],
    "explicacao_geral": "O calor e a umidade favorecem a reprodução de mosquitos e outros vetores.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Tendem a se adaptar e expandir.",
      "B": "[INCORRETA] Termo alarmista sem fundamento técnico sobre cura.",
      "C": "[INCORRETA] Mudanças já são visíveis hoje.",
      "D": "[CORRETA] As **Mudanças Climáticas** alteram a **dinâmica de vetores** de doenças."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3740,
    "materia": "ds",
    "aula_id": "ds_a2",
    "tema": "ds_a2",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "A 'Bioacumulação' e 'Biomagnificação' são processos preocupantes na saúde ambiental. Qual o exemplo clássico desse fenômeno que afeta comunidades ribeirinhas na Amazônia?),",
    "opcoes": [
      "A) Falta de oxigênio no ar.",
      "B) Contaminação por Mercúrio proveniente do garimpo, que se concentra nos peixes grandes e chega aos humanos em doses tóxicas.",
      "C) Excesso de vitamina D pelo sol.",
      "D) Consumo exagerado de açaí."
    ],
    "explicacao_geral": "Pesos pesados e tóxicos acumulam-se ao longo da cadeia alimentar.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Poluição do ar não é o foco principal desse ciclo bioquímico hídrico.",
      "B": "[CORRETA] A **Contaminação por Mercúrio** ilustra a **Biomagnificação** prejudicial à saúde humana.",
      "C": "[INCORRETA] Processo benéfico/fisiológico.",
      "D": "[INCORRETA] Nutriente saudável se não processado com contaminação local."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3741,
    "materia": "ds",
    "aula_id": "ds_a2",
    "tema": "ds_a2",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "O uso intensivo de Agrotóxicos em monoculturas pode levar a intoxicações crônicas. Quais os principais efeitos observados na saúde humana a longo prazo?),",
    "opcoes": [
      "A) Desregulação endócrina, neurotoxicidade, malformações fetais e aumento do risco de certos tipos de câncer.",
      "B) Crescimento de pelos e dentes mais fortes.",
      "C) Transformação da pele em plástico.",
      "D) Melhora da imunidade contra vírus."
    ],
    "explicacao_geral": "A exposição é muitas vezes indireta, via água e alimentos contaminados.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Os **Agrotóxicos** são potenciais **disruptores endócrinos** e carcinogênicos.",
      "B": "[INCORRETA] Sem fundamento médico.",
      "C": "[INCORRETA] Absurdo.",
      "D": "[INCORRETA] Pelo contrário, pode haver depressão do sistema imune."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3742,
    "materia": "ds",
    "aula_id": "ds_a2",
    "tema": "ds_a2",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Saúde Única e Segurança Alimentar andam juntas. Como a criação intensiva de animais com o uso indiscriminado de antibióticos afeta a saúde humana?),",
    "opcoes": [
      "A) Deixa o bife mais saboroso.",
      "B) Torna a carne imune a bactérias para sempre.",
      "C) Contribui para a seleção de bactérias multirresistentes, dificultando o tratamento de infecções em hospitais humanos.",
      "D) Não afeta os humanos, pois os antibióticos desaparecem no fogo."
    ],
    "explicacao_geral": "Resíduos de antibióticos e bactérias resistentes seguem para o meio ambiente e cadeia alimentar.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Gosto não é o foco do problema sanitário.",
      "B": "[INCORRETA] Antibióticos não imunizam a carne morta.",
      "C": "[CORRETA] A **Resistência Antimicrobiana** é um desafio crítico de **Saúde Única**.",
      "D": "[INCORRETA] Muitos fármacos ou seus metabólitos/cepas resistentes persistem e impactam a saúde pública."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3743,
    "materia": "ds",
    "aula_id": "ds_a2",
    "tema": "ds_a2",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "O 'Efeito Ilha de Calor' em cidades como São Paulo agrava problemas respiratórios e cardiovasculares. O que ele representa?),",
    "opcoes": [
      "A) A construção de praias artificiais no centro.",
      "B) O aumento da ventilação natural por causa dos prédios.",
      "C) A falta de luz solar na capital.",
      "D) O aumento da temperatura em áreas urbanas devido à excessiva impermeabilização do solo e falta de vegetação, o que retém calor e aumenta a poluição do ar."
    ],
    "explicacao_geral": "O calor excessivo aumenta a irritação das mucosas e a concentração de poluentes como o Ozônio (O3).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sem relação.",
      "B": "[INCORRETA] Prédios bloqueiam a ventilação (cânions urbanos).",
      "C": "[INCORRETA] Insolação é alta, a retenção é que aquece a cidade.",
      "D": "[CORRETA] A **Ilha de Calor** é um estresse **ambiental e clínico** crônico para o morador da metrópole."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3744,
    "materia": "ds",
    "aula_id": "ds_a2",
    "tema": "ds_a2",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "No contexto da sustentabilidade, o que significa 'Justiça Ambiental' na saúde pública?),",
    "opcoes": [
      "A) Garantir que populações vulneráveis (pobres, minorias) não sofram desproporcionalmente com os danos ambientais e tenham acesso igualitário a ambientes saudáveis.",
      "B) Punir as árvores que caem nos carros.",
      "C) Cobrar mais impostos de quem mora perto de parques.",
      "D) Proibir o uso de qualquer remédio que polua o esgoto."
    ],
    "explicacao_geral": "Frequentemente, as áreas mais poluídas e degradadas são ocupadas por populações de baixa renda.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Justiça Ambiental** busca reduzir a **desigualdade** no impacto de danos ecológicos.",
      "B": "[INCORRETA] Absurdo.",
      "C": "[INCORRETA] Exacerbaria a desigualdade social no acesso ao verde.",
      "D": "[INCORRETA] O foco é gestão de resíduos e acesso a direitos, não proibição absoluta de tratamentos necessários."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula ds_a2 adicionadas.`);
