import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3697,
    "materia": "bmf2",
    "aula_id": "bmf2_a13",
    "tema": "bmf2_a13",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O 'Néfron' é a unidade funcional do rim. Qual estrutura histológica é responsável pela filtração inicial do plasma?),",
    "opcoes": [
      "A) Alça de Henle.",
      "B) Corpúsculo Renal (Glomérulo e Cápsula de Bowman).",
      "C) Ducto Coletor.",
      "D) Ureter."
    ],
    "explicacao_geral": "O corpúsculo renal localiza-se exclusivamente no córtex renal.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Concentração da urina.",
      "B": "[CORRETA] O **Corpúsculo Renal** é a barreira de **filtração** primária.",
      "C": "[INCORRETA] Ajuste final de água e eletrólitos.",
      "D": "[INCORRETA] Via extra-renal de transporte da urina."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3698,
    "materia": "bmf2",
    "aula_id": "bmf2_a13",
    "tema": "bmf2_a13",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "O 'Túbulo Contorcido Proximal' (TCP) é revestido por um epitélio especializado. Qual a marca histológica dessa região?),",
    "opcoes": [
      "A) Epitélio estratificado pavimentoso.",
      "B) Ausência de células.",
      "C) Células achatadas finas.",
      "D) Epitélio simples cúbico com borda em escova (microvilosidades abundantes)."
    ],
    "explicacao_geral": "As microvilosidades aumentam a área de superfície para a reabsorção em massa de água e solutos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Característico de áreas de atrito.",
      "B": "[INCORRETA] Órgãos são celulares.",
      "C": "[INCORRETA] Característico do segmento delgado da alça de Henle.",
      "D": "[CORRETA] A **Borda em Escova** é a marca da alta capacidade absortiva do **TCP**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3699,
    "materia": "bmf2",
    "aula_id": "bmf2_a13",
    "tema": "bmf2_a13",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O 'Aparelho Justaglomerular' é um complexo celular essencial para o controle da pressão. Quais são os seus três componentes principais?),",
    "opcoes": [
      "A) Mácula densa, células justaglomerulares e células mesangiais extraglomerulares.",
      "B) Glomérulo, Cápsula e Túbulo.",
      "C) Cálice, Pelve e Ureter.",
      "D) Sangue, Urina e Filtro."
    ],
    "explicacao_geral": "Este aparelho detecta variações de sódio e pressão arterial.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Aparelho Justaglomerular** é a central de comando da **Renina**.",
      "B": "[INCORRETA] Componentes básicos do néfron, não do complexo regulador.",
      "C": "[INCORRETA] Via excretora macroscópica.",
      "D": "[INCORRETA] Termos genéricos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3700,
    "materia": "bmf2",
    "aula_id": "bmf2_a13",
    "tema": "bmf2_a13",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A 'Mácula Densa' localiza-se em qual parte do túbulo renal?),",
    "opcoes": [
      "A) Túbulo Proximal.",
      "B) Alça de Henle descendente.",
      "C) Porção inicial do Túbulo Contorcido Distal, em contato com o hilo do glomérulo.",
      "D) Ducto Coletor papilar."
    ],
    "explicacao_geral": "As células da mácula densa são sensores de Cloreto de Sódio (NaCl) no filtrado.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Início do sistema tubular.",
      "B": "[INCORRETA] Permeável à água.",
      "C": "[CORRETA] A **Mácula Densa** monitora a composição química do **filtrado distal**.",
      "D": "[INCORRETA] Fim do sistema tubular."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3701,
    "materia": "bmf2",
    "aula_id": "bmf2_a13",
    "tema": "bmf2_a13",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Os 'Podócitos' são células altamente especializadas localizadas na camada visceral da cápsula de Bowman. Qual a sua função mecânica?),",
    "opcoes": [
      "A) Empurrar o sangue para o rim.",
      "B) Formar as fendas de filtração com seus prolongamentos (pedicelos), impedindo a passagem de proteínas para a urina.",
      "C) Produzir eritropoietina.",
      "D) Digerir bactérias na bexiga."
    ],
    "explicacao_geral": "Danos aos podócitos levam à perda de proteínas na urina (proteinúria).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A pressão sanguínea é a força motriz.",
      "B": "[CORRETA] Os **Podócitos** garantem a seletividade de tamanho na **filtração glomerular**.",
      "C": "[INCORRETA] Função de fibroblastos intersticiais peritubulares.",
      "D": "[INCORRETA] Localização geográfica e funcional errada."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3702,
    "materia": "bmf2",
    "aula_id": "bmf2_a13",
    "tema": "bmf2_a13",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A 'Alça de Henle' mergulha na medula renal. Como se distinguem histologicamente o segmento delgado e o segmento espesso?),",
    "opcoes": [
      "A) O espesso tem cartilagem.",
      "B) O delgado é feito de ossos.",
      "C) Não existem diferenças.",
      "D) O segmento delgado possui epitélio simples pavimentoso, enquanto o espesso possui epitélio cúbico."
    ],
    "explicacao_geral": "A espessura da parede reflete a presença de transportadores ativos e mitocôndrias no segmento espesso.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Rins não possuem cartilagem.",
      "B": "[INCORRETA] Absurdo.",
      "C": "[INCORRETA] As propriedades de transporte são radicalmente diferentes.",
      "D": "[CORRETA] A **morfologia tubular** correlaciona-se com a **função metabólica** da alça."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3703,
    "materia": "bmf2",
    "aula_id": "bmf2_a13",
    "tema": "bmf2_a13",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A 'Barreira de Filtração Glomerular' possui uma seletividade de carga. Como proteínas como a albumina (negativa) são impedidas de passar mesmo sendo pequenas?),",
    "opcoes": [
      "A) Pela repulsão eletrostática causada pelos glicosaminoglicanos (carregados negativamente) presentes na lâmina basal e no glicocálice endotelial.",
      "B) Por imãs renais especiais.",
      "C) Porque a albumina é quadrada.",
      "D) Porque ela é digerida no glomérulo."
    ],
    "explicacao_geral": "Isso explica por que pacientes com perda desta carga (como na Doença de Lesão Mínima) têm proteinúria maciça.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **filtração** é seletiva por **tamanho e carga elétrica**.",
      "B": "[INCORRETA] Fenômeno eletrostático bioquímico, não ferromagnético.",
      "C": "[INCORRETA] Molécula globular.",
      "D": "[INCORRETA] Ela deve permanecer no sangue, não ser digerida ou filtrada."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3704,
    "materia": "bmf2",
    "aula_id": "bmf2_a13",
    "tema": "bmf2_a13",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "As 'Células Mesangiais' ocupam o espaço entre as alças capilares glomérulais. Qual a sua função?),",
    "opcoes": [
      "A) Produzir urina diretamente.",
      "B) Levar oxigênio para o rim.",
      "C) Suporte mecânico, fagocitose e contração para regular o fluxo sanguíneo intraglomerular.",
      "D) Armazenar vitaminas."
    ],
    "explicacao_geral": "Elas também secretam matriz extracelular e mediadores inflamatórios.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Filtração ocorre via capilar/podócito.",
      "B": "[INCORRETA] Função das hemácias nos capilares peritubulares.",
      "C": "[CORRETA] O **Mesângio** atua na **manutenção e regulação** do glomérulo.",
      "D": "[INCORRETA] Sem função de armazenamento nutricional citada."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf2_a13 adicionadas.`);
