import os, sys, json, re
import fitz  # PyMuPDF

sys.stdout.reconfigure(encoding='utf-8')

PASTA_PLANOS = r'c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\conteudos\_para_categorizar\Planos de Ensino'
SAIDA_JSON   = os.path.join(PASTA_PLANOS, 'textos_extraidos.json')
SAIDA_AULAS  = os.path.join(PASTA_PLANOS, 'planos_estruturados.json')
SAIDA_RESUMO = os.path.join(PASTA_PLANOS, 'planos_resumo.md')

# ─── Helpers ──────────────────────────────────────────────────────────────────

def inferir_modulo(caminho):
    partes = caminho.replace('\\', '/').split('/')
    for p in partes:
        m = re.search(r'[Mm][oó]dulo\s*(\d)', p)
        if m:
            return f"Módulo {m.group(1)}"
    # fallback: nome do arquivo
    return "Sem Módulo"

def extrair_texto_pdf(caminho):
    try:
        doc = fitz.open(caminho)
        texto = ""
        for pg in doc:
            texto += pg.get_text("text") + "\n"
        doc.close()
        return texto.strip()
    except Exception as e:
        return f"[ERRO: {e}]"

def extrair_temas_bullets(texto):
    """Extrai temas de planos que usam bullets ● e ■ (formato rico)."""
    temas = []
    em_conteudo = False
    linhas = texto.split('\n')
    for linha in linhas:
        l = linha.strip()
        l_up = l.upper()
        if 'CONTEÚDO' in l_up or 'CONTEUDO' in l_up:
            em_conteudo = True
            continue
        if em_conteudo and any(kw in l_up for kw in ['AVALIAÇÃO', 'AVALIACAO', 'REFERÊNCIAS', 'BIBLIOGRAFIA COMPLEMENTAR', 'METODOLOGIA']):
            em_conteudo = False
            continue
        if not em_conteudo:
            continue
        # Capturar bullet principal ●
        if l.startswith('●') or l.startswith('•'):
            tema = l.lstrip('●•​ ').strip()
            if tema and len(tema) > 5 and tema not in temas:
                temas.append(tema)
    return temas[:30]


def extrair_temas_tabela(texto):
    """Extrai temas de planos no formato tabular (TEMA | OBJETIVOS | ...)"""
    temas = []
    linhas = texto.split('\n')
    em_conteudo = False
    for linha in linhas:
        l = linha.strip()
        if not l:
            continue
        l_up = l.upper()
        if 'CONTEÚDO PROGRAMÁTICO' in l_up or 'CONTEUDO PROGRAMATICO' in l_up:
            em_conteudo = True
            continue
        if em_conteudo and any(kw in l_up for kw in ['METODOLOGIA', 'AVALIAÇÃO', 'AVALIACAO', 'REFERÊNCIA', 'BIBLIOGRAFIA']):
            em_conteudo = False
            continue
        if not em_conteudo:
            continue
        skip_patterns = ['TEMA', 'OBJETIVOS DE', 'APRENDIZAGEM', 'ABORDAGEM', 'RECURSOS', 'METODOLOGIA DAS', 'LOCAL E', 'DIDÁTICOS', 'AULAS', 'ANEXO', 'Atividade prática', 'AULA ', '- ']
        if any(l.startswith(sp) or l == sp for sp in skip_patterns):
            continue
        if len(l) < 12 or len(l) > 120:
            continue
        verbos = ('Abordar', 'Aprender', 'Compreender', 'Identificar', 'Desenvolver', 'Conhecer', 'Entender', 'Descrever', 'Analisar', 'Discutir', 'Conceituar', 'Explicar', 'Reconhecer', 'Relacionar', 'Avaliar', 'Diferenciar')
        if any(l.startswith(v) for v in verbos):
            continue
        if l not in temas:
            temas.append(l)
    return temas[:30]


def estruturar_plano(nome_arquivo, texto):
    """Parseia o texto do plano e extrai os campos principais."""
    disciplina = ""
    carga_horaria = ""
    ementa = ""
    objetivos = []
    conteudo_programatico = []
    metodologia = ""
    avaliacao = ""
    bibliografias = []

    linhas = texto.split('\n')
    secao_atual = ""

    for linha in linhas:
        l = linha.strip()
        if not l:
            continue
        l_up = l.upper()

        if 'UNIDADE CURRICULAR' in l_up and ':' in l:
            disciplina = l.split(':')[-1].strip()
        elif 'CARGA HORÁRIA' in l_up and ':' in l:
            carga_horaria = l.split(':')[-1].strip()
        elif re.match(r'^2\.?\s+EMENTA', l_up) or re.match(r'^3\.?\s+EMENTA', l_up) or l_up == 'EMENTA':
            secao_atual = 'ementa'
        elif re.match(r'^[34]\.?\s+OBJETIVO', l_up) or l_up.startswith('OBJETIVOS DA'):
            secao_atual = 'objetivos'
        elif re.match(r'^[45]\.?\s+CONTE', l_up) or 'CONTEÚDO PROGRAMÁTICO' in l_up:
            secao_atual = 'conteudo'
        elif re.match(r'^[56]\.?\s+METODOLOGIA', l_up):
            secao_atual = 'metodologia'
        elif re.match(r'^[67]\.?\s+AVALI', l_up) or l_up.startswith('AVALIAÇÃO'):
            secao_atual = 'avaliacao'
        elif re.match(r'^[78]\.?\s+(REFERÊNCIA|BIBLIOGRAF)', l_up) or 'REFERÊNCIAS' in l_up or 'BIBLIOGRAFIA' in l_up:
            secao_atual = 'bibliografia'
        else:
            if secao_atual == 'ementa' and len(ementa) < 800:
                ementa += ' ' + l
            elif secao_atual == 'objetivos' and len(objetivos) < 15:
                if len(l) > 20:
                    objetivos.append(l)
            elif secao_atual == 'conteudo' and len(conteudo_programatico) < 30:
                if len(l) > 10 and not l.startswith('http'):
                    conteudo_programatico.append(l)
            elif secao_atual == 'metodologia' and len(metodologia) < 400:
                metodologia += ' ' + l
            elif secao_atual == 'avaliacao' and len(avaliacao) < 400:
                avaliacao += ' ' + l
            elif secao_atual == 'bibliografia':
                if len(l) > 20 and not l.startswith('http') and len(bibliografias) < 10:
                    bibliografias.append(l)

    # Fallback 1: bullets ●
    if len(conteudo_programatico) < 3:
        conteudo_programatico = extrair_temas_bullets(texto)
    # Fallback 2: tabela
    if len(conteudo_programatico) < 3:
        conteudo_programatico = extrair_temas_tabela(texto)

    return {
        "arquivo": nome_arquivo,
        "disciplina": disciplina,
        "carga_horaria": carga_horaria,
        "ementa": ementa.strip(),
        "objetivos": objetivos,
        "conteudo_programatico": conteudo_programatico,
        "metodologia": metodologia.strip(),
        "avaliacao": avaliacao.strip(),
        "bibliografia": bibliografias,
        "total_palavras": len(texto.split())
    }

