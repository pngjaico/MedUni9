import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3233,
    "materia": "pmh",
    "aula_id": "pmh_a8",
    "tema": "pmh_a8",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "As lipoproteínas são complexos que transportam lipídios insolúveis no plasma. Qual delas é a maior, menos densa e responsável por transportar as gorduras da dieta (exógenas) do intestino para os tecidos?",
    "opcoes": [
      "A) Quilomícrons.",
      "B) VLDL (Lipoproteína de Densidade Muito Baixa).",
      "C) LDL (Lipoproteína de Baixa Densidade).",
      "D) HDL (Lipoproteína de Alta Densidade)."
    ],
    "explicacao_geral": "Os quilomícrons são produzidos pelos enterócitos logo após a absorção de gorduras.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Os **quilomícrons** transportam triglicerídeos e colesterol de origem **alimentar**.",
      "B": "[INCORRETA] VLDL é produzida no fígado (origem endógena).",
      "C": "[INCORRETA] LDL é o principal transportador de colesterol para os tecidos periféricos (má fama).",
      "D": "[INCORRETA] HDL realiza o transporte reverso do colesterol (boa fama)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3234,
    "materia": "pmh",
    "aula_id": "pmh_a8",
    "tema": "pmh_a8",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A síntese hepática do colesterol é rigorosamente controlada. Qual enzima é o principal local de atuação das 'Estatinas', sendo a etapa limitante da produção de colesterol no corpo?",
    "opcoes": [
      "A) Acetil-CoA Carboxilase.",
      "B) Piruvato Desidrogenase.",
      "C) Lipoproteína Lipase (LPL).",
      "D) Hidroximetilglutaril-CoA Redutase (HMG-CoA Redutase)."
    ],
    "explicacao_geral": "A inibição desta enzima reduz a produção endógena e aumenta a captação de LDL circulante pelos receptores hepáticos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Regula a síntese de ácidos graxos.",
      "B": "[INCORRETA] Atua no metabolismo de carboidratos.",
      "C": "[INCORRETA] Atua na quebra de triglicerídeos das lipoproteínas nos tecidos capilares.",
      "D": "[CORRETA] A **HMG-CoA Redutase** é o alvo farmacológico das estatinas para reduzir o colesterol circulante."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3235,
    "materia": "pmh",
    "aula_id": "pmh_a8",
    "tema": "pmh_a8",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Qual lipoproteína é conhecida como o 'bom colesterol' por sua capacidade de extrair o colesterol em excesso dos tecidos periféricos e levá-lo de volta ao fígado para excreção?),",
    "opcoes": [
      "A) LDL.",
      "B) HDL.",
      "C) IDL.",
      "D) Quilomícron."
    ],
    "explicacao_geral": "Níveis elevados de HDL estão associados à redução do risco de aterosclerose por promoverem a limpeza das artérias.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] LDL deposita colesterol (aterogênico).",
      "B": "[CORRETA] A **HDL** realiza o **Transporte Reverso do Colesterol**, sendo cardioprotetora.",
      "C": "[INCORRETA] Lipoproteína de densidade intermediária, transição entre VLDL e LDL.",
      "D": "[INCORRETA] Transporta gordura da dieta para os tecidos, não faz limpeza periférica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3236,
    "materia": "pmh",
    "aula_id": "pmh_a8",
    "tema": "pmh_a8",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A enzima Lipoproteína Lipase (LPL), localizada na parede dos capilares sanguíneos, é essencial para que os tecidos utilizem as gorduras das lipoproteínas. Qual apoproteína é necessária para ATIVAR a LPL?",
    "opcoes": [
      "A) Apo C-II.",
      "B) Apo B-100.",
      "C) Apo A-I.",
      "D) Apo E."
    ],
    "explicacao_geral": "As apoproteínas funcionam como 'chaves' para ativar enzimas ou servirem de ligantes para receptores específicos.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Apo C-II** (presente em quilomícrons e VLDL) é o ativador obrigatório da LPL.",
      "B": "[INCORRETA] Marcadora de lipoproteínas endógenas (VLDL/LDL), serve para reconhecimento do receptor de LDL.",
      "C": "[INCORRETA] Aprotein principal da HDL.",
      "D": "[INCORRETA] Ajuda no reconhecimento do remanescente de quilomícron pelo fígado."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3237,
    "materia": "pmh",
    "aula_id": "pmh_a8",
    "tema": "pmh_a8",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Um paciente que consome dieta rica em gorduras apresenta plasma 'leitoso' após a refeição devido ao acúmulo de partículas gigantes. Essas partículas devem sofrer a ação da LPL para tornarem-se partículas menores que retornam ao fígado. Como são chamadas essas partículas após perderem a maior parte de seus triglicerídeos?",
    "opcoes": [
      "A) VLDL nativa.",
      "B) LDL madura.",
      "C) Remanescentes de quilomícrons.",
      "D) Ácidos graxos livres."
    ],
    "explicacao_geral": "Após a entrega de TG nos tecidos, a partícula torna-se rica em colesterol e é captada pelo fígado via Apo E.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] VLDL é hepática.",
      "B": "[INCORRETA] LDL deriva das VLDL.",
      "C": "[CORRETA] Após a ação da LPL, os quilomícrons tornam-se **remanescentes de quilomícrons**.",
      "D": "[INCORRETA] Estes são os produtos de quebra dos triglicerídeos que entrarão nas células teciduais."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3238,
    "materia": "pmh",
    "aula_id": "pmh_a8",
    "tema": "pmh_a8",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A 'Teoria da Aterosclerose' envolve o consumo de LDL oxidado por células de defesa. Quando os macrófagos dentro da artéria ficam repletos de lipídios, eles se tornam quais células características da placa aterosclerótica?",
    "opcoes": [
      "A) Queratinócitos.",
      "B) Células Espumosas (Foam cells).",
      "C) Osteoblastos.",
      "D) Astrócitos."
    ],
    "explicacao_geral": "As células espumosas são o marcador histológico inicial da estria gordurosa nas artérias.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Células da epiderme.",
      "B": "[CORRETA] Macrófagos repletos de LDL oxidado tornam-se **células espumosas**, iniciando a inflamação vascular.",
      "C": "[INCORRETA] Células formadoras de osso.",
      "D": "[INCORRETA] Células gliais do sistema nervoso."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3239,
    "materia": "pmh",
    "aula_id": "pmh_a8",
    "tema": "pmh_a8",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente com história de infarto precoce na família apresenta níveis de LDL de 400 mg/dL desde a infância. Suspeita-se de 'Hipercolesterolemia Familiar'. O defeito bioquímico mais comum nesta doença é a mutação no:",
    "opcoes": [
      "A) Receptor de HDL.",
      "B) Complexo FAS.",
      "C) Piruvato Carboxilase.",
      "D) Receptor de LDL (LDLR)."
    ],
    "explicacao_geral": "A ausência ou mau funcionamento dos receptores no fígado impede que a LDL seja removida da circulação.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O problema é o excesso de LDL, não falha no HDL.",
      "B": "[INCORRETA] FAS faz síntese, não captação.",
      "C": "[INCORRETA] Enzima da gliconeogênese.",
      "D": "[CORRETA] A falha no **receptor de LDL** impede o fígado de 'limpar' o sangue, causando níveis altíssimos de colesterol."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3240,
    "materia": "pmh",
    "aula_id": "pmh_a8",
    "tema": "pmh_a8",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A gordura endógena produzida no fígado é exportada para o sangue através de qual lipoproteína?),",
    "opcoes": [
      "A) VLDL.",
      "B) Quilomícrons.",
      "C) LDL.",
      "D) HDL."
    ],
    "explicacao_geral": "A VLDL carrega predominantemente triglicerídeos de síntese hepática (endógena).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **VLDL** transporta para os tecidos os lipídios fabricados pelo próprio fígado.",
      "B": "[INCORRETA] Quilomícrons são de origem intestinal.",
      "C": "[INCORRETA] LDL transporta majoritariamente colesterol e deriva do metabolismo da VLDL.",
      "D": "[INCORRETA] HDL atua no transporte de retorno."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula pmh_a8 adicionadas.`);
