/**
 * Importa firestore-dump.json no projeto NOVO (medgradplus).
 * Chave: MIGRATE_NEW_KEY, ou .agents/firebase-sa-key-NEW.json, ou medgradplus-*-adminsdk*.json na raiz.
 */
import { readFileSync, existsSync, readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import admin from 'firebase-admin';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const dumpPath = join(ROOT, '.migration-temp', 'firestore-dump.json');

function resolveNewKeyPath() {
  if (process.env.MIGRATE_NEW_KEY) {
    const p = join(ROOT, process.env.MIGRATE_NEW_KEY);
    if (existsSync(p)) return p;
  }
  const def = join(ROOT, '.agents', 'firebase-sa-key-NEW.json');
  if (existsSync(def)) return def;
  try {
    const rootJson = readdirSync(ROOT).filter(
      (f) =>
        f.startsWith('medgradplus-') &&
        f.includes('firebase-adminsdk') &&
        f.endsWith('.json')
    );
    if (rootJson.length === 1) return join(ROOT, rootJson[0]);
  } catch {
    /* ignore */
  }
  return null;
}

const keyPath = resolveNewKeyPath();
if (!keyPath) {
  console.error(
    'Chave do medgradplus não encontrada. Coloque firebase-sa-key-NEW.json em .agents/ ou o JSON da service account na raiz (medgradplus-*-adminsdk*.json), ou defina MIGRATE_NEW_KEY.'
  );
  process.exit(1);
}
console.log('Usando chave:', keyPath.replace(ROOT, '.'));
if (!existsSync(dumpPath)) {
  console.error('Falta .migration-temp/firestore-dump.json — rode dump-firestore-one-project.mjs antes.');
  process.exit(1);
}

const key = JSON.parse(readFileSync(keyPath, 'utf8'));
const app = admin.initializeApp({ credential: admin.credential.cert(key) }, 'restore');
const db = admin.firestore(app);
const raw = JSON.parse(readFileSync(dumpPath, 'utf8'));

const BATCH = 400;

async function commitBatch(ops) {
  for (let i = 0; i < ops.length; i += BATCH) {
    const b = db.batch();
    for (const { ref, data } of ops.slice(i, i + BATCH)) {
      b.set(ref, data, { merge: true });
    }
    await b.commit();
  }
}

let total = 0;
for (const [col, docs] of Object.entries(raw.collections || {})) {
  const ops = [];
  for (const [id, data] of Object.entries(docs)) {
    ops.push({ ref: db.collection(col).doc(id), data });
    total++;
  }
  if (ops.length) await commitBatch(ops);
  console.log(`[OK] ${col}: ${ops.length}`);
}

for (const [uid, subs] of Object.entries(raw.usersSubcollections || {})) {
  const sess = subs.sessions || {};
  const ops = [];
  for (const [sid, data] of Object.entries(sess)) {
    ops.push({ ref: db.collection('users').doc(uid).collection('sessions').doc(sid), data });
    total++;
  }
  if (ops.length) await commitBatch(ops);
  console.log(`[OK] users/${uid}/sessions: ${ops.length}`);
}

console.log('Total documentos:', total);
process.exit(0);
