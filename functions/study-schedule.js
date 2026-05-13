const crypto = require('crypto');

const BRASILIA_TZ = 'America/Sao_Paulo';
const ROOM_RE = /^[A-J]$/;

function normalizeText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeIdPart(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '') || 'na';
}

function normalizeRoom(value) {
  const room = String(value || '').trim().toUpperCase();
  return ROOM_RE.test(room) ? room : '';
}

function normalizeDateKey(value) {
  const raw = String(value || '').trim();
  if (!raw) return '';
  const iso = raw.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (iso) return `${iso[1]}-${iso[2]}-${iso[3]}`;
  const br = raw.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{4})$/);
  if (br) {
    const dd = br[1].padStart(2, '0');
    const mm = br[2].padStart(2, '0');
    return `${br[3]}-${mm}-${dd}`;
  }
  const parsed = new Date(raw);
  if (!Number.isNaN(parsed.getTime())) return parsed.toISOString().slice(0, 10);
  return '';
}

function dateKeyToUtcDate(dateKey) {
  const key = normalizeDateKey(dateKey);
  return key ? new Date(`${key}T12:00:00.000Z`) : null;
}

function addDays(dateKey, days) {
  const date = dateKeyToUtcDate(dateKey);
  if (!date) return '';
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

function compareDateKeys(a, b) {
  const aa = normalizeDateKey(a);
  const bb = normalizeDateKey(b);
  if (!aa && !bb) return 0;
  if (!aa) return -1;
  if (!bb) return 1;
  return aa.localeCompare(bb);
}

function isWeekday(dateKey) {
  const date = dateKeyToUtcDate(dateKey);
  if (!date) return false;
  const day = date.getUTCDay();
  return day >= 1 && day <= 5;
}

function weekdayKeysBetween(startKey, endExclusiveKey) {
  let cur = normalizeDateKey(startKey);
  const end = normalizeDateKey(endExclusiveKey);
  const out = [];
  if (!cur || !end || compareDateKeys(cur, end) >= 0) return out;
  while (compareDateKeys(cur, end) < 0) {
    if (isWeekday(cur)) out.push(cur);
    cur = addDays(cur, 1);
  }
  return out;
}

function dateKeyInTimeZone(date = new Date(), timeZone = BRASILIA_TZ) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);
  const map = Object.fromEntries(parts.map((p) => [p.type, p.value]));
  return `${map.year}-${map.month}-${map.day}`;
}

function materiaLessonIds(materia) {
  return (Array.isArray(materia?.aulas) ? materia.aulas : [])
    .map((aula) => String(aula?.id || '').trim())
    .filter(Boolean);
}

function materiaById(materias) {
  const map = new Map();
  (Array.isArray(materias) ? materias : []).forEach((m) => {
    if (m?.id) map.set(String(m.id), m);
  });
  return map;
}

function lessonById(materias) {
  const map = new Map();
  (Array.isArray(materias) ? materias : []).forEach((m) => {
    (Array.isArray(m?.aulas) ? m.aulas : []).forEach((aula) => {
      if (aula?.id) map.set(String(aula.id), { ...aula, materiaId: m.id, materiaNome: m.nome, materiaSigla: m.sigla });
    });
  });
  return map;
}

function cleanLessonMap(materias, rawMap) {
  const out = {};
  const byMateria = materiaById(materias);
  Object.entries(rawMap && typeof rawMap === 'object' ? rawMap : {}).forEach(([materiaId, list]) => {
    const materia = byMateria.get(String(materiaId));
    if (!materia) return;
    const validIds = new Set(materiaLessonIds(materia));
    const values = Array.isArray(list) ? list : [];
    const clean = [...new Set(values.map((id) => String(id || '').trim()).filter((id) => validIds.has(id)))];
    out[materia.id] = clean;
  });
  return out;
}

function buildDefaultP2Lessons(materias, p1LessonsByMateria = {}) {
  const p1 = cleanLessonMap(materias, p1LessonsByMateria);
  const out = {};
  (Array.isArray(materias) ? materias : []).forEach((materia) => {
    if (!materia?.id) return;
    const p1Set = new Set(p1[materia.id] || []);
    out[materia.id] = materiaLessonIds(materia).filter((id) => !p1Set.has(id));
  });
  return out;
}

