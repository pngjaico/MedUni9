/**
 * Obtém config de hash do projeto (Identity Toolkit) e reimporta auth-users.json no destino.
 * Requer: npm i google-auth-library (já vem com firebase-admin)
 */
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { GoogleAuth } from 'google-auth-library';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SOURCE_PROJECT = 'meduni9-869eb';
const DEST_PROJECT = 'medgradplus';
const keyPath = join(ROOT, '.agents', 'firebase-sa-key.json');
const usersFile = join(ROOT, '.migration-temp', 'auth-users.json');

const key = JSON.parse(readFileSync(keyPath, 'utf8'));
const auth = new GoogleAuth({
  credentials: key,
  scopes: ['https://www.googleapis.com/auth/cloud-platform'],
});
const client = await auth.getClient();
const token = await client.getAccessToken();

const url = `https://identitytoolkit.googleapis.com/admin/v2/projects/${SOURCE_PROJECT}/config`;
const res = await fetch(url, {
  headers: { Authorization: `Bearer ${token.token || token}` },
});
if (!res.ok) {
  console.error('Falha ao ler config Auth:', res.status, await res.text());
  process.exit(1);
}
const cfg = await res.json();
const h = cfg.passwordHashConfig || cfg.signIn?.passwordHashConfig;
if (!h) {
  console.error('Resposta sem passwordHashConfig:', JSON.stringify(cfg, null, 2).slice(0, 800));
  process.exit(1);
}
// Campos típicos: algorithm, signerKey, saltSeparator, rounds, memoryCost
const algo = (h.algorithm || 'SCRYPT').replace('SCRYPT', 'SCRYPT').toUpperCase();
console.log('Hash config:', { algorithm: h.algorithm, rounds: h.rounds, memoryCost: h.memoryCost });

const { execSync } = await import('child_process');
const args = [
  'firebase-tools@latest',
  'auth:import',
  usersFile,
  '--project',
  DEST_PROJECT,
  '--hash-algo',
  'SCRYPT',
  '--hash-key',
  Buffer.from(h.signerKey || h.signer_key, 'base64').toString('base64'), // pode já ser base64
  '--salt-separator',
  Buffer.from(h.saltSeparator || h.salt_separator, 'base64').toString('base64'),
  '--rounds',
  String(h.rounds || 8),
  '--mem-cost',
  String(h.memoryCost || h.memory_cost || 14),
];
// signerKey no API costuma ser base64 string já
const fixArgs = [
  'firebase-tools@latest',
  'auth:import',
  usersFile,
  '--project',
  DEST_PROJECT,
  '--hash-algo',
  'SCRYPT',
  '--hash-key',
  h.signerKey?.base64 || h.signerKey || '',
  '--salt-separator',
  h.saltSeparator?.base64 || h.saltSeparator || '',
  '--rounds',
  String(h.rounds ?? 8),
  '--mem-cost',
  String(h.memoryCost ?? 14),
];

execSync(`npx -y ${fixArgs.map((a) => (a.includes(' ') ? `"${a}"` : a)).join(' ')}`, {
  cwd: ROOT,
  stdio: 'inherit',
  shell: true,
});
