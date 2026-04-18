import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3633,
    "materia": "bmf2",
    "aula_id": "bmf2_a5",
    "tema": "bmf2_a5",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O ciclo cardíaco é composto por sístole e diástole. O que ocorre durante a fase de 'Enchimento Ventricular'?),",
    "opcoes": [
      "A) As valvas semilunares abrem-se para o sangue sair.",
      "B) As valvas atrioventriculares (Mitral e Tricúspide) abrem-se, permitindo a passagem do sangue dos átrios para os ventrículos relaxados.",
      "C) O coração para de bater.",
      "D) O sangue volta para as veias cavas."
    ],
    "explicacao_geral": "O enchimento ocorre principalmente de forma passiva no início da diástole.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ocorre na sístole (ejeção).",
      "B": "[CORRETA] O **Enchimento Ventricular** define a **diástole**.",
      "C": "[INCORRETA] O ciclo é contínuo.",
      "D": "[INCORRETA] As válvulas das veias e a pressão atrial impedem o refluxo significativo em condições normais."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3634,
    "materia": "bmf2",
    "aula_id": "bmf2_a5",
    "tema": "bmf2_a5",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual a definição fisiológica de 'Débito Cardíaco'?),",
    "opcoes": [
      "A) A pressão do sangue nas artérias.",
      "B) O número de batimentos por minuto apenas.",
      "C) O volume de sangue total do corpo.",
      "D) O volume de sangue ejetado por cada ventrículo por unidade de tempo (geralmente litros por minuto)."
    ],
    "explicacao_geral": "Débito Cardíaco = Frequência Cardíaca x Volume Sistólico.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pressão Arterial.",
      "B": "[INCORRETA] Frequência Cardíaca.",
      "C": "[INCORRETA] Volemia.",
      "D": "[CORRETA] O **Débito Cardíaco** é a medida da **performance de bomba** global."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3635,
    "materia": "bmf2",
    "aula_id": "bmf2_a5",
    "tema": "bmf2_a5",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O 'Primeiro Ruído Cardíaco' (B1 - o 'Tum') ouvido no estetoscópio corresponde a qual evento mecânico?),",
    "opcoes": [
      "A) Fechamento das valvas atrioventriculares (Mitral e Tricúspide) no início da sístole ventricular.",
      "B) Fechamento das valvas semilunares (Aórtica e Pulmonar).",
      "C) Abertura da valva mitral.",
      "D) O sangue batendo no átrio."
    ],
    "explicacao_geral": "Os ruídos são gerados pela vibração das estruturas após o fechamento súbito das valvas.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **B1** marca o **início da sístole**.",
      "B": "[INCORRETA] Corresponde à B2 (o 'Tá').",
      "C": "[INCORRETA] Aberturas valvares normais são silenciosas.",
      "D": "[INCORRETA] Descrição imprecisa."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3636,
    "materia": "bmf2",
    "aula_id": "bmf2_a5",
    "tema": "bmf2_a5",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A 'Lei de Frank-Starling' descreve uma propriedade intrínseca do coração. Qual o seu postulado principal?),",
    "opcoes": [
      "A) Quanto mais rápido o coração bate, menos sangue ele ejeta.",
      "B) O coração precisa de eletricidade externa para funcionar.",
      "C) Dentro de limites fisiológicos, quanto maior o estiramento das fibras miocárdicas (pelo maior volume de enchimento/pré-carga), maior será a força de contração e o volume ejetado.",
      "D) O coração ejeta sempre a mesma quantidade de sangue, não importa o enchimento."
    ],
    "explicacao_geral": "Isso permite o equilíbrio automático entre o retorno venoso e o débito cardíaco.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Frequentemente o aumento da FC aumenta o DC até certo limite.",
      "B": "[INCORRETA] O coração é automático.",
      "C": "[CORRETA] A **Lei de Frank-Starling** relaciona **estiramento e força de ejeção**.",
      "D": "[INCORRETA] O coração modula sua força batimento a batimento."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3637,
    "materia": "bmf2",
    "aula_id": "bmf2_a5",
    "tema": "bmf2_a5",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Durante a fase de 'Contração Isovolumétrica', o que acontece com o estado das válvulas e com a pressão interna dos ventrículos?),",
    "opcoes": [
      "A) Todas as válvulas estão abertas e a pressão cai.",
      "B) Todas as válvulas (atrioventriculares e semilunares) estão fechadas e a pressão ventricular sobe rapidamente.",
      "C) Apenas as válvulas semilunares estão abertas.",
      "D) O sangue flui livremente para os pulmões."
    ],
    "explicacao_geral": "Diz-se isovolumétrica porque o volume não muda (válvulas fechadas), mas o ventrículo está contraindo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pressão deve subir para vencer a pressão da aorta.",
      "B": "[CORRETA] Na **Contração Isovolumétrica**, a pressão explode para abrir as **semilunares**.",
      "C": "[INCORRETA] Isso caracteriza a fase de ejeção.",
      "D": "[INCORRETA] O fluxo ocorre na fase seguinte."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3638,
    "materia": "bmf2",
    "aula_id": "bmf2_a5",
    "tema": "bmf2_a5",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente em repouso tem frequência cardíaca de 70 bpm e volume sistólico de 70 ml. Qual o seu Débito Cardíaco aproximado?),",
    "opcoes": [
      "A) 140 ml/min.",
      "B) 10 litros/min.",
      "C) 700 ml/min.",
      "D) 4,9 litros/min (4900 ml/min)."
    ],
    "explicacao_geral": "DC = FC x VS = 70 x 70 = 4900 ml/min.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Erro de cálculo.",
      "B": "[INCORRETA] Valor de exercício físico intenso.",
      "C": "[INCORRETA] Erro de cálculo.",
      "D": "[CORRETA] Valor de **Débito Cardíaco em repouso** típico de um adulto."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3639,
    "materia": "bmf2",
    "aula_id": "bmf2_a5",
    "tema": "bmf2_a5",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A 'Fração de Ejeção' (FE) é um marcador crucial da saúde cardíaca. Como ela é calculada e qual o valor normal aproximado?),",
    "opcoes": [
      "A) Porção do volume diastólico final que é ejetada (Volume Sistólico / VDF); Normal entre 55-70%.",
      "B) Porção de sangue que volta para o átrio; Normal 0%.",
      "C) Pressão sistólica menos a diastólica; Normal 40 mmHg.",
      "D) Número de batimentos por hora; Normal 4200."
    ],
    "explicacao_geral": "Uma FE baixa indica insuficiência cardíaca (coração bombeia pouco do que recebe).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Fração de Ejeção** mede a **eficiência da bomba** ventricular.",
      "B": "[INCORRETA] Indica insuficiência valvar, não fração de ejeção.",
      "C": "[INCORRETA] Pressão de pulso.",
      "D": "[INCORRETA] Inexistente."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3640,
    "materia": "bmf2",
    "aula_id": "bmf2_a5",
    "tema": "bmf2_a5",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Durante o exercício físico intenso, o débito cardíaco aumenta significativamente. Como isso ocorre molecularmente por ação do Sistema Simpático (Adrenalina)?),",
    "opcoes": [
      "A) Diminuindo a força do coração para ele não cansar.",
      "B) Aumento do Inotropismo (força de contração) e do Cronotropismo (frequência cardíaca) via receptores Beta-1 adrenérgicos.",
      "C) Diminuindo a entrada de cálcio na célula.",
      "D) Fazendo o sangue ficar mais ralo."
    ],
    "explicacao_geral": "O sistema simpático otimiza o coração para o estresse.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Seria contraproducente.",
      "B": "[CORRETA] O **Efeito Simpático** potencializa o **débito cardíaco** global.",
      "C": "[INCORRETA] Aumenta a entrada de cálcio via canais L para maior força.",
      "D": "[INCORRETA] Viscosidade plasmática não se altera pelo simpático agudo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf2_a5 adicionadas.`);
