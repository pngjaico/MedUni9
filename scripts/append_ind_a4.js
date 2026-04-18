import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3777,
    "materia": "ind",
    "aula_id": "ind_a4",
    "tema": "ind_a4",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A 'PNPIC' é a política do SUS que regulamenta as Práticas Integrativas e Complementares. O que esse termo (PICS) representa na assistência à saúde?),",
    "opcoes": [
      "A) Tratamentos experimentais sem autorização.",
      "B) Abordagens terapêuticas baseadas em conhecimentos tradicionais e visões holísticas do ser humano, voltadas para a prevenção de doenças e promoção da saúde.",
      "C) Substitutos obrigatórios para a cirurgia e quimioterapia.",
      "D) Práticas exclusivas para hospitais particulares de luxo."
    ],
    "explicacao_geral": "As PICS buscam estimular mecanismos naturais de prevenção e recuperação.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] São práticas regulamentadas e integradas ao sistema público.",
      "B": "[CORRETA] As **PICS** focam na **integralidade do cuidado** no SUS.",
      "C": "[INCORRETA] São complementares, não necessariamente substitutivas em casos de doenças graves agudas.",
      "D": "[INCORRETA] São ofertadas gratuitamente em muitas Unidades Básicas de Saúde."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3778,
    "materia": "ind",
    "aula_id": "ind_a4",
    "tema": "ind_a4",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual dessas práticas integrativas utiliza a inserção de agulhas em pontos específicos do corpo para promover o equilíbrio energético e alívio da dor?),",
    "opcoes": [
      "A) Reiki.",
      "B) Homeopatia.",
      "C) Fitoterapia.",
      "D) Acupuntura."
    ],
    "explicacao_geral": "Originária da Medicina Tradicional Chinesa, a acupuntura tem ampla aceitação e evidência para dor crônica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Uso de imposição de mãos sem agulhas.",
      "B": "[INCORRETA] Uso de substâncias altamente diluídas.",
      "C": "[INCORRETA] Uso de plantas medicinais.",
      "D": "[CORRETA] A **Acupuntura** é uma das PICS mais difundidas na **Rede SUS**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3779,
    "materia": "ind",
    "aula_id": "ind_a4",
    "tema": "ind_a4",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A 'Homeopatia' baseia-se em um princípio fundamental de tratamento. Qual é ele?),",
    "opcoes": [
      "A) Lei dos Semelhantes ('Similia Similibus Curentur') - tratar o doente com substâncias que causam sintomas parecidos com os da doença em pessoas saudáveis.",
      "B) Lei dos Contrários - usar veneno para matar a bactéria.",
      "C) Uso exclusivo de ervas rezadas.",
      "D) Tratamento por meio de cirurgias espirituais."
    ],
    "explicacao_geral": "Criada por Samuel Hahnemann, foca na força vital e dinamização das substâncias.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Princípio da Similitude** é a base da **Homeopatia**.",
      "B": "[INCORRETA] Base da alopatia tradicional/clássica farmacológica.",
      "C": "[INCORRETA] Homeopatia é um sistema farmacêutico e médico específico.",
      "D": "[INCORRETA] Não faz parte das diretrizes técnicas da PNPIC."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3780,
    "materia": "ind",
    "aula_id": "ind_a4",
    "tema": "ind_a4",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Dentre os benefícios das PICS no atendimento primário, destaca-se:),",
    "opcoes": [
      "A) Aumento do uso de exames de ressonância magnética.",
      "B) Redução do tempo de consulta para 1 minuto.",
      "C) Fortalecimento do vínculo médico-paciente e redução da medicalização excessiva de queixas psicossociais.",
      "D) O paciente não precisa mais ir ao médico."
    ],
    "explicacao_geral": "As PICS oferecem alternativas de cuidado que valorizam a subjetividade e autocuidado.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] PICS tendem a reduzir a dependência de tecnologia dura em queixas leves.",
      "B": "[INCORRETA] Geralmente exigem uma escuta mais qualificada e longa.",
      "C": "[CORRETA] As **PICS** auxiliam na **Desmedicalização** da vida.",
      "D": "[INCORRETA] São integradas ao sistema de saúde, não substitutivas da presença do profissional."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3781,
    "materia": "ind",
    "aula_id": "ind_a4",
    "tema": "ind_a4",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Qual a diferença conceitual entre 'Fitoterapia' e o uso popular de chás caseiros?),",
    "opcoes": [
      "A) Nenhuma, são o mesmo termo.",
      "B) A fitoterapia utiliza produtos processados com padronização de princípios ativos, posologia definida e evidências científicas de eficácia e segurança.",
      "C) O chá caseiro é sempre mais seguro porque é natural.",
      "D) A fitoterapia não usa plantas."
    ],
    "explicacao_geral": "Produtos fitoterápicos são registrados como medicamentos em muitos casos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Diferença em rigor técnico e farmacológico.",
      "B": "[CORRETA] A **Fitoterapia** é a **farmacologia das plantas** medicinais.",
      "C": "[INCORRETA] Plantas podem ter toxicidade grave se usadas erroneamente ou em doses erradas.",
      "D": "[INCORRETA] É baseada exclusivamente nelas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3782,
    "materia": "ind",
    "aula_id": "ind_a4",
    "tema": "ind_a4",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente com hipertensão leve e ansiedade é encaminhado para grupos de 'Yoga' e 'Meditação' na Unidade Básica de Saúde. Qual o objetivo dessa integração?),",
    "opcoes": [
      "A) Fazer o paciente gastar tempo.",
      "B) Substituir o remédio da pressão imediatamente.",
      "C) Provar que a medicina moderna não funciona.",
      "D) Atuar de forma complementar no controle do estresse, fator que sabidamente agrava a hipertensão, promovendo melhora global da saúde e bem-estar."
    ],
    "explicacao_geral": "Práticas mente-corpo têm impacto comprovado na fisiologia autonômica (redução de cortisol e tônus simpático).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Visão desrespeitosa da atividade terapêutica.",
      "B": "[INCORRETA] Retirada de medicação exige monitoramento e não é automática ao iniciar PICS.",
      "C": "[INCORRETA] Elas devem andar juntas (Bio-médica + Integrativa).",
      "D": "[CORRETA] A **Integração de Práticas** foca na **Saúde Holística**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3783,
    "materia": "ind",
    "aula_id": "ind_a4",
    "tema": "ind_a4",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "O 'Termalismo Social / Crenoterapia' é uma prática reconhecida na PNPIC. Em que ela consiste?),",
    "opcoes": [
      "A) No uso terapêutico de águas minerais (banhos, ingestão) e lama medicinal para tratamento de doenças reumáticas, dermatológicas, entre outras.",
      "B) Em beber água quente antes de dormir.",
      "C) Em usar roupas térmicas no inverno.",
      "D) No aquecimento global."
    ],
    "explicacao_geral": "Prática milenar comum em estâncias hidrominerais brasileiras integradas ao SUS.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Termalismo** utiliza as **propriedades físico-químicas das águas**.",
      "B": "[INCORRETA] Descrição simplista e errada.",
      "C": "[INCORRETA] Irrelevante.",
      "D": "[INCORRETA] Fenômeno ambiental negativo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3784,
    "materia": "ind",
    "aula_id": "ind_a4",
    "tema": "ind_a4",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual pilar do SUS é mais diretamente fortalecido pela oferta de PICS nas Unidades de Saúde?),",
    "opcoes": [
      "A) Privatização.",
      "B) Centralização.",
      "C) Integralidade (olhar para o indivíduo como um todo, não apenas como um conjunto de órgãos doentes).",
      "D) Autoritarismo."
    ],
    "explicacao_geral": "A integralidade prevê a articulação da saúde com outras dimensões da vida humana.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] SUS é público.",
      "B": "[INCORRETA] SUS é descentralizado.",
      "C": "[CORRETA] As **PICS** são ferramentas da **Integralidade no SUS**.",
      "D": "[INCORRETA] SUS busca participação social e democracia."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula ind_a4 adicionadas.`);
