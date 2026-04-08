/**
 * Uma aula por vez: substitui somente bmf1_a20 (ids 382-391).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, "..", "data", "questoes.json");

const novas = [
  {
    id: 382,
    materia: "bmf1",
    tema: "bmf1_a20",
    modulo: 1,
    dificuldade: 2,
    correta: 0,
    enunciado:
      "No mapa arterial do TGI, qual territorio e atribuido principalmente ao tronco celiaco, segundo a aula?",
    opcoes: [
      "A) Esofago abdominal, estomago, figado, baco e duodeno proximal",
      "B) Delgado distal e colon esquerdo ate reto superior",
      "C) Jejuno-ileo e todo reto inferior",
      "D) Apenas apendice e colon sigmoide",
    ],
    explicacao_geral:
      "Tronco celiaco irriga derivados do intestino anterior no contexto da aula.",
    explicacoes_opcoes: {
      A: "Correta: corresponde a tabela de territorios.",
      B: "Incorreta: mistura territorio de AMS/AMI.",
      C: "Incorreta: descreve distribuicao impropria.",
      D: "Incorreta: territorio muito restrito e errado.",
    },
    explicacao:
      "Resumo: Celiaco cobre o bloco alto do digestorio abdominal.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 383,
    materia: "bmf1",
    tema: "bmf1_a20",
    modulo: 1,
    dificuldade: 1,
    correta: 1,
    enunciado:
      "A AMS, em linhas gerais desta aula, irriga principalmente:",
    opcoes: [
      "A) Estomago e figado como territorio dominante",
      "B) Delgado (exceto proximal) e colon proximal ate a flexura esplenica",
      "C) Colon distal e reto superior exclusivamente",
      "D) Apenas o esofago abdominal",
    ],
    explicacao_geral:
      "AMS corresponde ao territorio medio, com zona de transicao na flexura esplenica.",
    explicacoes_opcoes: {
      A: "Incorreta: perfil de tronco celiaco.",
      B: "Correta: linha da tabela arterial.",
      C: "Incorreta: perfil de AMI.",
      D: "Incorreta: descricao incompleta e incorreta.",
    },
    explicacao:
      "Resumo: AMS = delgado medio + colon proximal.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 384,
    materia: "bmf1",
    tema: "bmf1_a20",
    modulo: 1,
    dificuldade: 1,
    correta: 2,
    enunciado:
      "A AMI e mais relacionada a irrigacao de qual segmento?",
    opcoes: [
      "A) Duodeno proximal e estomago",
      "B) Jejuno proximal e flexura hepatica",
      "C) Colon distal e reto superior",
      "D) Esofago toracico e laringe",
    ],
    explicacao_geral:
      "AMI cobre o territorio caudal do tubo digestorio no conteudo da aula.",
    explicacoes_opcoes: {
      A: "Incorreta: territorio celiaco.",
      B: "Incorreta: nao e o padrao da AMI.",
      C: "Correta: coincide com a tabela.",
      D: "Incorreta: fora do territorio em foco.",
    },
    explicacao:
      "Resumo: AMI predomina no colon esquerdo/distal e reto superior.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 385,
    materia: "bmf1",
    tema: "bmf1_a20",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "A flexura esplenica e destacada como pegadinha porque representa:",
    opcoes: [
      "A) Unico ponto de drenagem linfatica do delgado",
      "B) Regiao sem anastomose arterial",
      "C) Territorio exclusivo do tronco celiaco",
      "D) Zona de transicao entre territorios arteriais com risco de isquemia de limite",
    ],
    explicacao_geral:
      "Aula enfatiza transicao de territorio e vulnerabilidade perfusional relativa.",
    explicacoes_opcoes: {
      A: "Incorreta: linfatica nao e o foco da pegadinha.",
      B: "Incorreta: ha redes anastomoticas de fronteira.",
      C: "Incorreta: nao e territorio celiaco exclusivo.",
      D: "Correta: sintese da observacao da aula.",
    },
    explicacao:
      "Resumo: Flexura esplenica e fronteira vascular classica.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 386,
    materia: "bmf1",
    tema: "bmf1_a20",
    modulo: 1,
    dificuldade: 2,
    correta: 1,
    enunciado:
      "A veia porta, no conceito minimo exigido, e melhor definida por:",
    opcoes: [
      "A) Drenar sangue intestinal diretamente para a cava inferior sem passar pelo figado",
      "B) Conduzir sangue venoso nutritivo do TGI ao figado apos confluencia esplenomesenterica",
      "C) Ser formada apenas pela veia renal esquerda",
      "D) Pertencer ao sistema arterial mesenterico",
    ],
    explicacao_geral:
      "Origem e destino do fluxo portal sao pontos de prova recorrentes.",
    explicacoes_opcoes: {
      A: "Incorreta: o figado e o primeiro filtro metabolico nesse eixo.",
      B: "Correta: descreve composicao e destino no nivel da aula.",
      C: "Incorreta: formacao portal nao e essa.",
      D: "Incorreta: porta e sistema venoso.",
    },
    explicacao:
      "Resumo: Sangue digestorio vai ao figado antes da volta sistemica.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 387,
    materia: "bmf1",
    tema: "bmf1_a20",
    modulo: 1,
    dificuldade: 2,
    correta: 2,
    enunciado:
      "No tubo digestorio, o parassimpatico (vago/sacral) tem efeito global de:",
    opcoes: [
      "A) Reduzir motilidade e secrecao em resposta de estresse",
      "B) Vasoconstricao mesenterica intensa como efeito principal",
      "C) Aumentar motilidade e secrecao",
      "D) Bloquear toda atividade do sistema enterico",
    ],
    explicacao_geral:
      "Aula contrasta parassimpatico pro-motilidade versus simpatico vasoconstritor.",
    explicacoes_opcoes: {
      A: "Incorreta: perfil mais simpatico.",
      B: "Incorreta: descricao do eixo simpatico.",
      C: "Correta: corresponde a tabela de inervacao.",
      D: "Incorreta: nao e bloqueio absoluto do enterico.",
    },
    explicacao:
      "Resumo: Parassimpatico favorece digestao ativa.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 388,
    materia: "bmf1",
    tema: "bmf1_a20",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "O simpatico esplancnico, no contexto da aula, tende a:",
    opcoes: [
      "A) Aumentar secrecao e peristalse como efeito dominante",
      "B) Atuar apenas na mucosa sem efeito vascular",
      "C) Substituir a funcao dos plexos entericos",
      "D) Promover vasoconstricao mesenterica e reduzir motilidade em estresse",
    ],
    explicacao_geral:
      "Simpatico e associado a resposta de estresse com freio funcional digestorio.",
    explicacoes_opcoes: {
      A: "Incorreta: efeito oposto ao esperado.",
      B: "Incorreta: ha efeito vascular importante.",
      C: "Incorreta: nao substitui o sistema enterico.",
      D: "Correta: resumo direto da tabela.",
    },
    explicacao:
      "Resumo: Estresse simpatico = menos fluxo/esvaziamento digestorio.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 389,
    materia: "bmf1",
    tema: "bmf1_a20",
    modulo: 1,
    dificuldade: 3,
    correta: 0,
    enunciado:
      "Qual alternativa diferencia corretamente os plexos entericos de Auerbach e Meissner?",
    opcoes: [
      "A) Auerbach (mioenterico) relaciona-se mais a motilidade na camada muscular; Meissner (submucoso) regula secrecao/funcao local da mucosa",
      "B) Auerbach e exclusivamente vascular, enquanto Meissner e linfatico",
      "C) Meissner fica no peritonio parietal e Auerbach no omento",
      "D) Ambos sao plexos somaticos motores da parede abdominal",
    ],
    explicacao_geral:
      "Aula pede localizacao e funcao geral dos dois plexos do sistema enterico.",
    explicacoes_opcoes: {
      A: "Correta: condensa localizacao e papel funcional classicos.",
      B: "Incorreta: classificacao sem base no conteudo.",
      C: "Incorreta: localizacoes anatomicas erradas.",
      D: "Incorreta: nao sao somaticos da parede.",
    },
    explicacao:
      "Resumo: Mioenterico puxa motilidade; submucoso modula secrecao local.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 390,
    materia: "bmf1",
    tema: "bmf1_a20",
    modulo: 1,
    dificuldade: 3,
    correta: 1,
    enunciado:
      "Paciente com suspeita de isquemia mesenterica apresenta dor abdominal desproporcional ao exame. Pela metalinguagem anatomoclinica da aula, a conduta diagnostica deve priorizar:",
    opcoes: [
      "A) Apenas antiacido e observacao sem imagem",
      "B) Correlacao do territorio arterial/venoso acometido com exame de imagem para confirmar oclusao e definir possibilidade de revascularizacao",
      "C) Tratar como dor funcional sem considerar perfusao",
      "D) Focar somente em etiologia biliar, independentemente de perfusao intestinal",
    ],
    explicacao_geral:
      "A secao clinica liga territorio vascular a decisao rapida em isquemia.",
    explicacoes_opcoes: {
      A: "Incorreta: subestima urgencia potencial.",
      B: "Correta: integra anatomia vascular e tomada de decisao.",
      C: "Incorreta: ignora sinal de gravidade.",
      D: "Incorreta: restringe indevidamente o raciocinio.",
    },
    explicacao:
      "Resumo: Dor desproporcional pede pensar perfusao mesenterica e imagem dirigida.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 391,
    materia: "bmf1",
    tema: "bmf1_a20",
    modulo: 1,
    dificuldade: 3,
    correta: 3,
    enunciado:
      "Em termos de metalinguagem de prova, qual sintese integra melhor o eixo arterial-venoso-neural do TGI desta aula?",
    opcoes: [
      "A) Um unico tronco arterial irriga todo o intestino, sem zonas de fronteira",
      "B) O retorno venoso digestorio vai direto a cava sem filtro metabolico",
      "C) Simpatico e parassimpatico produzem efeitos identicos na motilidade",
      "D) Tres territorios arteriais (celiaco, AMS, AMI) organizam a perfusao; sangue nutritivo segue pela porta ao figado; modulacao neural resulta do equilibrio enterico/autonomico",
    ],
    explicacao_geral:
      "Questao de integracao: mapa arterial, eixo portal e controle autonomico-enterico.",
    explicacoes_opcoes: {
      A: "Incorreta: existem territorios e zonas de transicao.",
      B: "Incorreta: fluxo portal precede retorno sistemico.",
      C: "Incorreta: efeitos sao globalmente opostos.",
      D: "Correta: integra os tres pilares da aula.",
    },
    explicacao:
      "Resumo: Perfusao, drenagem portal e controle neural formam um mesmo mapa funcional.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
];

function main() {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const arr = data.questoes;
  const map = Object.fromEntries(novas.map((x) => [x.id, x]));
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i].id] && arr[i].tema === "bmf1_a20") {
      arr[i] = map[arr[i].id];
      n++;
    }
  }
  if (n !== 10) throw new Error(`bmf1_a20: esperado 10, obtido ${n}`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
  JSON.parse(fs.readFileSync(file, "utf8"));
  console.log("bmf1_a20 OK (382-391)");
}

main();
