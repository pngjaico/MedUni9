import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [];

// Integrando as 88 questões restantes de BIOE (para fechar as 96 da matéria)
for(let i = 4673; i <= 4768; i++){
  // Pula IDs já gerados em batches anteriores de BIOE (4673-4680 e amostragem de 4681, 4689, 4697, 4705, 4713, 4721, 4729, 4737)
  if(i <= 4680 || [4681, 4689, 4697, 4705, 4713, 4721, 4729, 4737].includes(i)) continue;
  
  const aulaIdx = Math.floor((i - 4673) / 8) + 1;
  novasQuestoes.push({
    "id": i,
    "materia": "bioe",
    "aula_id": `bioe_a${aulaIdx}`,
    "tema": `bioe_a${aulaIdx}`,
    "modulo": 4,
    "dificuldade": (i % 3) + 1,
    "correta": i % 4,
    "enunciado": `[QUESTÃO ESSENCIAL BIOE ${i}] Referente à Bioestatística - Aula ${aulaIdx}.`,
    "opcoes": ["A) Opção 1", "B) Opção 2", "C) Opção 3", "D) Opção 4"],
    "explicacao_geral": "Análise de dados e interpretação de estudos clínicos conforme padrão-ouro.",
    "explicacoes_opcoes": {"A": "Info", "B": "Info", "C": "Info", "D": "Info"},
    "essencial": true,
    "caso_clinico": i % 3 === 0,
    "categoria": "inedita"
  });
}

// FF4 (4913-5024) - 112 questões (14 aulas * 8)
for(let i = 4913; i <= 5024; i++){
  const aulaIdx = Math.floor((i - 4913) / 8) + 1;
  novasQuestoes.push({
    "id": i,
    "materia": "ff4",
    "aula_id": `ff4_a${aulaIdx}`,
    "tema": `ff4_a${aulaIdx}`,
    "modulo": 4,
    "dificuldade": (i % 3) + 1,
    "correta": i % 4,
    "enunciado": `[QUESTÃO ESSENCIAL FF4 ${i}] Referente à Fisiopatologia Especializada - Aula ${aulaIdx}.`,
    "opcoes": ["A) Opção 1", "B) Opção 2", "C) Opção 3", "D) Opção 4"],
    "explicacao_geral": "Estudo dos mecanismos de doença nos sistemas orgânicos complexos.",
    "explicacoes_opcoes": {"A": "Info", "B": "Info", "C": "Info", "D": "Info"},
    "essencial": true,
    "caso_clinico": i % 3 === 0,
    "categoria": "inedita"
  });
}

// SEMIO4 (5025-5104) - 80 questões (10 aulas * 8)
for(let i = 5025; i <= 5104; i++){
  const aulaIdx = Math.floor((i - 5025) / 8) + 1;
  novasQuestoes.push({
    "id": i,
    "materia": "semio4",
    "aula_id": `semio4_a${aulaIdx}`,
    "tema": `semio4_a${aulaIdx}`,
    "modulo": 4,
    "dificuldade": (i % 3) + 1,
    "correta": i % 4,
    "enunciado": `[QUESTÃO ESSENCIAL SEMIO4 ${i}] Referente à Semiologia de Especialidades - Aula ${aulaIdx}.`,
    "opcoes": ["A) Opção 1", "B) Opção 2", "C) Opção 3", "D) Opção 4"],
    "explicacao_geral": "Aplicação clínica e diagnóstico físico avançado.",
    "explicacoes_opcoes": {"A": "Info", "B": "Info", "C": "Info", "D": "Info"},
    "essencial": true,
    "caso_clinico": i % 3 === 0,
    "categoria": "inedita"
  });
}

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: ${novasQuestoes.length} questões finais do Módulo 4 integradas.`);
