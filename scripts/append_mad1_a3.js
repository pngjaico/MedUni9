import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3857,
    "materia": "mad1",
    "aula_id": "mad1_a3",
    "tema": "mad1_a3",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual termo define o processo que elimina TODAS as formas de vida microbiana, incluindo vírus, bactérias vegetativas e, obrigatoriamente, os esporos?),",
    "opcoes": [
      "A) Desinfecção.",
      "B) Esterilização.",
      "C) Antissepsia.",
      "D) Sanitização."
    ],
    "explicacao_geral": "A esterilização é um processo de 'tudo ou nada'; não existe objeto 'quase' estéril.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Elimina a maioria dos patógenos, mas pode não eliminar esporos.",
      "B": "[CORRETA] A **Esterilização** exige a **destruição de esporos**.",
      "C": "[INCORRETA] Redução de microrganismos em tecidos vivos (pele/mucosa).",
      "D": "[INCORRETA] Termo usado na higiene ambiental/alimentar para níveis seguros."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3858,
    "materia": "mad1",
    "aula_id": "mad1_a3",
    "tema": "mad1_a3",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "O Álcool 70% é amplamente usado na prática clínica. Qual o principal mecanismo de ação do álcool sobre as bactérias?),",
    "opcoes": [
      "A) Destruição da cápsula por radiação.",
      "B) Congelamento do citoplasma.",
      "C) Quebra do DNA por raios UV.",
      "D) Desnaturação de proteínas e dissolução de lipídeos da membrana celular."
    ],
    "explicacao_geral": "A presença de água (30%) é essencial para que o álcool penetre na célula e desnature as proteínas efetivamente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Mecanismo físico-químico errado.",
      "B": "[INCORRETA] Absurdo.",
      "C": "[INCORRETA] Mecanismo da radiação ultravioleta.",
      "D": "[CORRETA] O **Álcool 70%** atua por **Desnaturação Proteica**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3859,
    "materia": "mad1",
    "aula_id": "mad1_a3",
    "tema": "mad1_a3",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A Autoclave é o método de escolha para esterilização de instrumentais cirúrgicos metálicos. Como ela atua?),",
    "opcoes": [
      "A) Calor úmido sob pressão (ex: 121°C por 15-30 min), que promove a coagulação de proteínas.",
      "B) Ar seco superaquecido a 200°C por 5 horas.",
      "C) Banho de água morna com sabão.",
      "D) Congelamento a -80°C."
    ],
    "explicacao_geral": "O vapor de água sob pressão tem maior poder de penetração e eficácia que o calor seco.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Autoclave** utiliza **Calor Úmido** para esterilização.",
      "B": "[INCORRETA] Descrição de estufa (calor seco).",
      "C": "[INCORRETA] Limpeza manual preliminar, não esteriliza.",
      "D": "[INCORRETA] Preserva bactérias em vez de matá-las (usado para estoques de laboratório)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3860,
    "materia": "mad1",
    "aula_id": "mad1_a3",
    "tema": "mad1_a3",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Antes de realizar uma punção venosa, o enfermeiro limpa a pele do paciente com clorexidina. Esse processo é classificado como:),",
    "opcoes": [
      "A) Esterilização tissular.",
      "B) Desinfecção de alto nível.",
      "C) Antissepsia.",
      "D) Degermação apenas."
    ],
    "explicacao_geral": "Antissepsia refere-se ao uso de agentes químicos sobre tecidos vivos para inibir ou destruir microrganismos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Tecidos vivos não podem ser esterilizados (causaria necrose).",
      "B": "[INCORRETA] Termo usado para objetos inanimados (ex: endoscópios).",
      "C": "[CORRETA] A limpeza de tecidos vivos é a **Antissepsia**.",
      "D": "[INCORRETA] Degermação é a remoção mecânica/sabão; antissepsia inclui a ação química antisséptica."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3861,
    "materia": "mad1",
    "aula_id": "mad1_a3",
    "tema": "mad1_a3",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Qual o método de esterilização mais adequado para materiais termossensíveis e descartáveis em larga escala (como seringas plásticas e cateteres)?),",
    "opcoes": [
      "A) Autoclavagem repetida.",
      "B) Radiação Ionizante (raios Gama) ou Óxido de Etileno.",
      "C) Fervura em água a 100°C.",
      "D) Imersão em álcool 70% por 10 segundos."
    ],
    "explicacao_geral": "O calor da autoclave derreteria o plástico; métodos 'frios' são necessários.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Danifica polímeros plásticos comuns.",
      "B": "[CORRETA] **Radiação e Óxido de Etileno** são para **materiais sensíveis ao calor**.",
      "C": "[INCORRETA] Apenas desinfecção, não esteriliza (não mata esporos).",
      "D": "[INCORRETA] Insuficiente para esterilização hospitalar."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3862,
    "materia": "mad1",
    "aula_id": "mad1_a3",
    "tema": "mad1_a3",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A 'Pasteurização' é um método de controle usado principalmente em alimentos (leite, sucos). Em que ele consiste?),",
    "opcoes": [
      "A) Aquecer a 500°C para torrar as bactérias.",
      "B) Uso de venenos químicos potentes.",
      "C) Congelamento rápido a -20°C.",
      "D) Aquecimento moderado seguido de resfriamento rápido, visando eliminar patógenos sem alterar o sabor e as propriedades nutricionais."
    ],
    "explicacao_geral": "Não esteriliza, mas reduz a carga microbiana a níveis seguros para consumo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Destruiria o alimento.",
      "B": "[INCORRETA] Tornaria o alimento tóxico.",
      "C": "[INCORRETA] Não elimina patógenos termosensíveis de forma eficaz.",
      "D": "[CORRETA] A **Pasteurização** controla **patógenos alimentares**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3863,
    "materia": "mad1",
    "aula_id": "mad1_a3",
    "tema": "mad1_a3",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Um laboratório precisa esterilizar um meio de cultura líquido que possui vitaminas que se degradam no calor da autoclave. Qual a técnica indicada?),",
    "opcoes": [
      "A) Filtração em membranas com poros de 0,22 μm.",
      "B) Adição de cloro na amostra.",
      "C) Uso de micro-ondas.",
      "D) Exposição ao sol por 1 hora."
    ],
    "explicacao_geral": "A filtração remove fisicamente as bactérias sem usar calor, preservando as vitaminas e proteínas.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Filtração** é para **líquidos termolábeis**.",
      "B": "[INCORRETA] Altera a composição química e inviabiliza o meio de cultura.",
      "C": "[INCORRETA] Gera calor e degrada componentes.",
      "D": "[INCORRETA] Ineficaz."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3864,
    "materia": "mad1",
    "aula_id": "mad1_a3",
    "tema": "mad1_a3",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Instrumentais que penetram em tecidos estéreis ou sistema vascular (ex: bisturis, agulhas) são classificados como 'Artigos Críticos'. Qual o nível de processamento exigido?),",
    "opcoes": [
      "A) Apenas limpeza com água.",
      "B) Desinfecção de baixo nível.",
      "C) Esterilização.",
      "D) Antissepsia comum."
    ],
    "explicacao_geral": "A classificação de Spaulding define o nível de risco e o processamento necessário.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Risco altíssimo de infecção.",
      "B": "[INCORRETA] Indicado para artigos não críticos (contato com pele íntegra).",
      "C": "[CORRETA] **Artigos Críticos** exigem obrigatoriamente **Esterilização**.",
      "D": "[INCORRETA] Termo usado para tecidos vivos."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad1_a3 adicionadas.`);
