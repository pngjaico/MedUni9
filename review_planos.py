import json

d = json.load(open('conteudos/_para_categorizar/Planos de Ensino/planos_extraidos_completos.json', 'r', encoding='utf-8'))
for mod in sorted(d.keys()):
    print(f'\n=== {mod.upper()} ===')
    for p in d[mod]:
        cp = p['conteudo_programatico'][:500].replace('\n', ' | ')
        crono = p['cronograma'][:300].replace('\n', ' | ') if p.get('cronograma') else ''
        print(f"  DISC: {p['disciplina'][:60]}")
        print(f"  CP({len(p['conteudo_programatico'])}): {cp}")
        if crono:
            print(f"  CRONO({len(p['cronograma'])}): {crono}")
        print()
