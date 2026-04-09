const fs = require('fs');
const path = './data/questoes_antigas.json';

try {
    let data = JSON.parse(fs.readFileSync(path, 'utf8'));
    let count = 0;
    
    if (data.questoes && Array.isArray(data.questoes)) {
        data.questoes.forEach(q => {
            // Normalizar qualquer variação de bioquímica ou fisiologia para 'pmh' (ID da matéria no app)
            if (q.materia === 'BIOQUIMICA' || q.materia === 'BIOQUIMICA / FISIOLOGIA' || q.materia === 'FISIOLOGIA') {
                q.materia = 'pmh';
                count++;
            }
        });
    }
    
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
    console.log(`✅ Sucesso: ${count} questões normalizadas para 'pmh'.`);
} catch (err) {
    console.error('Erro ao processar JSON:', err);
    process.exit(1);
}
