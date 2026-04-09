# 📊 Inventário de Extrações — MedGradPlus

Este documento rastreia o progresso da ingestão de provas antigas e materiais de apoio.

## 🟢 Concluídos (Sucesso)
| Módulo | Matéria | Documento | Status | Qualidade |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **PMH** | P1 BCM/PMH 2024.1 | ✅ Extraído | Fidelidade Total (Verbatim) |
| 1 | **PMH** | P2 BCM/PMH 2024.1 | ✅ Extraído | Bold Plus (Aesthetics) |
| 1 | **SUS** | Questões Iniciais | ✅ Injetado | Legado (Summarized) |

## 🟡 Em Processamento / Próximos
| Prioridade | Módulo | Matéria | Tipo | Fonte |
| :--- | :--- | :--- | :--- | :--- |
| **Alta** | 1 | **BMF1** | Prova | P1 e P2 (2024.1) |
| **Alta** | 1 | **SUS** | Prova | P1 e P2 (2024.1) |
| **Média** | 2 | **BCM1** | Prova | P1 e P2 (2024.1) |
| **Média** | 2 | **BMF2** | Prova | P1 e P2 (2024.1) |

## 🔴 A Fazer (Mapeamento Geral)

### Módulo 1 (Calouros)
* [ ] **BMF1**: Localizar PDFs de Locomotor e Digestório.
* [ ] **Semiologia 1**: Extrair técnicas de exame físico.
* [ ] **PMH**: P3 e P4 (se houver no Drive).

### Módulo 2 (Sistemas 1)
* [ ] **BCM1**: (Genética e Biologia Molecular).
* [ ] **MAD1**: (Imunidade e Infecção).
* [ ] **BMF2**: (Cardiorrespiratório).

### Módulo 3 (Sistemas 2)
* [ ] **BMF3**: (Urogenital e Endócrino).
* [ ] **MAD2**: (Farmacologia e Patologia).
* [ ] **Semio 3**: (Ginecologia e Obstetrícia).

---

## ⚙️ Gestão de Cotas da API (Gemini)
Para evitar bloqueios, o script `extrair_provas.mjs` será alternado entre:
1. `gemini-2.0-flash` (Principal - 15 RPM)
2. `gemini-1.5-pro` (Complexo - 2 RPM)
3. `gemini-1.5-flash-8b` (Auxiliar)

> [!NOTE]
> Se o app ainda não mostrar PMH, verifique se o seu semestre no perfil está como **Módulo 1**.
