import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4081,
    "materia": "semio2",
    "aula_id": "semio2_a7",
    "tema": "semio2_a7",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A 'Manobra de Lasègue' é fundamental na avaliação de dor lombar. Como ela é realizada e o que indica se positiva?),",
    "opcoes": [
      "A) Flexão do pescoço; indica meningite.",
      "B) Elevação da perna estendida do paciente em decúbito dorsal; dor irradiada abaixo do joelho entre 30-70° indica compressão nervosa radicular (hérnia de disco).",
      "C) Rotação do joelho; indica lesão de menisco.",
      "D) Compressão do abdome; indica gases."
    ],
    "explicacao_geral": "O ponto positivo do sinal de Lasègue é a reprodução da dor radicular clássica do nervo ciático.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sinal de Brudzinski.",
      "B": "[CORRETA] O **Sinal de Lasègue** pesquisa **Radiculopatia Ciática**.",
      "C": "[INCORRETA] Manobra de McMurray.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4082,
    "materia": "semio2",
    "aula_id": "semio2_a7",
    "tema": "semio2_a7",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Os testes de 'Gaveta Anterior e Posterior' no joelho avaliam a integridade de quais estruturas?),",
    "opcoes": [
      "A) Meniscos médio e lateral.",
      "B) Ligamentos colaterais.",
      "C) Patela.",
      "D) Ligamentos Cruzados Anterior (LCA) e Posterior (LCP)."
    ],
    "explicacao_geral": "O teste positivo apresenta um deslocamento anormal da tíbia em relação ao fêmur (translação).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Avaliados pelo teste de McMurray ou Appley.",
      "B": "[INCORRETA] Avaliados pelo estresse em Varo e Valgo.",
      "C": "[INCORRETA] Avaliada pela mobilidade patelar e sinal do apreensão.",
      "D": "[CORRETA] Os **Testes de Gaveta** avaliam os **Ligamentos Cruzados**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4083,
    "materia": "semio2",
    "aula_id": "semio2_a7",
    "tema": "semio2_a7",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O 'Teste de Jobe' (Empty Can Test) é realizado para avaliar especificamente qual tendão do manguito rotador no ombro?),",
    "opcoes": [
      "A) Supraespinal.",
      "B) Infraespinal.",
      "C) Subescapular.",
      "D) Redondo menor."
    ],
    "explicacao_geral": "O paciente realiza abdução e rotação interna (polegar para baixo) contra resistência.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Teste de Jobe** avalia o **Supraespinal**.",
      "B": "[INCORRETA] Avaliado pela rotação externa resistida.",
      "C": "[INCORRETA] Avaliado pelo teste de Gerber (Lift-off).",
      "D": "[INCORRETA] Avaliado junto à rotação externa em abdução."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4084,
    "materia": "semio2",
    "aula_id": "semio2_a8",
    "tema": "semio2_a8",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "Na Escala de Coma de Glasgow (Atualizada), qual a pontuação MÍNIMA e MÁXIMA possíveis?)",
    "opcoes": [
      "A) 0 a 10.",
      "B) 1 a 15.",
      "C) 3 a 15.",
      "D) 0 a 100."
    ],
    "explicacao_geral": "A escala avalia Resposta Ocular (1-4), Verbal (1-5) e Motora (1-6).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Escala visual analógica de dor.",
      "B": "[INCORRETA] A pontuação mínima é 3.",
      "C": "[CORRETA] A **Escala de Glasgow** varia de **3 a 15 pontos**.",
      "D": "[INCORRETA] Escala de Karnofsky ou Barthel."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4085,
    "materia": "semio2",
    "aula_id": "semio2_a8",
    "tema": "semio2_a8",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Ao solicitar que o paciente coloque a língua para fora, o médico observa um desvio para o lado direito. Qual Nervo Craniano está provavelmente lesado?),",
    "opcoes": [
      "A) Nervo Vacial (VII).",
      "B) Nervo Hipoglosso (XII).",
      "C) Nervo Vago (X).",
      "D) Nervo Trigêmeo (V)."
    ],
    "explicacao_geral": "A língua desvia para o lado da lesão devido à ação sem oposição do músculo genioglosso contralateral.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Responsável pela mímica facial.",
      "B": "[CORRETA] O **Nervo Hipoglosso (XII)** controla a **Motricidade da Língua**.",
      "C": "[INCORRETA] Paladar, deglutição e funções viscerais.",
      "D": "[INCORRETA] Sensibilidade facial e mastigação."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4086,
    "materia": "semio2",
    "aula_id": "semio2_a8",
    "tema": "semio2_a8",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O 'Sinal de Babinski' (reflexo cutâneo-plantar em extensão) indica lesão em qual estrutura do sistema nervoso?),",
    "opcoes": [
      "A) Nervos periféricos do pé.",
      "B) Cerebelo.",
      "C) Sistema nervoso autônomo.",
      "D) Trato Piramidal (Neurônio Motor Superior)."
    ],
    "explicacao_geral": "É um reflexo primitivo que desaparece após o desenvolvimento da marcha; em adultos, é sempre patológico.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Causaria ausência de reflexo, não inversão extensora.",
      "B": "[INCORRETA] Causaria ataxia/disfunção de equilíbrio.",
      "C": "[INCORRETA] Irrelevante.",
      "D": "[CORRETA] O **Babinski** sinaliza lesão do **Trato Corticoespinhal (Piramidal)**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4087,
    "materia": "semio2",
    "aula_id": "semio2_a9",
    "tema": "semio2_a9",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Na semiologia dermatológica, qual a diferença entre 'Mácula' e 'Pápula'?),",
    "opcoes": [
      "A) A Mácula é apenas uma mudança de cor (plana); a Pápula é uma lesão sólida e elevada (palpável).",
      "B) A Mácula tem pus; a Pápula tem água.",
      "C) A Mácula coça; a Pápula dói.",
      "D) São a mesma coisa."
    ],
    "explicacao_geral": "O limite de tamanho para pápulas é geralmente de 1 cm.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Mácula é plana** e a **Pápula é elevada**.",
      "B": "[INCORRETA] Pústula e Vesícula têm conteúdo fluido.",
      "C": "[INCORRETA] Sintomas inespecíficos para a definição morfológica.",
      "D": "[INCORRETA] São nomenclaturas morfológicas distintas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4088,
    "materia": "semio2",
    "aula_id": "semio2_a9",
    "tema": "semio2_a9",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Ao avaliar uma lesão pigmentada (pinta), o médico utiliza a regra do ABCD. O que significa o 'D'?),",
    "opcoes": [
      "A) Dor ao toque.",
      "B) Descamação da borda.",
      "C) Diâmetro (preocupante se maior que 6 mm).",
      "D) Duração da lesão."
    ],
    "explicacao_geral": "A regra do ABCDE (A=Assimetria, B=Bordas irregulares, C=Cores múltiplas, D=Diâmetro > 6mm, E=Evolução).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Melanomas frequente são indolores.",
      "B": "[INCORRETA] Inespecífico.",
      "C": "[CORRETA] A regra do **ABCD** usa o **Diâmetro** como critério de suspeição.",
      "D": "[INCORRETA] O critério de tempo entra no 'E' (Evolução)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula semio2_a7/a8/a9 adicionadas.`);
