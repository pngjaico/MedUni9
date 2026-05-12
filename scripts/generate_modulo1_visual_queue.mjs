import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = "data/agent_logs/modulo1_visual_round_queue_2026-05-12.json";

function readJson(rel) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, rel), "utf8"));
}

function lessonNumber(aulaId) {
  const match = /_a(\d+)$/.exec(aulaId || "");
  return match ? Number(match[1]) : 999;
}

const priorityByDisciplina = {
  bmf1: 1,
  semiologia1: 2,
  pmh: 3,
  sus: 4,
};

const visualActionByDisciplina = {
  bmf1: "curar imagem anatomica, histologica ou fisiologica util; preferir Commons/atlas local; usar esquema autoral somente se indispensavel",
  semiologia1: "curar spot semiologico, fluxo de exame ou imagem de tecnica; evitar foto generica de consulta",
  pmh: "usar esquema metabolico apenas quando reduzir carga cognitiva",
  sus: "usar linha do tempo, fluxo ou mapa conceitual simples; sem ilustracao decorativa",
};

const materias = readJson("data/materias.json");
const raw = readJson("data/materiais_figuras.json");
const figuras = Array.isArray(raw) ? raw : raw.entries || raw.figuras || raw.items || [];

const m1Lessons = new Set();
for (const [disciplina, materia] of Object.entries(materias)) {
  if (Number(materia.modulo) !== 1 || disciplina === "pe1") continue;
  for (const aula of materia.aulas || []) m1Lessons.add(aula.id);
}

const items = figuras
  .filter((fig) => m1Lessons.has(fig.aula || fig.aula_id || fig.aulaId || fig.tema))
  .map((fig) => {
    const aula = fig.aula || fig.aula_id || fig.aulaId || fig.tema;
    const disciplina = fig.disciplina || aula.split("_a")[0];
    const hasUrl = Boolean(fig.urlImagem || fig.url || fig.image || fig.src);
    return {
      id: fig.id,
      aula,
      disciplina,
      priority: priorityByDisciplina[disciplina] || 9,
      status: fig.status || "sem_status",
      hasUrl,
      needsCuration: !hasUrl || ["pendente", "pendente_curadoria"].includes(fig.status || ""),
      preferredSource: "Commons/licenca aberta ou atlas local antes de imagem gerada",
      visualAction: visualActionByDisciplina[disciplina] || "julgar se imagem realmente melhora aprendizagem",
      buscaCommonsEn: fig.buscaCommonsEn || "",
      buscaCommonsPt: fig.buscaCommonsPt || "",
      descricaoVisual: fig.descricaoVisual || "",
      legenda: fig.legenda || "",
    };
  })
  .sort((a, b) => a.priority - b.priority || lessonNumber(a.aula) - lessonNumber(b.aula) || String(a.id).localeCompare(String(b.id)));

const counts = {};
for (const item of items) {
  counts[item.status] = (counts[item.status] || 0) + 1;
}

const queue = {
  generatedAt: new Date().toISOString(),
  scope: "Modulo 1 visual round; pe1 excluded",
  delayPolicy: {
    defaultDelaySecondsBetweenItems: 8,
    minimumDelaySecondsBetweenItems: 5,
    pauseAfterEveryItems: 10,
    pauseAfterEveryItemsSeconds: 30,
    rationale: "Evitar travar buscas/curadoria visual e manter revisao item a item.",
  },
  rules: [
    "Nao usar imagem decorativa.",
    "Nao usar API externa nem navegador sem pedido explicito.",
    "Nao editar materiais textuais nesta rodada, salvo ajuste de legenda/credito.",
    "Registrar urlImagem, urlThumbnail, urlPaginaCommons, licenca, credito e legenda antes de marcar como encontrada.",
  ],
  counts: {
    total: items.length,
    needsCuration: items.filter((item) => item.needsCuration).length,
    noUrl: items.filter((item) => !item.hasUrl).length,
    byStatus: counts,
  },
  order: ["bmf1", "semiologia1", "pmh", "sus"],
  items,
};

fs.mkdirSync(path.dirname(path.join(ROOT, OUT)), { recursive: true });
fs.writeFileSync(path.join(ROOT, OUT), JSON.stringify(queue, null, 2) + "\n", "utf8");
console.log(JSON.stringify({ output: OUT, counts: queue.counts, delayPolicy: queue.delayPolicy }, null, 2));
