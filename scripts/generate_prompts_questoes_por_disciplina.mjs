/**
 * Gera prompts em prompts/prompts questões/modulo{N}_{materia_id}.md
 * Execução: node scripts/generate_prompts_questoes_por_disciplina.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const materiasPath = path.join(root, 'data', 'materias.json');
const outDir = path.join(root, 'prompts', 'prompts questões');

const j = JSON.parse(fs.readFileSync(materiasPath, 'utf8'));

function clinicalTarget(id) {
  if (/^semiologia\d*$/.test(id)) {
    return {
      n: 5,
      label:
        'disciplina de perfil clínico/morfofuncional (canônico: ~50% do lote → 5/10 mini-casos)',
    };
  }
  if (
    /^(mad\d|clinica_|mfc\d|cirurgia_|tecnica_operatoria)/.test(id) ||
    id === 'ds'
  ) {
    return {
      n: 5,
      label:
        'disciplina de perfil clínico/morfofuncional (canônico: ~50% do lote → 5/10 mini-casos)',
    };
  }
  return {
    n: 4,
    label:
      'demais disciplinas (canônico: ~30–40% → usar 4/10 mini-casos plausíveis)',
  };
}

function template({ id, m, modulo }) {
  const ct = clinicalTarget(id);
  const aulas = (m.aulas || [])
    .map((a) => a.id)
    .sort((x, y) => x.localeCompare(y, 'pt-BR', { numeric: true }));
  const aulasList = aulas.length
    ? aulas.join(', ')
    : '(sem aulas no catálogo — validar data/materias.json)';

  return `# Refatorar questões — ${m.nome} (\`${id}\`)

**Módulo:** ${modulo} · **Sigla:** ${m.sigla || '—'} · **Ficheiro de saída:** \`data/questoes.json\`

---

## Contexto

Prompt operacional para colar num chat com **contexto zerado**, desde que o repositório (ou ficheiros citados) esteja acessível. Objetivo: eliminar questões estilo “associe à linha da tabela”, rótulos artificiais (ex.: \`Algo::\`), distratores reciclados entre itens do mesmo lote e metalinguagem fraca; substituir por enunciados **individualizados**, com **base no material da aula**, alinhados ao prompt canônico.

## Documento canônico (obrigatório)

1. Leia e siga **integralmente** [\`prompts/gerar_questoes_flashcards.md\`](../gerar_questoes_flashcards.md) (fonte de verdade para questões em \`data/questoes.json\`).
2. **Não** edite esse ficheiro; use-o só como regra.
3. Para cada aula, **antes** de reescrever as 10 questões, leia o Markdown em:
   - \`data/materiais/${id}/<aula_id>.md\`
   - se faltar, espelho: \`materiais/modulo${modulo}/${id}/<aula_id>.md\`

## Escopo desta disciplina

- \`materia\` (JSON): \`${id}\`
- Aulas (ordem do catálogo — cada \`aula_id\` tem **10** questões):  
  ${aulasList}

## Perfil clínico no lote de 10

- **Meta de mini-casos plausíveis:** **${ct.n}/10** — ${ct.label}.

## Ciclo por aula (uma aula de cada vez; repetir até esgotar a lista acima)

Para **cada** \`aula_id\` desta disciplina, **sem saltar** e **sem agrupar** aulas no mesmo raciocínio:

1. Ler o \`.md\` da aula.
2. Isolar em \`data/questoes.json\` as **10** entradas com \`"materia": "${id}"\` e \`"tema": "<aula_id>"\`.
3. **Preservar** em cada objeto: \`id\`, \`materia\`, \`tema\`, \`modulo\` (salvo correção documentada de erro factual de módulo).
4. Substituir \`enunciado\`, \`opcoes\`, \`correta\`, \`dificuldade\`, \`explicacao_geral\`, \`explicacoes_opcoes\`, \`explicacao\`, garantindo:
   - **sem** templates de tabela copiada; **sem** \`::\`; distratores **distintos** entre as 10 questões;
   - 4 alternativas \`A)\`…\`D)\`;
   - distribuição **2×** \`dificuldade: 1\`, **5×** \`2\`, **3×** \`3\`;
   - \`correta\` (0–3) **aproximadamente uniforme** no lote (~25% por letra);
   - \`explicacao\` com resumo + comentário de **todas** as letras, como no canônico;
   - **proibido** enunciado meta (“na aula”, “no material” como núcleo da pergunta).

5. Validar após **cada** \`aula_id\`: \`JSON.parse\` em \`data/questoes.json\`; contar 10 questões; contar 2/5/3; contar letras de \`correta\`.

## Ordem e conclusão

- Processar as aulas **na ordem listada** (ou ordem numérica natural dos sufixos \`_aN\`).
- **Não** pedir confirmação entre aulas; terminar só quando **todas** as aulas desta disciplina estiverem refatoradas.
- **Não** criar segundo ficheiro de banco de questões; editar apenas \`data/questoes.json\`.

## Entrega

Resumo final: aulas alteradas + confirmação de JSON válido + checagem 2/5/3 e distribuição de \`correta\`.
`;
}

fs.mkdirSync(outDir, { recursive: true });

const rows = Object.entries(j)
  .filter(([, m]) => m.ativo !== false)
  .map(([id, m]) => ({ id, m, modulo: m.modulo }))
  .sort(
    (a, b) =>
      a.modulo - b.modulo || a.id.localeCompare(b.id, 'pt-BR')
  );

for (const r of rows) {
  const name = `modulo${r.modulo}_${r.id}.md`;
  fs.writeFileSync(
    path.join(outDir, name),
    template({ id: r.id, m: r.m, modulo: r.modulo }),
    'utf8'
  );
}

console.log('Gerados', rows.length, 'ficheiros em', outDir);
