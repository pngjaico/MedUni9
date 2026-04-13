import fs from 'fs';

const AUDIT_FILE = 'docs/auditoria_questoes.md';
const JSON_FILE = 'data/questoes_antigas.json';

function getPending() {
    const audit = fs.readFileSync(AUDIT_FILE, 'utf8');
    const json = JSON.parse(fs.readFileSync(JSON_FILE, 'utf8'));
    const existingIds = new Set(json.questoes.map(q => q.id));

    const lines = audit.split('\n');
    const pending = [];
    for (const line of lines) {
        const parts = line.split('|').map(s => s.trim());
        if (parts.length >= 5) {
            const id = parseInt(parts[1]);
            if (!isNaN(id) && !existingIds.has(id)) {
                const dePara = parts[3];
                const paraParts = dePara.split('->').map(s => s.trim().replace(/`/g, ''));
                const para = paraParts[1];
                const aula = parts[4].replace(/`/g, '');
                
                if (para && aula) {
                    pending.push({ id, materia: para, aula_id: aula, justificativa: parts[5] });
                }
            }
        }
    }
    return pending;
}

const pending = getPending();
console.log(JSON.stringify(pending.slice(0, 50), null, 2));
console.log('Total Pending:', pending.length);
