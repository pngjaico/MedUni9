import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3353,
    "materia": "semiologia1",
    "aula_id": "semio1_a9",
    "tema": "semio1_a9",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Durante a apresentação de um caso clínico em uma reunião de equipe, qual dado deve ser priorizado na abertura da narrativa para contextualizar o perfil de risco do paciente?),",
    "opcoes": [
      "A) O nome do animal de estimação do paciente.",
      "B) Identificação (Idade, Sexo e Profissão) e Queixa Principal.",
      "C) O valor da conta de luz do paciente.",
      "D) A lista de todos os remédios que o paciente já tomou na vida desde o nascimento."
    ],
    "explicacao_geral": "A identificação inicial define a epidemiologia e os riscos ocupacionais/biológicos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Frequentemente irrelevante para o diagnóstico musculoesquelético principal.",
      "B": "[CORRETA] A **Identificação** e a **Queixa** são a base de qualquer apresentação de caso.",
      "C": "[INCORRETA] Dado socioeconômico que pode ser relevante em contextos específicos, mas não é prioridade na abertura técnica.",
      "D": "[INCORRETA] Deve ser resumida e apresentada em momento oportuno (Antecedentes)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3354,
    "materia": "semiologia1",
    "aula_id": "semio1_a9",
    "tema": "semio1_a9",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Ao discutir as hipóteses diagnósticas de um paciente com dor articular súbita e febre, qual a 'Regra de Ouro' que o estudante deve seguir?),",
    "opcoes": [
      "A) Pensar no diagnóstico mais comum primeiro e ignorar o resto.",
      "B) Esperar o paciente melhorar sozinho por uma semana.",
      "C) Só dar hipóteses baseadas no que viu na internet.",
      "D) Priorizar a exclusão da Gravidade (Ex: Artrite Séptica) antes de focar na Probabilidade (Ex: Gota)."
    ],
    "explicacao_geral": "O raciocínio clínico de segurança prioriza afastar o que pode matar ou causar sequela grave.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pode levar à perda de janelas terapêuticas para emergências.",
      "B": "[INCORRETA] Atitude negligente em quadros agudos.",
      "C": "[INCORRETA] O raciocínio deve ser baseado em dados semiológicos reais e bibliografia técnica.",
      "D": "[CORRETA] **Gravidade antes da Probabilidade** é a diretriz de segurança no raciocínio clínico."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3355,
    "materia": "semiologia1",
    "aula_id": "semio1_a9",
    "tema": "semio1_a9",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Um estudante apresenta o caso de um idoso com dor lombar. Ele relata: 'Paciente com dor lombar crônica, sem sinais de alerta, sem perda de peso e sem incontinência'. Por que citar o que o paciente NÃO tem (dados negativos) é importante na reunião clínica?),",
    "opcoes": [
      "A) Demonstra que o examinador buscou ativamente por sinais de gravidade (Red Flags) e os excluiu.",
      "B) Apenas para fazer a apresentação parecer mais longa.",
      "C) Para confundir os colegas de equipe.",
      "D) Não é importante, apenas os dados positivos valem."
    ],
    "explicacao_geral": "Dados negativos pertinentes ajudam a descartar hipóteses diferenciais graves.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] **Dados negativos pertinentes** mostram rigor técnico e segurança clínica.",
      "B": "[INCORRETA] A objetividade é valorizada, mas os dados negativos funcionam como 'filtras de risco'.",
      "C": "[INCORRETA] Pelo contrário, traz clareza ao diagnóstico diferencial.",
      "D": "[INCORRETA] Dados negativos em 'Red Flags' são tão importantes quanto os positivos."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3356,
    "materia": "semiologia1",
    "aula_id": "semio1_a9",
    "tema": "semio1_a9",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O 'Plano Terapêutico' deve ser a conclusão de uma boa discussão de caso. Qual componente NÃO deve faltar em um plano ambulatorial bem feito?),",
    "opcoes": [
      "A) Apenas a receita de analgésico.",
      "B) O nome de um cirurgião famoso que o paciente deve procurar fora do SUS.",
      "C) Medidas imediatas, Orientações de autocuidado e Sinais de Alarme para retorno antecipado.",
      "D) Um pedido de 50 sessões de fisioterapia sem diagnóstico definido."
    ],
    "explicacao_geral": "O plano deve ser completo e garantir que o paciente saiba o que fazer em caso de piora.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Plano incompleto e meramente sintomático.",
      "B": "[INCORRETA] Antiético e foge do fluxo assistencial padrão.",
      "C": "[CORRETA] **Sinais de Alarme** são o seguro de vida do paciente e do médico.",
      "D": "[INCORRETA] O tratamento deve ser baseado no diagnóstico sindrômico ou nosológico."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3357,
    "materia": "semiologia1",
    "aula_id": "semio1_a9",
    "tema": "semio1_a9",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Ao propor um exame complementar (Ex: Ressonância Magnética) para um caso de dor articular crônica, o preceptor pergunta: 'Isso vai mudar sua conduta?'. Qual o sentido dessa pergunta?),",
    "opcoes": [
      "A) Economizar dinheiro do hospital a qualquer custo.",
      "B) Utilizar racionalmente os recursos e evitar exames desnecessários que não alteram o tratamento.",
      "C) Dizer que o aluno é ignorante por pedir o exame.",
      "D) Provar que a clínica não presta para nada."
    ],
    "explicacao_geral": "Muitas alterações de imagem em idosos são assintomáticas e o exame não mudará o tratamento conservador inicial.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A economia é consequência, não a finalidade biológica primária.",
      "B": "[CORRETA] **Racionalidade diagnóstica** foca em exames que definem novos passos terapêuticos.",
      "C": "[INCORRETA] É uma pergunta pedagógica de raciocínio clínico.",
      "D": "[INCORRETA] A clínica é soberana exatamente porque define quando o exame é útil."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3358,
    "materia": "semiologia1",
    "aula_id": "semio1_a9",
    "tema": "semio1_a9",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Durante a discussão de equipe, o médico assistente pergunta: 'Qual o impacto funcional da dor na vida deste paciente?'. Por que essa pergunta é crucial?),",
    "opcoes": [
      "A) Para saber se ele vai faltar ao trabalho por preguiça.",
      "B) Para decidir o valor da aposentadoria dele.",
      "C) Não é crucial, dor é dor em qualquer pessoa.",
      "D) Porque a gravidade da doença musculoesquelética é medida pela perda de independência e qualidade de vida, não apenas pela intensidade da dor."
    ],
    "explicacao_geral": "O objetivo final do tratamento é restaurar a função e autonomia.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Atitude preconceituosa contra o paciente.",
      "B": "[INCORRETA] Função pericial que não é o foco do tratamento clínico agudo.",
      "C": "[INCORRETA] O contexto do paciente muda a agressividade da conduta.",
      "D": "[CORRETA] O **impacto funcional** orienta a prioridade do cuidado e da reabilitação."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3359,
    "materia": "semiologia1",
    "aula_id": "semio1_a9",
    "tema": "semio1_a9",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Em uma reunião clínica interdisciplinar, o fisioterapeuta levanta uma dúvida sobre a estabilidade articular de um paciente. Qual a atitude correta do estudante de medicina?),",
    "opcoes": [
      "A) Dizer que médico sabe mais e ignorar o comentário.",
      "B) Escutar a perspectiva do colega, revisar o exame físico juntos e ajustar o plano se necessário.",
      "C) Sair da sala nervoso.",
      "D) Recomendar que o paciente troque de fisioterapeuta."
    ],
    "explicacao_geral": "A prática colaborativa reduz erros diagnósticos e melhora o desfecho do paciente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Atitude arrogante que prejudica o paciente e a equipe.",
      "B": "[CORRETA] O **trabalho em equipe** é fundamental para o sucesso do tratamento musculoesquelético.",
      "C": "[INCORRETA] Falta de profissionalismo.",
      "D": "[INCORRETA] Atitude antiética se não houver motivo técnico real."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3360,
    "materia": "semiologia1",
    "aula_id": "semio1_a9",
    "tema": "semio1_a9",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "O 'Viés de Confirmação' é um erro de raciocínio comum em discussões de caso. Como evitá-lo?),",
    "opcoes": [
      "A) Perguntar ativamente: 'O que neste caso NÃO se encaixa na minha hipótese principal?'",
      "B) Procurar apenas dados que provem que você está certo.",
      "C) Ignorar os dados negativos trazidos pelos colegas.",
      "D) Seguir sempre a primeira intuição e nunca mudar de ideia."
    ],
    "explicacao_geral": "O viés de confirmação faz o médico ignorar sinais de alerta que contrariam seu diagnóstico inicial.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **busca por evidências contrárias** protege o raciocínio contra erros de confirmação.",
      "B": "[INCORRETA] Isso é a definição do viés, não a solução.",
      "C": "[INCORRETA] Dados negativos dos colegas são os melhores 'protetores' contra erros.",
      "D": "[INCORRETA] A medicina exige flexibilidade diante de novas evidências clínicas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula semio1_a9 adicionadas.`);