function makeLessonItem({ phase, materia, aula, date }) {
  const materiaId = String(materia.id);
  const aulaId = String(aula.id);
  return {
    id: `lesson:${phase}:${materiaId}:${aulaId}`,
    date,
    phase,
    kind: phase === 'av2' ? 'review' : 'lesson',
    materiaId,
    aulaId,
    title: `${materia.sigla || materia.nome || materiaId}: ${aula.tema || aulaId}`,
    manual: false,
  };
}

function buildLessonQueue({ phase, lessonMap, materias }) {
  const byMateria = materiaById(materias);
  const out = [];
  Object.entries(lessonMap && typeof lessonMap === 'object' ? lessonMap : {}).forEach(([materiaId, lessonIds]) => {
    const materia = byMateria.get(String(materiaId));
    if (!materia) return;
    const aulaMap = new Map((Array.isArray(materia.aulas) ? materia.aulas : []).map((a) => [String(a.id), a]));
    (Array.isArray(lessonIds) ? lessonIds : []).forEach((lessonId) => {
      const aula = aulaMap.get(String(lessonId));
      if (aula) out.push({ phase, materia, aula });
    });
  });
  return out;
}

function distributeQueue(queue, days, dailyTarget) {
  const target = Math.max(1, Math.min(12, Number(dailyTarget) || 2));
  if (!Array.isArray(days) || days.length === 0) return [];
  const out = [];
  let dayIdx = 0;
  let countOnDay = 0;
  queue.forEach((entry) => {
    if (countOnDay >= target && dayIdx < days.length - 1) {
      dayIdx += 1;
      countOnDay = 0;
    }
    const date = days[dayIdx];
    out.push(makeLessonItem({ ...entry, date }));
    countOnDay += 1;
  });
  return out;
}

function normalizeManualItems(items, materias) {
  const lessons = lessonById(materias);
  return (Array.isArray(items) ? items : [])
    .map((item, idx) => {
      const date = normalizeDateKey(item?.date);
      const aulaId = String(item?.aulaId || '').trim();
      const lesson = lessons.get(aulaId);
      const materiaId = String(item?.materiaId || lesson?.materiaId || '').trim();
      if (!date || !materiaId) return null;
      return {
        id: String(item?.id || `manual:${date}:${materiaId}:${aulaId || idx}`),
        date,
        phase: 'manual',
        kind: 'manual',
        materiaId,
        aulaId: aulaId || null,
        title: String(item?.title || (lesson ? `${lesson.materiaSigla || lesson.materiaNome}: ${lesson.tema || aulaId}` : 'Tema manual')).slice(0, 140),
        manual: true,
      };
    })
    .filter(Boolean);
}

function generateStudyPlanItems({ schedule, materias, todayKey = dateKeyInTimeZone() }) {
  const safeSchedule = schedule && typeof schedule === 'object' ? schedule : {};
  const target = Math.max(1, Math.min(12, Number(safeSchedule.dailyTarget) || 2));
  const p1 = normalizeDateKey(safeSchedule.examDates?.p1);
  const p2 = normalizeDateKey(safeSchedule.examDates?.p2);
  const av2 = normalizeDateKey(safeSchedule.examDates?.av2);
  const start = normalizeDateKey(todayKey) || dateKeyInTimeZone();
  const p1Lessons = cleanLessonMap(materias, safeSchedule.p1LessonsByMateria);
  const p2Lessons = cleanLessonMap(materias, safeSchedule.p2LessonsByMateria || buildDefaultP2Lessons(materias, p1Lessons));
  const p1Items = p1
    ? distributeQueue(
        buildLessonQueue({ phase: 'p1', lessonMap: p1Lessons, materias }),
        weekdayKeysBetween(start, p1),
        target
      )
    : [];
  const p2Start = p1 && compareDateKeys(addDays(p1, 1), start) > 0 ? addDays(p1, 1) : start;
  const p2Items = p2
    ? distributeQueue(
        buildLessonQueue({ phase: 'p2', lessonMap: p2Lessons, materias }),
        weekdayKeysBetween(p2Start, p2),
        target
      )
    : [];
  const allLessons = {};
  (Array.isArray(materias) ? materias : []).forEach((materia) => {
    allLessons[materia.id] = materiaLessonIds(materia);
  });
  const av2Start = p2 && compareDateKeys(addDays(p2, 1), start) > 0 ? addDays(p2, 1) : start;
  const av2Items = av2
    ? distributeQueue(
        buildLessonQueue({ phase: 'av2', lessonMap: allLessons, materias }),
        weekdayKeysBetween(av2Start, av2),
        target
      )
    : [];
  const completed = new Set(Array.isArray(safeSchedule.completedItems) ? safeSchedule.completedItems.map(String) : []);
  return [
    ...normalizeManualItems(safeSchedule.manualItems, materias),
    ...p1Items,
    ...p2Items,
    ...av2Items,
  ]
    .map((item) => ({ ...item, completed: completed.has(String(item.id)) }))
    .sort((a, b) => compareDateKeys(a.date, b.date) || Number(a.manual === false) - Number(b.manual === false) || a.title.localeCompare(b.title));
}

