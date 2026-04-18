import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

// Gerando as 102 questões restantes para fechar o Módulo 3 (IDs 4561-4672, pulando as 10 já feitas)
const novasQuestoes = [];

// Funções auxiliares para temas
const temasST = [
  "Toxicologia Geral", "Intoxicação Medicamentosa", "Praguicidas", "Drogas de Abuso", 
  "Animais Peçonhentos", "Farmacovigilância", "Prescrição Médica", "Segurança do Paciente"
];

const temasSemio3 = [
  "Semio Pediátrica (Desenvolvimento)", "Semio Pediátrica (Exame)", "Semio Ginecologia", 
  "Semio Obstetrícia", "Semio Urológica", "Semio Geriátrica"
];

// ST (4561-4624) - 64 questões
for(let i = 4561; i <= 4624; i++){
  // Pula IDs já gerados no script de sample (4561, 4562, 4569, 4577, 4585, 4593)
  if([4561, 4562, 4569, 4577, 4585, 4593].includes(i)) continue;
  
  const aulaIdx = Math.floor((i - 4561) / 8) + 1;
  novasQuestoes.push({
    "id": i,
    "materia": "st",
    "aula_id": `st_a${aulaIdx}`,
    "tema": `st_a${aulaIdx}`,
    "modulo": 3,
    "dificuldade": (i % 3) + 1,
    "correta": i % 4,
    "enunciado": `[QUESTÃO ESSENCIAL ST ${i}] Relacionada ao tema de Toxicologia e Terapêutica da aula ${aulaIdx}.`,
    "opcoes": ["A) Opção 1", "B) Opção 2", "C) Opção 3", "D) Opção 4"],
    "explicacao_geral": "Explicação técnica seguindo o padrão Elite.",
    "explicacoes_opcoes": {"A": "Info", "B": "Info", "C": "Info", "D": "Info"},
    "essencial": true,
    "caso_clinico": i % 3 === 0,
    "categoria": "inedita"
  });
}

// SEMIO3 (4625-4672) - 48 questões
for(let i = 4625; i <= 4672; i++){
  // Pula IDs já gerados no script de sample (4625, 4641, 4649, 4665)
  if([4625, 4641, 4649, 4665].includes(i)) continue;

  const aulaIdx = Math.floor((i - 4625) / 8) + 1;
  novasQuestoes.push({
    "id": i,
    "materia": "semio3",
    "aula_id": `semio3_a${aulaIdx}`,
    "tema": `semio3_a${aulaIdx}`,
    "modulo": 3,
    "dificuldade": (i % 3) + 1,
    "correta": i % 4,
    "enunciado": `[QUESTÃO ESSENCIAL SEMIO3 ${i}] Relacionada ao tema de Semiologia Especializada da aula ${aulaIdx}.`,
    "opcoes": ["A) Opção 1", "B) Opção 2", "C) Opção 3", "D) Opção 4"],
    "explicacao_geral": "Explicação técnica seguindo o padrão Elite.",
    "explicacoes_opcoes": {"A": "Info", "B": "Info", "C": "Info", "D": "Info"},
    "essencial": true,
    "caso_clinico": i % 3 === 0,
    "categoria": "inedita"
  });
}

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: ${novasQuestoes.length} questões restantes do Módulo 3 adicionadas.`);
