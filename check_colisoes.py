import re, json

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()
with open('data/materias.json', 'r', encoding='utf-8') as f:
    mat = json.load(f)

idx = html.find('const MODULOS_CONFIG')
end = html.find('const getModulos', idx)
blk = html[idx:end]

keys = re.findall(r'      (\w+): \[', blk)
print('Chaves em MODULOS_CONFIG:', keys)
print()
for k in keys:
    n = blk.count(f'id: "{k}_')
    m = len(mat.get(k, {}).get('aulas', []))
    flag = ' <-- COLISAO' if k in mat else ''
    print(f'  {k}: {n} temas hardcoded | {m} aulas em materias.json{flag}')
