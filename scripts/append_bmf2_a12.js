import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3689,
    "materia": "bmf2",
    "aula_id": "bmf2_a12",
    "tema": "bmf2_a12",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Os rins são órgãos vitais localizados na cavidade abdominal. Qual a sua posição anatômica correta em relação ao peritônio?),",
    "opcoes": [
      "A) Intraperitoneal (completamente envoltos por peritônio).",
      "B) Retroperitoneal (atrás do peritônio parietal posterior).",
      "C) Dentro da cavidade pélvica.",
      "D) Flutuando livremente no abdome."
    ],
    "explicacao_geral": "Os rins situam-se contra a parede abdominal posterior, cobertos apenas anteriormente pelo peritônio.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Órgãos como estômago e fígado são intraperitoniais.",
      "B": "[CORRETA] A localização **Retroperitoneal** protege os rins contra traumas abdominais diretos leves.",
      "C": "[INCORRETA] Localização da bexiga urinária.",
      "D": "[INCORRETA] São fixos pelo pedículo e gordura perirrenal."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3690,
    "materia": "bmf2",
    "aula_id": "bmf2_a12",
    "tema": "bmf2_a12",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Anatomicamente, o parênquima renal é dividido em duas regiões principais. Quais são?),",
    "opcoes": [
      "A) Cabeça e corpo do rim.",
      "B) Mucosa e submucosa.",
      "C) Parte branca e parte preta.",
      "D) Córtex (externo) e Medula (interna - contendo as pirâmides renais)."
    ],
    "explicacao_geral": "O córtex contém a maioria dos glomérulos; a medula contém as alças de Henle e ductos coletores.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Descrição de pâncreas/estômago.",
      "B": "[INCORRETA] Descrição de órgãos ocos (tubo digestório).",
      "C": "[INCORRETA] Sem fundamento anatômico.",
      "D": "[CORRETA] O **Córtex e a Medula** organizam a arquitetura funcional do **Néfron**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3691,
    "materia": "bmf2",
    "aula_id": "bmf2_a12",
    "tema": "bmf2_a12",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Qual a sequência correta do trajeto da urina desde a pirâmide renal até a saída do rim?),",
    "opcoes": [
      "A) Papila Renal -> Cálice Menor -> Cálice Maior -> Pelve Renal -> Ureter.",
      "B) Ureter -> Bexiga -> Rim.",
      "C) Glomérulo -> Uretra -> Cálice.",
      "D) Pelve -> Pirâmide -> Cápsula."
    ],
    "explicacao_geral": "A urina flui de estruturas menores para coletores maiores.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Este é o **fluxo urinário** anatômico intra-renal.",
      "B": "[INCORRETA] Caminho retrógrado (patológico).",
      "C": "[INCORRETA] Sequência sem lógica anatômica.",
      "D": "[INCORRETA] Caminho inverso."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3692,
    "materia": "bmf2",
    "aula_id": "bmf2_a12",
    "tema": "bmf2_a12",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A 'Bexiga Urinária' possui uma região triangular lisa no seu assoalho, cujos vértices são as aberturas dos ureteres e o óstio interno da uretra. Qual o nome dessa região?),",
    "opcoes": [
      "A) Pirâmide de Malpighi.",
      "B) Hilo vesical.",
      "C) Trígono Vesical.",
      "D) Carina."
    ],
    "explicacao_geral": "O trígono é clinicamente importante por ser local comum de infecções (cistites) e tumores.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Estrutura medular do rim.",
      "B": "[INCORRETA] Termo não utilizado para a bexiga.",
      "C": "[CORRETA] O **Trígono Vesical** é uma referência anatômica fixa da **bexiga**.",
      "D": "[INCORRETA] Bifurcação da traqueia."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3693,
    "materia": "bmf2",
    "aula_id": "bmf2_a12",
    "tema": "bmf2_a12",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "O 'Pedículo Renal' é o conjunto de estruturas que entram e saem do rim pelo hilo. Qual a disposição anatômica mais comum dessas estruturas de anterior para posterior?),",
    "opcoes": [
      "A) Artéria Renal, Veia Renal e Ureter.",
      "B) Veia Renal, Artéria Renal e Pelve Renal (Ureter).",
      "C) Ureter, Veia e Artéria.",
      "D) Não existe ordem fixa."
    ],
    "explicacao_geral": "Essa organização é fundamental para o reconhecimento cirúrgico.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A veia costuma ser a mais anterior.",
      "B": "[CORRETA] A sequência **V.A.P.** (Veia, Artéria, Pelve) é a regra anatômica do **hilo renal**.",
      "C": "[INCORRETA] O ureter/pelve é o elemento mais posterior.",
      "D": "[INCORRETA] Embora existam variações, o padrão é bem estabelecido."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3694,
    "materia": "bmf2",
    "aula_id": "bmf2_a12",
    "tema": "bmf2_a12",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Mulheres apresentam uma predisposição anatômica muito maior a Infecções do Trato Urinário (ITUs) baixas em comparação aos homens. Por que?),",
    "opcoes": [
      "A) Porque os rins das mulheres são menores.",
      "B) Porque as mulheres bebem menos água.",
      "C) Porque a bexiga feminina não tem trígono.",
      "D) Devido à uretra feminina ser muito mais curta (cerca de 4 cm) e estar mais próxima à região anal, facilitando a ascensão de bactérias."
    ],
    "explicacao_geral": "Nos homens, a uretra longa (cerca de 20 cm) atua como barreira protetora.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Não influencia a ascensão bacteriana.",
      "B": "[INCORRETA] Fator comportamental, não anatômico intrínseco.",
      "C": "[INCORRETA] Ambas possuem trígono.",
      "D": "[CORRETA] A **brevidade da uretra feminina** explica a alta incidência de **cistites**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3695,
    "materia": "bmf2",
    "aula_id": "bmf2_a12",
    "tema": "bmf2_a12",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Um paciente apresenta dor intensa em cólica que se irradia do flanco para a região inguinal e escrotal (Cólica Renal). Isso sugere um cálculo impactado em qual estrutura anatômica?),",
    "opcoes": [
      "A) Ureter, acompanhando o trajeto anatômico de descida do órgão.",
      "B) Alvéolo pulmonar.",
      "C) Esôfago distal.",
      "D) Vesícula biliar."
    ],
    "explicacao_geral": "A dor 'segue' o ureter à medida que o cálculo migra.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **dor ureteral** irradia para a região **genital/inguinal**.",
      "B": "[INCORRETA] Sem correlação clínica.",
      "C": "[INCORRETA] Causaria dor retroesternal.",
      "D": "[INCORRETA] Dor em hipocôndrio direito irradiada para a escápula."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3696,
    "materia": "bmf2",
    "aula_id": "bmf2_a12",
    "tema": "bmf2_a12",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Quais glândulas endócrinas localizam-se imediatamente acima do polo superior de cada rim?),",
    "opcoes": [
      "A) Gônadas (Testículos/Ovários).",
      "B) Glândula Tireóide.",
      "C) Glândulas Suprarrenais (Adrenais).",
      "D) Pâncreas."
    ],
    "explicacao_geral": "Embora próximas fisicamente, as suprarrenais possuem funções e origens embriológicas diferentes dos rins.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Localização pélvica ou escrotal.",
      "B": "[INCORRETA] Região cervical.",
      "C": "[CORRETA] As **Suprarrenais** repousam sobre o **polo superior renal**.",
      "D": "[INCORRETA] Órgão transversal no abdome superior."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf2_a12 adicionadas.`);
