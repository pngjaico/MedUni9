const test = require('node:test');
const assert = require('node:assert/strict');

const {
  ACCOUNT_STATUS,
  TERMS_VERSION,
  analyzeSessionRisk,
  buildAccountStatusPatch,
  hashSignal,
  parseClientIp,
  sanitizeTermsAcceptance,
} = require('./security-helpers');

test('allows two known devices without raising a sharing event', () => {
  const result = analyzeSessionRisk({
    currentSession: {
      sessionId: 's2',
      deviceHash: 'device-b',
      ipHash: 'ip-a',
      country: 'BR',
      region: 'SP',
      updatedAtMs: Date.parse('2026-05-13T12:00:00Z'),
    },
    recentSessions: [
      {
        sessionId: 's1',
        deviceHash: 'device-a',
        ipHash: 'ip-a',
        country: 'BR',
        region: 'SP',
        updatedAtMs: Date.parse('2026-05-13T11:50:00Z'),
      },
    ],
    userData: { maxDispositivos: 2 },
    nowMs: Date.parse('2026-05-13T12:00:00Z'),
  });

  assert.equal(result.riskLevel, 'none');
  assert.deepEqual(result.events, []);
});

test('flags the third distinct device for manual review without auto-ban', () => {
  const result = analyzeSessionRisk({
    currentSession: {
      sessionId: 's3',
      deviceHash: 'device-c',
      ipHash: 'ip-a',
      country: 'BR',
      region: 'SP',
      updatedAtMs: Date.parse('2026-05-13T12:00:00Z'),
    },
    recentSessions: [
      { sessionId: 's1', deviceHash: 'device-a', ipHash: 'ip-a', country: 'BR', region: 'SP', updatedAtMs: Date.parse('2026-05-13T11:40:00Z') },
      { sessionId: 's2', deviceHash: 'device-b', ipHash: 'ip-a', country: 'BR', region: 'SP', updatedAtMs: Date.parse('2026-05-13T11:50:00Z') },
    ],
    userData: { maxDispositivos: 2 },
    nowMs: Date.parse('2026-05-13T12:00:00Z'),
  });

  assert.equal(result.riskLevel, 'medium');
  assert.equal(result.events.length, 1);
  assert.equal(result.events[0].type, 'too_many_devices');
  assert.equal(result.events[0].evidence.distinctDevices, 3);
  assert.equal(result.events[0].enforcementSuggestion, 'manual_review');
});

test('raises severity when a new device also appears from a new network', () => {
  const result = analyzeSessionRisk({
    currentSession: {
      sessionId: 's3',
      deviceHash: 'device-c',
      ipHash: 'ip-c',
      country: 'BR',
      region: 'RJ',
      updatedAtMs: Date.parse('2026-05-13T12:00:00Z'),
    },
    recentSessions: [
      { sessionId: 's1', deviceHash: 'device-a', ipHash: 'ip-a', country: 'BR', region: 'SP', updatedAtMs: Date.parse('2026-05-13T11:45:00Z') },
      { sessionId: 's2', deviceHash: 'device-b', ipHash: 'ip-a', country: 'BR', region: 'SP', updatedAtMs: Date.parse('2026-05-13T11:55:00Z') },
    ],
    userData: { maxDispositivos: 2 },
    nowMs: Date.parse('2026-05-13T12:00:00Z'),
  });

  assert.equal(result.riskLevel, 'high');
  assert.ok(result.events.some((event) => event.type === 'new_device_new_network'));
});

test('parses x-forwarded-for by using the first client address', () => {
  const ip = parseClientIp({
    headers: {
      'x-forwarded-for': '203.0.113.9, 10.0.0.2',
    },
  });

  assert.equal(ip, '203.0.113.9');
});

test('hashSignal is stable and does not expose the raw value', () => {
  const a = hashSignal('203.0.113.9', 'salt-a');
  const b = hashSignal('203.0.113.9', 'salt-a');

  assert.equal(a, b);
  assert.match(a, /^[a-f0-9]{64}$/);
  assert.ok(!a.includes('203.0.113.9'));
});

test('sanitizeTermsAcceptance requires the current terms version', () => {
  assert.throws(() => sanitizeTermsAcceptance({ termsVersion: 'old' }), /Termos desatualizados/);
  assert.deepEqual(sanitizeTermsAcceptance({ termsVersion: TERMS_VERSION }), {
    termsVersion: TERMS_VERSION,
  });
});

test('buildAccountStatusPatch rejects invalid status and normalizes valid enforcement', () => {
  assert.throws(() => buildAccountStatusPatch({ status: 'deleted' }), /Status de conta invalido/);

  const patch = buildAccountStatusPatch({
    status: ACCOUNT_STATUS.BANNED,
    reason: 'Compartilhamento confirmado',
    operatorEmail: 'Admin@Example.com',
    nowIso: '2026-05-13T12:00:00.000Z',
  });

  assert.equal(patch.accountStatus, 'banned');
  assert.equal(patch.statusReason, 'Compartilhamento confirmado');
  assert.equal(patch.statusUpdatedBy, 'admin@example.com');
});
