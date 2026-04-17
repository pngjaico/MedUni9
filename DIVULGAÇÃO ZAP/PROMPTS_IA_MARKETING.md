# 🧠 Prompts de IA para Variação de Conteúdo (Marketing MedGradPlus)

Para evitar que os grupos da Uni9 achem que as mensagens são "robóticas" ou spam, use estes prompts no ChatGPT/Claude ou no próprio n8n para gerar variações dos seus textos base.

---

### Prompt 01: Variação de Tom (Evitando Fadiga)
> "Aja como um estudante de medicina da Uni9 Vergueiro que é muito gente boa e quer ajudar os colegas sem parecer um vendedor chato. Reescreva o texto abaixo mudando algumas palavras mas mantendo o link principal e a informação do Cupom BETA10. Use uma linguagem mais coloquial de faculdade (ex: 'galera', 'manos', 'pô', 'salve').
>
> TEXTO BASE: [Cole aqui um dos seus 11 textos]"

### Prompt 02: Resposta a Dúvidas no Grupo
> "Alguém no grupo perguntou se o MedGradPlus vale a pena em comparação com o Sanar ou Medcel. Gere uma resposta curta e honesta destacando que o diferencial é ser **mapeado exatamente na aula da Uni9** e focado na Prova Amarela, custando uma fração do preço dos cursinhos grandes."

### Prompt 03: Legendas para Stories
> "Crie 3 legendas curtas (máximo 2 frases) para usar com o Card [Número do Card]. Deve ser algo rápido para a pessoa ler enquanto pula os stories e clicar no link do MedGradPlus."

---

## 🛠️ Dica Técnica: Como enviar as imagens pelo n8n/Evolution
A Evolution API prefere que você mande o **link** da imagem. Como as suas imagens estão no seu PC, você tem duas opções:
1.  **Hospedar:** Subir os PNGs no seu site (ou em um servidor de imagens como o ImgBB).
2.  **Base64:** O n8n consegue ler o arquivo do seu PC e mandar em formato de código para a API. (Se precisar de ajuda com o Workflow do n8n para fazer isso, me avise!).
