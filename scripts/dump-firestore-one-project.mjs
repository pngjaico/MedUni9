/**
 * Exporta Firestore (projeto antigo) para JSON — só precisa da chave de origem.
 */
import { readFileSync, existsSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import admin from 'firebase-admin';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const keyPath = join(ROOT, '.agents', 'firebase-sa-key.json');
if (!existsSync(keyPath)) {
  console.error('Falta .agents/firebase-sa-key.json');
  process.exit(1);
}
const key = JSON.parse(readFileSync(keyPath, 'utf8'));
admin.initializeApp({ credential: admin.credential.cert(key) });
const db = admin.firestore();

const TOP = ['users', 'email_access', 'feedback', 'profile_change_requests', 'security_events'];
const out = { projectId: key.project_id, collections: {} };

for (const col of TOP) {
  const snap = await db.collection(col).get();
  out.collections[col] = {};
  for (const d of snap.docs) {
    out.collections[col][d.id] = d.data();
  }
}

out.usersSubcollections = {};
const usersSnap = await db.collection('users').get();
for (const u of usersSnap.docs) {
  const sess = await db.collection('users').doc(u.id).collection('sessions').get();
  if (!sess.empty) {
    out.usersSubcollections[u.id] = { sessions: {} };
    for (const s of sess.docs) {
      out.usersSubcollections[u.id].sessions[s.id] = s.data();
    }
  }
}

const dest = join(ROOT, '.migration-temp', 'firestore-dump.json');
writeFileSync(dest, JSON.stringify(out, null, 0), 'utf8');
console.log('Escrito:', dest);
console.log('Resumo:', Object.entries(out.collections).map(([k, v]) => `${k}:${Object.keys(v).length}`).join(', '));
process.exit(0);
