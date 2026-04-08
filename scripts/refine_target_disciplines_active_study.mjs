/**
 * Refinamento em bloco (fluidez + aplicacao) para disciplinas-alvo.
 * Mantem estrutura canonica (Pre-Prova + Sintese + Diferenciacoes + Frase-ancora).
 *
 * Alvo: pmh, bioestatistica, indicadores, ds, mad1, mad2
 * Escrita: data/materiais/<materia> e espelho em materiais/moduloN/<materia>
 *
 * Uso:
 *   node scripts/refine_target_disciplines_active_study.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const MATERIAS_PATH = path.join(ROOT, "data", "materias.json");

const TARGETS = new Set(["pmh", "bioestatistica", "indicadores", "ds", "mad1", "mad2"]);
const QUANT = new Set(["bioestatistica", "indicadores", "ds"]);

function norm(s) {
  return s.replace(/\r\n/g, "\n").normalize("NFC");
}

function loadCatalog() {
  return JSON.parse(fs.readFileSync(MATERIAS_PATH, "utf8"));
}

function refinementParagraph(materiaId) {
  if (QUANT.has(materiaId)) {
    return (
      "Para estudar por esta plataforma sem perder desempenho em prova, aplique a sintese em um micro-cenario numerico: identifique qual medida deve ser usada, execute uma conta simples (ou interprete a grandeza apresentada) e finalize com a decisao clinico-epidemiologica mais defensavel. Esse roteiro reduz erro por decoracao isolada e aumenta acerto em questoes de interpretacao."
    );
  }
  return (
    "Para fixar com autonomia, transforme esta sintese em uma vinheta curta: quem e o paciente, qual e a pista central e qual conduta/raciocinio diferencia a resposta correta da pegadinha. Esse treino mental de contexto melhora fluidez de revisao e reduz erro por leitura fragmentada na hora da prova."
  );
}

function refineOne(content, materiaId) {
  const t = norm(content);
  if (t.includes("Para estudar por esta plataforma sem perder desempenho em prova") || t.includes("Para fixar com autonomia, transforme esta sintese em uma vinheta curta")) {
    return null;
  }

  const re =
    /(### Síntese para a prova\s*\n)([\s\S]*?)(\n### Diferenciações[^\n]*\n)/m;
  const m = t.match(re);
  if (!m) return null;

  const paragraph = refinementParagraph(materiaId);
  const body = m[2].trimEnd();
  const nextBody = `${body}\n\n${paragraph}\n`;
  return t.replace(re, `${m[1]}${nextBody}${m[3]}`);
}

function mirrorWrite(materiaId, modulo, fileName, body) {
  const dataPath = path.join(ROOT, "data", "materiais", materiaId, fileName);
  const modPath = path.join(ROOT, "materiais", `modulo${modulo}`, materiaId, fileName);
  fs.mkdirSync(path.dirname(dataPath), { recursive: true });
  fs.mkdirSync(path.dirname(modPath), { recursive: true });
  fs.writeFileSync(dataPath, body, "utf8");
  fs.writeFileSync(modPath, body, "utf8");
}

function main() {
  const cat = loadCatalog();
  const byDisc = {};
  let total = 0;

  for (const [materiaId, v] of Object.entries(cat)) {
    if (!TARGETS.has(materiaId)) continue;
    if (!v || typeof v.modulo !== "number") continue;
    const modulo = v.modulo;
    const dir = path.join(ROOT, "data", "materiais", materiaId);
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md")).sort();
    let changed = 0;
    for (const f of files) {
      const fp = path.join(dir, f);
      const raw = fs.readFileSync(fp, "utf8");
      const next = refineOne(raw, materiaId);
      if (!next || norm(raw) === norm(next)) continue;
      mirrorWrite(materiaId, modulo, f, next);
      changed++;
      total++;
      console.log("refined", materiaId, f);
    }
    byDisc[materiaId] = changed;
  }

  console.log("summary", JSON.stringify({ byDisc, total }, null, 2));
}

main();

