import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3849,
    "materia": "mad1",
    "aula_id": "mad1_a2",
    "tema": "mad1_a2",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Bactérias se reproduzem assexuadamente por um processo onde uma célula se divide originando duas células filhas geneticamente idênticas. Qual o nome deste processo?),",
    "opcoes": [
      "A) Meiose.",
      "B) Fissão Binária (ou Divisão Simples).",
      "C) Brotamento.",
      "D) Esporulação."
    ],
    "explicacao_geral": "Diferente dos eucariotos, as bactérias não realizam mitose ou meiose complexas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Processo de formação de gametas em eucariotos.",
      "B": "[CORRETA] A **Fissão Binária** permite a **expansão clonal** rápida.",
      "C": "[INCORRETA] Comum em leveduras.",
      "D": "[INCORRETA] Processo de resistência, não de multiplicação populacional."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3850,
    "materia": "mad1",
    "aula_id": "mad1_a2",
    "tema": "mad1_a2",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "As bactérias 'Anaeróbias Estritas' (ou Obrigatórias) caracterizam-se por:),",
    "opcoes": [
      "A) Precisar de muito oxigênio para sobreviver.",
      "B) Respirar apenas à noite.",
      "C) Poder viver com ou sem oxigênio.",
      "D) Morrer na presença de oxigênio, pois não possuem enzimas neutralizadoras de radicais livres de O2 (como a Superóxido Dismutase)."
    ],
    "explicacao_geral": "O exemplo clássico é o gênero Clostridium (causador do tétano e botulismo).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Aeróbias estritas.",
      "B": "[INCORRETA] Absurdo.",
      "C": "[INCORRETA] Anaeróbias facultativas.",
      "D": "[CORRETA] As **Anaeróbias Estritas** exigem **ambientes desprovidos de O2**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3851,
    "materia": "mad1",
    "aula_id": "mad1_a2",
    "tema": "mad1_a2",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Na curva de crescimento bacteriano in vitro, qual fase é marcada por intensa atividade metabólica e preparo para a divisão, mas sem aumento no número de células?),",
    "opcoes": [
      "A) Fase Lag (ou de adaptação).",
      "B) Fase Log (ou Exponencial).",
      "C) Fase Estacionária.",
      "D) Fase de Morte."
    ],
    "explicacao_geral": "Nesta fase, as bactérias estão sintetizando enzimas e proteínas necessárias para o novo meio.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Fase Lag** é o período de **ajuste metabólico**.",
      "B": "[INCORRETA] Fase de multiplicação máxima e constante.",
      "C": "[INCORRETA] Onde a taxa de divisão iguala a de morte.",
      "D": "[INCORRETA] Declínio populacional por falta de nutrientes ou acúmulo de toxinas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3852,
    "materia": "mad1",
    "aula_id": "mad1_a2",
    "tema": "mad1_a2",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Os 'Plasmídeos' são elementos genéticos extracromossômicos circulares. Qual sua principal importância na clínica médica?),",
    "opcoes": [
      "A) Eles definem a cor da bactéria no Gram.",
      "B) São essenciais para a respiração bacteriana.",
      "C) Frequentemente carregam genes de resistência a antibióticos e fatores de virulência, podendo ser transferidos entre bactérias.",
      "D) Servem para proteger a bactéria do calor."
    ],
    "explicacao_geral": "Os plasmídeos de resistência são chamados de Plasmídeos R.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Depende da parede celular.",
      "B": "[INCORRETA] Genes essenciais ficam no cromossomo circular principal.",
      "C": "[CORRETA] Os **Plasmídeos** são os veículos da **Multirresistência** bacteriana.",
      "D": "[INCORRETA] Função dos esporos ou do choque térmico proteico."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3853,
    "materia": "mad1",
    "aula_id": "mad1_a2",
    "tema": "mad1_a2",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A 'Conjugação Bacteriana' é um mecanismo de transferência horizontal de genes. O que é necessário para que ela ocorra?),",
    "opcoes": [
      "A) DNA livre flutuando no meio.",
      "B) Contato físico direto entre duas células (doadora e receptora) através de um Pili Sexual.",
      "C) A presença de um vírus bacteriófago.",
      "D) Um choque elétrico no laboratório."
    ],
    "explicacao_geral": "A doadora (F+) transfere uma cópia do plasmídeo para a receptora (F-).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Requisito da Transformação.",
      "B": "[CORRETA] A **Conjugação** exige o **Pili Sexual** e contato direto.",
      "C": "[INCORRETA] Requisito da Transdução.",
      "D": "[INCORRETA] Eletroporação é técnica artificial de laboratório, não fisiológica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3854,
    "materia": "mad1",
    "aula_id": "mad1_a2",
    "tema": "mad1_a2",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual o nome do mecanismo de transferência de DNA bacteriano mediado por um VÍRUS (bacteriófago)?),",
    "opcoes": [
      "A) Tradução.",
      "B) Transcrição.",
      "C) Conjugação.",
      "D) Transdução."
    ],
    "explicacao_geral": "O fago 'empacota' acidentalmente DNA da bactéria hospedeira e o injeta na próxima bactéria que infectar.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Síntese de proteínas no ribossomo.",
      "B": "[INCORRETA] Síntese de RNA a partir do DNA.",
      "C": "[INCORRETA] Via pili sexual.",
      "D": "[CORRETA] A **Transdução** é a transferência via **Bacteriófagos**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3855,
    "materia": "mad1",
    "aula_id": "mad1_a2",
    "tema": "mad1_a2",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Um paciente com abscesso profundo por Bacteroides fragilis (anaeróbio estrito) não responde ao oxigênio tópico. Por que abscessos favorecem essas bactérias?),",
    "opcoes": [
      "A) Porque o interior do abscesso tem baixo potencial de oxirredução e baixa tensão de O2, criando o ambiente ideal para anaeróbios.",
      "B) Porque bactérias anaeróbias comem o pus.",
      "C) Porque o Oxigênio é tóxico para todas as células humanas também.",
      "D) O abscesso não tem relação com o oxigênio."
    ],
    "explicacao_geral": "Tecidos isquêmicos ou necrosados perdem a irrigação sanguínea e, consequentemente, o suprimento de O2.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] **Abscessos e Isquemias** são nichos para **Anaeróbios**.",
      "B": "[INCORRETA] Elas causam a formação de pus, não se alimentam dele passivamente.",
      "C": "[INCORRETA] O oxigênio é vital para nossas células.",
      "D": "[INCORRETA] A tensão de O2 decide qual bactéria domina a infecção."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3856,
    "materia": "mad1",
    "aula_id": "mad1_a2",
    "tema": "mad1_a2",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "A 'Transformação' bacteriana depende da 'Competência' da célula receptora. O que isso significa?),",
    "opcoes": [
      "A) Que a bactéria sabe fazer muitas coisas ao mesmo tempo.",
      "B) Que a bactéria é muito resistente a antibióticos.",
      "C) É um estado fisiológico especial que permite à bactéria captar fragmentos de DNA livre do ambiente e incorporá-los ao seu genoma.",
      "D) Que a bactéria consegue nadar rápido."
    ],
    "explicacao_geral": "Algumas bactérias são naturalmente competentes (ex: Neisseria, Streptococcus), outras só em laboratório.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Significado coloquial.",
      "B": "[INCORRETA] Pode levar à resistência se o DNA captado for de um gene de resistência, mas não é a definição.",
      "C": "[CORRETA] A **Competência** é requisito para a **Transformação** de DNA livre.",
      "D": "[INCORRETA] Motilidade."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad1_a2 adicionadas.`);
