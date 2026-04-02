import json, os, re

PLANOS_FILE = 'conteudos/_para_categorizar/Planos de Ensino/planos_estruturados.json'

print("🧹 Limpando planos_estruturados.json (removendo duplicatas e inválidas)...\n")

with open(PLANOS_FILE, 'r', encoding='utf-8') as f:
    data = json.load(f)

processed = {}
removed = []

for mod, planos in data.items():
    processed[mod] = {}
    siglas_vistas = set()
    
    for nome_pdf, plan_data in planos.items():
        disciplina = plan_data.get('disciplina', '').strip()
        
        # Verificar se é inválido
        if not disciplina or '2/3 da' in disciplina or '1/3 da' in disciplina or 'AV1' in disciplina:
            removed.append(f"❌ {nome_pdf} → Disciplina inválida/vazia")
            continue
        
        # Inferir sigla do nome do arquivo para deduplication
        nome_upper = nome_pdf.upper()
        if 'BMF1' in nome_upper: sigla = 'bmf1'
        elif 'BMF' in nome_upper and '2' in nome_upper: sigla = 'bmf2'
        elif 'BMF' in nome_upper and ('3' in nome_upper or 'DIGEST' in nome_upper): sigla = 'bmf3'
        elif 'BMF4' in nome_upper: sigla = 'bmf4'
        elif 'SUS' in nome_upper or 'DIRETRIZES' in nome_upper: sigla = 'sus'
        elif 'SEMIOLOGIA' in nome_upper and 'MUSCULO' in nome_upper: sigla = 'semiologia1'
        elif 'SEMIOLOGIA' in nome_upper and ('CARDIO' in nome_upper or 'RESPIRATO' in nome_upper): sigla = 'semiologia2'
        elif 'SEMIOLOGIA' in nome_upper and ('RENAL' in nome_upper or 'REPRODUTOR' in nome_upper): sigla = 'semiologia3'
        elif 'SEMIOLOGIA' in nome_upper and 'NEURO' in nome_upper: sigla = 'semiologia4'
        elif 'TRABALHO' in nome_upper or 'OCUPACIONAL' in nome_upper: sigla = 'st'
        elif 'PE' in nome_upper:
            if 'PE1' in nome_upper or 'alimentacao' in nome_upper.lower(): sigla = 'pe1'
            elif 'PE3' in nome_upper or ('PROJETO EXTENSIONISTA' in nome_upper and 'OCUPACIONAL' in nome_upper): sigla = 'pe3'
            elif 'PE4' in nome_upper or 'IMPACTO' in nome_upper: sigla = 'pe4'
            else: sigla = 'pe2'
        elif 'BCM' in nome_upper or 'BIOLOGIA CELULAR' in nome_upper: sigla = 'bcm1'
        elif 'PMH' in nome_upper or 'METABOLICO' in nome_upper: sigla = 'pmh'
        elif 'MAD' in nome_upper or 'AGRESS' in nome_upper: sigla = 'mad1'
        elif 'BIOESTAT' in nome_upper: sigla = 'bioe'
        elif 'INDICADORES' in nome_upper: sigla = 'indicadores'
        elif 'DIMENSOES' in nome_upper or 'SOCIOAMBIENTAIS' in nome_upper: sigla = 'ds'
        elif 'MFC' in nome_upper or 'FAMILIA' in nome_upper: sigla = 'mfc'
        elif 'CIRURGIA' in nome_upper or 'ORTOPEDIA' in nome_upper: sigla = 'cirurgia'
        elif 'CLINICA' in nome_upper and 'MEDICA' in nome_upper: sigla = 'clinica'
        elif 'TCAR' in nome_upper or 'OPERATORIA' in nome_upper: sigla = 'tcar'
        elif 'FISIOPATOLOGICO' in nome_upper or 'FARMACOTERAPEUTICO' in nome_upper:
            sigla = 'ff4' if 'NEURO' in nome_upper else 'process'
        else:
            sigla = 'unknown'
        
        # Detectar duplicata
        if sigla in siglas_vistas:
            removed.append(f"⚠️  {nome_pdf} → Duplicata de {sigla} (mantida a primeira)")
            continue
        
        siglas_vistas.add(sigla)
        processed[mod][nome_pdf] = plan_data
        print(f"✅ {sigla:15} | {disciplina[:50]:50}")

# Salvar arquivo limpo
with open(PLANOS_FILE, 'w', encoding='utf-8') as f:
    json.dump(processed, f, ensure_ascii=False, indent=2)

print(f"\n🧹 Removed/Skipped:")
for r in removed:
    print(r)

print(f"\n✅ Arquivo limpo e salvo!")
print(f"📊 Disciplinas mantidas: {sum(len(p) for p in processed.values())}")
