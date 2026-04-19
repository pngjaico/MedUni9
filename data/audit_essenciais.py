import sys
import json
import re
from collections import defaultdict

sys.stdout.reconfigure(encoding='utf-8')

# Carregar arquivo
with open("C:/Users/Usuario-pc/Desktop/Aplicativo Uni9/meduni9-app/data/questoes.json", encoding='utf-8-sig') as f:
    data = json.load(f)

questoes = data['questoes'] if isinstance(data, dict) and 'questoes' in data else data

print(f"Total de questões no arquivo: {len(questoes)}")

# Filtrar essenciais, excluindo st e semio3
essenciais = [q for q in questoes if q.get('essencial') == True and q.get('materia') not in ('st', 'semio3')]
print(f"Essenciais (sem st/semio3): {len(essenciais)}")

# Padrões de metalinguagem
METALINGUAGEM_PATTERNS = [
    r'o conteúdo',
    r'o material',
    r'a aula',
    r'conforme estudado',
    r'conforme o conteúdo',
    r'a ponte clínica',
    r'o texto cita',
    r'o texto enfatiza',
    r'o livro',
    r'o módulo',
    r'cita que',
    r'enfatiza que',
    r'destaca que',
    r'ressalta que',
    r'menciona que',
    r'segundo o material',
    r'como visto',
    r'como estudado',
    r'síntese da observação',
    r'correta: síntese',
]

PLACEHOLDER_PATTERNS = [
    r'^opção \d+$',
    r'^alternativa [a-d]$',
    r'^a ser preenchido',
    r'^\.\.\.$',
    r'^\s*$',
]

def check_metalinguagem(text):
    """Retorna lista de matches encontrados."""
    if not text:
        return []
    matches = []
    text_lower = text.lower()
    for pat in METALINGUAGEM_PATTERNS:
        found = re.findall(pat, text_lower)
        if found:
            # Pegar trecho de contexto
            for m in re.finditer(pat, text_lower):
                start = max(0, m.start() - 30)
                end = min(len(text), m.end() + 60)
                trecho = text[start:end].replace('\n', ' ').strip()
                matches.append(trecho)
    return matches

def check_placeholder(text):
    """Verifica se o texto é um placeholder."""
    if text is None or text == '':
        return True, 'vazio/null'
    text_strip = text.strip()
    if len(text_strip) < 10:
        return True, f'muito curto ({len(text_strip)} chars): "{text_strip}"'
    for pat in PLACEHOLDER_PATTERNS:
        if re.match(pat, text_strip, re.IGNORECASE):
            return True, f'padrão placeholder: "{text_strip}"'
    return False, None

def get_all_text_fields(q):
    """Retorna todos os campos de texto para checagem."""
    fields = []
    if q.get('enunciado'):
        fields.append(('enunciado', q['enunciado']))
    for i, op in enumerate(q.get('opcoes', [])):
        fields.append((f'opcao_{i}', op))
    if q.get('explicacao_geral'):
        fields.append(('explicacao_geral', q['explicacao_geral']))
    exp_op = q.get('explicacoes_opcoes', {})
    if isinstance(exp_op, dict):
        for k, v in exp_op.items():
            fields.append((f'explicacao_opcao_{k}', v))
    return fields

# Resultados por matéria
results = defaultdict(lambda: {
    'total': 0,
    'placeholders': [],
    'metalinguagem': [],
    'estruturais': [],
})

all_problematic_ids = set()

