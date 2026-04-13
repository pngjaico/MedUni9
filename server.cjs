/**
 * MedGrad+ — Servidor Admin Local
 * node server.cjs → http://localhost:3001
 * Endpoints: /api/ping /api/data/:file (incl. materiais_figuras) /api/git/status /api/git/commit /api/deploy /api/agent/run/:name
 *            /api/feedback/raw-pending /api/feedback/raw-approved /api/feedback/plans
 *            /api/feedback/raw/approve/:id /api/feedback/raw/deny/:id
 *            /api/feedback/plan/approve/:id /api/feedback/plan/deny/:id
 */
const http = require('http');
const fs   = require('fs');
const path = require('path');
const { execSync, exec } = require('child_process');
const url  = require('url');

const PORT = 3001;
const ROOT = __dirname;
const SERVER_LOG_FILE = path.join(ROOT, 'data', 'agent_logs', 'server_errors.log');

const FEEDBACK_ROOT         = path.join(ROOT, 'data', 'feedback');
const FEEDBACK_INCOMING_DIR = path.join(FEEDBACK_ROOT, 'incoming');
const FEEDBACK_APPROVED_DIR = path.join(FEEDBACK_ROOT, 'approved');
const FEEDBACK_DENIED_DIR   = path.join(FEEDBACK_ROOT, 'denied');
const FEEDBACK_PROCESSED_DIR= path.join(FEEDBACK_ROOT, 'processed');
const FEEDBACK_PLANS_DIR    = path.join(FEEDBACK_ROOT, 'plans');
const FEEDBACK_ARCHIVED_DIR = path.join(FEEDBACK_ROOT, 'archived');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.ico':  'image/x-icon',
  '.svg':  'image/svg+xml',
  '.webmanifest': 'application/manifest+json',
  '.txt':  'text/plain',
};

[FEEDBACK_ROOT, FEEDBACK_INCOMING_DIR, FEEDBACK_APPROVED_DIR, FEEDBACK_DENIED_DIR, FEEDBACK_PROCESSED_DIR, FEEDBACK_PLANS_DIR, FEEDBACK_ARCHIVED_DIR]
  .forEach(dir => fs.mkdirSync(dir, { recursive: true }));

function cors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function json(res, code, obj) {
  cors(res);
  res.writeHead(code, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(obj));
}

function logServerError(scope, error, extra = null) {
  try {
    const now = new Date().toISOString();
    const msg = error && error.stack ? error.stack : String(error);
    const detail = extra ? `\nEXTRA: ${JSON.stringify(extra)}` : '';
    const line = `[${now}] [${scope}] ${msg}${detail}\n\n`;
    fs.mkdirSync(path.dirname(SERVER_LOG_FILE), { recursive: true });
    fs.appendFileSync(SERVER_LOG_FILE, line, 'utf8');
  } catch {}
}

function readBody(req) {
  return new Promise(resolve => {
    let body = '';
    req.on('data', c => body += c);
    req.on('end', () => resolve(body));
  });
}

// Allowed data files (whitelist)
const ALLOWED = ['materias', 'codigos', 'flashcards', 'questoes', 'questoes_antigas', 'questoes_ineditas',
                 'embaixadores', 'cupons', 'vendas_mensais', 'materiais_figuras',
                 'agent_logs/status_curadoria', 'agent_logs/status_ingestao', 'agent_logs/status_deploy',
                 'agent_logs/status_feedback', 'agent_logs/status_feedback_planos'];

function safeReadJson(filePath, fallback = null) {
  try { return JSON.parse(fs.readFileSync(filePath, 'utf8')); }
  catch { return fallback; }
}

function safeWriteJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

function listJsonFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(name => name.endsWith('.json') && !name.startsWith('.'))
    .map(name => path.join(dir, name));
}

function sortByCreatedDesc(a, b) {
  return new Date(b.criadoEm || 0) - new Date(a.criadoEm || 0);
}

function sanitizeId(value) {
  return String(value || Date.now()).replace(/[^a-zA-Z0-9_\-]/g, '_');
}

function stripSourceMeta(item) {
  const { __sourceFile, __sourceType, __sourceIndex, ...clean } = item;
  return clean;
}

function loadRawFeedbackPending() {
  const feedbacks = [];
  listJsonFiles(FEEDBACK_INCOMING_DIR).forEach(filePath => {
    const data = safeReadJson(filePath, null);
    if (!data) return;
    if (Array.isArray(data)) {
      data.forEach((item, index) => feedbacks.push({ ...item, __sourceFile: filePath, __sourceType: 'array', __sourceIndex: index }));
      return;
    }
    feedbacks.push({ ...data, __sourceFile: filePath, __sourceType: 'object' });
  });
  return feedbacks.sort(sortByCreatedDesc);
}

