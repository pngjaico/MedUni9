/**
 * Insere bloco ### Figura sugerida após ## Relevância Clínica e Acadêmica (Módulo 2).
 * (a) Se existir \n---\n\n## antes da secção seguinte, usa o mesmo padrão do M1.
 * (b) Caso contrário, insere antes do primeiro \n## após a relevância.
 */
import fs from "fs";
import path from "path";

const ROOT = path.resolve("materiais/modulo2");
const OUT_JSON = path.resolve("data/new_figuras_modulo2_entries.json");

function figIdFromFile(filename) {
  const base = path.basename(filename, ".md");
  const parts = base.split("_a");
  if (parts.length < 2) return null;
  const discKey = parts[0];
  const num = parts[1].replace(/^0+/, "") || parts[1];
  const map = {
    bmf2: "BMF2",
    bcm1: "BCM1",
    mad1: "MAD1",
    semio2: "SEMIO2",
    ind: "IND",
    ds: "DS",
  };
  const prefix = map[discKey] || discKey.toUpperCase();
  return `${prefix}-A${num}-F01`;
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

/**
 * Insere após o texto da relevância:
 * - Se existir bloco --- antes do primeiro ## temático, insere antes do --- (padrão BCM1).
 * - Senão, insere antes do primeiro \n## (ex.: BMF2 sem --- inicial).
 * O primeiro \n## deve ser o da secção seguinte à relevância, não o --- do fim (Pontos-Chave).
 */
function insertBlock(content, block) {
  const marker = "## Relevância Clínica e Acadêmica\n\n";
  const idx = content.indexOf(marker);
  if (idx === -1) {
    return { ok: false, reason: "no relevância heading" };
  }
  const start = idx + marker.length;
  const rest = content.slice(start);
  const bridge = /\n+\s*---\s*\n+\s*## /.exec(rest);
  const h2 = /\n## /.exec(rest);
  let insertAt;
  if (bridge && (!h2 || bridge.index < h2.index)) {
    insertAt = start + bridge.index;
  } else if (h2) {
    insertAt = start + h2.index;
  } else {
    return { ok: false, reason: "no H2 after relevância" };
  }
  const newContent = content.slice(0, insertAt) + "\n\n" + block + content.slice(insertAt);
  return { ok: true, content: newContent, mode: "after_relevância" };
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
    modulo: 2,
    disciplina,
    aula,
    caminhoMaterial: `materiais/modulo2/${disciplina}/${aula}.md`,
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
    notas: "Placeholder Módulo 2 — preencher URL no Commons quando o módulo estiver revisado.",
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
    if (!id) {
      report.push({ file: rel, action: "FAIL", reason: "figId parse" });
      continue;
    }
    const block = makeFigureBlock(id);
    const r = insertBlock(content, block);
    if (!r.ok) {
      report.push({ file: rel, action: "FAIL", reason: r.reason });
      continue;
    }
    writeUtf8NoBom(full, r.content);
    entries.push(jsonEntry(disciplina, f, id, firstLine));
    report.push({ file: rel, action: "inserted", id, mode: r.mode });
  }
}

fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
fs.writeFileSync(OUT_JSON, JSON.stringify({ entries, report }, null, 2), "utf8");
console.log(JSON.stringify({ inserted: entries.length, reportPath: OUT_JSON }, null, 2));
