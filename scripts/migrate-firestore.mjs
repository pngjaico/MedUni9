/**
 * Copia documentos do Firestore do projeto ANTIGO → projeto NOVO (medgradplus).
 *
 * Requisitos:
 *   1. Duas chaves JSON de service account (IAM): uma com leitura no projeto antigo,
 *      outra com escrita no projeto novo (Firebase Console → Project settings → Service accounts).
 *   2. npm install (na raiz do repo)
 *
 * NÃO commite as chaves. Por defeito:
 *   Origem:  .agents/firebase-sa-key.json (projeto antigo, se já tiver aí)
 *   Destino: .agents/firebase-sa-key-NEW.json (baixe no Console do medgradplus)
 *
 * Uso (PowerShell), só precisa da chave NOVA se a antiga já for firebase-sa-key.json:
 *   $env:MIGRATE_NEW_KEY=".agents/firebase-sa-key-NEW.json"; npm run migrate:firestore
 */

import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import admin from 'firebase-admin';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

function loadKey(envName, fallbackPath) {
  const p = process.env[envName] || fallbackPath;
  const abs = join(ROOT, p);
  if (!existsSync(abs)) {
    console.error(`Ficheiro não encontrado: ${abs}`);
    console.error(`Defina ${envName} ou coloque a chave em ${fallbackPath}`);
    process.exit(1);
  }
  return JSON.parse(readFileSync(abs, 'utf8'));
}

const oldKey = loadKey('MIGRATE_OLD_KEY', '.agents/firebase-sa-key.json');
const newKey = loadKey('MIGRATE_NEW_KEY', '.agents/firebase-sa-key-NEW.json');

const oldApp = admin.initializeApp({ credential: admin.credential.cert(oldKey) }, 'migrate-source');
const newApp = admin.initializeApp({ credential: admin.credential.cert(newKey) }, 'migrate-dest');

const oldDb = admin.firestore(oldApp);
const newDb = admin.firestore(newApp);

/** Coleções de topo usadas pela app (firestore.rules + código). */
const TOP_COLLECTIONS = [
  'users',
  'email_access',
  'feedback',
  'profile_change_requests',
  'security_events',
];

const BATCH_SIZE = 400;

async function commitBatches(newDb, ops) {
  for (let i = 0; i < ops.length; i += BATCH_SIZE) {
    const batch = newDb.batch();
    const chunk = ops.slice(i, i + BATCH_SIZE);
    for (const { ref, data } of chunk) {
      batch.set(ref, data, { merge: true });
    }
    await batch.commit();
  }
}

async function copyTopLevelCollection(name) {
  const snap = await oldDb.collection(name).get();
  const ops = [];
  for (const doc of snap.docs) {
    ops.push({ ref: newDb.collection(name).doc(doc.id), data: doc.data() });
  }
  if (ops.length) await commitBatches(newDb, ops);
  return snap.size;
}

async function copyUserSessions() {
  const usersSnap = await oldDb.collection('users').get();
  let sessionDocs = 0;
  for (const userDoc of usersSnap.docs) {
    const sub = await oldDb.collection('users').doc(userDoc.id).collection('sessions').get();
    if (sub.empty) continue;
    const ops = [];
    for (const s of sub.docs) {
      ops.push({
        ref: newDb.collection('users').doc(userDoc.id).collection('sessions').doc(s.id),
        data: s.data(),
      });
    }
    await commitBatches(newDb, ops);
    sessionDocs += sub.size;
  }
  return sessionDocs;
}

async function main() {
  console.log('Origem (project_id):', oldKey.project_id);
  console.log('Destino (project_id):', newKey.project_id);
  if (oldKey.project_id === newKey.project_id) {
    console.error('Origem e destino não podem ser o mesmo projeto.');
    process.exit(1);
  }

  for (const col of TOP_COLLECTIONS) {
    const n = await copyTopLevelCollection(col);
    console.log(`[OK] ${col}: ${n} documentos`);
  }

  const sess = await copyUserSessions();
  console.log(`[OK] users/*/sessions: ${sess} documentos (subcoleção)`);

  console.log('\nFirestore copiado. Sobre Authentication: contas não vêm no Firestore.');
  console.log('Veja scripts/MIGRACAO_AUTH.md ou use: firebase auth:export / auth:import entre projetos.');
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
