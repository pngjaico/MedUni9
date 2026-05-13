const crypto = require('crypto');

const TERMS_VERSION = '2026-05-13';

const ACCOUNT_STATUS = Object.freeze({
  ACTIVE: 'active',
  WARNED: 'warned',
  TEMPORARILY_SUSPENDED: 'temporarily_suspended',
  BANNED: 'banned',
});

const RISK_ORDER = Object.freeze({
  none: 0,
  low: 1,
  medium: 2,
  high: 3,
});

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

function compactString(value, max = 160) {
  return String(value || '').trim().slice(0, max);
}

function hashSignal(value, salt = process.env.SECURITY_HASH_SALT || 'medgradplus-security-v1') {
  const input = compactString(value, 600);
  if (!input) return '';
  return crypto.createHash('sha256').update(`${salt}|${input}`).digest('hex');
}

function parseClientIp(req) {
  const headers = req?.headers || {};
  const forwarded = headers['x-forwarded-for'] || headers['X-Forwarded-For'];
  const raw =
    (Array.isArray(forwarded) ? forwarded[0] : forwarded) ||
    headers['fastly-client-ip'] ||
    headers['x-real-ip'] ||
    req?.ip ||
    req?.connection?.remoteAddress ||
    req?.socket?.remoteAddress ||
    '';

  return String(raw)
    .split(',')[0]
    .trim()
    .replace(/^::ffff:/, '')
    .slice(0, 80);
}

function sanitizeTermsAcceptance(body = {}) {
  const termsVersion = compactString(body.termsVersion || body.termsVersionAccepted, 32);
  if (termsVersion !== TERMS_VERSION) {
    throw new Error('Termos desatualizados. Recarregue o app e tente novamente.');
  }
  return { termsVersion };
}

function normalizeSessionForRisk(session = {}) {
  const updatedAtMs = Number(session.updatedAtMs || session.lastSeenAtMs || session.createdAtMs || 0) || 0;
  return {
    sessionId: compactString(session.sessionId, 96),
    deviceHash: compactString(session.deviceHash || session.deviceIdHash, 96),
    ipHash: compactString(session.ipHash, 96),
    country: compactString(session.country, 8).toUpperCase(),
    region: compactString(session.region, 32).toUpperCase(),
    updatedAtMs,
  };
}

function riskMax(a, b) {
  return RISK_ORDER[b] > RISK_ORDER[a] ? b : a;
}

function addRisk(events, event) {
  events.push({
    riskLevel: event.riskLevel || 'low',
    enforcementSuggestion: 'manual_review',
    ...event,
  });
}

function analyzeSessionRisk({ currentSession, recentSessions = [], userData = {}, nowMs = Date.now() }) {
  const current = normalizeSessionForRisk(currentSession);
  const recent = (Array.isArray(recentSessions) ? recentSessions : [])
    .map(normalizeSessionForRisk)
    .filter((s) => s.sessionId || s.deviceHash || s.ipHash);

  const activeWindowMs = 6 * 60 * 60 * 1000;
  const activeSessions = [current, ...recent].filter((s) => {
    if (!s.updatedAtMs) return true;
    return nowMs - s.updatedAtMs <= activeWindowMs;
  });

  const deviceHashes = [...new Set(activeSessions.map((s) => s.deviceHash).filter(Boolean))];
  const ipHashes = [...new Set(activeSessions.map((s) => s.ipHash).filter(Boolean))];
  const previousDeviceHashes = new Set(recent.map((s) => s.deviceHash).filter(Boolean));
  const previousIpHashes = new Set(recent.map((s) => s.ipHash).filter(Boolean));
  const maxDevicesRaw = Number(userData.maxDispositivos || userData.maxDevices || 2);
  const maxDevices = Number.isFinite(maxDevicesRaw) ? Math.max(2, maxDevicesRaw) : 2;

  let riskLevel = 'none';
  const events = [];
  const currentIsNewDevice = !!current.deviceHash && !previousDeviceHashes.has(current.deviceHash);
  const currentIsNewNetwork = !!current.ipHash && !previousIpHashes.has(current.ipHash);

  if (deviceHashes.length > maxDevices) {
    const level = deviceHashes.length >= maxDevices + 2 ? 'high' : 'medium';
    addRisk(events, {
      type: 'too_many_devices',
      riskLevel: level,
      evidence: {
        distinctDevices: deviceHashes.length,
        allowedDevices: maxDevices,
      },
    });
    riskLevel = riskMax(riskLevel, level);
  }

  if (currentIsNewDevice && currentIsNewNetwork && deviceHashes.length > maxDevices) {
    const level = deviceHashes.length >= maxDevices + 1 ? 'high' : 'medium';
    addRisk(events, {
      type: 'new_device_new_network',
      riskLevel: level,
      evidence: {
        distinctDevices: deviceHashes.length,
        distinctNetworks: ipHashes.length,
        allowedDevices: maxDevices,
      },
    });
    riskLevel = riskMax(riskLevel, level);
  }

  if (ipHashes.length >= 3 && deviceHashes.length > maxDevices) {
    addRisk(events, {
      type: 'many_networks_many_devices',
      riskLevel: 'medium',
      evidence: {
        distinctDevices: deviceHashes.length,
        distinctNetworks: ipHashes.length,
      },
    });
    riskLevel = riskMax(riskLevel, 'medium');
  }

  for (const previous of recent) {
    const minutesApart = Math.abs((current.updatedAtMs || nowMs) - (previous.updatedAtMs || nowMs)) / 60000;
    const differentDevice = current.deviceHash && previous.deviceHash && current.deviceHash !== previous.deviceHash;
    const differentIp = current.ipHash && previous.ipHash && current.ipHash !== previous.ipHash;
    const differentCountry = current.country && previous.country && current.country !== previous.country;
    const differentRegion = current.region && previous.region && current.region !== previous.region;

    if (differentDevice && differentIp && differentCountry && minutesApart <= 120) {
      addRisk(events, {
        type: 'impossible_travel',
        riskLevel: 'high',
        evidence: {
          minutesApart: Math.round(minutesApart),
          countries: [previous.country, current.country],
        },
      });
      riskLevel = riskMax(riskLevel, 'high');
      break;
    }

    if (differentDevice && differentIp && differentRegion && deviceHashes.length > maxDevices && minutesApart <= 60) {
      addRisk(events, {
        type: 'far_regions_same_window',
        riskLevel: 'medium',
        evidence: {
          minutesApart: Math.round(minutesApart),
          regions: [previous.region, current.region].filter(Boolean),
        },
      });
      riskLevel = riskMax(riskLevel, 'medium');
      break;
    }
  }

  return { riskLevel, events };
}

function buildAccountStatusPatch({ status, reason = '', operatorEmail = '', nowIso = new Date().toISOString() }) {
  const accountStatus = compactString(status, 40);
  if (!Object.values(ACCOUNT_STATUS).includes(accountStatus)) {
    throw new Error('Status de conta invalido.');
  }

  return {
    accountStatus,
    statusReason: compactString(reason, 500),
    statusUpdatedAt: nowIso,
    statusUpdatedBy: normalizeEmail(operatorEmail),
  };
}

module.exports = {
  ACCOUNT_STATUS,
  TERMS_VERSION,
  analyzeSessionRisk,
  buildAccountStatusPatch,
  hashSignal,
  normalizeEmail,
  parseClientIp,
  sanitizeTermsAcceptance,
};