for q in essenciais:
    qid = q.get('id', 'SEM_ID')
    materia = q.get('materia', 'SEM_MATERIA')
    results[materia]['total'] += 1

    problemas = []

    # --- PLACEHOLDERS ---
    opcoes = q.get('opcoes', [])
    for i, op in enumerate(opcoes):
        is_ph, reason = check_placeholder(op)
        if is_ph:
            results[materia]['placeholders'].append({
                'id': qid,
                'campo': f'opcao_{i}',
                'detalhe': reason
            })
            all_problematic_ids.add(qid)

    # Verificar enunciado curto (placeholder)
    enunciado = q.get('enunciado', '')
    if not enunciado or len(enunciado.strip()) < 50:
        results[materia]['placeholders'].append({
            'id': qid,
            'campo': 'enunciado',
            'detalhe': f'muito curto ({len((enunciado or "").strip())} chars)'
        })
        all_problematic_ids.add(qid)

    # --- METALINGUAGEM ---
    all_fields = get_all_text_fields(q)
    for campo, texto in all_fields:
        matches = check_metalinguagem(texto)
        if matches:
            for match in matches:
                results[materia]['metalinguagem'].append({
                    'id': qid,
                    'campo': campo,
                    'trecho': match
                })
            all_problematic_ids.add(qid)

    # --- ESTRUTURAIS ---
    # Explicação geral curta
    expl_geral = q.get('explicacao_geral', '')
    if not expl_geral or len((expl_geral or '').strip()) < 40:
        results[materia]['estruturais'].append({
            'id': qid,
            'problema': f'explicacao_geral curta ({len((expl_geral or "").strip())} chars): "{(expl_geral or "").strip()[:80]}"'
        })
        all_problematic_ids.add(qid)

    # explicacoes_opcoes faltando chaves
    exp_op = q.get('explicacoes_opcoes', {})
    if isinstance(exp_op, dict):
        esperadas = {'A', 'B', 'C', 'D'}
        faltando = esperadas - set(exp_op.keys())
        if faltando:
            results[materia]['estruturais'].append({
                'id': qid,
                'problema': f'explicacoes_opcoes faltando chaves: {sorted(faltando)}'
            })
            all_problematic_ids.add(qid)
    elif exp_op is None or exp_op == {}:
        results[materia]['estruturais'].append({
            'id': qid,
            'problema': 'explicacoes_opcoes ausente/vazio'
        })
        all_problematic_ids.add(qid)

    # Resposta correta fora do range
    correta = q.get('correta')
    if correta is not None:
        try:
            idx = int(correta)
            if idx < 0 or idx >= len(opcoes):
                results[materia]['estruturais'].append({
                    'id': qid,
                    'problema': f'correta={correta} fora do range (opcoes={len(opcoes)})'
                })
                all_problematic_ids.add(qid)
        except (ValueError, TypeError):
            results[materia]['estruturais'].append({
                'id': qid,
                'problema': f'correta="{correta}" não é inteiro válido'
            })
            all_problematic_ids.add(qid)

# ===== RELATÓRIO =====
print("\n" + "="*80)
print("# RELATÓRIO DE AUDITORIA — QUESTÕES ESSENCIAIS")
print("="*80)
print(f"\nTotal de questões auditadas: {len(essenciais)}")
print(f"Total de questões problemáticas: {len(all_problematic_ids)}")

# Ordenar matérias
materias_sorted = sorted(results.keys())

print("\n" + "="*80)
print("## RESUMO POR MATÉRIA")
print("="*80)
print(f"{'Matéria':<20} {'Total':>6} {'Placeholder':>12} {'Metalinguagem':>14} {'Estrutural':>11} {'Únicos c/ prob':>15}")
print("-"*80)

total_ph = 0
total_meta = 0
total_est = 0

for mat in materias_sorted:
    r = results[mat]
    # contar IDs únicos por tipo
    ids_ph = len(set(x['id'] for x in r['placeholders']))
    ids_meta = len(set(x['id'] for x in r['metalinguagem']))
    ids_est = len(set(x['id'] for x in r['estruturais']))
    ids_prob = len(set(
        [x['id'] for x in r['placeholders']] +
        [x['id'] for x in r['metalinguagem']] +
        [x['id'] for x in r['estruturais']]
    ))
    total_ph += ids_ph
    total_meta += ids_meta
    total_est += ids_est
    if ids_prob > 0:
        print(f"{mat:<20} {r['total']:>6} {ids_ph:>12} {ids_meta:>14} {ids_est:>11} {ids_prob:>15}")

print("-"*80)
print(f"{'TOTAL':<20} {len(essenciais):>6} {total_ph:>12} {total_meta:>14} {total_est:>11} {len(all_problematic_ids):>15}")

# ===== DETALHE POR MATÉRIA =====
print("\n" + "="*80)
print("## DETALHE POR MATÉRIA")
print("="*80)

for mat in materias_sorted:
    r = results[mat]
    if not r['placeholders'] and not r['metalinguagem'] and not r['estruturais']:
        continue

    print(f"\n### Matéria: {mat} ({r['total']} questões essenciais)")
    print("-"*60)

    if r['placeholders']:
        print(f"\n#### PLACEHOLDERS ({len(set(x['id'] for x in r['placeholders']))} questões afetadas)")
        seen = set()
        for p in r['placeholders']:
            key = (p['id'], p['campo'])
            if key not in seen:
                seen.add(key)
                print(f"  - ID {p['id']} | {p['campo']}: {p['detalhe']}")

    if r['metalinguagem']:
        print(f"\n#### METALINGUAGEM ({len(set(x['id'] for x in r['metalinguagem']))} questões afetadas)")
        seen_ids = set()
        for m in r['metalinguagem']:
            print(f"  - ID {m['id']} | {m['campo']}: \"{m['trecho']}\"")

    if r['estruturais']:
        print(f"\n#### ESTRUTURAIS ({len(set(x['id'] for x in r['estruturais']))} questões afetadas)")
        seen = set()
        for e in r['estruturais']:
            key = (e['id'], e['problema'][:40])
            if key not in seen:
                seen.add(key)
                print(f"  - ID {e['id']}: {e['problema']}")

print("\n" + "="*80)
print("## LISTA COMPLETA DE IDs PROBLEMÁTICOS")
print("="*80)
print(f"Total: {len(all_problematic_ids)}")
print(sorted(all_problematic_ids))
