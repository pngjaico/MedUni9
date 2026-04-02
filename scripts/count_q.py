import json
a = json.load(open('data/questoes_antigas.json','r',encoding='utf-8'))
b = json.load(open('data/questoes_ineditas.json','r',encoding='utf-8'))
c = json.load(open('data/questoes.json','r',encoding='utf-8'))
print('antigas:', len(a['questoes']))
print('ineditas:', len(b['questoes']))
print('questoes.json:', len(c['questoes']))
# Check overlap
ids_a = set(q['id'] for q in a['questoes'])
ids_b = set(q['id'] for q in b['questoes'])
ids_c = set(q['id'] for q in c['questoes'])
print('ids overlap b/c:', len(ids_b & ids_c))
print('ids overlap a/c:', len(ids_a & ids_c))
# Materias in each
mats_a = set(q['materia'] for q in a['questoes'])
mats_b = set(q['materia'] for q in b['questoes'])
print('materias antigas:', sorted(mats_a))
print('materias ineditas:', sorted(mats_b))
