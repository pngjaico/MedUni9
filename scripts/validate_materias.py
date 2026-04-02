import json
d = json.load(open("data/materias.json", "r", encoding="utf-8"))
print("JSON valid!")
for k, v in d.items():
    aulas = v.get("aulas", [])
    print(f"  {k}: {v['nome']} (mod {v['modulo']}) - {len(aulas)} aulas")
    for a in aulas:
        print(f"    - [{a['id']}] {a['tema']}")
