# MedGradPlus — Plataforma de Estudos para Medicina

## Propósito

**MedGradPlus** é a plataforma web de estudos para estudantes de medicina da **Universidade Nove de Julho campus Vergueiro**. Organiza disciplinas, flashcards, questões e materiais de apoio por módulo/semestre.

- **URL**: `https://meduni9-869eb.web.app`
- **GitHub**: `https://github.com/pngjaico/MedUni9` (branch `main` — nome do repositório legado; produto: MedGradPlus)
- **Stack**: React 18 (UMD) em single-file [`index.html`](index.html), Firebase Hosting, dados em JSON estáticos

**Documentação de entrada:** leia [`AGENTS.md`](AGENTS.md) antes deste arquivo em sessões com IA.

---

## Estrutura de Módulos (1 a 6)

### Módulo 1 — Fundamentos e SUS
| ID | Disciplina | Sigla |
|----|-----------|-------|
| `sus` | Princípios e Diretrizes do SUS | SUS |
| `semiologia1` | Semiologia do Sistema Musculoesquelético | SEMIO1 |
| `bmf1` | Bases Morfofuncionais 1 — Sistema Locomotor | BMF1 |
| `pmh` | Processos Metabólicos Humanos | PMH |
| `pe1` | Projeto Extensionista 1 — Vivência e Acolhimento | PE1 |

### Módulo 2 — Cardiovascular, Respiratório e Imunologia
| ID | Disciplina | Sigla |
|----|-----------|-------|
| `bmf2` | Bases Morfofuncionais 2 — Cardiovascular e Respiratório | BMF2 |
| `semiologia2` | Semiologia Cardiorespiratória | SEMIO2 |
| `mad1` | Mecanismos de Agressão e Defesa 1 — Imunologia | MAD1 |
| `bcm1` | Biologia Celular e Molecular | BCM1 |
| `indicadores` | Epidemiologia e Indicadores de Saúde | IND |
| `ds` | Dimensões Socioambientais e Saúde | DS |

### Módulo 3 — Digestório, Renal, Reprodutor e Patologia
| ID | Disciplina | Sigla |
|----|-----------|-------|
| `bmf3` | Bases Morfofuncionais 3 — Digestório, Renal e Reprodutor | BMF3 |
| `semiologia3` | Semiologia dos Aparelhos Renal e Reprodutor | SEMIO3 |
| `mad2` | Mecanismos Sistêmicos de Agressão e Defesa | MsAD |
| `fisiopato3` | Processos Fisiopatológicos e Farmacoterapêuticos | FP3 |
| `saude_trabalhador` | Saúde do Trabalhador e Doenças Ocupacionais | ST |
| `pe3` | Projeto Extensionista 3 — Vigilância em Saúde | PE3 |

### Módulo 4 — Neuro, Endócrino e Bioestatística
| ID | Disciplina | Sigla |
|----|-----------|-------|
| `bmf4` | Bases Morfofuncionais 4 — Neurossensorial e Endócrino | BMF4 |
| `semiologia4` | Semiologia Neurológica e Síndromes Clínicas | SEMIO4 |
| `fisiopato_farmaco` | Fisiopatologia Neuroendócrina | FF4 |
| `bioestatistica` | Bioestatística e Estudos em Saúde | BIOE |
| `pe4` | Projeto Extensionista 4 — MBE | PE4 |

### Módulo 5 — Clínica e Farmacologia
| ID | Disciplina | Sigla |
|----|-----------|-------|
| `clinica_medica5` | Clínica Médica | CM5 |
| `clinica_cirurgica5` | Clínica Cirúrgica e Ortopedia | CC5 |
| `farmaco_aplicada` | Farmacologia Aplicada | FARM |

### Módulo 6 — Clínica Avançada e Cirurgia
| ID | Disciplina | Sigla |
|----|-----------|-------|
| `clinica_medica6` | Clínica Médica Avançada | CM6 |
| `mfc6` | Medicina de Família e Comunidade | MFC |
| `cirurgia_ortopedia` | Cirurgia e Ortopedia | CIR6 |
| `tecnica_operatoria` | Técnica Operatória | TCAR |

---

## Hierarquia de Dados

```
Módulo (1-6)
  └── Disciplina (ex: "Bases Morfofuncionais 1")
        └── Aulas/Temas (ex: "Anatomia do Sistema Esquelético")
```

### data/materias.json

Objeto JSON onde cada chave é o ID da disciplina:

```json
{
  "bmf1": {
    "nome": "Bases Morfofuncionais 1 — Sistema Locomotor",
    "sigla": "BMF1",
    "modulo": 1,
    "ativo": true,
    "icon": "",
    "cor": "#E85D75",
    "descricao": "Estudo integrado...",
    "professores": [],
    "totalCards": 0,
    "totalQuestoes": 0,
    "aulas": [
      {"id": "bmf1_a1", "tema": "Anatomia do Sistema Esquelético", "descricao": "Ossos, articulações..."}
    ]
  }
}
```

