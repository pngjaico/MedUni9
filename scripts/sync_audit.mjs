import fs from 'fs';
import path from 'path';

const AUDIT_FILE = 'docs/auditoria_questoes.md';
const JSON_FILES = ['data/questoes_antigas.json', 'data/questoes.json'];

/**
 * Parses the Markdown audit table.
 * Format: | ID | Status | De -> Para | Aula/Tema | Justificativa |
 */
function parseAudit(content) {
  const lines = content.split('\n');
  const auditMap = new Map();
  
  // Regex to capture ID, destination materia, and aula_id
  const rowRegex = /^\|\s*(\d+)\s*\|\s*.*?\s*\|\s*`?([\w/]+)`?\s*->\s*`?([\w/]+)`?\s*\|\s*`?([\w_]+)`?\s*\|/;
  
  for (const line of lines) {
    const match = line.match(rowRegex);
    if (match) {
      const id = parseInt(match[1]);
      const materia = match[3].trim();
      const aula_id = match[4].trim();
      auditMap.set(id, { materia, aula_id });
    }
  }
  return auditMap;
}

async function runSync() {
  console.log('--- 🔄 INICIANDO SINCRONIZAÇÃO DE AUDITORIA ---');
  
  if (!fs.existsSync(AUDIT_FILE)) {
    console.error(`❌ Arquivo de auditoria não encontrado: ${AUDIT_FILE}`);
    return;
  }

  const auditContent = fs.readFileSync(AUDIT_FILE, 'utf8');
  const auditMap = parseAudit(auditContent);
  console.log(`📊 Total de mapeamentos encontrados na auditoria: ${auditMap.size}`);

  let totalUpdated = 0;

  for (const jsonPath of JSON_FILES) {
    if (!fs.existsSync(jsonPath)) {
      console.warn(`⚠️  Arquivo pulado (não existe): ${jsonPath}`);
      continue;
    }

    console.log(`\n📂 Processando: ${jsonPath}...`);
    const jsonRaw = fs.readFileSync(jsonPath, 'utf8');
    const jsonData = JSON.parse(jsonRaw);
    let updatedInFile = 0;

    jsonData.questoes.forEach(q => {
      if (auditMap.has(q.id)) {
        const audit = auditMap.get(q.id);
        
        q.materia = audit.materia;
        q.aula_id = audit.aula_id;
        q.tema = audit.aula_id;
        
        updatedInFile++;
        totalUpdated++;

        // Backup a cada 100 atualizações totais
        if (totalUpdated % 100 === 0) {
            const backupPath = path.join('data', `sync_backup_${totalUpdated}.json.bak`);
            fs.writeFileSync(backupPath, JSON.stringify(jsonData, null, 2));
            console.log(`   🛡️  Backup de segurança criado: ${backupPath}`);
        }
      }
    });

    if (updatedInFile > 0) {
      fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2));
      console.log(`   ✅ ${updatedInFile} questões sincronizadas.`);
    } else {
      console.log(`   ℹ️  Nenhuma alteração necessária neste arquivo.`);
    }
  }

  console.log(`\n✨ Sincronização Finalizada!`);
  console.log(`📈 Total de questões atualizadas: ${totalUpdated}`);
  console.log('----------------------------------------------');
}

runSync();
