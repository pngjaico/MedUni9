"""Fix ips -> sus mapping and re-save."""
import json

with open('data/questoes.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for q in data['questoes']:
    if q['materia'] == 'ips':
        q['materia'] = 'sus'

# Re-sort
data['questoes'].sort(key=lambda q: (q.get('materia', ''), q['id']))
for i, q in enumerate(data['questoes']):
    q['id'] = i + 1

with open('data/questoes.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

from collections import Counter
c = Counter(q['materia'] for q in data['questoes'])
print(f"Total: {len(data['questoes'])}")
for m, n in sorted(c.items()):
    print(f"  {m}: {n}")
