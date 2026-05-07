# Reorganização da pasta `Dados para expansão ciclo clinico/`

> **Problema atual:** a pasta `C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\Dados para expansão ciclo clinico\mATÉRIAS\` está bagunçada — três versões da mesma pasta (`5 SEMESTRE`, `5° Semestre`, `5º Semestre`), nomenclatura inconsistente, mistura de PDFs com .docx, sem manifest, alguns arquivos com encoding corrompido no nome.
>
> **Objetivo:** transformar em um arquivo de referência **navegável, com manifest e estrutura previsível**, sem perder histórico.
>
> **Estado atual (verificado 2026-05-07):** 1.796 arquivos, 615 .docx, 1.083 PDFs, 304 diretórios.

---

## 1. Auditoria — o que está bagunçado

### Versões duplicadas do mesmo semestre

```
mATÉRIAS/
├── 5 SEMESTRE/        # versão "limpa" — pastas em CAIXA ALTA
├── 5° Semestre/       # versão antiga 1 (símbolo °)
├── 5º Semestre/       # versão antiga 2 (símbolo º — diferente!)
├── 6 SEMESTRE/
├── 6° Semestre/
├── 7 SEMESTRE/
├── 7º SEMESTRE/
├── 8 SEMESTRE/
├── 8° Semestre/
└── 8º Semestre/
```

**Risco:** agente abre o errado e usa material desatualizado. Quando há conflito (ex.: resumo antigo difere do PDF do plano de ensino atual), o agente não sabe qual é fonte.

### Nomes inconsistentes de subpastas

- `PROPEDÊUTICA (TEÓRICO-PRÁTICA)` em uma versão.
- `Propedêutica` em outra.
- `Propedêuticas` (com S) em outra.
- `Propedêutica/Propedêutica Cirúrgica/` (duplica o nome).

### Mistura de tipos

Em uma mesma pasta convivem:

- Resumos pessoais (.docx do aluno).
- PDFs de planos de ensino (já têm cópia em `meduni9-app/conteudos/_para_categorizar/Planos de Ensino/`).
- Atividades / provas (que são valiosas — preservar com tag).
- Arquivos temporários (.tmp).
- "Documento sem título.docx" (lixo de Google Docs).
- Slides (.pptx).

### Encoding corrompido em nomes

- `8º MÃ_DULO_2026.1.pdf` (real: `8º MÓDULO_2026.1.pdf`)
- `MÃ³dulo` (real: `Módulo`)
- `Â° / Âº` (lixo)

---

## 2. Estrutura proposta

Renomear a pasta inteira para **`legado_ciclo_clinico/`** (sem espaço, sem caractere especial), com hierarquia plana e previsível:

```
legado_ciclo_clinico/
├── README.md                          # manifest geral, índice
├── MANIFEST.json                      # índice machine-readable (paths -> tipo, materia, status)
│
├── 05_modulo/                         # zero-pad para ordenar
│   ├── clinica_medica/
│   │   ├── resumos/                   # resumos pessoais (.docx)
│   │   ├── slides/                    # slides do professor (.pptx)
│   │   ├── provas/                    # provas anteriores
│   │   ├── atividades/                # exercícios
│   │   └── outros/
│   ├── clinica_cirurgica/
│   ├── farmacologia_aplicada/
│   ├── propedeutica_clinica/          # se quiser preservar; matéria não está no materias.json novo
│   ├── propedeutica_cirurgica/
│   ├── propedeutica_pediatrica/
│   ├── bmdt/                          # bases moleculares — semestre antigo
│   ├── comunicacao_seguranca/
│   ├── pi5/
│   ├── ci_ligas/
│   └── _arquivos_soltos/              # itens sem categoria clara
│
├── 06_modulo/
│   ├── clinica_medica/
│   ├── cirurgia_ortopedia/            # une CIRURGIA GERAL + ORTOPEDIA
│   │   ├── geral/
│   │   ├── gastro/
│   │   ├── ortopedia/
│   │   ├── plastica/
│   │   ├── trauma/
│   │   ├── urologia/
│   │   ├── vascular/
│   │   ├── cabeca_pescoco/
│   │   ├── otorrino/
│   │   └── torax/
│   ├── medicina_familia/
│   ├── tecnica_operatoria/
│   ├── imagem_pratica_clinica/
│   ├── pi6/
│   └── _arquivos_soltos/
│
├── 07_modulo/                         # se houver conteúdo
└── 08_modulo/                         # idem
```

---

## 3. Convenções de nomenclatura dos arquivos

| Tipo | Convenção | Exemplo |
|---|---|---|
| Resumo pessoal | `<tema>_resumo.docx` | `cirrose_resumo.docx` |
| Slide do professor | `<tema>_slides_<docente>.pptx` | `pancreatite_slides_drsilva.pptx` |
| Prova oficial | `prova_<ano>_P<n>_<bimestre>.pdf` | `prova_2024_P1_b1.pdf` |
| Prova com gabarito | `prova_<ano>_P<n>_<bimestre>_gab.pdf` | `prova_2024_P1_b1_gab.pdf` |
| Atividade | `atividade_<tema>.pdf` | `atividade_abdome_agudo.pdf` |
| Plano de ensino antigo | `_plano_ensino_<ano>.pdf` (prefixo `_` para ordenar primeiro) | `_plano_ensino_2024.pdf` |

**Regras:**

- Sem espaço — usar `_`.
- Sem acento — usar ASCII (`cirurgia`, não `cirúrgica`).
- Sem caractere especial (`°`, `º`, `&`).
- Tudo lowercase.
- Tema curto e descritivo.

---

## 4. Manifest — `MANIFEST.json`

Cada arquivo legado precisa de uma entrada. Schema:

```json
{
  "_meta": {
    "versao": "1.0",
    "atualizado_em": "2026-05-07",
    "total_arquivos": 1796
  },
  "arquivos": [
    {
      "path": "06_modulo/cirurgia_ortopedia/geral/abdome_agudo_inflamatorio_resumo.pdf",
      "tipo": "resumo",
      "tema": "abdome agudo inflamatorio",
      "materia_id_app": "cirurgia_ortopedia",
      "aula_id_app": "cir6_a1",
      "fonte_original": "5° Semestre/Cirurgia/Geral/Abdome Agudo Inflamatório.pdf",
      "qualidade": "boa",
      "data_origem": "2024-2",
      "tem_versao_docx": true,
      "tem_gabarito": false,
      "observacoes": "extraído pelo aluno; versão 2024.2"
    }
  ]
}
```

**Para que serve:**

- Agente de geração consulta `MANIFEST.json` em vez de varrer pasta.
- Filtro por `aula_id_app` traz tudo relacionado à aula em segundos.
- Auditoria de qualidade fica visível.
- Quando houver duplicata, o `qualidade` decide qual usar.

---

## 5. Procedimento de migração

> **Trabalho braçal — pode usar script para mover/renomear (não viola regra de "sem scripts" pois é organização de filesystem, não geração de conteúdo).**

### Passo 1 — Backup

```powershell
# Criar zip antes de mexer
Compress-Archive -Path "C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\Dados para expansão ciclo clinico" -DestinationPath "C:\Users\Usuario-pc\Desktop\backup_legado_$(Get-Date -Format 'yyyyMMdd').zip"
```

### Passo 2 — Script de migração

Criar `scripts/reorganizar_legado.py` (a fazer):

```python
# Pseudocódigo
def reorganizar():
    src = Path("C:/Users/Usuario-pc/Desktop/Aplicativo Uni9/Dados para expansão ciclo clinico")
    dst = Path("C:/Users/Usuario-pc/Desktop/Aplicativo Uni9/legado_ciclo_clinico")
    dst.mkdir(exist_ok=True)

    # Mapa de pastas origem -> destino
    mapa = {
        # Mod 5 — três versões consolidam em uma
        "mATÉRIAS/5 SEMESTRE": "05_modulo",
        "mATÉRIAS/5° Semestre": "05_modulo",
        "mATÉRIAS/5º Semestre": "05_modulo",
        # Mod 6 idem
        "mATÉRIAS/6 SEMESTRE": "06_modulo",
        "mATÉRIAS/6° Semestre": "06_modulo",
        # ... 7, 8
    }

    # Mapa de subpastas origem -> destino (normalizar nomes)
    sub_mapa = {
        "FARMACO APLICADA": "farmacologia_aplicada",
        "Farmaco Aplicada": "farmacologia_aplicada",
        "PROPEDÊUTICA (TEÓRICO-PRÁTICA)/PROPEDÊUTICA CLÍNICA": "propedeutica_clinica",
        "Propedêuticas/Clínica": "propedeutica_clinica",
        # ... etc
    }

    for src_path, dst_root in mapa.items():
        # Mover, normalizar nome, evitar colisão
        ...
        # Ao colidir, anexar timestamp ao mais antigo
        ...

    # Gerar MANIFEST.json
    gerar_manifest(dst)
