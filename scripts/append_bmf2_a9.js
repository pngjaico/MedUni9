import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3665,
    "materia": "bmf2",
    "aula_id": "bmf2_a9",
    "tema": "bmf2_a9",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A ventilação pulmonar depende de gradientes de pressão. Durante uma 'Inspiração Normal', o que ocorre com a pressão intrapulmonar (alveolar)?),",
    "opcoes": [
      "A) Ela aumenta para ficar maior que a atmosférica.",
      "B) Ela torna-se negativa (menor que a atmosférica) devido ao aumento do volume da caixa torácica, fazendo o ar entrar.",
      "C) Ela permanece em zero.",
      "D) O ar é empurrado ativamente pelos músculos do pescoço."
    ],
    "explicacao_geral": "Segundo a Lei de Boyle, o aumento do volume reduz a pressão de um gás.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Isso ocorre na expiração.",
      "B": "[CORRETA] A **Inspiração** é um processo **ativo** que gera pressão negativa.",
      "C": "[INCORRETA] Não haveria fluxo de ar.",
      "D": "[INCORRETA] Músculos do pescoço são acessórios e usados apenas em esforço (inspiração forçada)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3666,
    "materia": "bmf2",
    "aula_id": "bmf2_a9",
    "tema": "bmf2_a9",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual a principal característica da 'Expiração Normal' em repouso?),",
    "opcoes": [
      "A) É um processo que gasta muito ATP.",
      "B) Depende da contração dos músculos abdominais.",
      "C) Ocorre quando o diafragma sobe ativamente.",
      "D) É um processo passivo que depende da retração elástica dos pulmões após o relaxamento dos músculos inspiratórios."
    ],
    "explicacao_geral": "A energia potencial armazenada nas fibras elásticas durante a inspiração é liberada.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] É passivo em repouso, economizando energia.",
      "B": "[INCORRETA] Abdominais atuam na expiração forçada ou tosse.",
      "C": "[INCORRETA] O diafragma sobe porque relaxa, não por contração ativa para subir.",
      "D": "[CORRETA] A **Expiração em Repouso** é movida pelo **recuo elástico**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3667,
    "materia": "bmf2",
    "aula_id": "bmf2_a9",
    "tema": "bmf2_a9",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A 'Complacência Pulmonar' é a medida da facilidade com que os pulmões se expandem. Qual substância é fundamental para manter uma alta complacência e evitar o colapso dos pequenos alvéolos?),",
    "opcoes": [
      "A) Surfactante Pulmonar.",
      "B) Hemoglobina.",
      "C) Água pura.",
      "D) Muco das células caliciformes."
    ],
    "explicacao_geral": "O surfactante reduz a tensão superficial da interface ar-líquido no alvéolo.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Surfactante** reduz o **trabalho respiratório** e estabiliza os alvéolos.",
      "B": "[INCORRETA] Transporta gases no sangue.",
      "C": "[INCORRETA] Aumentaria a tensão superficial e colapsaria o pulmão.",
      "D": "[INCORRETA] Proteção de vias aéreas superiores/condução."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3668,
    "materia": "bmf2",
    "aula_id": "bmf2_a9",
    "tema": "bmf2_a9",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um paciente com 'Enfisema Pulmonar' apresenta destruição das fibras elásticas e septos alveolares. Qual a alteração mecânica esperada?),",
    "opcoes": [
      "A) O pulmão torna-se difícil de encher (baixa complacência).",
      "B) O diafragma fica mais forte.",
      "C) Aumento da complacência (pulmão 'frouxo') com perda da retração elástica, dificultando a expiração e gerando aprisionamento de ar.",
      "D) O paciente para de tossir."
    ],
    "explicacao_geral": "Embora o pulmão encha fácil, ele não esvazia bem, gerando o tórax em tonel.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Característico de doenças restritivas como a fibrose.",
      "B": "[INCORRETA] O diafragma pode retificar e perder eficiência mecânica.",
      "C": "[CORRETA] No **Enfisema**, o problema principal é a **perda de elasticidade** expiratória.",
      "D": "[INCORRETA] Tosse e dispneia são sintomas cardinais."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3669,
    "materia": "bmf2",
    "aula_id": "bmf2_a9",
    "tema": "bmf2_a9",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "O 'Espaço Morto Anatômico' refere-se ao ar que permanece nas vias de condução e não participa das trocas gasosas. Se um indivíduo respira muito curto e rápido (taquipneia superficial), o que ocorre com a ventilação alveolar?),",
    "opcoes": [
      "A) Ela aumenta muito.",
      "B) Ela diminui drasticamente, pois a maior parte do ar inspirado fica apenas no espaço morto, não chegando aos alvéolos.",
      "C) Ela permanece igual.",
      "D) O oxigênio entra por osmose pela pele."
    ],
    "explicacao_geral": "Ventilação alveolar = (Volume Corrente - Espaço Morto) x Frequência Respiratória.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Respiração profunda é mais eficaz que rápida/superficial.",
      "B": "[CORRETA] A **Respiração Superficial** é ineficiente para a **oxigenação**.",
      "C": "[INCORRETA] O volume que chega à área de troca cai.",
      "D": "[INCORRETA] Humano não realiza respiração cutânea significativa."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3670,
    "materia": "bmf2",
    "aula_id": "bmf2_a9",
    "tema": "bmf2_a9",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A 'Resistência das Vias Aéreas' é influenciada pelo sistema nervoso autônomo. Qual o efeito do Sistema Simpático (Adrenalina) nos bronquíolos?),",
    "opcoes": [
      "A) Broncoconstrição (fecha as vias).",
      "B) Aumento da produção de muco denso.",
      "C) Nulo.",
      "D) Broncodilatação (via receptores Beta-2), facilitando a passagem do ar durante o estresse ou exercício."
    ],
    "explicacao_geral": "O parassimpático faz o oposto (broncoconstrição via receptores muscarínicos).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Efeito do parassimpático ou mediadores inflamatórios (histamina).",
      "B": "[INCORRETA] O excesso de muco obstrui e o simpático geralmente não promove isso.",
      "C": "[INCORRETA] O controle é dinâmico e vital.",
      "D": "[CORRETA] O **Simpático** promove a **Broncodilatação** necessária ao esforço."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3671,
    "materia": "bmf2",
    "aula_id": "bmf2_a9",
    "tema": "bmf2_a9",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Por que a pressão intrapleural é negativa (-4 mmHg a -6 mmHg) em relação à pressão atmosférica no final de uma expiração normal?),",
    "opcoes": [
      "A) Devido à tendência oposta do pulmão (querendo encolher) e da parede torácica (querendo expandir), criando uma tração no espaço pleural preenchido por fluido.",
      "B) Porque o coração suga o ar para fora.",
      "C) Porque o diafragma está contraído o tempo todo.",
      "D) É negativa porque não existe ar no corpo."
    ],
    "explicacao_geral": "Esse 'vácuo relativo' mantém o pulmão encostado na caixa torácica.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Equilíbrio de Pressões** mantém a **arquitetura pulmonar** funcional.",
      "B": "[INCORRETA] O coração é uma bomba de sangue, não de vácuo pleural.",
      "C": "[INCORRETA] O diafragma relaxa na expiração.",
      "D": "[INCORRETA] O corpo é rico em gases dissolvidos e cavidades aéreas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3672,
    "materia": "bmf2",
    "aula_id": "bmf2_a9",
    "tema": "bmf2_a9",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A 'Tensão Superficial' nos alvéolos tende a colapsá-los. De acordo com a Lei de Laplace aplicada à respiração, por que os alvéolos pequenos correriam mais risco sem surfactante?),",
    "opcoes": [
      "A) Porque eles são mais pesados.",
      "B) Porque neles a pressão é menor.",
      "C) Porque quanto menor o raio, maior a pressão gerada pela tensão superficial (P = 2T/r), forçando o ar a sair para alvéolos maiores e colapsando o pequeno.",
      "D) Porque o alvéolo pequeno não tem sangue."
    ],
    "explicacao_geral": "O surfactante reduz a tensão muito mais nos alvéolos pequenos que nos grandes, estabilizando-os.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Alvéolos são microscópicos e leves.",
      "B": "[INCORRETA] Pelo contrário, neles a pressão de colapso é maior.",
      "C": "[CORRETA] A **Lei de Laplace** explica a necessidade de **Surfactante em alvéolos pequenos**.",
      "D": "[INCORRETA] Todos os alvéolos funcionais são ricamente vascularizados."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf2_a9 adicionadas.`);
