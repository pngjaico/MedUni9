import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4049,
    "materia": "semio2",
    "aula_id": "semio2_a3",
    "tema": "semio2_a3",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual a localização fisiológica (normal) do 'Ictus Cordis' em um adulto saudável?),",
    "opcoes": [
      "A) 2º espaço intercostal direito, linha paraesternal.",
      "B) 4º ou 5º espaço intercostal esquerdo, na linha hemiclavicular.",
      "C) No epigástrio, abaixo do apêndice xifoide.",
      "D) 5º espaço intercostal direito, linha axilar anterior."
    ],
    "explicacao_geral": "O Ictus condiz com a sístole ventricular e o choque da ponta do coração (ápice) com a parede torácica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Foco aórtico.",
      "B": "[CORRETA] A localização do **Ictus Cordis** é no **5º EIE, Linha Hemiclavicular**.",
      "C": "[INCORRETA] Sugere hipertrofia de ventrículo direito ou pulsação aórtica.",
      "D": "[INCORRETA] Lado errado."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4050,
    "materia": "semio2",
    "aula_id": "semio2_a3",
    "tema": "semio2_a3",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "A 'Primeira Bulha Cardíaca' (B1) corresponde a qual evento mecânico do ciclo cardíaco?),",
    "opcoes": [
      "A) Abertura das válvulas semilunares.",
      "B) Fechamento das válvulas aórtica e pulmonar.",
      "C) Relaxamento total do coração.",
      "D) Fechamento das válvulas atrioventriculares (Mitral e Tricúspide)."
    ],
    "explicacao_geral": "A B1 marca o início da sístole ventricular.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ocorre logo após B1, mas é silenciosa em condições normais.",
      "B": "[INCORRETA] Corresponde à B2.",
      "C": "[INCORRETA] Diástole ventricular.",
      "D": "[CORRETA] A **B1** é gerada pelo **Fechamento das Válvulas AV**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4051,
    "materia": "semio2",
    "aula_id": "semio2_a3",
    "tema": "semio2_a3",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Onde se localiza o 'Foco Mitral' de ausculta cardíaca?),",
    "opcoes": [
      "A) No 5º espaço intercostal esquerdo, na linha hemiclavicular (mesmo local do ictus).",
      "B) No 2º espaço intercostal direito.",
      "C) No 2º espaço intercostal esquerdo.",
      "D) Na base do apêndice xifoide."
    ],
    "explicacao_geral": "É o melhor local para auscultar ruídos provenientes da válvula mitral e a terceira bulha (B3).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Foco Mitral** coincide com o **Ápice Cardíaco**.",
      "B": "[INCORRETA] Foco Aórtico.",
      "C": "[INCORRETA] Foco Pulmonar.",
      "D": "[INCORRETA] Foco Tricúspide."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4052,
    "materia": "semio2",
    "aula_id": "semio2_a3",
    "tema": "semio2_a3",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um paciente idoso e hipertenso apresenta uma bulha cardíaca extra no final da diástole, pouco antes da B1 (ritmo de galope atrial). Qual bulha é esta e o que ela sugere?),",
    "opcoes": [
      "A) B3 (Terceira Bulha); sugere insuficiência cardíaca grave com ventrículo dilatado.",
      "B) Clique sistólico; sugere prolapso de mitral.",
      "C) B4 (Quarta Bulha); sugere redução da complacência ventricular (ventrículo rígido).",
      "D) Atrito pericárdico; sugere pericardite."
    ],
    "explicacao_geral": "A B4 resulta da contração atrial contra um ventrículo resistente (hipertrófico).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] B3 ocorre no início da diástole (enchimento rápido).",
      "B": "[INCORRETA] Ruído sistólico.",
      "C": "[CORRETA] A **B4** indica **HVE ou Ventrículo Rígido**.",
      "D": "[INCORRETA] Ruído contínuo, não bulha isolada."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4053,
    "materia": "semio2",
    "aula_id": "semio2_a3",
    "tema": "semio2_a3",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Os 'Sopros Cardíacos' são ruídos gerados por fluxo turbulento. Um sopro que ocorre ENTRE a B1 e a B2 é classificado como:),",
    "opcoes": [
      "A) Sopro Diastólico.",
      "B) Sopro Sistólico.",
      "C) Sopro Contínuo.",
      "D) B5."
    ],
    "explicacao_geral": "Sopros sistólicos podem ser ejetivos (estenose semilunar) ou regurgitativos (insuficiência AV).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ocorre entre B2 e B1.",
      "B": "[CORRETA] Entre **B1 e B2** o sopro é **Sistólico**.",
      "C": "[INCORRETA] Ocupa todo o ciclo.",
      "D": "[INCORRETA] Bulha inexistente."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4054,
    "materia": "semio2",
    "aula_id": "semio2_a3",
    "tema": "semio2_a3",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "O que representa o sinal de 'Turgência Jugular Patológica' com o paciente a 45°?),",
    "opcoes": [
      "A) Aumento da pressão no átrio direito, refletindo congestão sistêmica ou insuficiência cardíaca direita.",
      "B) Aumento da inteligência.",
      "C) Queda da pressão arterial.",
      "D) Funcionamento normal das válvulas pulmonares."
    ],
    "explicacao_geral": "A veia jugular atua como um 'manômetro' do lado direito do coração.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Turgência Jugular** é sinal de **Congestão Direita**.",
      "B": "[INCORRETA] Absurdo.",
      "C": "[INCORRETA] Na hipotensão severa, as jugulares costumam estar colapsadas.",
      "D": "[INCORRETA] Pelo contrário, pode indicar estenose pulmonar ou cor pulmonale."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4055,
    "materia": "semio2",
    "aula_id": "semio2_a3",
    "tema": "semio2_a3",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "A 'Arritmia Sinusal Respiratória' é um achado comum em jovens. O que ocorre com a frequência cardíaca durante a inspiração?),",
    "opcoes": [
      "A) A frequência diminui na inspiração.",
      "B) A frequência para na inspiração.",
      "C) A frequência aumenta levemente na inspiração.",
      "D) A frequência torna-se totalmente irregular e caótica."
    ],
    "explicacao_geral": "É um achado fisiológico devido à variação do tônus vagal com a respiração.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Isso ocorre na expiração.",
      "B": "[INCORRETA] Caracterizaria uma pausa sinusal patológica.",
      "C": "[CORRETA] A **FC aumenta na Inspiração** na arritmia sinusal fisiológica.",
      "D": "[INCORRETA] Característica da Fibrilação Atrial."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4056,
    "materia": "semio2",
    "aula_id": "semio2_a3",
    "tema": "semio2_a3",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um pulso arterial descrito como 'Célere' (ou em martelo d'água) é característico de qual condição?),",
    "opcoes": [
      "A) Desidratação profunda.",
      "B) Estenose Aórtica severa.",
      "C) Hipotireoidismo.",
      "D) Insuficiência Aórtica (grande diferença entre pressão sistólica e diastólica)."
    ],
    "explicacao_geral": "O pulso sobe muito rápido e 'some' rápido devido ao refluxo de sangue para o ventrículo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pulso costuma ser fino (filiforme).",
      "B": "[INCORRETA] Pulso 'Parvus et Tardus' (pequeno e demorado).",
      "C": "[INCORRETA] Pulso costuma ser bradicárdico e lentificado.",
      "D": "[CORRETA] O **Pulso em Martelo d'Água** sinaliza **Insuficiência Aórtica**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula semio2_a3 adicionadas.`);
