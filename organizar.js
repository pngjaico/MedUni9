const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, 'conteudos', '_para_categorizar');
const MATERIAIS_DIR = path.join(__dirname, 'conteudos', 'materiais');
const PROVAS_DIR = path.join(__dirname, 'conteudos', '_para_categorizar', 'pdfs');

// Disciplines mapping
const DISCIPLINAS = {
    'bmf1': /bmf[\s_]*1|bases morfofuncionais 1/i,
    'pmh': /pmh|humanidades|prática médica/i,
    'sus': /scaps.*1|scaps pol|política.*saúde|introdução.*práticas.*saúde|sus/i,
    'bmf2': /bmf[\s_]*2|cardiocirculatório|cardiovascular/i,
    'bcm1': /pcm|bcm|bases moleculares|bases celulares/i,
    'indicadores': /epidemio|indicadores|scaps.*2/i,
    'semiologia1': /semiologia[\s_]*1|propedeutica[\s_]*1/i,
    'semiologia2': /semiologia[\s_]*2|propedeutica[\s_]*2/i,
    'mad1': /mad[\s_]*1|mgad.*1|imunologia/i,
    'mad2': /mad[\s_]*2|mgad.*2|patologia|lesão|inflamação|neoplasia/i,
    'fisiopato3': /pfp|srcd|fisiopatologia|asma|dpoc/i,
    'bmf3': /bdeh|bmf[\s_]*3/i,
    'saude_trabalhador': /saúde.*trabalh|ppis/i,
    'integrada3': /integrada.*3/i,
    'farmacologia': /farmacologia|fármaco/i,
    'bioestatistica': /bioestatística|biostat/i,
    'bmf4': /sistema nervoso|bmf[\s_]*4|neuroanatomia/i,
    'integrada4': /integrada.*4/i
};

// Returns { modulo, disciplina, type }
function categorizeFile(filePath) {
    const normPath = filePath.toLowerCase();
    const basename = path.basename(normPath);
    
    // Type
    let type = 'material';
    const provaRegex = /prova|\bp1\b|\- p1| p1 |\bp2\b|av1|av2|simulado|questõe|questoe|questão|questao/i;
    // We only consider it a document if it's pdf or doc/docx
    const isDoc = /\.(pdf|docx?)$/.test(basename);
    
    if (provaRegex.test(basename) && isDoc) {
        type = 'prova';
    } else if (provaRegex.test(normPath) && isDoc) {
        // If the folder says it's an exam
        type = 'prova';
    }

    // Modulo
    let modulo = 'modulo0';
    if (/1[\s°º]*sem|modulo[\s]*1/i.test(normPath)) modulo = 'modulo1';
    else if (/2[\s°º]*sem|modulo[\s]*2/i.test(normPath)) modulo = 'modulo2';
    else if (/3[\s°º]*sem|4[\s°º]*m[óo]dulo|modulo[\s]*3/i.test(normPath)) modulo = 'modulo3';
    else if (/4[\s°º]*sem|modulo[\s]*4/i.test(normPath)) modulo = 'modulo4';

    // Disciplina
    let disciplina = 'Outros';
    for (const [key, regex] of Object.entries(DISCIPLINAS)) {
        if (regex.test(normPath)) {
            disciplina = key;
            break;
        }
    }

    return { type, modulo, disciplina };
}

function ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

let movedCount = { provas: 0, materiais: 0 };
let errorCount = 0;

function walk(dir) {
    if (!fs.existsSync(dir)) return;
    const list = fs.readdirSync(dir);
    for (const file of list) {
        // Skip some internal directories from root
        if (dir === ROOT_DIR && ['lotes', 'pdfs', 'organizados', 'questoes_categorizadas.json', 'questoes_todas.json', 'extrator_questoes_colab.py'].includes(file)) {
            continue;
        }
        
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            walk(fullPath);
            // Clean up empty directories
            try {
                const afterList = fs.readdirSync(fullPath);
                if (afterList.length === 0) fs.rmdirSync(fullPath);
            } catch (e) {}
        } else {
            // It's a file, categorize and move
            const { type, modulo, disciplina } = categorizeFile(fullPath);
            
            let destDir;
            if (type === 'prova') {
                destDir = path.join(PROVAS_DIR, modulo, disciplina);
                movedCount.provas++;
            } else {
                destDir = path.join(MATERIAIS_DIR, modulo, disciplina);
                movedCount.materiais++;
            }
            
            ensureDir(destDir);
            
            // Handle filename collisions safely
            let destFile = path.join(destDir, file);
            let counter = 1;
            while (fs.existsSync(destFile)) {
                const ext = path.extname(file);
                const name = path.basename(file, ext);
                destFile = path.join(destDir, name + '_' + counter + ext);
                counter++;
            }
            
            try {
                fs.renameSync(fullPath, destFile);
            } catch (err) {
                console.error("Failed to move " + file + ": " + err.message);
                errorCount++;
            }
        }
    }
}

console.log('Starting file reorganization...');
ensureDir(PROVAS_DIR);
ensureDir(MATERIAIS_DIR);
walk(ROOT_DIR);
console.log('--- REORGANIZATION COMPLETE ---');
console.log('Provas (Avaliações) moved:', movedCount.provas);
console.log('Materiais moved:', movedCount.materiais);
console.log('Errors:', errorCount);
