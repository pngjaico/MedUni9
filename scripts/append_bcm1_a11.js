import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3513,
    "materia": "bcm1",
    "aula_id": "bcm1_a11",
    "tema": "bcm1_a11",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A matriz extracelular (MEC) preenche o espaço entre as células. Qual proteína é o principal componente estrutural da MEC, conferindo resistência à tração?),",
    "opcoes": [
      "A) Actina muscular.",
      "B) Colágeno (especialmente do tipo I).",
      "C) Hemoglobina.",
      "D) Insulina."
    ],
    "explicacao_geral": "O colágeno é a proteína mais abundante do reino animal e forma a ossada dos tecidos conjuntivos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Proteína intracelular do citoesqueleto.",
      "B": "[CORRETA] O **Colágeno** é o grande componente da **Matriz Extracelular**.",
      "C": "[INCORRETA] Proteína transportadora de gases no sangue.",
      "D": "[INCORRETA] Hormônio circulante."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3514,
    "materia": "bcm1",
    "aula_id": "bcm1_a11",
    "tema": "bcm1_a11",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "As junções celulares permitem a comunicação e união entre células. Qual junção é responsável por vedar o espaço entre células epiteliais, impedindo a passagem livre de moléculas?),",
    "opcoes": [
      "A) Desmossomos.",
      "B) Junções Comunicantes (Gap).",
      "C) Hemidessomos.",
      "D) Junções de Oclusão (Tight Junctions)."
    ],
    "explicacao_geral": "As junções de oclusão mantêm a polaridade celular e a barreira hematoencefálica/intestinal.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Junção de ancoragem mecânica.",
      "B": "[INCORRETA] Permitem a passagem de íons entre células.",
      "C": "[INCORRETA] Ancoram a célula na lâmina basal.",
      "D": "[CORRETA] As **Junções de Oclusão** formam o **selo de impermeabilidade**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3515,
    "materia": "bcm1",
    "aula_id": "bcm1_a11",
    "tema": "bcm1_a11",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "As 'Integrinas' são proteínas de transmembrana fundamentais para a adesão. Qual a sua função de conexão bidirecional?),",
    "opcoes": [
      "A) Conectar os componentes da matriz extracelular (como a fibronectina) ao citoesqueleto (microfilamentos de actina).",
      "B) Produzir colágeno dentro do núcleo.",
      "C) Impedir a entrada de água na célula.",
      "D) Destruir vírus invasores."
    ],
    "explicacao_geral": "As integrinas permitem que a mecânica externa altere a sinalização interna (mecanotransdução).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] As **Integrinas** são a ponte entre o **meio externo e o citoesqueleto**.",
      "B": "[INCORRETA] Colágeno é sintetizado no RE/Golgi e montado fora da célula.",
      "C": "[INCORRETA] As aquaporinas lidam com o fluxo de água.",
      "D": "[INCORRETA] Função do sistema imune."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3516,
    "materia": "bcm1",
    "aula_id": "bcm1_a11",
    "tema": "bcm1_a11",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Uma doença autoimune chamada Pênfigo vulgar causa bolhas graves na pele e mucosas. Qual o alvo molecular dos autoanticorpos nessa patologia?),",
    "opcoes": [
      "A) Mutação no DNA nuclear.",
      "B) Destruição das mitocôndrias.",
      "C) Proteínas de adesão dos Desmossomos (Desmogleínas), rompendo a união entre os queratinócitos.",
      "D) Falta de queratina na dieta."
    ],
    "explicacao_geral": "Sem os desmossomos, as células da pele perdem a adesão entre si (acantólise).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Não é uma causa genética de mutação, mas sim um ataque imunológico.",
      "B": "[INCORRETA] Mitocôndrias não são o alvo principal do Pênfigo.",
      "C": "[CORRETA] O **Pênfigo** ataca os **Desmossomos**, levando ao descolamento celular.",
      "D": "[INCORRETA] Absurdo nutricional."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3517,
    "materia": "bcm1",
    "aula_id": "bcm1_a11",
    "tema": "bcm1_a11",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Os Proteoglicanos são moléculas ricas em carboidratos (GAGs) na matriz. Qual a principal propriedade física que elas conferem à MEC, especialmente nas cartilagens?),",
    "opcoes": [
      "A) Atuam como fios de aço rígidos.",
      "B) Atraem íons Na+ e água por osmose, formando um gel hidratado que resiste a forças de compressão.",
      "C) Impedem a passagem de oxigênio.",
      "D) São responsáveis pela cor da pele."
    ],
    "explicacao_geral": "A carga negativa dos GAGs atrai água, mantendo os tecidos inchados e resistentes a impactos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Papel mecânico das fibras de colágeno.",
      "B": "[CORRETA] Os **Proteoglicanos** garantem a **hidratação e resistência ao peso** nas articulações.",
      "C": "[INCORRETA] A MEC é permeável a nutrientes e gases.",
      "D": "[INCORRETA] Papel da melanina."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3518,
    "materia": "bcm1",
    "aula_id": "bcm1_a11",
    "tema": "bcm1_a11",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "As junções do tipo 'Gap' (Junções Comunicantes) são fundamentais no músculo cardíaco. Qual a sua função nesse tecido?),",
    "opcoes": [
      "A) Ancorar o coração nas costelas.",
      "B) Impedir a contração muscular.",
      "C) Produzir adrenalina localmente.",
      "D) Permitir o acoplamento elétrico e a passagem rápida de íons, garantindo que as células cardíacas se contraiam em sincronia (sincício funcional)."
    ],
    "explicacao_geral": "As conexinas formam poros (conexons) que unem os citoplasmas diretamente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O coração é envolto pelo pericárdio, mas junções Gap são celulares.",
      "B": "[INCORRETA] Elas coordenam e facilitam a contração.",
      "C": "[INCORRETA] Hormônios chegam via sangue ou terminações nervosas.",
      "D": "[CORRETA] As **Junções Gap** são os mediadores da **comunicação elétrica** imediata."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3519,
    "materia": "bcm1",
    "aula_id": "bcm1_a11",
    "tema": "bcm1_a11",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A metástase cancerosa envolve a capacidade das células tumorais de romperem a lâmina basal e migrarem para outros tecidos. Qual grupo de enzimas é frequentemente hiperexpressado por essas células para degradar a MEC?),",
    "opcoes": [
      "A) Metaloproteinases da Matriz (MMPs).",
      "B) DNA Polimerases.",
      "C) Enzimas da via glicolítica.",
      "D) Ribossomos mitocondriais."
    ],
    "explicacao_geral": "As MMPs 'abrem caminho' para as células cancerosas invadirem vasos sanguíneos e tecidos distantes.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] As **MMPs** são as ferramentas de **invasão tecidual** do câncer.",
      "B": "[INCORRETA] Atuam na replicação do DNA, não na degradação da matriz.",
      "C": "[INCORRETA] Atuam na produção de energia rápida.",
      "D": "[INCORRETA] Sintetizam proteínas, não são enzimas degradativas de matriz."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3520,
    "materia": "bcm1",
    "aula_id": "bcm1_a11",
    "tema": "bcm1_a11",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Qual a principal diferença funcional entre Desmossomos e Hemidessomos?),",
    "opcoes": [
      "A) Desmossomos ligam células ao oxigênio; Hemidessomos ao sangue.",
      "B) Desmossomos conectam células adjacentes (lateralmente); Hemidessomos conectam a célula à lâmina basal (ancoragem basal).",
      "C) Ambos fazem a mesma coisa, mudando apenas o nome conforme a célula.",
      "D) Desmossomos são feitos de lipídios; Hemidessomos de açúcar."
    ],
    "explicacao_geral": "Os hemidessomos utilizam integrinas para ligar o citoesqueleto à matriz extracelular (lâmina basal).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Não transportam gases.",
      "B": "[CORRETA] **Desmo = Célula-Célula**; **Hemi = Célula-Matriz**.",
      "C": "[INCORRETA] Têm proteínas e funções distintas.",
      "D": "[INCORRETA] Ambos são complexos proteicos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bcm1_a11 adicionadas.`);
