import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");

const required = [
  "index.html",
  "admin.html",
  "comprar.html",
  "landing.html",
  "favicon.ico",
  "manifest.json",
  "sw.js",
  "mascote-auth.webp",
  "firebase-config.js",
  "stripe-config.js",
  "data/materias.json",
  "data/flashcards.json",
  "data/questoes.json",
  "data/questoes_antigas.json",
  "data/curriculum/catalog.json",
  "data/curriculum/lessons.json",
  "data/curriculum/maps/uninove-vergueiro-2026-1.json",
  "materiais/modulo1/sus/sus_a1.md",
  "materiais/modulo5/clinica_medica5/cm5_a1.md",
  "materiais/modulo6/tecnica_operatoria/tcar_a1.md",
];

const forbidden = [
  ".env",
  "data/codigos.json",
  "data/questoes_ineditas.json",
  "data/agent_logs",
  "data/feedback",
  "scripts",
  "prompts",
  "functions",
  "graphify-out",
  "graphify-7",
  "tmp",
  "quarantine",
];

function exists(rel) {
  return fs.existsSync(path.join(PUBLIC, rel));
}

const missing = required.filter((rel) => !exists(rel));
const leaked = forbidden.filter((rel) => exists(rel));

const report = {
  publicDir: PUBLIC,
  required: required.length,
  missing,
  forbidden: forbidden.length,
  leaked,
};

console.log(JSON.stringify(report, null, 2));

if (missing.length || leaked.length) {
  process.exit(1);
}
