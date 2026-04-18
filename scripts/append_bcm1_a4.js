import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3457,
    "materia": "bcm1",
    "aula_id": "bcm1_a4",
    "tema": "bcm1_a4",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "As proteínas são polímeros de aminoácidos. Qual o nome da ligação covalente que une dois aminoácidos em uma cadeia polipeptídica?),",
    "opcoes": [
      "A) Ligação Peptídica.",
      "B) Ligação Glicosídica.",
      "C) Ligação Fosfodiéster.",
      "D) Ponte de Hidrogênio."
    ],
    "explicacao_geral": "A ligação ocorre entre o grupamento carboxila de um aminoácido e o grupamento amina de outro.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **ligação peptídica** é a base da estrutura primária das proteínas.",
      "B": "[INCORRETA] Liga açúcares.",
      "C": "[INCORRETA] Liga nucleotídeos no DNA/RNA.",
      "D": "[INCORRETA] É uma ligação fraca (intermolecular) que estabiliza estruturas secundárias e terciárias."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3458,
    "materia": "bcm1",
    "aula_id": "bcm1_a4",
    "tema": "bcm1_a4",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "A 'Estrutura Primária' de uma proteína refere-se a:),",
    "opcoes": [
      "A) O dobramento em hélices e folhas plissadas.",
      "B) A associação de várias cadeias polipeptídicas juntas.",
      "C) A sequência linear exata de aminoácidos na cadeia.",
      "D) O formato tridimensional final da proteína."
    ],
    "explicacao_geral": "A sequência de aminoácidos é determinada geneticamente e define todo o dobramento futuro.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Esta é a estrutura secundária.",
      "B": "[INCORRETA] Esta é a estrutura quaternária.",
      "C": "[CORRETA] A **Estrutura Primária** é a ordem dos **aminoácidos** na 'fila'.",
      "D": "[INCORRETA] Esta é a estrutura terciária."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3459,
    "materia": "bcm1",
    "aula_id": "bcm1_a4",
    "tema": "bcm1_a4",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Um paciente com febre altíssima (superior a 41°C) corre o risco de morte devido, entre outros fatores, à perda da função de suas enzimas essenciais. Qual o nome desse processo de perda da conformação tridimensional das proteínas?),",
    "opcoes": [
      "A) Hidratação celular.",
      "B) Desnaturação.",
      "C) Fotossíntese.",
      "D) Replicação de proteínas."
    ],
    "explicacao_geral": "A desnaturação rompe as ligações fracas (pontes de H, interações hidrofóbicas) que mantêm o formato da proteína.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Entrada de água.",
      "B": "[CORRETA] A **desnaturação** torna a proteína inativa por perda de **forma**.",
      "C": "[INCORRETA] Processo energético vegetal.",
      "D": "[INCORRETA] Proteínas não se replicam diretamente."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3460,
    "materia": "bcm1",
    "aula_id": "bcm1_a4",
    "tema": "bcm1_a4",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "As chaperonas moleculares são proteínas essenciais para a saúde celular. Qual a sua principal função?),",
    "opcoes": [
      "A) Transportar oxigênio pelo sangue.",
      "B) Digerir restos celulares.",
      "C) Secretar hormônios no citoplasma.",
      "D) Auxiliar no dobramento correto de outras proteínas recém-sintetizadas, evitando agregações tóxicas."
    ],
    "explicacao_geral": "Falhas no dobramento proteico estão ligadas a doenças como Alzheimer e Parkinson.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Função da hemoglobina.",
      "B": "[INCORRETA] Função das proteases lisossomais.",
      "C": "[INCORRETA] Função de glândulas endócrinas.",
      "D": "[CORRETA] As **Chaperonas** garantem o **folding** (dobramento) correto da proteína."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3461,
    "materia": "bcm1",
    "aula_id": "bcm1_a4",
    "tema": "bcm1_a4",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A Anemia Falciforme é causada pela substituição de um único aminoácido (ácido glutâmico por valina) na cadeia da hemoglobina. Isso demonstra que um erro em qual nível de organização proteica impacta toda a função da molécula?),",
    "opcoes": [
      "A) Apenas no nível quaternário.",
      "B) Apenas no nível secundário.",
      "C) Nível Primário.",
      "D) Não impacta, pois um aminoácido é irrelevante."
    ],
    "explicacao_geral": "A mutação genética altera a sequência primária, o que colapsa toda a estrutura e função final.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A forma quaternária é afetada, mas a CAUSA é no nível primário.",
      "B": "[INCORRETA] A alfahélice pode sofrer alterações indiretamente.",
      "C": "[CORRETA] A alteração na **sequência primária** é a base molecular da **Anemia Falciforme**.",
      "D": "[INCORRETA] Na biologia molecular, um único átomo ou resíduo pode ser decisivo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3462,
    "materia": "bcm1",
    "aula_id": "bcm1_a4",
    "tema": "bcm1_a4",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "As proteínas podem ser classificadas como Fibrosas ou Globulares. Qual o exemplo clássico de uma proteína fibrosa indispensável para a integridade da pele e dos tendões?),",
    "opcoes": [
      "A) Colágeno.",
      "B) Hemoglobina.",
      "C) Insulina.",
      "D) Albumina."
    ],
    "explicacao_geral": "Proteínas fibrosas são alongadas e conferem resistência e rigidez mecânica.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Colágeno** é a proteína mais abundante do corpo e é de natureza **fibrosa**.",
      "B": "[INCORRETA] Proteína globular de transporte.",
      "C": "[INCORRETA] Hormônio globular.",
      "D": "[INCORRETA] Principal proteína transportadora do plasma (globular)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3463,
    "materia": "bcm1",
    "aula_id": "bcm1_a4",
    "tema": "bcm1_a4",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Aminoácidos essenciais são aqueles que o organismo humano não é capaz de sintetizar em quantidades suficientes. Como eles são obtidos e por que são cruciais?),",
    "opcoes": [
      "A) São obtidos pela exposição solar; cruciais para a cor da pele.",
      "B) São obtidos exclusivamente pela dieta; cruciais para que o corpo possa construir todas as suas proteínas necessárias.",
      "C) São obtidos a partir da respiração pulmonar; cruciais para a fala.",
      "D) O corpo humano não precisa de aminoácidos essenciais."
    ],
    "explicacao_geral": "A deficiência de um único aminoácido essencial pode interromper a síntese de diversas proteínas vitais.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Referência à Vitamina D.",
      "B": "[CORRETA] A **dieta (proteínas animais ou combinações vegetais)** fornece os **aminoácidos essenciais**.",
      "C": "[INCORRETA] Absurdo biológico.",
      "D": "[INCORRETA] Sem eles, a síntese proteica é deficitária."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3464,
    "materia": "bcm1",
    "aula_id": "bcm1_a4",
    "tema": "bcm1_a4",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A albumina é a principal proteína do plasma sanguíneo e responsável por manter a pressão osmótica coloidal. Se o fígado para de produzir albumina (insuficiência hepática), qual sintoma clínico é esperado no paciente?),",
    "opcoes": [
      "A) Queda de cabelo apenas.",
      "B) Melhora da oxigenação.",
      "C) Febre persistente.",
      "D) Edema (inchaço), pois a água sai dos vasos para os tecidos."
    ],
    "explicacao_geral": "A falta de proteínas no sangue diminui o poder de 'segurar' a água dentro do vaso sanguíneo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pode ocorrer na desnutrição grave, mas o edema é o sinal principal.",
      "B": "[INCORRETA] A oxigenação não depende da albumina diretamente.",
      "C": "[INCORRETA] Albumina não é reguladora térmica.",
      "D": "[CORRETA] A hipoalbuminemia gera **Edema** por queda da **pressão oncótica**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bcm1_a4 adicionadas.`);
