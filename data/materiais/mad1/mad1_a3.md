# Imunidade Adaptativa

## Relevância Clínica e Acadêmica

A imunidade adaptativa é o que nos protege de forma duradoura — é ela que explica por que sarampo não ocorre duas vezes, por que vacinas funcionam e por que transplantes são rejeitados. Sua marca fundamental é a especificidade antigênica e a memória imunológica, geradas pela seleção clonal de linfócitos T e B com receptores únicos para cada antígeno.

No contexto clínico, o mau funcionamento da imunidade adaptativa está na raiz de doenças autoimunes, imunodeficiências graves (como AIDS, onde o HIV destrói CD4+) e rejeição de transplantes. A Uninove cobra muito as diferenças entre linfócitos T CD4+ e CD8+, as classes de anticorpos e o conceito de resposta primária vs. secundária.

### Figura sugerida

**Figura-ID:** `MAD1-A3-F01`

- **Momento:** após o bloco de relevância (reserva editorial para imagem no app; aparece inline quando houver URL no catálogo).
- **O que mostrar:** definir na produção — deve ilustrar o tema central da aula de forma clara em mobile.
- **Tipo sugerido:** esquema didático | ilustração estilo atlas | infográfico | foto contextual | outro.
- **Legenda (rascunho):** a fixar junto da imagem final (campo legenda em data/materiais_figuras.json).
- **Notas (opcional):** pesquisar no Wikimedia Commons (buscaCommonsEn / buscaCommonsPt no JSON); licenças livres e atribuição.




---



## Características Fundamentais

| Propriedade | Significado |
|---|---|
| Especificidade | Cada linfócito reconhece UM antígeno específico |
| Diversidade | ~10⁷–10⁹ clones distintos por recombinação V(D)J |
| Memória | Células de memória de vida longa geradas após 1ª resposta |
| Autolimitação | Apoptose de células efetoras ao final da resposta |
| Tolerância ao self | Seleção tímica (T) e deleção clonal (B) eliminam autorreativos |

---

## Linfócito T — Maturação e Ativação

### Maturação no Timo

Linfócito T naive (duplo-negativo DN) → seleção positiva → seleção negativa → linfócito T maduro

| Etapa | Local | Critério | Resultado |
|---|---|---|---|
| Seleção positiva | Córtex tímico | Reconhece MHC próprio? | Sobrevive; falha = apoptose |
| Seleção negativa | Medula tímica | É autorreativo? | Apoptose (tolerância central) |

> **Dica:** ~95% dos timócitos morrem no timo. Apenas os "certos" saem para a periferia.

### CD4+ vs. CD8+

| Parâmetro | T CD4+ (helper) | T CD8+ (citotóxico) |
|---|---|---|
| Reconhece | MHC de classe II | MHC de classe I |
| Apresentado por | APC profissionais (macrófago, célula dendrítica, linfócito B) | Qualquer célula nucleada |
| Função | Coordenar resposta: ativa macrófagos, linfócitos B, T CD8+ | Matar diretamente células infectadas/tumorais |
| Mecanismo de morte | Citocinas (IL-2, IFN-γ) | Perforina + granzimas; FasL–Fas |

### Subtipos de T CD4+ (Th)

| Subtipo | Induzor | Citocinas produzidas | Alvo |
|---|---|---|---|
| Th1 | IL-12, IFN-γ | IFN-γ, TNF-α | Bactérias intracelulares, protozoários |
| Th2 | IL-4 | IL-4, IL-5, IL-13 | Parasitas, alergias |
| Th17 | IL-6 + TGF-β | IL-17, IL-22 | Fungos, bactérias extracelulares |
| Treg | TGF-β | IL-10, TGF-β | Supressão; tolerância periférica |

> **Pegadinha:** Th1 ativa macrófago (combate micobactérias, por exemplo). Th2 promove IgE e eosinofilia → resposta antiparasitária, mas também asma e alergia.

---

## Ativação do Linfócito T

Requer **3 sinais**:
1. **Sinal 1:** TCR reconhece antígeno no MHC da APC
2. **Sinal 2 (coestimulação):** CD28 (T) + B7/CD80-86 (APC) — sem isso = anergia
3. **Sinal 3 (citocinas):** IL-2 (proliferação), IL-12 (diferenciação Th1), IL-4 (Th2) etc.

> **Dica Clínica:** Drogas imunossupressoras bloqueiam esses sinais:
> - Ciclosporina / Tacrolimus → bloqueiam IL-2 (sinal 3)
> - Abatacept → bloqueia CD28–B7 (sinal 2)
> - Corticosteroide → bloqueia transcrição de citocinas (NF-κB)

---

## Linfócito B — Ativação e Anticorpos

### Ativação
- **T-dependente:** requer T CD4+ auxiliar → centro germinativo → hipermutação somática → maturação de afinidade → mudança de classe (switch de isotipo)
- **T-independente:** antígenos polissacarídicos (ex: cápsulas bacterianas) → apenas IgM, sem memória → por isso crianças < 2 anos não respondem bem a vacinas polissacarídicas puras

