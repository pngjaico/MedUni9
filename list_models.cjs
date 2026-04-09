const { GoogleGenAI } = require('@google/genai');
require('dotenv').config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function list() {
    try {
        const models = await ai.models.list();
        console.log('Available models:', models.models.map(m => m.name));
    } catch (e) {
        console.error('Error listing models:', e.message);
    }
}
list();
