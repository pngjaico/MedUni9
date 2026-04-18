import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4065,
    "materia": "semio2",
    "aula_id": "semio2_a5",
    "tema": "semio2_a5",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual a manobra de palpação da tireoide na qual o examinador posiciona-se ATRÁS do paciente?),",
    "opcoes": [
      "A) Manobra de Lahey.",
      "B) Manobra de Quervain.",
      "C) Sinal de Murphy.",
      "D) Manobra de Jobe."
    ],
    "explicacao_geral": "Nesta manobra, o examinador usa as polpas digitais de ambas as mãos para sentir os lobos e o istmo enquanto o paciente deglute.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Realizada pela frente do paciente.",
      "B": "[CORRETA] A **Manobra de Quervain** é a palpação **posterior** da tireoide.",
      "C": "[INCORRETA] Abdominal/Vesícula.",
      "D": "[INCORRETA] Ombro/Manguito rotador."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4066,
    "materia": "semio2",
    "aula_id": "semio2_a5",
    "tema": "semio2_a5",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "As 'Estrias Violáceas' (largas e avermelhadas/roxas) no abdome e a 'Fácies de Lua Cheia' são sinais sugestivos de qual condição endócrina?),",
    "opcoes": [
      "A) Hipertireoidismo.",
      "B) Doença de Addison.",
      "C) Diabetes Mellitus Tipo 1.",
      "D) Síndrome de Cushing (Hipercortisolismo)."
    ],
    "explicacao_geral": "O excesso de cortisol causa redistribuição de gordura e fragilidade capilar/cutânea.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Causa perda de peso e agitação.",
      "B": "[INCORRETA] Causa hiperpigmentação da pele e hipotensão (insuficiência adrenal).",
      "C": "[INCORRETA] Causa poliúria e emagrecimento.",
      "D": "[CORRETA] A **Síndrome de Cushing** apresenta as **estrias violáceas** e gordura central."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4067,
    "materia": "semio2",
    "aula_id": "semio2_a5",
    "tema": "semio2_a5",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Um paciente apresenta olhos saltados (Exoftalmia), bócio visível e taquicardia. Qual o diagnóstico mais provável?),",
    "opcoes": [
      "A) Doença de Graves (Hipertireoidismo).",
      "B) Tireoidite de Hashimoto (Hipotireoidismo).",
      "C) Câncer de Tireoide.",
      "D) Falta de iodo apenas."
    ],
    "explicacao_geral": "A exoftalmia é causada por infiltração de tecidos retro-orbitários por anticorpos e mediadores inflamatórios.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Exoftalmia** é patognomônica da **Doença de Graves** no contexto de bócio.",
      "B": "[INCORRETA] Causa bradicardia, pele seca e lentidão.",
      "C": "[INCORRETA] Manifesta-se geralmente como um nódulo frio isolado, sem exoftalmia.",
      "D": "[INCORRETA] Pode causar bócio (carência), mas não o quadro oftálmico de Graves."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4068,
    "materia": "semio2",
    "aula_id": "semio2_a5",
    "tema": "semio2_a5",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O sinal de 'Chvostek' (contração dos músculos faciais ao percutir o nervo facial) é utilizado para pesquisar qual distúrbio metabólico?),",
    "opcoes": [
      "A) Hiperglicemia.",
      "B) Hipercalemia.",
      "C) Hipocalcemia (baixo cálcio no sangue).",
      "D) Hipotensão."
    ],
    "explicacao_geral": "A hipocalcemia aumenta a excitabilidade neuromuscular.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Diabetes.",
      "B": "[INCORRETA] Potássio alto (risco de arritmia).",
      "C": "[CORRETA] O **Sinal de Chvostek** indica **Hipocalcemia**.",
      "D": "[INCORRETA] Pressão baixa."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4069,
    "materia": "semio2",
    "aula_id": "semio2_a6",
    "tema": "semio2_a6",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "A 'Manobra de Guyon' é utilizada para a palpação de qual órgão?),",
    "opcoes": [
      "A) Fígado.",
      "B) Rins (Palpação bimanual).",
      "C) Útero.",
      "D) Próstata."
    ],
    "explicacao_geral": "A mão posterior empurra o rim para frente enquanto a mão anterior tenta palpá-lo durante a inspiração.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Manobras de Lemos Torres ou Mathieu.",
      "B": "[CORRETA] A **Manobra de Guyon** é para **Palpação Renal**.",
      "C": "[INCORRETA] Palpação ginecológica bimanual clássica.",
      "D": "[INCORRETA] Toque retal."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4070,
    "materia": "semio2",
    "aula_id": "semio2_a6",
    "tema": "semio2_a6",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O que o médico avalia primordialmente ao realizar o 'Toque Retal' para triagem prostática em um homem?),",
    "opcoes": [
      "A) A cor das fezes apenas.",
      "B) O tamanho dos ossos da bacia.",
      "C) A presença de hemorroidas apenas.",
      "D) Tamanho, consistência, presença de nódulos, sulco mediano e sensibilidade da próstata."
    ],
    "explicacao_geral": "Uma próstata endurecida ou nodular levanta a suspeita de neoplasia.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Incompleto.",
      "B": "[INCORRETA] Irrelevante.",
      "C": "[INCORRETA] Incompleto.",
      "D": "[CORRETA] O **Toque Retal** avalia a **Morfologia da Próstata**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4071,
    "materia": "semio2",
    "aula_id": "semio2_a6",
    "tema": "semio2_a6",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Um paciente queixa-se de uma 'massa' no escroto que parece um 'saco de minhocas' ao palpar, e que piora com o esforço físico (Manobra de Valsalva). Qual o diagnóstico?),",
    "opcoes": [
      "A) Varicocele (dilatação das veias do plexo pampiniforme).",
      "B) Hidrocele (líquido na túnica vaginal).",
      "C) Câncer de testículo.",
      "D) Hérnia Inguinal."
    ],
    "explicacao_geral": "A varicocele é uma causa comum de infertilidade masculina.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Saco de Minhocas** é a descrição clássica da **Varicocele**.",
      "B": "[INCORRETA] Sensação de massa fluida, com transiluminação positiva.",
      "C": "[INCORRETA] Massa endurecida e fixa, geralmente indolor inicialmente.",
      "D": "[INCORRETA] Pode chegar ao escroto (hérnia inguinoescrotal), mas tem característica de alça intestinal e ruído hidroaéreo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4072,
    "materia": "semio2",
    "aula_id": "semio2_a6",
    "tema": "semio2_a6",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "A 'Transiluminação' do escroto é uma manobra simples que ajuda a diferenciar?),",
    "opcoes": [
      "A) Câncer de Hérnia.",
      "B) Varicocele de Torção de testículo.",
      "C) Hidrocele (conteúdo líquido, luz passa) de massas sólidas ou hérnias (luz não passa).",
      "D) Urina de sangue."
    ],
    "explicacao_geral": "Consiste em encostar uma lanterna na pele do escroto em ambiente escuro.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Inespecífico/Diferente.",
      "B": "[INCORRETA] Inespecífico.",
      "C": "[CORRETA] A **Transiluminação** identifica o **Conteúdo Líquido**.",
      "D": "[INCORRETA] Irrelevante clínico dessa forma."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula semio2_a5/a6 adicionadas.`);
