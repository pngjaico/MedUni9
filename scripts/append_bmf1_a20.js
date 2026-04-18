import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3153,
    "materia": "bmf1",
    "aula_id": "bmf1_a20",
    "tema": "bmf1_a20",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O intestino delgado é o principal local de absorção de nutrientes. Quais são as três divisões anatômicas do intestino delgado, na ordem em que o quimo as percorre?",
    "opcoes": [
      "A) Jejuno, Íleo e Ceco.",
      "B) Duodeno, Jejuno e Íleo.",
      "C) Esôfago, Estômago e Duodeno.",
      "D) Cólon Ascendente, Transverso e Descendente."
    ],
    "explicacao_geral": "O intestino delgado começa no piloro e termina na válvula ileocecal.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O ceco é a primeira parte do intestino grosso.",
      "B": "[CORRETA] O **duodeno** é a porção inicial fixa, o **jejuno** é o médio e o **íleo** a porção final.",
      "C": "[INCORRETA] Órgãos superiores ao intestino.",
      "D": "[INCORRETA] Divisões do intestino grosso."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3154,
    "materia": "bmf1",
    "aula_id": "bmf1_a20",
    "tema": "bmf1_a20",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Para aumentar a superfície de absorção, a mucosa do intestino delgado apresenta projeções em forma de dedos. Como se chamam essas estruturas?",
    "opcoes": [
      "A) Vilosidades intestinais.",
      "B) Haustros.",
      "C) Rugas gástricas.",
      "D) Tênias."
    ],
    "explicacao_geral": "As vilosidades, junto com as microvilosidades, aumentam a área de contato em centenas de vezes.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] As **vilosidades** são as Dobras da mucosa típicas do delgado.",
      "B": "[INCORRETA] Haustros são saculações do intestino grosso.",
      "C": "[INCORRETA] Rugas gástricas permitem a expansão do estômago.",
      "D": "[INCORRETA] Tênias são fitas longitudinais de músculo liso no intestino grosso."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3155,
    "materia": "bmf1",
    "aula_id": "bmf1_a20",
    "tema": "bmf1_a20",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "No duodeno, existem glândulas específicas na camada submucosa que secretam muco alcalino para neutralizar a acidez do quimo vindo do estômago. Essas glândulas são chamadas de:",
    "opcoes": [
      "A) Células de Paneth.",
      "B) Placas de Peyer.",
      "C) Glândulas de Brunner.",
      "D) Criptas de Lieberkühn."
    ],
    "explicacao_geral": "O duodeno precisa proteger sua mucosa contra o pH baixo do suco gástrico.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Células de Paneth secretam lisozina para controle bacteriano.",
      "B": "[INCORRETA] Placas de Peyer são nódulos linfáticos abundantes no íleo.",
      "C": "[CORRETA] As **glândulas de Brunner** (submucosas) são exclusivas do **duodeno**.",
      "D": "[INCORRETA] Criptas de Lieberkühn são invaginações entre as vilosidades presentes em todo o intestino."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3156,
    "materia": "bmf1",
    "aula_id": "bmf1_a20",
    "tema": "bmf1_a20",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual estrutura do intestino grosso é uma pequena bolsa tubular, rica em tecido linfoide, que se projeta do ceco e é frequentemente local de processos inflamatórios agudos?",
    "opcoes": [
      "A) Sigmoide.",
      "B) Reto.",
      "C) Divertículo de Meckel.",
      "D) Apêndice Vermiforme."
    ],
    "explicacao_geral": "A inflamação desta estrutura causa o quadro de 'abdome agudo inflamatório' mais comum.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sigmoide é a parte final do cólon.",
      "B": "[INCORRETA] Reto é a porção de armazenamento de fezes antes do ânus.",
      "C": "[INCORRETA] Anomalia congênita no delgado, não no ceco.",
      "D": "[CORRETA] O **apêndice vermiforme** é a estrutura descrita, alvo da apendicite."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3157,
    "materia": "bmf1",
    "aula_id": "bmf1_a20",
    "tema": "bmf1_a20",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O intestino grosso possui características externas que o diferenciam visualmente do delgado. Quais são as três fitas longitudinais de músculo liso que percorrem o cólon?",
    "opcoes": [
      "A) Tênias do Cólon.",
      "B) Haustros.",
      "C) Pregas Circulares.",
      "D) Meso."
    ],
    "explicacao_geral": "As tênias são mais curtas que o tubo, o que causa as saculações características.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] As **tênias** (mesocolónica, omental e livre) são as marcas visíveis do intestino grosso.",
      "B": "[INCORRETA] Haustros são as saculações (bolsas).",
      "C": "[INCORRETA] Pregas circulares (válvulas de Kerckring) são do intestino delgado.",
      "D": "[INCORRETA] Meso é o tecido que sustenta e leva vasos aos órgãos intraperitoneais."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3158,
    "materia": "bmf1",
    "aula_id": "bmf1_a20",
    "tema": "bmf1_a20",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Um paciente de 60 anos com constipação crônica apresenta dor no quadrante inferior esquerdo. O RX mostra inflamação de pequenas herniações da mucosa através da parede do cólon. Como se chama essa condição?",
    "opcoes": [
      "A) Apendicite.",
      "B) Diverticulite.",
      "C) Doença de Crohn.",
      "D) Pólipo Intestinal."
    ],
    "explicacao_geral": "Os divertículos são comuns no cólon sigmoide devido à alta pressão intraluminal.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ocorre tipicamente no quadrante inferior direito (fossa ilíaca direita).",
      "B": "[CORRETA] A **diverticulite** (inflamação dos divertículos) é uma patologia comum do cólon.",
      "C": "[INCORRETA] Doença inflamatória intestinal que pode atingir qualquer parte do tubo.",
      "D": "[INCORRETA] Pólipos são projeções para dentro da luz do órgão, não herniações para fora."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3159,
    "materia": "bmf1",
    "aula_id": "bmf1_a20",
    "tema": "bmf1_a20",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual a principal função fisiológica do intestino grosso?",
    "opcoes": [
      "A) Digestão química de proteínas.",
      "B) Produção de bile.",
      "C) Absorção de água e eletrólitos e formação do bolo fecal.",
      "D) Secreção de insulina."
    ],
    "explicacao_geral": "Após a absorção de nutrientes no delgado, o grosso processa o resíduo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ocorre no estômago e delgado.",
      "B": "[INCORRETA] Produção de bile é função hepática.",
      "C": "[CORRETA] O **intestino grosso** desidrata o quimo, transformando-o em fezes sólidas.",
      "D": "[INCORRETA] Função pancreática."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3160,
    "materia": "bmf1",
    "aula_id": "bmf1_a20",
    "tema": "bmf1_a20",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "O canal anal possui dois esfíncteres que controlam a defecação. Qual deles é composto por músculo estriado esquelético e está sob controle voluntário?",
    "opcoes": [
      "A) Esfíncter liso de Houston.",
      "B) Esfíncter Anal Interno.",
      "C) Válvula de Morgagni.",
      "D) Esfíncter Anal Externo."
    ],
    "explicacao_geral": "O controle da defecação envolve um reflexo involuntário e um comando consciente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Houston refere-se a pregas transversais do reto.",
      "B": "[INCORRETA] O interno é de músculo liso e controle involuntário (SNA).",
      "C": "[INCORRETA] Estrutura da mucosa anal, não um esfíncter.",
      "D": "[CORRETA] O **esfíncter anal externo** é voluntário e nos permite 'segurar' as fezes."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf1_a20 adicionadas.`);
