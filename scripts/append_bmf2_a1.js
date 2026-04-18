import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3601,
    "materia": "bmf2",
    "aula_id": "bmf2_a1",
    "tema": "bmf2_a1",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O coração é dividido em quatro câmaras. Qual das alternativas abaixo descreve corretamente o trajeto do sangue desoxigenado (venoso) ao entrar no coração?),",
    "opcoes": [
      "A) Ventrículo Esquerdo -> Aorta.",
      "B) Átrio Direito (via Veias Cavas) -> Ventrículo Direito -> Tronco Pulmonar.",
      "C) Átrio Esquerdo -> Ventrículo Esquerdo -> Veias Pulmonares.",
      "D) Veia Porta -> Átrio Direito."
    ],
    "explicacao_geral": "O lado direito do coração lida exclusivamente com sangue venoso destinado aos pulmões.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sangue arterial indo para o corpo.",
      "B": "[CORRETA] O **sangue venoso** entra pelo **Átrio Direito** e segue para os pulmões pelo **Tronco Pulmonar**.",
      "C": "[INCORRETA] Sangue arterial vindo dos pulmões.",
      "D": "[INCORRETA] Veia porta drena o trato digestório para o fígado, não diretamente para o átrio."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3602,
    "materia": "bmf2",
    "aula_id": "bmf2_a1",
    "tema": "bmf2_a1",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual valva cardíaca impede o refluxo de sangue do Ventrículo Esquerdo para o Átrio Esquerdo durante a sístole (contração)?),",
    "opcoes": [
      "A) Valva Tricúspide.",
      "B) Valva Pulmonar.",
      "C) Valva Aórtica.",
      "D) Valva Mitral (Bicúspide)."
    ],
    "explicacao_geral": "As valvas atrioventriculares garantem o fluxo unidirecional entre as câmaras.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Fica no lado direito do coração.",
      "B": "[INCORRETA] Valva semilunar de saída do ventrículo direito.",
      "C": "[INCORRETA] Valva semilunar de saída do ventrículo esquerdo.",
      "D": "[CORRETA] A **Valva Mitral** é o 'porteiro' do **lado esquerdo** do coração."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3603,
    "materia": "bmf2",
    "aula_id": "bmf2_a1",
    "tema": "bmf2_a1",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Um paciente sofre um infarto na face anterior do coração. Qual artéria coronária é a mais provável de estar obstruída?),",
    "opcoes": [
      "A) Artéria Coronária Esquerda, especialmente o Ramo Interventricular Anterior (Descendente Anterior).",
      "B) Artéria Coronária Direita apenas.",
      "C) Artéria Circunflexa.",
      "D) Veia Cava Superior."
    ],
    "explicacao_geral": "A 'viúva negra' (Descendente Anterior) irriga grande parte do ventrículo esquerdo e septo.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Descendente Anterior** provê a irrigação da **parede anterior** cardíaca.",
      "B": "[INCORRETA] Irriga predominantemente o lado direito e a face inferior.",
      "C": "[INCORRETA] Irriga a face lateral e posterior do ventrículo esquerdo.",
      "D": "[INCORRETA] É um vaso venoso de retorno, não arterial de irrigação."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3604,
    "materia": "bmf2",
    "aula_id": "bmf2_a1",
    "tema": "bmf2_a1",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O 'Nó Sinoatrial' (Marcapasso Natural) localiza-se na parede de qual estrutura anatômica?),",
    "opcoes": [
      "A) Ventrículo Esquerdo.",
      "B) Ápice do coração.",
      "C) Átrio Direito, próximo à abertura da veia cava superior.",
      "D) Septo Interventricular."
    ],
    "explicacao_geral": "A despolarização cardíaca começa no átrio direito e se espalha para o restante do órgão.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Final da cadeia de estimulação mecânica.",
      "B": "[INCORRETA] Extremidade inferior do coração.",
      "C": "[CORRETA] O **Nodo SA** inicia o ritmo cardíaco no **Átrio Direito**.",
      "D": "[INCORRETA] Local do Feixe de His e ramos direito/esquerdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3605,
    "materia": "bmf2",
    "aula_id": "bmf2_a1",
    "tema": "bmf2_a1",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Um trauma torácico causa acúmulo de sangue no saco pericárdico (Tamponamento Cardíaco). Por que isso é uma emergência fatal imediata?),",
    "opcoes": [
      "A) Porque o sangue coagula no pulmão.",
      "B) O fluido no pericárdio comprime o coração de fora para dentro, impedindo o enchimento diastólico e reduzindo drasticamente o débito cardíaco.",
      "C) Porque o coração para de bater por falta de eletricidade.",
      "D) Porque o sangue vaza para o estômago."
    ],
    "explicacao_geral": "O coração não consegue expandir para receber sangue (restrição diastólica).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O problema é hemodinâmico cardíaco direto.",
      "B": "[CORRETA] O **Tamponamento Cardíaco** causa colapso das câmaras por **pressão externa**.",
      "C": "[INCORRETA] A atividade elétrica pode persistir (AESP) mas sem efeito mecânico de bomba.",
      "D": "[INCORRETA] Sem correlação anatômica direta."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3606,
    "materia": "bmf2",
    "aula_id": "bmf2_a1",
    "tema": "bmf2_a1",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual a diferença estrutural mais marcante entre a parede do Ventrículo Esquerdo e do Ventrículo Direito?),",
    "opcoes": [
      "A) O ventrículo direito é mais grosso.",
      "B) O esquerdo não possui valvas.",
      "C) São idênticos.",
      "D) O Miocárdio do Ventrículo Esquerdo é muito mais espesso para suportar a alta pressão da circulação sistêmica."
    ],
    "explicacao_geral": "O VE ejeta sangue contra a resistência de todo o corpo, enquanto o VD ejeta apenas para os pulmões (baixa pressão).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O VD lida com pressões baixas (circulação pulmonar).",
      "B": "[INCORRETA] Ambos possuem valvas atrioventriculares e semilunares.",
      "C": "[INCORRETA] Pressões e resistências diferentes geram hipertrofia adaptativa no VE.",
      "D": "[CORRETA] O **Ventrículo Esquerdo** é a câmara de **alta pressão** do coração."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3607,
    "materia": "bmf2",
    "aula_id": "bmf2_a1",
    "tema": "bmf2_a1",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Durante uma ausculta cardíaca, um acadêmico ouve um ruído (sopro) após o segundo ruído cardíaco (B2) na área mitral. Isso pode indicar qual patologia?),",
    "opcoes": [
      "A) Estenose Mitral (dificuldade de abertura da valva durante o enchimento ventricular).",
      "B) Insuficiência Mitral.",
      "C) Comunicação Interventricular.",
      "D) Coração normal e saudável."
    ],
    "explicacao_geral": "B2 marca o fechamento das semilunares e início da diástole; sopros diastólicos na mitral indicam resistência ao fluxo de entrada.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Sopros **diastólicos** no foco mitral sugerem **Estenose Mitral**.",
      "B": "[INCORRETA] Geraria um sopro sistólico (refluxo durante a contração).",
      "C": "[INCORRETA] Sopro holossistólico audível em borda esternal.",
      "D": "[INCORRETA] Sopros diastólicos são quase sempre patológicos."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3608,
    "materia": "bmf2",
    "aula_id": "bmf2_a1",
    "tema": "bmf2_a1",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual vaso sanguíneo é o responsável por levar sangue rico em oxigênio dos pulmões para o Átrio Esquerdo?),",
    "opcoes": [
      "A) Artérias Pulmonares.",
      "B) Veia Cava Inferior.",
      "C) Veias Pulmonares (4 veias).",
      "D) Artéria Aorta."
    ],
    "explicacao_geral": "As veias pulmonares são as únicas no adulto que transportam sangue arterial (oxigenado).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Levam sangue venoso para o pulmão.",
      "B": "[INCORRETA] Leva sangue venoso do abdome/pernas para o átrio direito.",
      "C": "[CORRETA] As **Veias Pulmonares** trazem o **sangue arterial** de volta ao coração.",
      "D": "[INCORRETA] Distribui sangue arterial para o corpo a partir do ventrículo esquerdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf2_a1 adicionadas.`);
