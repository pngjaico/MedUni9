/**
 * Remove o bloco ### Figura sugerida existente e reinsere-o imediatamente após
 * o texto de ## Relevância (antes do primeiro ## seguinte). Corrige posicionamento
 * quando o primeiro \n---\n\n## no ficheiro era o separador antes de Pontos-Chave.
 */
import fs from "fs";
import path from "path";

const ROOT = path.resolve("materiais/modulo2");

const FIG_BLOCK_RE =
  /\n### Figura sugerida\n\n\*\*Figura-ID:\*\* `([^`]+)`[\s\S]*?- \*\*Notas \(opcional\):\*\*[^\n]*\n/;

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

function insertAfterRelevancia(content, block) {
  const marker = "## Relevância Clínica e Acadêmica\n\n";
  const idx = content.indexOf(marker);
  if (idx === -1) return { ok: false, reason: "no relevância" };
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
  return { ok: true, content: content.slice(0, insertAt) + "\n\n" + block + content.slice(insertAt) };
}

function writeUtf8NoBom(filePath, text) {
  fs.writeFileSync(filePath, text.replace(/\r\n/g, "\n"), { encoding: "utf8" });
}

const report = [];

for (const dir of fs.readdirSync(ROOT, { withFileTypes: true })) {
  if (!dir.isDirectory()) continue;
  const sub = path.join(ROOT, dir.name);
  for (const f of fs.readdirSync(sub)) {
    if (!f.endsWith(".md")) continue;
    const full = path.join(sub, f);
    const rel = path.relative(process.cwd(), full).replace(/\\/g, "/");
    let content = fs.readFileSync(full, "utf8").replace(/\r\n/g, "\n");
    const figMatch = content.match(FIG_BLOCK_RE);
    if (!figMatch) {
      report.push({ file: rel, action: "skip_no_figura_block" });
      continue;
    }
    const id = figMatch[1];
    const stripped = content.replace(FIG_BLOCK_RE, "\n");
    const block = makeFigureBlock(id);
    const r = insertAfterRelevancia(stripped, block);
    if (!r.ok) {
      report.push({ file: rel, action: "FAIL", reason: r.reason });
      continue;
    }
    writeUtf8NoBom(full, r.content);
    report.push({ file: rel, action: "repaired", id });
  }
}

const outPath = path.resolve("data/repair_modulo2_figura_report.json");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify({ report }, null, 2), "utf8");
console.log(JSON.stringify({ repaired: report.filter((x) => x.action === "repaired").length, reportPath: outPath }, null, 2));
