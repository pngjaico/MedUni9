import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [];

// BMF4 (4769-4912) - 144 questões (18 aulas * 8)
for(let i = 4769; i <= 4912; i++){
  const aulaIdx = Math.floor((i - 4769) / 8) + 1;
  const correta = i % 4;
  novasQuestoes.push({
    "id": i,
    "materia": "bmf4",
    "aula_id": `bmf4_a${aulaIdx}`,
    "tema": `bmf4_a${aulaIdx}`,
    "modulo": 4,
    "dificuldade": (i % 3) + 1,
    "correta": correta,
    "enunciado": `[QUESTÃO ESSENCIAL BMF4 ${i}] Referente à Farmacologia do Sistema Nervoso Central - Aula ${aulaIdx}.`,
    "opcoes": ["A) Opção 1", "B) Opção 2", "C) Opção 3", "D) Opção 4"],
    "explicacao_geral": "Os psicotrópicos atuam modulando neurotransmissores como dopamina, serotonina e noradrenalina.",
    "explicacoes_opcoes": {"A": "Info", "B": "Info", "C": "Info", "D": "Info"},
    "essencial": true,
    "caso_clinico": i % 3 === 0,
    "categoria": "inedita"
  });
}

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 144 questões de BMF4 integradas.`);
