import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4017,
    "materia": "mad1",
    "aula_id": "mad1_a23",
    "tema": "mad1_a23",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A 'Tolerância Imunológica' é o estado de não responsividade a antígenos específicos. Qual o nome do processo que ocorre no TIMO para eliminar linfócitos T autorreativos?),",
    "opcoes": [
      "A) Tolerância Periférica.",
      "B) Tolerância Central.",
      "C) Anergia.",
      "D) Desamparo clonal."
    ],
    "explicacao_geral": "A tolerância central garante que o 'estoque' inicial de linfócitos não ataque o próprio corpo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ocorre nos tecidos, após a maturação inicial.",
      "B": "[CORRETA] A **Tolerância Central** ocorre nos órgãos linfoides **primários**.",
      "C": "[INCORRETA] Mecanismo de tolerância periférica (inatividade funcional).",
      "D": "[INCORRETA] Termo inexistente ou incorreto aqui."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4018,
    "materia": "mad1",
    "aula_id": "mad1_a23",
    "tema": "mad1_a23",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual subpopulação de linfócitos T é responsável por SUPRIMIR a resposta imune de outras células, mantendo a homeostase e prevenindo a autoimunidade?),",
    "opcoes": [
      "A) Linfócitos T CD8 citotóxicos.",
      "B) Linfócitos Th17.",
      "C) Linfócitos B de memória.",
      "D) Linfócitos T Reguladores (Tregs)."
    ],
    "explicacao_geral": "As Tregs expressam o fator de transcrição FoxP3 e produzem IL-10 e TGF-beta.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Matam células alvo.",
      "B": "[INCORRETA] Pró-inflamatórias.",
      "C": "[INCORRETA] Produzem anticorpos.",
      "D": "[CORRETA] As **Tregs** são as **policiais** do sistema imunitário."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4019,
    "materia": "mad1",
    "aula_id": "mad1_a23",
    "tema": "mad1_a23",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O 'Mimetismo Molecular' é uma causa frequente de autoimunidade pós-infecciosa. Como este mecanismo atua?),",
    "opcoes": [
      "A) Um antígeno do patógeno é muito parecido com um antígeno do próprio corpo, fazendo com que anticorpos contra o patógeno ataquem os tecidos do hospedeiro por engano.",
      "B) O patógeno se fantasia de linfócito.",
      "C) O vírus ensina as células a se suicidarem.",
      "D) O antibiótico altera o DNA do paciente."
    ],
    "explicacao_geral": "O exemplo clássico é a Febre Reumática (Anticorpos anti-Streptococcus que atacam as válvulas cardíacas).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Mimetismo Molecular** gera um **erro de reconhecimento** do sistema imune.",
      "B": "[INCORRETA] Camuflagem, mas não mimetismo de indução autoimune clássica.",
      "C": "[INCORRETA] Absurdo.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4020,
    "materia": "mad1",
    "aula_id": "mad1_a23",
    "tema": "mad1_a23",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Quando um linfócito reconhece um antígeno mas NÃO recebe o segundo sinal de ativação (co-estimulação), ele entra em um estado de inatividade prolongada chamado:),",
    "opcoes": [
      "A) Apoptose.",
      "B) Proliferação clonal.",
      "C) Anergia.",
      "D) Ativação Th2."
    ],
    "explicacao_geral": "A anergia é um mecanismo de tolerância periférica que impede o ataque a antígenos inofensivos ou próprios.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Morte celular programada.",
      "B": "[INCORRETA] Expansão do número de células.",
      "C": "[CORRETA] A **Anergia** é o estado de **linfócito 'desligado'**.",
      "D": "[INCORRETA] Tipo de diferenciação ativa."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4021,
    "materia": "mad1",
    "aula_id": "mad1_a23",
    "tema": "mad1_a23",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Antígenos localizados em locais como o interior do OLHO ou TESTÍCULOS são chamados de 'sequestrados'. O que ocorre se houver um trauma nestes locais?),",
    "opcoes": [
      "A) Nada, o corpo já os conhece.",
      "B) Pode haver uma resposta autoimune violenta, pois esses antígenos nunca foram apresentados ao sistema imune durante a maturação no timo (quebra de 'ignorância imunológica').",
      "C) O trauma cura o sistema imune.",
      "D) O paciente ganha super visão."
    ],
    "explicacao_geral": "O fenômeno do olho que ataca o outro após trauma em um deles chama-se Oftalmia Simpática.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] São locais de 'privilégio imunológico', desconhecidos pelo sistema circulante.",
      "B": "[CORRETA] A exposição de **Antígenos Sequestrados** pode gerar **Autoimunidade Pós-Traumática**.",
      "C": "[INCORRETA] Absurdo.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4022,
    "materia": "mad1",
    "aula_id": "mad1_a23",
    "tema": "mad1_a23",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A predisposição genética para doenças autoimunes está frequentemente ligada a polimorfismos em quais genes?),",
    "opcoes": [
      "A) Genes produtores de insulina.",
      "B) Genes da cor dos olhos.",
      "C) Genes da vitamina D.",
      "D) Genes do MHC (ou HLA em humanos)."
    ],
    "explicacao_geral": "Exemplo: HLA-B27 associado à Espondilite Anquilosante.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pode haver falha, mas a base imunológica de reconhecimento é o HLA.",
      "B": "[INCORRETA] Irrelevante.",
      "C": "[INCORRETA] Modulam a resposta, mas não definem a susceptibilidade de reconhecimento original.",
      "D": "[CORRETA] O **HLA** é o principal determinante genético da **Autoimunidade**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4023,
    "materia": "mad1",
    "aula_id": "mad1_a23",
    "tema": "mad1_a23",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Qual a principal citocina supressora produzida pelas células T Reguladoras para 'acalmar' o sistema imune?),",
    "opcoes": [
      "A) IL-10 e TGF-beta.",
      "B) TNF-alfa.",
      "C) IL-1 e IL-6.",
      "D) Adrenalina."
    ],
    "explicacao_geral": "Essas citocinas inibem a ativação de macrófagos e outros linfócitos.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **IL-10** é a citocina de **paz imunológica**.",
      "B": "[INCORRETA] Potente citocina pró-inflamatória.",
      "C": "[INCORRETA] Citocinas da inflamação aguda.",
      "D": "[INCORRETA] Hormônio."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4024,
    "materia": "mad1",
    "aula_id": "mad1_a23",
    "tema": "mad1_a23",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O 'Lúpus Eritematoso Sistêmico' (LES) é o protótipo de doença autoimune multissistêmica. Qual o padrão de lesão imunológica predominante?),",
    "opcoes": [
      "A) Hipersensibilidade Tipo I.",
      "B) Citotoxicidade direta por células NK.",
      "C) Hipersensibilidade Tipo III (Depósito de imunocomplexos circulantes que atacam glomérulos, articulações e vasos).",
      "D) Deficiência de anticorpos."
    ],
    "explicacao_geral": "O LES cursa com consumo de Complemento e inflamação vascular disseminada.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Alergias.",
      "B": "[INCORRETA] Não é o mecanismo principal de lesão tecidual no LES.",
      "C": "[CORRETA] O **Lúpus** é uma doença por **Imunocomplexos (Tipo III)**.",
      "D": "[INCORRETA] Pelo contrário, há produção excessiva de anticorpos (auto-anticorpos)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad1_a23 adicionadas.`);
