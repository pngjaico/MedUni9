import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4041,
    "materia": "semio2",
    "aula_id": "semio2_a2",
    "tema": "semio2_a2",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual a ordem RECOMENDADA para a realização do exame físico do abdome e por que?),",
    "opcoes": [
      "A) Inspeção, Palpação, Percussão e Ausculta.",
      "B) Inspeção, Ausculta, Percussão e Palpação.",
      "C) Palpação profunda primeiro para ganhar tempo.",
      "D) Não importa a ordem."
    ],
    "explicacao_geral": "A ausculta deve preceder a percussão e a palpação para que as manobras físicas não alterem a frequência dos ruídos hidroaéreos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ordem padrão dos outros sistemas (tórax), mas incorreta no abdome.",
      "B": "[CORRETA] A **Ausculta Precoce** no abdome evita artefatos nos ruídos.",
      "C": "[INCORRETA] Pode causar dor e defesa muscular, prejudicando o exame.",
      "D": "[INCORRETA] A padronização garante a fidedignidade dos achados."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4042,
    "materia": "semio2",
    "aula_id": "semio2_a2",
    "tema": "semio2_a2",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "A dor à descompressão brusca no 'Ponto de McBurney' (Fossa Ilíaca Direita) sugere qual diagnóstico?),",
    "opcoes": [
      "A) Gastrite.",
      "B) Colecistite.",
      "C) Infecção urinária.",
      "D) Apendicite aguda (Sinal de Blumberg)."
    ],
    "explicacao_geral": "O Ponto de McBurney localiza-se na união do terço externo com o terço médio da linha entre o umbigo e a espinha ilíaca anterossuperior.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Dor no epigástrio.",
      "B": "[INCORRETA] Dor no hipocôndrio direito.",
      "C": "[INCORRETA] Dor lombar ou suprapúbica.",
      "D": "[CORRETA] O **Sinal de Blumberg** no ponto de McBurney indica irritação peritoneal por **Apendicite**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4043,
    "materia": "semio2",
    "aula_id": "semio2_a2",
    "tema": "semio2_a2",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O 'Sinal de Murphy' é positivo quando ocorre a interrupção súbita da inspiração profunda durante a palpação profunda de qual região?),",
    "opcoes": [
      "A) Hipocôndrio Direito (leito vesicular).",
      "B) Hipocôndrio Esquerdo (baço).",
      "C) Epigástrio (estômago).",
      "D) Fossa Ilíaca Esquerda (sigmoide)."
    ],
    "explicacao_geral": "É um sinal clássico de inflamação da vesícula biliar.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Sinal de Murphy** é indicativo de **Colecistite Aguda**.",
      "B": "[INCORRETA] Relacionado à esplenomegalia.",
      "C": "[INCORRETA] Relacionado à dispepsia ou pancreatite.",
      "D": "[INCORRETA] Relacionado à diverticulite."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4044,
    "materia": "semio2",
    "aula_id": "semio2_a2",
    "tema": "semio2_a2",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Na percussão do abdome, o que representa o 'Espaço de Traube' e qual o achado normal?),",
    "opcoes": [
      "A) Localização do fígado; som maciço.",
      "B) Localização do pâncreas; som surdo.",
      "C) Área de projeção do fundo gástrico; som timpanítico (normal).",
      "D) Área dos rins; som submaciço."
    ],
    "explicacao_geral": "A ocupação do Espaço de Traube por som maciço pode sugerir esplenomegalia (aumento do baço) ou derrame pleural esquerdo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Fígado fica à direita.",
      "B": "[INCORRETA] Pâncreas é retroperitoneal e não gera timbre percutório superficial isolado dessa forma.",
      "C": "[CORRETA] O **Espaço de Traube** é normalmente **Timpanítico**.",
      "D": "[INCORRETA] Percussão renal é a punção-percussão lombar (Giordano)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4045,
    "materia": "semio2",
    "aula_id": "semio2_a2",
    "tema": "semio2_a2",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A 'Punção-Percussão Lombar' (Sinal de Giordano) é utilizada para pesquisar dor em qual órgão?),",
    "opcoes": [
      "A) Baço.",
      "B) Rim (sugerindo pielonefrite ou nefrolitíase).",
      "C) Pulmão.",
      "D) Apêndice."
    ],
    "explicacao_geral": "É realizada com a borda ulnar da mão ou o punho fechado na região lombar (ângulo costovertebral).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Baço é palpado no rebordo costal esquerdo.",
      "B": "[CORRETA] O **Sinal de Giordano** positivo sugere **Acometimento Renal**.",
      "C": "[INCORRETA] Pulmão é percutido no tórax posterior, mas Giordano é manobra específica para dor visceral.",
      "D": "[INCORRETA] Apêndice é palpado na região anterior (FID)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4046,
    "materia": "semio2",
    "aula_id": "semio2_a2",
    "tema": "semio2_a2",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A manobra do 'Piparote' e a pesquisa de 'Macicez Móvel' são utilizadas para o diagnóstico de qual condição?),",
    "opcoes": [
      "A) Obstrução intestinal.",
      "B) Gravidez ectópica.",
      "C) Hérnia umbilical.",
      "D) Ascite (presença de líquido livre na cavidade abdominal)."
    ],
    "explicacao_geral": "O piparote detecta grandes quantidades de líquido, enquanto a macicez móvel é mais sensível para volumes menores.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Diagnosticada por ruídos aumentados, timpanismo e dor.",
      "B": "[INCORRETA] Diagnosticada por atraso menstrual, dor aguda e USG.",
      "C": "[INCORRETA] Diagnosticada por inspeção e palpação de abaulamento.",
      "D": "[CORRETA] Ambas manobras pesquisam **Líquido Livre (Ascite)**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4047,
    "materia": "semio2",
    "aula_id": "semio2_a2",
    "tema": "semio2_a2",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Na inspeção do abdome, a presença de circulações colaterais em 'Cabeça de Medusa' é um sinal de:),",
    "opcoes": [
      "A) Hipertensão Portal (comum na cirrose hepática).",
      "B) Obstrução da Veia Cava Superior.",
      "C) Desnutrição grave.",
      "D) Gravidez múltipla."
    ],
    "explicacao_geral": "Representa a reperfusão dos vasos periumbilicais devido ao aumento da pressão no sistema porta.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Cabeça de Medusa** indica **Hipertensão Portal**.",
      "B": "[INCORRETA] Causa turgência jugular e edema em escápula, mas circulação colateral torácica alta descendente.",
      "C": "[INCORRETA] Abdome escavado com visualização de batimentos aórticos, não necessariamente essa circulação.",
      "D": "[INCORRETA] Estrias gestacionais, não circulação colateral desse padrão."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4048,
    "materia": "semio2",
    "aula_id": "semio2_a2",
    "tema": "semio2_a2",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O 'Som Maciço' à percussão abdominal, quando encontrado fora da área hepática ou esplênica, pode indicar?),",
    "opcoes": [
      "A) Excesso de gases no intestino.",
      "B) Estômago vazio.",
      "C) Massas sólidas, tumores, útero gravídico ou bexigoma (bexiga cheia).",
      "D) Nada, é o som normal do abdome."
    ],
    "explicacao_geral": "O abdome é predominantemente timpanítico devido aos gases no trato digestivo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Gases geram timpanismo.",
      "B": "[INCORRETA] O estômago vazio/com ar gera timpanismo no Traube.",
      "C": "[CORRETA] A **Macicez** indica substituição de ar por **Sólido ou Líquido**.",
      "D": "[INCORRETA] O som normal predominante é o timpanismo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula semio2_a2 adicionadas.`);
