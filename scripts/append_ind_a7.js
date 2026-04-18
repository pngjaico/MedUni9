import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3801,
    "materia": "ind",
    "aula_id": "ind_a7",
    "tema": "ind_a7",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A violência doméstica não se limita a agressões físicas. Qual tipo de violência caracteriza-se por insultos, humilhações e controle excessivo sobre a liberdade da outra pessoa?),",
    "opcoes": [
      "A) Violência Física.",
      "B) Violência Psicológica.",
      "C) Violência Patrimonial.",
      "D) Violência Sexual."
    ],
    "explicacao_geral": "A violência psicológica é muitas vezes silenciosa e precede a agressão física.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Uso de força física que causa lesão imediata ou dor.",
      "B": "[CORRETA] A **Violência Psicológica** causa danos à **autoestima e autonomia**.",
      "C": "[INCORRETA] Retenção de bens, dinheiro ou documentos.",
      "D": "[INCORRETA] Atos sexuais sem consentimento."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3802,
    "materia": "ind",
    "aula_id": "ind_a7",
    "tema": "ind_a7",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Quando há SUSPEITA de violência contra crianças ou adolescentes atendidos no serviço de saúde, qual a conduta obrigatória do médico?),",
    "opcoes": [
      "A) Investigar por conta própria até ter provas totais.",
      "B) Não fazer nada se os pais negarem.",
      "C) Dizer para a criança bater de volta.",
      "D) Notificação Compulsória imediata às autoridades competentes (Conselho Tutelar/Delegacia), independente de confirmação."
    ],
    "explicacao_geral": "O dever de proteção prevalece sobre o sigilo em casos de vulneráveis sob suspeita de maus-tratos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O médico não é investigador policial; o atraso pode ser fatal.",
      "B": "[INCORRETA] Negligência grave e omissão de socorro.",
      "C": "[INCORRETA] Absurdo.",
      "D": "[CORRETA] A **Notificação de Violência** contra menores é um **dever legal e ético**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3803,
    "materia": "ind",
    "aula_id": "ind_a7",
    "tema": "ind_a7",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O 'Ciclo da Violência' de Lenore Walker ajuda a entender por que muitas vítimas não conseguem sair da relação. Quais as três fases desse ciclo?),",
    "opcoes": [
      "A) Acúmulo de tensão, Explosão (agressão) e Lua de Mel (reconciliação/promessas).",
      "B) Amor, Odio e Indiferença.",
      "C) Manhã, Tarde e Noite.",
      "D) Infância, Adulto e Velhice."
    ],
    "explicacao_geral": "A fase de lua de mel cria a esperança de mudança que mantém a vítima no ciclo.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Ciclo da Violência** explica a **dependência emocional** na relação abusiva.",
      "B": "[INCORRETA] Sentimentos, mas não fases do ciclo de agressão sistemática.",
      "C": "[INCORRETA] Temporalidade irrelevante para o conceito psicológico.",
      "D": "[INCORRETA] Ciclo biológico, não comportamental."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3804,
    "materia": "ind",
    "aula_id": "ind_a7",
    "tema": "ind_a7",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Uma mulher adulta chega à UBS com hematomas em diferentes estágios de cura e comportamento esquivo. O médico suspeita de violência doméstica por parte do parceiro. Qual a conduta correta sobre a NOTIFICAÇÃO?),",
    "opcoes": [
      "A) Notificar a polícia imediatamente sem o consentimento dela.",
      "B) Não notificar, pois adultos decidem o que querem.",
      "C) Realizar a Notificação Compulsória (para fins epidemiológicos) no prontuário e sistema de saúde, acolher a paciente e oferecer ajuda, respeitando seu tempo para denúncia policial (salvo em risco iminente de morte).",
      "D) Tirar fotos e postar nas redes sociais para denunciar."
    ],
    "explicacao_geral": "Diferente de crianças e idosos, adultos capazes têm autonomia sobre a denúncia criminal, mas a notificação em saúde é obrigatória para vigilância epidemiológica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pode aumentar o risco da paciente se ela não estiver pronta para sair de casa.",
      "B": "[INCORRETA] A notificação no SINAN é obrigatória em caso de suspeita para fins de políticas públicas.",
      "C": "[CORRETA] A **Notificação de Violência em Adultos** requer **ética e acolhimento**.",
      "D": "[INCORRETA] Quebra de sigilo e crime ético."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3805,
    "materia": "ind",
    "aula_id": "ind_a7",
    "tema": "ind_a7",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "O que caracteriza a 'Violência Institucional' no contexto da saúde?),",
    "opcoes": [
      "A) Bater no prédio do hospital.",
      "B) Quando o sistema de saúde ou profissionais agem com descaso, preconceito ou imposição de condutas desnecessárias (exemplo: violência obstétrica), desrespeitando a dignidade humana.",
      "C) Quando o hospital cobra a consulta.",
      "D) A falta de luz no hospital."
    ],
    "explicacao_geral": "Pode ocorrer por omissão de socorro, filas desumanas ou julgamentos morais de profissionais.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Vandalismo.",
      "B": "[CORRETA] A **Violência Institucional** é uma falha na **Ética e Humanização**.",
      "C": "[INCORRETA] Prática administrativa em rede privada, se abusiva pode ser má gestão, mas a definição de 'violência institucional' é mais ampla e foca no desrespeito ao direito.",
      "D": "[INCORRETA] Falha de infraestrutura (negligência estatal se habitual, mas não a definição do conceito)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3806,
    "materia": "ind",
    "aula_id": "ind_a7",
    "tema": "ind_a7",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um idoso chega com sinais de desidratação grave, falta de higiene e feridas de pressão não tradadas, acompanhado pelo filho que recebe sua pensão. Qual o tipo de violência predominante provável?),",
    "opcoes": [
      "A) Violência Física apenas.",
      "B) Violência Sexual.",
      "C) Não há violência.",
      "D) Negligência (omissão de cuidados básicos) e possível Violência Econômica (exploração de proventos)."
    ],
    "explicacao_geral": "A negligência é a forma mais comum de violência contra o idoso por parte da família.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pode haver, mas o quadro sugere descaso crônico (negligência).",
      "B": "[INCORRETA] Sem sinais clínicos no enunciado.",
      "C": "[INCORRETA] O descaso com idoso dependente é crime.",
      "D": "[CORRETA] A **Negligência contra o Idoso** exige **notificação e proteção**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3807,
    "materia": "ind",
    "aula_id": "ind_a7",
    "tema": "ind_a7",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "O sigilo médico é um dever, mas possui exceções legais. Qual lei/norma obriga o médico a notificar suspeitas de violência contra mulheres atendidas?),",
    "opcoes": [
      "A) Lei 10.778/2003 (e atualizações como a Lei 13.931/2019 que exige notificação à polícia em 24h se houver violência física).",
      "B) Nenhuma lei obriga.",
      "C) O Código de Defesa do Consumidor.",
      "D) Lei de Murphy."
    ],
    "explicacao_geral": "A legislação visa criar redes de proteção rápidas para a mulher em risco.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Legislação Protetiva** sobrepõe-se ao **sigilo absoluto** em casos de risco vital/violência.",
      "B": "[INCORRETA] Existem diversas leis federais.",
      "C": "[INCORRETA] Aplica-se a relações comerciais.",
      "D": "[INCORRETA] Brincadeira popular."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3808,
    "materia": "ind",
    "aula_id": "ind_a7",
    "tema": "ind_a7",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Após sofrer violência sexual, a paciente tem direito ao atendimento de emergência no SUS sem necessidade de boletim de ocorrência prévio. O que deve ser garantido?),",
    "opcoes": [
      "A) Apenas curativo e casa.",
      "B) Exigir que ela vá primeiro à delegacia.",
      "C) Profilaxias contra Infecções Sexualmente Transmissíveis (ISTs), anticoncepção de emergência e suporte psicológico imediato.",
      "D) Nada, pois não há prova física imediata."
    ],
    "explicacao_geral": "O tempo para profilaxia contra HIV (PEP) é de até 72 horas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Insuficiente contra riscos gestacionais e de infecção.",
      "B": "[INCORRETA] Ilegal; o atendimento é incondicional no SUS.",
      "C": "[CORRETA] O **Protocolo de Violência Sexual** prioriza a **prevenção de agravos** (medicamentos e acolhimento).",
      "D": "[INCORRETA] A palavra da vítima tem presunção de veracidade para fins assistenciais."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula ind_a7 adicionadas.`);
