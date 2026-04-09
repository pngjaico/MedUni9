const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const PDF_PATH = path.join(__dirname, '..', 'document_pdf.pdf');
const OUTPUT_TXT = path.join(__dirname, '..', 'document_pdf_text.txt');

async function extract() {
    try {
        const dataBuffer = fs.readFileSync(PDF_PATH);
        console.log(pdf);
        const pdfFn = pdf.default || pdf.pdf || pdf;
        fs.writeFileSync(OUTPUT_TXT, data.text, 'utf-8');
        console.log("Texto extraído com sucesso!");
    } catch (e) {
        console.error("Erro", e);
    }
}
extract();
