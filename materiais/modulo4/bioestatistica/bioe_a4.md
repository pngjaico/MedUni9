# Bioestatística — Aula 4: Definição da Amostra e Normalidade dos Dados

**Disciplina:** Bioestatística e Estudos em Saúde
**Módulo:** 4 | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

A qualidade de qualquer estudo começa antes de coletar o primeiro dado — começa na decisão de como selecionar a amostra. Uma amostra mal desenhada produz resultados sistematicamente errados, não importa quão sofisticada seja a análise. Da mesma forma, saber se os dados seguem distribuição normal define quais testes estatísticos podem ser usados. A Uninove cobra esses conceitos em questões sobre viés de seleção, tamanho amostral adequado e escolha entre testes paramétricos e não-paramétricos.

### Figura sugerida

**Figura-ID:** `BIOE-A4-F01`

- **Momento:** após o bloco de relevância (reserva editorial para imagem no app; aparece inline quando houver URL no catálogo).
- **O que mostrar:** definir na produção — deve ilustrar o tema central da aula de forma clara em mobile.
- **Tipo sugerido:** esquema didático | ilustração estilo atlas | infográfico | foto contextual | outro.
- **Legenda (rascunho):** a fixar junto da imagem final (campo legenda em data/materiais_figuras.json).
- **Notas (opcional):** pesquisar no Wikimedia Commons (buscaCommonsEn / buscaCommonsPt no JSON); licenças livres e atribuição.




---

## 1. Por Que Usar Amostras?

Estudar toda a população de interesse raramente é possível: incluir todos os hipertensos do Brasil, todos os pacientes com câncer gástrico ou todos os recém-nascidos prematuros seria inviável pelo custo, tempo e logística. A solução é selecionar uma **amostra representativa** — um subconjunto menor que, se bem selecionado, permite generalizar as conclusões para toda a população com quantificação do erro.

A representatividade é o critério central: uma amostra é representativa quando cada indivíduo da população tem chance conhecida e não-zero de ser selecionado. Amostras convenientes (voluntários, pacientes de um único hospital) podem ser eficientes, mas têm risco alto de não representar a população-alvo.

---

## 2. Tipos de Amostragem

### 2.1 Amostragem Probabilística

Todos os elementos têm probabilidade conhecida de seleção. É a base da inferência estatística válida.

**Aleatória simples:** cada indivíduo tem a mesma probabilidade de ser selecionado, como um sorteio. Requer lista completa da população (cadastro).

**Sistemática:** seleciona-se o primeiro elemento aleatoriamente e depois cada k-ésimo elemento (ex: a cada 10 na lista). Cuidado: se a lista tem periodicidade que coincide com k, pode gerar viés.

**Estratificada:** a população é dividida em grupos homogêneos — por sexo, faixa etária, região — e amostra aleatória retirada de cada estrato proporcionalmente. Garante representação de subgrupos importantes e aumenta a precisão.

**Por conglomerados:** seleciona-se unidades maiores (escolas, municípios, hospitais) e estuda-se todos ou uma amostra dentro dessas unidades. Usada quando não há lista individual disponível — mais econômica, mas com menor precisão (indivíduos dentro de um conglomerado tendem a ser parecidos entre si).

> **Dica de Prova:** A PNAD e a PNS usam amostragem por conglomerados em múltiplos estágios. O nome do método aparece em questões sobre inquéritos nacionais de saúde.

### 2.2 Amostragem Não-Probabilística

A seleção não é aleatória — conveniência, bola-de-neve, julgamento. Útil para estudos exploratórios e qualitativos, porém os resultados não podem ser formalmente extrapolados para a população. O risco de viés de seleção é alto.

---

## 3. Tamanho Amostral — Como Calcular e Por Que Importa

O tamanho amostral (n) ideal depende de quatro parâmetros interdependentes:

**Nível de significância (alfa):** a probabilidade aceitável de concluir que existe efeito quando na realidade não existe (erro tipo I). Convencionalmente alfa = 0,05 — com n adequado, o estudo terá no máximo 5% de chance de falso positivo.

**Poder estatístico (1 menos beta):** a probabilidade de detectar um efeito real quando ele existe. Convencionalmente 80% ou 90% — o estudo detectará o efeito verdadeiro em 80-90% das repetições possíveis.

**Tamanho do efeito esperado:** quanto menor o efeito que se quer detectar, maior o n necessário. Uma diferença de PA de 2 mmHg requer muito mais pacientes do que uma diferença de 20 mmHg.

**Variação esperada (desvio-padrão da variável):** maior variabilidade nos dados exige amostra maior para o mesmo poder estatístico.

> **Dica de Prova:** Estudo com n pequeno é subpotente — pode deixar de detectar efeito real (erro tipo II). Estudo com n enorme detecta diferenças estatisticamente significativas que são clinicamente irrelevantes, como redução de 0,1 mmHg na PA com p menor que 0,001.

---

## 4. Erros Amostrais e Vieses

### 4.1 Erro Amostral (Variação por Chance)
Variação aleatória inevitável entre amostras diferentes da mesma população. Diminui com o aumento de n. É quantificado pelo intervalo de confiança.

### 4.2 Viés de Seleção
Ocorre quando a amostra não representa a população-alvo — sistematicamente inclui ou exclui tipos específicos de pessoas. Exemplos: estudar tabagismo em voluntários saudáveis (viés do trabalhador saudável); estudar mortalidade por câncer só em hospital terciário (viés de referência, que superestima gravidade).

