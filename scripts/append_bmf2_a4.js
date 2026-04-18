import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3625,
    "materia": "bmf2",
    "aula_id": "bmf2_a4",
    "tema": "bmf2_a4",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "O coração possui células especializadas em gerar e conduzir o impulso elétrico. Qual o local de origem normal do batimento cardíaco (Marcapasso)?),",
    "opcoes": [
      "A) Nodo Sinoatrial (SA).",
      "B) Nodo Atrioventricular (AV).",
      "C) Fibras de Purkinje.",
      "D) Feixe de His."
    ],
    "explicacao_geral": "O Nodo SA possui a maior frequência de despolarização espontânea.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Nodo SA** dita o ritmo cardíaco fisiológico (Ritmo Sinusal).",
      "B": "[INCORRETA] Funciona como retardo fisiológico e marcapasso secundário.",
      "C": "[INCORRETA] Conduzem o estímulo para o miocárdio ventricular.",
      "D": "[INCORRETA] Conduz o estímulo do átrio para o ventrículo através do esqueleto fibroso."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3626,
    "materia": "bmf2",
    "aula_id": "bmf2_a4",
    "tema": "bmf2_a4",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "No Potencial de Ação cardíaco de resposta rápida (músculo ventricular), a 'Fase 0' é caracterizada por qual evento iônico?),",
    "opcoes": [
      "A) Saída de Potássio (K+).",
      "B) Entrada de Cálcio (Ca++).",
      "C) Entrada rápida de Sódio (Na+) através de canais dependentes de voltagem.",
      "D) Fechamento de todos os canais."
    ],
    "explicacao_geral": "A fase 0 é a despolarização rápida da célula.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Promove a repolarização.",
      "B": "[INCORRETA] Ocorre na fase 2 (platô).",
      "C": "[CORRETA] A **Fase 0** é o pico de **entrada de Sódio**.",
      "D": "[INCORRETA] É um momento de máxima condutância de membrana para o sódio."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3627,
    "materia": "bmf2",
    "aula_id": "bmf2_a4",
    "tema": "bmf2_a4",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "A 'Fase de Platô' (Fase 2) do potencial de ação cardíaco é exclusiva do miocárdio e ausente nos neurônios. Qual a sua importância e qual íon a mantém?),",
    "opcoes": [
      "A) Serve para acelerar o coração; mantida pelo Sódio.",
      "B) Prolongar a duração da contração e do período refratário para evitar o têtano muscular; mantida pela entrada de Cálcio (Ca++).",
      "C) Serve para desativar a bomba de sódio; mantida pelo Magnésio.",
      "D) Não tem importância biológica."
    ],
    "explicacao_geral": "O equilíbrio entre a saída de K+ e a entrada de Ca++ mantém o potencial de membrana estável por milissegundos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O platô retarda a repolarização.",
      "B": "[CORRETA] O **Cálcio** no **Platô** garante que o coração relaxe antes de uma nova contração.",
      "C": "[INCORRETA] A bomba Na+/K+ continua ativa.",
      "D": "[INCORRETA] É vital para a função rítmica de bomba."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3628,
    "materia": "bmf2",
    "aula_id": "bmf2_a4",
    "tema": "bmf2_a4",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O 'Retardo Fisiológico' do impulso elétrico ocorre no Nodo Atrioventricular (AV). Qual a finalidade funcional deste pequeno atraso?),",
    "opcoes": [
      "A) Dar tempo para o rim filtrar o sangue.",
      "B) Impedir que o sangue vá para o cérebro.",
      "C) Matar as bactérias do sangue.",
      "D) Permitir que os átrios terminem de se contrair e esvaziar seu volume nos ventrículos antes da sístole ventricular."
    ],
    "explicacao_geral": "Sem esse retardo, átrios e ventrículos bateriam quase ao mesmo tempo, reduzindo a eficiência do enchimento.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sem relação temporal direta sistêmica.",
      "B": "[INCORRETA] Absurdo hemodinâmico.",
      "C": "[INCORRETA] Sem função imunológica.",
      "D": "[CORRETA] O **Retardo no Nodo AV** garante a **sincronia átrio-ventricular** (enchimento diastólico)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3629,
    "materia": "bmf2",
    "aula_id": "bmf2_a4",
    "tema": "bmf2_a4",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "As células do Nodo SA e AV possuem um potencial de ação diferente (resposta lenta). Qual a característica fundamental da 'Fase 4' nestas células?),",
    "opcoes": [
      "A) Despolarização diastólica lenta e espontânea (potencial de marcapasso) devido à corrente 'Funny' (If) de Na+ e K+.",
      "B) Estabilidade absoluta em -90mV.",
      "C) Entrada rápida de grandes quantidades de Ferro.",
      "D) Elas nunca se despolarizam."
    ],
    "explicacao_geral": "Isso permite que o coração bata sozinho mesmo se todos os nervos forem cortados (automatismo).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Despolarização Espontânea** é a base do **automatismo cardíaco**.",
      "B": "[INCORRETA] Esta é a característica das células musculares comuns (não-marcapassos).",
      "C": "[INCORRETA] Sem relação com a eletrofisiologia de canal do nodo.",
      "D": "[INCORRETA] Se não despolarizassem, não gerariam o comando para o batimento."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3630,
    "materia": "bmf2",
    "aula_id": "bmf2_a4",
    "tema": "bmf2_a4",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "No Eletrocardiograma (ECG), o que a 'Onda P' representa fisicamente?),",
    "opcoes": [
      "A) Despolarização dos ventrículos.",
      "B) Despolarização dos átrios.",
      "C) Repolarização dos ventrículos.",
      "D) O fechamento da valva aorta."
    ],
    "explicacao_geral": "A onda P precede a contração mecânica dos átrios.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Representada pelo complexo QRS.",
      "B": "[CORRETA] A **Onda P** indica que os **átrios** foram estimulados eletricamente.",
      "C": "[INCORRETA] Representada pela onda T.",
      "D": "[INCORRETA] Eventos mecânicos (sons) não geram ondas elétricas diretas no ECG (embora sejam consequentes)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3631,
    "materia": "bmf2",
    "aula_id": "bmf2_a4",
    "tema": "bmf2_a4",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um paciente apresenta uma frequência cardíaca muito baixa (Bradicardia). Qual efeito do Sistema Nervoso Parassimpático (Acetilcolina) explica essa redução?),",
    "opcoes": [
      "A) Abre canais de sódio no nodo SA.",
      "B) Aumenta a força de contração dos ventrículos significativamente.",
      "C) Aumenta a permeabilidade ao Potássio (K+), hiperpolarizando a célula e tornando a inclinação da fase 4 mais lenta.",
      "D) Fecha todos os canais de cálcio do corpo."
    ],
    "explicacao_geral": "O parassimpático 'freia' o coração agindo sobre o Nodo SA e AV.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Isso aceleraria a frequência (efeito simpático).",
      "B": "[INCORRETA] O parassimpático tem pouca inervação ventricular e efeito inotrópico direto discreto.",
      "C": "[CORRETA] O **Parassimpático** reduz a FC via **hiperpolarização** nodal.",
      "D": "[INCORRETA] Ação local nos receptores muscarínicos cardíacos."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3632,
    "materia": "bmf2",
    "aula_id": "bmf2_a4",
    "tema": "bmf2_a4",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "O Complexo QRS no ECG é muito maior que a onda P. Por que?),",
    "opcoes": [
      "A) Porque os ventrículos têm mais bactérias.",
      "B) Porque o sangue nos ventrículos é arterial.",
      "C) Porque a eletricidade dos ventrículos é mais quente.",
      "D) Porque a massa muscular ventricular é muito maior que a atrial, gerando uma atividade elétrica somada de maior magnitude.",
    ],
    "explicacao_geral": "O ECG mede a soma dos potenciais de ação de todas as células sob o eletrodo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Absurdo.",
      "B": "[INCORRETA] A natureza do sangue não altera a voltagem gerada pelo miocárdio.",
      "C": "[INCORRETA] Não há diferença de 'calor' elétrico.",
      "D": "[CORRETA] O **Complexo QRS** reflete a **massa ventricular** dominante."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf2_a4 adicionadas.`);
