import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3897,
    "materia": "mad1",
    "aula_id": "mad1_a8",
    "tema": "mad1_a8",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O 'Mycobacterium tuberculosis' possui uma parede celular única, rica em lipídeos complexos. Como ele é classificado quanto à sua coloração laboratorial?),",
    "opcoes": [
      "A) Gram-positivo clássico.",
      "B) Bacilo Ácido-Álcool Resistente (BAAR).",
      "C) Gram-negativo.",
      "D) Espiroqueta."
    ],
    "explicacao_geral": "Os ácidos micólicos impedem a entrada de corantes comuns do Gram; exige-se a técnica de Ziehl-Neelsen.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Embora tenha estrutura basal de Gram+, não cora bem pelo Gram.",
      "B": "[CORRETA] O **M. tuberculosis** é o protótipo do **BAAR**.",
      "C": "[INCORRETA] Não possui membrana externa de LPS.",
      "D": "[INCORRETA] Tem formato de bacilo (bastonete), não espiralado."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3898,
    "materia": "mad1",
    "aula_id": "mad1_a8",
    "tema": "mad1_a8",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual a principal via de transmissão da Tuberculose pulmonar?),",
    "opcoes": [
      "A) Fecal-oral (alimentos contaminados).",
      "B) Contato direto com a pele.",
      "C) Vetores (mosquitos).",
      "D) Inalação de aerossóis (gotículas de Wells) contendo os bacilos, expelidos pela tosse ou fala de pacientes bacilíferos."
    ],
    "explicacao_geral": "Os aerossóis são tão pequenos que permanecem suspensos no ar por horas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Transmissão da Tuberculose bovina (M. bovis) pelo leite, mas não a principal via da TB humana.",
      "B": "[INCORRETA] Raro; exige inoculação direta.",
      "C": "[INCORRETA] Sem vetor biológico.",
      "D": "[CORRETA] A **Transmissão Aérea** é a rota central da **Tuberculose**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3899,
    "materia": "mad1",
    "aula_id": "mad1_a8",
    "tema": "mad1_a8",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A reação imunológica característica do corpo à presença do M. tuberculosis é a formação de:),",
    "opcoes": [
      "A) Granulomas (com necrose de cáseo).",
      "B) Abscessos purulentos com muitos neutrófilos.",
      "C) Cicatrizes instantâneas.",
      "D) Edema generalizado."
    ],
    "explicacao_geral": "O granuloma tenta 'isolar' o bacilo que o sistema imune não conseguiu destruir totalmente.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Granuloma Caseoso** é a marca histopatológica da **Tuberculose**.",
      "B": "[INCORRETA] Característica de infecções piogênicas (Staphylo/Strepto).",
      "C": "[INCORRETA] O processo é crônico e lento.",
      "D": "[INCORRETA] Evento hemodinâmico, não lesão celular específica primária."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3900,
    "materia": "mad1",
    "aula_id": "mad1_a8",
    "tema": "mad1_a8",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um paciente apresenta tosse há 4 semanas, febre vespertina e sudorese noturna. No raio-X, nota-se uma cavitação no ápice pulmonar. Qual o exame inicial mais rápido para confirmar a suspeita?),",
    "opcoes": [
      "A) Hemograma completo.",
      "B) Cultura de sangue.",
      "C) Baciloscopia direta do escarro (Pesquisa de BAAR).",
      "D) Ressonância magnética de crânio."
    ],
    "explicacao_geral": "A baciloscopia é rápida, barata e identifica os pacientes mais infectantes.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Inespecífico.",
      "B": "[INCORRETA] Bacilo de Koch raramente causa bacteremia detectável em meios comuns.",
      "C": "[CORRETA] A **Baciloscopia de Escarro** é o exame de triagem para **TB Pulmonar**.",
      "D": "[INCORRETA] Irrelevante para o foco pulmonar inicial."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3901,
    "materia": "mad1",
    "aula_id": "mad1_a8",
    "tema": "mad1_a8",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Sobre o 'Mycobacterium leprae' (agente da Hanseníase), qual sua característica biológica mais marcante que dificulta o estudo laboratorial?),",
    "opcoes": [
      "A) Ele morre em 5 minutos fora do corpo.",
      "B) É um parasita intracelular obrigatório que NÃO cresce em meios de cultura artificiais (meios de laboratório comuns).",
      "C) Ele se move muito rápido.",
      "D) Brilha no escuro."
    ],
    "explicacao_geral": "Exige modelos animais (tatu ou pata de camundongo) para multiplicação dirigida.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] É relativamente resistente no ambiente frio/úmido.",
      "B": "[CORRETA] O **M. leprae** é **não-cultivável** em meios artificiais.",
      "C": "[INCORRETA] É imóvel.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3902,
    "materia": "mad1",
    "aula_id": "mad1_a8",
    "tema": "mad1_a8",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A Hanseníase ataca preferencialmente quais tecidos?),",
    "opcoes": [
      "A) Fígado e Baço.",
      "B) Coração e Pulmão.",
      "C) Ossos largos.",
      "D) Pele e Nervos Periféricos (principalmente nervo ulnar, radial e tibial comum)."
    ],
    "explicacao_geral": "O comprometimento nervoso causa as sequelas clássicas (deformidades e perda de sensibilidade).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Hanseníase virchowiana pode atingir órgãos, mas não é o tropismo primário.",
      "B": "[INCORRETA] Tropismo de outras doenças.",
      "C": "[INCORRETA] Pode atingir por contiguidade em casos avançados.",
      "D": "[CORRETA] A **Hanseníase** tem tropismo por **Pele e Nervos** (neurectomia)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3903,
    "materia": "mad1",
    "aula_id": "mad1_a8",
    "tema": "mad1_a8",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A Tuberculose Latente (ILTB) ocorre quando o paciente está infectado mas NÃO tem sintomas nem transmite a doença. Como ela é identificada?),",
    "opcoes": [
      "A) Pelo teste de PPD (Intermédio) ou IGRA positivos, sem evidência radiológica ou clínica de doença ativa.",
      "B) Pela tosse com sangue.",
      "C) Por um exame de fezes.",
      "D) Não tem como descobrir."
    ],
    "explicacao_geral": "Tratar a TB latente é crucial para prevenir a reativação futura, especialmente em imunossuprimidos.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **PPD** é usado para detectar **Infecção Latente por TB**.",
      "B": "[INCORRETA] Isso é sinal de doença ativa.",
      "C": "[INCORRETA] Irrelevante.",
      "D": "[INCORRETA] Os testes imunológicos são justamente para isso."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3904,
    "materia": "mad1",
    "aula_id": "mad1_a8",
    "tema": "mad1_a8",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um paciente com Hanseníase apresenta muitas manchas pelo corpo, nódulos (hansenomas) e alta carga bacilar nos exames (multibacilar). Qual a forma clínica mais provável?),",
    "opcoes": [
      "A) Hanseníase Tuberculoide.",
      "B) Hanseníase Indeterminada inicial.",
      "C) Hanseníase Virchowiana (Lepromatosa).",
      "D) Cura espontânea."
    ],
    "explicacao_geral": "A forma Virchowiana ocorre em pacientes com resposta imune celular deficiente contra o bacilo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Poucas manchas, boa resposta imune celular, paucibacilar.",
      "B": "[INCORRETA] Fase inicial com mancha clara única geralmente.",
      "C": "[CORRETA] A **Hanseníase Virchowiana** é a forma **Multibacilar** sistêmica grave.",
      "D": "[INCORRETA] Exige tratamento com poliquimioterapia (PQT)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad1_a8 adicionadas.`);
