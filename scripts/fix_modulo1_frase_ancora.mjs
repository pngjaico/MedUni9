import fs from "fs";
import path from "path";

const anchors = {
  sus_a1:
    "> **A doença aparece no corpo, mas nasce também no território; prevenção muda a linha, promoção muda o cenário.**",
  sus_a2:
    "> **Antes do SUS, acesso seguia vínculo e campanha; depois do SUS, saúde passa a ser direito de cidadania.**",
  sus_a8:
    "> **APS forte cadastra, acolhe, acompanha e coordena; não é pronto atendimento barato.**",
  sus_a9:
    "> **Genograma mostra família, ecomapa mostra rede; ferramenta boa vira plano, não desenho bonito.**",
  semio1_a1:
    "> **Primeiro padrão, origem e red flags; depois teste especial.**",
  semio1_a2:
    "> **OPQRST transforma dor em hipótese; red flag transforma hipótese em prioridade.**",
  semio1_a3:
    "> **Inspecione antes de tocar: global, bilateral, segmentar e dinâmico.**",
  semio1_a4:
    "> **Palpe comparando e localizando; dor sem mapa vira chute.**",
  semio1_a5:
    "> **Ativa testa paciente; passiva testa articulação; força testa sistema motor.**",
  semio1_a6:
    "> **Nomear síndrome vem depois de excluir urgência.**",
  semio1_a7:
    "> **OSCE bom é segurança, sequência e raciocínio verbalizado.**",
  semio1_a8:
    "> **Ambulatório bom muda plano real, não só preenche SOAP.**",
  semio1_a9:
    "> **Reunião clínica forte prioriza risco, hipótese e plano rastreável.**",
};

const materiaByAula = (aulaId) =>
  aulaId.startsWith("sus_") ? "sus" : "semiologia1";

function materialPaths(aulaId) {
  const materia = materiaByAula(aulaId);
  return {
    source: path.join("data", "materiais", materia, `${aulaId}.md`),
    mirror: path.join("materiais", "modulo1", materia, `${aulaId}.md`),
  };
}

function insertAnchor(text, aulaId) {
  const title = "### Frase-âncora para não esquecer";
  if (text.includes(title)) return text;

  const diffTitle = "### Diferenciações";
  const start = text.indexOf(diffTitle);
  if (start === -1) {
    throw new Error(`${aulaId}: seção Diferenciações não encontrada`);
  }

  const nextSubsection = text.indexOf("\n### ", start + diffTitle.length);
  const insertAt = nextSubsection === -1 ? text.trimEnd().length : nextSubsection;
  const block = `\n\n${title}\n\n${anchors[aulaId]}`;

  if (nextSubsection === -1) {
    return `${text.slice(0, insertAt)}${block}\n`;
  }

  return `${text.slice(0, insertAt).trimEnd()}${block}\n\n${text
    .slice(insertAt)
    .trimStart()}`;
}

for (const aulaId of Object.keys(anchors)) {
  const { source, mirror } = materialPaths(aulaId);
  const sourceText = fs.readFileSync(source, "utf8");
  const nextText = insertAnchor(sourceText, aulaId);
  fs.writeFileSync(source, nextText, "utf8");
  fs.writeFileSync(mirror, nextText, "utf8");
  console.log(`${aulaId}: frase-âncora ok`);
}
