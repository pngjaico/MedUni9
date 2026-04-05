# Histologia — matriz BMF (1–4) e cobertura no app

Referência para alinhar **revisão em texto** e **atlas de lâminas** (`data/histologia_*.json`) aos módulos de **Bases Morfofuncionais** típicos da graduação. Ajuste fino por plano de ensino da instituição.

## Mapa curricular → foco histológico

| Módulo | Sigla típica | Eixos anatômicos / histológicos |
|--------|----------------|----------------------------------|
| 1 | BMF1 | Locomotor: tecidos de suporte (CT, cartilagem, osso), muscular esquelético, integração com anatomia macro |
| 2 | BMF2 | Cardiovascular, respiratório; sangue e hematopoiese; imunidade (órgãos linfoides) em paralelo ao MAD |
| 3 | BMF3 | Digestório, renal, reprodutor — microanatomia de parede, glândulas, néfron, gônadas |
| 4 | BMF4 | Neurossensorial e endócrino — SNC/PNS, órgãos dos sentidos (resumo), hipófise/tireoide/etc. |

## Sistemas no `histologia_atlas.json` (ordem do app)

| ordem | id | BMF principal | Notas de cobertura |
|-------|-----|---------------|-------------------|
| 0 | `tecidos_fundamentais` | Base para todos | Quatro tecidos básicos + pele (intro); ponto de entrada lógico antes dos sistemas |
| 1 | `sistema_esqueletico` | 1 | Cartilagem, osso, ossificação |
| 2 | `sistema_articular` | 1 | Sinóvia, cartilagem articular, meniscos |
| 3 | `sistema_muscular` | 1 | Esquelético, cardíaco, liso |
| 4 | `sistema_circulatorio` | 2 | Sangue, vasos, coração, órgãos linfoides (divisão dedicada) |
| 5 | `sistema_respiratorio` | 2 | Vias + parênquima |
| 6 | `sistema_digestorio` | 3 | Tubo digestório e anexos (fígado, pâncreas exócrino) |
| 7 | `sistema_urinario` | 3 | Rim, vias |
| 8 | `sistema_genital_masculino` | 3 | Testículo, glândulas |
| 9 | `sistema_genital_feminino` | 3 | Ovário, útero, tubas |
| 10 | `sistema_neural` | 4 | Neurônio, glia, encéfalo, medula, gânglios; panorama endócrino (tireoide, suprarrenal) |

Campo opcional **`modulo`** nas **divisões** do atlas: valor `1`–`4` para auditoria e futuros filtros na UI.

**Nota:** a interface da app **não** usa mais filtros por módulo BMF1–4 na revisão; a tabela acima continua útil para **editores** alinharem conteúdo ao currículo, não como navegação do aluno.

## Estado das lâminas (auditoria)

- Todas as entradas listadas no gerador [`scripts/generate_histologia_content.js`](../scripts/generate_histologia_content.js) são **títulos didáticos**; **`urlImagem`** fica vazio até curadoria com ficheiros **CC-BY / domínio público** (OpenStax, Wikimedia, material próprio).
- Marcação sugerida: **OK** = imagem e legenda revistas; **placeholder** = só título + texto de preparação.

## Atlas de anatomia (`anatomia_atlas.json`)

- Imagens são **macro** (fotos/ilustrações), não microscopia de rotina.
- Não deve ser avaliado com os mesmos critérios que histologia; a coluna “BMF micro” não se aplica.

## Lacunas conhecidas (expansão contínua)

- **Imunidade / órgãos linfoides**: divisão `sc_linfoide` no atlas (linfonodo, baço, tonsila); texto na revisão em circulatório.
- **Órgãos endócrinos**: divisão `sn_endocrino` no atlas (tireoide, suprarrenal); cartão de panorama na revisão em sistema neural.
- **Pele e anexos**: panorama em `tecidos_fundamentais`; mais lâminas sob demanda.

## Como regenerar os JSON

```bash
node scripts/generate_histologia_content.js
```

Depois validar a app: **Histologia → Atlas de lâminas** e **Revisão rápida**.
