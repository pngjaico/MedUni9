import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3425,
    "materia": "sus",
    "aula_id": "sus_a9",
    "tema": "sus_a9",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "A 'Intersetorialidade' é a articulação da saúde com outros setores das políticas públicas. Qual o exemplo mais clássico de programa intersetorial que une saúde e educação nas escolas?),",
    "opcoes": [
      "A) PSE (Programa Saúde na Escola).",
      "B) SAMU.",
      "C) Viva Leite.",
      "D) Farmácia Popular."
    ],
    "explicacao_geral": "O PSE realiza ações de vacinação, triagem visual e auditiva e educação em saúde dentro do ambiente escolar.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **PSE** integra ações de **saúde e educação**.",
      "B": "[INCORRETA] Foco em urgência pré-hospitalar móvel.",
      "C": "[INCORRETA] Programa de transferência de renda/alimento, focado em nutrição.",
      "D": "[INCORRETA] Foco no acesso a medicamentos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3426,
    "materia": "sus",
    "aula_id": "sus_a9",
    "tema": "sus_a9",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente atendido em uma cidade remota do interior da Amazônia recebe uma teleconsultoria de um especialista em cardiologia de um grande centro em São Paulo via internet. Qual ferramenta tecnológica do SUS está sendo utilizada?),",
    "opcoes": [
      "A) Máquina do tempo.",
      "B) Drone de transporte de pacientes.",
      "C) Rádio comunitário apenas.",
      "D) Telessaúde (ou Telesaúde)."
    ],
    "explicacao_geral": "A telessaúde democratiza o acesso ao saber especializado em regiões de vazio assistencial.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Fantasia.",
      "B": "[INCORRETA] Tecnologia em teste para insumos, não para consulta clínica direta.",
      "C": "[INCORRETA] Ferramenta de comunicação social, não diagnóstica/consultiva técnica.",
      "D": "[CORRETA] A **Telessaúde** no SUS reduz distâncias e otimiza o encaminhamento especializado."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3427,
    "materia": "sus",
    "aula_id": "sus_a9",
    "tema": "sus_a9",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "O fenômeno da 'Judicialização da Saúde' ocorre quando o cidadão recorre à justiça para garantir acesso a remédios ou tratamentos. Qual a principal crítica ética feita a esse fenômeno quando envolve medicamentos sem evidência ou de altíssimo custo individual?),",
    "opcoes": [
      "A) Que o juiz não tem autoridade sobre a saúde.",
      "B) Que pode comprometer a equidade e o orçamento coletivo do SUS, beneficiando apenas quem tem acesso a advogados.",
      "C) Que o SUS deve pagar tudo o que o paciente quiser, independente de custo.",
      "D) Que os médicos não devem receitar remédios caros jamais."
    ],
    "explicacao_geral": "A judicialização é um direito, mas traz dilemas sobre a distribuição justa de recursos escassos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O judiciário é guardião dos direitos constitucionais.",
      "B": "[CORRETA] A **judicialização** pode gerar disparidades no uso do recurso público planejado para o coletivo.",
      "C": "[INCORRETA] A escassez de recursos exige escolhas baseadas em evidência e custo-efetividade.",
      "D": "[INCORRETA] O médico deve prezar pelo melhor tratamento, mas considerar a sustentabilidade do sistema."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3428,
    "materia": "sus",
    "aula_id": "sus_a9",
    "tema": "sus_a9",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Diante de um surto de Dengue em um bairro, a equipe de saúde percebe que o lixo acumulado em terrenos baldios é o principal problema. Além de tratar os doentes, qual a ação INTERSETORIAL necessária?),",
    "opcoes": [
      "A) Pedir para os doentes pararem de ter Dengue.",
      "B) Comprar veneno e espalhar pelo bairro sozinhos.",
      "C) Articular com a Secretaria de Serviços Urbanos (limpeza pública) e a Vigilância Ambiental para a remoção dos criadouros.",
      "D) Fechar a UBS até o lixo sumir."
    ],
    "explicacao_geral": "Dengue não se resolve apenas no consultório; exige saneamento e limpeza urbana.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ineficaz, o paciente é vítima e não culpado.",
      "B": "[INCORRETA] Atribuição de outros setores municipais com técnica específica.",
      "C": "[CORRETA] A **Intersetorialidade** é a chave para resolver problemas complexos de saúde ambiental.",
      "D": "[INCORRETA] Atitude negligente que abandona a população."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3429,
    "materia": "sus",
    "aula_id": "sus_a9",
    "tema": "sus_a9",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "O envelhecimento populacional acelerado no Brasil impõe um grande desafio ao SUS. Qual a mudança necessária no perfil de atendimento do sistema?),",
    "opcoes": [
      "A) Mudar o foco de doenças infecciosas agudas para o manejo crônico e multiprofissional de condições degenerativas.",
      "B) Construir apenas maternidades de luxo.",
      "C) Proibir que idosos procurem o médico mais de uma vez por mês.",
      "D) Substituir todos os médicos por enfermeiros para economizar."
    ],
    "explicacao_geral": "O perfil epidemiológico (transição demográfica) exige redes de atenção às doenças crônicas robustas.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Transição Epidemiológica** exige um sistema preparado para a **cronicidade**.",
      "B": "[INCORRETA] A natalidade está diminuindo, enquanto a longevidade aumenta.",
      "C": "[INCORRETA] Fere o princípio da universalidade e do cuidado necessário.",
      "D": "[INCORRETA] Cada profissional tem seu papel complementar no cuidado geriátrico."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3430,
    "materia": "sus",
    "aula_id": "sus_a9",
    "tema": "sus_a9",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A 'Saúde Digital' e o ConecteSUS visam integrar os dados do paciente em todo o Brasil. Qual a principal vantagem clínica dessa integração para o médico na ponta?),",
    "opcoes": [
      "A) Poder postar as informações no Facebook.",
      "B) Ter acesso ao histórico vacinal, de exames e consultas realizadas em outras cidades, evitando duplicidade de condutas e erros de prescrição.",
      "C) Fiscalizar quanto o paciente ganha por mês.",
      "D) Saber o endereço da ex-namorada do paciente."
    ],
    "explicacao_geral": "A informação que acompanha o paciente é vital para a continuidade e segurança do cuidado.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Violação ética gravíssima.",
      "B": "[CORRETA] A **Saúde Digital** promove a **Coordenação do Cuidado** em larga escala.",
      "C": "[INCORRETA] Não é o foco da integração de dados de saúde pública.",
      "D": "[INCORRETA] Dado irrelevante e invasão de privacidade."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3431,
    "materia": "sus",
    "aula_id": "sus_a9",
    "tema": "sus_a9",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente beneficiário do Programa Bolsa Família deve cumprir 'condicionalidades' de saúde (como vacinação e pré-natal) para manter o benefício. Qual o papel da saúde nessa articulação?),",
    "opcoes": [
      "A) Punir o paciente cortando o dinheiro dele se ele tossir.",
      "B) Trabalhar como caixa eletrônico do governo.",
      "C) Não se envolver, pois são áreas diferentes.",
      "D) Usar a condicionalidade como uma oportunidade de busca ativa e garantia de acesso a populações vulneráveis.",
    ],
    "explicacao_geral": "A articulação com a assistência social permite que o SUS chegue aos mais necessitados de maneira proativa.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O objetivo é a proteção social, não o punitivismo indiscriminado.",
      "B": "[INCORRETA] A saúde monitora a saúde, a assistência gere o benefício.",
      "C": "[INCORRETA] Fere o princípio da intersetorialidade necessária na vulnerabilidade extrema.",
      "D": "[CORRETA] As **condicionalidades do Bolsa Família** são ferramentas de **proteção e indução de cuidado**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3432,
    "materia": "sus",
    "aula_id": "sus_a9",
    "tema": "sus_a9",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A 'Literacia em Saúde' (capacidade do paciente de entender e aplicar informações de saúde) é um desafio atual. Como o médico do SUS pode contribuir para melhorá-la?),",
    "opcoes": [
      "A) Usando termos técnicos em latim para parecer mais inteligente.",
      "B) Escrevendo receitas com letra ilegível para manter o mistério.",
      "C) Explicando de forma clara, simples e adaptada ao contexto cultural do paciente, validando a compreensão ao final da consulta.",
      "D) Dizendo para o paciente procurar tudo no Google sozinho."
    ],
    "explicacao_geral": "A comunicação clara é uma ferramenta terapêutica que aumenta a adesão e a segurança do paciente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Barreiras de linguagem impedem a literacia.",
      "B": "[INCORRETA] Causa erros de medicação perigosos.",
      "C": "[CORRETA] A **relação médico-paciente empática** e informativa é o núcleo da **Educação em Saúde**.",
      "D": "[INCORRETA] O Google pode confundir o paciente sem a mediação técnica do profissional."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula sus_a9 adicionadas.`);
