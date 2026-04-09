# BIOE — Aula 4: Amostragem e Normalidade — O Desenho do Estudo

Um estudo só é tão bom quanto a sua amostra. Na prova, os temas centrais são os **Tipos de Amostragem (Estratificada vs Conglomerados)**, o cálculo do **Tamanho Amostral (n)** e a decisão entre **Testes Paramétricos e Não-Paramétricos** baseada na **Normalidade**.

Na prática, não adianta usar o computador mais potente do mundo se os pacientes que você escolheu não representam a realidade. Se você quer estudar a saúde de uma cidade e só entrevista pessoas na academia, seu resultado terá um **Viés de Seleção** (as pessoas na academia são mais saudáveis que a média). Aprender a desenhar a amostra é o que garante que seu estudo seja uma verdade científica, e não apenas uma coincidência estatística.

---

### Figura sugerida

**Figura-ID:** `BIOE-A4-F01`

- **Momento:** Seção de tipos de amostragem.
- **O que mostrar:** O "Menu de Amostragem": Quatro quadros comparativos. 1. **Aleatória**: Sorteio puro. 2. **Estratificada**: Grupos coloridos (homens/mulheres) com sorteio dentro de cada cor. 3. **Sistemática**: Escolhendo um a cada três. 4. **Conglomerados**: Selecionando "caixas" inteiras (escolas ou hospitais).
- **Tipo sugerido:** Infográfico de metodologia de pesquisa.
- **Legenda (rascunho):** Diferentes métodos de amostragem probabilística e como eles garantem a representatividade da população.

## 1. Amostragem Probabilística: O Sorteio Justo

Para que um estudo seja válido para a população inteira, todos devem ter a mesma chance de participar:
- **Aleatória Simples:** É o "sorteio de bingo". Precisa de uma lista de todo mundo.
- **Estratificada:** Divide a população em grupos (estratos) — ex: 50% homens e 50% mulheres — e sorteia dentro de cada grupo. É a mais precisa.
- **Sistemática:** Você sorteia o primeiro e depois pega o 10º, o 20º, o 30º da lista.
- **Por Conglomerados:** Você não sorteia pessoas, sorteia "lugares" (Ex: sorteia 5 escolas e estuda todo mundo lá dentro). Mais barato e prático para grandes cidades.

---

## 2. Tamanho Amostral (n): Quantos são necessários?

O tamanho do estudo (**n**) não é chutado. Ele depende de:
1. **Poder do Estudo:** A chance de achar uma diferença se ela realmente existir (o ideal é **80% a 90%**).
2. **Nível de Significância (α):** A chance de erro aceitável (geralmente **5%**).
3. **Tamanho do Efeito:** Se a diferença for minúscula, você precisa de milhares de pessoas para provar que é real.
4. **Variabilidade:** Se as pessoas forem muito diferentes entre si, você precisa de mais gente para o estudo ficar estável.

---

## 3. O Viés de Seleção: O Erro que não morre

- **Viés:** É um erro sistemático no desenho do estudo.
- **O Perigo:** Se o seu estudo tem viés, não adianta aumentar o número de pessoas (**n**). Você só vai ter um erro maior e mais certeiro.
- **Diferença:** O **Erro Aleatório** diminui se você estudar mais gente. O **Viés** só se resolve mudando o jeito de escolher os pacientes.

---

## 4. Normalidade: A Curva de Sino

Para usar os testes matemáticos "famosos" (Teste t, ANOVA), os dados precisam seguir a **Distribuição Normal** (Curva de Gauss):
- **Como saber?** Usamos o teste de **Shapiro-Wilk**.
  - Se p > 0,05: Os dados **são Normais**. Podemos usar **Testes Paramétricos** (mais potentes).
  - Se p ≤ 0,05: Os dados **não são Normais**. Devemos usar **Testes Não-Paramétricos** (baseados em rankings).

---

## Ponte com a Clínica

Muitas vezes, lemos que um estudo "não achou diferença estatística" entre dois remédios. Antes de concluir que os remédios são iguais, olhe o **Tamanho da Amostra**. Se o estudo usou poucas pessoas (ex: apenas 20 pacientes), ele pode ter sofrido um **Erro Tipo II (Beta)**: havia uma diferença real, mas o estudo foi pequeno demais para conseguir "enxergar". Um estudo sem poder estatístico é como tentar ver uma célula sem microscópio.

---

## Pontos-Chave para Prova

- **Amostragem Estratificada**: Divide por grupos (sexo, idade) para garantir que ninguém fique de fora.
- **Amostragem por Conglomerados**: Usada em grandes pesquisas nacionais (como o IBGE) por ser mais barata.
- **Shapiro-Wilk**: É o "teste de normalidade" mais cobrado. Lembrar que p > 0,05 é sinal verde para a Normal.
- **Erro Tipo I (Alfa)**: É o **Falso Positivo** (dizer que funciona quando não funciona).
- **Erro Tipo II (Beta)**: É o **Falso Negativo** (dizer que não funciona quando funciona).

---

## Pré-Prova

<ctrl94> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### Síntese para a prova

Para gabaritar amostragem, foque no Método e no Erro. 
**Probabilística** = Aleatória/Sorteio. **Não-Probabilística** = Conveniência/Amigos.

A Uninove adora o **Erro Tipo II**. Lembre-se: Estudo pequeno (**n baixo**) costuma ter "falta de poder", ou seja, ele não acha nada mesmo que a doença exista. Outro ponto forte: os **Paramétricos**. Se os dados são Normais (Curva de Sino), use **Teste t**. Se os dados são "tortos" (Assimétricos), use **Mann-Whitney**. Por fim, saiba que a **Aleatorização** (sorteio) é a única vacina contra os confundidores.

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Diferencial Crítico |
|------------|------------|-----------------|
| **Erro Aleatório** | **Viés** | Diminui com **Aumento de n** vs Só muda com **Novo Desenho** |
| **Aleatória Simples** | **Estratificada** | Sorteio do **Todo** vs Sorteio por **Subgrupos** |
| **Shapiro-Wilk** | **Teste t** | Testa a **Normalidade** vs Testa a **Diferença de Médias** |
| **Erro Tipo I (α)** | **Erro Tipo II (β)** | **Falso Positivo** (Culpar inocente) vs **Falso Negativo** (Absolver culpado) |
| **Paramétrico** | **Não-Paramétrico** | Dados **Normais** vs Dados **Assimétricos/Ranks** |

### Frase-âncora para não esquecer

> "Estratifico para garantir o grupo, sorteio para evitar o truque. Se o n é pequeno o beta aparece, se o n é gigante a futilidade floresce. Shapiro normaliza o caminho, o parâmetro guia o vizinho. No viés o aumento de n é em vão; no erro aleatório, mais gente é a solução."
