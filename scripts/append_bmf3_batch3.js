import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4233,
    "materia": "bmf3",
    "aula_id": "bmf3_a17",
    "tema": "bmf3_a17",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual a principal função dos 'Glicocorticoides Inalatórios' (ex: Budesonida, Fluticasona) no tratamento da Asma Brônquica?),",
    "opcoes": [
      "A) Alívio imediato do broncoespasmo durante uma crise.",
      "B) Controle da inflamação crônica das vias aéreas e redução da hiper-reatividade bronquial, prevenindo novas crises.",
      "C) Eliminação de vírus respiratórios.",
      "D) Aumento da força dos músculos respiratórios."
    ],
    "explicacao_geral": "Os corticoides agem a longo prazo e não devem ser usados isoladamente para alívio agudo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Função dos agonistas Beta-2 de curta ação (SABA).",
      "B": "[CORRETA] Os **Corticoides Inalatórios** são a terapia de **controle/manutenção**.",
      "C": "[INCORRETA] Não possuem ação antiviral.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4234,
    "materia": "bmf3",
    "aula_id": "bmf3_a17",
    "tema": "bmf3_a17",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente asmático apresenta tosse seca e sibilos. Qual o mecanismo de ação do 'Montelucaste'?),",
    "opcoes": [
      "A) Bloqueio dos receptores de acetilcolina.",
      "B) Estímulo dos receptores Beta-2.",
      "C) Inibição da COX-1.",
      "D) Antagonismo dos receptores de Leucotrienos (CysLT1)."
    ],
    "explicacao_geral": "Os leucotrienos são potentes bronconstritores e mediadores inflamatórios produzidos via lipoxigenase.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Função do Ipratrópio/Tiutrópio.",
      "B": "[INCORRETA] Função do Salbutamol.",
      "C": "[INCORRETA] Função de AINEs.",
      "D": "[CORRETA] O **Montelucaste** é um **Antileucotrieno**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4235,
    "materia": "bmf3",
    "aula_id": "bmf3_a18",
    "tema": "bmf3_a18",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual o mecanismo de ação dos fármacos como o 'Omeprazol' e o 'Esomeprazol'?),",
    "opcoes": [
      "A) Neutralização direta do ácido já presente no estômago.",
      "B) Inibição irreversível da bomba de prótons (H+/K+ ATPase) nas células parietais, bloqueando a etapa final da secreção ácida.",
      "C) Bloqueio dos receptores H2 de histamina.",
      "D) Revestimento protetor físico sobre a úlcera."
    ],
    "explicacao_geral": "Os IBP são pró-fármacos que exigem ambiente ácido para ativação canalicular e ligação à bomba.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Função de antiácidos (Hidróxido de Alumínio/Magnésio).",
      "B": "[CORRETA] Os **IBPs** inibem a **Bomba de Prótons**.",
      "C": "[INCORRETA] Função da Ranitidina.",
      "D": "[INCORRETA] Função do Sucralfato."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4236,
    "materia": "bmf3",
    "aula_id": "bmf3_a18",
    "tema": "bmf3_a18",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A 'Metoclopramida' (Plasil) é um procinético e antiemético. Qual efeito colateral neurológico pode ocorrer devido ao bloqueio de receptores dopaminérgicos centrais, especialmente em idosos e crianças?),",
    "opcoes": [
      "A) Convulsões.",
      "B) Amnésia retrógrada.",
      "C) Surdez temporária.",
      "D) Reações extrapiramidais (tremores, espasmos musculares, distonia aguda)."
    ],
    "explicacao_geral": "O bbloqueio D2 no sistema nigroestriatal mimetiza sintomas de Parkinson ou distonias.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Não é o efeito adverso clássico desta via.",
      "B": "[INCORRETA] Sem correlação.",
      "C": "[INCORRETA] Sem correlação.",
      "D": "[CORRETA] A **Metoclopramida** pode causar **Sintomas Extrapiramidais**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4237,
    "materia": "bmf3",
    "aula_id": "bmf3_a19",
    "tema": "bmf3_a19",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual o principal mecanismo de ação dos antibióticos Beta-lactâmicos (Penicilinas, Cefalosporinas)?),",
    "opcoes": [
      "A) Inibição da síntese proteica no ribossomo.",
      "B) Inibição da síntese da parede celular bacteriana através da ligação às PBPs (Penicillin-Binding Proteins), impedindo a transpeptidação do peptidoglicano.",
      "C) Destruição da membrana citoplasmática.",
      "D) Inibição da replicação do DNA."
    ],
    "explicacao_geral": "Os beta-lactâmicos são bactericidas, levando à lise da célula bacteriana sob pressão osmótica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Mecanismo de macrolídeos e tetraciclinas.",
      "B": "[CORRETA] Os **Beta-lactâmicos** agem na **Parede Celular**.",
      "C": "[INCORRETA] Mecanismo de polimixinas e daptomicina.",
      "D": "[INCORRETA] Mecanismo de quinolonas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4238,
    "materia": "bmf3",
    "aula_id": "bmf3_a19",
    "tema": "bmf3_a19",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Por que a 'Amoxicilina' é frequentemente associada ao 'Ácido Clavulânico' em certas infecções?),",
    "opcoes": [
      "A) Porque o ácido clavulânico inibe as enzimas beta-lactamases produzidas por algumas bactérias, protegendo a amoxicilina da degradação.",
      "B) Para tornar o remédio mais doce.",
      "C) Para aumentar a absorção de gordura.",
      "D) Porque o ácido clavulânico é um potente analgésico."
    ],
    "explicacao_geral": "O ácido clavulânico é um inibidor suicida de beta-lactamases, mas possui pouca atividade antibacteriana intrínseca.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Clavulanato** é um **protetor da penicilina**.",
      "B": "[INCORRETA] Sabor não justifica a associação farmacológica.",
      "C": "[INCORRETA] Irracional.",
      "D": "[INCORRETA] Não possui atividade analgésica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4239,
    "materia": "bmf3",
    "aula_id": "bmf3_a20",
    "tema": "bmf3_a20",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "As 'Quinolonas' (ex: Ciprofloxacina, Levofloxacina) agem inibindo qual processo bacteriano?),",
    "opcoes": [
      "A) Formação da parede.",
      "B) Síntese de proteínas no ribossomo 30S.",
      "C) Topoisomerases (DNA-girase e Topoisomerase IV), impedindo o relaxamento e replicação do DNA.",
      "D) Metabolismo do ácido fólico."
    ],
    "explicacao_geral": "São antibióticos potentes e de amplo espectro.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Beta-lactâmicos.",
      "B": "[INCORRETA] Tetraciclinas e aminoglicosídeos.",
      "C": "[CORRETA] As **Quinolonas** interferem no **Superenrolamento do DNA**.",
      "D": "[INCORRETA] Sulfonamidas e Trimetoprima."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4240,
    "materia": "bmf3",
    "aula_id": "bmf3_a20",
    "tema": "bmf3_a20",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Qual o principal efeito adverso temido associado ao uso de 'Aminoglicosídeos' (como a Gentamicina e Amicacina)?),",
    "opcoes": [
      "A) Ototoxicidade (lesão do nervo auditivo/vestibular) e Nefrotoxicidade (lesão renal).",
      "B) Diarreia leve.",
      "C) Insônia.",
      "D) Aumento do apetite."
    ],
    "explicacao_geral": "O dano auditivo pode ser irreversível, por isso exige monitoramento de níveis séricos e função renal.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] **Aminoglicosídeos** são classicamente **Ototóxicos e Nefrotóxicos**.",
      "B": "[INCORRETA] Comum a quase todos os antibióticos via oral, mas menos grave que a toxicidade orgânica descrita.",
      "C": "[INCORRETA] Sem correlação.",
      "D": "[INCORRETA] Sem correlação."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf3_a17-a20 adicionadas.`);
