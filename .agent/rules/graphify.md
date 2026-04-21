# Graphify Token Optimization Rule

## Priority: HIGHEST - Use on every exploration

Before reading code or investigating project structure, **always check if `graphify-out/graph.json` exists**.

If it does:
1. Use `graphify query "your question"` instead of reading files
2. Never load 5+ files when graph search can answer in 1 call
3. Token savings: ~90% reduction vs raw file reads

## Examples

### ❌ Bad: Read 10 files to understand architecture
```
I'll read index.html, server.js, package.json, multiple utils, etc.
```

### ✅ Good: Query graph first
```
graphify query "what is the application entry point and dependencies"
```

### ✅ Good: Find function usage
```
graphify query "where is function buildCards called from"
```

### ✅ Good: Navigate dependencies
```
graphify path "generateQuestoes.mjs" "insertQuestions.mjs"
```

## When Graph Unavailable

If `graphify-out/graph.json` doesn't exist:
- Run: `graphify update .`
- Then proceed with queries

## Tech Details

- Graph file: `graphify-out/graph.json` (~900KB)
- Graph visualization: `graphify-out/graph.html`
- Graph report: `graphify-out/GRAPH_REPORT.md`
- Rebuild: `graphify update . [--exclude pattern]`

**Result:** Consistently ~90% cheaper exploration vs raw code reads.
