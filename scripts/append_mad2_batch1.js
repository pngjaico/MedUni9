import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4401,
    "materia": "mad2",
    "aula_id": "mad2_a1",
    "tema": "mad2_a1",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual a principal diferença entre 'Febre' e 'Hipertermia'?),",
    "opcoes": [
      "A) Não há diferença; são sinônimos.",
      "B) Na febre, o 'set-point' do termostato hipotalâmico está elevado; na hipertermia, o set-point é normal, mas há falha na dissipação de calor ou produção excessiva.",
      "C) Febre só ocorre no frio.",
      "D) Hipertermia é causada por vírus.",
      "E) Febre é sempre maior que 40°C."
    ],
    "explicacao_geral": "A febre é uma resposta adaptativa mediada por citocinas pirogênicas; a hipertermia é uma falha de equilíbrio térmico (ex: insolação).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] São mecanisticamente diferentes.",
      "B": "[CORRETA] A **Febre** envolve ajuste do **Set-point Hipotalâmico**.",
      "C": "[INCORRETA] Absurdo.",
      "D": "[INCORRETA] Vírus causam febre; hipertermia pode ser causada por esforço ou ambiente.",
      "E": "[INCORRETA] Febre define-se geralmente a partir de 37.8°C-38.0°C axilar."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4402,
    "materia": "mad2",
    "aula_id": "mad2_a1",
    "tema": "mad2_a1",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "De acordo com o consenso SEPSIS-3, o que define CLINICAMENTE a presença de 'Sepse'?),",
    "opcoes": [
      "A) Presença de bactérias no sangue.",
      "B) Febre alta e calafrios.",
      "C) Pressão baixa e suor frio.",
      "D) Disfunção orgânica ameaçadora à vida causada por uma resposta desregulada do hospedeiro à infecção (avaliada pelo escore SOFA)."
    ],
    "explicacao_geral": "Disfunção orgânica é definida como um aumento agudo de 2 ou mais pontos no escore SOFA devido à infecção.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Bacteremia (pode ocorrer sem sepse).",
      "B": "[INCORRETA] Sinais clínicos comuns de infecção, não definem sepse isoladamente.",
      "C": "[INCORRETA] Sinais de choque, que é o estágio seguinte.",
      "D": "[CORRETA] **Sepse** é **Infecção + Disfunção Orgânica**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4403,
    "materia": "mad2",
    "aula_id": "mad2_a1",
    "tema": "mad2_a1",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Qual o critério de 'Choque Séptico' que o diferencia da Sepse comum?),",
    "opcoes": [
      "A) Necessidade de vasopressor para manter PAM >= 65 mmHg e lactato sérico > 2 mmol/L, apesar da reposição volêmica adequada.",
      "B) Apenas presença de febre > 40°C.",
      "C) Perda de consciência.",
      "D) Sangramento por todos os orifícios."
    ],
    "explicacao_geral": "O choque séptico representa uma anormalidade metabólica e celular muito mais profunda e com maior mortalidade.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Choque Séptico** exige **Drogas Vasoativas e Lactato Alto**.",
      "B": "[INCORRETA] Febre isolada não define choque.",
      "C": "[INCORRETA] Com comum em disfunção orgânica cerebral, mas não define o choque isoladamente.",
      "D": "[INCORRETA] Coagulação Intravascular Disseminada (CIVD), uma complicação, não o critério definidor."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4404,
    "materia": "mad2",
    "aula_id": "mad2_a2",
    "tema": "mad2_a2",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "A 'Terapia Empírica' com antibióticos significa:),",
    "opcoes": [
      "A) Usar o antibiótico mais barato.",
      "B) Esperar o resultado da cultura para começar o tratamento.",
      "C) Iniciar o tratamento baseado nos patógenos mais prováveis para aquele foco infeccioso e perfil clínico do paciente, antes do resultado laboratorial.",
      "D) Usar o remédio que o paciente pediu."
    ],
    "explicacao_geral": "Em infecções graves, o início rápido da terapia empírica é crucial para o prognóstico.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Custo é secundário à eficácia.",
      "B": "[INCORRETA] Terapia guiada/direcionada (pode demorar 48-72h).",
      "C": "[CORRETA] A **Terapia Empírica** foca na **Probabilidade Estatística** de germes.",
      "D": "[INCORRETA] Antiético e clinicamente incorreto."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4405,
    "materia": "mad2",
    "aula_id": "mad2_a3",
    "tema": "mad2_a3",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente pediátrico apresenta dor de garganta intensa, febre alta, ausência de tosse, presença de exsudato amigdaliano e linfonodos cervicais dolorosos. Qual a principal suspeita clínica?),",
    "opcoes": [
      "A) Resfriado comum.",
      "B) Gripe (Influenza).",
      "C) COVID-19.",
      "D) Faringoamigdalite Bacteriana (provavelmente por Streptococcus pyogenes)."
    ],
    "explicacao_geral": "Os critérios de Centor ajudam a diferenciar causas virais de bacterianas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Apresentaria coriza, espirros e pouca ou nenhuma febre.",
      "B": "[INCORRETA] Sintomas sistêmicos (mialgia, cefaleia) e tosse seriam mais proeminentes.",
      "C": "[INCORRETA] Tosse e outros sintomas respiratórios seriam esperados.",
      "D": "[CORRETA] **Exsudato + Ausência de Tosse** sugere etiologia **Bacteriana**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4406,
    "materia": "mad2",
    "aula_id": "mad2_a4",
    "tema": "mad2_a4",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "O escore CURB-65 é utilizado para decidir o local de tratamento da pneumonia adquirida na comunidade. O que significa a letra 'C' do acrônimo?),",
    "opcoes": [
      "A) Coração (insuficiência cardíaca).",
      "B) Confusão mental aguda.",
      "C) Catarro abundante.",
      "D) Cianose (cor azulada das extremidades)."
    ],
    "explicacao_geral": "CURB-65: Confusão, Ureia > 50, Respiração >= 30, Blood pressure (PAS<90 ou PAD<=60), Idade >= 65.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Comorbidade importante, mas não faz parte do acrônimo CURB.",
      "B": "[CORRETA] O **CURB-65** avalia a **Confusão Mental** como critério de gravidade.",
      "C": "[INCORRETA] Absurdo.",
      "D": "[INCORRETA] Sinal de hipóxia grave, mas não é o 'C' do score."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4407,
    "materia": "mad2",
    "aula_id": "mad2_a5",
    "tema": "mad2_a5",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Qual o esquema terapêutico padrão (fase de ataque) para Tuberculose sensível no Brasil?),",
    "opcoes": [
      "A) RIPE: Rifampicina, Isoniazida, Pirazinamida e Etambutol por 2 meses.",
      "B) Apenas Amoxicilina.",
      "C) Rifampicina e Isoniazida por 6 meses seguidos.",
      "D) Azitromicina dose única."
    ],
    "explicacao_geral": "Após os 2 meses iniciais, segue-se a fase de manutenção com Rifampicina e Isoniazida por mais 4 meses.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O esquema **RIPE** é o tratamento de **Ataque da TB**.",
      "B": "[INCORRETA] Ineficaz contra o bacilo.",
      "C": "[INCORRETA] Esta é a fase de manutenção (apenas dois fármacos) após a fase inicial.",
      "D": "[INCORRETA] Usado em uretrites ou faringites, não na TB."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4408,
    "materia": "mad2",
    "aula_id": "mad2_a5",
    "tema": "mad2_a5",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A Hanseníase Virchowiana (multibacilar) caracteriza-se clinicamente por:),",
    "opcoes": [
      "A) Apenas uma mancha clara no corpo sem sensibilidade.",
      "B) Perda de memória súbita.",
      "C) Múltiplas lesões infiltradas (hansenomas), face leonina e alta carga bacilar no exame de baciloscopia.",
      "D) Coceira intensa pelo corpo todo."
    ],
    "explicacao_geral": "A hanseníase multibacilar exige tratamento por 12 meses, enquanto a paucibacilar por 6 meses.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Forma Tuberculoide (paucibacilar).",
      "B": "[INCORRETA] Sem relação.",
      "C": "[CORRETA] A forma **Virchowiana** é a manifestação **Multibacilar** sistêmica.",
      "D": "[INCORRETA] Lesões de hanseníase não costumam coçar; a característica é a perda de sensibilidade."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad2_a1/a2/a3/a4/a5 adicionadas.`);
