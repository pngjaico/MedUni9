import fs from 'fs';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  // FF4 - Aula 1: Insuficiência Cardíaca (ID 4913)
  {
    "id": 4913,
    "materia": "ff4",
    "aula_id": "ff4_a1",
    "tema": "ff4_a1",
    "modulo": 4,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Na fisiopatologia da Insuficiência Cardíaca com Fração de Ejeção Reduzida (ICFEr), qual o papel do sistema Renina-Angiotensina-Aldosterona (SRAA)?),",
    "opcoes": [
      "A) Melhora a função cardíaca a longo prazo através do relaxamento ventricular.",
      "B) Promove vasoconstrição e retenção de sódio, aumentando a pós-carga e o estresse sobre o miocárdio, o que leva ao remodelamento cardíaco patológico.",
      "C) Auxilia na redução da pressão arterial sistêmica.",
      "D) Inibe o crescimento de fibroblastos no coração."
    ],
    "explicacao_geral": "O SRAA é um mecanismo compensatório que, cronicamente, agrava a falência cardíaca.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA]",
      "B": "[CORRETA] O **SRAA** agrava o **Remodelamento Cardíaco**.",
      "C": "[INCORRETA]",
      "D": "[INCORRETA]"
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  // FF4 - Aula 9: IRA (ID 4977)
  {
    "id": 4977,
    "materia": "ff4",
    "aula_id": "ff4_a9",
    "tema": "ff4_a9",
    "modulo": 4,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual a principal causa de Insuficiência Renal Aguda (IRA) do tipo 'Pré-renal'?),",
    "opcoes": [
      "A) Obstrução urinária por cálculos.",
      "B) Glomerulonefrite aguda.",
      "C) Hipoperfusão renal (ex: desidratação severa ou hemorragia).",
      "D) Uso de antibióticos nefrotóxicos."
    ],
    "explicacao_geral": "Na IRA pré-renal, o parênquima ainda está íntegro, mas falta fluxo sanguíneo para a filtração.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Causa pós-renal.",
      "B": "[INCORRETA] Causa intrínseca/renal.",
      "C": "[CORRETA] A **IRA Pré-renal** é causada por **Hipovolemia/Choque**.",
      "D": "[INCORRETA] Causa intrínseca (Necrose Tubular Aguda)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  // SEMIO4 - Aula 1: Sopros Cardíacos (ID 5025)
  {
    "id": 5025,
    "materia": "semio4",
    "aula_id": "semio4_a1",
    "tema": "semio4_a1",
    "modulo": 4,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "Um sopro sistólico, em foco aórtico, que irradia para as carótidas e apresenta um padrão 'em diamante' (crescente-decrescente) é típico de qual valvopatia?),",
    "opcoes": [
      "A) Insuficiência Mitral.",
      "B) Prolapso da Valva Mitral.",
      "C) Insuficiência Aórtica.",
      "D) Estenose Aórtica."
    ],
    "explicacao_geral": "A estenose aórtica é uma das valvopatias mais comuns no idoso.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sopro holossistólico em foco mitral.",
      "B": "[INCORRETA] Clique mesosistólico.",
      "C": "[INCORRETA] Sopro diastólico (aspirativo).",
      "D": "[CORRETA] O **Sopro em Diamante** é marca da **Estenose Aórtica**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  // SEMIO4 - Aula 7: Semiologia Neurológica (ID 5080)
  {
    "id": 5080,
    "materia": "semio4",
    "aula_id": "semio4_a7",
    "tema": "semio4_a7",
    "modulo": 4,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Ao realizar o teste de Romberg, o paciente permanece estável de olhos abertos, mas oscila e cai imediatamente ao fechar os olhos. O que isso indica?),",
    "opcoes": [
      "A) Romberg positivo, indicando lesão de sensibilidade profunda (propriocepção ou cordão posterior).",
      "B) Lesão cerebelar clássica.",
      "C) Simulação (fraude) do paciente.",
      "D) Labirintite aguda."
    ],
    "explicacao_geral": "Se o paciente oscila mesmo com olhos abertos, a origem é provavelmente cerebelar.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Romberg Positivo** indica perda de **Propriocepção**.",
      "B": "[INCORRETA] Ataxia cerebelar ocorre mesmo com olhos abertos.",
      "C": "[INCORRETA]",
      "D": "[INCORRETA]"
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

// Carregando o banco e substituindo os IDs correspondentes
const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));

novasQuestoes.forEach(nova => {
  const index = data.questoes.findIndex(q => q.id === nova.id);
  if (index !== -1) {
    data.questoes[index] = nova;
  } else {
    data.questoes.push(nova);
  }
});

fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: Amostragem final de FF4 e SEMIO4 aplicada.`);
