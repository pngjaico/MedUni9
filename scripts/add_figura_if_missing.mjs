/**
 * Insere um bloco ### Figura sugerida após o primeiro ## Relevância … --- se ausente.
 *
 * Uso: node scripts/add_figura_if_missing.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const MATERIAS = path.join(ROOT, "data", "materias.json");

const TARGETS = ["bmf2", "semiologia2", "clinica_medica6"];

function norm(s) {
  return s.replace(/\r\n/g, "\n");
}

function loadModulos() {
  const j = JSON.parse(fs.readFileSync(MATERIAS, "utf8"));
  const m = {};
  for (const [id, v] of Object.entries(j)) {
    if (v && typeof v.modulo === "number") m[id] = v.modulo;
  }
  return m;
}

/** aulaId ex.: bmf2_a3, cm6_a12, semio2_a1 */
function figIdFromAulaId(aulaId) {
  const i = aulaId.lastIndexOf("_");
  if (i < 0) return `${aulaId.toUpperCase()}-F01`;
  const prefix = aulaId.slice(0, i).replace(/_/g, "").toUpperCase();
  const suf = aulaId.slice(i + 1);
  const num = suf.replace(/^a/i, "");
  return `${prefix}-A${num}-F01`;
}

function figBlock(figId) {
  return `### Figura sugerida

**Figura-ID:** \`${figId}\`

- **Momento:** após a relevância clínica (visualizar o eixo principal da aula no app).
- **O que mostrar:** esquema ou ilustração alinhada ao tema central — produção deve detalhar na arte final.
- **Tipo sugerido:** esquema didático | ilustração estilo atlas | infográfico | foto contextual | outro.
- **Legenda (rascunho):** a fixar junto da imagem final (\`data/materiais_figuras.json\`).
- **Notas (opcional):** busca em Wikimedia Commons quando fizer sentido; respeitar licença e crédito.

`;
}

function insertFig(content, aulaId) {
  if (content.includes("### Figura sugerida")) return null;
  const figId = figIdFromAulaId(path.basename(aulaId, ".md"));
  const block = figBlock(figId);
  const re = /(## Relevância Clínica e Acadêmica\s*\n[\s\S]*?\n---\s*\n)/m;
  if (re.test(content)) {
    return content.replace(re, `$1\n${block}`);
  }
  /** fallback: após primeiro # título */
  const re2 = /(#[^\n]+\n\n)/;
  if (re2.test(content)) {
    return content.replace(re2, `$1${block}\n`);
  }
  return null;
}

function mirrorWrite(materiaId, modulo, aulaFile, body) {
  const dataPath = path.join(ROOT, "data", "materiais", materiaId, aulaFile);
  const modPath = path.join(ROOT, "materiais", `modulo${modulo}`, materiaId, aulaFile);
  fs.writeFileSync(dataPath, body, "utf8");
  fs.mkdirSync(path.dirname(modPath), { recursive: true });
  fs.writeFileSync(modPath, body, "utf8");
}

function main() {
  const modulos = loadModulos();
  let added = 0;
  for (const materiaId of TARGETS) {
    const mod = modulos[materiaId];
    if (!mod) continue;
    const dir = path.join(ROOT, "data", "materiais", materiaId);
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".md")).sort()) {
      const fp = path.join(dir, f);
      const raw = norm(fs.readFileSync(fp, "utf8"));
      const next = insertFig(raw, f);
      if (!next || next === raw) continue;
      mirrorWrite(materiaId, mod, f, next);
      added++;
      console.log("+fig", materiaId, f);
    }
  }
  console.log("add_figura_if_missing: inserted blocks:", added);
}

main();
