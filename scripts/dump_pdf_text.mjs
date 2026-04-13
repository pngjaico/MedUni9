import fs from 'fs';
import { PDFParse } from 'pdf-parse';

async function dumpText(pdfPath) {
    try {
        const dataBuffer = fs.readFileSync(pdfPath);
        const parser = new PDFParse({ data: dataBuffer });
        const pdfData = await parser.getText();
        console.log(pdfData.text);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

const pdfPath = process.argv[2];
if (pdfPath) dumpText(pdfPath);
else console.log("Please provide a PDF path.");
