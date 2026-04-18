import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3681,
    "materia": "bmf2",
    "aula_id": "bmf2_a11",
    "tema": "bmf2_a11",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "Onde se localiza o 'Centro Respiratório' primário, responsável pelo controle rítmico automático da respiração?),",
    "opcoes": [
      "A) No Bulbo (tronco encefálico).",
      "B) No Cerebelo.",
      "C) No Hipotálamo.",
      "D) No Córtex motor frontal."
    ],
    "explicacao_geral": "O bulbo contém os grupos respiratórios dorsal e ventral que geram o ritmo básico.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Bulbo** é o centro de controle autonômico da **respiração**.",
      "B": "[INCORRETA] Coordena equilíbrio e movimento fino.",
      "C": "[INCORRETA] Regula temperatura e sede.",
      "D": "[INCORRETA] Responsável pelo controle respiratório voluntário (Ex: prender o folego)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3682,
    "materia": "bmf2",
    "aula_id": "bmf2_a11",
    "tema": "bmf2_a11",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "Qual o principal estímulo químico que o corpo usa para ajustar a ventilação respiratória em condições normais?),",
    "opcoes": [
      "A) Queda discreta de Oxigênio (O2).",
      "B) Aumento de açúcar no sangue.",
      "C) Aumento da pressão parcial de Gás Carbônico (PCO2) no sangue arterial.",
      "D) Quantidade de água bebida."
    ],
    "explicacao_geral": "O sistema respiratório é muito mais sensível a pequenas variações de CO2 do que de O2.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O O2 só se torna o estímulo principal em situações de hipóxia grave (drive hipóxico).",
      "B": "[INCORRETA] Sem influência direta no ritmo respiratório basal.",
      "C": "[CORRETA] A **PCO2** é o controlador fino da **ventilação**.",
      "D": "[INCORRETA] Sem relação."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3683,
    "materia": "bmf2",
    "aula_id": "bmf2_a11",
    "tema": "bmf2_a11",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Os 'Quimiorreceptores Centrais' localizados no bulbo são sensíveis a variações de pH no líquido cefalorraquidiano. Como o CO2 do sangue altera este pH?),",
    "opcoes": [
      "A) Por transporte ativo de H+ através da barreira hematoencefálica.",
      "B) O CO2 vira oxigênio no cérebro.",
      "C) O CO2 não atravessa a barreira.",
      "D) O CO2 atravessa livremente a barreira hematoencefálica e reage com a água, formando H+ e bicarbonato; o H+ então estimula os receptores."
    ],
    "explicacao_geral": "Íons H+ do sangue não atravessam bem a barreira, mas o CO2 sim.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] H+ carregado não cruza a barreira hematoencefálica livremente.",
      "B": "[INCORRETA] Absurdo.",
      "C": "[INCORRETA] Gases lipossolúveis atravessam rapidamente.",
      "D": "[CORRETA] A ativação dos **Quimiorreceptores Centrais** depende da **difusão de CO2**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3684,
    "materia": "bmf2",
    "aula_id": "bmf2_a11",
    "tema": "bmf2_a11",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Os 'Quimiorreceptores Periféricos' (Seio Carotídeo e Arco Aórtico) tornam-se essenciais em qual circunstância clínica?),",
    "opcoes": [
      "A) Detecção de hipóxia (baixa PO2 arterial abaixo de 60 mmHg).",
      "B) Verificação do gosto da comida.",
      "C) Controle da cor dos olhos.",
      "D) Medição da temperatura da pele."
    ],
    "explicacao_geral": "Nestes locais existem células glômicas que detectam a queda severa de O2.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Receptores periféricos são os principais detectores de **hipóxia**.",
      "B": "[INCORRETA] Função de papilas gustativas.",
      "C": "[INCORRETA] Genética/Irídica.",
      "D": "[INCORRETA] Termorreceptores cutâneos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3685,
    "materia": "bmf2",
    "aula_id": "bmf2_a11",
    "tema": "bmf2_a11",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "O reflexo de 'Hering-Breuer' atua como um mecanismo protetor durante a respiração. Qual o seu objetivo?),",
    "opcoes": [
      "A) Forçar a inspiração profunda o tempo todo.",
      "B) Interromper a inspiração e iniciar a expiração quando os pulmões estão excessivamente estirados, prevenindo lesões por hiperinsuflação.",
      "C) Acelerar o coração.",
      "D) Fazer a pessoa tossir."
    ],
    "explicacao_geral": "Os receptores de estiramento nos pulmões enviam sinais via nervo vago ao bulbo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pelo contrário, ele limita a inspiração.",
      "B": "[CORRETA] O **Reflexo de Hering-Breuer** é um **limitador protetor** da expansão pulmonar.",
      "C": "[INCORRETA] Resposta autonômica complexa, mas não o foco do reflexo respiratório citado.",
      "D": "[INCORRETA] Tossir depende de irritantes na via aérea."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3686,
    "materia": "bmf2",
    "aula_id": "bmf2_a11",
    "tema": "bmf2_a11",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um indivíduo sente-se ansioso e começa a hiperventilar (respirar muito rápido e profundo sem necessidade física). O que ocorre com os níveis de CO2 no sangue e qual a consequência imediata?),",
    "opcoes": [
      "A) O CO2 sobe e o sangue fica ácido.",
      "B) O O2 acaba e ele morre asfixiado.",
      "C) Nada ocorre.",
      "D) Ocorre 'lavagem' de CO2 (Hipocapnia), levando à alcalose respiratória, que pode causar tonturas e formigamentos (parestesias)."
    ],
    "explicacao_geral": "A queda de CO2 eleva o pH do sangue.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] CO2 cai na hiperventilação.",
      "B": "[INCORRETA] O O2 geralmente está saturado ao máximo (100%).",
      "C": "[INCORRETA] Há um distúrbio metabólico-respiratório claro.",
      "D": "[CORRETA] A **Hiperventilação** gera **Alcalose Respiratória** por perda de CO2."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3687,
    "materia": "bmf2",
    "aula_id": "bmf2_a11",
    "tema": "bmf2_a11",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Pacientes com Doença Pulmonar Obstrutiva Crônica (DPOC) retêm CO2 cronicamente. Por que a oferta de oxigênio em altas dosagens pode ser perigosa para eles?),",
    "opcoes": [
      "A) Porque o oxigênio queima o pulmão.",
      "B) Porque o oxigênio faz o paciente dormir.",
      "C) Porque esses pacientes perderam a sensibilidade ao CO2 e dependem da hipóxia (baixa de O2) como estímulo para respirar; o excesso de O2 pode anular esse estímulo e causar parada respiratória.",
      "D) Porque o oxigênio estoura os alvéolos."
    ],
    "explicacao_geral": "É o chamado 'seqüestro do drive hipóxico'.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pode causar toxicidade radicular, mas não é o perigo agudo citado.",
      "B": "[INCORRETA] A sonolência (narcose por CO2) ocorre pela falta de ventilação, não pelo O2 per se.",
      "C": "[CORRETA] Em pacientes com **DPOC retentores de CO2**, o **estímulo hipóxico** é vital.",
      "D": "[INCORRETA] Não há rompimento mecânico imediato por alta FiO2."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3688,
    "materia": "bmf2",
    "aula_id": "bmf2_a11",
    "tema": "bmf2_a11",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Qual a influência do aumento da temperatura corporal (febre) sobre a respiração?),",
    "opcoes": [
      "A) Aumenta a frequência respiratória (Taquipneia) para ajudar na dissipação de calor e atender à maior demanda metabólica.",
      "B) Diminui a frequência respiratória.",
      "C) O pulmão para de funcionar durante a febre.",
      "D) Faz a pessoa bocejar."
    ],
    "explicacao_geral": "O aumento da temperatura estimula o centro respiratório.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Febre** é uma causa comum de **Taquipneia**.",
      "B": "[INCORRETA] Aumenta a taxa metabólica.",
      "C": "[INCORRETA] Pulmão continua funcional.",
      "D": "[INCORRETA] Bocejo é correlacionado a sono/tédio ou necessidade de ventilar alvéolos colapsados, não febre primária."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf2_a11 adicionadas.`);
