import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3985,
    "materia": "mad1",
    "aula_id": "mad1_a19",
    "tema": "mad1_a19",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A estrutura básica de um anticorpo (Imunoglobulina) é em forma de 'Y'. Qual parte do anticorpo é responsável pela ligação específica ao antígeno?),",
    "opcoes": [
      "A) Região constante (Fc).",
      "B) Região variável (Fab).",
      "C) Ponte de dissulfeto central.",
      "D) Cadeia pesada apenas."
    ],
    "explicacao_geral": "A variabilidade nas pontas do 'Y' permite que o corpo reconheça bilhões de antígenos diferentes.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Região que determina a função biológica (classe) e se liga a células imunes.",
      "B": "[CORRETA] A **Região Fab** é onde ocorre a **especificidade** pelo antígeno.",
      "C": "[INCORRETA] Estrutura de sustentação química.",
      "D": "[INCORRETA] Ambas as cadeias (leve e pesada) formam o sítio de ligação."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3986,
    "materia": "mad1",
    "aula_id": "mad1_a19",
    "tema": "mad1_a19",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual classe de anticorpo é a única capaz de atravessar a barreira placentária, conferindo imunidade passiva natural ao feto?),",
    "opcoes": [
      "A) IgA.",
      "B) IgE.",
      "C) IgM.",
      "D) IgG."
    ],
    "explicacao_geral": "A IgG é a imunoglobulina mais abundante no soro e tem vida média longa.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Passa pelo leite materno (colostro), não placenta.",
      "B": "[INCORRETA] Relacionada a alergias.",
      "C": "[INCORRETA] Molécula muito grande (pentâmero) para atravessar.",
      "D": "[CORRETA] A **IgG** é o anticorpo da **Proteção Neonatal** via placenta."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3987,
    "materia": "mad1",
    "aula_id": "mad1_a19",
    "tema": "mad1_a19",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Em um exame de sangue para diagnóstico de uma infecção recente (fase aguda), qual classe de anticorpo específica para o agente deve estar elevada?),",
    "opcoes": [
      "A) IgM.",
      "B) IgG.",
      "C) IgE.",
      "D) IgD."
    ],
    "explicacao_geral": "A IgM é o primeiro anticorpo produzido após a exposição inicial a um antígeno.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **IgM** indica **Fase Aguda** ou infecção recente.",
      "B": "[INCORRETA] Indica memória imunológica ou fase tardia.",
      "C": "[INCORRETA] Indica helmitíase ou hipersensibilidade.",
      "D": "[INCORRETA] Presente principalmente na membrana de linfócitos B virgens."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3988,
    "materia": "mad1",
    "aula_id": "mad1_a19",
    "tema": "mad1_a19",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O que ocorre na função de 'Neutralização' exercida pelos anticorpos?),",
    "opcoes": [
      "A) O anticorpo explode a bactéria.",
      "B) O anticorpo come o vírus.",
      "C) O anticorpo liga-se a toxinas ou superfícies de vírus/bactérias, impedindo fisicamente que eles se liguem ou entrem nas células do hospedeiro.",
      "D) O anticorpo transforma o veneno em água."
    ],
    "explicacao_geral": "É um mecanismo de defesa imediato e muito eficaz contra toxinas bacterianas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Lise exige o Sistema Complemento.",
      "B": "[INCORRETA] Anticorpos não são fagócitos.",
      "C": "[CORRETA] A **Neutralização** bloqueia a **infectividade** ou toxicidade.",
      "D": "[INCORRETA] Descrição leiga e quimicamente imprecisa."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3989,
    "materia": "mad1",
    "aula_id": "mad1_a19",
    "tema": "mad1_a19",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Qual classe de anticorpo apresenta-se normalmente como um PENTÂMERO (5 unidades em estrela) e é a mais eficiente na ativação da via clássica do Complemento?),",
    "opcoes": [
      "A) IgG.",
      "B) IgM.",
      "C) IgA.",
      "D) IgE."
    ],
    "explicacao_geral": "A estrutura pentamérica permite alta avidez (múltiplos sítios de ligação simultâneos).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Monômero.",
      "B": "[CORRETA] A **IgM** circular é um **Pêntâmero** de alta eficiência.",
      "C": "[INCORRETA] Geralmente dímero nas mucosas.",
      "D": "[INCORRETA] Monômero."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3990,
    "materia": "mad1",
    "aula_id": "mad1_a19",
    "tema": "mad1_a19",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A 'Imunidade Passiva Artificial' é exemplificada por qual das seguintes situações?),",
    "opcoes": [
      "A) Vacinação contra a gripe.",
      "B) Contrair catapora e ficar imune.",
      "C) Tomar leite materno.",
      "D) Administração de soro antiofídico ou imunoglobulina humana pronta após exposição (ex: tétano, raiva)."
    ],
    "explicacao_geral": "Na imunidade passiva, o indivíduo recebe anticorpos prontos, não havendo estimulação da sua própria memória imunológica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Imunidade Ativa Artificial.",
      "B": "[INCORRETA] Imunidade Ativa Natural.",
      "C": "[INCORRETA] Imunidade Passiva Natural.",
      "D": "[CORRETA] O **Soro** fornece **Imunidade Passiva Artificial** imediata."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3991,
    "materia": "mad1",
    "aula_id": "mad1_a19",
    "tema": "mad1_a19",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "O 'Switch de Classe' (Troca de Isótipo) permite que um linfócito B mude a classe do anticorpo produzido (ex: de IgM para IgG). O que NÃO muda nesse processo?),",
    "opcoes": [
      "A) A especificidade pelo antígeno (a região variável Fab continua a mesma).",
      "B) A região constante (Fc).",
      "C) A função efetora do anticorpo.",
      "D) O tempo de vida do anticorpo."
    ],
    "explicacao_geral": "Isso permite que a resposta imune 'personalize' a defesa sem perder o alvo original.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Especificidade** permanece inalterada no **Switch de Classe**.",
      "B": "[INCORRETA] A região Fc é justamente o que muda.",
      "C": "[INCORRETA] Muda conforme a nova classe.",
      "D": "[INCORRETA] IgG vive muito mais que IgM."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3992,
    "materia": "mad1",
    "aula_id": "mad1_a19",
    "tema": "mad1_a19",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Antígenos que são capazes de induzir uma resposta imune de memória geralmente pertencem a qual classe bioquímica?),",
    "opcoes": [
      "A) Lipídeos puros.",
      "B) Ácidos nucleicos.",
      "C) Proteínas.",
      "D) Metais pesados."
    ],
    "explicacao_geral": "Apenas os peptídeos (proteínas) podem ser apresentados via MHC aos linfócitos T auxiliares, necessários para gerar memória B.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ativadores pobres de imunidade adaptativa complexa sozinhos.",
      "B": "[INCORRETA] Atividade imunogênica limitada sem complexação.",
      "C": "[CORRETA] As **Proteínas** são as substâncias mais **Imunogênicas**.",
      "D": "[INCORRETA] Geralmente atuam como haptenos, não antígenos completos de memória complexa direta."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad1_a19 adicionadas.`);
