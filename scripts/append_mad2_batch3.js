import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4481,
    "materia": "mad2",
    "aula_id": "mad2_a11",
    "tema": "mad2_a11",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual o agente etiológico da Doença de Chagas e qual seu principal vetor no ciclo domiciliar?),",
    "opcoes": [
      "A) Leishmania chagasi e mosquito-palha.",
      "B) Trypanosoma cruzi e inseto Triatoma (Barbeiro).",
      "C) Plasmodium falciparum e mosquito Anopheles.",
      "D) Schistosoma mansoni e caramujo."
    ],
    "explicacao_geral": "A transmissão ocorre habitualmente pelas fezes do barbeiro que entram em contato com o local da picada.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Causa Leishmaniose Visceral.",
      "B": "[CORRETA] **T. cruzi e Barbeiro** definem o ciclo de **Chagas**.",
      "C": "[INCORRETA] Causa Malária.",
      "D": "[INCORRETA] Causa Esquistossomose."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4482,
    "materia": "mad2",
    "aula_id": "mad2_a11",
    "tema": "mad2_a11",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A 'Fase Crônica' da Doença de Chagas pode se manifestar de qual forma PREDOMINANTE e grave?),",
    "opcoes": [
      "A) Perda de cabelo e dentes.",
      "B) Cegueira noturna.",
      "C) Surdez progressiva.",
      "D) Forma Cardíaca (insuficiência cardíaca, arritmias) e Forma Digestiva (Megaesôfago e Megacólon)."
    ],
    "explicacao_geral": "As manifestações viscerais ocorrem anos ou décadas após a infecção inicial.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Absurdo.",
      "B": "[INCORRETA] Hipovitaminose A.",
      "C": "[INCORRETA] Absurdo.",
      "D": "[CORRETA] A **Fase Crônica** de Chagas causa os **Megas e Cardiopatia**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4483,
    "materia": "mad2",
    "aula_id": "mad2_a11",
    "tema": "mad2_a11",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Qual a principal característica clínica da 'Leishmaniose Visceral' (Calazar)?),",
    "opcoes": [
      "A) Febre prolongada, emagrecimento, hepatoesplenomegalia acentuada (aumento de fígado e baço) e pancitopenia.",
      "B) Apenas uma ferida na pele que não dói.",
      "C) Paralisia de pernas.",
      "D) Tosse com sangue."
    ],
    "explicacao_geral": "É uma doença sistêmica grave que, se não tratada, tem alta letalidade.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Calazar** é marcado pela **Esplenomegalia massiva**.",
      "B": "[INCORRETA] Caracteriza a Leishmaniose Tegumentar.",
      "C": "[INCORRETA] Polineuropatias ou outras causas.",
      "D": "[INCORRETA] Sugere TB ou neoplasia."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4484,
    "materia": "mad2",
    "aula_id": "mad2_a12",
    "tema": "mad2_a12",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "A 'Malária' é causada por parasitas do gênero Plasmodium. Qual o sintoma patognomônico sugerido por episódios de febre intensa, calafrios e sudorese que ocorrem em ciclos (terças ou quartas)?),",
    "opcoes": [
      "A) Febre contínua.",
      "B) Coma malárico iminente.",
      "C) Paroxismo Malárico.",
      "D) Tosse seca."
    ],
    "explicacao_geral": "Estes ciclos coincidem com a ruptura sincronizada de hemácias infectadas (esquizogonia sanguínea).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Febre tifoide ou outras.",
      "B": "[INCORRETA] Complicação grave (Malária Cerebral), não o termo para o ciclo febril comum.",
      "C": "[CORRETA] O **Paroxismo Malárico** é o ciclo de **febre e calafrio**.",
      "D": "[INCORRETA] Inespecífico."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4485,
    "materia": "mad2",
    "aula_id": "mad2_a13",
    "tema": "mad2_a13",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "O que caracteriza uma doença de 'Notificação Compulsória IMEDIATA'?),",
    "opcoes": [
      "A) Notificação deve ser feita em até 7 dias.",
      "B) Notificação deve ser feita em até 24 horas, pelo meio mais rápido disponível, para o Ministério da Saúde, Estado e Município.",
      "C) Notificação apenas no final do mês.",
      "D) Notificação apenas se o paciente morrer."
    ],
    "explicacao_geral": "Destina-se a doenças com alto potencial de disseminação ou gravidade extrema.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Notificação Semanal.",
      "B": "[CORRETA] A **Notificação Imediata** deve ocorrer em até **24 horas**.",
      "C": "[INCORRETA] Relatório de produção, não vigilância de surto.",
      "D": "[INCORRETA] Vigilância de óbitos é outra esfera; doenças devem ser notificadas ainda vivas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4486,
    "materia": "mad2",
    "aula_id": "mad2_a14",
    "tema": "mad2_a14",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual o conceito de 'Incidência' na epidemiologia?),",
    "opcoes": [
      "A) Total de casos (antigos e novos) em um determinado momento.",
      "B) Número de pessoas que morrem da doença.",
      "C) Quantidade de remédio distribuído.",
      "D) Número de NOVOS casos de uma doença que surgem em uma população em risco durante um período de tempo determinado."
    ],
    "explicacao_geral": "A incidência mede a 'velocidade' com que a doença está se espalhando.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Conceito de Prevalência.",
      "B": "[INCORRETA] Coeficiente de Mortalidade.",
      "C": "[INCORRETA] Indicador de logística/gestão.",
      "D": "[CORRETA] **Incidência** refere-se a **Casos Novos**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4487,
    "materia": "mad2",
    "aula_id": "mad2_a14",
    "tema": "mad2_a14",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Qual o indicador que mede o risco de morrer entre aqueles que contraíram uma determinada doença?),",
    "opcoes": [
      "A) Letalidade.",
      "B) Mortalidade Geral.",
      "C) Prevalência.",
      "D) Esperança de vida."
    ],
    "explicacao_geral": "Letalidade = (Número de óbitos por certa causa / Número de doentes por aquela causa) * 100.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Letalidade** mede o **poder de matar** da doença.",
      "B": "[INCORRETA] Mede o risco de morrer na população total.",
      "C": "[INCORRETA] Mede a carga da doença na população.",
      "D": "[INCORRETA] Indicador demográfico de longevidade."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4488,
    "materia": "mad2",
    "aula_id": "mad2_a15",
    "tema": "mad2_a15",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "No planejamento em saúde, o que significa o conceito de 'Territorialização'?),",
    "opcoes": [
      "A) Pintar o mapa da cidade.",
      "B) Expulsar moradores de certas áreas.",
      "C) Delimitação de uma área geográfica sob responsabilidade de uma equipe de saúde, compreendendo as populações, seus riscos, problemas e potencialidades.",
      "D) Venda de terrenos para o SUS."
    ],
    "explicacao_geral": "A territorialização é fundamental para a organização da Atenção Primária.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Cartografia pura, não planejamento sanitário.",
      "B": "[INCORRETA] Antiético e ilegal.",
      "C": "[CORRETA] A **Territorialização** define o **público-alvo e contexto** local.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad2_a11-a15 adicionadas.`);
