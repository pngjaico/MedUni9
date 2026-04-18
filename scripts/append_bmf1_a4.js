import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3025,
    "materia": "bmf1",
    "aula_id": "bmf1_a4",
    "tema": "bmf1_a4",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "O tecido conjuntivo é composto por células e uma abundante matriz extracelular (MEC). Qual dessas células é a célula 'construtora' clássica, responsável pela síntese das fibras e da substância fundamental?",
    "opcoes": [
      "A) Fibroblasto.",
      "B) Macrófago.",
      "C) Mastócito.",
      "D) Plasmócito."
    ],
    "explicacao_geral": "O **fibroblasto** é a célula mais comum do conjuntivo e a principal produtora dos componentes da matriz extracelular.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **fibroblasto** sintetiza colágeno, elastina e glicosaminoglicanos.",
      "B": "[INCORRETA] O macrófago é derivado do monócito e especializado em fagocitose.",
      "C": "[INCORRETA] O mastócito está envolvido em reações alérgicas e liberação de histamina.",
      "D": "[INCORRETA] O plasmócito é derivado do linfocito B e produz anticorpos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3026,
    "materia": "bmf1",
    "aula_id": "bmf1_a4",
    "tema": "bmf1_a4",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "As fibras do tecido conjuntivo possuem propriedades distintas. As fibras que formam um arcabouço delicado em 'rede', permitindo a passagem de células em órgãos como o baço e linfonodos, são as:",
    "opcoes": [
      "A) Fibras de Colágeno Tipo I.",
      "B) Fibras Reticulares (Colágeno Tipo III).",
      "C) Fibras Elásticas.",
      "D) Fibras de Fibrilina."
    ],
    "explicacao_geral": "As **fibras reticulares** são extremamente finas e ramificadas, formando um estroma de suporte para tecidos hematopoiéticos e linfoides.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Colágeno tipo I forma feixes espessos e resistentes, não redes delicadas.",
      "B": "[CORRETA] As **fibras reticulares** (compostas por colágeno tipo III) criam a rede de sustentação funcional dos órgãos 'moles'.",
      "C": "[INCORRETA] Fibras elásticas conferem resiliência e elasticidade.",
      "D": "[INCORRETA] Fibrilina é o componente estrutural das fibras elásticas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3027,
    "materia": "bmf1",
    "aula_id": "bmf1_a4",
    "tema": "bmf1_a4",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente apresenta uma reação alérgica aguda após picada de inseto, com edema (inchaço) e vermelhidão local imediata. Qual célula do tecido conjuntivo é a principal responsável por este evento ao liberar histamina?",
    "opcoes": [
      "A) Adipócito.",
      "B) Condrócito.",
      "C) Fibrocito.",
      "D) Mastócito."
    ],
    "explicacao_geral": "Os **mastócitos** possuem grânulos citoplasmáticos ricos em mediadores químicos de inflamação e alergia.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Adipócitos armazenam energia na forma de lipídios.",
      "B": "[INCORRETA] Condrócitos são células da cartilagem.",
      "C": "[INCORRETA] Fibrocito é a forma inativa/madura do fibroblasto.",
      "D": "[CORRETA] O **mastócito** libera histamina e heparina via desgranulação, desencadeando a resposta alérgica imediata."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3028,
    "materia": "bmf1",
    "aula_id": "bmf1_a4",
    "tema": "bmf1_a4",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Dentre os componentes da Matriz Extracelular, as Glicosaminoglicanas (GAGs) e Proteoglicanos atraem grandes quantidades de água. Qual a principal consequência funcional dessa hidratação para o tecido?",
    "opcoes": [
      "A) Permitir a difusão de nutrientes e resistir à forças de compressão.",
      "B) Aumentar a rigidez do tecido para suportar tração extrema.",
      "C) Impedir a migração de células de defesa para o local.",
      "D) Armazenar minerais como cálcio e fosfato."
    ],
    "explicacao_geral": "A **substância fundamental** altamente hidratada cria um meio fluido ou gelatinoso que facilita o transporte molecular e atua como um 'amortecedor' biológico.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A água retida pelas GAGs facilita a **difusão** e ajuda o tecido a absorver pressões (resiliência à compressão).",
      "B": "[INCORRETA] Fibras colágenas é que suportam a tração, não a hidratação da matriz.",
      "C": "[INCORRETA] Pelo contrário, a matriz facilita a movimentação amoeboide de macrófagos e leucócitos.",
      "D": "[INCORRETA] O armazenamento mineral é função do tecido ósseo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3029,
    "materia": "bmf1",
    "aula_id": "bmf1_a4",
    "tema": "bmf1_a4",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "A cicatrização de um corte cirúrgico depende da formação de um novo tecido conjuntivo rico em fibras colágenas. Nesse processo, qual célula migra para a ferida e se torna metabolicamente ativa para 'fechar' a lesão?",
    "opcoes": [
      "A) Plasmócito.",
      "B) Fibroblasto.",
      "C) Pericito.",
      "D) Linfócito."
    ],
    "explicacao_geral": "Cicatrização é sinônimo de produção de matriz extracelular (fibrose), processo liderado pelos fibroblastos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Plasmócitos combatem infecções via anticorpos, mas não formam cicatriz.",
      "B": "[CORRETA] O **fibroblasto** é ativado para sintetizar colágeno e remodelar o tecido lesionado.",
      "C": "[INCORRETA] Pericitos são células de suporte ao redor de capilares.",
      "D": "[INCORRETA] Linfócitos são células do sistema imune adaptativo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3030,
    "materia": "bmf1",
    "aula_id": "bmf1_a4",
    "tema": "bmf1_a4",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O tecido conjuntivo adiposo é um tipo especializado de conjuntivo. Qual é a principal característica que diferencia o 'Tecido Adiposo Multilocular' (Marrom) do 'Unilocular' (Branco)?",
    "opcoes": [
      "A) O marrom serve exclusivamente para estoque de energia em adultos.",
      "B) O branco é muito mais rico em mitocôndrias.",
      "C) O marrom é especializado na termogênese (produção de calor).",
      "D) O branco possui núcleos centrais bem definidos."
    ],
    "explicacao_geral": "O tecido adiposo branco foca em reserva de energia, enquanto o **marrom** é crucial para bebês e recém-nascidos manterem a temperatura corporal.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O marrom é escasso em adultos e serve para calor, não estoque.",
      "B": "[INCORRETA] O tecido marrom é que possui abundância de mitocôndrias (que dão a cor escura).",
      "C": "[CORRETA] O **tecido adiposo multilocular** produz calor através do desacoplamento da cadeia respiratória.",
      "D": "[INCORRETA] Ambos possuem núcleos geralmente excêntricos ou achatados contra a membrana."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3031,
    "materia": "bmf1",
    "aula_id": "bmf1_a4",
    "tema": "bmf1_a4",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A Síndrome de Marfan é uma doença genética que afeta a síntese de fibrilina, um componente das fibras elásticas. Um sinal clínico comum é a fragilidade da parede da artéria aorta. Por que isso acontece?",
    "opcoes": [
      "A) Porque a aorta depende de colágeno tipo II.",
      "B) Porque as fibras elásticas permitem que a aorta suporte a pressão pulsátil do sangue.",
      "C) Porque a aorta é composta apenas por tecido epitelial.",
      "D) Porque a fibrilina é necessária para a nutrição das hemácias."
    ],
    "explicacao_geral": "Artérias de grande calibre precisam deformar e retornar à forma original a cada batimento, função garantida pela elasticidade do conjuntivo de sua parede.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Colágeno tipo II é típico da cartilagem hialina.",
      "B": "[CORRETA] A falha nas **fibras elásticas** compromete a resiliência da aorta, levando ao risco de aneurismas e rupturas.",
      "C": "[INCORRETA] Vasos possuem camadas de epitélio, músculo e conjuntivo.",
      "D": "[INCORRETA] Fibrilina é estrutural, não nutricional para hemácias."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3032,
    "materia": "bmf1",
    "aula_id": "bmf1_a4",
    "tema": "bmf1_a4",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual alternativa descreve correta e especificamente a função dos macrófagos residentes no tecido conjuntivo?",
    "opcoes": [
      "A) Síntese de anticorpos específicos.",
      "B) Produção de fibras elásticas.",
      "C) Armazenamento de triglicerídeos.",
      "D) Fagocitose de detritos e apresentação de antígenos."
    ],
    "explicacao_geral": "O macrófago é o 'limpador' e sentinela do conjuntivo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Esta é a função dos plasmócitos.",
      "B": "[INCORRETA] Esta é a função dos fibroblastos.",
      "C": "[INCORRETA] Esta é a função dos adipócitos.",
      "D": "[CORRETA] O **macrófago** realiza a limpeza tecidual (**fagocitose**) e alerta o sistema imune (apresentação de antígenos)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf1_a4 adicionadas.`);