### Resposta Primária vs. Secundária

| Parâmetro | Resposta Primária | Resposta Secundária |
|---|---|---|
| Latência | 7–10 dias | 2–3 dias |
| Pico de anticorpos | Baixo | Alto (10–1000×) |
| Predominância | IgM | IgG (ou IgA/IgE) |
| Duração | Semanas | Meses a anos |
| Gerada por | 1ª exposição | Célula de memória |

> **Dica de Prova:** PCR IgM positivo para dengue = infecção recente (resposta primária). IgG positivo isolado = infecção passada ou revacinação.

### Mudança de Classe (Switch de Isotipo)

Ocorre no centro germinativo com ajuda de T CD4+ (via CD40L–CD40 + citocinas):
- IL-4 → IgE e IgG1
- TGF-β → IgA
- IL-2 → IgG

---

## Apresentação de Antígeno

| Via | Molécula | Antígeno | Célula apresentadora | Reconhecido por |
|---|---|---|---|---|
| Exógena (endossomal) | MHC II | Proteínas extracelulares fagocitadas | APC profissional | T CD4+ |
| Endógena (citosólica) | MHC I | Proteínas intracelulares (vírus, tumor) | Qualquer célula nucleada | T CD8+ |
| Cross-presentation | MHC I | Ag exógenos reapresentados | Célula dendrítica | T CD8+ naive |

> **Mnemônico:** "8 × I = interior" — CD8 vê o que está DENTRO da célula (MHC I).

---

## Memória Imunológica

- Após resolução, ~90-95% dos linfócitos efetores morrem por apoptose (AICD)
- Remanescentes = **células de memória** (vida longa em nichos de sobrevivência)
- Memória humoral: células B de memória + plasmócitos de longa vida na medula óssea
- Base das vacinas: induzir memória sem causar doença

---

## Pontos-Chave

- Imunidade adaptativa = especificidade + memória + autolimitação + tolerância ao self
- **T CD4+** reconhece MHC II e coordena a resposta; **T CD8+** reconhece MHC I e mata
- Ativação do T requer 3 sinais: TCR+MHC, coestimulação (CD28–B7) e citocinas
- **Th1:** bactérias intracelulares; **Th2:** parasitas e alergias; **Th17:** fungos/extracelulares; **Treg:** supressão
- Ativação T-dependente do B → switch de isotipo → IgG, IgA, IgE com memória
- Resposta primária: predomínio de IgM, lenta; Secundária: IgG, rápida e intensa
- MHC II = APC profissionais → CD4+; MHC I = qualquer célula nucleada → CD8+

---

## Ponte com a Clínica

**Caso:** Paciente HIV+ com CD4+ de 60 células/mm³ desenvolve pneumocistose (*Pneumocystis jirovecii*).
- HIV destrói seletivamente linfócitos **T CD4+**
- Sem CD4+: sem ativação de macrófagos (Th1), sem switch de anticorpos (IgG), sem controle de Th17
- *P. jirovecii* é fungo oportunista controlado por imunidade celular (CD4+/Th1)
- CD4+ < 200 → indicação de profilaxia com sulfametoxazol–trimetoprima

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **T CD4+:** coordena (helper); MHC II; Th1/Th2/Th17/Treg
- **T CD8+:** mata (citotóxico); MHC I; perforina + granzimas
- **3 sinais de ativação T:** TCR+MHC → coestimulação (CD28–B7) → citocinas (IL-2)
- **Resposta primária:** IgM, lenta; **Secundária:** IgG, rápida → base para diagnóstico sorológico
- **Switch de isotipo:** T-dependente; IL-4→IgE; TGF-β→IgA
- **MHC I:** todas células nucleadas; **MHC II:** APC profissionais

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|---|---|---|
| T CD4+ | T CD8+ | CD4+ = coordena via MHC II; CD8+ = mata via MHC I |
| Resposta primária | Resposta secundária | Primária = IgM + lenta; Secundária = IgG + rápida |
| Via exógena (MHC II) | Via endógena (MHC I) | II = fagocitado de fora → CD4+; I = produzido dentro → CD8+ |
| Resposta T-dependente | T-independente | T-dep = switch de classe + memória; T-indep = apenas IgM, sem memória |
| Seleção positiva | Seleção negativa | Positiva = aprende a reconhecer MHC; Negativa = elimina autorreativos |

### Frase-âncora para não esquecer

> "CD4 é o general que comanda o exército; CD8 é o atirador de elite que executa. Sem o general (CD4), o exército entra em colapso — como no HIV."

---

## Referências

- Abbas AK, Lichtman AH, Pillai S. *Imunologia Celular e Molecular*. Elsevier.
- Murphy K, Weaver C. *Janeway Imunologia*. Elsevier.
- Sociedade Brasileira de Imunologia — materiais e diretrizes de graduação (consulta).
