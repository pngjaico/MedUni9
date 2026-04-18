import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3833,
    "materia": "ind",
    "aula_id": "ind_a11",
    "tema": "ind_a11",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O sigilo médico é um dos pilares mais antigos da profissão. De acordo com o Código de Ética Médica, o sigilo deve ser mantido mesmo que o fato seja de conhecimento público?),",
    "opcoes": [
      "A) Não, se todos já sabem, o médico pode falar à vontade.",
      "B) Sim, o médico é proibido de revelar segredo de que tenha conhecimento em razão do exercício profissional, mesmo que o fato seja público ou que o paciente tenha falecido.",
      "C) Só se o paciente for famoso.",
      "D) O sigilo só vale dentro do consultório, na rua pode-se comentar."
    ],
    "explicacao_geral": "O sigilo pertence ao paciente e protege a confiança na relação médico-paciente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O conhecimento público não desobriga o médico de sua reserva profissional.",
      "B": "[CORRETA] O **Sigilo Médico** é um dever **permanente e ético**.",
      "C": "[INCORRETA] Aplica-se a todos os cidadãos indistintamente.",
      "D": "[INCORRETA] O sigilo acompanha o segredo onde quer que o médico esteja."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3834,
    "materia": "ind",
    "aula_id": "ind_a11",
    "tema": "ind_a11",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "A quem pertence, por direito, o 'Prontuário Médico'?),",
    "opcoes": [
      "A) Ao médico que escreveu.",
      "B) Ao hospital onde o atendimento ocorreu.",
      "C) Ao Governo.",
      "D) Ao paciente, sendo o médico/instituição apenas os guardiões e depositários do documento."
    ],
    "explicacao_geral": "O paciente tem direito ao acesso total e cópia do seu prontuário sempre que solicitar.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O médico tem a posse física temporária e o dever de guarda.",
      "B": "[INCORRETA] A instituição é depositária fiel do documento.",
      "C": "[INCORRETA] Sem fundamento legal de propriedade.",
      "D": "[CORRETA] O **Prontuário** é de propriedade do **paciente**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3835,
    "materia": "ind",
    "aula_id": "ind_a11",
    "tema": "ind_a11",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Existem situações em que a quebra de sigilo é permitida ou obrigatória. Qual dessas situações caracteriza 'Dever Legal'?),",
    "opcoes": [
      "A) Notificação compulsória de doenças (Ex: Tuberculose, Dengue) às autoridades sanitárias.",
      "B) Contar para os amigos sobre a doença de um vizinho.",
      "C) Falar sobre o paciente com a imprensa para ficar famoso.",
      "D) Mostrar o prontuário para o marido da paciente sem autorização dela."
    ],
    "explicacao_geral": "O dever de proteção da saúde pública sobrepõe-se ao sigilo individual nestes casos específicos.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Dever Legal** obriga a **notificação sanitária** para vigilância.",
      "B": "[INCORRETA] Violação grave de sigilo.",
      "C": "[INCORRETA] Antiético e passível de condenação pelo CRM.",
      "D": "[INCORRETA] Violação de sigilo (quebra de confiança conjugal não autoriza quebra de sigilo médico)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3836,
    "materia": "ind",
    "aula_id": "ind_a11",
    "tema": "ind_a11",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um médico atende um adolescente de 16 anos que revela ser sexualmente ativo, mas pede para que não conte aos pais. Qual a conduta ética perante o 'Sigilo do Menor'?),",
    "opcoes": [
      "A) Contar imediatamente aos pais, pois eles pagam a consulta.",
      "B) Expulsar o adolescente da sala.",
      "C) Manter o sigilo, desde que o adolescente tenha capacidade de discernimento e a omissão não resulte em risco de morte ou dano grave à sua saúde ou de terceiros.",
      "D) Obrigar o adolescente a confessar aos pais na frente do médico."
    ],
    "explicacao_geral": "O sigilo do adolescente é garantido para assegurar o acesso à saúde e à confiança.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Viola a autonomia e os direitos do adolescente capaz.",
      "B": "[INCORRETA] Omissão de assistência.",
      "C": "[CORRETA] O **Sigilo do Adolescente Capaz** deve ser respeitado pelo médico.",
      "D": "[INCORRETA] Conduta autoritária e violadora do vínculo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3837,
    "materia": "ind",
    "aula_id": "ind_a11",
    "tema": "ind_a11",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Um médico é chamado para depor como testemunha no tribunal sobre um paciente que atendeu. Qual deve ser sua postura sobre o sigilo?),",
    "opcoes": [
      "A) Falar tudo, pois o juiz manda mais que o CRM.",
      "B) Comparecer perante a autoridade judicial, mas declarar-se impedido de depor sobre fatos sigilosos conhecidos através da profissão, salvo se o paciente autorizar por escrito ou houver determinação legal específica (como crime contra o próprio médico).",
      "C) Mentir para o juiz.",
      "D) Não comparecer ao tribunal."
    ],
    "explicacao_geral": "O médico deve honrar o segredo profissional mesmo perante a justiça, exercendo seu direito de escusa.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O juiz não pode obrigar o médico a quebrar o sigilo ético (salvo raras exceções de ordem pública).",
      "B": "[CORRETA] O médico tem o **Dever de Escusa** para proteger o **segredo do paciente**.",
      "C": "[INCORRETA] Perjúrio é crime.",
      "D": "[INCORRETA] Deve comparecer mas silenciar o segredo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3838,
    "materia": "ind",
    "aula_id": "ind_a11",
    "tema": "ind_a11",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "O que caracteriza o 'Justo Motivo' para a quebra de sigilo médico?),",
    "opcoes": [
      "A) O médico não gostar do paciente.",
      "B) Quando a revelação do segredo é essencial para evitar um mal maior, como um perigo iminente à vida do paciente ou de outra pessoa (ex: pacitente com HIV que se nega a informar parceira e pretende ter relações sem proteção).",
      "C) Quando o paciente deve dinheiro ao médico.",
      "D) Quando o caso é muito interessante para publicar no jornal."
    ],
    "explicacao_geral": "O justo motivo é uma avaliação subjetiva de conflito de deveres, priorizando a preservação da vida.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sentimento pessoal não é justificativa ética.",
      "B": "[CORRETA] O **Justo Motivo** busca o **equilíbrio de danos** na ética prática.",
      "C": "[INCORRETA] Razões financeiras não justificam quebra de sigilo clínico.",
      "D": "[INCORRETA] Publicação científica exige autorização e anonimato total da face/dados."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3839,
    "materia": "ind",
    "aula_id": "ind_a11",
    "tema": "ind_a11",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Em caso de falecimento do paciente, o médico pode fornecer cópia do prontuário aos familiares?),",
    "opcoes": [
      "A) Sim, para o cônjuge ou sucessores legítimos (ordem de vocação hereditária), conforme recomendação do CFM e entendimento jurídico atual.",
      "B) Nunca, o prontuário morre com o paciente.",
      "C) Só se o paciente tiver deixado um vídeo permitindo.",
      "D) Apenas se o paciente for solteiro."
    ],
    "explicacao_geral": "A família tem direito ao acesso para fins de inventário, seguros ou simples conhecimento da causa mortis detalhada.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Acesso Pós-Morte** é garantido aos **herdeiros legítimos**.",
      "B": "[INCORRETA] Rigidez excessiva que viola direitos fundamentais da família.",
      "C": "[INCORRETA] Testamentos vitais ajudam, mas o direito dos herdeiros é reconhecido legalmente.",
      "D": "[INCORRETA] Irrelevante."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3840,
    "materia": "ind",
    "aula_id": "ind_a11",
    "tema": "ind_a11",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um médico tira uma foto com um paciente no hospital e posta no seu Instagram pessoal com a legenda: 'Combate ao Câncer!'. Qual a falha ética?),",
    "opcoes": [
      "A) O médico não usou filtro na foto.",
      "B) O médico deveria ter cobrado pela foto.",
      "C) Não houve falha, é marketing positivo.",
      "D) Quebra do sigilo e da privacidade, além de autopromoção e uso de paciente como forma de angariar clientela (exposição de figura de paciente), o que é proibido mesmo com 'autorização' se for para fins de marketing médico."
    ],
    "explicacao_geral": "O CFM é rígido quanto à exposição de pacientes em mídias sociais para fins de autopromoção profissional.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Estético/irrelevante.",
      "B": "[INCORRETA] Agrava a infração ética (comercialização da imagem).",
      "C": "[INCORRETA] Explora a vulnerabilidade do paciente para benefício do médico.",
      "D": "[CORRETA] O **Uso de Imagem de Paciente** em redes sociais é **severamente restrito** por ética."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula ind_a11 adicionadas.`);