function buildMateriaAliases(materia) {
  return [
    materia.id,
    materia.sigla,
    materia.nome,
    ...(Array.isArray(materia.aliases) ? materia.aliases : []),
  ].map(normalizeText).filter(Boolean);
}

function resolveMateria(input, materias) {
  const wanted = [input?.materiaId, input?.sigla, input?.nome, input?.name, input?.discipline]
    .map(normalizeText)
    .filter(Boolean);
  if (!wanted.length) return null;
  return (Array.isArray(materias) ? materias : []).find((materia) => {
    const aliases = buildMateriaAliases(materia);
    return wanted.some((w) => aliases.includes(w));
  }) || null;
}

function normalizeAiScheduleDraft(raw, materias) {
  const parsed = typeof raw === 'string' ? JSON.parse(raw) : (raw || {});
  const p1LessonsByMateria = {};
  (Array.isArray(parsed.subjects) ? parsed.subjects : []).forEach((subject) => {
    const materia = resolveMateria(subject, materias);
    if (!materia) return;
    const validIds = new Set(materiaLessonIds(materia));
    const ids = [
      ...(Array.isArray(subject.p1LessonIds) ? subject.p1LessonIds : []),
      ...(Array.isArray(subject.aulasP1) ? subject.aulasP1 : []),
    ].map((id) => String(id || '').trim()).filter((id) => validIds.has(id));
    p1LessonsByMateria[materia.id] = [...new Set(ids)];
  });
  return {
    module: Number(parsed.module || parsed.modulo || 0) || null,
    room: normalizeRoom(parsed.room || parsed.sala || parsed.turma),
    examDates: {
      p1: normalizeDateKey(parsed.examDates?.p1 || parsed.p1),
      p2: normalizeDateKey(parsed.examDates?.p2 || parsed.p2),
      av2: normalizeDateKey(parsed.examDates?.av2 || parsed.av2),
    },
    p1LessonsByMateria,
    confidence: ['high', 'medium', 'low'].includes(String(parsed.confidence || '').toLowerCase())
      ? String(parsed.confidence).toLowerCase()
      : 'low',
    notes: String(parsed.notes || parsed.observacoes || '').slice(0, 600),
  };
}

function buildTemplateId({ facultyId, campusId, module, room, examDates }) {
  const raw = [
    normalizeIdPart(facultyId || 'uninove') || 'uninove',
    normalizeIdPart(campusId || 'vergueiro') || 'vergueiro',
    `m${Number(module || 0) || 0}`,
    normalizeIdPart(normalizeRoom(room) || 'sem_sala') || 'sem_sala',
    normalizeDateKey(examDates?.p1) || 'sem_p1',
  ].join('_');
  return raw.replace(/_+/g, '_').slice(0, 120);
}

function hashScheduleTemplate(payload) {
  return crypto.createHash('sha256').update(JSON.stringify(payload || {})).digest('hex').slice(0, 16);
}

module.exports = {
  BRASILIA_TZ,
  addDays,
  buildDefaultP2Lessons,
  buildTemplateId,
  cleanLessonMap,
  compareDateKeys,
  dateKeyInTimeZone,
  generateStudyPlanItems,
  hashScheduleTemplate,
  isWeekday,
  normalizeAiScheduleDraft,
  normalizeDateKey,
  normalizeManualItems,
  normalizeRoom,
  weekdayKeysBetween,
};
