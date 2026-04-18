import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3345,
    "materia": "semiologia1",
    "aula_id": "semio1_a8",
    "tema": "semio1_a8",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "No registro ambulatorial, o método 'SOAP' é o padrão para organizar a evolução do paciente. O que a letra 'O' deste método representa?),",
    "opcoes": [
      "A) Objetivos (Achados do Exame Físico e exames complementares).",
      "B) Opinião do acompanhante.",
      "C) Orientações dadas ao paciente.",
      "D) Ocupação do paciente."
    ],
    "explicacao_geral": "O método SOAP (Subjetivo, Objetivos, Avaliação e Plano) estrutura o raciocínio clínico.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A seção **Objetiva** contém os dados mensuráveis e o exame físico realizado pelo médico.",
      "B": "[INCORRETA] Poderia estar no Subjetivo se fosse relevante para a queixa.",
      "C": "[INCORRETA] Orientações fazem parte do Plano (P).",
      "D": "[INCORRETA] Parte da identificação/anamnese (Subjetivo)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3346,
    "materia": "semiologia1",
    "aula_id": "semio1_a8",
    "tema": "semio1_a8",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Paciente de 65 anos com osteoartrose de joelho em acompanhamento ambulatorial relata que a dor impede a realização de suas atividades domésticas. Além da analgesia, qual a conduta não-farmacológica fundamental para este paciente?),",
    "opcoes": [
      "A) Repouso absoluto na cama por 30 dias.",
      "B) Fortalecimento muscular (Fisioterapia) e perda de peso.",
      "C) Massagem com óleos essenciais apenas.",
      "D) Troca de toda a mobília da casa."
    ],
    "explicacao_geral": "O fortalecimento muscular reduz a carga sobre a cartilagem desgastada.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O repouso prolongado causa atrofia e piora a artrose a longo prazo.",
      "B": "[CORRETA] A **Fisioterapia** é pilar central no tratamento da **Osteoartrose**.",
      "C": "[INCORRETA] Pode dar conforto, mas não melhora a estabilidade articular.",
      "D": "[INCORRETA] Adaptações ambientais ajudam, mas não substituem o tratamento físico."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3347,
    "materia": "semiologia1",
    "aula_id": "semio1_a8",
    "tema": "semio1_a8",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O sigilo médico deve ser mantido rigorosamente durante a prática no ambulatório escola. Em qual situação abaixo a quebra do sigilo é permitida por dever legal?),",
    "opcoes": [
      "A) Contar o diagnóstico para o vizinho do paciente sem permissão.",
      "B) Postar fotos do exame físico nas redes sociais para ganhar seguidores.",
      "C) Notificação de doenças de comunicação compulsória ou suspeita de violência contra vulneráveis.",
      "D) Nunca, sob nenhuma circunstância, nem por ordem judicial."
    ],
    "explicacao_geral": "O sigilo é a regra, mas a proteção da saúde pública e de vulneráveis são exceções legais.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Infração ética grave.",
      "B": "[INCORRETA] Violação grave do código de ética e do direito à imagem.",
      "C": "[CORRETA] A **notificação compulsória** e a **proteção de vulneráveis** são deveres legais superiores ao sigilo individual.",
      "D": "[INCORRETA] Existem exceções previstas no Código de Ética Médica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3348,
    "materia": "semiologia1",
    "aula_id": "semio1_a8",
    "tema": "semio1_a8",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual a relevância de preencher corretamente a Profissão e as atividades de lazer na anamnese ambulatorial do locomotor?),",
    "opcoes": [
      "A) Apenas para preencher espaço no prontuário.",
      "B) Para saber se o paciente pode pagar a consulta.",
      "C) Não tem importância, a anatomia é igual para todos.",
      "D) Permite identificar gestos repetitivos, carga excessiva ou traumas ocupacionais que causam as lesões."
    ],
    "explicacao_geral": "Muitas patologias musculoesqueléticas têm nexo causal direto com a atividade diária.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Cada dado deve ser clínico.",
      "B": "[INCORRETA] A medicina foca na saúde, não na cobrança direta (especialmente no SUS/Escola).",
      "C": "[INCORRETA] A carga suportada varia conforme o uso.",
      "D": "[CORRETA] O **nexo ocupacional** é vital no diagnóstico de doenças do locomotor (DORT/LER)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3349,
    "materia": "semiologia1",
    "aula_id": "semio1_a8",
    "tema": "semio1_a8",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Um paciente novo chega ao ambulatório com dor generalizada 'pelo corpo todo' e muitos exames de imagem normais realizados por outros médicos. Ao invés de pedir mais exames de imagem, qual abordagem o estudante deve priorizar?),",
    "opcoes": [
      "A) Dizer que o paciente não tem nada e mandá-lo embora.",
      "B) Escuta ativa, validação da dor do paciente e realização de um exame físico focado em tender points e pontos gatilho.",
      "C) Pedir uma Ressonância de Corpo Inteiro imediatamente.",
      "D) Receitar antidepressivos e não examinar o paciente."
    ],
    "explicacao_geral": "Habilidades de comunicação e semiologia clínica básica resolvem a maioria dos casos de dor crônica onde a imagem é normal.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A dor é real (subjetiva) e deve ser investigada.",
      "B": "[CORRETA] A **escuta ativa** e o exame físico focado são as ferramentas corretas para síndromes como a **Fibromialgia**.",
      "C": "[INCORRETA] Exame caro, desnecessário e que pode encontrar 'achados incidentais' sem relevância.",
      "D": "[INCORRETA] O exame físico é obrigatório e a prescrição vem após a avaliação completa."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3350,
    "materia": "semiologia1",
    "aula_id": "semio1_a8",
    "tema": "semio1_a8",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A 'Adesão Terapêutica' é o maior desafio no ambulatório. Qual estratégia comprovadamente melhora a adesão do paciente ao tratamento de fisioterapia em casa?),",
    "opcoes": [
      "A) Envolvimento do paciente na tomada de decisão e pactuação de metas realistas.",
      "B) Dar ordens diretas e secas sem explicar o porquê.",
      "C) Entregar um folheto e não falar nada.",
      "D) Ameaçar o paciente dizendo que ele vai ficar inválido."
    ],
    "explicacao_geral": "Decisões compartilhadas geram maior compromisso do paciente com sua própria saúde.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **cuidado centrado no paciente** aumenta a adesão.",
      "B": "[INCORRETA] Piora a relação médico-paciente e a confiança.",
      "C": "[INCORRETA] Informação sem contexto é pouco eficaz.",
      "D": "[INCORRETA] Coerção gera medo e baixa adesão a longo prazo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3351,
    "materia": "semiologia1",
    "aula_id": "semio1_a8",
    "tema": "semio1_a8",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Ao avaliar um pé diabético no ambulatório, o estudante percebe uma úlcera indolor na planta do pé. O que isso representa do ponto de vista semiológico?),",
    "opcoes": [
      "A) Apenas um calo por sapato apertado.",
      "B) Uma fratura óssea.",
      "C) Uma artrose de tornozelo.",
      "D) Neuropatia Diabética com perda da sensibilidade protetora (Mal Perfurante Plantar)."
    ],
    "explicacao_geral": "A perda da sensibilidade impede que o paciente perceba ferimentos menores, que evoluem para úlceras graves.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Poderia ser o início, mas a úlcera indica progressão neuropática.",
      "B": "[INCORRETA] Fraturas seriam dolorosas se a sensibilidade estivesse normal.",
      "C": "[INCORRETA] Patologia articular interna.",
      "D": "[CORRETA] A **neuropatia** permite o surgimento de úlceras de pressão indolores."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3352,
    "materia": "semiologia1",
    "aula_id": "semio1_a8",
    "tema": "semio1_a8",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Qual a periodicidade ideal para o médico reavaliar os exames laboratoriais de monitorização (Ex: Creatinina, TGO/TGP) em um paciente de ambulatório que iniciou o uso crônico de Metotrexato?),",
    "opcoes": [
      "A) Apenas se o paciente passar mal daqui a 5 anos.",
      "B) Periodicamente (mensal no início, depois trimestral) devido ao risco de toxicidade hepática e medular.",
      "C) Todos os dias.",
      "D) Nunca, os exames iniciais são o que valem forever."
    ],
    "explicacao_geral": "Drogas modificadoras do curso da doença exigem vigilância de efeitos adversos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pode ser tarde demais.",
      "B": "[CORRETA] O **monitoramento periódico** é indispensável na segurança do paciente sob medicação reumatológica.",
      "C": "[INCORRETA] Inviável e desnecessário se o paciente estiver estável.",
      "D": "[INCORRETA] Perfil de segurança muda com o tempo e dosagem."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula semio1_a8 adicionadas.`);
