/**
 * Valida materiais de aula (.md) ativos em data/materiais/<materia>/<aula>.md
 * conforme regras alinhadas a prompts/gerar_materiais_apoio.md.
 *
 * Uso: node scripts/validate_materiais_md.mjs
 * Saída: erros em stderr; código 1 se houver falhas.
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

function lines(text) {
  return norm(text).split("\n");
}

function validateFile(materiaId, aulaId, filePath) {
  const errs = [];
  if (!fs.existsSync(filePath)) {
    errs.push("arquivo ausente");
    return errs;
  }
  const raw = fs.readFileSync(filePath, "utf8");
  const t = norm(raw);
  const L = lines(raw);

  const preMatches = [...t.matchAll(/^## Pré-Prova\s*$/gm)];
  if (preMatches.length === 0) errs.push("falta ## Pré-Prova");
  if (preMatches.length > 1) errs.push(`## Pré-Prova duplicada (${preMatches.length} ocorrências)`);

  if (t.includes("### O que você PRECISA saber")) {
    errs.push('usa subtítulo legado "### O que você PRECISA saber" (esperado: ### Síntese para a prova em prosa)');
  }

  if (!t.includes("### Síntese para a prova")) {
    errs.push('falta ### Síntese para a prova');
  }

  if (!t.includes("### Figura sugerida")) {
    errs.push("falta ### Figura sugerida (mínimo 1 por aula)");
  }

  const idxPre = L.findIndex((l) => /^## Pré-Prova\s*$/.test(l));
  if (idxPre >= 0) {
    const after = L.slice(idxPre + 1);
    const h2After = after.filter((l) => /^## /.test(l));
    if (h2After.length > 0) {
      errs.push(`há seção ## após ## Pré-Prova (deve ser o último ##): ${h2After.slice(0, 3).join(" | ")}`);
    }
  }

  const idxRef = L.findIndex((l) => /^## Referências\s*$/.test(l));
  if (idxRef >= 0 && idxPre >= 0 && idxRef > idxPre) {
    errs.push("## Referências deve vir antes de ## Pré-Prova");
  }

  if (errs.length === 0 && idxPre >= 0) {
    const tail = L.slice(idxPre).join("\n");
    if (!tail.includes("### Diferenciações")) {
      errs.push("em ## Pré-Prova, falta bloco ### Diferenciações…");
    }
    if (!tail.includes("### Frase-âncora para não esquecer")) {
      errs.push("em ## Pré-Prova, falta ### Frase-âncora para não esquecer");
    }
  }

  return errs;
}

function main() {
  const j = JSON.parse(fs.readFileSync(MATERIAS, "utf8"));
  /** @type {{ materia: string, aula: string, path: string, errs: string[] }[]} */
  const failures = [];
  /** @type {{ materia: string, aula: string }[]} */
  const missing = [];
  const failOnMissing = process.env.VALIDATE_MATERIAIS_FAIL_ON_MISSING === "1";

  for (const [materiaId, v] of Object.entries(j)) {
    if (!v || v.ativo !== true) continue;
    const aulas = Array.isArray(v.aulas) ? v.aulas : [];
    for (const a of aulas) {
      const aulaId = a?.id;
      if (!aulaId) continue;
      const fp = path.join(ROOT, "data", "materiais", materiaId, `${aulaId}.md`);
      if (!fs.existsSync(fp)) {
        missing.push({ materia: materiaId, aula: aulaId });
        if (failOnMissing) {
          failures.push({ materia: materiaId, aula: aulaId, path: fp, errs: ["arquivo ausente"] });
        }
        continue;
      }
      const errs = validateFile(materiaId, aulaId, fp);
      if (errs.length) failures.push({ materia: materiaId, aula: aulaId, path: fp, errs });
    }
  }

  if (missing.length && !failOnMissing) {
    console.warn(
      `validate_materiais_md: aviso — ${missing.length} aula(s) ativa(s) sem .md (não contabilizado como falha). Defina VALIDATE_MATERIAIS_FAIL_ON_MISSING=1 para endurecer.`
    );
  }

  if (failures.length === 0) {
    console.log("validate_materiais_md: OK — todas as aulas com arquivo presente passaram na estrutura.");
    process.exit(0);
  }

  console.error(`validate_materiais_md: ${failures.length} aula(s) com problema:\n`);
  for (const f of failures) {
    console.error(`${f.materia}/${f.aula}.md`);
    for (const e of f.errs) console.error(`  - ${e}`);
    console.error("");
  }
  process.exit(1);
}

main();
