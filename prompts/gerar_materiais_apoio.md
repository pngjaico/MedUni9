# Prompt Canônico — Geração de Materiais de Apoio (MedGradPlus)

Documentação do repositório: [`AGENTS.md`](../AGENTS.md) na raiz (ordem de leitura para IAs).

## Objetivo

Gerar material de apoio acadêmico de alta qualidade para Medicina (Uninove), com linguagem clara, profundidade clínica, excelente escaneabilidade e consistência visual no app.

Este documento é o padrão canônico para criar e revisar materiais em `.md`.

---

## Regras invioláveis de operação

1. Gerar exatamente **1 aula por vez**.
2. Escrever conteúdo **manualmente**, com texto autoral e personalizado para a aula.
3. **Proibido** usar scripts para acelerar escrita em lote.
4. Cada aula deve ter **mais de 100 linhas**.
5. Ao finalizar cada aula, obrigatoriamente:
   - validar estrutura e qualidade;
   - validar integridade (acentuação, sem mojibake, sem placeholders);
   - informar a **quantidade de linhas**;
   - só então seguir para a próxima aula.

---

## Regra de encoding (obrigatória)

Ao salvar arquivos `.md` de material, usar UTF-8 sem BOM via PowerShell:

```powershell
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText("data\materiais\<materia_id>\<aula_id>.md", $conteudo, $utf8NoBom)
[System.IO.File]::WriteAllText("materiais\modulo<N>\<materia_id>\<aula_id>.md", $conteudo, $utf8NoBom)
```

Proibido:
- `Out-File`
- `Set-Content`
- escrever sem acentuação para "evitar erro"

---

## Caminhos de salvamento (sempre em ambos)

- Fonte editável: `data/materiais/<materia_id>/<aula_id>.md`
- Caminho servido: `materiais/modulo<N>/<materia_id>/<aula_id>.md`

Os dois arquivos devem ter o mesmo conteúdo.

---

## Padrão editorial e UX (obrigatório)

### Qualidade de escrita

- Português completo, com acentuação correta.
- Tom didático, objetivo e clínico.
- Evitar texto genérico, repetitivo ou "templateado".
- Evitar blocos extensos: preferir parágrafos curtos e progressão lógica.

### Hierarquia visual no markdown

- `#` para título da aula.
- `##` para blocos principais.
- `###` para subtópicos.
- `**negrito**` para conceitos-chave.
- `>` para dica clínica, pegadinha e macete de prova.
- Tabelas quando realmente melhorarem comparação e memorização.
- `---` para separar grandes blocos.

### Direção de UX

- Material deve ser fácil de revisar rapidamente antes da prova.
- O leitor deve conseguir "varrer" seções e encontrar síntese em segundos.
- Cada seção precisa responder: o que é, por que importa, como cai, como diferenciar.

---

## Estrutura obrigatória de cada aula

```markdown
# [Título da Aula]

## Relevância Clínica e Acadêmica

[Texto contextualizando por que o tema importa para prova e prática]

## [Bloco Temático 1]

[Desenvolvimento]

> **Dica de Prova:** [macete objetivo]

> **Pegadinha:** [erro comum da banca/aluno]

## [Bloco Temático 2]

[Desenvolvimento]

### [Subtópico comparativo]

| Conceito | Ponto-chave | Como diferenciar |
|----------|-------------|------------------|
| ... | ... | ... |

## Ponte com a Clínica

[Aplicação em caso real/resumo clínico de integração]

---

## Pontos-Chave para Prova

- [Ponto 1]
- [Ponto 2]
- [Ponto 3]

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **[Conceito]:** [frase curta e definitiva]
- ...

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| ... | ... | ... |

### Frase-âncora para não esquecer

> "[Frase memorável com mnemônico ou analogia]"
```

---

## Fontes concretas e checagem de conteúdo

Sempre usar base técnico-científica reconhecida e coerente com graduação médica:

- Anatomia: Moore (Anatomia Orientada para a Clínica), Netter (Atlas de Anatomia Humana).
- Histologia e biologia celular: Junqueira e Carneiro; Alberts (Biologia Molecular da Célula).
- Embriologia: Langman (Embriologia Médica).
- Bioquímica: Lehninger; Harper.
- Fisiologia: Guyton & Hall; Costanzo (BRS Fisiologia).
- Patologia geral e sistêmica: Robbins e Cotran (Bases Patológicas das Doenças).
- Farmacologia: Katzung; Goodman & Gilman.
- Microbiologia: Murray, Rosenthal e Pfaller; Trabulsi; Jawetz, Melnick & Adelberg.
- Imunologia: Abbas, Lichtman e Pillai; Janeway.
- Parasitologia: Neves (Parasitologia Humana); Rey (Bases da Parasitologia Médica).
- Semiologia: Porto (Semiologia Médica); Bates (Propedêutica Médica).
- Clínica médica (ciclo clínico): Goldman-Cecil Medicine.
- Cirurgia (ciclo clínico): Sabiston Textbook of Surgery.
- Pediatria: Nelson Textbook of Pediatrics; Sociedade Brasileira de Pediatria (SBP).
- Ginecologia e obstetrícia: Williams Obstetrics; Berek & Novak; FEBRASGO.
- Medicina preventiva e saúde coletiva: Rouquayrol; Medronho (Epidemiologia); Ministério da Saúde.
- Medicina de família e comunidade / APS: WONCA; Tratado de MFC (SBMFC); Cadernos de Atenção Básica.
- Infectologia clínica e condutas: Ministério da Saúde, CDC, OMS e diretrizes de sociedades brasileiras quando aplicável.
- Bioestatística e metodologia científica: Altman; Hulley (Delineando a Pesquisa Clínica); Pagano & Gauvreau.
- Saúde baseada em evidências: JAMA Users' Guides; Cochrane Handbook.

Regras:
- Não inventar guideline.
- Não usar afirmações absolutas sem base.
- Quando houver conduta sensível, preferir formulação conservadora e padrão-ouro.

---

## Checklist de validação por aula (antes de avançar)

- [ ] Arquivo com mais de 100 linhas.
- [ ] Seção inicial é `## Relevância Clínica e Acadêmica`.
- [ ] Contém `## Ponte com a Clínica`.
- [ ] Termina com `## Pré-Prova` no formato canônico.
- [ ] Há pelo menos uma tabela útil (não decorativa) quando o tema pede comparação.
- [ ] Não há caracteres corrompidos (ex.: `Ã`, `�`, `???`).
- [ ] Não há texto genérico repetido de outras aulas.
- [ ] Conteúdo salvo nos dois caminhos espelhados.
- [ ] Quantidade de linhas reportada.

---

## Política de continuidade

Após concluir e validar uma aula:
1. Informar o total de linhas.
2. Confirmar que os dois caminhos foram atualizados.
3. Seguir para a próxima aula (uma por vez).

Nunca pular validação de linha e estrutura.