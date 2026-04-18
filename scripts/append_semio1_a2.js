import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3297,
    "materia": "semiologia1",
    "aula_id": "semio1_a2",
    "tema": "semio1_a2",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A anamnese é a ferramenta mais poderosa no diagnóstico reumatológico. Qual característica da DOR sugere fortemente uma origem INFLAMATÓRIA (como a artrite reumatoide)?),",
    "opcoes": [
      "A) Melhora com o repouso e piora com o esforço.",
      "B) Piora com o repouso e melhora levemente com o movimento.",
      "C) Ausência total de dor durante a noite.",
      "D) Ocorre apenas após um trauma direto no local."
    ],
    "explicacao_geral": "Diferenciar dor mecânica de inflamatória é o primeiro passo do raciocínio clínico.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Esta é a característica da dor mecânica (Ex: osteoartrose).",
      "B": "[CORRETA] A **dor inflamatória** costuma ser pior após o repouso prolongado (como ao acordar).",
      "C": "[INCORRETA] A dor inflamatória pode acordar o paciente à noite.",
      "D": "[INCORRETA] Pode ser apenas uma contusão mecânica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3298,
    "materia": "semiologia1",
    "aula_id": "semio1_a2",
    "tema": "semio1_a2",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A 'Rigidez Matinal' é um sintoma cardinal no aparelho locomotor. Qual a duração mínima desse sintoma que sugere um componente inflamatório articular significativo segundo os critérios clássicos?),",
    "opcoes": [
      "A) Superior a 30-60 minutos.",
      "B) Apenas os primeiros 5 minutos ao acordar.",
      "C) Exatamente 10 horas de duração.",
      "D) Não existe tempo mínimo, qualquer rigidez é inflamatória."
    ],
    "explicacao_geral": "A rigidez da osteoartrose (mecânica) costuma ser curta (menos de 30 min), enquanto a inflamatória é prolongada.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] **Rigidez matinal > 1 hora** é um critério clássico para doenças inflamatórias sistêmicas.",
      "B": "[INCORRETA] Rigidez curta é comum na osteoartrose ou em pacientes sedentários.",
      "C": "[INCORRETA] Valor arbitrário e exagerado para a maioria dos casos.",
      "D": "[INCORRETA] A duração é o que diferencia os dois padrões."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3299,
    "materia": "semiologia1",
    "aula_id": "semio1_a2",
    "tema": "semio1_a2",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um paciente de 45 anos relata dor lombar súbita com irradiação para a face lateral da perna e pé, acompanhada de 'formigamento' (parestesia). Qual termo semiológico descreve especificamente essa dor que irradia seguindo um trajeto nervoso?),",
    "opcoes": [
      "A) Claudicação intermitente.",
      "B) Artralgia migratória.",
      "C) Dor Radicular (ou Radiculopatia).",
      "D) Fibromialgia."
    ],
    "explicacao_geral": "A dor radicular indica compressão ou irritação de uma raiz nervosa (Ex: hérnia de disco).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Dor muscular por isquemia durante o esforço (origem vascular).",
      "B": "[INCORRETA] Dor que 'pula' de uma articulação para outra.",
      "C": "[CORRETA] A **dor radicular** segue o trajeto do demátomo correspondente ao nervo afet.",
      "D": "[INCORRETA] Síndrome de dor generalizada, não focalizada em um trajeto nervoso específico."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3300,
    "materia": "semiologia1",
    "aula_id": "semio1_a2",
    "tema": "semio1_a2",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Na avaliação da dor, o acrônimo 'SOCRATES' ajuda a não esquecer nenhum detalhe. O que a letra 'A' deste acrônimo representa?),",
    "opcoes": [
      "A) Articulações afetadas.",
      "B) Anamnese pregressa.",
      "C) Alívio com aspirina.",
      "D) Associações (Sintomas associados)."
    ],
    "explicacao_geral": "Perguntar sobre sintomas associados (Ex: febre, rash cutâneo, olho vermelho) ajuda a identificar doenças sistêmicas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Faz parte da caracterização da dor, mas não é o significado da letra A no acrônimo.",
      "B": "[INCORRETA] Parte geral da anamnese.",
      "C": "[INCORRETA] Alívio e piora são a letra 'E' (Exacerbating/Relieving).",
      "D": "[CORRETA] A letra 'A' refere-se aos **Sintomas Associados** à dor principal."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3301,
    "materia": "semiologia1",
    "aula_id": "semio1_a2",
    "tema": "semio1_a2",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "As 'Red Flags' (bandeiras vermelhas) na dor lombar exigem investigação imediata. Qual das opções abaixo NÃO é considerada uma bandeira vermelha clássica?),",
    "opcoes": [
      "A) Perda de peso inexplicada e febre.",
      "B) Dor que melhora ao deitar e piora ao caminhar.",
      "C) Início súbito de incontinência urinária ou fecal (Síndrome da cauda equina).",
      "D) História prévia de câncer."
    ],
    "explicacao_geral": "As bandeiras vermelhas sugerem causas graves como neoplasias, infecções ou compressão medular aguda.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sugere malignidade ou infecção (Sintomas B).",
      "B": "[CORRETA] A dor que **melhora ao deitar** é o padrão típico da dor mecânica comum (benigna).",
      "C": "[INCORRETA] Emergência neurológica absoluta.",
      "D": "[INCORRETA] Aumenta a suspeita de metástase vertebral."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3302,
    "materia": "semiologia1",
    "aula_id": "semio1_a2",
    "tema": "semio1_a2",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um paciente de 75 anos queixa-se de dor no quadril que 'trava' ao iniciar o movimento após ficar sentado por muito tempo, mas que melhora após os primeiros passos. No entanto, se caminhar por mais de 20 minutos, a dor volta intensamente. Qual o padrão dessa dor?),",
    "opcoes": [
      "A) Exclusivamente Inflamatória.",
      "B) Psicogênica.",
      "C) Mecânica (compatível com Osteoartrose).",
      "D) Infecciosa."
    ],
    "explicacao_geral": "A dor mecânica tem relação direta com a carga e o uso da articulação, apresentando a 'rigidez de inatividade' curta.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A dor inflamatória melhora com o movimento continuado e não piora tipicamente com o esforço leve/moderado comparada à dor na inatividade.",
      "B": "[INCORRETA] Há um padrão físico claro descrito.",
      "C": "[CORRETA] A **dor mecânica** tem esse padrão de piorar com o uso prolongado da articulação.",
      "D": "[INCORRETA] Causaria dor persistente, febre e sinais flogísticos locais intensos."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3303,
    "materia": "semiologia1",
    "aula_id": "semio1_a2",
    "tema": "semio1_a2",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A 'Claudicação Neurogênica' é um sintoma onde o paciente sente dor e fraqueza nas pernas ao caminhar, que melhora ao inclinar o tronco para a frente (posição de 'empurrar carrinho de supermercado'). Qual a causa anatômica provável?),",
    "opcoes": [
      "A) Estenose do Canal Vertebral Lombar.",
      "B) Obstrução da artéria ilíaca.",
      "C) Ruptura do tendão de Aquiles.",
      "D) Luxação do quadril."
    ],
    "explicacao_geral": "A inclinação para frente aumenta o diâmetro do canal vertebral, aliviando a compressão sobre os nervos.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **estenose de canal** causa a claudicação neurogênica típica.",
      "B": "[INCORRETA] Causaria claudicação vascular (melhora parando de andar, independente da posição do tronco).",
      "C": "[INCORRETA] Dor aguda localizada, impede o apoio.",
      "D": "[INCORRETA] Causaria deformidade e encurtamento do membro."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3304,
    "materia": "semiologia1",
    "aula_id": "semio1_a2",
    "tema": "semio1_a2",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Ao avaliar uma dor articular, o médico pergunta se a dor 'pula' de uma articulação para outra (Ex: hoje o joelho, amanhã o punho, depois o tornozelo). Qual o termo para esse padrão de acometimento?),",
    "opcoes": [
      "A) Artrite Aditiva.",
      "B) Artrite Migratória.",
      "C) Monoartrite persistente.",
      "D) Osteofitose."
    ],
    "explicacao_geral": "Padrões migratórios são comuns em Febre Reumática ou certas infecções (Ex: Gonococia).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Na aditiva, novas articulações inflamam sem que as anteriores melhorem.",
      "B": "[CORRETA] A **artrite migratória** é o termo para quando a inflamação muda de local.",
      "C": "[INCORRETA] Apenas uma articulação afetada fixa.",
      "D": "[INCORRETA] Termo anatômico para 'bico de papagaio'."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula semio1_a2 adicionadas.`);
