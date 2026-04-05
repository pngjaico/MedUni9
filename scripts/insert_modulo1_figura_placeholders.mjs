/**
 * Insere bloco ### Figura sugerida após o texto de ## Relevância Clínica e Acadêmica
 * (antes do primeiro --- que separa a secção seguinte). Não altera o texto da relevância.
 * Gera também new_figuras_entries.json para merge manual ou via script.
 */
import fs from "fs";
import path from "path";

const ROOT = path.resolve("materiais/modulo1");
const OUT_JSON = path.resolve("data/new_figuras_modulo1_entries.json");

function figIdFromFile(relPath) {
  const base = path.basename(relPath, ".md");
  const [disc, num] = base.split("_a");
  const n = num.replace(/^0+/, "") || num;
  const map = { bmf1: "BMF1", semio1: "SEMIO1", pmh: "PMH", sus: "SUS", pe1: "PE1" };
  const prefix = map[disc] || disc.toUpperCase();
  return `${prefix}-A${n}-F01`;
}

function makeFigureBlock(id) {
  return (
    `### Figura sugerida\n\n` +
    `**Figura-ID:** \`${id}\`\n\n` +
    `- **Momento:** após o bloco de relevância (reserva editorial para imagem no app; aparece inline quando houver URL no catálogo).\n` +
    `- **O que mostrar:** definir na produção — deve ilustrar o tema central da aula de forma clara em mobile.\n` +
    `- **Tipo sugerido:** esquema didático | ilustração estilo atlas | infográfico | foto contextual | outro.\n` +
    `- **Legenda (rascunho):** a fixar junto da imagem final (campo legenda em data/materiais_figuras.json).\n` +
    `- **Notas (opcional):** pesquisar no Wikimedia Commons (buscaCommonsEn / buscaCommonsPt no JSON); licenças livres e atribuição.\n`
  );
}

function insertBlock(content, block) {
  const re = /(## Relevância Clínica e Acadêmica\n\n)([\s\S]*?)(\n---\n\n## )/;
  if (!re.test(content)) {
    return { ok: false, reason: "no relevância block match" };
  }
  const newContent = content.replace(re, (_, h, body, sep) => h + body + "\n\n" + block + sep);
  return { ok: true, content: newContent };
}

function writeUtf8NoBom(filePath, text) {
  const normalized = text.replace(/\r\n/g, "\n");
  fs.writeFileSync(filePath, normalized, { encoding: "utf8" });
}

function jsonEntry(disciplina, aulaFile, id, titleLine) {
  const aula = path.basename(aulaFile, ".md");
  const titulo = titleLine.replace(/^#\s+/, "").trim();
  const slugEn = titulo
    .replace(/—/g, "")
    .replace(/[^\w\s\u00C0-\u024F]/g, " ")
    .trim()
    .split(/\s+/)
    .slice(0, 6)
    .join(" ");
  return {
    id,
    modulo: 1,
    disciplina,
    aula,
    caminhoMaterial: `materiais/modulo1/${disciplina}/${aula}.md`,
    momento: "Após bloco de relevância (placeholder editorial)",
    descricaoVisual: `Figura alinhada ao tema da aula: ${titulo}`,
    tipoSugerido: "Esquema didático ou ilustração com legenda; preferir Commons.",
    buscaCommonsEn: `${slugEn} medical education diagram`.trim(),
    buscaCommonsPt: `${titulo.split(":").pop().trim()} ilustração esquema`,
    status: "pendente",
    urlImagem: "",
    urlThumbnail: "",
    urlPaginaCommons: "",
    licenca: "",
    credito: "",
    legenda: titulo.slice(0, 120),
    notas: "Placeholder Módulo 1 — preencher URL no Commons quando as 4 disciplinas/módulos estiverem fechados.",
  };
}

const entries = [];
const report = [];

for (const dir of fs.readdirSync(ROOT, { withFileTypes: true })) {
  if (!dir.isDirectory()) continue;
  const sub = path.join(ROOT, dir.name);
  for (const f of fs.readdirSync(sub)) {
    if (!f.endsWith(".md")) continue;
    const full = path.join(sub, f);
    const rel = path.relative(process.cwd(), full).replace(/\\/g, "/");
    const disciplina = dir.name;
    let content = fs.readFileSync(full, "utf8").replace(/\r\n/g, "\n");
    if (content.includes("### Figura sugerida")) {
      report.push({ file: rel, action: "skip (já tem Figura sugerida)" });
      continue;
    }
    const firstLine = content.split("\n")[0] || "";
    const id = figIdFromFile(f);
    const block = makeFigureBlock(id);
    const r = insertBlock(content, block);
    if (!r.ok) {
      report.push({ file: rel, action: "FAIL", reason: r.reason });
      continue;
    }
    writeUtf8NoBom(full, r.content);
    entries.push(jsonEntry(disciplina, f, id, firstLine));
    report.push({ file: rel, action: "inserted", id });
  }
}

fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
fs.writeFileSync(OUT_JSON, JSON.stringify({ entries, report }, null, 2), "utf8");
console.log(JSON.stringify({ inserted: entries.length, reportPath: OUT_JSON }, null, 2));
