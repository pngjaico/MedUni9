# 📚 MedUni9 - Plataforma de Estudos para Medicina

## 🎯 Propósito do Aplicativo

**MedUni9** é uma plataforma web de estudos desenvolvida especificamente para estudantes de medicina da **Universidade Nove de Julho campus Vergueiro**. O aplicativo funciona como um organizador inteligente de disciplinas, aulas e materiais didáticos, permitindo que alunos acessem conteúdos estruturados, flashcards, questões de estudo e planos de ensino de forma centralizada e organizada.

## 👥 Usuários Alvo

- **Estudantes de Medicina** (curso de 6 semestres com exclusão do 5º)
- Acesso via: `https://meduni9-869eb.web.app`

---

## 📑 Estrutura de Módulos e Semestres

O curso de Medicina é organizado em **6 semestres principais** (excluindo o 5º por inversão curricular). Cada módulo contém disciplinas agrupadas por área de conhecimento:

### **Módulo 1 - Estruturas Básicas**
- Biologia Celular e Molecular (BCM1)
- Processos Metabólicos & Humanos (PMH)
- Princípios e Diretrizes do SUS
- Projeto Extensionista 1 (PE1)
- Vivência e Acolhimento nos Princípios do SUS

**Foco**: Fundamentos celulares, moleculares e introdução ao sistema de saúde.

### **Módulo 2 - Sistemas Corporais I**
- Bases Morfofuncionais 1 (BMF1) - Sistemas Cardiovascular e Respiratório
- Semiologia Cardiorespiratória (SEMIO2)
- Episódios sobre Processos Metabólicos
- Epidemiologia e Bioestatística
- Projeto Extensionista 2 (PE2)

**Foco**: Morfologia e fisiologia dos sistemas vitais; introdução à semiologia.

### **Módulo 3 - Sistemas Corporais II**
- Bases Morfofuncionais 3 (BMF3) - Aparelhos Digestório, Renal e Reprodutor
- Mecanismos Sistêmicos de Agressão e Defesa (MsAD)
- Semiologia Renal e Reprodutor (SEMIO3)
- Saúde do Trabalhador e Doenças Ocupacionais
- Projeto Extensionista 3 (PE3) - Vigilância em Saúde

**Foco**: Sistemas corporais complexos; imunodeficiências; saúde ocupacional.

### **Módulo 4 - Fisiopatologia e Clínica**
- Bases Morfofuncionais 4 (BMF4) - Sistemas Neurossensorial
- Processos Fisiopatológicos e Farmacoterapêuticos
- Semiologia Neurológica (SEMIO4)
- Bioestatística e Estudos em Saúde
- Projeto Extensionista 4 (PE4) - Medicina Baseada em Evidência
- Desafios Socioambientais Globais

**Foco**: Fisiopatologia, farmacologia, raciocínio clínico integrado.

### **Módulo 5 - EXCLUÍDO**
O 5º semestre foi removido da matriz curricular. Disciplinas que ocupavam este espaço foram reatribuídas ao módulo 6 ou mantidas em seus semestres de origem.

### **Módulo 6 - Clínica Aplicada**
- Semiologia Musculoesquelética (SEMIO1) - Teórica e Prática
- Clínica Cirúrgica e Ortopedia (CIRURGIA)
- Clínica Médica (CLINICA)
- Técnica Operatória (TCAR)
- Processos Fisiopatológicos Neuroendócrinos (FF4)

**Foco**: Aplicação clínica intehral, técnicas operatórias, especialidades médicas.

---

## 📚 Disciplinas, Matérias e Aulas

### Hierarquia de Dados

```
DISCIPLINA (ex: "Bases Morfofuncionais 1")
    ↓
MÓDULO (ex: "Módulo 2")
    ↓
AULAS/TEMAS (ex: "Aula 1: Sistema Cardiocirculatório")
    ↓
TÓPICOS (extraídos de planos de ensino)
```

### O que é uma Disciplina?

