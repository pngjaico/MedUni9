/**
 * Tenta importar firestore-dump.json no medgradplus usando a MESMA chave SA do projeto antigo.
 * Só funciona se em IAM do Google Cloud (projeto medgradplus) esta service account tiver
 * papel "Cloud Datastore User" (ou Editor).
 */
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import admin from 'firebase-admin';

const TARGET_PROJECT = 'medgradplus';
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const keyPath = join(ROOT, '.agents', 'firebase-sa-key.json');
const dumpPath = join(ROOT, '.migration-temp', 'firestore-dump.json');

const key = JSON.parse(readFileSync(keyPath, 'utf8'));
const app = admin.initializeApp(
  {
    credential: admin.credential.cert(key),
    projectId: TARGET_PROJECT,
  },
  'cross-restore'
);
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

for (const [col, docs] of Object.entries(raw.collections || {})) {
  const ops = [];
  for (const [id, data] of Object.entries(docs)) {
    ops.push({ ref: db.collection(col).doc(id), data });
  }
  if (ops.length) await commitBatch(ops);
  console.log(`[OK] ${col}: ${ops.length}`);
}

for (const [uid, subs] of Object.entries(raw.usersSubcollections || {})) {
  const sess = subs.sessions || {};
  const ops = [];
  for (const [sid, data] of Object.entries(sess)) {
    ops.push({ ref: db.collection('users').doc(uid).collection('sessions').doc(sid), data });
  }
  if (ops.length) await commitBatch(ops);
  console.log(`[OK] users/${uid}/sessions: ${ops.length}`);
}

console.log('Restore concluído em', TARGET_PROJECT);
process.exit(0);
