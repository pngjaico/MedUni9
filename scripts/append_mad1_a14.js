import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3945,
    "materia": "mad1",
    "aula_id": "mad1_a14",
    "tema": "mad1_a14",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O vírus Influenza (gripe) sofre mutações constantes. Como é chamado o fenômeno de pequenas mutações pontuais graduais que geram a necessidade de vacinas anuais?),",
    "opcoes": [
      "A) Antigenic Shift (Salto antigênico).",
      "B) Antigenic Drift (Deriva antigênica).",
      "C) Conjugação viral.",
      "D) Reassortimento gênico."
    ],
    "explicacao_geral": "O Drift ocorre por erros da RNA polimerase durante a replicação.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Mudança brusca por rearranjo de segmentos, causando pandemias.",
      "B": "[CORRETA] O **Antigenic Drift** justifica a **vacinação anual**.",
      "C": "[INCORRETA] Processo bacteriano.",
      "D": "[INCORRETA] Sinônimo de Shift (troca de segmentos entre vírus diferentes)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3946,
    "materia": "mad1",
    "aula_id": "mad1_a14",
    "tema": "mad1_a14",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Um sinal patognomônico (exclusivo) do Sarampo, que aparece na mucosa bucal antes do exantema, é chamado de:),",
    "opcoes": [
      "A) Manchas de Roth.",
      "B) Língua em framboesa.",
      "C) Placas de Peyer.",
      "D) Manchas de Koplik (pequenos pontos brancos cercados por halo avermelhado)."
    ],
    "explicacao_geral": "Localizam-se geralmente na altura dos molares superiores.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Fundo de olho na endocardite.",
      "B": "[INCORRETA] Escarlatina ou Doença de Kawasaki.",
      "C": "[INCORRETA] Tecido linfático intestinal.",
      "D": "[CORRETA] As **Manchas de Koplik** confirmam o diagnóstico de **Sarampo**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3947,
    "materia": "mad1",
    "aula_id": "mad1_a14",
    "tema": "mad1_a14",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A 'Varicela' (Catapora) apresenta uma característica clássica no exame físico das lesões de pele. Qual é ela?),",
    "opcoes": [
      "A) Polimorfismo regional (presença simultânea de pápulas, vesículas e crostas na mesma região do corpo).",
      "B) Todas as lesões aparecem e somem juntas (monomorfismo).",
      "C) As lesões ocorrem apenas nas plantas dos pés.",
      "D) Não há lesões de pele na varicela."
    ],
    "explicacao_geral": "Diferentes 'safras' de lesões surgem ao longo de alguns dias.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Polimorfismo da Varicela** indica diferentes estágios de **evolução das lesões**.",
      "B": "[INCORRETA] Característica da Varíola (Smallpox) ou farmacodermias.",
      "C": "[INCORRETA] Doença Mão-Pé-Boca (Coxsackie).",
      "D": "[INCORRETA] É uma doença exantemática primária."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3948,
    "materia": "mad1",
    "aula_id": "mad1_a14",
    "tema": "mad1_a14",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual a principal preocupação clínica em relação à infecção por Rubéola em uma mulher grávida suscetível (não vacinada)?),",
    "opcoes": [
      "A) Perda de peso da mãe.",
      "B) Queda de cabelo severa.",
      "C) Síndrome da Rubéola Congênita (SRC), podendo causar catarata, surdez e cardiopatias no feto.",
      "D) O vírus não atravessa a placenta."
    ],
    "explicacao_geral": "O maior risco ocorre no primeiro trimestre da gestação.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Coadjuvante à infecção viral febril.",
      "B": "[INCORRETA] Sem relação clássica.",
      "C": "[CORRETA] A **Rubéola Congênita** é uma condição **teratogênica** grave.",
      "D": "[INCORRETA] É um clássico patógeno do acrônimo TORCH."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3949,
    "materia": "mad1",
    "aula_id": "mad1_a14",
    "tema": "mad1_a14",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "O vírus SARS-CoV-2 (COVID-19) utiliza qual receptor da célula humana para realizar a adsorção e entrada?),",
    "opcoes": [
      "A) Receptor CD4.",
      "B) ECA 2 (Enzima Conversora de Angiotensina 2).",
      "C) Receptor de Insulina.",
      "D) Canal de Cálcio."
    ],
    "explicacao_geral": "O receptor ECA2 está presente em pulmões, coração, rins e intestinos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Alvo do HIV.",
      "B": "[CORRETA] O **SARS-CoV-2** liga-se à **ECA 2** via proteína Spike.",
      "C": "[INCORRETA] Relacionado ao metabolismo da glicose.",
      "D": "[INCORRETA] Relacionado à sinalização celular e contração."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3950,
    "materia": "mad1",
    "aula_id": "mad1_a14",
    "tema": "mad1_a14",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente idoso apresenta dor intensa em 'queimação' no tórax, seguida pelo aparecimento de vesículas que acompanham um dermátomo (trajeto de um nervo). Qual o diagnóstico?),",
    "opcoes": [
      "A) Alergia de contato.",
      "B) Catapora comum.",
      "C) Infarto do miocárdio.",
      "D) Herpes-Zóster (Cobreiro)."
    ],
    "explicacao_geral": "Resulta da reativação do vírus Varicela-Zóster que estava latente nos gânglios sensitivos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Não seguiria um dermátomo nervoso perfeitamente.",
      "B": "[INCORRETA] Infecção primária, disseminada e não localizada.",
      "C": "[INCORRETA] Causa dor, mas não lesões vesiculares localizadas na pele.",
      "D": "[CORRETA] O **Herpes-Zóster** é a **reativação da Varicela**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3951,
    "materia": "mad1",
    "aula_id": "mad1_a14",
    "tema": "mad1_a14",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A vacina 'Tríplice Viral' (SCR) protege contra quais doenças?),",
    "opcoes": [
      "A) Sarampo, Caxumba e Rubéola.",
      "B) Sífilis, Catapora e Raiva.",
      "C) Sapinho, Conjuntivite e Reumatismo.",
      "D) Sarampo, COVID e Rotavírus."
    ],
    "explicacao_geral": "É uma vacina de vírus vivos atenuados.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Vacina SCR** previne **Sarampo, Caxumba e Rubéola**.",
      "B": "[INCORRETA] Não existe vacina de rotina para sífilis; as outras são vacinas separadas.",
      "C": "[INCORRETA] Absurdo.",
      "D": "[INCORRETA] Vacinas diferentes."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3952,
    "materia": "mad1",
    "aula_id": "mad1_a14",
    "tema": "mad1_a14",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual vírus respiratório é a causa mais comum de bronquiolite em lactentes e crianças pequenas?),",
    "opcoes": [
      "A) Vírus da Raiva.",
      "B) Coronavírus.",
      "C) VSR (Vírus Sincicial Respiratório).",
      "D) Adenovírus."
    ],
    "explicacao_geral": "O VSR causa a formação de sincícios (fusão de células) no epitélio respiratório.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Vírus neurotrópico fatal.",
      "B": "[INCORRETA] Causa resfriado e pneumonias, mas não é o 'campeão' da bronquiolite infantil clássica.",
      "C": "[CORRETA] O **VSR** é o principal agente da **Bronquiolite Neonatal**.",
      "D": "[INCORRETA] Causa conjuntivite e faringite, menos frequente em bronquiolite primária."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad1_a14 adicionadas.`);
