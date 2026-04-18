import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3889,
    "materia": "mad1",
    "aula_id": "mad1_a7",
    "tema": "mad1_a7",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "As Enterobactérias são um grande grupo de bacilos Gram-negativos. Qual prova bioquímica é fundamental para diferenciar o grupo das Enterobactérias da Pseudomonas aeruginosa?),",
    "opcoes": [
      "A) Coloração de Gram.",
      "B) Teste da Oxidase (Enterobactérias -, Pseudomonas +).",
      "C) Teste da Catalase.",
      "D) Crescimento em Agar Sangue."
    ],
    "explicacao_geral": "Pseudomonas é uma não-fermentadora e possui citocromo oxidase.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ambas são Gram-negativas (vermelhas).",
      "B": "[CORRETA] O **Teste da Oxidase** diferencia **Pseudomonas** das Enterobactérias.",
      "C": "[INCORRETA] Ambas tendem a ser positivas.",
      "D": "[INCORRETA] Ambas crescem bem em meios comuns."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3890,
    "materia": "mad1",
    "aula_id": "mad1_a7",
    "tema": "mad1_a7",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual o principal agente causal de Infecção do Trato Urinário (ITU) comunitária em todo o mundo?),",
    "opcoes": [
      "A) Staphylococcus aureus.",
      "B) Pseudomonas aeruginosa.",
      "C) Klebsiella pneumoniae.",
      "D) Escherichia coli (UPEC)."
    ],
    "explicacao_geral": "A E. coli de origem intestinal possui fímbrias (Pili P) que facilitam a ascensão pela uretra.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Menos comum em ITUs não complicadas.",
      "B": "[INCORRETA] Mais comum em ITUs hospitalares ou complicadas.",
      "C": "[INCORRETA] Frequente, mas perde em prevalência para a E. coli.",
      "D": "[CORRETA] A **Escherichia coli** é a campeã das **ITUs comunitárias**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3891,
    "materia": "mad1",
    "aula_id": "mad1_a7",
    "tema": "mad1_a7",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A 'Escherichia coli Entero-hemorrágica' (EHEC), como a cepa O157:H7, é preocupante devido a uma complicação sistêmica grave. Qual é ela?),",
    "opcoes": [
      "A) Síndrome Hemolítico-Urêmica (SHU) - anemia hemolítica, trombocitopenia e insuficiência renal aguda.",
      "B) Paralisia flácida.",
      "C) Queda de cabelo total.",
      "D) Surdez súbita."
    ],
    "explicacao_geral": "A SHU é causada pela Toxina Shiga (verotoxina) que destrói o endotélio capilar renal.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **EHEC** pode evoluir para a temida **SHU**.",
      "B": "[INCORRETA] Mecanismo do botulismo.",
      "C": "[INCORRETA] Sem relação biológica.",
      "D": "[INCORRETA] Sem relação biológica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3892,
    "materia": "mad1",
    "aula_id": "mad1_a7",
    "tema": "mad1_a7",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um paciente apresenta diarreia com sangue e muco (disenteria), febre e dor abdominal intensa. A dose infectante necessária para causar a doença é baixíssima (menos de 100 bactérias). Qual o agente mais provável?),",
    "opcoes": [
      "A) Vibrio cholerae.",
      "B) Salmonella enteritidis.",
      "C) Shigella dysenteriae.",
      "D) Escherichia coli enterotoxigênica (ETEC)."
    ],
    "explicacao_geral": "A Shigella resiste bem ao ácido gástrico, exigindo poucos organismos para iniciar infecção.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Causa diarreia volumosa aquosa ('água de arroz'), sem sangue.",
      "B": "[INCORRETA] Exige dose infectante maior para causar sintomas graves.",
      "C": "[CORRETA] A **Shigella** causa **Disenteria com baixa dose infectante**.",
      "D": "[INCORRETA] Causa a 'diarreia do viajante', aquosa."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3893,
    "materia": "mad1",
    "aula_id": "mad1_a7",
    "tema": "mad1_a7",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A 'Pseudomonas aeruginosa' é um importante patógeno hospitalar. Qual sua característica visual em culturas e feridas de queimados?),",
    "opcoes": [
      "A) Produção de pigmento preto intenso.",
      "B) Produção de pigmentos fluorescentes verde-azulados (pilocianina e pioverdina) e odor adocicado característico.",
      "C) Formação de crostas brancas secas.",
      "D) Coloração roxa brilhante."
    ],
    "explicacao_geral": "Além da cor, destaca-se por ser altamente resistente a desinfetantes e muitos antibióticos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Característica de fungos demáceos ou algumas poucas bactérias raras.",
      "B": "[CORRETA] A **Pseudomonas** é reconhecida pela **cor verde-azulada**.",
      "C": "[INCORRETA] Inespecífico.",
      "D": "[INCORRETA] Sem relação."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3894,
    "materia": "mad1",
    "aula_id": "mad1_a7",
    "tema": "mad1_a7",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual Enterobactéria é famosa por possuir uma cápsula proeminente que dá às colônias um aspecto 'mucoide' e é causa frequente de pneumonia necrotizante em etilistas?),",
    "opcoes": [
      "A) Salmonella typhi.",
      "B) Escherichia coli.",
      "C) Proteus mirabilis.",
      "D) Klebsiella pneumoniae."
    ],
    "explicacao_geral": "Atualmente, cepas produtoras de carbapenemase (KPC) são um desafio de saúde pública.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Febre tifoide.",
      "B": "[INCORRETA] Colônias não são mucoides.",
      "C": "[INCORRETA] Associada a cálculos renais (produção de urease).",
      "D": "[CORRETA] A **Klebsiella** possui a **Cápsula Mucoide** característica."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3895,
    "materia": "mad1",
    "aula_id": "mad1_a7",
    "tema": "mad1_a7",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "O 'Proteus mirabilis' é frequentemente associado a cálculos renais de estruvita. Qual enzima ele produz que altera o pH da urina favorecendo a precipitação de sais?),",
    "opcoes": [
      "A) Urease (quebra ureia em amônia, alcalinizando a urina).",
      "B) Lactase.",
      "C) Amilase.",
      "D) Insulinase."
    ],
    "explicacao_geral": "A urina alcalina (pH > 7) é o ambiente ideal para a formação destes cálculos coraliformes.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Urease do Proteus** causa a **alcalinização urinária**.",
      "B": "[INCORRETA] Digestão de lactose.",
      "C": "[INCORRETA] Digestão de amido.",
      "D": "[INCORRETA] Sem relação."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3896,
    "materia": "mad1",
    "aula_id": "mad1_a7",
    "tema": "mad1_a7",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual agende é o responsável pela 'Febre Tifoide', caracterizada por febre prolongada, dor abdominal e leucopenia?),",
    "opcoes": [
      "A) Salmonella enteritidis.",
      "B) Shigella boydii.",
      "C) Salmonella typhi.",
      "D) Escherichia coli."
    ],
    "explicacao_geral": "Diferente das salmoneloses comuns (gastroenterite), a tifoide é uma infecção sistêmica grave.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Causa diarreia comum (Salmonelose não-tifoide).",
      "B": "[INCORRETA] Causa disenteria localizada.",
      "C": "[CORRETA] A **Salmonella typhi** é o agente da **Febre Tifoide**.",
      "D": "[INCORRETA] Inespecífico aqui."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad1_a7 adicionadas.`);