function findRawFeedbackById(feedbackId) {
  return loadRawFeedbackPending().find(item => String(item._id) === String(feedbackId));
}

function removeRawFeedbackFromIncoming(entry) {
  if (!entry || !entry.__sourceFile || !fs.existsSync(entry.__sourceFile)) return;
  const current = safeReadJson(entry.__sourceFile, null);
  if (Array.isArray(current)) {
    const next = current.filter(item => String(item._id) !== String(entry._id));
    if (next.length === 0) fs.unlinkSync(entry.__sourceFile);
    else safeWriteJson(entry.__sourceFile, next);
    return;
  }
  fs.unlinkSync(entry.__sourceFile);
}

function moveRawFeedback(feedbackId, targetDir, newStatus) {
  const entry = findRawFeedbackById(feedbackId);
  if (!entry) return null;

  const moved = {
    ...stripSourceMeta(entry),
    status: newStatus,
    decididoEm: new Date().toISOString()
  };

  safeWriteJson(path.join(targetDir, `fb_${sanitizeId(moved._id)}.json`), moved);
  removeRawFeedbackFromIncoming(entry);
  return moved;
}

function loadJsonObjects(dir) {
  return listJsonFiles(dir)
    .map(filePath => safeReadJson(filePath, null))
    .filter(Boolean)
    .sort(sortByCreatedDesc);
}

function movePlan(planId, finalStatus, notaAdmin) {
  const srcFile = path.join(FEEDBACK_PLANS_DIR, `${planId}.json`);
  if (!fs.existsSync(srcFile)) return null;
  const data = safeReadJson(srcFile, null);
  if (!data) return null;

  data.status = finalStatus;
  data.resolvidoEm = new Date().toISOString();
  if (notaAdmin) data.notaAdmin = notaAdmin;

  safeWriteJson(path.join(FEEDBACK_ARCHIVED_DIR, `${planId}.json`), data);
  fs.unlinkSync(srcFile);
  return data;
}

