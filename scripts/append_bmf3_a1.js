import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4105,
    "materia": "bmf3",
    "aula_id": "bmf3_a1",
    "tema": "bmf3_a1",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O Sistema Nervoso Autônomo (SNA) é dividido em Simpático e Parassimpático. Qual o principal neurotransmissor das fibras 'pré-ganglionares' em ambos os sistemas?),",
    "opcoes": [
      "A) Noradrenalina.",
      "B) Acetilcolina.",
      "C) Dopamina.",
      "D) Serotonina."
    ],
    "explicacao_geral": "Tanto no simpático quanto no parassimpático, o primeiro neurônio libera acetilcolina sobre receptores nicotínicos no gânglio.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Neurotransmissor pós-ganglionar do simpático (com exceções).",
      "B": "[CORRETA] A **Acetilcolina** é universal nas fibras **Pré-ganglionares**.",
      "C": "[INCORRETA] Envolvida em vias de recompensa e controle motor central.",
      "D": "[INCORRETA] Modulador do humor e sono central."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4106,
    "materia": "bmf3",
    "aula_id": "bmf3_a1",
    "tema": "bmf3_a1",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "A ativação do Sistema Nervoso Simpático prepara o corpo para 'Luta ou Fuga'. Qual efeito é esperado no diâmetro da pupila?),",
    "opcoes": [
      "A) Miose (contração).",
      "B) Nenhuma alteração.",
      "C) Fechamento das pálpebras apenas.",
      "D) Midríase (dilatação)."
    ],
    "explicacao_geral": "A dilatação pupilar permite a entrada de mais luz, melhorando a percepção visual em situações de estresse.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Efeito do parassimpático.",
      "B": "[INCORRETA] Há modulação ativa.",
      "C": "[INCORRETA] Efeito motor somático (músculo orbicular).",
      "D": "[CORRETA] O **Simpático** causa **Midríase**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4107,
    "materia": "bmf3",
    "aula_id": "bmf3_a1",
    "tema": "bmf3_a1",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Os receptores 'Muscarínicos' são ativados pela acetilcolina liberada por fibras pós-ganglionares parassimpáticas. Qual o efeito da ativação M2 no coração?),",
    "opcoes": [
      "A) Cronotropismo e inotropismo negativos (redução da frequência cardíaca e força de contração).",
      "B) Aumento súbito da pressão arterial.",
      "C) Arritmia ventricular fatal.",
      "D) Taquicardia intensa."
    ],
    "explicacao_geral": "O parassimpático atua como um 'freio' para o coração via nervo vago.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O receptor **M2** promove a **Bradicardia**.",
      "B": "[INCORRETA] Efeito do simpático (Alfa-1 vasoconstrição).",
      "C": "[INCORRETA] Raramente causado por estímulo vagal direto isolado.",
      "D": "[INCORRETA] Efeito do simpático (Beta-1)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4108,
    "materia": "bmf3",
    "aula_id": "bmf3_a1",
    "tema": "bmf3_a1",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual receptor adrenérgico é o principal responsável por promover a BroncoDILATAÇÃO nos pulmões?),",
    "opcoes": [
      "A) Alfa-1.",
      "B) Alfa-2.",
      "C) Beta-2.",
      "D) Beta-1."
    ],
    "explicacao_geral": "Agonistas Beta-2 (ex: salbutamol) são usados no tratamento da asma.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Promove vasoconstrição periférica.",
      "B": "[INCORRETA] Autorreceptor inibitório pré-sináptico.",
      "C": "[CORRETA] O receptor **Beta-2** causa **Relaxamento do Músculo Liso Bronquial**.",
      "D": "[INCORRETA] Localizado predominantemente no coração (aumenta FC)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4109,
    "materia": "bmf3",
    "aula_id": "bmf3_a1",
    "tema": "bmf3_a1",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A glândula medula suprarrenal é considerada um gânglio simpático modificado. Qual neurotransmissor ela libera diretamente na corrente sanguínea?),",
    "opcoes": [
      "A) Acetilcolina.",
      "B) Adrenalina (Epinefrina).",
      "C) Cortisol.",
      "D) Aldosterona."
    ],
    "explicacao_geral": "A liberação de adrenalina permite uma resposta simpática sistêmica e sustentada.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Estimula a medula para liberar adrenalina, mas não é o produto final da medula.",
      "B": "[CORRETA] A **Medula Adrenal** secreta **Adrenalina** no sangue.",
      "C": "[INCORRETA] Produzido no córtex adrenal.",
      "D": "[INCORRETA] Produzida no córtex adrenal."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4110,
    "materia": "bmf3",
    "aula_id": "bmf3_a1",
    "tema": "bmf3_a1",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente ingere um veneno que bloqueia a quebra da acetilcolina na fenda sináptica. Ele apresenta salivação excessiva, lacrimejamento e bradicardia. Qual sistema está hiperativado?),",
    "opcoes": [
      "A) Simpático.",
      "B) Motor Somático apenas.",
      "C) Sensorial.",
      "D) Parassimpático."
    ],
    "explicacao_geral": "Os sinais descritos são do tipo 'SLUDGE' (Salivação, Lacrimejamento, Urinação, Defecação, GI distress, Emese), típicos de excesso colinérgico.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Causaria boca seca e taquicardia.",
      "B": "[INCORRETA] Causaria tremores ou paralisia muscular, mas não as secreções glândulares descritas.",
      "C": "[INCORRETA] Sem correlação direta com as secreções vegetativas.",
      "D": "[CORRETA] O **Parassimpático** regula o repouso e a **secreção glândular**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4111,
    "materia": "bmf3",
    "aula_id": "bmf3_a1",
    "tema": "bmf3_a1",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Os receptores 'Nicotínicos' do tipo Nm localizam-se na placa motora. Qual a consequência da ligação da acetilcolina a esses receptores?),",
    "opcoes": [
      "A) Contração do músculo esquelético através da abertura de canais iônicos (receptor ionotrópico).",
      "B) Lentidão do pensamento.",
      "C) Relaxamento do estômago.",
      "D) Produção de saliva."
    ],
    "explicacao_geral": "Os receptores nicotínicos são canais catiônicos que permitem a entrada rápida de sódio.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Receptor Nicotínico** é essencial para o **movimento voluntário**.",
      "B": "[INCORRETA] Absurdo.",
      "C": "[INCORRETA] Efeito muscarínico/vegetativo.",
      "D": "[INCORRETA] Efeito muscarínico (M3)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4112,
    "materia": "bmf3",
    "aula_id": "bmf3_a1",
    "tema": "bmf3_a1",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual fibra pós-ganglionar do Sistema Simpático é uma exceção e libera ACETILCOLINA em vez de Noradrenalina?),",
    "opcoes": [
      "A) Fibras para o coração.",
      "B) Fibras para o fígado.",
      "C) Fibras para as glândulas sudoríparas (suor).",
      "D) Fibras para os olhos."
    ],
    "explicacao_geral": "Apesar de serem simpáticas anatomicamente, as fibras sudoríparas são colinérgicas funcionalmente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Libera Noradrenalina (Beta-1).",
      "B": "[INCORRETA] Libera Noradrenalina.",
      "C": "[CORRETA] O **Suor Simpático** é mediado por **Acetilcolina**.",
      "D": "[INCORRETA] Libera Noradrenalina (Alfa-1/Beta-2)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf3_a1 adicionadas.`);
