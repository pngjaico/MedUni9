"""Merge questoes_antigas + questoes_ineditas + questoes.json into one unified questoes.json, deduplicating."""
import json

files = [
    'data/questoes_ineditas.json',
    'data/questoes_antigas.json',
    'data/questoes.json',
]

seen = set()
merged = []

for path in files:
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    qs = data.get('questoes', data)
    for q in qs:
        # Dedup by enunciado text (most reliable)
        key = q['enunciado'].strip()[:120]
        if key in seen:
            continue
        seen.add(key)
        # Remove categoria field
        q.pop('categoria', None)
        merged.append(q)

# Re-number IDs sequentially
for i, q in enumerate(merged):
    q['id'] = i + 1

# Sort by materia then id
merged.sort(key=lambda q: (q.get('materia', ''), q['id']))
for i, q in enumerate(merged):
    q['id'] = i + 1

with open('data/questoes.json', 'w', encoding='utf-8') as f:
    json.dump({"questoes": merged}, f, ensure_ascii=False, indent=2)

# Count per materia
from collections import Counter
c = Counter(q['materia'] for q in merged)
print(f"Total: {len(merged)} questoes unicas")
for mat, n in sorted(c.items()):
    print(f"  {mat}: {n}")
