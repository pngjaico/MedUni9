/**
 * Build an allowlisted Firebase Hosting bundle in ./public.
 * This avoids deploying the whole repository root.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");

const ROOT_FILES = [
  "index.html",
  "comprar.html",
  "admin.html",
  "manifest.json",
  "sw.js",
  "firebase-config.js",
  "stripe-config.js",
  "mascote.webp",
  "mascote_small.webp",
  "mascote_transparent.png",
  "mascote.png",
];

const INCLUDE_OPTIONAL_ASSETS = process.env.INCLUDE_OPTIONAL_ASSETS === "1";

const MATERIAIS_MODULES = ["modulo1", "modulo2", "modulo3", "modulo4"];

const ROOT_DIRS = INCLUDE_OPTIONAL_ASSETS ? ["figuras-materiais"] : [];

const DATA_FILES = [
  "materias.json",
  "flashcards.json",
  "questoes.json",
  "questoes_ineditas.json",
  "questoes_antigas.json",
  "materiais_figuras.json",
  "to_instrumentais.json",
  "anatomia_atlas.json",
  "anatomia_revisao.json",
  "histologia_atlas.json",
  "histologia_revisao.json",
  "anatomia_data.json",
  "histologia_data.json",
  "cupons.json",
  "embaixadores.json",
  "vendas_mensais.json",
];

const DATA_DIRS = INCLUDE_OPTIONAL_ASSETS
  ? ["instrumentais", "agent_logs", "histologia"]
  : ["agent_logs", "histologia"];

function rmDirSafe(p) {
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function copyFileIfExists(src, dst) {
  if (!fs.existsSync(src)) return false;
  ensureDir(path.dirname(dst));
  fs.copyFileSync(src, dst);
  return true;
}

function copyDirIfExists(src, dst) {
  if (!fs.existsSync(src)) return false;
  ensureDir(path.dirname(dst));
  fs.cpSync(src, dst, { recursive: true });
  return true;
}

function main() {
  rmDirSafe(PUBLIC);
  ensureDir(PUBLIC);

  let copiedFiles = 0;
  let copiedDirs = 0;

  for (const f of ROOT_FILES) {
    if (copyFileIfExists(path.join(ROOT, f), path.join(PUBLIC, f))) copiedFiles++;
  }
  for (const d of ROOT_DIRS) {
    if (copyDirIfExists(path.join(ROOT, d), path.join(PUBLIC, d))) copiedDirs++;
  }

  const materiaisBase = path.join(ROOT, "materiais");
  const materiaisOut = path.join(PUBLIC, "materiais");
  ensureDir(materiaisOut);
  for (const moduloDir of MATERIAIS_MODULES) {
    if (copyDirIfExists(path.join(materiaisBase, moduloDir), path.join(materiaisOut, moduloDir))) copiedDirs++;
  }

  const dataOut = path.join(PUBLIC, "data");
  ensureDir(dataOut);
  for (const f of DATA_FILES) {
    if (copyFileIfExists(path.join(ROOT, "data", f), path.join(dataOut, f))) copiedFiles++;
  }
  for (const d of DATA_DIRS) {
    if (copyDirIfExists(path.join(ROOT, "data", d), path.join(dataOut, d))) copiedDirs++;
  }

  console.log(
    JSON.stringify(
      {
        publicDir: PUBLIC,
        copiedFiles,
        copiedDirs,
      },
      null,
      2
    )
  );
}

main();

