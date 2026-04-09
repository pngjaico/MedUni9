const { GoogleGenAI } = require('@google/genai');
require('dotenv').config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function list() {
    try {
        const models = await ai.models.list();
        console.log('Full models response:', JSON.stringify(models, null, 2));
    } catch (e) {
        console.error('Error listing models:', e.message);
    }
}
list();
