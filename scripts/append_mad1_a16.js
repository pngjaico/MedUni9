import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3961,
    "materia": "mad1",
    "aula_id": "mad1_a16",
    "tema": "mad1_a16",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O vírus HIV ataca células específicas do sistema imunológico. Qual é o principal receptor celular utilizado pelo vírus para entrar na célula?),",
    "opcoes": [
      "A) Receptor de Insulina.",
      "B) Receptor CD4 (Linfócitos T auxiliares).",
      "C) Receptor ACE2.",
      "D) Receptor de Acetilcolina."
    ],
    "explicacao_geral": "A destruição progressiva dos linfócitos T CD4+ leva à imunodeficiência profunda.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Diabetes.",
      "B": "[CORRETA] O **HIV** liga-se ao **Receptor CD4**.",
      "C": "[INCORRETA] SARS-CoV-2.",
      "D": "[INCORRETA] Junção neuromuscular."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3962,
    "materia": "mad1",
    "aula_id": "mad1_a16",
    "tema": "mad1_a16",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Em qual fase da infecção por HIV o indivíduo é diagnosticado com 'AIDS'?),",
    "opcoes": [
      "A) No dia em que é infectado.",
      "B) Apenas se tiver febre.",
      "C) Se tiver menos de 1000 células CD4.",
      "D) Quando a contagem de células CD4 cai abaixo de 200 células/mm³ ou na presença de uma doença definidora de AIDS (ex: Sarcoma de Kaposi, Pneumocistose)."
    ],
    "explicacao_geral": "AIDS é a fase avançada da infecção crônica pelo HIV.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Isso é infecção aguda.",
      "B": "[INCORRETA] Inespecífico.",
      "C": "[INCORRETA] Limite laboratorial definido é 200.",
      "D": "[CORRETA] A **AIDS** é definida por **imunossupressão grave ou doença oportunista**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3963,
    "materia": "mad1",
    "aula_id": "mad1_a16",
    "tema": "mad1_a16",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Sobre os Herpesvírus, qual a característica biológica comum a todos os membros dessa família?),",
    "opcoes": [
      "A) Capacidade de estabelecer infecções latentes (permanecer no corpo em estado 'dormente' e reativar periodicamente).",
      "B) São todos transmitidos por mosquitos.",
      "C) Morrem em 1 minuto no ar.",
      "D) Causam todos o mesmo tipo de mancha roxa."
    ],
    "explicacao_geral": "O local de latência varia: neurônios (HSV-1/2), linfócitos B (EBV), etc.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Latência Viral** é a marca registrada dos **Herpesvírus**.",
      "B": "[INCORRETA] Transmissão por contato direto, saliva ou secreções.",
      "C": "[INCORRETA] São relativamente frágeis no ambiente, mas a latência garante a persistência no hospedeiro.",
      "D": "[INCORRETA] Manifestações clínicas muito diversas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3964,
    "materia": "mad1",
    "aula_id": "mad1_a16",
    "tema": "mad1_a16",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual herpesvírus é o agente causal da 'Mononucleose Infecciosa' (doença do beijo), caracterizada por febre, faringite e linfadenopatia generalizada?),",
    "opcoes": [
      "A) HSV-1.",
      "B) Citomegalovírus (CMV).",
      "C) Vírus Epstein-Barr (EBV).",
      "D) HHV-8."
    ],
    "explicacao_geral": "O EBV infecta linfócitos B e estimula a proliferação de linfócitos T citotóxicos atípicos (linfócitos atípicos no hemograma).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Herpes labial.",
      "B": "[INCORRETA] Causa síndrome mononucleose-like, mas sem a faringite exsudativa clássica intensa e heterofilia negativa.",
      "C": "[CORRETA] O **EBV** causa a **Mononucleose Infecciosa** clássica.",
      "D": "[INCORRETA] Sarcoma de Kaposi."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3965,
    "materia": "mad1",
    "aula_id": "mad1_a16",
    "tema": "mad1_a16",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A enzima Protease tem qual função crucial no ciclo de vida do HIV?),",
    "opcoes": [
      "A) Copia o RNA em DNA.",
      "B) Cliva as cadeias polipeptídicas precursoras longas em proteínas funcionais menores, permitindo a maturação do novo vírion.",
      "C) Insere o DNA viral no DNA da célula.",
      "D) Abre os poros da membrana celular."
    ],
    "explicacao_geral": "Inibidores de protease impedem que o vírus se torne infectante (maturação).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Transcriptase Reversa.",
      "B": "[CORRETA] A **Protease** é essencial para a **Maturação Viral**.",
      "C": "[INCORRETA] Integrase.",
      "D": "[INCORRETA] Função mecânica/biofísica geral."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3966,
    "materia": "mad1",
    "aula_id": "mad1_a16",
    "tema": "mad1_a16",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente com AIDS apresenta perda de visão progressiva. O exame de fundo de olho mostra retinite 'em queijo com ketchup' (hemorrágica e exsudativa). Qual o agente?),",
    "opcoes": [
      "A) Toxoplasma gondii.",
      "B) Cryptococcus neoformans.",
      "C) Herpes Simples.",
      "D) Citomegalovírus (CMV)."
    ],
    "explicacao_geral": "A retinite por CMV é uma complicação grave em pacientes com CD4 < 50.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Causa coriorretinite, mas o padrão 'queijo com ketchup' é clássico do CMV.",
      "B": "[INCORRETA] Mais comum causar meningite.",
      "C": "[INCORRETA] Pode causar ceratite ou necrose retiniana aguda, menos comum de forma oportunista sistêmica ocular lenta.",
      "D": "[CORRETA] A **Retinite por CMV** é uma emergência oftalmológica em **pacientes HIV+**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3967,
    "materia": "mad1",
    "aula_id": "mad1_a16",
    "tema": "mad1_a16",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Qual câncer vascular é causado pelo Herpesvírus Humano tipo 8 (HHV-8) e é considerado uma doença definidora de AIDS?),",
    "opcoes": [
      "A) Sarcoma de Kaposi.",
      "B) Linfoma de Hodgkin.",
      "C) Glioblastoma.",
      "D) Melanoma."
    ],
    "explicacao_geral": "Manifesta-se como manchas ou nódulos violáceos (roxos/avermelhados) na pele e mucosas.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Sarcoma de Kaposi** é causado pelo **HHV-8**.",
      "B": "[INCORRETA] Associado ao EBV, mas não é o sarcoma vascular de HHV-8.",
      "C": "[INCORRETA] Tumor cerebral sem etiologia viral definida.",
      "D": "[INCORRETA] Câncer de pele por radiação UV (melanócitos)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3968,
    "materia": "mad1",
    "aula_id": "mad1_a16",
    "tema": "mad1_a16",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual dos herpesvírus é o principal responsável pelo 'Herpes Labial' recorrente?),",
    "opcoes": [
      "A) CMV.",
      "B) VZV.",
      "C) HSV-1.",
      "D) HSV-2."
    ],
    "explicacao_geral": "HSV-1 ('acima do abdome') e HSV-2 ('abaixo do abdome'), embora possam cruzar as localizações.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Citomegalia.",
      "B": "[INCORRETA] Catapora/Zóster.",
      "C": "[CORRETA] O **HSV-1** é o principal agente do **Herpes Bucal**.",
      "D": "[INCORRETA] Principal agente do Herpes Genital."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad1_a16 adicionadas.`);
