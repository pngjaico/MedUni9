import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4033,
    "materia": "semio2",
    "aula_id": "semio2_a1",
    "tema": "semio2_a1",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "No raciocínio clínico, como se chama o processo mental no qual o médico compara o quadro atual do paciente com um 'modelo ideal' ou um caso emblemático guardado na memória?),",
    "opcoes": [
      "A) Dedução matemática.",
      "B) Reconhecimento de padrões (Pattern Recognition).",
      "C) Algoritmo de inteligência artificial.",
      "D) Sorte clínica."
    ],
    "explicacao_geral": "É um processo rápido e intuitivo (Sistema 1), muito utilizado por médicos experientes.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Processo analítico e lento.",
      "B": "[CORRETA] O **Reconhecimento de Padrões** é a base do diagnóstico rápido.",
      "C": "[INCORRETA] Ferramenta de apoio, não o processo mental humano descrito.",
      "D": "[INCORRETA] O diagnóstico é fruto de conhecimento e treinamento."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4034,
    "materia": "semio2",
    "aula_id": "semio2_a1",
    "tema": "semio2_a1",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual a finalidade principal de se elaborar uma 'Lista de Diagnósticos Diferenciais'?),",
    "opcoes": [
      "A) Mostrar que o médico sabe muitos nomes de doenças.",
      "B) Preencher espaço no prontuário.",
      "C) Confundir o paciente.",
      "D) Considerar todas as explicações plausíveis para os sintomas, evitando o fechamento diagnóstico prematuro e erros por viés."
    ],
    "explicacao_geral": "O diagnóstico diferencial é o coração do método clínico-analítico.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Finalidade não exibicionista.",
      "B": "[INCORRETA] Gerenciamento de risco e qualidade.",
      "C": "[INCORRETA] Absurdo.",
      "D": "[CORRETA] O **Diagnóstico Diferencial** previne o **Erro Cognitivo**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4035,
    "materia": "semio2",
    "aula_id": "semio2_a1",
    "tema": "semio2_a1",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A heurística da 'Disponibilidade' refere-se à tendência do médico em estimar a probabilidade de uma doença com base em:),",
    "opcoes": [
      "A) Na facilidade com que casos semelhantes recentes vêm à mente (ex: um caso raro que ele atendeu ontem).",
      "B) Nos dados epidemiológicos do IBGE apenas.",
      "C) No desejo do paciente.",
      "D) No preço do tratamento."
    ],
    "explicacao_geral": "Isso pode levar a superestimar doenças raras que foram visualizadas recentemente.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Disponibilidade** foca na **memória recente ou marcante**.",
      "B": "[INCORRETA] Isso seria raciocínio Bayesiano correto se fosse aplicado.",
      "C": "[INCORRETA] Absurdo.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4036,
    "materia": "semio2",
    "aula_id": "semio2_a1",
    "tema": "semio2_a1",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O 'Viés de Confirmação' ocorre quando o examinador:),",
    "opcoes": [
      "A) Pede desculpas por errar.",
      "B) Solicita muitos exames desnecessários.",
      "C) Busca apenas informações que confirmem sua hipótese inicial e ignora dados que a contradizem.",
      "D) Confirma a consulta via telefone."
    ],
    "explicacao_geral": "É um dos vieses cognitivos mais perigosos na prática médica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Atitude ética.",
      "B": "[INCORRETA] Prática de medicina defensiva ou desperdício.",
      "C": "[CORRETA] O **Viés de Confirmação** 'cega' o médico para o **diagnóstico correto**.",
      "D": "[INCORRETA] Administrativo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4037,
    "materia": "semio2",
    "aula_id": "semio2_a1",
    "tema": "semio2_a1",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Ao utilizar um teste diagnóstico com ALTA SENSIBILIDADE (como um teste de triagem), o principal objetivo clínico é:),",
    "opcoes": [
      "A) Confirmar definitivamente a doença.",
      "B) Excluir a doença em caso de resultado negativo (baixo índice de falsos-negativos).",
      "C) Gastar dinheiro público.",
      "D) Tratar o paciente antes do resultado."
    ],
    "explicacao_geral": "Testes sensíveis são ótimos para triagem: se deu negativo, o paciente está 'seguro' (SnNout).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Objetivo de testes específicos (SpPin).",
      "B": "[CORRETA] **Alta Sensibilidade** serve para **Exclusão** (SnNout).",
      "C": "[INCORRETA] Absurdo.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4038,
    "materia": "semio2",
    "aula_id": "semio2_a1",
    "tema": "semio2_a1",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A 'âncora' no raciocínio clínico refere-se ao erro de:),",
    "opcoes": [
      "A) Mudar de opinião toda hora.",
      "B) Não acreditar no paciente.",
      "C) Culpar a enfermagem.",
      "D) Apegar-se excessivamente a uma impressão ou dado inicial, recusando-se a ajustar o diagnóstico mesmo com novos fatos surgindo."
    ],
    "explicacao_geral": "A ancoragem impede a flexibilidade necessária para o ajuste diagnóstico em casos complexos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Inconstância.",
      "B": "[INCORRETA] Falha de aliança terapêutica.",
      "C": "[INCORRETA] Falha de equipe.",
      "D": "[CORRETA] A **Ancoragem** fixa o médico em uma **hipótese possivelmente errada**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4039,
    "materia": "semio2",
    "aula_id": "semio2_a1",
    "tema": "semio2_a1",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "O 'Valor Preditivo Positivo' (VPP) de um teste diagnóstico muda conforme qual característica da população estudada?),",
    "opcoes": [
      "A) Prevalência da doença (quanto maior a prevalência, maior o VPP).",
      "B) Idade média apenas.",
      "C) Cor dos olhos dos pacientes.",
      "D) O VPP nunca muda, é fixo do teste."
    ],
    "explicacao_geral": "Em populações com baixa prevalência, mesmo testes muito bons geram muitos falsos-positivos.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **VPP** depende diretamente da **Prevalência**.",
      "B": "[INCORRETA] Pode influenciar a prevalência, mas não é a métrica direta.",
      "C": "[INCORRETA] Irrelevante.",
      "D": "[INCORRETA] Sensibilidade e Especificidade são intrínsecas ao teste; VPP e VPN dependem da população."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4040,
    "materia": "semio2",
    "aula_id": "semio2_a1",
    "tema": "semio2_a1",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um médico atende um paciente com dor torácica. Ele pensa em Infarto, mas também considera Dissecção de Aorta e Tromboembolismo Pulmonar. Este último passo chama-se:),",
    "opcoes": [
      "A) Chute clínico.",
      "B) Excesso de zelo.",
      "C) Levantamento de Diagnósticos Diferenciais.",
      "D) Perda de tempo."
    ],
    "explicacao_geral": "Listar diferenciais é obrigatório para descartar causas graves (Red Flags).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] É um processo baseado em evidências e fisiopatologia.",
      "B": "[INCORRETA] É o padrão de cuidado (Standard of care).",
      "C": "[CORRETA] Considerar outras hipóteses é o cerne do **Raciocínio Diferencial**.",
      "D": "[INCORRETA] Salva vidas."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula semio2_a1 adicionadas.`);
