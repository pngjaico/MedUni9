# Catálogo visual — PDF de material cirúrgico (instruções para revisão / IA de visão)

Documento de referência para alinhar `extract_manifest.json`, `to_instrumentais_figuras_map.json` e revisão humana com o PDF em `conteudos/` (catálogo tipo brochura: figura + seta + texto).

## Padrão de layout

- Na maioria das páginas (2–11), há **uma imagem** do instrumento à esquerda ou acima, **seta** e **bloco de texto** (nome em CAIXA ALTA + descrição curta).
- **Páginas comparativas:** algumas agrupam vários instrumentos com setas ou legendas (ex.: páginas **3**, **6** e **13**).

## Pistas para classificação (visão)

- Focar na **ponta**: curva vs. reta, **dentes**, **ranhuras** só nos 2/3 superiores vs. em toda a ponta.
- Considerar **comprimento da haste** e **proporção haste / parte cortante** (especialmente Mayo vs. Metzenbaum).

---

## Diérese (corte)

### Página 2

| # | Instrumento | Dica visual |
|---|-------------|-------------|
| 1 | Cabo de bisturi nº 3 | Haste menor e mais delicada. |
| 2 | Cabo de bisturi nº 4 | Haste mais larga; base de encaixe da lâmina maior. |
| 3 | Tesoura de Mayo **curva** | Ponta curvada para cima; proporção cabo/lâmina mais equilibrada. |
| 4 | Tesoura de Mayo **reta** | Lâminas totalmente retas. |

### Página 3

| # | Instrumento | Dica visual |
|---|-------------|-------------|
| 1 | Tesoura de Metzenbaum **curva** | Haste longa; zona cortante curta e delicada frente ao tamanho total; ponta curva. |
| 2 | Tesoura de Metzenbaum **reta** | Mesma proporção haste/lâmina, ponta reta. |

**Nota:** nesta página há imagem **comparativa** (Mayo e Metzenbaum lado a lado) para calibrar tamanho.

---

## Hemostasia

### Página 4

| # | Instrumento | Dica visual |
|---|-------------|-------------|
| 1 | Pinça de Kelly **curva** | **Ranhuras transversais só nos 2/3 superiores** da ponta (inspecionar mordente). |
| 2 | Pinça de Kelly **reta** | Ponta reta; ranhuras até 2/3. |
| 3 | Pinça de Crille **curva** | Ranhuras em **toda** a face interna da ponta. |
| 4 | Pinça de Crille **reta** | Ponta reta; ranhuras em toda a extensão. |

*Em `to_instrumentais.json` há `pinca_crille_curva` e `pinca_crille_reta` separados da Kelly.*

### Página 5

| # | Instrumento | Dica visual |
|---|-------------|-------------|
| 1 | Pinça de Halsted **curva** (mosquito) | A **menor e mais delicada** das hemostáticas do catálogo. |
| 2 | Pinça de Halsted **reta** | Ponta reta; tamanho reduzido. |
| 3 | Pinça de Rochester **curva** | Robusta, longa; ranhuras em toda a ponta (lembra Crille, mais pesada — uso intestinal). |
| 4 | Pinça de Rochester **reta** | — |

### Página 6

| # | Instrumento | Dica visual |
|---|-------------|-------------|
| 1 | Pinça de Kocher **curva** | **Dentes** (garras) bem evidentes na ponta. |
| 2 | Pinça de Kocher **reta** | Reta; dentes na ponta. |

**Nota:** macros das pontas comparando Kelly (ranhura parcial), Crille (ranhura total) e Halsted (menor).

---

## Síntese e pinças auxiliares

### Página 7 (formato “pinça de sobrancelha”)

| # | Instrumento | Dica visual |
|---|-------------|-------------|
| 1 | Pinça anatômica | Ponta reta; ranhuras horizontais; **sem dentes**. |
| 2 | Pinça “dente de rato” | Dentes que se entrelaçam. |
| 3 | Pinça de Adson **com** dente | Base larga afunila para ponta fina **com dentes**. |
| 4 | Pinça de Adson **sem** dente | Mesmo perfil; **sem dentes** na ponta. |

*Pinça Babcock não aparece nominada neste trecho do catálogo; pode exigir fonte externa ou outra página.*

### Página 8

| # | Instrumento | Dica visual |
|---|-------------|-------------|
| 1 | Porta-agulhas **Hegar** | Como tesoura/hemostática com **argolas** nos cabos; ponta com ranhuras cruzadas; haste curta e forte. |
| 2 | Porta-agulhas **Mathieu** | Como **alicate**, sem argolas; mola entre hastes. |

*Castroviejo: ver outras fontes se não estiver neste layout.*

---

## Especiais e afastadores

### Página 9

| # | Instrumento | Dica visual |
|---|-------------|-------------|
| 1 | Cuba-rim | Metal côncavo em formato de rim/feijão. |
| 2 | Pinça de Backaus | Pontas curvas afiadas que se cruzam (campos). |
| 3 | Pinça Cheron | Longa; ponta em anel/oval (gaze). |
| 4 | Pinça de Mixter | Curvatura ~90° na ponta. |

### Página 10

| # | Instrumento | Dica visual |
|---|-------------|-------------|
| 1 | Pinça de Foerster **curva** | Longa; pontas **fenestradas** (abertura oval). |
| 2 | Pinça de Foerster **reta** | — |
| 3 | Pinça de Allis | Múltiplos dentes pequenos na borda frontal; preensão grosseira. |
| 4 | Pinça de Coprostase | Extremamente longa; hastes longas/flexíveis (intestino). |

### Página 11 (afastadores)

| # | Instrumento | Dica visual | Nota dataset |
|---|-------------|-------------|--------------|
| 1 | Afastador de Finochietto | Autoestático grande; manivela/cremalheira; aspecto “torácico”. | `afastador_finochietto` → **img01** |
| 2 | Afastador de Farabeuf | Peça única em “C”/“U” quadrado nas extremidades. | `afastador_farabeuf` → **img02** |
| 3 | Afastador de Gosset | Autoestático abdominal; haste horizontal + verticais que abrem. | `afastador_gosset` → **img03** |
| 4 | Afastador de Doyen | Cabo liso; lâmina larga, chata e curva na ponta. | `afastador_doyen` → **img04** |

---

## O que isto complementa no projeto

- O script `map_to_instrumentais_images.py` usa sobretudo **texto** (`page_*.txt`): onde o OCR falta, este ficheiro dá a **ordem canónica das figuras** e critérios visuais.
- Serve de **prompt-base** para uma futura IA de visão ou para revisão rápida no PDF sem reabrindo todas as imagens.
