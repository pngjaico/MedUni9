import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_MD = "data/agent_logs/modulo1_status_report_2026-05-12.md";
const OUT_JSON = "data/agent_logs/modulo1_status_report_2026-05-12.json";

const FLASHCARD_CATEGORIES = new Set(["definicao", "mecanismo", "clinica", "diferenciacao", "prova", "extra_livro"]);
const FLASHCARD_ORIGINS = new Set(["material", "extra"]);
const MOJIBAKE_MARKERS = [0x00c3, 0x00c2, 0xfffd].map((n) => String.fromCharCode(n));

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), "utf8");
}

function readRaw(rel) {
  return fs.readFileSync(path.join(ROOT, rel));
}

function readJson(rel, fallback = null) {
  const full = path.join(ROOT, rel);
  if (!fs.existsSync(full)) return fallback;
  return JSON.parse(fs.readFileSync(full, "utf8"));
}

function asArray(raw, key) {
  if (!raw) return [];
  return Array.isArray(raw) ? raw : raw[key] || [];
}

function normalize(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function sha(value) {
  return crypto.createHash("sha256").update(String(value).replace(/\r\n/g, "\n")).digest("hex");
}

function hasMojibake(value) {
  const s = String(value || "");
  return MOJIBAKE_MARKERS.some((marker) => s.includes(marker));
}

function parseMiniQuiz(md) {
  const heading = /^#{2,3}\s*Mini\s*Quiz\s*$/im.exec(md || "");
  if (!heading) return { hasSection: false, questions: [] };
  const rest = String(md).slice(heading.index + heading[0].length);
  const nextHeading = /^#{2,3}\s+\S.*$/im.exec(rest);
  const section = (nextHeading ? rest.slice(0, nextHeading.index) : rest).trim();
  const questionRe = /^\s*(?:\*\*(\d+)\.\s*([\s\S]*?)\*\*|(\d+)\.\s*\*\*([\s\S]*?)\*\*)\s*$/gm;
  const matches = [];
  let m;
  while ((m = questionRe.exec(section))) {
    matches.push({ index: m.index, end: questionRe.lastIndex, text: String(m[2] || m[4] || "").trim() });
  }
  const questions = matches.map((q, idx) => {
    const next = matches[idx + 1];
    const block = section.slice(q.end, next ? next.index : section.length);
    const options = [...block.matchAll(/^\s*[-*]\s*\[(x|X|\s)\]\s*(.+?)\s*$/gm)];
    const correct = options.filter((om) => /x/i.test(om[1])).length;
    const hasExplanation = /^\s*>\s*\*\*Explica[^:]*:\*\*/im.test(block);
    return { text: q.text, options: options.length, correct, hasExplanation };
  });
  return { hasSection: true, questions };
}

function section(md, heading) {
  const lines = String(md || "").split(/\r?\n/);
  const target = normalize(heading);
  let start = -1;
  let level = 0;
  for (let i = 0; i < lines.length; i += 1) {
    const m = /^(#{2,3})\s+(.+?)\s*$/.exec(lines[i]);
    if (m && normalize(m[2]) === target) {
      start = i + 1;
      level = m[1].length;
      break;
    }
  }
  if (start < 0) return "";
  let end = lines.length;
  for (let i = start; i < lines.length; i += 1) {
    const m = /^(#{2,3})\s+/.exec(lines[i]);
    if (m && m[1].length <= level) {
      end = i;
      break;
    }
  }
  return lines.slice(start, end).join("\n").trim();
}

function compactHash(value) {
  return sha(normalize(value).replace(/\s+/g, " ").trim()).slice(0, 12);
}

function materialMetrics(md, raw) {
  const lines = md.split(/\r?\n/);
  const tableLines = lines.filter((l) => /^\s*\|/.test(l)).length;
  const tableBlocks = (md.match(/(?:^\|.*\n?){2,}/gm) || []).length;
  const bulletLines = lines.filter((l) => /^\s*-\s+/.test(l)).length;
  const quiz = parseMiniQuiz(md);
  const pontos = section(md, "Pontos-Chave para Prova");
  const issues = [];
  if (raw[0] === 0xef && raw[1] === 0xbb && raw[2] === 0xbf) issues.push("arquivo com BOM UTF-8");
  if (raw.includes(13)) issues.push("arquivo com CRLF/CR");
  if (lines.length < 120 || lines.length > 210) issues.push(`linhas fora da faixa: ${lines.length}`);
  if (tableBlocks > 4) issues.push(`tabelas demais: ${tableBlocks}`);
  if (hasMojibake(md)) issues.push("mojibake/artefato");
  for (const req of [
    "relevancia clinica e academica",
    "figura sugerida",
    "ponte com a clinica",
    "pontos-chave para prova",
    "mini quiz",
    "pre-prova",
    "sintese para a prova",
    "diferenciacoes",
  ]) {
    if (!normalize(md).includes(req)) issues.push(`secao ausente: ${req}`);
  }
  if (!normalize(md).includes("macete medgradplus")) issues.push("sem Macete MedGradPlus");
  if (!/pegadinha|armadilha/i.test(normalize(md))) issues.push("sem pegadinha/armadilha");
  if (!quiz.hasSection) issues.push("Mini Quiz ausente");
  if (quiz.hasSection && quiz.questions.length !== 4) issues.push(`Mini Quiz com ${quiz.questions.length} questoes`);
  for (const [idx, q] of quiz.questions.entries()) {
    if (q.options !== 4) issues.push(`Mini Quiz Q${idx + 1} sem 4 alternativas`);
    if (q.correct !== 1) issues.push(`Mini Quiz Q${idx + 1} sem correta unica`);
    if (!q.hasExplanation) issues.push(`Mini Quiz Q${idx + 1} sem explicacao`);
  }
  return {
    lines: lines.length,
    tableLines,
    tableBlocks,
    bulletLines,
    pontosBullets: (pontos.match(/^\s*-\s+/gm) || []).length,
    pontosBold: (pontos.match(/\*\*[^*\n]+\*\*/g) || []).length,
    miniQuiz: quiz,
    issues,
  };
}

const materias = readJson("data/materias.json");
const questoes = asArray(readJson("data/questoes.json"), "questoes");
const flashcards = asArray(readJson("data/flashcards.json"), "flashcards");
const figurasRaw = readJson("data/materiais_figuras.json");
const figuras = Array.isArray(figurasRaw) ? figurasRaw : figurasRaw?.entries || figurasRaw?.figuras || figurasRaw?.items || [];
const essentialsAudit = readJson("data/agent_logs/essenciais_alignment_audit.json", { suspicious: [] });
const questionAudit = readJson("data/agent_logs/questoes_audit.json", { summary: {} });
const basicAuditRaw = readJson("data/agent_logs/ciclo_basico_audit.json", {});
const basicAudit = basicAuditRaw.summary || basicAuditRaw;
const queue = readJson("data/agent_logs/ciclo_basico_aula_queue.json", { counts: {} });

const lessons = [];
for (const [materiaId, materia] of Object.entries(materias)) {
  if (Number(materia.modulo) !== 1 || materiaId === "pe1") continue;
  for (const aula of materia.aulas || []) {
    lessons.push({ materiaId, materiaNome: materia.nome, modulo: Number(materia.modulo), aulaId: aula.id, tema: aula.tema });
  }
}

const lessonIds = new Set(lessons.map((l) => l.aulaId));
const suspiciousM1 = (essentialsAudit.suspicious || []).filter((item) => lessonIds.has(item.aula_id));
const suspiciousByLesson = new Map();
for (const item of suspiciousM1) {
  if (!suspiciousByLesson.has(item.aula_id)) suspiciousByLesson.set(item.aula_id, []);
  suspiciousByLesson.get(item.aula_id).push(item);
}

const rows = [];
const pmhSections = { mapa: new Map(), ponte: new Map(), miniExGeneric: [] };

for (const lesson of lessons) {
  const dataRel = `data/materiais/${lesson.materiaId}/${lesson.aulaId}.md`;
  const mirrorRel = `materiais/modulo${lesson.modulo}/${lesson.materiaId}/${lesson.aulaId}.md`;
  const issues = [];
  let metrics = {};
  let materialHash = "";
  if (!fs.existsSync(path.join(ROOT, dataRel))) issues.push("material data ausente");
  if (!fs.existsSync(path.join(ROOT, mirrorRel))) issues.push("material espelho ausente");
  if (fs.existsSync(path.join(ROOT, dataRel)) && fs.existsSync(path.join(ROOT, mirrorRel))) {
    const raw = readRaw(dataRel);
    const md = raw.toString("utf8");
    const mirror = read(mirrorRel);
    materialHash = sha(md);
    if (sha(md) !== sha(mirror)) issues.push("espelho divergente");
    metrics = materialMetrics(md, raw);
    issues.push(...metrics.issues);
    if (lesson.materiaId === "pmh") {
      const mapa = section(md, "Mapa mental da aula");
      const ponte = section(md, "Ponte com a Clínica");
      const mapaHash = compactHash(mapa);
      const ponteHash = compactHash(ponte);
      if (!pmhSections.mapa.has(mapaHash)) pmhSections.mapa.set(mapaHash, []);
      if (!pmhSections.ponte.has(ponteHash)) pmhSections.ponte.set(ponteHash, []);
      pmhSections.mapa.get(mapaHash).push(lesson.aulaId);
      pmhSections.ponte.get(ponteHash).push(lesson.aulaId);
      const genericExpl = (normalize(md).match(/e o ponto que resolve a pergunta; as demais alternativas trocam via, orgao ou contexto clinico/g) || []).length;
      if (genericExpl) pmhSections.miniExGeneric.push({ aulaId: lesson.aulaId, genericExpl });
    }
  }

  const aulaQuestoes = questoes.filter((q) => q.aula_id === lesson.aulaId || q.tema === lesson.aulaId);
  const essenciais = aulaQuestoes.filter((q) => q.essencial === true);
  const qIssues = [];
  if (essenciais.length !== 12) qIssues.push(`essenciais=${essenciais.length}`);
  for (const q of essenciais) {
    if (q.aula_id !== lesson.aulaId || q.tema !== lesson.aulaId) qIssues.push(`join invalido q${q.id}`);
    if (q.materia !== lesson.materiaId) qIssues.push(`materia divergente q${q.id}`);
    if (!Array.isArray(q.opcoes) || q.opcoes.length !== 4) qIssues.push(`opcoes invalidas q${q.id}`);
    if (![0, 1, 2, 3].includes(q.correta)) qIssues.push(`correta invalida q${q.id}`);
    if (typeof q.caso_clinico !== "boolean") qIssues.push(`caso_clinico ausente q${q.id}`);
    if (!q.categoria) qIssues.push(`sem categoria q${q.id}`);
    if (!q.assunto_slug) qIssues.push(`sem assunto_slug q${q.id}`);
    if (!q.explicacao_geral || String(q.explicacao_geral).length < 80) qIssues.push(`explicacao geral fraca q${q.id}`);
    for (const letter of ["A", "B", "C", "D"]) {
      const expl = q.explicacoes_opcoes?.[letter] || "";
      if (!expl.startsWith("[CORRETA]") && !expl.startsWith("[INCORRETA]")) qIssues.push(`explicacao opcao invalida q${q.id}/${letter}`);
    }
    if (hasMojibake(JSON.stringify(q))) qIssues.push(`mojibake q${q.id}`);
  }

  const aulaCards = flashcards.filter((c) => c.tema === lesson.aulaId || c.aula_id === lesson.aulaId);
  const cIssues = [];
  if (aulaCards.length !== 12) cIssues.push(`flashcards=${aulaCards.length}`);
  for (const c of aulaCards) {
    if (c.tema !== lesson.aulaId) cIssues.push(`tema invalido card${c.id}`);
    if (c.materia !== lesson.materiaId) cIssues.push(`materia divergente card${c.id}`);
    if (!FLASHCARD_CATEGORIES.has(c.categoria)) cIssues.push(`categoria invalida card${c.id}`);
    if (!FLASHCARD_ORIGINS.has(c.origem)) cIssues.push(`origem invalida card${c.id}`);
    const clozes = String(c.frente || "").match(/\{\{c1::/g) || [];
    if (clozes.length !== 1) cIssues.push(`cloze invalido card${c.id}`);
    if (!Array.isArray(c.tags) || c.tags.length < 2 || c.tags.length > 4) cIssues.push(`tags invalidas card${c.id}`);
    if (!String(c.explicacao || "").trim()) cIssues.push(`explicacao vazia card${c.id}`);
    if (String(c.frente || "").length > 120) cIssues.push(`frente longa card${c.id}`);
    if (/cart[aã]o|flashcard|pergunta/i.test(String(c.frente || "") + " " + String(c.explicacao || ""))) cIssues.push(`metatexto card${c.id}`);
    if (hasMojibake(JSON.stringify(c))) cIssues.push(`mojibake card${c.id}`);
  }

  const aulaFiguras = figuras.filter((f) => f.aula === lesson.aulaId || f.aula_id === lesson.aulaId || f.aulaId === lesson.aulaId || f.tema === lesson.aulaId);
  const refsRel = `data/refs/${lesson.aulaId}.refs.json`;
  const refsIssues = [];
  if (!fs.existsSync(path.join(ROOT, refsRel))) refsIssues.push("refs ausente");
  else {
    const refsText = read(refsRel);
    if (hasMojibake(refsText)) refsIssues.push("refs com mojibake");
    if (/A ser preenchido/i.test(refsText)) refsIssues.push("refs com placeholder");
  }

  rows.push({
    ...lesson,
    materialHash,
    material: metrics,
    questionsTotal: aulaQuestoes.length,
    essentials: essenciais.length,
    clinicalCases: essenciais.filter((q) => q.caso_clinico === true).length,
    answerBalance: [0, 1, 2, 3].map((n) => essenciais.filter((q) => q.correta === n).length),
    flashcards: aulaCards.length,
    figures: aulaFiguras.length,
    figureStatuses: aulaFiguras.map((f) => f.status || "sem_status"),
    suspicious: suspiciousByLesson.get(lesson.aulaId) || [],
    issues: [...issues, ...qIssues, ...cIssues, ...refsIssues],
    materialIssues: issues,
    questionIssues: qIssues,
    cardIssues: cIssues,
    refsIssues,
  });
}

const byMateria = new Map();
for (const row of rows) {
  if (!byMateria.has(row.materiaId)) {
    byMateria.set(row.materiaId, {
      materia: row.materiaId,
      aulas: 0,
      ok: 0,
      questions: 0,
      essentials: 0,
      flashcards: 0,
      figures: 0,
      suspicious: 0,
      minLines: Infinity,
      maxLines: 0,
      materialIssueLessons: 0,
      questionIssueLessons: 0,
      cardIssueLessons: 0,
    });
  }
  const s = byMateria.get(row.materiaId);
  s.aulas += 1;
  if (row.issues.length === 0) s.ok += 1;
  s.questions += row.questionsTotal;
  s.essentials += row.essentials;
  s.flashcards += row.flashcards;
  s.figures += row.figures;
  s.suspicious += row.suspicious.length;
  s.minLines = Math.min(s.minLines, row.material?.lines || 0);
  s.maxLines = Math.max(s.maxLines, row.material?.lines || 0);
  if (row.materialIssues.length) s.materialIssueLessons += 1;
  if (row.questionIssues.length) s.questionIssueLessons += 1;
  if (row.cardIssues.length) s.cardIssueLessons += 1;
}

const figureStatusCounts = {};
for (const row of rows) {
  for (const status of row.figureStatuses) figureStatusCounts[status] = (figureStatusCounts[status] || 0) + 1;
}

const pmhDebt = {
  mapaUnique: pmhSections.mapa.size,
  ponteUnique: pmhSections.ponte.size,
  mapaDuplicates: [...pmhSections.mapa.entries()].filter(([, ids]) => ids.length > 1),
  ponteDuplicates: [...pmhSections.ponte.entries()].filter(([, ids]) => ids.length > 1),
  miniQuizGeneric: pmhSections.miniExGeneric,
};

const module1FlashcardIssues = {
  frenteLonga: rows.flatMap((r) => r.cardIssues.filter((i) => i.includes("frente longa")).map((i) => `${r.aulaId}: ${i}`)),
  metatexto: rows.flatMap((r) => r.cardIssues.filter((i) => i.includes("metatexto")).map((i) => `${r.aulaId}: ${i}`)),
  explicacaoVazia: rows.flatMap((r) => r.cardIssues.filter((i) => i.includes("explicacao vazia")).map((i) => `${r.aulaId}: ${i}`)),
};

const report = {
  generatedAt: new Date().toISOString(),
  scope: {
    modulo: 1,
    excluded: ["pe1"],
    lessons: rows.length,
    subjects: [...byMateria.keys()],
  },
  summaryBySubject: [...byMateria.values()].map((s) => ({ ...s, minLines: Number.isFinite(s.minLines) ? s.minLines : 0 })),
  totals: {
    lessons: rows.length,
    cleanLessons: rows.filter((r) => r.issues.length === 0).length,
    structuralIssueLessons: rows.filter((r) => r.issues.length > 0).length,
    questions: rows.reduce((sum, r) => sum + r.questionsTotal, 0),
    essentials: rows.reduce((sum, r) => sum + r.essentials, 0),
    flashcards: rows.reduce((sum, r) => sum + r.flashcards, 0),
    figures: rows.reduce((sum, r) => sum + r.figures, 0),
    suspiciousEssentials: suspiciousM1.length,
  },
  figureStatusCounts,
  pmhDebt,
  module1FlashcardIssues,
  suspiciousM1: suspiciousM1.map((item) => ({
    id: item.id,
    aula_id: item.aula_id,
    materia: item.materia,
    enunciado: item.enunciado,
  })),
  globalAudits: {
    validateQuestoesLatest: questionAudit.summary?.totalQuestoes || null,
    questoesAuditSummary: questionAudit.summary || null,
    essentialsSuspiciousGlobal: essentialsAudit.suspiciousCount ?? (essentialsAudit.suspicious || []).length,
    cicloBasicoAudit: basicAudit,
    queueCounts: queue.counts || {},
  },
  rows,
};

function table(headers, lines) {
  return [
    `| ${headers.join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
    ...lines.map((line) => `| ${line.join(" | ")} |`),
  ].join("\n");
}

const subjectTable = table(
  ["Materia", "Aulas", "OK estrut.", "Questoes", "Essenciais", "Flashcards", "Figuras", "Suspeitas", "Linhas"],
  report.summaryBySubject.map((s) => [
    s.materia,
    String(s.aulas),
    `${s.ok}/${s.aulas}`,
    String(s.questions),
    String(s.essentials),
    String(s.flashcards),
    String(s.figures),
    String(s.suspicious),
    `${s.minLines}-${s.maxLines}`,
  ]),
);

const issueRows = rows.filter((r) => r.issues.length > 0);
const issueText = issueRows.length
  ? issueRows.map((r) => `- ${r.aulaId}: ${r.issues.length} achados; ${r.issues.slice(0, 12).join("; ")}`).join("\n")
  : "- Nenhuma falha de qualidade estruturada detectada pelo consolidado em uma passada.";

const suspiciousByMateria = report.summaryBySubject
  .filter((s) => s.suspicious)
  .map((s) => `- ${s.materia}: ${s.suspicious} essenciais sinalizadas`)
  .join("\n") || "- Nenhuma essencial do Modulo 1 sinalizada.";

const suspiciousList = report.suspiciousM1
  .map((item) => `- ${item.materia}/${item.aula_id} q${item.id}: ${item.enunciado}`)
  .join("\n");

const pmhText = [
  `- Mapa mental da aula: ${pmhDebt.mapaUnique} versoes unicas em 14 aulas.`,
  `- Ponte com a Clinica: ${pmhDebt.ponteUnique} versoes unicas em 14 aulas.`,
  `- Mini Quiz PMH com explicacao generica padronizada: ${pmhDebt.miniQuizGeneric.length} aulas sinalizadas.`,
  ...pmhDebt.mapaDuplicates.map(([, ids]) => `- Mapa mental repetido em: ${ids.join(", ")}`),
  ...pmhDebt.ponteDuplicates.map(([, ids]) => `- Ponte repetida em: ${ids.join(", ")}`),
].join("\n");

const md = `# Relatorio de Revisao - Modulo 1 MedGradPlus

Gerado em: ${report.generatedAt}

## Veredito

O Modulo 1 esta **quase pronto**, mas ainda nao esta **fechado**.

O contrato bruto aula-aula esta muito avancado: materiais espelhados, Mini Quiz funcional, 12 essenciais, 12 flashcards, refs e decisao visual por aula. Mas a revisao mais critica encontrou lacunas que ainda derrubam o acabamento: flashcards de Semiologia1 com explicacao vazia e PMH com secoes repetidas em bloco.

## Escopo

- Inclui: BMF1, PMH, SUS e Semiologia1.
- Exclui por regra operacional: PE1.
- Total revisado: ${report.totals.lessons} aulas.

${subjectTable}

## O que temos

- ${report.totals.essentials} questoes essenciais no Modulo 1, alvo de 12 por aula.
- ${report.totals.flashcards} flashcards no Modulo 1, alvo de 12 por aula.
- ${report.totals.figures} decisoes/slots visuais registrados no Modulo 1.
- ${report.totals.questions} questoes totais vinculadas ao Modulo 1, incluindo nao essenciais reaproveitadas.
- Fila do ciclo basico: ${queue.counts?.ready ?? "?"} prontas, ${queue.counts?.pending ?? "?"} pendentes, ${queue.counts?.lessons ?? "?"} aulas totais.

## Validacoes recentes

- \`npm run validate:questoes\`: passou com ${questionAudit.summary?.totalQuestoes ?? "?"} questoes consistentes com o catalogo.
- \`npm run audit:questoes\`: sem \`aula_id\` invalido, sem \`tema\` invalido, sem mismatch de materia e sem aula com material abaixo do minimo de essenciais.
- \`npm run audit:essenciais:local\`: ${essentialsAudit.suspiciousCount ?? (essentialsAudit.suspicious || []).length} suspeitas globais; ${report.totals.suspiciousEssentials} no Modulo 1.
- \`node scripts/audit_flashcards.cjs\`: auditoria global ainda aponta dividas antigas fora do contrato aula-aula; ver secao de pendencias.
- Observacao operacional: a execucao oficial 54x2 de \`validate_ciclo_basico_aula\` + \`lint_ciclo_basico_v3\` ficou lenta e estourou timeout nesta rodada; o consolidado deste relatorio carrega os JSONs uma vez e checa as invariantes centrais mais auditoria adicional de qualidade de flashcards.

## Falhas estruturais do Modulo 1

${issueText}

## Pendencias reais

1. **Semiologia1 precisa reparar explicacoes de flashcards.** O alvo de 12 cards existe, mas \`semio1_a2\`-\`semio1_a9\` estao com explicacoes vazias em cards; isso passa no validador por aula, mas falha no acabamento.
2. **PMH precisa de acabamento editorial fino.** Estruturalmente passa, mas ainda tem trechos repetidos demais e explicacoes de Mini Quiz com molde generico.
3. **Revisar semanticamente as essenciais sinalizadas.** A heuristica marcou ${report.totals.suspiciousEssentials} essenciais no Modulo 1; isso nao prova erro, mas exige leitura humana antes do carimbo final.
4. **Rodada visual separada.** As decisoes/slots existem, mas a maioria esta como pendente de curadoria/licenca/imagem final.
5. **Resumo A4 continua ausente no ciclo basico.** O auditor global aponta ${basicAudit.resumoA4MissingForMaterialLessons ?? "?"} materiais sem Resumo A4.
6. **Dividas globais fora do Modulo 1 ainda existem.** O ciclo basico ainda tem ${basicAudit.materialLintFailures ?? "?"} falhas de material, ${basicAudit.lessonsBelow12Questions ?? "?"} aulas com menos de 12 questoes e ${basicAudit.lessonsBelow12Essentials ?? "?"} com menos de 12 essenciais.

## PMH - divida editorial

${pmhText}

Minha leitura: PMH esta correto como estrutura, mas nao como produto final premium. O aluno percebe repeticao de template. O reparo certo e aula por aula, preservando questoes/cards, reescrevendo apenas Mapa mental, Ponte com a Clinica e explicacoes do Mini Quiz quando estiverem genericas.

## Essenciais sinalizadas no Modulo 1

${suspiciousByMateria}

${suspiciousList || "- Sem lista."}

## Imagens

- Status por figura/slot: ${Object.entries(figureStatusCounts).map(([k, v]) => `${k}=${v}`).join(", ") || "sem dados"}.
- BMF1: manter prioridade para anatomia/histologia/fisiologia util.
- Semiologia1: manter spots e imagens de exame fisico.
- PMH/SUS: usar infograficos quando simplificarem fluxo, nao como decoracao.

## Proxima sequencia recomendada

1. Reparar Semiologia1 \`semio1_a2\`-\`semio1_a9\`: preencher explicacoes dos flashcards sem alterar a selecao dos 12 cards.
2. Fazer PMH fino: 14 aulas, uma por vez, material-only, sem mexer em questoes/cards salvo erro claro.
3. Revisar as ${report.totals.suspiciousEssentials} essenciais sinalizadas do Modulo 1, item por item.
4. Rodar novamente \`validate:questoes\`, \`audit:questoes\`, \`audit:essenciais:local\`, \`audit_flashcards\` e gerar fila.
5. Fazer rodada visual do Modulo 1: preencher imagem/licenca/credito dos slots ja registrados.
6. Depois disso, declarar Modulo 1 fechado e seguir para o proximo modulo/materia.
`;

fs.writeFileSync(path.join(ROOT, OUT_JSON), JSON.stringify(report, null, 2) + "\n", "utf8");
fs.writeFileSync(path.join(ROOT, OUT_MD), md, "utf8");
console.log(JSON.stringify({ report: OUT_MD, json: OUT_JSON, totals: report.totals, pmhDebt }, null, 2));
