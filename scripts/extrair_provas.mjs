import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
const TEST_MODE = process.argv.includes('--test');

const SYSTEM_PROMPT = `Você é um curador médico acadêmico experiente do MedGradPlus. 
Sua tarefa é extrair questões de medicina a partir de textos brutos (OCR ou PDF) e formatá-las em JSON estrito seguindo estas regras de ELITE (V8):

1. TRANSCRIÇÃO FIEL: NÃO resuma, NÃO adicione negritos no "enunciado" nem nas "opcoes". Copie o texto EXATAMENTE como está no PDF. Prefixe o enunciado com "[PROVA MÉDICA] ".
2. OPCOES LIMPAS: Comece com letra e parêntese: "A) ...", "B) ...", "C) ...", "D) ...".
3. ELITE BOLDING: Aplique negrito (**texto**) APENAS em "explicacao_geral" e "explicacoes_opcoes". Destaque termos clínicos, enzimas, valores laboratoriais.
4. SEM PREFIXOS: Em "explicacoes_opcoes", NÃO use [CORRETA] ou [INCORRETA]. A interface cuida disso com cores.
5. FILTRO IMAGENS: Se mencionar "figura", "esquema" ou "imagem", marque "depende_de_imagem": true.
6. TEMA: Deduza a aula (ex: pmh_a3, bcm1_a2) ou use "materia_generic".
7. Se o PDF não tiver questões objetivas (múltipla escolha), retorne um array vazio: []

Formato JSON — ARRAY obrigatório:
[
  {
    "materia": "sigla (ex: pmh, bcm1, mad1, bmf1)",
    "enunciado": "[PROVA MÉDICA] texto fiel sem negritos",
    "opcoes": ["A) ...", "B) ...", "C) ...", "D) ..."],
    "correta": 0,
    "explicacao_geral": "Resumo clínico com **negritos**",
    "explicacoes_opcoes": {
       "A": "Justificativa direta com **negritos**",
       "B": "Justificativa direta com **negritos**",
       "C": "Justificativa direta com **negritos**",
       "D": "Justificativa direta com **negritos**"
    },
    "tema": "aula_id_ou_materia_generic",
    "dificuldade": 2,
    "depende_de_imagem": false
  }
]`;

async function readPdfContent(pdfPath) {
    try {
        const dataBuffer = fs.readFileSync(pdfPath);
        const { PDFParse } = await import('pdf-parse');
        const parser = new PDFParse({ data: dataBuffer });
        const pdfData = await parser.getText();
        return pdfData.text;
    } catch (error) {
        console.error(`   ❌ Erro ao ler PDF: ${error.message}`);
        return null;
    }
}

async function extractQuestionsWithGemini(textBlock) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: SYSTEM_PROMPT + "\n\nTEXTO DO PDF:\n" + textBlock }]
                }],
                generationConfig: { temperature: 0.1 }
            })
        });

        const data = await response.json();
        
        if (data.error) {
            console.error(`   ❌ Erro API (${data.error.code}): ${data.error.message}`);
            return null;
        }

        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!text) { console.error("   ❌ Resposta vazia"); return null; }

        const jsonStr = text.replace(/```json/gi, '').replace(/```/g, '').trim();
        return JSON.parse(jsonStr);
    } catch (error) {
        console.error(`   ❌ Erro técnico: ${error.message}`);
        return null;
    }
}

async function processAllPdfs() {
    const INPUT_DIR = path.join(__dirname, '..', 'document_pdf');
    const OUTPUT_JSON = path.join(__dirname, '..', 'data', 'questoes_antigas.json');

    const allFiles = fs.readdirSync(INPUT_DIR)
        .filter(f => f.toLowerCase().endsWith('.pdf'))
        .sort((a, b) => fs.statSync(path.join(INPUT_DIR, b)).size - fs.statSync(path.join(INPUT_DIR, a)).size)
        .map(f => path.join(INPUT_DIR, f));

    if (allFiles.length === 0) {
        console.log("Nenhum PDF encontrado em document_pdf/.");
        return;
    }

    const files = TEST_MODE ? [allFiles[0]] : allFiles;
    console.log(TEST_MODE
        ? `\n🧪 MODO TESTE — processando 1 arquivo: ${path.basename(files[0])}\n`
        : `\n🚀 Processando ${files.length} arquivos...\n`
    );

    let data = { questoes: [] };
    if (fs.existsSync(OUTPUT_JSON)) {
        data = JSON.parse(fs.readFileSync(OUTPUT_JSON, 'utf-8'));
    }
    let maxId = Math.max(...data.questoes.map(q => q.id), 0);
    let totalExtracted = 0;

    for (let fi = 0; fi < files.length; fi++) {
        const filePath = files[fi];
        const fileName = path.basename(filePath);
        console.log(`[${fi+1}/${files.length}] 📄 ${fileName}`);
        
        const fullText = await readPdfContent(filePath);
        if (!fullText || fullText.trim().length < 50) {
            console.log("   ⏭️  Arquivo sem texto útil, pulando...");
            continue;
        }

        const chunkSize = 8000;
        const blocks = [];
        for (let i = 0; i < fullText.length; i += chunkSize) {
            blocks.push(fullText.substring(i, i + chunkSize));
        }

        for (let bi = 0; bi < blocks.length; bi++) {
            console.log(`   📦 Bloco ${bi+1}/${blocks.length}...`);
            
            const results = await extractQuestionsWithGemini(blocks[bi]);
            if (results && Array.isArray(results)) {
                const valid = results.filter(q => !q.depende_de_imagem && q.enunciado && q.opcoes?.length >= 2);
                valid.forEach(q => {
                    q.id = ++maxId;
                    q.categoria = "antiga";
                    data.questoes.push(q);
                    totalExtracted++;
                    console.log(`      ✅ #${q.id}: ${q.enunciado.substring(0, 60)}...`);
                });
                if (valid.length === 0) console.log("      ⏭️  Nenhuma questão objetiva neste bloco.");
            }

            // RPM Safety: 5 RPM = 1 req / 12s. Usando 15s de margem.
            if (bi < blocks.length - 1) {
                console.log("      ⏱️  Aguardando 15s...");
                await new Promise(r => setTimeout(r, 15000));
            }
        }

        // Salva progresso a cada arquivo
        fs.writeFileSync(OUTPUT_JSON, JSON.stringify(data, null, 2));
        console.log(`   💾 Progresso salvo. Total até agora: ${data.questoes.length} questões.`);

        // Delay entre arquivos
        if (fi < files.length - 1) {
            console.log("   ⏱️  Aguardando 15s antes do próximo arquivo...");
            await new Promise(r => setTimeout(r, 15000));
        }
    }

    console.log(`\n✨ CONCLUÍDO! ${totalExtracted} questões novas extraídas. Total na base: ${data.questoes.length}`);
}

processAllPdfs();
