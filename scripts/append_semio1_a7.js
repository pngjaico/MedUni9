import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3337,
    "materia": "semiologia1",
    "aula_id": "semio1_a7",
    "tema": "semio1_a7",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Em uma avaliação de habilidades clínicas (OSCE), qual a primeira atitude que o estudante deve tomar ao entrar na estação com o paciente (Real ou Simulado)?),",
    "opcoes": [
      "A) Iniciar a palpação imediata da articulação dolorosa.",
      "B) Lavar as mãos (ou higienizar com álcool), apresentar-se e solicitar consentimento.",
      "C) Pedir para o paciente tirar toda a roupa sem falar nada.",
      "D) Escrever o diagnóstico no prontuário antes de falar com o paciente."
    ],
    "explicacao_geral": "A biossegurança e a ética na relação médico-paciente são pontuadas em todas as avaliações práticas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pular etapas de comunicação e segurança é erro grave.",
      "B": "[CORRETA] A **higienização** e o **consentimento** são as etapas iniciais obrigatórias.",
      "C": "[INCORRETA] Viola o pudor e a ética de comunicação.",
      "D": "[INCORRETA] O diagnóstico decorre da anamnese e exame, não o contrário."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3338,
    "materia": "semiologia1",
    "aula_id": "semio1_a7",
    "tema": "semio1_a7",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Durante uma prática simulada de exame físico do ombro, o 'paciente' (ator) relata dor intensa à manobra de Neer. Qual a orientação correta para o estudante que está realizando o teste?),",
    "opcoes": [
      "A) Ignorar a dor e forçar o movimento para ver até onde vai.",
      "B) Parar o exame e dizer que não pode prosseguir.",
      "C) Aplicar anestesia local no manequim.",
      "D) Realizar o movimento de forma técnica e suave, parando ao atingir o limiar de dor e validando o sintoma com o paciente."
    ],
    "explicacao_geral": "O exame deve ser fidedigno mas respeitar o limite de dor do paciente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pode causar lesão real ou estresse desnecessário.",
      "B": "[INCORRETA] O exame deve ser completado dentro do possível.",
      "C": "[INCORRETA] Não faz parte da prática semiológica comum na simulação.",
      "D": "[CORRETA] A **empatia** e o **zelo técnico** são avaliados na simulação prática."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3339,
    "materia": "semiologia1",
    "aula_id": "semio1_a7",
    "tema": "semio1_a7",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A utilização de 'checklist' em práticas simuladas tem como objetivo principal:),",
    "opcoes": [
      "A) Garantir que todas as etapas do exame físico sistemático sejam cumpridas sem omissões.",
      "B) Avaliar apenas a velocidade com que o aluno termina a estação.",
      "C) Servir como prova de que o aluno é um bom médico.",
      "D) Substituir o raciocínio clínico pela memorização de itens."
    ],
    "explicacao_geral": "O checklist padroniza a avaliação e garante a segurança do paciente pela completitude do exame.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **checklist** evita a **omissão de etapas críticas** (Ex: lavar as mãos, comparar os dois lados).",
      "B": "[INCORRETA] A qualidade e técnica são mais importantes que a velocidade.",
      "C": "[INCORRETA] Avalia competência técnica pontual, não a totalidade da competência médica.",
      "D": "[INCORRETA] O checklist organiza o raciocínio, não o substitui."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3340,
    "materia": "semiologia1",
    "aula_id": "semio1_a7",
    "tema": "semio1_a7",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Em uma estação de simulação de trauma (Ex: entorse de tornozelo), o aluno percebe que o paciente está com muita dor. Qual a conduta adequada antes de realizar as manobras provocativas instáveis?),",
    "opcoes": [
      "A) Gritar por ajuda.",
      "B) Dar um tapa no paciente para ver se ele está acordado.",
      "C) Explicar a importância da manobra, realizar a inspeção e palpação suave primeiro, e ser o mais objetivo possível no teste.",
      "D) Prescrever morfina imediatamente antes de encostar no paciente."
    ],
    "explicacao_geral": "A progressão do 'menos doloroso' para o 'mais doloroso' é a regra de ouro.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Demonstra falta de controle emocional.",
      "B": "[INCORRETA] Atitude antiética e violenta.",
      "C": "[CORRETA] A **progressão técnica** respeita o sofrimento do paciente enquanto colhe o dado semiológico.",
      "D": "[INCORRETA] A prescrição ocorre após a avaliação em muitos cenários de triagem ou simulação diagnóstica."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3341,
    "materia": "semiologia1",
    "aula_id": "semio1_a7",
    "tema": "semio1_a7",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "O 'Feedback' após uma prática simulada é considerado o momento mais importante do aprendizado. Qual a característica de um bom feedback?),",
    "opcoes": [
      "A) Apontar apenas os erros de forma agressiva para que o aluno não esqueça.",
      "B) Ser construtivo, baseado em evidências observadas e focado em comportamentos que podem ser melhorados.",
      "C) Dizer apenas que 'foi tudo bem' para não desmotivar o grupo.",
      "D) Criticar a personalidade do estudante."
    ],
    "explicacao_geral": "O feedback orienta o estudante sobre sua performance real versus o padrão esperado.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O feedback punitivo impede o aprendizado efetivo no ambiente seguro da simulação.",
      "B": "[CORRETA] O **feedback estruturado** foca no **aprimoramento de competências**.",
      "C": "[INCORRETA] Feedback vazio não gera crescimento técnico.",
      "D": "[INCORRETA] O feedback deve ser sobre a tarefa/ação, não sobre a pessoa."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3342,
    "materia": "semiologia1",
    "aula_id": "semio1_a7",
    "tema": "semio1_a7",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Ao realizar o exame físico da coluna em um manequim simulado, o instrutor pede para o aluno avaliar a 'Gibosidade'. Qual manobra deve ser simulada?),",
    "opcoes": [
      "A) Teste de Lasègue.",
      "B) Teste de Romberg.",
      "C) Percussão das apófises espinhosas.",
      "D) Teste de Adams (inclinação do tronco para frente)."
    ],
    "explicacao_geral": "A gibosidade é a assimetria das costelas na escoliose estrutural.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Avalia compressão radicular lombar.",
      "B": "[INCORRETA] Avalia equilíbrio e propriocepção.",
      "C": "[INCORRETA] Avalia dor óssea localizada (Ex: fratura/infecção).",
      "D": "[CORRETA] O **Teste de Adams** evidencia a rotação vertebral através da **gibosidade**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3343,
    "materia": "semiologia1",
    "aula_id": "semio1_a7",
    "tema": "semio1_a7",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Na simulação de um caso de 'Lombalgia com Sinais de Alerta', qual dado da anamnese deve ser valorizado para suspeitar de Síndrome da Cauda Equina?),",
    "opcoes": [
      "A) Incontinência fecal ou urinária e anestesia em sela.",
      "B) Dor que piora ao comer gordura.",
      "C) Dor que melhora com calor local.",
      "D) Tosse produtiva com catarro verde."
    ],
    "explicacao_geral": "A cauda equina é uma síndrome de compressão de múltiplas raízes que exige cirurgia urgente.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] **Anestesia em sela** e **perda de controle de esfíncteres** são sinais clássicos de alerta.",
      "B": "[INCORRETA] Sugere cólica biliar.",
      "C": "[INCORRETA] Característica de dor muscular comum.",
      "D": "[INCORRETA] Sugere pneumonia."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3344,
    "materia": "semiologia1",
    "aula_id": "semio1_a7",
    "tema": "semio1_a7",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual a principal vantagem do uso de 'Pacientes Padronizados' (atores treinados) em vez de manequins no aprendizado de Semiologia?),",
    "opcoes": [
      "A) Custam mais barato.",
      "B) Não precisam de higienização das mãos.",
      "C) Permitem o treino de habilidades de comunicação, empatia e resposta a sintomas subjetivos como a dor.",
      "D) São idênticos a todas as doenças do mundo."
    ],
    "explicacao_geral": "A interação humana é o nexo entre a técnica e o cuidado real.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pelo contrário, exigem contratação e treinamento contínuo.",
      "B": "[INCORRETA] A biossegurança deve ser treinada sempre com seres humanos.",
      "C": "[CORRETA] A **comunicação** e **relação médico-paciente** são o grande diferencial do uso de atores.",
      "D": "[INCORRETA] Cada ator representa um cenário específico desenhado."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula semio1_a7 adicionadas.`);