def gerar_aulas(plano):
    """Divide o conteúdo programático em aulas estimadas (1 tema ~2 aulas)."""
    aulas = []
    for i, tema in enumerate(plano['conteudo_programatico']):
        aulas.append({
            "aula": i + 1,
            "tema": tema,
            "objetivo": f"Ao final desta aula, o aluno deve compreender: {tema[:120]}",
        })
    return aulas

# ─── Main ─────────────────────────────────────────────────────────────────────

print("Iniciando auditoria completa dos Planos de Ensino...\n")

textos_json = {}      # estrutura antiga compatível
planos_estruturados = {}
resumo_md = "# Planos de Ensino – Auditoria Estruturada 2026.1\n\n"

problemas = []

# Percorre todas as subpastas de módulo
for modulo_dir in sorted(os.listdir(PASTA_PLANOS)):
    caminho_modulo = os.path.join(PASTA_PLANOS, modulo_dir)
    if not os.path.isdir(caminho_modulo):
        continue

    mod_label = modulo_dir
    textos_json[mod_label] = {}
    planos_estruturados[mod_label] = {}

    resumo_md += f"\n## {mod_label}\n"

    pdfs = [f for f in os.listdir(caminho_modulo) if f.endswith('.pdf')]
    if not pdfs:
        resumo_md += "_Nenhum PDF encontrado nesta pasta._\n"
        problemas.append(f"PASTA VAZIA: {modulo_dir}")
        continue

    for pdf in sorted(pdfs):
        caminho_pdf = os.path.join(caminho_modulo, pdf)
        texto = extrair_texto_pdf(caminho_pdf)
        palavras = len(texto.split())

        textos_json[mod_label][pdf] = texto

        if palavras < 100:
            status = "INSUFICIENTE"
            problemas.append(f"TEXTO CURTO ({palavras}w): {modulo_dir}/{pdf}")
        elif palavras < 400:
            status = "PARCIAL"
        else:
            status = "OK"

        plano = estruturar_plano(pdf, texto)
        aulas = gerar_aulas(plano)
        plano["aulas_estimadas"] = aulas
        planos_estruturados[mod_label][pdf] = plano

        # Resumo MD
        resumo_md += f"\n### {pdf}\n"
        resumo_md += f"- **Status:** {status} | **Palavras:** {palavras}\n"
        if plano['disciplina']:
            resumo_md += f"- **Disciplina:** {plano['disciplina']}\n"
        if plano['carga_horaria']:
            resumo_md += f"- **Carga Horária:** {plano['carga_horaria']}\n"
        if plano['ementa']:
            resumo_md += f"- **Ementa:** {plano['ementa'][:300]}...\n"
        if plano['conteudo_programatico']:
            resumo_md += f"- **Conteúdo ({len(plano['conteudo_programatico'])} tópicos):**\n"
            for t in plano['conteudo_programatico'][:8]:
                resumo_md += f"  - {t}\n"
        if plano['bibliografia']:
            resumo_md += f"- **Bibliografias ({len(plano['bibliografia'])}):**\n"
            for b in plano['bibliografia'][:3]:
                resumo_md += f"  - {b[:100]}\n"
        if aulas:
            resumo_md += f"- **Aulas Estimadas:** {len(aulas)} (1 por tópico)\n"

        print(f"[{status:13}] {palavras:>5}w | [{mod_label}] {pdf[:65]}")

# Salvar arquivos
with open(SAIDA_JSON, 'w', encoding='utf-8') as f:
    json.dump(textos_json, f, ensure_ascii=False, indent=2)

with open(SAIDA_AULAS, 'w', encoding='utf-8') as f:
    json.dump(planos_estruturados, f, ensure_ascii=False, indent=2)

with open(SAIDA_RESUMO, 'w', encoding='utf-8') as f:
    f.write(resumo_md)

# Relatório final
print(f"\n{'='*60}")
print(f"textos_extraidos.json  -> atualizado")
print(f"planos_estruturados.json -> NOVO")
print(f"planos_resumo.md       -> atualizado")
print(f"\nProblemas encontrados: {len(problemas)}")
for p in problemas:
    print(f"  ! {p}")