```

### Passo 3 — Validação

- Contar arquivos em src (antes) e dst (depois) — devem bater.
- Validar manifest.json carrega sem erro.
- Spot-check: abrir 5 arquivos aleatórios e confirmar legibilidade.

### Passo 4 — Atualizar referências

Buscar no repositório referências para o caminho antigo:

```bash
grep -r "Dados para expansão ciclo clinico" .
```

Substituir por `legado_ciclo_clinico/` em:
- `PLANO_CICLO_CLINICO.md`
- `MAPA_CICLO_CLINICO.md`
- prompts/agente_revisor_clinico.md
- prompts/gerar_materiais_apoio_v3.md

---

## 6. Mapeamento das pastas atuais → destino

Tabela de migração para o script:

| Origem (relativa a `Aplicativo Uni9/`) | Destino |
|---|---|
| `Dados para expansão ciclo clinico/mATÉRIAS/5 SEMESTRE/BASES MOLECULARES DO DIAGNÓSTICO E TERAPÊUTICA/` | `legado_ciclo_clinico/05_modulo/bmdt/` |
| `Dados para expansão ciclo clinico/mATÉRIAS/5 SEMESTRE/CI DAS LIGAS/` | `legado_ciclo_clinico/05_modulo/ci_ligas/` |
| `Dados para expansão ciclo clinico/mATÉRIAS/5 SEMESTRE/ESTRATÉGIAS DE COMUNICAÇÃO E SEGURANÇA DO PACIENTE 1/` | `legado_ciclo_clinico/05_modulo/comunicacao_seguranca/` |
| `Dados para expansão ciclo clinico/mATÉRIAS/5 SEMESTRE/FARMACO APLICADA/` | `legado_ciclo_clinico/05_modulo/farmacologia_aplicada/` |
| `Dados para expansão ciclo clinico/mATÉRIAS/5 SEMESTRE/PROJETO INTEGRADOR 5/` | `legado_ciclo_clinico/05_modulo/pi5/` |
| `Dados para expansão ciclo clinico/mATÉRIAS/5 SEMESTRE/PROPEDÊUTICA (TEÓRICO-PRÁTICA)/PROPEDÊUTICA CIRÚRGICA/` | `legado_ciclo_clinico/05_modulo/propedeutica_cirurgica/` |
| `Dados para expansão ciclo clinico/mATÉRIAS/5 SEMESTRE/PROPEDÊUTICA (TEÓRICO-PRÁTICA)/PROPEDÊUTICA CLÍNICA/` | `legado_ciclo_clinico/05_modulo/propedeutica_clinica/` |
| `Dados para expansão ciclo clinico/mATÉRIAS/5 SEMESTRE/PROPEDÊUTICA (TEÓRICO-PRÁTICA)/PROPEDÊUTICA PEDIÁTRICA/` | `legado_ciclo_clinico/05_modulo/propedeutica_pediatrica/` |
| `mATÉRIAS/5° Semestre/BMDT/` | `legado_ciclo_clinico/05_modulo/bmdt/` (merge) |
| `mATÉRIAS/5° Semestre/Farmacologia 2/` | `legado_ciclo_clinico/05_modulo/farmacologia_aplicada/` (merge) |
| `mATÉRIAS/5° Semestre/Propedêutica/Propedêutica Clínica/` | `legado_ciclo_clinico/05_modulo/propedeutica_clinica/` (merge) |
| `mATÉRIAS/5° Semestre/Propedêutica/Propedêutica Cirúrgica/` | `legado_ciclo_clinico/05_modulo/propedeutica_cirurgica/` (merge) |
| `mATÉRIAS/5° Semestre/Propedêutica/Propedêutica Pediátrica/` | `legado_ciclo_clinico/05_modulo/propedeutica_pediatrica/` (merge) |
| `mATÉRIAS/5º Semestre/BMDT/` | `legado_ciclo_clinico/05_modulo/bmdt/` (merge) |
| `mATÉRIAS/5º Semestre/Comunicação/` | `legado_ciclo_clinico/05_modulo/comunicacao_seguranca/` (merge) |
| `mATÉRIAS/5º Semestre/Farmaco Aplicada/` | `legado_ciclo_clinico/05_modulo/farmacologia_aplicada/` (merge) |
| `mATÉRIAS/5º Semestre/PI 5/` | `legado_ciclo_clinico/05_modulo/pi5/` (merge) |
| `mATÉRIAS/5º Semestre/Propedêuticas/Cirúrgica/` | `legado_ciclo_clinico/05_modulo/propedeutica_cirurgica/` (merge) |
| `mATÉRIAS/5º Semestre/Propedêuticas/Clínica/` | `legado_ciclo_clinico/05_modulo/propedeutica_clinica/` (merge) |
| `mATÉRIAS/5º Semestre/Propedêuticas/Pediatria/` | `legado_ciclo_clinico/05_modulo/propedeutica_pediatrica/` (merge) |
| `mATÉRIAS/6 SEMESTRE/CIRURGIA GERAL/` | `legado_ciclo_clinico/06_modulo/cirurgia_ortopedia/` |
| `mATÉRIAS/6 SEMESTRE/CLÍNICA MÉDICA/MÓDULO 1/` | `legado_ciclo_clinico/06_modulo/clinica_medica/bloco_1/` |
| `mATÉRIAS/6 SEMESTRE/CLÍNICA MÉDICA/MÓDULO 2/` | `legado_ciclo_clinico/06_modulo/clinica_medica/bloco_2/` |
| `mATÉRIAS/6 SEMESTRE/CLÍNICA MÉDICA/MÓDULO 3/` | `legado_ciclo_clinico/06_modulo/clinica_medica/bloco_3/` |
| `mATÉRIAS/6 SEMESTRE/IMAGEM APLICADA A PRÁTICA CLÍNICA/` | `legado_ciclo_clinico/06_modulo/imagem_pratica_clinica/` |
| `mATÉRIAS/6 SEMESTRE/MAPAS MENTAIS/` | `legado_ciclo_clinico/06_modulo/mapas_mentais/` |
| `mATÉRIAS/6 SEMESTRE/PI 6/` | `legado_ciclo_clinico/06_modulo/pi6/` |
| `mATÉRIAS/6 SEMESTRE/SCAPS 5/` | `legado_ciclo_clinico/06_modulo/scaps/` |
| `mATÉRIAS/6 SEMESTRE/TÉCNICA OPERATÓRIA 1/` | `legado_ciclo_clinico/06_modulo/tecnica_operatoria/` |
| `mATÉRIAS/6° Semestre/Cirurgia/` | `legado_ciclo_clinico/06_modulo/cirurgia_ortopedia/` (merge) |
| `mATÉRIAS/6° Semestre/Cirurgia Geral/` | `legado_ciclo_clinico/06_modulo/cirurgia_ortopedia/geral/` (merge) |
| `mATÉRIAS/6° Semestre/Clínica Médica/` | `legado_ciclo_clinico/06_modulo/clinica_medica/` (merge) |

(Mod 7 e 8 — adicionar quando houver conteúdo a migrar.)

---

## 7. Após reorganização

### 7.1 Atualizações no projeto MedGradPlus

Em **`PLANO_CICLO_CLINICO.md`**:

- Substituir todas as referências `Dados para expansão ciclo clinico/mATÉRIAS/...` por `legado_ciclo_clinico/...`.
- Adicionar bloco de inputs com novos paths.

Em **`prompts/gerar_materiais_apoio_v3.md`**:

- Atualizar caminhos de referência.

Em **`AGENTS.md`**:

- Adicionar entrada na tabela "Documentos auxiliares" apontando para `legado_ciclo_clinico/MANIFEST.json`.

### 7.2 Versionamento

A pasta `legado_ciclo_clinico/` **deveria** ser versionada parcialmente:

- **`README.md`** e **`MANIFEST.json`**: commitar.
- **PDFs e .docx**: NÃO commitar (gigantes; ficam fora do repo). Adicionar ao `.gitignore`.
- Manter cópia local + cópia em backup externo (Drive/Box do usuário).

```
# .gitignore (adicionar)
legado_ciclo_clinico/**/*.pdf
legado_ciclo_clinico/**/*.docx
legado_ciclo_clinico/**/*.pptx
legado_ciclo_clinico/**/*.tmp
!legado_ciclo_clinico/README.md
!legado_ciclo_clinico/MANIFEST.json
```

---

## 8. Estimativa

- **Backup:** 5 min.
- **Script de migração:** 3–4h (incluindo testes, mapeamento, normalização de nomes, geração de manifest).
- **Validação manual (spot-check):** 1h.
- **Atualizar referências no projeto:** 30 min.
- **Atualizar `.gitignore`:** 5 min.

**Total: ~5h.**

Pode ser uma das primeiras coisas a fazer (Etapa 0.9 do plano-mestre v2.0), pois desbloqueia o agente de geração com inputs limpos.

---

## 9. Observação importante

Esta reorganização **não apaga** material — só move e normaliza. Em caso de dúvida sobre qual versão preservar (3 versões do mesmo PDF), o script:

1. Compara hashes (SHA-256) — idênticos = remove um.
2. Diferentes = preserva ambos com sufixo `_v1`, `_v2`.
3. Loga decisão em `MIGRATION_LOG.json`.

**Versão 1.0 — 2026-05-07.**
