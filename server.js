/**
 * MedUni9 — Servidor Admin Local
 * node server.js → http://localhost:3001/admin.html
 * Endpoints: /api/ping /api/data/:file /api/git/status /api/git/commit /api/deploy /api/agent/run/:name
 */
const http = require('http');
const fs   = require('fs');
const path = require('path');
const { execSync, exec } = require('child_process');
const url  = require('url');

const PORT = 3001;
const ROOT = __dirname;

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

function readBody(req) {
  return new Promise(resolve => {
    let body = '';
    req.on('data', c => body += c);
    req.on('end', () => resolve(body));
  });
}

// Allowed data files (whitelist)
const ALLOWED = ['materias', 'codigos', 'flashcards', 'questoes', 'questoes_antigas', 'questoes_ineditas',
                 'agent_logs/status_curadoria', 'agent_logs/status_ingestao', 'agent_logs/status_deploy'];

const server = http.createServer(async (req, res) => {
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

  // ── Static files ───────────────────────────────────────────────────────────
  let filePath = pathname === '/' ? '/admin.html' : pathname;
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
});

server.listen(PORT, '127.0.0.1', () => {
  console.log('\n┌─────────────────────────────────────────────┐');
  console.log(`│  MedUni9 Admin Server                        │`);
  console.log(`│  http://localhost:${PORT}/admin.html           │`);
  console.log('│  Feche esta janela para encerrar.            │');
  console.log('└─────────────────────────────────────────────┘\n');
});
