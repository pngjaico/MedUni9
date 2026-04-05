/**
 * Insere ### Figura sugerida após ## Relevância Clínica e Acadêmica (Módulo 3).
 * Processa só pastas canónicas (chaves em data/materias.json): ignora duplicados fp3/st/semio3.
 */
import fs from "fs";
import path from "path";

const ROOT = path.resolve("materiais/modulo3");
const OUT_JSON = path.resolve("data/new_figuras_modulo3_entries.json");

/** Pastas espelhadas em data/materiais/<disciplina>/ — não processar fp3, st, semio3 (cópias legadas). */
const CANONICAL = new Set(["bmf3", "mad2", "fisiopato3", "semiologia3", "saude_trabalhador"]);

function figIdFromFile(filename) {
  const base = path.basename(filename, ".md");
  const parts = base.split("_a");
  if (parts.length < 2) return null;
  const discKey = parts[0];
  const num = parts[1].replace(/^0+/, "") || parts[1];
  const map = {
    bmf3: "BMF3",
    mad2: "MAD2",
    fp3: "FP3",
    semio3: "SEMIO3",
    st: "ST",
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
  fs.writeFileSync(filePath, text.replace(/\r\n/g, "\n"), { encoding: "utf8" });
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
    modulo: 3,
    disciplina,
    aula,
    caminhoMaterial: `materiais/modulo3/${disciplina}/${aula}.md`,
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
    notas: "Placeholder Módulo 3 — preencher URL no Commons quando o módulo estiver revisado.",
  };
}

const entries = [];
const report = [];

for (const dir of fs.readdirSync(ROOT, { withFileTypes: true })) {
  if (!dir.isDirectory()) continue;
  if (!CANONICAL.has(dir.name)) {
    report.push({ folder: dir.name, action: "skip (pasta duplicada ou não canónica)" });
    continue;
  }
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