- **Unidade Curricular (UC)** oficial do curso
- Possui **nome formal** (ex: "Bases Morfofuncionais 1")
- Tem **sigla padronizada** (ex: `bmf1`)
- Associada a **um ou mais módulos**
- Contém **aulas** agrupadas na estrutura de dados
- Tem **ementa** e **objetivos** definidos no plano de ensino

### O que é uma Aula?

- **Componente** de uma disciplina
- Numerada sequencialmente (Aula 1, 2, 3...)
- Possui **tema** (tópico principal)
- Tem **descrição/objetivo** de aprendizado
- Extraída dos **planos de ensino** (PDF)

### O que é uma Matéria?

No contexto do aplicativo, "matérias" referem-se às disciplinas ativas no sistema. O banco de dados `data/materias.json` armazena:

```json
{
  "bmf1": {
    "nome": "Bases Morfofuncionais 1",
    "sigla": "bmf1",
    "modulo": 2,
    "ativo": true,
    "icon": "🏥",
    "cor": "#E85D75",
    "descricao": "Estudo integrado...",
    "professores": [],
    "totalCards": 0,
    "totalQuestoes": 0,
    "modulos": [
      {
        "nome": "Módulo 2",
        "temas": [
          {
            "id": "bmf1_a1",
            "tema": "Aula 1: Sistema Cardiocirculatório",
            "descricao": "Ao final desta aula..."
          }
        ]
      }
    ]
  }
}
```

---

## 🗂️ Planos de Ensino

### O que é um Plano de Ensino?

Documento oficial de cada disciplina que contém:

- **Ementa**: Resumo dos tópicos abordados
- **Objetivos**: O que o aluno deve aprender
- **Conteúdo Programático**: Listagem detalhada de tópicos
- **Metodologia**: Estratégias de ensino
- **Avaliação**: Critérios e métodos de avaliação
- **Aulas Estimadas**: Listagem de aulas extraídas estruturada
- **Carga Horária**: Total de horas da disciplina
- **Bibliografia**: Referências adotadas

### Localização e Formato

- **Pasta**: `conteudos/_para_categorizar/Planos de Ensino/`
- **Formato Principal**: PDFs com nomes descritivos (ex: "3o Módulo Plano Saúde do Trabalhador...")
- **Banco de Dados**: `conteudos/_para_categorizar/Planos de Ensino/planos_estruturados.json`

### Como os Planos são Processados

1. **Extração**: PDFs são analisados e estruturados em JSON
2. **Normalização**: Nomes de disciplina são capturados do campo "disciplina" do JSON
3. **Construção**: `build_materias.py` transforma `planos_estruturados.json` em `data/materias.json`
4. **Formatação**: Nomes são normalizados com capitalização correta e acentuação
5. **Módulos**: Reatribuição de disciplinas para módulos 1-6 (excluindo 5)

---

## 🔧 Sistema de Dados

### Arquivos-Chave

| Arquivo | Localização | Propósito |
|---------|-------------|-----------|
| `data/materias.json` | `/data/` | Banco de dados de disciplinas, aulas e temas para o app |
| `planos_estruturados.json` | `/conteudos/_para_categorizar/Planos de Ensino/` | Dados brutos extraídos dos PDFs |
| `build_materias.py` | `/` | Script Python que gera `materias.json` |
| `data/questoes.json` | `/data/` | Banco de questões de estudo |
| `data/flashcards.json` | `/data/` | Flashcards por disciplina |

### Fluxo de Atualização

```
PDFs de Planos de Ensino
        ↓
   [Extração]
        ↓
planos_estruturados.json
        ↓
build_materias.py (Python)
        ↓
data/materias.json
        ↓
   [Deploy]
        ↓
Firebase Hosting (web.app)
```

---

## 🎨 Ícones e Cores das Disciplinas

Cada tipo de disciplina tem um ícone emoji e cor associados para fácil identificação visual:

