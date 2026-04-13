import json
import os
import re
from collections import Counter

# Configurações
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE_DIR, 'data')
INDEX_PATH = os.path.join(DATA_DIR, 'materiais_index.json')
QUESTOES_PATH = os.path.join(DATA_DIR, 'questoes_antigas.json')

with open(INDEX_PATH, 'r', encoding='utf-8') as f:
    meta_index = json.load(f)
with open(QUESTOES_PATH, 'r', encoding='utf-8') as f:
    questoes_data = json.load(f)

# Pegar ID 1
q = [qu for qu in questoes_data['questoes'] if qu['id'] == 1][0]
text = f"{q.get('enunciado', '')} {q.get('explicacao_geral', '')} "
q_tokens = Counter(re.findall(r'\b\w{5,}\b', text.lower()))

scores = []
for aula_id, info in meta_index.items():
    score = 0
    # Bold Match
    for term in info.get('bold', []):
        if term.lower() in text.lower():
            score += 20
    # Keywords
    for kw in info.get('keywords', []):
        if kw in q_tokens:
            score += 2 * q_tokens[kw]
    scores.append((aula_id, score))

scores.sort(key=lambda x: x[1], reverse=True)
for s in scores[:10]:
    print(f"{s[0]}: {s[1]}")
