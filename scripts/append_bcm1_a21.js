import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3593,
    "materia": "bcm1",
    "aula_id": "bcm1_a21",
    "tema": "bcm1_a21",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "A 'Apoptose' é descrita como um suicídio celular programado. Qual a principal vantagem biológica deste processo?),",
    "opcoes": [
      "A) Eliminar células indesejadas, danificadas ou velhas de forma limpa, sem causar inflamação no tecido ao redor.",
      "B) Fazer a célula crescer infinitamente.",
      "C) Atrair bactérias para comer a célula morta.",
      "D) Produzir mais energia para as células vizinhas."
    ],
    "explicacao_geral": "A apoptose mantém a homeostase tecidual e remove células com potencial oncogênico.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Apoptose** é um processo silencioso e **fisiológico** de renovação.",
      "B": "[INCORRETA] Leva ao desaparecimento da célula.",
      "C": "[INCORRETA] Corpos apoptóticos são fagocitados por macrófagos ou células vizinhas discretamente.",
      "D": "[INCORRETA] A apoptose consome energia (ATP) para ocorrer."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3594,
    "materia": "bcm1",
    "aula_id": "bcm1_a21",
    "tema": "bcm1_a21",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "A 'Necrose' é uma forma de morte celular acidental. Qual a principal característica morfológica que a distingue da apoptose?),",
    "opcoes": [
      "A) Diminuição do tamanho celular (Encolhimento).",
      "B) Fragmentação controlada do DNA.",
      "C) Ausência de inflamação.",
      "D) Rompimento da membrana plasmática e extravasamento do conteúdo celular, gerando uma resposta inflamatória intensa."
    ],
    "explicacao_geral": "A necrose resulta de danos agudos como hipóxia severa, toxinas ou traumas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Característica da apoptose.",
      "B": "[INCORRETA] Característica da apoptose.",
      "C": "[INCORRETA] A necrose é fortemente pró-inflamatória.",
      "D": "[CORRETA] O **extravasamento citoplasmático** na **Necrose** lesiona o tecido adjacente."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3595,
    "materia": "bcm1",
    "aula_id": "bcm1_a21",
    "tema": "bcm1_a21",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "As enzimas responsáveis por executar o programa de morte celular na apoptose são chamadas de:),",
    "opcoes": [
      "A) Amilases.",
      "B) Caspases.",
      "C) Catalases.",
      "D) Polimerases."
    ],
    "explicacao_geral": "As caspases são proteases que clivam proteínas em resíduos de aspartato.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Digerem carboidratos.",
      "B": "[CORRETA] As **Caspases** (iniciadoras e executoras) levam à **morte celular programada**.",
      "C": "[INCORRETA] Neutralizam peróxido no peroxissomo.",
      "D": "[INCORRETA] Sintetizam ácidos nucleicos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3596,
    "materia": "bcm1",
    "aula_id": "bcm1_a21",
    "tema": "bcm1_a21",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A 'via intrínseca' da apoptose é mediada pela mitocôndria. Qual evento molecular libera o sinal para a morte?),",
    "opcoes": [
      "A) Entrada de glicose.",
      "B) Saída de oxigênio.",
      "C) Aumento da permeabilidade da membrana externa mitocondrial e liberação de Citocromo C no citosol.",
      "D) O ribossomo para de trabalhar."
    ],
    "explicacao_geral": "Este processo é regulado pela família de proteínas Bcl-2 (pro-apoptóticas como Bax/Bak e anti-apoptóticas).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Processo benéfico energético.",
      "B": "[INCORRETA] Consumo mitocondrial normal.",
      "C": "[CORRETA] A liberação de **Citocromo C** ativa o apoptossomo e as **caspases**.",
      "D": "[INCORRETA] Pode ser uma causa de estresse, mas não é a via intrínseca mitocondrial per se."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3597,
    "materia": "bcm1",
    "aula_id": "bcm1_a21",
    "tema": "bcm1_a21",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Um paciente sofre um infarto agudo do miocárdio (ataque cardíaco) de longa duração. As células do coração morrem por falta de oxigênio permanente. Qual o tipo de morte celular predominante neste caso?),",
    "opcoes": [
      "A) Necrose de coagulação (devido ao dano isquêmico irreversível).",
      "B) Apoptose fisiológica.",
      "C) Crescimento exagerado.",
      "D) Mitose acelerada."
    ],
    "explicacao_geral": "Isquemias prolongadas impedem a manutenção de ATP necessário para o programa apoptótico, forçando a necrose.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Infarto** gera morte por **Necrose**, com destruição arquitetural do tecido.",
      "B": "[INCORRETA] Apoptose exige energia (ATP). Na anóxia severa, a célula simplesmente colapsa por necrose.",
      "C": "[INCORRETA] Ocorre perda de massa muscular funcional.",
      "D": "[INCORRETA] Cardiomiócitos não realizam mitose significativa após maturidade."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3598,
    "materia": "bcm1",
    "aula_id": "bcm1_a21",
    "tema": "bcm1_a21",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O desenvolvimento embrionário humano depende da apoptose. Qual o exemplo clássico deste fenômeno na formação das mãos?),",
    "opcoes": [
      "A) As unhas crescem por apoptose.",
      "B) A pele da palma da mão morre para virar osso.",
      "C) Nascemos com luvas.",
      "D) Desaparecimento das membranas interdigitais (espaços entre os dedos) via morte celular programada (Escultura dos dedos)."
    ],
    "explicacao_geral": "Se este processo falhar, o indivíduo nasce com sindactilia (dedos grudados).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Crescem por queratinização.",
      "B": "[INCORRETA] Transformação de tecido (metaplasia) é diferente de morte.",
      "C": "[INCORRETA] Fantasioso.",
      "D": "[CORRETA] A **Apoptose** é fundamental para a **morfogênese** correta dos membros."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3599,
    "materia": "bcm1",
    "aula_id": "bcm1_a21",
    "tema": "bcm1_a21",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A 'Via Extrínseca' da apoptose é ativada por sinais externos de outras células, como os linfócitos T. Qual proteína de superfície celular atua como um 'Receptor de Morte' para esta via?),",
    "opcoes": [
      "A) Receptor de Insulina.",
      "B) Receptor Fas (e seu ligante FasL).",
      "C) Receptor de Glicose.",
      "D) Aquaporina."
    ],
    "explicacao_geral": "Os linfócitos usam essa via para eliminar células infectadas por vírus ou cancerosas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Hormonal metabólico.",
      "B": "[CORRETA] O sistema **Fas/FasL** é o gatilho da **via extrínseca** da apoptose.",
      "C": "[INCORRETA] Transportador, não receptor de sinalização de morte.",
      "D": "[INCORRETA] Canal de água."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3600,
    "materia": "bcm1",
    "aula_id": "bcm1_a21",
    "tema": "bcm1_a21",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Um paciente com câncer avançado apresenta resistência à morte celular (evasão da apoptose). Qual alteração molecular explicaria esta agressividade?),",
    "opcoes": [
      "A) Hiperexpressão de proteínas anti-apoptóticas (como Bcl-2) que bloqueiam a liberação do citocromo C.",
      "B) Excesso de caspases ativas.",
      "C) Mitococôndrias muito grandes que não morrem.",
      "D) Consumo excessivo de vitamina C."
    ],
    "explicacao_geral": "Este é um dos 'Hallmarks of Cancer' (marcas do câncer).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **equilíbrio pró/anti-apoptótico** é desviado para a sobreviviência no **câncer**.",
      "B": "[INCORRETA] Isso induziria a morte da célula cancerosa.",
      "C": "[INCORRETA] O tamanho não impede a via bioquímica de morte.",
      "D": "[INCORRETA] Sem correlação direta com a resistência apoptótica intrínseca cancerosa."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bcm1_a21 adicionadas.`);