### 4.3 Viés de Informação
Erro sistemático na coleta ou medida das variáveis. Exemplos: entrevistar casos e controles de forma diferente; usar esfigmomanômetro descalibrado em um grupo; recordatório alimentar de 24h (subestima consumo de alimentos socialmente indesejáveis).

> **Pegadinha:** Viés não diminui com o aumento de n — ao contrário, amostras maiores nos dão mais certeza sobre um resultado errado. É preciso corrigir o viés no desenho do estudo, não na análise estatística.

---

## 5. Normalidade dos Dados — Por Que Importa

Muitos testes estatísticos clássicos (teste t, ANOVA, correlação de Pearson) assumem que os dados seguem distribuição **normal (gaussiana)** — a curva em forma de sino, simétrica, com média igual à mediana igual à moda.

### 5.1 Como Avaliar Normalidade

**Inspeção gráfica:** histograma (deve ter forma de sino) e Q-Q plot (pontos devem cair sobre a diagonal de referência).

**Testes formais:**
- **Shapiro-Wilk:** preferido para amostras pequenas (n menor que 50). H0: a distribuição é normal. Se p maior que 0,05, não rejeita normalidade.
- **Kolmogorov-Smirnov:** para amostras maiores; menos sensível que o Shapiro-Wilk.
- **Lilliefors:** variante do KS mais adequada quando média e DP são estimados da amostra.

> **Dica de Prova:** Resultado p maior que 0,05 no Shapiro-Wilk significa que os dados seguem distribuição normal — pode usar teste paramétrico. p menor ou igual a 0,05 significa distribuição não normal — use testes não-paramétricos.

### 5.2 Paramétrico vs Não-Paramétrico

| Situação | Teste paramétrico | Alternativa não-paramétrica |
|----------|-----------------|---------------------------|
| Comparar 2 grupos independentes | Teste t de Student | Mann-Whitney U |
| Comparar 2 grupos pareados | Teste t pareado | Wilcoxon |
| Comparar 3 ou mais grupos | ANOVA | Kruskal-Wallis |
| Correlação entre variáveis contínuas | Pearson (r) | Spearman (rô) |

Os testes não-paramétricos usam a ordenação (ranks) dos dados em vez dos valores brutos — por isso não exigem normalidade, mas em geral têm menor poder estatístico.

---

## Pontos-Chave para Prova

- **Amostragem aleatória simples:** cada indivíduo com igual probabilidade — base da inferência.
- **Amostragem estratificada:** subgrupos representados proporcionalmente — aumenta precisão.
- **Conglomerados:** seleciona unidades maiores (municípios, escolas) — menos preciso, mais econômico.
- **Tamanho amostral:** depende de alfa, poder (1 menos beta), tamanho do efeito e variabilidade.
- **Viés não diminui com n maior** — ao contrário do erro amostral aleatório.
- **Shapiro-Wilk p maior que 0,05:** distribuição normal, usar testes paramétricos.
- **Não normal ou assimétrica:** usar Mann-Whitney (2 grupos), Kruskal-Wallis (3 ou mais grupos), Spearman.

---

## Ponte com a Clínica

Em ensaios clínicos randomizados, o tamanho amostral é calculado antes de iniciar o estudo (análise de poder). Publicar um RCT com n insuficiente é considerado antiético porque expõe pacientes a riscos sem ter poder para detectar o efeito de interesse. O CONSORT checklist exige que todo RCT publique o cálculo de tamanho amostral. Na epidemiologia nacional, a PNS (Pesquisa Nacional de Saúde) usa amostragem por conglomerados em múltiplos estágios para representar o Brasil com cerca de 60 mil domicílios.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **Amostragem probabilística:** garante representatividade e inferência válida.
- **Estratificada:** subgrupos representados — usada quando há subgrupos de interesse distintos.
- **Conglomerados:** unidades maiores selecionadas — PNS e PNAD usam este método.
- **Tamanho amostral:** depende de alfa, poder (1 menos beta), tamanho do efeito, variabilidade.
- **Viés não diminui com n maior** — precisa ser corrigido no desenho do estudo.
- **Shapiro-Wilk p maior que 0,05:** normal, use paramétrico. p menor ou igual 0,05: use não-paramétrico.
- **Mann-Whitney:** alternativa não-paramétrica ao teste t de 2 grupos independentes.
- **Kruskal-Wallis:** alternativa não-paramétrica à ANOVA para 3 ou mais grupos.

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Erro amostral | Viés | Erro: aleatório, diminui com n; Viés: sistemático, não diminui com n |
| Amostragem estratificada | Por conglomerados | Estratificada: indivíduos de subgrupos; Conglomerados: unidades coletivas como escola ou município |
| Teste t | Mann-Whitney | T: paramétrico, dados normais; Mann-Whitney: não-paramétrico, dados assimétricos |
| Erro tipo I (alfa) | Erro tipo II (beta) | Tipo I: falso positivo — rejeita H0 verdadeira; Tipo II: falso negativo — não rejeita H0 falsa |

### Frase-âncora para não esquecer

> "Viés é sistemático — amostra maior só nos dá mais certeza do resultado errado. Corrija no desenho, não com mais pacientes."