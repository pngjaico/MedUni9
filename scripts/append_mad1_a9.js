import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3905,
    "materia": "mad1",
    "aula_id": "mad1_a9",
    "tema": "mad1_a9",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A 'Sífilis' é causada por uma espiroqueta chamada Treponema pallidum. Qual o método padrão para visualizar a bactéria viva diretamente de uma lesão de cancro duro?),",
    "opcoes": [
      "A) Coloração de Gram comum.",
      "B) Microscopia de Campo Escuro.",
      "C) Raios-X de tórax.",
      "D) Coloração de Ziehl-Neelsen."
    ],
    "explicacao_geral": "O Treponema é muito fino para ser visto no microscópio óptico comum e não cora bem pelo Gram.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Treponemas são Gram-indeterminados na prática.",
      "B": "[CORRETA] O **Campo Escuro** permite ver o **Treponema móvel**.",
      "C": "[INCORRETA] Útil em sífilis terciária (aneurisma de aorta), não diagnóstico direto inicial.",
      "D": "[INCORRETA] Para Micobactérias."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3906,
    "materia": "mad1",
    "aula_id": "mad1_a9",
    "tema": "mad1_a9",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Sobre a 'Chlamydia trachomatis', qual sua característica biológica mais distinta que a diferencia das bactérias comuns?),",
    "opcoes": [
      "A) Ela vive no estômago.",
      "B) Tem formato de estrela.",
      "C) Multiplica-se no solo.",
      "D) É um parasita intracelular obrigatório com um ciclo de vida bifásico (Corpo Elementar e Corpo Reticular)."
    ],
    "explicacao_geral": "O Corpo Elementar (CE) é a forma infectante e o Corpo Reticular (CR) é a forma replicativa.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] H. pylori.",
      "B": "[INCORRETA] Fantasia.",
      "C": "[INCORRETA] Não sobrevive fora das células hospedeiras.",
      "D": "[CORRETA] A **Clamídia** possui um **Ciclo de Vida Intracelular** único."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3907,
    "materia": "mad1",
    "aula_id": "mad1_a9",
    "tema": "mad1_a9",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A 'Sífilis Primária' é caracterizada clinicamente pelo 'Cancro Duro'. Qual a sua principal característica?),",
    "opcoes": [
      "A) Ferida única, indolor, com bordos endurecidos e fundo limpo, que desaparece sozinha mesmo sem tratamento.",
      "B) Várias feridas dolorosas que coçam.",
      "C) Manchas vermelhas no corpo todo.",
      "D) Verrugas genitais gigantes."
    ],
    "explicacao_geral": "A cura espontânea da ferida engana o paciente, mas a bactéria continua se disseminando (sífilis secundária).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Cancro Duro** é a marca da **Sífilis Primária**.",
      "B": "[INCORRETA] Sugestivo de Herpes ou Cancro Mole.",
      "C": "[INCORRETA] Característica da Sífilis Secundária.",
      "D": "[INCORRETA] Sugestivo de HPV (Condiloma)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3908,
    "materia": "mad1",
    "aula_id": "mad1_a9",
    "tema": "mad1_a9",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Os 'Mycoplasmas' são bactérias atípicas causadoras de pneumonias. O que os torna INTRINSECAMENTE resistentes aos antibióticos Beta-lactâmicos (como a penicilina)?),",
    "opcoes": [
      "A) Produzem muita beta-lactamase.",
      "B) Vivem dentro da mitocôndria.",
      "C) Eles não possuem parede celular (peptidoglicano), que é o alvo desses antibióticos.",
      "D) São protegidos por uma armadura de metal."
    ],
    "explicacao_geral": "Os micoplasmas possuem apenas uma membrana celular rica em esteróis.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Resistência enzimática em bactérias com parede.",
      "B": "[INCORRETA] Parasitas extracelulares na mucosa respiratória.",
      "C": "[CORRETA] O **Mycoplasma** tem **Resistência Intrínseca** por ausência de parede celular.",
      "D": "[INCORRETA] Fantasia."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3909,
    "materia": "mad1",
    "aula_id": "mad1_a9",
    "tema": "mad1_a9",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Um paciente com Sífilis apresenta o teste VDRL 1:64 (positivo). Por que este teste é chamado de 'não treponêmico'?),",
    "opcoes": [
      "A) Porque ele detecta a bactéria diretamente.",
      "B) Porque ele detecta anticorpos (reaginas) contra a cardiolipina (lipídeo liberado por células danificadas), não contra antígenos específicos da bactéria.",
      "C) Porque só funciona em quem não tem sífilis.",
      "D) Porque é um teste de saliva."
    ],
    "explicacao_geral": "O VDRL é ótimo para triagem e controle de cura, mas pode dar falso-positivo em outras doenças (Lúpus, gravidez).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Teste sorológico indireto.",
      "B": "[CORRETA] O **VDRL** é um teste **Não Treponêmico** de monitoramento.",
      "C": "[INCORRETA] É para diagnóstico.",
      "D": "[INCORRETA] Teste de sangue."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3910,
    "materia": "mad1",
    "aula_id": "mad1_a9",
    "tema": "mad1_a9",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual complicação ocular é causada pela Chlamydia trachomatis (sorotipos A-C) e é a principal causa de cegueira evitável no mundo?),",
    "opcoes": [
      "A) Glaucoma.",
      "B) Catarata.",
      "C) Conjuntivite hemorrágica.",
      "D) Tracoma."
    ],
    "explicacao_geral": "A infecção crônica causa cicatrizes na pálpebra (entrópio) que levam à abrasão da córnea pelas cerdas (triquíase).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Metabólico/estrutural do olho.",
      "B": "[INCORRETA] Opacificação do cristalino.",
      "C": "[INCORRETA] Causada por adenovírus ou enterovírus.",
      "D": "[CORRETA] O **Tracoma** é a cicatriz ocular por **Clamídia**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3911,
    "materia": "mad1",
    "aula_id": "mad1_a9",
    "tema": "mad1_a9",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A 'Sífilis Secundária' manifesta-se semanas ou meses após o cancro duro. Qual o achado clínico clássico?),",
    "opcoes": [
      "A) Roséola sifilítica (lesões maculopapulares em tronco e especialmente palmas e plantas) e Condiloma Plano.",
      "B) Aneurisma da aorta.",
      "C) Demência profunda.",
      "D) Perda instantânea de todos os dentes."
    ],
    "explicacao_geral": "As lesões cutâneas e mucosas da sífilis secundária são altamente infectantes.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Enantema em Palmas e Plantas** é sinal forte de **Sífilis Secundária**.",
      "B": "[INCORRETA] Sífilis Terciária vascular.",
      "C": "[INCORRETA] Sífilis Terciária neurológica (Tabes dorsalis/Paralisia Geral).",
      "D": "[INCORRETA] Sem fundamento."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3912,
    "materia": "mad1",
    "aula_id": "mad1_a9",
    "tema": "mad1_a9",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A 'Linfogranuloma Venéreo' (LGV) é uma DST causada por qual agente específico?),",
    "opcoes": [
      "A) HIV.",
      "B) HPV.",
      "C) Chlamydia trachomatis (sorotipos L1, L2, L3).",
      "D) Gonococo."
    ],
    "explicacao_geral": "Caracteriza-se por úlcera genital transitória seguida de linfadenopatia inguinal supurativa (bubão).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Vírus causador da AIDS.",
      "B": "[INCORRETA] Vírus causador de verrugas e câncer.",
      "C": "[CORRETA] O **LGV** é causado por cepas invasivas de **Clamídia**.",
      "D": "[INCORRETA] Causa uretrite e descarga purulenta."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad1_a9 adicionadas.`);
