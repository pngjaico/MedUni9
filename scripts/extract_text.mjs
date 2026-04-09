import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PDF_PATH = path.join(__dirname, '..', 'document_pdf.pdf');
const OUTPUT_TXT = path.join(__dirname, '..', 'document_pdf_text.txt');

async function extract() {
    try {
        const dataBuffer = fs.readFileSync(PDF_PATH);
        let parsedData;
        try {
            parsedData = await pdf.default(dataBuffer);
        } catch {
            parsedData = await pdf(dataBuffer);
        }
        fs.writeFileSync(OUTPUT_TXT, parsedData.text, 'utf-8');
        console.log("Texto extraído com sucesso!");
    } catch (e) {
        console.error("Erro", e);
    }
}
extract();