| Tipo | Ícone | Cor | Exemplos |
|------|-------|-----|----------|
| Bases Morfofuncionais | 🏥 | #E85D75 (Vermelho) | BMF1, BMF2, BMF3, BMF4 |
| Processos Metabólicos | 🧬 | #8B5CF6 (Roxo) | PMH |
| Biologia Celular | 🔬 | #3B82F6 (Azul) | BCM1 |
| Agressão e Defesa | 🦠 | #EF4444 (Vermelho Claro) | MsAD |
| Semiologia | 🩺 | #C0392B (Vermelho Escuro) | SEMIO1-4 |
| SUS | 🏥 | #6366F1 (Índigo) | SUS |
| Projetos Extensionistas | 🤝 | #10B981 (Verde) | PE1-4 |
| Bioestatística | 📊 | #F59E0B (Âmbar) | EB, BIOE |
| Farmacologia | 💊 | #D946EF (Rosa) | FF, PFARMA |
| Medicina de Família | 👨‍👩‍👧 | #14B8A6 (Teal) | MFC |
| Cirurgia | 🔪 | #DC2626 (Vermelho Profundo) | CIRURGIA |
| Clínica | 🥼 | #0EA5E9 (Azul Claro) | CLINICA |
| Técnica Operatória | ✂️ | #F97316 (Laranja) | TCAR |
| Trabalho | 💼 | #84CC16 (Lima) | TRABALHO, ST |
| Dimensões Sociais | 🌍 | #06B6D4 (Ciano) | DIMENSOES |
| Padrão | 📘 | #64748B (Cinza) | Outros |

---

## 🚀 Para IAs Futuras: Como Trabalhar com o Projeto

### 1. **Antes de qualquer mudança**
   - Leia este arquivo (`PROJECT_CONTEXT.md`)
   - Consulte `COMO-ATUALIZAR.md` para procedimentos

### 2. **Para atualizar disciplinas**
   - Modifique `conteudos/_para_categorizar/Planos de Ensino/planos_estruturados.json`
   - Rode: `python build_materias.py`
   - Verifique `data/materias.json`
   - Commit e push: `git add . && git commit -m "Msg" && git push`
   - Deploy: `firebase deploy --only hosting`

### 3. **Estrutura esperada de uma disciplina em `materias.json`**
   - `nome`: Título normalizado com acentuação correta
   - `sigla`: Identificador único (ex: `bmf1`)
   - `modulo`: 1, 2, 3, 4, ou 6 (nunca 5)
   - `ativo`: `true` ou `false`
   - `icon`: Emoji associado (não remova)
   - `cor`: Código HEX de cor (não altere arbitrariamente)
   - `descricao`: Ementa do plano de ensino
   - `modulos[].temas[]`: Array de aulas com id, tema e descrição

### 4. **Campos a NÃO alterar manualmente**
   - Ícones emoji (manutenha os existentes)
   - Siglas de disciplinas (são chaves do JSON)
   - IDs de aulas (padrão: `{sigla}_a{numero}`)

### 5. **Problemas Comuns**

**P: Disciplina aparece no módulo errado?**
- R: Verifique `planos_estruturados.json` → chave de módulo (ex: "Modulo 3")
- Se necessário ajustar, rode `build_materias.py` que ressa tribui mod 5 → 6

**P: Nome da disciplina está com formatação errada?**
- R: Verifique campo "disciplina" em `planos_estruturados.json`
- Atualize `ACENTUACAO_MAP` em `build_materias.py` se necessário

**P: Aulas não aparecem?**
- R: Verifique se `aulas_estimadas` está populado no JSON de planos

---

## 📱 Demo e Acesso

- **URL Pública**: https://meduni9-869eb.web.app
- **Projeto Firebase**: meduni9-869eb
- **Repositório GitHub**: https://github.com/pngjaico/MedUni9
- **Branch**: main

---

## 📝 Notas para Desenvolvimento Futuro

1. **Backup de dados**: Sempre faça commit antes de rodar scripts de transformação
2. **Encoding**: Todos os arquivos devem estar em UTF-8
3. **Python**: Script usa encoding `utf-8` explícito, funciona em Python 3.7+
4. **Firebase**: Deploy leva ~2-3 minutos; aguarde confirmação
5. **Extensibilidade**: O sistema está pronto para Q&A, simulados e análise de desempenho futuros

---

**Mantido por**: Sistema automatizado + IAs  
**Última atualização**: Abril 2026  
**Versão**: 1.0.0
