const { GoogleGenerativeAI } = require('@google/genai');
console.log('GoogleGenerativeAI type:', typeof GoogleGenerativeAI);
try {
    const ai = new GoogleGenerativeAI('test');
    console.log('ai instance keys:', Object.keys(ai));
    console.log('ai.getGenerativeModel type:', typeof ai.getGenerativeModel);
} catch(e) {
    console.log('Error instantiating:', e.message);
    const genai = require('@google/genai');
    console.log('Package keys:', Object.keys(genai));
}
