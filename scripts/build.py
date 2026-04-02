#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Build script para gerar materias.json a partir de planos_estruturados.json
Execute como: python build.py
"""
import json, os, re, sys

BASE_DIR = os.getcwd()
print(f"📂 Diretório: {BASE_DIR}")

# Arquivos
PLANOS_JSON = os.path.join(BASE_DIR, 'conteudos', '_para_categorizar', 'Planos de Ensino', 'planos_estruturados.json')
MATERIAS_JSON = os.path.join(BASE_DIR, 'data', 'materias.json')
CONTEUDOS_DIR = os.path.join(BASE_DIR, 'conteudos', 'materiais')

print(f"📖 Entrada: {PLANOS_JSON}")
print(f"📤 Saída: {MATERIAS_JSON}\n")

# Constantes
ICONES = {'BMF': '🏥', 'PMH': '🧬', 'BCM': '🔬', 'MAD': '🦠', 'SEMIO': '🩺', 'SUS': '🏥', 'PE': '🤝', 'EB': '📊', 'PFARMA': '💊', 'MFC': '👨‍👩‍👧', 'CIRURGIA': '🔪', 'CLINICA': '🥼', 'TCAR': '✂️', 'TRABALHO': '💼', 'DIMENSOES': '🌍', 'DEFAULT': '📘'}
CORES = {'BMF': '#E85D75', 'PMH': '#8B5CF6', 'BCM': '#3B82F6', 'MAD': '#EF4444', 'SEMIO': '#C0392B', 'SUS': '#6366F1', 'PE': '#10B981', 'EB': '#F59E0B', 'PFARMA': '#D946EF', 'MFC': '#14B8A6', 'CIRURGIA': '#DC2626', 'CLINICA': '#0EA5E9', 'TCAR': '#F97316', 'TRABALHO': '#84CC16', 'DIMENSOES': '#06B6D4', 'DEFAULT': '#64748B'}
SMALL_WORDS = {'de','do','da','dos','das','e','em','a','o','os','para','por','na','no','nas','nos','com','sem','sob','sobre','ao','às','pelas','pelo'}
ACENTOS = {'saude': 'Saúde', 'trabalhador': 'Trabalhador', 'doencas': 'Doenças', 'ocupacionais': 'Ocupacionais', 'bases': 'Bases', 'morfofuncionais': 'Morfofuncionais', 'aparelhos': 'Aparelhos', 'digestorio': 'Digestório', 'renal': 'Renal', 'reprodutor': 'Reprodutor', 'biologia': 'Biologia', 'celular': 'Celular', 'molecular': 'Molecular', 'processos': 'Processos', 'metabolicos': 'Metabólicos', 'humanos': 'Humanos', 'mecanismos': 'Mecanismos', 'agressao': 'Agressão', 'defesa': 'Defesa', 'principios': 'Princípios', 'diretrizes': 'Diretrizes', 'sus': 'SUS', 'dimensoes': 'Dimensões', 'socioambientais': 'Socioambientais', 'epidemiologia': 'Epidemiologia', 'indicadores': 'Indicadores', 'bioestatistica': 'Bioestatística', 'estudos': 'Estudos', 'semiologia': 'Semiologia', 'musculoesquetica': 'Musculoesquelética', 'cardiorrespiratoria': 'Cardiorespiratória', 'neurologica': 'Neurológica', 'fisiopatologia': 'Fisiopatologia', 'farmacologia': 'Farmacologia', 'farmacoterapeuticos': 'Farmacoterapêuticos', 'medicina': 'Medicina', 'familia': 'Família', 'comunidade': 'Comunidade', 'clinica': 'Clínica', 'cirurgica': 'Cirúrgica', 'ortopedia': 'Ortopedia', 'operatoria': 'Operatória', 'projeto': 'Projeto', 'extensionista': 'Extensionista', 'vigilancia': 'Vigilância', 'vivencia': 'Vivência', 'pratica': 'Prática'}

def norm_nome(nome):
    if not nome or not nome.strip(): return ''
    n = nome.strip().lower()
    n = n.replace('á','a').replace('é','e').replace('í','i').replace('ó','o').replace('ú','u')
    n = n.replace('ã','a').replace('õ','o').replace('ç','c')
    n = ' '.join(p for p in n.split())
    parts = n.split(' ')
    final_parts = []
    for i, part in enumerate(parts):
        if part in ACENTOS:
            final_parts.append(ACENTOS[part])
        elif i > 0 and part in SMALL_WORDS:
            final_parts.append(part)
        else:
            final_parts.append(part.capitalize())
    return ' '.join(final_parts)

def adj_mod(m):
    return 6 if m == 5 else (1 if m < 1 else (6 if m > 6 else m))

def inf_sigla(nome):
    nome = nome.upper()
    if 'AMANDA' in nome or 'ATIVIDADE' in nome: return 'IGNORE', 'IGNORE'
    if 'BMF1' in nome or ('MORFOFUNCIONAIS' in nome and '1' in nome): return 'bmf1', 'Bases Morfofuncionais 1'
    if 'BMF' in nome and '2' in nome or 'CARDIO' in nome: return 'bmf2', 'Bases Morfofuncionais 2'
    if 'BMF' in nome and ('3' in nome or 'DIGEST' in nome): return 'bmf3', 'Bases Morfofuncionais 3'
    if 'BMF4' in nome or ('NEUROSSENSORIAL' in nome and 'MORFO' in nome): return 'bmf4', 'Bases Morfofuncionais 4'
    if 'BIOLOGIA CELULAR' in nome or 'BCM' in nome: return 'bcm1', 'Biologia Celular e Molecular'
    if 'METABOLICOS' in nome or 'METABÓLICOS' in nome: return 'pmh', 'Processos Metabólicos Humanos'
    if 'MAD' in nome or 'AGRESS' in nome: return 'mad1', 'Mecanismos de Agressão e Defesa'
    if 'SUS' in nome or 'DIRETRIZES' in nome: return 'sus', 'Princípios e Diretrizes do SUS'
    if 'DIMENS' in nome or 'SOCIOAMBIENTAIS' in nome: return 'ds', 'Dimensões Socioambientais'
    if 'EPIDEMIOLOGIA' in nome and 'INDICADORES' in nome: return 'indicadores', 'Epidemiologia e Bioestatística'
    if 'BIOESTAT' in nome and 'ESTUDOS' in nome: return 'bioe', 'Bioestatística e Estudos em Saúde'
    if 'TRABALHO' in nome or 'TRABALHADOR' in nome: return 'st', 'Saúde do Trabalhador e Ocupacional'
    if 'PROJETO EXTENSIONISTA' in nome:
        if 'OCUPACIONAL' in nome: return 'pe3', 'Projeto Extensionista 3'
        if 'IMPACTO' in nome: return 'pe4', 'Projeto Extensionista 4'
        if 'ALIMENTACAO' in nome or '1' in nome: return 'pe1', 'Projeto Extensionista 1'
        return 'pe2', 'Projeto Extensionista'
    if 'SEMIOLOGIA' in nome:
        if 'MUSCULOESQUELE' in nome: return 'semiologia1', 'Semiologia Musculoesquelética'
        if 'CARDIO' in nome or 'RESPIRATO' in nome: return 'semiologia2', 'Semiologia Cardiorespiratória'
        if 'RENAL' in nome or 'REPRODUTOR' in nome: return 'semiologia3', 'Semiologia Renal e Reprodutor'
        if 'NEURO' in nome: return 'semiologia4', 'Semiologia Neurológica'
        return 'semiologia', 'Semiologia Prática'
    if 'FISIOPATOLOGICOS' in nome or 'FARMACOTERAPEUTICOS' in nome or 'FARMACOTERAPÊUTICOS' in nome:
        if 'NEURO' in nome: return 'ff4', 'Fisiopatologia e Farmaco 4 (Neuro)'
        return 'fisiopato3', 'Processos Fisiopatológicos'
    if 'FAMILIA' in nome or 'FAMÍLIA' in nome: return 'mfc', 'Medicina de Família e Comunidade'
    if 'CIRURGICA' in nome or 'CIRÚRGICA' in nome or 'ORTOPEDIA' in nome: return 'cirurgia', 'Clínica Cirúrgica e Ortopedia'
    if 'MÉDICA' in nome or 'MEDICA' in nome: return 'clinica', 'Clínica Médica'
    if 'OPERATORIA' in nome or 'OPERATÓRIA' in nome: return 'tcar', 'Técnica Operatória'
    m = re.search(r'([A-Za-z]+)', nome)
    sigla = m.group(1)[:7].lower() if m else "gen"
    return sigla, nome.replace('.pdf','').title()[:50]

print("🔨 Processando planos de ensino...\n")

try:
    with open(PLANOS_JSON, 'r', encoding='utf-8') as f:
        estruturas = json.load(f)
except FileNotFoundError:
    print(f"❌ Erro: {PLANOS_JSON} não encontrado!")
    sys.exit(1)

banco_app = {}
for mod, planos in estruturas.items():
    match_mod = re.search(r'\d+', mod)
    num_modulo = int(match_mod.group(0)) if match_mod else 0
    num_modulo = adj_mod(num_modulo)
    
    dir_mod = os.path.join(CONTEUDOS_DIR, f"modulo{num_modulo}")
    os.makedirs(dir_mod, exist_ok=True)

    for nome_pdf, data in planos.items():
        sigla, titulo_fallback = inf_sigla(nome_pdf)
        if sigla == 'IGNORE': continue

        disciplina_plano = data.get('disciplina', '').strip()
        titulo = norm_nome(disciplina_plano) if disciplina_plano else titulo_fallback

        sigla_lower = sigla.lower()
        sigla_base = re.sub(r'[0-9]+', '', sigla)
        icone = ICONES.get(sigla_base, ICONES['DEFAULT'])
        cor = CORES.get(sigla_base, CORES['DEFAULT'])

        dir_disc = os.path.join(dir_mod, sigla_lower)
        os.makedirs(dir_disc, exist_ok=True)
        
        readme_path = os.path.join(dir_disc, 'README_INSTRUCOES.md')
        if not os.path.exists(readme_path):
            with open(readme_path, 'w', encoding='utf-8') as fm:
                fm.write(f"# {titulo}\n\nEste diretório contém os materiais e flashcards para {sigla}.")

        aulas_db = []
        aulas_extraidas = data.get('aulas_estimadas', [])
        
        if not aulas_extraidas:
            aulas_db.append({"id": f"{sigla_lower}_a1", "tema": "Aulas Introdutórias e Generalidades", "descricao": "Nenhum tópico estruturado detectado no PDF da matéria."})
        else:
            for idx, aula in enumerate(aulas_extraidas):
                aulas_db.append({"id": f"{sigla_lower}_a{idx+1}", "tema": f"Aula {idx+1}: {aula.get('tema', 'Tema_Generico')}", "descricao": aula.get('objetivo', 'Objetivo não fornecido')[:200]})

        banco_app[sigla_lower] = {
            "nome": titulo, "sigla": sigla, "modulo": num_modulo, "ativo": True, "icon": icone, "cor": cor,
            "descricao": data.get('ementa', titulo)[:80] + "...", "professores": [], "totalCards": 0, "totalQuestoes": 0,
            "modulos": [{"nome": f"Módulo {num_modulo}", "temas": aulas_db}]
        }
        
        print(f"✅ {sigla:12} → Mod {num_modulo} | {len(aulas_db):2}+ aulas | {titulo}")

os.makedirs(os.path.dirname(MATERIAS_JSON), exist_ok=True)
with open(MATERIAS_JSON, 'w', encoding='utf-8') as f:
    json.dump(banco_app, f, ensure_ascii=False, indent=2)

print(f"\n✅ Build concluído!")
print(f"📊 Total de disciplinas: {len(banco_app)}")
print(f"📁 Arquivo: {MATERIAS_JSON}")
