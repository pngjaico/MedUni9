# Inventário de figuras — Wikimedia Commons

Uma linha por figura planejada. Use para pesquisa no Commons e para rastrear o que já foi colocado no app.

**Legenda de colunas**

| Coluna | Significado |
|--------|-------------|
| **ID** | Identificador estável (não reutilizar). |
| **Módulo** | Número do módulo. |
| **Disciplina** | Sigla ou pasta (ex.: bmf1, semiologia1). |
| **Aula** | Ficheiro sem extensão (ex.: bmf1_a5). |
| **Caminho (edição)** | Onde está o texto-fonte; espelho em `data/materiais/...` igual. |
| **Momento / âncora** | Secção ou texto após o qual a figura entra. |
| **Descrição do visual** | O que a imagem deve mostrar (briefing). |
| **Busca Commons (EN)** | Termos para colar na busca do Wikimedia Commons. |
| **Busca Commons (PT)** | Alternativa em português. |
| **Status** | `pendente` \| `encontrada` \| `inserida` \| `descartada` |
| **URL / ficheiro Commons** | Preencher quando escolher a imagem. |
| **Licença / crédito** | Após seleção. |

---

## Tabela

| ID | Módulo | Disciplina | Aula | Caminho (edição) | Momento / âncora | Descrição do visual | Busca Commons (EN) | Busca Commons (PT) | Status | URL / ficheiro Commons | Licença / crédito |
|----|--------|------------|------|------------------|------------------|---------------------|---------------------|---------------------|--------|------------------------|------------------|
| BMF1-A5-F01 | 1 | bmf1 | bmf1_a5 | `materiais/modulo1/bmf1/bmf1_a5.md` | Após seção Microarquitetura do osso compacto | Corte transversal: osteon com canal de Havers, lamelas, lacunas/canalículos; opcional Volkmann entre osteons. Esquema didático ou micrografia legível. | Haversian osteon cross section histology | osteona canal Havers corte transversal | encontrada | `upload.wikimedia.org/.../Osteon_cross_section.png` | CC BY 3.0 (SMART Servier) |
| BMF1-A5-F02 | 1 | bmf1 | bmf1_a5 | `materiais/modulo1/bmf1/bmf1_a5.md` | Após texto da placa epifisária | Placa epifisária em corte longitudinal: zonas reserva, proliferação, hipertrofia, calcificação, ossificação; seta do crescimento em comprimento. | epiphyseal plate zones growth plate histology | placa epifisária zonas crescimento | pendente | | |
| BMF1-A5-F03 | 1 | bmf1 | bmf1_a5 | `materiais/modulo1/bmf1/bmf1_a5.md` | Após tabela de fases da fratura | Radiografia de calo ósseo em consolidação **ou** esquema em painéis: hematoma → calo → remodelação. | bone fracture callus x-ray healing stages | fratura calo consolidação radiografia | pendente | | |

---

## Como adicionar novas linhas

1. Quando criar um bloco `### Figura sugerida` numa aula, **duplicar a última linha** da tabela (ou inserir antes do separador `---` se preferir tabelas menores por disciplina).
2. Gerar ID: `SIGLA-AULA-F##` com `##` sequencial naquela aula (F01, F02, …).
3. Preencher descrição e termos de busca; manter **Status** = `pendente` até escolher ficheiro no Commons.

## Pesquisa rápida

- No repositório: procurar por `BMF1-A5-F` ou pelo `aula` (ex.: `bmf1_a5`).
- No Commons: começar pelos termos em **EN**; se vier pouco resultado, tentar sinónimos (*growth plate*, *physeal plate*, *bone healing*).
