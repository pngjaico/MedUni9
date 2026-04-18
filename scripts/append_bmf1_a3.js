import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3017,
    "materia": "bmf1",
    "aula_id": "bmf1_a3",
    "tema": "bmf1_a3",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "O esqueleto humano é dividido em porções axial e apendicular. Qual osso faz parte exclusivamente do esqueleto axial?",
    "opcoes": [
      "A) Esterno.",
      "B) Fêmur.",
      "C) Escápula.",
      "D) Rádio."
    ],
    "explicacao_geral": "O **esqueleto axial** forma o eixo central do corpo (crânio, coluna, costelas e esterno). O apendicular compreende os membros e suas cinturas.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **esterno**, junto com as costelas e a coluna, compõe a caixa torácica do esqueleto axial.",
      "B": "[INCORRETA] O fêmur é um osso do membro inferior (apendicular).",
      "C": "[INCORRETA] A escápula faz parte da cintura escapular (apendicular).",
      "D": "[INCORRETA] O rádio é um osso do membro superior (apendicular)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3018,
    "materia": "bmf1",
    "aula_id": "bmf1_a3",
    "tema": "bmf1_a3",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Os ossos são classificados de acordo com sua forma. Um osso que se desenvolve dentro de tendões, como a patela, é classificado como:",
    "opcoes": [
      "A) Osso Longo.",
      "B) Osso Sesamoide.",
      "C) Osso Pneumático.",
      "D) Osso Irregular."
    ],
    "explicacao_geral": "Ossos **sesamoides** protegem os tendões contra o desgaste excessivo e alteram o ângulo de tração muscular.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ossos longos têm o comprimento predominando sobre largura e espessura.",
      "B": "[CORRETA] A patela é o maior **osso sesamoide** do corpo, situando-se no tendão do quadríceps.",
      "C": "[INCORRETA] Ossos pneumáticos possuem cavidades cheias de ar (seios), como o frontal.",
      "D": "[INCORRETA] Ossos irregulares têm formas complexas, como as vértebras."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3019,
    "materia": "bmf1",
    "aula_id": "bmf1_a3",
    "tema": "bmf1_a3",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Em um osso longo, como o úmero, a região central e cilíndrica composta predominantemente por osso compacto é denominada:",
    "opcoes": [
      "A) Epífise.",
      "B) Metáfise.",
      "C) Linha Epifisária.",
      "D) Diáfise."
    ],
    "explicacao_geral": "Ossos longos possuem uma anatomia regional distinta para suportar carga e permitir crescimento.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] As epífises são as extremidades dilatadas do osso.",
      "B": "[INCORRETA] A metáfise é a zona de transição entre a diáfise e a epífise.",
      "C": "[INCORRETA] A linha epifisária é o remanescente da placa de crescimento no adulto.",
      "D": "[CORRETA] A **diáfise** (corpo do osso) é o eixo central longo e resistente."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3020,
    "materia": "bmf1",
    "aula_id": "bmf1_a3",
    "tema": "bmf1_a3",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Um paciente sofre uma fratura exposta grave no fêmur. Durante a cirurgia, nota-se sangramento abundante vindo da membrana que recobre externamente o osso, exceto nas superfícies articulares. Qual é essa membrana?",
    "opcoes": [
      "A) Periósteo.",
      "B) Endósteo.",
      "C) Cartilagem Hialina.",
      "D) Lâmina Basal."
    ],
    "explicacao_geral": "O **periósteo** é um tecido conjuntivo denso altamente vascularizado e inervado que envolve o osso, sendo fundamental para a nutrição e sensibilidade dolorosa.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **periósteo** é a camada externa que sangra e dói intensamente em fraturas.",
      "B": "[INCORRETA] O endósteo reveste as superfícies internas e o canal medular.",
      "C": "[INCORRETA] A cartilagem hialina reveste apenas as superfícies de articulação.",
      "D": "[INCORRETA] Lâmina basal é uma estrutura microscópica de tecidos epiteliais."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3021,
    "materia": "bmf1",
    "aula_id": "bmf1_a3",
    "tema": "bmf1_a3",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual dos ossos a seguir é classificado morfológicamente como um 'Osso Plano', caracterizado por possuir duas lâminas de osso compacto separadas por uma camada de osso esponjoso (díploe)?",
    "opcoes": [
      "A) Vértebra.",
      "B) Carpo.",
      "C) Parietal (crânio).",
      "D) Tíbia."
    ],
    "explicacao_geral": "Ossos **planos** (ou laminares) oferecem proteção e grande área de fixação muscular, como os ossos da calvária e o esterno.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Vértebras são ossos irregulares.",
      "B": "[INCORRETA] Ossos do carpo são classificados como curtos.",
      "C": "[CORRETA] O **parietal**, assim como o frontal, é um exemplo clássico de osso plano.",
      "D": "[INCORRETA] A tíbia é um osso longo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3022,
    "materia": "bmf1",
    "aula_id": "bmf1_a3",
    "tema": "bmf1_a3",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A hematopoiese (produção de células sanguíneas) ocorre em qual região específica do sistema esquelético do adulto?",
    "opcoes": [
      "A) Canal medular da diáfise dos ossos longos.",
      "B) Medula óssea vermelha presente nos ossos planos e epífises.",
      "C) Medula óssea amarela rica em tecido adiposo.",
      "D) Periósteo vascularizado."
    ],
    "explicacao_geral": "No adulto, a **medula vermelha** é restrita a certos locais (como esterno, ilíaco e epífises de ossos longos), enquanto a amarela preenche a diáfise.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] No adulto, o canal medular da diáfise contém medula amarela (gordura).",
      "B": "[CORRETA] A **medula óssea vermelha** é o tecido mieloide ativo na hematopoiese.",
      "C": "[INCORRETA] A medula amarela é inativa para produção de sangue.",
      "D": "[INCORRETA] O periósteo não produz células sanguíneas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3023,
    "materia": "bmf1",
    "aula_id": "bmf1_a3",
    "tema": "bmf1_a3",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um lutador de MMA recebe um chute na lateral do joelho. O médico suspeita de lesão no osso fíbula. Como esse osso é classificado e a qual parte do esqueleto ele pertence?",
    "opcoes": [
      "A) Osso Curto / Esqueleto Axial.",
      "B) Osso Irregular / Esqueleto Apendicular.",
      "C) Osso Longo / Esqueleto Apendicular.",
      "D) Osso Laminar / Esqueleto Axial."
    ],
    "explicacao_geral": "A fíbula é um osso delgado do membro inferior, que prioriza o comprimento sobre as outras dimensões.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Fíbula não é curta nem axial.",
      "B": "[INCORRETA] Ela possui um formato tubular definido (longo), não irregular.",
      "C": "[CORRETA] É um **osso longo** do membro inferior (**apendicular**).",
      "D": "[INCORRETA] Não é plano (laminar) nem faz parte do eixo central."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3024,
    "materia": "bmf1",
    "aula_id": "bmf1_a3",
    "tema": "bmf1_a3",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Qual função esquelética é exemplificada pela proteção do coração e pulmões pela caixa torácica?",
    "opcoes": [
      "A) Proteção de órgãos vitais.",
      "B) Hematopoiese.",
      "C) Alavanca para movimentação.",
      "D) Armazenamento de minerais."
    ],
    "explicacao_geral": "Dentre as funções mecânicas do osso, a proteção de estruturas moles e nobres é uma das mais importantes biologicamente.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **proteção** é a função chave de gradis ósseos como o tórax e o crânio.",
      "B": "[INCORRETA] Hematopoiese é a produção de sangue.",
      "C": "[INCORRETA] Alavanca refere-se à locomoção via articulações e músculos.",
      "D": "[INCORRETA] Armazenamento refere-se ao reservatório de cálcio e fósforo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf1_a3 adicionadas.`);