**Nota:** Em muitas disciplinas o campo `icon` no JSON está vazio. A interface usa o mapa `SUBJECT_ICON_MAP` em [`index.html`](index.html) (SVGs), não depende de emoji no JSON.

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
3. **Construção**: `scripts/build_materias.py` transforma `planos_estruturados.json` em `data/materias.json`
4. **Formatação**: Nomes são normalizados com capitalização correta e acentuação
5. **Módulos**: Reatribuição de disciplinas para módulos 1-6 (excluindo 5)

---

## 🔧 Sistema de Dados

### Arquivos-Chave

| Arquivo | Localização | Propósito |
|---------|-------------|-----------|
| `data/materias.json` | `/data/` | Banco de dados de disciplinas, aulas e temas para o app |
| `planos_estruturados.json` | `/conteudos/_para_categorizar/Planos de Ensino/` | Dados brutos extraídos dos PDFs |
| `scripts/build_materias.py` | `/scripts/` | Script Python que gera `materias.json` |
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
scripts/build_materias.py (Python)
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

## Para IAs e ferramentas: como trabalhar com o projeto

### 1. **Antes de qualquer mudança**
   - Leia [`AGENTS.md`](AGENTS.md) (ordem de leitura e obrigação de atualizar docs ao mudar convenções)
   - Use este arquivo (`PROJECT_CONTEXT.md`) para módulos e dados
   - Consulte `COMO-ATUALIZAR.md` para procedimentos operacionais

### 2. **Para atualizar disciplinas**
   - Modifique `conteudos/_para_categorizar/Planos de Ensino/planos_estruturados.json`
        - Rode: `python scripts/build_materias.py`
   - Verifique `data/materias.json`
   - Commit e push: `git add . && git commit -m "Msg" && git push`
   - Deploy: `firebase deploy --only hosting`

### 3. **Estrutura esperada de uma disciplina em `materias.json`**
   - `nome`: Título normalizado com acentuação correta
   - `sigla`: Identificador curto exibido (ex.: `BMF1`)
   - `modulo`: 1–6 conforme currículo
   - `ativo`: `true` ou `false`
   - `icon`: Pode estar vazio; a UI usa ícones SVG por tipo de disciplina em `index.html`
   - `cor`: Código HEX (evite mudanças cosméticas sem motivo)
   - `descricao`: Texto descritivo da disciplina
   - `aulas`: Array de aulas, cada uma com `id` (ex.: `bmf1_a1`), `tema`, `descricao`

### 4. **Campos a não alterar sem motivo forte**
   - Chaves do objeto raiz (IDs das disciplinas, ex.: `bmf1`) — quebram referências em questões e materiais
   - IDs de aulas em `aulas[].id` (padrão `{sigla_curta}_a{numero}` alinhado ao arquivo `.md`)
   - Evite renomear disciplinas ou aulas só por cosmética; sincronize `data/materiais/`, `materiais/moduloN/` e JSONs dependentes

### 5. **Problemas Comuns**

**P: Disciplina aparece no módulo errado?**
- R: Verifique `planos_estruturados.json` → chave de módulo (ex: "Modulo 3")
- Se necessário ajustar, rode `scripts/build_materias.py` que redistribui mod 5 → 6

**P: Nome da disciplina está com formatação errada?**
- R: Verifique campo "disciplina" em `planos_estruturados.json`
- Atualize `ACENTUACAO_MAP` em `scripts/build_materias.py` se necessário

**P: Aulas não aparecem?**
- R: Verifique se `aulas_estimadas` está populado no JSON de planos

---

## Demo e acesso

- **URL pública:** https://meduni9-869eb.web.app
- **Projeto Firebase:** meduni9-869eb
- **Repositório GitHub:** https://github.com/pngjaico/MedUni9
- **Branch:** main

---

## 📝 Notas para Desenvolvimento Futuro

1. **Backup de dados**: Sempre faça commit antes de rodar scripts de transformação
2. **Encoding**: Todos os arquivos devem estar em UTF-8
3. **Python**: Script usa encoding `utf-8` explícito, funciona em Python 3.7+
4. **Firebase**: Deploy leva ~2-3 minutos; aguarde confirmação
5. **Extensibilidade**: O sistema está pronto para Q&A, simulados e análise de desempenho futuros

---

Documentação viva: ao mudar o app ou os dados, atualize [`AGENTS.md`](AGENTS.md) e os arquivos referenciados ali.

**Última revisão deste arquivo:** abril de 2026.
