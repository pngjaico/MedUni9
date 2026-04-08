/**
 * Remove blocos duplicados antes do último ## Pré-Prova (aulas TO coladas 2x).
 * Mantém o trecho antes do primeiro ## Pré-Prova e o bloco a partir do último ## Pré-Prova.
 *
 * Uso: node scripts/fix_tcar_duplicate_preprova.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const MATERIA = "tecnica_operatoria";
const MOD = 6;
const FILES = ["tcar_a6.md", "tcar_a7.md", "tcar_a8.md", "tcar_a9.md"];

function norm(s) {
  return s.replace(/\r\n/g, "\n");
}

function collapseDoublePreProva(n) {
  const needle = "\n## Pré-Prova\n";
  let idxFirst = n.indexOf(needle);
  if (idxFirst < 0) {
    if (n.startsWith("## Pré-Prova\n")) idxFirst = -1;
    else return n;
  }
  const idxLast = n.lastIndexOf(needle);
  if (idxFirst < 0) {
    /** único pré-prova no início — arquivo estranho */
    return n;
  }
  if (idxFirst === idxLast) return n;
  const head = n.slice(0, idxFirst).trimEnd();
  const tail = n.slice(idxLast + 1).trimStart();
  return `${head}\n\n${tail}\n`;
}

function mirrorWrite(aulaFile, body) {
  const dataPath = path.join(ROOT, "data", "materiais", MATERIA, aulaFile);
  const modPath = path.join(ROOT, "materiais", `modulo${MOD}`, MATERIA, aulaFile);
  fs.writeFileSync(dataPath, body, "utf8");
  fs.mkdirSync(path.dirname(modPath), { recursive: true });
  fs.writeFileSync(modPath, body, "utf8");
}

function main() {
  for (const f of FILES) {
    const fp = path.join(ROOT, "data", "materiais", MATERIA, f);
    if (!fs.existsSync(fp)) {
      console.warn("skip missing", fp);
      continue;
    }
    const raw = fs.readFileSync(fp, "utf8");
    const next = collapseDoublePreProva(norm(raw));
    if (next === norm(raw)) {
      console.log("unchanged", f);
      continue;
    }
    mirrorWrite(f, next);
    console.log("fixed", f);
  }
}

main();
