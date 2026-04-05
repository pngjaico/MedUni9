import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { GoogleAuth } from 'google-auth-library';

const __dirname = dirname(fileURLToPath(import.meta.url));
const key = JSON.parse(readFileSync(join(__dirname, '..', '.agents', 'firebase-sa-key.json'), 'utf8'));
const auth = new GoogleAuth({
  credentials: key,
  scopes: ['https://www.googleapis.com/auth/cloud-platform'],
});
const client = await auth.getClient();
const { token } = await client.getAccessToken();
const project = 'meduni9-869eb';
const res = await fetch(`https://identitytoolkit.googleapis.com/admin/v2/projects/${project}/config`, {
  headers: { Authorization: `Bearer ${token}` },
});
console.log(await res.text());
