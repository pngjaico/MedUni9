/**
 * Move blocos ## ... que ficaram após ## Pré-Prova para antes dele (canônico: Pré-Prova é o último ##).
 * Ajustado inicialmente para aulinhas BMF1 com "Referências / Leitura / Síntese rápida" no tail.
 *
 * Uso: node scripts/fix_h2_after_preprova.mjs [materiaId]
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const MATERIAS = path.join(ROOT, "data", "materias.json");

function norm(s) {
  return s.replace(/\r\n/g, "\n");
}

function loadModulo(materiaId) {
  const j = JSON.parse(fs.readFileSync(MATERIAS, "utf8"));
  const v = j[materiaId];
  return v && typeof v.modulo === "number" ? v.modulo : null;
}

function reorder(content) {
  const n = norm(content);
  const needle = "\n## Pré-Prova\n";
  const preIdx = n.indexOf(needle);
  if (preIdx < 0) return null;
  const before = n.slice(0, preIdx).trimEnd();
  const fromPre = n.slice(preIdx + 1).trimStart(); // "## Pré-Prova\n..."

  const frase = "### Frase-âncora para não esquecer";
  const fa = fromPre.indexOf(frase);
  if (fa < 0) return null;

  const afterFa = fromPre.slice(fa);
  const m = afterFa.match(/\n---\s*\n(## )/);
  if (!m) return null;

  const cutAt = fa + m.index;
  const preprovaBlock = fromPre.slice(0, cutAt).trim();
  const tail = fromPre.slice(cutAt).replace(/^\n---\s*\n/, "").trim();
  if (!tail.startsWith("##")) return null;

  return `${before}\n\n${tail}\n\n${preprovaBlock}\n`;
}

function mirrorWrite(materiaId, modulo, aulaFile, body) {
  const dataPath = path.join(ROOT, "data", "materiais", materiaId, aulaFile);
  const modPath = path.join(ROOT, "materiais", `modulo${modulo}`, materiaId, aulaFile);
  fs.writeFileSync(dataPath, body, "utf8");
  fs.mkdirSync(path.dirname(modPath), { recursive: true });
  fs.writeFileSync(modPath, body, "utf8");
}

function main() {
  const materiaId = process.argv[2] || "bmf1";
  const mod = loadModulo(materiaId);
  if (!mod) {
    console.error("Módulo desconhecido:", materiaId);
    process.exit(1);
  }
  const dir = path.join(ROOT, "data", "materiais", materiaId);
  let n = 0;
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".md"))) {
    const fp = path.join(dir, f);
    const raw = fs.readFileSync(fp, "utf8");
    const next = reorder(raw);
    if (!next || norm(next) === norm(raw)) continue;
    mirrorWrite(materiaId, mod, f, next);
    console.log("reordered tail", f);
    n++;
  }
  console.log("fix_h2_after_preprova: files changed", n);
}

main();
