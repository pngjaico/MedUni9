import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3809,
    "materia": "ind",
    "aula_id": "ind_a8",
    "tema": "ind_a8",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual documento histórico, criado após a Segunda Guerra Mundial, estabeleceu os primeiros princípios éticos para a pesquisa em seres humanos, exigindo o consentimento voluntário?),",
    "opcoes": [
      "A) Declaração de Direitos do Homem.",
      "B) Código de Nuremberg.",
      "C) Carta de Pero Vaz de Caminha.",
      "D) Tratado de Versalhes."
    ],
    "explicacao_geral": "O Código de Nuremberg (1947) surgiu em resposta aos experimentos atrozes realizados em campos de concentração nazistas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Documento genérico de direitos civis.",
      "B": "[CORRETA] O **Código de Nuremberg** é o marco zero da **Bioética na Pesquisa**.",
      "C": "[INCORRETA] Documento histórico do descobrimento do Brasil.",
      "D": "[INCORRETA] Tratado de paz da 1ª Guerra Mundial."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3810,
    "materia": "ind",
    "aula_id": "ind_a8",
    "tema": "ind_a8",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual o principal objetivo do 'TCLE' (Termo de Consentimento Livre e Esclarecido) em uma pesquisa clínica?),",
    "opcoes": [
      "A) Garantir que o médico não seja preso se errar.",
      "B) Obrigar o paciente a terminar a pesquisa sem desistir.",
      "C) Cobrar pelo tratamento experimental.",
      "D) Garantir que o participante compreenda os riscos, benefícios, procedimentos e seu direito de retirar-se da pesquisa a qualquer momento, sem qualquer prejuízo."
    ],
    "explicacao_geral": "O TCLE deve ser escrito em linguagem acessível e não deve ser um simples 'contrato de defesa do pesquisador'.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Não isenta de responsabilidade ética/civil por imperícia.",
      "B": "[INCORRETA] O participante tem o direito à retirada imediata (autonomia).",
      "C": "[INCORRETA] Pesquisas no Brasil devem ser sem custos ao participante.",
      "D": "[CORRETA] O **TCLE** assegura o respeito à **Dignidade e Autonomia** do voluntário."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3811,
    "materia": "ind",
    "aula_id": "ind_a8",
    "tema": "ind_a8",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A 'Declaração de Helsinki' da Associação Médica Mundial é atualizada periodicamente. Qual a sua posição sobre o uso de 'Placebo'?),",
    "opcoes": [
      "A) Só deve ser usado se não houver um tratamento eficaz comprovado disponível para comparação, garantindo o melhor padrão de cuidado ao grupo controle.",
      "B) Pode ser usado sempre, mesmo se houver remédio bom disponível.",
      "C) Placebo é proibido em qualquer situação.",
      "D) Placebo é o mesmo que veneno."
    ],
    "explicacao_geral": "O uso de placebo contra grupo sem tratamento quando existe tratamento padrão é considerado antiético em muitas situações.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Ética em Pesquisa** prioriza a **Beneficência** e o melhor cuidado disponível.",
      "B": "[INCORRETA] Viola o princípio de não deixar o paciente sem tratamento eficaz.",
      "C": "[INCORRETA] Em novos fármacos para doenças sem cura, é permitido.",
      "D": "[INCORRETA] Substância inerte."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3812,
    "materia": "ind",
    "aula_id": "ind_a8",
    "tema": "ind_a8",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Toda pesquisa com seres humanos no Brasil deve ser submetida e aprovada por qual sistema?),",
    "opcoes": [
      "A) Pelo Google.",
      "B) Apenas pelo diretor do hospital.",
      "C) Sistema CEP/CONEP (Comitês de Ética em Pesquisa e Comissão Nacional de Ética em Pesquisa).",
      "D) Pela delegacia de polícia."
    ],
    "explicacao_geral": "O sistema CEP/CONEP avalia os riscos éticos antes de qualquer coleta de dados ou intervenção.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Mecanismo de busca.",
      "B": "[INCORRETA] Exige avaliação de pares independente interdisciplinar.",
      "C": "[CORRETA] O **Sistema CEP/CONEP** exerce o **controle social** da ciência.",
      "D": "[INCORRETA] Atua apenas em ilícitos criminais confirmados."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3813,
    "materia": "ind",
    "aula_id": "ind_a8",
    "tema": "ind_a8",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "O histórico 'Estudo de Tuskegee' sobre a Sífilis em homens negros é citado como um dos maiores horrores éticos da ciência. Qual foi a principal violação?),",
    "opcoes": [
      "A) Deram veneno para os pacientes.",
      "B) Deixaram pacientes sofrerem com a doença sem tratamento (mesmo após a descoberta da penicilina) apenas para observar o curso natural da enfermidade, sem informá-los corretamente.",
      "C) O estudo nunca existiu.",
      "D) Usaram robôs em vez de humanos."
    ],
    "explicacao_geral": "Os participantes eram vulneráveis e foram enganados durante décadas (1932-1972).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A gravidade foi a omissão ativa do remédio cura.",
      "B": "[CORRETA] O caso **Tuskegee** exemplifica a **Vulnerabilidade e falta de Ética** científica.",
      "C": "[INCORRETA] Evento real e documentado nos EUA.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3814,
    "materia": "ind",
    "aula_id": "ind_a8",
    "tema": "ind_a8",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O que significa o conceito de 'Vulnerabilidade' na ética em pesquisa?),",
    "opcoes": [
      "A) Seria a facilidade de levar choque elétrico.",
      "B) Quando o pesquisador é pobre.",
      "C) Somente pessoas doentes são vulneráveis.",
      "D) Grupos ou indivíduos que têm a capacidade de consentimento reduzida ou que podem ser facilmente coagidos por desigualdades sociais, econômicas, culturais ou cognitivas."
    ],
    "explicacao_geral": "Inclui crianças, presidiários, pessoas em extrema pobreza ou com deficiência intelectual severa.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Termo da física.",
      "B": "[INCORRETA] Refere-se ao participante.",
      "C": "[INCORRETA] Saudáveis também podem ser vulneráveis (ex: militares de baixa patente sob ordem superior).",
      "D": "[CORRETA] A **Proteção ao Vulnerável** exige cuidados éticos **adicionais**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3815,
    "materia": "ind",
    "aula_id": "ind_a8",
    "tema": "ind_a8",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Em uma pesquisa com crianças, além do TCLE assinado pelos pais, o que a norma brasileira (Resolução 466/2012) exige do menor?),",
    "opcoes": [
      "A) O 'Termo de Assentimento Livre e Esclarecido' (TALE), escrito em linguagem apropriada para a idade da criança, respeitando sua vontade de participar.",
      "B) Que ela pague a metade da taxa.",
      "C) Que ela não conte nada para os professores.",
      "D) Nada, a criança não tem vontade própria."
    ],
    "explicacao_geral": "O assentimento deve ser buscado sempre que a criança tiver capacidade de discernimento.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **TALE** valoriza a **vontade da criança** perante a pesquisa.",
      "B": "[INCORRETA] Pesquisa não deve ser cobrada.",
      "C": "[INCORRETA] Inexistente.",
      "D": "[INCORRETA] Visão anacrônica e desrespeitosa dos direitos da criança."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3816,
    "materia": "ind",
    "aula_id": "ind_a8",
    "tema": "ind_a8",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual princípio bioético afirma que os riscos de uma pesquisa nunca devem ser maiores que os benefícios esperados para a sociedade ou para o indivíduo?),",
    "opcoes": [
      "A) Justiça.",
      "B) Autonomia.",
      "C) Beneficência (e Proporcionalidade).",
      "D) Mercantilização científica."
    ],
    "explicacao_geral": "O objetivo da ciência deve ser o avanço do conhecimento para o bem humano, minimizando danos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Distribuição de bens.",
      "B": "[INCORRETA] Direito de escolha.",
      "C": "[CORRETA] O **Equilíbrio Risco-Benefício** é o crivo da **aprovação ética**.",
      "D": "[INCORRETA] Antiético transformar humanos em puro lucro comercial sem base científica honesta."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula ind_a8 adicionadas.`);