const server = http.createServer(async (req, res) => {
  try {
    const parsed   = url.parse(req.url, true);
    const pathname = parsed.pathname;

    // Preflight
    if (req.method === 'OPTIONS') { cors(res); res.writeHead(200); res.end(); return; }

    // ── GET /api/ping ──────────────────────────────────────────────────────────
    if (pathname === '/api/ping') {
      return json(res, 200, { ok: true, mode: 'local', version: '1.0' });
    }

    // ── GET /api/data/:file ────────────────────────────────────────────────────
    if (req.method === 'GET' && pathname.startsWith('/api/data/')) {
    const key = pathname.replace('/api/data/', '');
    if (!ALLOWED.includes(key)) return json(res, 403, { error: 'Forbidden' });
    const filePath = path.join(ROOT, 'data', key + '.json');
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      cors(res); res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    } catch { json(res, 404, { error: 'Not found' }); }
      return;
    }

    // ── PUT /api/data/:file ────────────────────────────────────────────────────
    if (req.method === 'PUT' && pathname.startsWith('/api/data/')) {
    const key = pathname.replace('/api/data/', '');
    if (!ALLOWED.includes(key)) return json(res, 403, { error: 'Forbidden' });
    const filePath = path.join(ROOT, 'data', key + '.json');
    const body = await readBody(req);
    try {
      JSON.parse(body); // validate
      // ensure directory exists
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, body, 'utf8');
      json(res, 200, { ok: true });
    } catch (e) { json(res, 400, { error: e.message }); }
      return;
    }

    // ── PUT /api/admin ─────────────────────────────────────────────────────────
  // Replaces ADMIN_HASH in admin.html when password changes
    if (req.method === 'PUT' && pathname === '/api/admin') {
    const body = await readBody(req);
    try {
      const { hash } = JSON.parse(body);
      if (!hash || hash.length !== 64) throw new Error('Invalid hash');
      const adminPath = path.join(ROOT, 'admin.html');
      let content = fs.readFileSync(adminPath, 'utf8');
      content = content.replace(
        /const ADMIN_HASH = '[a-f0-9]{64}'/,
        `const ADMIN_HASH = '${hash}'`
      );
      fs.writeFileSync(adminPath, content, 'utf8');
      json(res, 200, { ok: true });
    } catch (e) { json(res, 400, { error: e.message }); }
      return;
    }

    // ── GET /api/git/status ────────────────────────────────────────────────────
    if (req.method === 'GET' && pathname === '/api/git/status') {
    try {
      const status  = execSync('git status --short', { cwd: ROOT, encoding: 'utf8' });
      const log     = execSync('git log --oneline -8', { cwd: ROOT, encoding: 'utf8' });
      const branch  = execSync('git branch --show-current', { cwd: ROOT, encoding: 'utf8' }).trim();
      json(res, 200, { ok: true, status: status.trim(), log: log.trim(), branch });
    } catch (e) { json(res, 500, { error: e.message }); }
      return;
    }

    // ── POST /api/git/commit ───────────────────────────────────────────────────
    if (req.method === 'POST' && pathname === '/api/git/commit') {
    const body = await readBody(req);
    try {
      const { message = 'chore: update via admin panel' } = JSON.parse(body || '{}');
      const safe = message.replace(/"/g, "'").substring(0, 200);
      execSync('git add data/ admin.html', { cwd: ROOT });
      execSync('git restore --staged data/feedback data/agent_logs/status_feedback.json data/agent_logs/status_feedback_planos.json', { cwd: ROOT });
      execSync(`git commit -m "${safe}"`, { cwd: ROOT });
      execSync('git push', { cwd: ROOT });
      const hash = execSync('git rev-parse --short HEAD', { cwd: ROOT, encoding: 'utf8' }).trim();
      json(res, 200, { ok: true, commit: hash });
    } catch (e) { json(res, 500, { error: e.stderr || e.message }); }
      return;
    }

    // ── POST /api/deploy ───────────────────────────────────────────────────────
    if (req.method === 'POST' && pathname === '/api/deploy') {
    exec('firebase deploy --only hosting', { cwd: ROOT }, (err, stdout, stderr) => {
      if (err) json(res, 500, { error: stderr || err.message });
      else     json(res, 200, { ok: true, output: stdout });
    });
      return;
    }

    // ── POST /api/agent/run/:name ──────────────────────────────────────────────
    if (req.method === 'POST' && pathname.startsWith('/api/agent/run/')) {
    const name = pathname.replace('/api/agent/run/', '').replace(/[^a-z_]/g, '');
    const bat  = path.join(ROOT, '.agents', `run_${name}.bat`);
    if (!fs.existsSync(bat)) return json(res, 404, { error: 'Agent not found' });
    exec(`"${bat}"`, { cwd: ROOT }, (err, stdout) => {
      json(res, 200, { ok: !err, output: stdout || (err && err.message) });
    });
      return;
    }

    // ── GET /api/feedback/raw-pending ─────────────────────────────────────────
    if (req.method === 'GET' && pathname === '/api/feedback/raw-pending') {
    try {
      const feedbacks = loadRawFeedbackPending().map(stripSourceMeta);
      json(res, 200, { ok: true, feedbacks });
    } catch (e) { json(res, 500, { error: e.message }); }
      return;
    }

    // Compat route (old admin builds)
    if (req.method === 'GET' && (pathname === '/api/feedback/requests' || pathname === '/api/feedback/incoming')) {
    try {
      const feedbacks = loadRawFeedbackPending().map(stripSourceMeta);
      json(res, 200, { ok: true, requests: feedbacks, feedbacks });
    } catch (e) { json(res, 500, { error: e.message }); }
      return;
    }

    // ── GET /api/feedback/raw-approved ────────────────────────────────────────
    if (req.method === 'GET' && pathname === '/api/feedback/raw-approved') {
    try {
      json(res, 200, { ok: true, feedbacks: loadJsonObjects(FEEDBACK_APPROVED_DIR) });
    } catch (e) { json(res, 500, { error: e.message }); }
      return;
    }

    // ── POST /api/feedback/raw/create ─────────────────────────────────────────
    if (req.method === 'POST' && pathname === '/api/feedback/raw/create') {
    try {
      const body = await readBody(req);
      const payload = body ? JSON.parse(body) : {};
      const now = new Date().toISOString();
      const feedbackId = `fb_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

      const mensagem = String(payload.mensagem || '').trim();
      if (!mensagem) {
        return json(res, 400, { ok: false, error: 'Mensagem obrigatória' });
      }

      const entry = {
        _id: feedbackId,
        tipo: String(payload.tipo || 'bug').toLowerCase(),
        origem: String(payload.origem || 'geral').toLowerCase(),
        mensagem,
        disciplina: payload.disciplina || payload.materia || '',
        tema: payload.tema || '',
        itemId: payload.itemId || '',
        contexto: payload.contexto || null,
        userEmail: payload.userEmail || '',
        userId: payload.userId || '',
        criadoEm: now,
        status: 'novo'
      };

      safeWriteJson(path.join(FEEDBACK_INCOMING_DIR, `${feedbackId}.json`), entry);
      json(res, 200, { ok: true, feedback: entry });
    } catch (e) {
      json(res, 500, { ok: false, error: e.message });
    }
      return;
    }

    // ── GET /api/feedback/plans ───────────────────────────────────────────────
    if (req.method === 'GET' && pathname === '/api/feedback/plans') {
    try {
      const plans = loadJsonObjects(FEEDBACK_PLANS_DIR).filter(item => item.status === 'pendente');
      json(res, 200, { ok: true, plans });
    } catch (e) { json(res, 500, { error: e.message }); }
      return;
    }

    // ── POST /api/feedback/raw/approve/:id ────────────────────────────────────
    if (req.method === 'POST' && pathname.startsWith('/api/feedback/raw/approve/')) {
    const id = pathname.replace('/api/feedback/raw/approve/', '').replace(/[^a-zA-Z0-9_\-]/g, '');
    try {
      const moved = moveRawFeedback(id, FEEDBACK_APPROVED_DIR, 'bruto_aprovado');
      if (!moved) return json(res, 404, { error: 'Feedback bruto não encontrado' });
      json(res, 200, { ok: true, feedback: moved });
    } catch (e) { json(res, 500, { error: e.message }); }
      return;
    }

    // ── POST /api/feedback/raw/deny/:id ───────────────────────────────────────
    if (req.method === 'POST' && pathname.startsWith('/api/feedback/raw/deny/')) {
    const id = pathname.replace('/api/feedback/raw/deny/', '').replace(/[^a-zA-Z0-9_\-]/g, '');
    try {
      const moved = moveRawFeedback(id, FEEDBACK_DENIED_DIR, 'bruto_negado');
      if (!moved) return json(res, 404, { error: 'Feedback bruto não encontrado' });
      json(res, 200, { ok: true, feedback: moved });
    } catch (e) { json(res, 500, { error: e.message }); }
      return;
    }

    // ── POST /api/feedback/plan/approve/:id ───────────────────────────────────
    if (req.method === 'POST' && pathname.startsWith('/api/feedback/plan/approve/')) {
    const id = pathname.replace('/api/feedback/plan/approve/', '').replace(/[^a-zA-Z0-9_\-]/g, '');
    try {
      const body = await readBody(req);
      let nota = null;
      if (body) { try { nota = JSON.parse(body).nota || null; } catch {} }
      const moved = movePlan(id, 'plano_aprovado', nota);
      if (!moved) return json(res, 404, { error: 'Plano não encontrado' });
      json(res, 200, { ok: true, plan: moved });
    } catch (e) { json(res, 500, { error: e.message }); }
      return;
    }

    // ── POST /api/feedback/plan/deny/:id ──────────────────────────────────────
    if (req.method === 'POST' && pathname.startsWith('/api/feedback/plan/deny/')) {
    const id = pathname.replace('/api/feedback/plan/deny/', '').replace(/[^a-zA-Z0-9_\-]/g, '');
    try {
      const body = await readBody(req);
      let nota = null;
      if (body) { try { nota = JSON.parse(body).nota || null; } catch {} }
      const moved = movePlan(id, 'plano_negado', nota);
      if (!moved) return json(res, 404, { error: 'Plano não encontrado' });
      json(res, 200, { ok: true, plan: moved });
    } catch (e) { json(res, 500, { error: e.message }); }
      return;
    }

    // ── Static files ───────────────────────────────────────────────────────────
    let filePath = pathname === '/' ? '/index.html' : pathname;
    filePath = path.join(ROOT, filePath);

    // Security: only serve files within ROOT
    if (!filePath.startsWith(ROOT)) { res.writeHead(403); res.end('Forbidden'); return; }

    try {
      const content     = fs.readFileSync(filePath);
      const ext         = path.extname(filePath).toLowerCase();
      const contentType = MIME[ext] || 'application/octet-stream';
      cors(res);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    } catch {
      res.writeHead(404);
      res.end('Not found');
    }
  } catch (e) {
    logServerError('request-handler', e, {
      method: req?.method,
      url: req?.url,
      headers: req?.headers,
    });
    if (!res.headersSent) {
      json(res, 500, { ok: false, error: 'Internal server error' });
    }
  }
});

process.on('uncaughtException', (err) => {
  logServerError('uncaughtException', err);
  console.error('Uncaught exception (server kept alive):', err && err.stack ? err.stack : err);
});

process.on('unhandledRejection', (reason) => {
  logServerError('unhandledRejection', reason);
  console.error('Unhandled rejection (server kept alive):', reason);
});

server.listen(PORT, () => {
  console.log('\n┌─────────────────────────────────────────────┐');
  console.log(`│  MedGrad+ Local Server                       │`);
  console.log(`│  App:   http://localhost:${PORT}/              │`);
  console.log(`│  Admin: http://localhost:${PORT}/admin.html    │`);
  console.log(`│  Figuras materiais: /figuras-materiais/       │`);
  console.log('│  Feche esta janela para encerrar.            │');
  console.log('└─────────────────────────────────────────────┘\n');
});
