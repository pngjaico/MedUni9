/**
 * Adiciona ## Ponte com a Clínica (se ausente) antes de ## Pontos-Chave
 * e ## Referências (se ausente) no final. Idempotente.
 */
import fs from "fs";
import path from "path";

const ROOT = path.resolve("materiais/modulo2");

function firstLine(content) {
  const line = content.split("\n").find((l) => l.trim().length > 0);
  return line || "";
}

function referenciasBlock(disciplina) {
  const blocks = {
    bmf2: `## Referências

- Guyton AC, Hall JE. *Tratado de Fisiologia Médica*. Elsevier.
- Ganong WF. *Fisiologia Médica*. AMGH/McGraw-Hill.
- Ross MH, Pawlina W. *Histologia: texto e atlas*. Elsevier.`,
    bcm1: `## Referências

- Alberts B et al. *Fundamentos de Biologia Celular e Molecular*. Artmed.
- Junqueira LC, Carneiro J. *Histologia Básica*. Guanabara Koogan.
- Lodish H et al. *Biologia Celular e Molecular*. Artmed.`,
    mad1: `## Referências

- Abbas AK, Lichtman AH, Pillai S. *Imunologia Celular e Molecular*. Elsevier.
- Murphy K, Weaver C. *Janeway Imunologia*. Elsevier.
- Sociedade Brasileira de Imunologia — materiais e diretrizes de graduação (consulta).`,
    semiologia2: `## Referências

- Bates B et al. *Propedêutica Médica*. Guanabara Koogan.
- Porto CC. *Semiologia Médica*. Guanabara Koogan.
- Diretrizes brasileiras e protocolos FCFM/Uninove quando indicados na turma.`,
    indicadores: `## Referências

- Gordis L. *Epidemiologia*. Elsevier.
- Ministério da Saúde / DATASUS — notas técnicas e boletins epidemiológicos.
- Organização Mundial da Saúde — definições e classificações de indicadores de saúde.`,
    ds: `## Referências

- Organização das Nações Unidas. Objetivos de Desenvolvimento Sustentável (ODS).
- Ministério da Saúde / Conselho Nacional do Meio Ambiente — políticas socioambientais e saúde.
- Organização Mundial da Saúde — relatórios sobre ambiente e saúde.`,
  };
  return blocks[disciplina] || blocks.bmf2;
}

function ponteBlock(disciplina, titleLine) {
  const t = titleLine.replace(/^#\s+/, "").replace(/\*\*/g, "").trim();
  const tail = t.includes(":") ? t.split(":").pop().trim() : t;
  const intros = {
    bmf2: `No **ambulatório** e no estágio, você verá pacientes com **FC**, **PA**, **edema** e queixas respiratórias — tudo ligado ao que esta aula cobre. Treine explicar **mecanismo** (por que o sinal aparece) e não só o nome do conceito.`,
    bcm1: `Quando interpretar **exames**, **biópsias** ou **farmacos**, você recairá na **morfologia celular** desta aula. Na prova, a Uninove costuma pedir o **elo** entre organela, função e exemplo clínico.`,
    mad1: `No plantão, **hemograma**, **imunização** e **quadros infecciosos/autoimunes** exigem o mapa mental do sistema imune. Use esta aula para justificar **conduta** (vacina, isolamento, investigação).`,
    semiologia2: `Na **propedêutica**, cada minuto com o paciente testa **método**, **sequência** e **correlação** sinal–hipótese. Leve esta aula para a **simulação** e para a **prova objetiva** com o mesmo rigor de checklist.`,
    indicadores: `Em **APS**, **vigilância** e leitura de **boletins**, você usa **incidência**, **prevalência** e **mortalidade** todos os dias. Esta aula evita confundir **numerador/denominador** e **interpretação** de taxas.`,
    ds: `**Mudanças climáticas**, **saneamento** e **equidade** aparecem em **saúde coletiva** e em mesas com o paciente. Conecte o tema da aula a **políticas** e a **prática** do SUS.`,
  };
  const intro = intros[disciplina] || intros.bmf2;
  return `## Ponte com a Clínica

**Tema:** ${tail}

${intro}

> **Checklist:** uma queixa comum que este conteúdo ajuda a destrinchar; um exame ou dado epidemiológico que você passaria a interpretar melhor; um erro que a banca costuma explorar se você estudar só definição.

---
`;
}

function processFile(full, disciplina) {
  let content = fs.readFileSync(full, "utf8").replace(/\r\n/g, "\n");
  const titleLine = firstLine(content);
  let changed = false;

  if (!content.includes("## Ponte com a Clínica")) {
    const re = /\n---\s*\n+\s*(## Pontos-Chave[^\n]*)/;
    const m = re.exec(content);
    if (m) {
      const block = ponteBlock(disciplina, titleLine);
      content = content.replace(re, `\n\n${block}\n$1`);
      changed = true;
    }
  }

  if (!content.includes("\n## Referências\n") && !content.includes("\n## Referências\r\n")) {
    content = content.trimEnd() + "\n\n---\n\n" + referenciasBlock(disciplina) + "\n";
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(full, content, { encoding: "utf8" });
  }
  return changed;
}

let n = 0;
for (const dir of fs.readdirSync(ROOT, { withFileTypes: true })) {
  if (!dir.isDirectory()) continue;
  const sub = path.join(ROOT, dir.name);
  for (const f of fs.readdirSync(sub)) {
    if (!f.endsWith(".md")) continue;
    if (processFile(path.join(sub, f), dir.name)) n++;
  }
}
console.log(JSON.stringify({ filesUpdated: n }, null, 2));
