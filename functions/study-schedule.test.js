const assert = require('node:assert/strict');
const test = require('node:test');

const {
  buildDefaultP2Lessons,
  buildTemplateId,
  generateStudyPlanItems,
  normalizeAiScheduleDraft,
} = require('./study-schedule');

const materias = [
  {
    id: 'clinica_medica5',
    nome: 'Clinica Medica',
    sigla: 'CM5',
    modulo: 5,
    aulas: [
      { id: 'cm5_a1', tema: 'Hipertensao' },
      { id: 'cm5_a2', tema: 'Diabetes' },
      { id: 'cm5_a3', tema: 'Insuficiencia cardiaca' },
    ],
  },
  {
    id: 'farmaco_aplicada',
    nome: 'Farmacologia Aplicada',
    sigla: 'FARM',
    modulo: 5,
    aulas: [
      { id: 'farm_a1', tema: 'Farmacocinetica' },
      { id: 'farm_a2', tema: 'Antibioticos' },
    ],
  },
];

test('buildDefaultP2Lessons uses every lesson not selected for P1', () => {
  const p2 = buildDefaultP2Lessons(materias, {
    clinica_medica5: ['cm5_a1', 'cm5_a2'],
    farmaco_aplicada: ['fake_id'],
  });

  assert.deepEqual(p2, {
    clinica_medica5: ['cm5_a3'],
    farmaco_aplicada: ['farm_a1', 'farm_a2'],
  });
});

test('generateStudyPlanItems distributes only on weekdays and preserves manual priority', () => {
  const items = generateStudyPlanItems({
    schedule: {
      module: 5,
      dailyTarget: 1,
      examDates: { p1: '2026-05-19', p2: '2026-06-02', av2: '2026-06-16' },
      p1LessonsByMateria: {
        clinica_medica5: ['cm5_a1', 'cm5_a2'],
        farmaco_aplicada: ['farm_a1'],
      },
      p2LessonsByMateria: {
        clinica_medica5: ['cm5_a3'],
        farmaco_aplicada: ['farm_a2'],
      },
      manualItems: [
        { id: 'manual_1', date: '2026-05-15', materiaId: 'farmaco_aplicada', aulaId: 'farm_a2', title: 'Rever antibioticos' },
      ],
      completedItems: ['lesson:p1:clinica_medica5:cm5_a1'],
    },
    materias,
    todayKey: '2026-05-15',
  });

  assert.ok(items.some((item) => item.id === 'manual_1' && item.manual === true));
  assert.ok(items.every((item) => !['2026-05-16', '2026-05-17'].includes(item.date)));
  assert.equal(items.find((item) => item.id === 'lesson:p1:clinica_medica5:cm5_a1').completed, true);
  assert.equal(items.find((item) => item.id === 'lesson:p1:clinica_medica5:cm5_a2').date, '2026-05-18');
});

test('normalizeAiScheduleDraft maps discipline aliases and filters invalid lesson ids', () => {
  const draft = normalizeAiScheduleDraft({
    room: 'c',
    examDates: { p1: '2026-05-20', p2: '20/06/2026', av2: 'bad' },
    subjects: [
      { sigla: 'CM5', p1LessonIds: ['cm5_a1', 'cm5_a999'] },
      { materiaId: 'farmaco_aplicada', p1LessonIds: ['farm_a1'] },
    ],
  }, materias);

  assert.equal(draft.room, 'C');
  assert.deepEqual(draft.examDates, { p1: '2026-05-20', p2: '2026-06-20', av2: '' });
  assert.deepEqual(draft.p1LessonsByMateria, {
    clinica_medica5: ['cm5_a1'],
    farmaco_aplicada: ['farm_a1'],
  });
});

test('buildTemplateId is stable for the same campus module room and P1 date', () => {
  assert.equal(
    buildTemplateId({ facultyId: 'uninove', campusId: 'vergueiro', module: 5, room: 'C', examDates: { p1: '2026-05-20' } }),
    'uninove_vergueiro_m5_c_2026-05-20'
  );
  assert.equal(
    buildTemplateId({ facultyId: 'Uninove Medicina', campusId: 'São Bernardo', module: 6, room: 'j', examDates: { p1: '20/05/2026' } }),
    'uninove_medicina_sao_bernardo_m6_j_2026-05-20'
  );
});
