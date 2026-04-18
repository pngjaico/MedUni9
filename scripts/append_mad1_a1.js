import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3841,
    "materia": "mad1",
    "aula_id": "mad1_a1",
    "tema": "mad1_a1",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A principal diferença estrutural entre bactérias Gram-positivas e Gram-negativas reside na parede celular. Qual componente é encontrado em abundância (múltiplas camadas) nas Gram-positivas?),",
    "opcoes": [
      "A) Lipopolissacarídeo (LPS).",
      "B) Peptidoglicano (Mureína).",
      "C) Membrana Externa.",
      "D) Espaço Periplasmático."
    ],
    "explicacao_geral": "O peptidoglicano confere rigidez e proteção osmótica à bactéria.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Encontrado apenas na membrana externa das Gram-negativas (endotoxina).",
      "B": "[CORRETA] As **Gram-positivas** possuem uma grossa camada de **Peptidoglicano**.",
      "C": "[INCORRETA] Exclusiva de Gram-negativas.",
      "D": "[INCORRETA] Espaço entre membrana e parede, muito mais proeminente em Gram-negativas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3842,
    "materia": "mad1",
    "aula_id": "mad1_a1",
    "tema": "mad1_a1",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual estrutura bacteriana é responsável pela locomoção (motilidade)?),",
    "opcoes": [
      "A) Cílios.",
      "B) Fímbrias.",
      "C) Pili.",
      "D) Flagelos."
    ],
    "explicacao_geral": "Bactérias não possuem cílios; o movimento é impulsionado por flagelos proteicos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Estrutura eucariótica.",
      "B": "[INCORRETA] Relacionadas à adesão.",
      "C": "[INCORRETA] Relacionado à conjugação (troca de DNA).",
      "D": "[CORRETA] O **Flagelo** é o órgão de **motilidade bacteriana**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3843,
    "materia": "mad1",
    "aula_id": "mad1_a1",
    "tema": "mad1_a1",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O 'Lipopolissacarídeo' (LPS) é um componente crítico de patogenicidade. Em qual grupo de bactérias ele é encontrado e como ele atua?),",
    "opcoes": [
      "A) Nas Gram-negativas, atuando como uma potente endotoxina que pode causar choque séptico.",
      "B) Nas Gram-positivas, ajudando na síntese de ATP.",
      "C) Em ambos os grupos, como corante natural.",
      "D) Apenas em vírus."
    ],
    "explicacao_geral": "O LPS é liberado quando a bactéria morre ou se multiplica, ativando intensamente o sistema imune.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **LPS (Endotoxina)** é exclusivo de **Bactérias Gram-negativas**.",
      "B": "[INCORRETA] Gram-positivas possuem ácidos teicoicos e lipoteicoicos.",
      "C": "[INCORRETA] Exclusivo de Gram-negativas.",
      "D": "[INCORRETA] Vírus não possuem metabolismo celular ou parede."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3844,
    "materia": "mad1",
    "aula_id": "mad1_a1",
    "tema": "mad1_a1",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A 'Cápsula' bacteriana é considerada um importante fator de virulência. Qual sua função principal no contexto patológico?),",
    "opcoes": [
      "A) Gerar energia para a bactéria.",
      "B) Facilitar a divisão celular.",
      "C) Proteção contra a fagocitose por células do sistema imune (como macrófagos).",
      "D) Permitir a respiração anaeróbia."
    ],
    "explicacao_geral": "Bactérias capsuladas (ex: Streptococcus pneumoniae) são mais difíceis de serem eliminadas pelo hospedeiro.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Função do metabolismo citoplasmático/membrana.",
      "B": "[INCORRETA] Orquestrado pelo anel FtsZ.",
      "C": "[CORRETA] A **Cápsula** é uma estrutura **Anti-fagocitária**.",
      "D": "[INCORRETA] Sem relação."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3845,
    "materia": "mad1",
    "aula_id": "mad1_a1",
    "tema": "mad1_a1",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Os 'Esporos' (Endósporos) são estruturas de resistência produzidas por certos gêneros como Bacillus e Clostridium. O que os torna clinicamente perigosos?),",
    "opcoes": [
      "A) São muito bonitos e enganam o médico.",
      "B) São altamente resistentes ao calor, desinfetantes e dessecação, podendo sobreviver por anos no ambiente até encontrarem condições de germinar.",
      "C) Eles se multiplicam 1000x mais rápido que as bactérias normais.",
      "D) Causam alergia na pele imediatamente ao toque."
    ],
    "explicacao_geral": "A esporulação é uma estratégia de sobrevivência em ambientes adversos (falta de nutrientes).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Absurdo.",
      "B": "[CORRETA] O **Esporo** garante a **persistência ambiental** de patógenos graves (ex: Tétano).",
      "C": "[INCORRETA] São estruturas metabolicamente inertes (dormentes).",
      "D": "[INCORRETA] A patologia ocorre após germinação e produção de toxinas."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3846,
    "materia": "mad1",
    "aula_id": "mad1_a1",
    "tema": "mad1_a1",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A coloração de Gram é técnica fundamental. Ao final do processo, como ficam as bactérias Gram-positivas e Gram-negativas, respectivamente?),",
    "opcoes": [
      "A) Vermelhas e Azuis.",
      "B) Incolores e Pretas.",
      "C) Verdes e Amarelas.",
      "D) Roxas (Cristal Violeta) e Rosas/Vermelhas (Safranina)."
    ],
    "explicacao_geral": "O cristal violeta fica retido na grossa camada de peptidoglicano das Gram+ mesmo após a descoloração pelo álcool.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Invertido.",
      "B": "[INCORRETA] Errado.",
      "C": "[INCORRETA] Errado.",
      "D": "[CORRETA] A **Diferenciação pelo Gram** baseia-se na **retenção de corante** na parede celular."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3847,
    "materia": "mad1",
    "aula_id": "mad1_a1",
    "tema": "mad1_a1",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Ao analisar uma secreção de ferida cirúrgica, o laboratório reporta 'Cocos Gram-positivos em cachos'. Qual o agente mais provável considerando apenas a morfologia?),",
    "opcoes": [
      "A) Staphylococcus aureus.",
      "B) Streptococcus pyogenes.",
      "C) Escherichia coli.",
      "D) Neisseria meningitidis."
    ],
    "explicacao_geral": "Staphylococcus (do grego staphyle = cacho de uvas); Streptococcus ocorre em cadeias.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] **Staphylococcus** crescem classicamente em **arranjos de cachos**.",
      "B": "[INCORRETA] Crescem em cadeias ou pares.",
      "C": "[INCORRETA] Bacilo Gram-negativo.",
      "D": "[INCORRETA] Diplococo Gram-negativo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3848,
    "materia": "mad1",
    "aula_id": "mad1_a1",
    "tema": "mad1_a1",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Os 'Pili Comuns' ou Fímbrias são essenciais para qual etapa da patogênese bacteriana?),",
    "opcoes": [
      "A) Multiplicação intracelular.",
      "B) Produção de toxinas extracelulares.",
      "C) Adesão às superfícies das células do hospedeiro, evitando que a bactéria seja 'lavada' (ex: por urina ou muco).",
      "D) Digestão de antibióticos."
    ],
    "explicacao_geral": "Sem adesão, a colonização e subsequente infecção raramente ocorrem.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Envolve outros fatores (invasinas).",
      "B": "[INCORRETA] Depende de genes específicos e ribossomos.",
      "C": "[CORRETA] As **Fímbrias** são as principais **Adesinas** bacterianas.",
      "D": "[INCORRETA] Resistência depende de enzimas ou bombas, não de fímbrias."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad1_a1 adicionadas.`);
