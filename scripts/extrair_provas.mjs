import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import dotenv from 'dotenv';

const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');
const { GoogleGenAI } = require('@google/genai');

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
    console.error("Erro: GEMINI_API_KEY não encontrada no arquivo .env");
    process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const SYSTEM_PROMPT = `Você é um curador médico acadêmico experiente do MedGradPlus. 
Sua tarefa é extrair questões de medicina a partir de textos brutos (OCR ou PDF) e formatá-las em JSON estrito seguindo estas regras de ELITE:

1. **Transcrição 100% FIEL (Verbatim)**: NÃO resuma e NÃO adicione NENHUM negrito no "enunciado" nem nas "opcoes". Copie o texto EXATAMENTE como está no PDF, caractere por caractere.
2. **Elite Bolding Plus (Aesthetics)**: Aplique negrito (markdown: **texto**) APENAS no campo "explicacao_geral" e no objeto "explicacoes_opcoes". Destaque termos clínicos essenciais, enzimas ou valores laboratoriais.
3. **Explicações Granulares**: Você deve gerar um objeto "explicacoes_opcoes" com uma justificativa técnica focada em POR QUE cada alternativa é falsa ou a correta. Cada justificativa deve começar com [CORRETA] ou [INCORRETA].
4. **Filtro Anti-Lixo (Imagens)**: Se a questão mencionar explicitamente "figura", "esquema" ou "imagem abaixo", marque "depende_de_imagem": true.
5. **Prefixo obrigatório**: No campo "enunciado", comece o texto sempre com: [PROVA MÉDICA] 

O formato JSON deve ser:
{
  "materia": "sigla",
  "enunciado": "[PROVA MÉDICA] texto fiel sem negritos",
  "opcoes": ["A) ...", "B) ...", "C) ...", "D) ..."],
  "correta": 0,
  "explicacao_geral": "Resumo clínico curto com **negritos**",
  "explicacoes_opcoes": {
     "A": "[INCORRETA] explicação com **negritos**...",
     "B": "[CORRETA] explicação com **negritos**...",
     "C": "[INCORRETA] explicação com **negritos**...",
     "D": "[INCORRETA] explicação com **negritos**..."
  },
  "tema": "aula_id",
  "dificuldade": 2,
  "depende_de_imagem": false
}`;

async function readPdfContent(pdfPath) {
    try {
        const dataBuffer = fs.readFileSync(pdfPath);
        const { PDFParse } = pdf;
        if (!PDFParse) {
            const pdfFn = pdf.default || pdf;
            const data = await pdfFn(dataBuffer);
            return data.text;
        }
        const parser = new PDFParse({ data: dataBuffer });
        const textData = await parser.getText();
        await parser.destroy();
        return textData.text;
    } catch (error) {
        console.error(`Erro ao ler o PDF ${pdfPath}:`, error.message);
        return null;
    }
}

async function extractQuestionsWithGemini(textBlock) {
    try {
        const response = await ai.models.generateContent({
            model: 'models/gemini-2.5-flash',
            contents: [
                { role: 'user', parts: [{ text: SYSTEM_PROMPT + '\n\nTEXTO DO PDF:\n' + textBlock }] }
            ],
            generationConfig: {
                temperature: 0.1,
            }
        });

        const rawResponse = response.text;
        return JSON.parse(rawResponse.replace(/```json/gi, '').replace(/```/g, '').trim());
    } catch (error) {
        console.error("Erro na extração com Gemini:", error.message);
        return null;
    }
}

async function processAllPdfs() {
    const PDF_PATH = path.join(__dirname, '..', 'conteudos', 'Materiais para Provas antigas', 'Drives Veteranos', '1 SEMESTRE', 'BCM', 'P1 - PMH (BCM1) - 2024.1.pdf');
    const OUTPUT_JSON = path.join(__dirname, '..', 'data', 'questoes_antigas_teste.json'); // Usar arquivo de teste para validação

    console.log(`Iniciando leitura do arquivo de teste: ${PDF_PATH}`);
    const text = await readPdfContent(PDF_PATH);
    
    if (!text || text.trim().length === 0) {
        console.log("Aviso: O arquivo está vazio ou não pôde ser lido.");
        return;
    }

    // Processar o texto em blocos de ~10k caracteres para garantir que o Gemini não corte o JSON
    const chunkSize = 10000;
    const blocks = [];
    for (let i = 0; i < text.length; i += chunkSize) {
        blocks.push(text.substring(i, i + chunkSize));
    }
    
    console.log(`Enviando ${text.length} caracteres divididos em ${blocks.length} blocos para o Gemini...`);

    const allNewQuestions = [];
    for (let i = 0; i < blocks.length; i++) {
        console.log(`Processando bloco ${i + 1}/${blocks.length}...`);
        const result = await extractQuestionsWithGemini(blocks[i]);
        if (result) {
            if (Array.isArray(result)) {
                allNewQuestions.push(...result);
            } else {
                allNewQuestions.push(result);
            }
        }
        // Delay de 5 segundos entre blocos para não estourar o limite de 15 RPM do Free Tier
        if (i < blocks.length - 1) {
            console.log("Aguardando 5s para o próximo bloco (RPM safety)...");
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }

    if (allNewQuestions.length === 0) {
        console.log("FIM! Nenhuma questão foi gerada.");
        return;
    }

    // Filtrar questões que dependem de imagem antes de salvar
    const filteredQuestions = allNewQuestions.filter(q => !q.depende_de_imagem);
    console.log(`Extraídas ${allNewQuestions.length} questões. ${allNewQuestions.length - filteredQuestions.length} descartadas por imagem.`);

    const existingData = JSON.parse(fs.readFileSync(OUTPUT_JSON, 'utf-8'));
    let maxId = Math.max(...existingData.questoes.map(q => q.id), 0);

    const questionsToSave = filteredQuestions.map(q => ({
        id: ++maxId,
        categoria: "antiga",
        ...q
    }));

    existingData.questoes.push(...questionsToSave);
    fs.writeFileSync(OUTPUT_JSON, JSON.stringify(existingData, null, 2));
    console.log(`Sucesso! ${questionsToSave.length} questões adicionais salvas em data/questoes_antigas.json`);
}

processAllPdfs();
