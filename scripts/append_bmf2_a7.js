import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3649,
    "materia": "bmf2",
    "aula_id": "bmf2_a7",
    "tema": "bmf2_a7",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A divisão funcional do sistema respiratório compreende as vias de condução e a zona respiratória. Qual estrutura marca anatomicamente o início da zona respiratória onde ocorrem as trocas gasosas?),",
    "opcoes": [
      "A) Narinas.",
      "B) Bronquíolos Respiratórios (e Alvéolos).",
      "C) Traqueia.",
      "D) Faringe."
    ],
    "explicacao_geral": "Toda estrutura anterior ao bronquíolo respiratório serve apenas para conduzir, aquecer e filtrar o ar (Zona de Condução).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Entrada da zona de condução.",
      "B": "[CORRETA] A **Zona Respiratória** inicia-se nos **Bronquíolos Respiratórios**.",
      "C": "[INCORRETA] Grande via de condução.",
      "D": "[INCORRETA] Via comum aos sistemas digestório e respiratório."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3650,
    "materia": "bmf2",
    "aula_id": "bmf2_a7",
    "tema": "bmf2_a7",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual cartilagem da laringe atua como uma 'válvula', fechando a via aérea durante a deglutição para impedir a aspiração de alimentos?),",
    "opcoes": [
      "A) Cartilagem Tireóide.",
      "B) Cartilagem Cricóide.",
      "C) Cartilagem Aritenoide.",
      "D) Epiglote."
    ],
    "explicacao_geral": "A epiglote projeta-se sobre a glote durante a passagem do bolo alimentar.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Maior cartilagem; forma o 'pomo de Adão'.",
      "B": "[INCORRETA] Único anel cartilaginoso completo da via aérea.",
      "C": "[INCORRETA] Local de inserção das cordas vocais.",
      "D": "[CORRETA] A **Epiglote** protege a **Laringe** da entrada de alimento."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3651,
    "materia": "bmf2",
    "aula_id": "bmf2_a7",
    "tema": "bmf2_a7",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Anatomicamente, o pulmão direito e o esquerdo não são idênticos. Qual a principal diferença lobar entre eles?),",
    "opcoes": [
      "A) O pulmão direito tem 3 lobos e o esquerdo tem 2 (devido ao espaço ocupado pelo coração/incisura cardíaca).",
      "B) O esquerdo tem 3 e o direito tem 1.",
      "C) São perfeitamente simétricos.",
      "D) O feto possui 5 lobos em cada pulmão."
    ],
    "explicacao_geral": "O pulmão direito possui a fissura horizontal e a oblíqua; o esquerdo apenas a oblíqua.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Pulmão Direito** é maior e mais pesado que o **Esquerdo**.",
      "B": "[INCORRETA] Descrição invertida e absurda.",
      "C": "[INCORRETA] A assimetria é regra devido à posição do mediastino.",
      "D": "[INCORRETA] A contagem lobar é estabelecida precocemente no desenvolvimento."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3652,
    "materia": "bmf2",
    "aula_id": "bmf2_a7",
    "tema": "bmf2_a7",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Durante uma broncoscopia, um objeto estranho aspirado é encontrado no Brônquio Principal Direito. Por que a aspiração para o lado direito é mais comum que para o esquerdo?),",
    "opcoes": [
      "A) Porque o pulmão direito é mais fraco.",
      "B) Porque as pessoas costumam dormir do lado direito.",
      "C) Porque o brônquio principal direito é mais vertical, mais curto e mais largo que o esquerdo.",
      "D) Por pura coincidência estatística."
    ],
    "explicacao_geral": "O brônquio esquerdo é mais horizontalizado devido ao deslocamento do coração.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sem fundamento médico.",
      "B": "[INCORRETA] Não é o fator anatômico determinante primário.",
      "C": "[CORRETA] A **anatomia brônquica** favorece a passagem de corpos estranhos para a **direita**.",
      "D": "[INCORRETA] Há uma clara justificativa estrutural."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3653,
    "materia": "bmf2",
    "aula_id": "bmf2_a7",
    "tema": "bmf2_a7",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A 'Pleura' é a membrana serosa que envolve os pulmões. Onde se localiza o líquido pleural que reduz o atrito durante a respiração?),",
    "opcoes": [
      "A) Dentro dos alvéolos.",
      "B) Na cavidade pleural (espaço virtual entre a pleura parietal e a pleura visceral).",
      "C) Dentro da traqueia.",
      "D) No estômago."
    ],
    "explicacao_geral": "O fluido pleural cria uma tensão superficial que mantém os pulmões 'grudados' à parede torácica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Líquido nos alvéolos impede a respiração (edema pulmonar).",
      "B": "[CORRETA] O **Espaço Pleural** contém uma fina lâmina de líquido lubrificante.",
      "C": "[INCORRETA] Líquido na traqueia causa engasgo/tosse.",
      "D": "[INCORRETA] Sem relação."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3654,
    "materia": "bmf2",
    "aula_id": "bmf2_a7",
    "tema": "bmf2_a7",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente sofre um ferimento por faca no tórax e apresenta pulmão colapsado (Pneumotórax). O que ocorreu fisicamente no espaço pleural?),",
    "opcoes": [
      "A) O pulmão ficou muito pesado.",
      "B) A faca cortou toda a cartilagem.",
      "C) O pulmão produziu oxigênio demais.",
      "D) Ar entrou na cavidade pleural, igualando a pressão intrapleural (que é normalmente negativa) com a pressão atmosférica, fazendo o pulmão encolher por sua elasticidade natural."
    ],
    "explicacao_geral": "A pressão negativa pleural é o que mantém o pulmão expandido.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O colapso é por perda de tração elástica.",
      "B": "[INCORRETA] Dano superficial ou profundo, mas o colapso é por pressão.",
      "C": "[INCORRETA] Inexistente.",
      "D": "[CORRETA] O **Pneumotórax** anula a **pressão negativa pleural** necessária para a expansão."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3655,
    "materia": "bmf2",
    "aula_id": "bmf2_a7",
    "tema": "bmf2_a7",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Anatomicamente, qual é o principal músculo responsável pela respiração tranquila e qual nervo o inerva?),",
    "opcoes": [
      "A) Diafragma, inervado pelo Nervo Frênico (C3, C4, C5).",
      "B) Músculo Peitoral Maior, inervado pelo nervo vago.",
      "C) Abdominais, inervados pelo nervo simpático.",
      "D) O coração respira sozinho."
    ],
    "explicacao_geral": "A contração do diafragma aumenta o volume da caixa torácica, reduzindo a pressão interna (inspiração).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Diafragma** é o motor respiratório primário controlado pelo **Nervo Frênico**.",
      "B": "[INCORRETA] Músculo lateral e acessório.",
      "C": "[INCORRETA] Importantes na expiração forçada ou tosse.",
      "D": "[INCORRETA] Coração faz circulação; Diafragma faz ventilação mecânica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3656,
    "materia": "bmf2",
    "aula_id": "bmf2_a7",
    "tema": "bmf2_a7",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A traqueia estende-se da laringe até a sua bifurcação nos brônquios principais. Qual o nome anatômico dessa crista terminal na bifurcação?),",
    "opcoes": [
      "A) Glote.",
      "B) Epiglote.",
      "C) Carina.",
      "D) Hilo Pulmonar."
    ],
    "explicacao_geral": "A carina é uma área extremamente sensível que desencadeia o reflexo da tosse se tocada.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Abertura na laringe entre as cordas vocais.",
      "B": "[INCORRETA] 'Tampa' da laringe.",
      "C": "[CORRETA] A **Carina** é o ponto de **bifurcação traqueal**.",
      "D": "[INCORRETA] Região média de entrada de vasos e brônquios no pulmão."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf2_a7 adicionadas.`);
