import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3785,
    "materia": "ind",
    "aula_id": "ind_a5",
    "tema": "ind_a5",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A 'Síndrome de Burnout' é comum em profissionais de saúde. Quais são os três pilares que definem essa condição?),",
    "opcoes": [
      "A) Tosse, febre e dor no corpo.",
      "B) Exaustão emocional, Despersonalização (cinismo/distanciamento) e Baixa Realização Profissional.",
      "C) Perda de memória, fome excessiva e sono.",
      "D) Ganho de peso, alegria súbita e força física."
    ],
    "explicacao_geral": "O Burnout é o esgotamento profissional crônico devido ao estresse no ambiente de trabalho.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sintomas de infecção viral.",
      "B": "[CORRETA] A **Tríade de Maslach** define o **Burnout** no profissional.",
      "C": "[INCORRETA] Sintomas inespecíficos.",
      "D": "[INCORRETA] Pelo contrário, há perda de motivação e fadiga."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3786,
    "materia": "ind",
    "aula_id": "ind_a5",
    "tema": "ind_a5",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "O que caracteriza a 'Despersonalização' no contexto do Burnout médico?),",
    "opcoes": [
      "A) Esquecer o próprio nome.",
      "B) Querer mudar de carreira o tempo todo.",
      "C) Ter múltiplas personalidades.",
      "D) Atitude de distanciamento, indiferença ou cinismo em relação aos pacientes e colegas, tratando-os como objetos ou números."
    ],
    "explicacao_geral": "É uma forma de defesa (desadaptativa) para não lidar com a sobrecarga emocional do sofrimento alheio.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Amnésia.",
      "B": "[INCORRETA] Desmotivação.",
      "C": "[INCORRETA] Transtorno dissociativo.",
      "D": "[CORRETA] A **Despersonalização** desumaniza o **atendimento médico**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3787,
    "materia": "ind",
    "aula_id": "ind_a5",
    "tema": "ind_a5",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Estudos mostram altos índices de depressão e ansiedade entre estudantes de medicina. Qual fator contribui significativamente para isso?),",
    "opcoes": [
      "A) Carga horária excessiva, pressão por desempenho, competição e contato precoce com o sofrimento e a morte sem suporte psicológico adequado.",
      "B) Falta de provas e trabalhos.",
      "C) Excesso de tempo livre para festas.",
      "D) Baixa exigência intelectual do curso."
    ],
    "explicacao_geral": "A formação médica é reconhecida como um dos períodos de maior estresse psicossocial.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Saúde Mental do Estudante** é impactada pelo **currículo oculto** e rigores do curso.",
      "B": "[INCORRETA] A sobrecarga é inversamente proporcional a isso.",
      "C": "[INCORRETA] O tempo livre é restrito.",
      "D": "[INCORRETA] A complexidade do conhecimento é alta."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3788,
    "materia": "ind",
    "aula_id": "ind_a5",
    "tema": "ind_a5",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O conceito de 'Resiliência' na medicina refere-se à:),",
    "opcoes": [
      "A) Capacidade de não sentir nenhuma emoção.",
      "B) Ser capaz de trabalhar 72 horas seguidas sem dormir.",
      "C) Capacidade de adaptar-se e superar situações de estresse e adversidade, mantendo a saúde mental e o compromisso profissional.",
      "D) Obedecer cegamente aos superiores."
    ],
    "explicacao_geral": "Resiliência não é invulnerabilidade, mas sim a capacidade de retornar ao equilíbrio após o estresse.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Isso é alexitimia ou embotamento afetivo.",
      "B": "[INCORRETA] Privação de sono adoece qualquer ser humano.",
      "C": "[CORRETA] A **Resiliência** é uma habilidade que pode ser desenvolvida para a **longevidade na carreira**.",
      "D": "[INCORRETA] Docilidade não é resiliência."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3789,
    "materia": "ind",
    "aula_id": "ind_a5",
    "tema": "ind_a5",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Um médico percebe que está cometendo erros simples, sente-se constantemente irritado com os pacientes e não consegue relaxar em casa. O que ele deve fazer?),",
    "opcoes": [
      "A) Aumentar o número de horas de trabalho para se distrair.",
      "B) Reconhecer os sinais de esgotamento, buscar ajuda profissional (psiquiatria/psicologia) e rever sua carga horária e autocuidado.",
      "C) Beber álcool para dormir melhor.",
      "D) Pedir demissão e nunca mais voltar."
    ],
    "explicacao_geral": "O auto-cuidado do médico é éticamente necessário para a segurança do paciente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Agrava o esgotamento (Burnout).",
      "B": "[CORRETA] A **Ajuda Profissional** é vital para evitar o **colapso da carreira**.",
      "C": "[INCORRETA] Risco de dependência química e não resolve a causa.",
      "D": "[INCORRETA] Reação impulsiva que não trata a base do problema de saúde mental."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3790,
    "materia": "ind",
    "aula_id": "ind_a5",
    "tema": "ind_a5",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A 'Fadiga por Compaixão' (ou Trauma Secundário) ocorre mais frequentemente em quais áreas?),",
    "opcoes": [
      "A) Dermatologia estética.",
      "B) Nutrologia.",
      "C) Administração hospitalar.",
      "D) Áreas de alta carga emocional e trauma, como Oncologia, Cuidados Paliativos, Emergência e UTI."
    ],
    "explicacao_geral": "O contato contínuo com a dor extrema de outros pode 'contaminar' emocionalmente o profissional.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Menor carga de sofrimento vital imediato.",
      "B": "[INCORRETA] Foco preventivo/estético.",
      "C": "[INCORRETA] Estresse administrativo é real, mas não é 'fadiga por compaixão' clínica.",
      "D": "[CORRETA] Profissionais de **Críticos e Terminais** têm maior risco de **Fadiga por Compaixão**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3791,
    "materia": "ind",
    "aula_id": "ind_a5",
    "tema": "ind_a5",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Qual a principal barreira que impede médicos e estudantes de buscarem ajuda para saúde mental?),",
    "opcoes": [
      "A) O estigma (preconceito) e o medo de serem considerados fracos ou incapazes para o exercício da profissão.",
      "B) Falta de psicólogos no mundo.",
      "C) Os médicos não acreditam em doenças mentais.",
      "D) O custo elevado de todas as terapias."
    ],
    "explicacao_geral": "A cultura médica da 'invulnerabilidade' prejudica a busca precoce de tratamento.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Estigma na Medicina** é um obstáculo letal para a **Saúde Mental**.",
      "B": "[INCORRETA] Existem amplas redes de suporte.",
      "C": "[INCORRETA] Eles conhecem a fisiopatologia, mas a negam para si mesmos.",
      "D": "[INCORRETA] Existem opções institucionais e gratuitas; a barreira é atitudinal."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3792,
    "materia": "ind",
    "aula_id": "ind_a5",
    "tema": "ind_a5",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Dentre as estratégias de prevenção de doenças mentais no estudante de medicina, destaca-se o 'Grupo Balint'. O que é feito nesse grupo?),",
    "opcoes": [
      "A) Estudo de anatomia avançada.",
      "B) Treinamento de resistência física.",
      "C) Reunião de profissionais/estudantes para discutir as emoções e os aspectos psicológicos envolvidos na relação médico-paciente.",
      "D) Curso de culinária saudável."
    ],
    "explicacao_geral": "O foco não é clínico (o que o paciente tem), mas sim emocional (como eu me sinto com o que o paciente tem).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Foco cognitivo puro.",
      "B": "[INCORRETA] Irrelevante.",
      "C": "[CORRETA] Os **Grupos Balint** humanizam a prática e previnem o **isolamento emocional**.",
      "D": "[INCORRETA] Estilo de vida, mas não a definição do grupo citado."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula ind_a5 adicionadas.`);
