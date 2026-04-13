// analyze_modules.cjs
// Script to analyze all curriculum modules using existing agent workflows.
// It enumerates each 'materiais/modulo*' directory, runs the material reviewer
// and categorization verifier, and aggregates the results into reports.

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const baseDir = path.resolve(__dirname);
const materiaisDir = path.join(baseDir, 'materiais');
const reportsDir = path.join(baseDir, 'reports');

// Ensure reports directory exists
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

// Helper to run a workflow (placeholder – replace with actual runner command)
function runWorkflow(workflowPath, args = []) {
  // Placeholder implementation: the workflow files are markdown instructions.
  // In a real environment, you would invoke the appropriate agent runner.
  // Here we return a stub indicating what would be executed.
  return `Executed workflow ${path.basename(workflowPath)} with args ${args.join(' ')}`;
}

function analyzeModule(moduleName) {
  const modulePath = path.join(materiaisDir, moduleName);
  if (!fs.statSync(modulePath).isDirectory()) return null;

  const revisorPath = path.join(baseDir, '.agents', 'workflows', 'revisor_materiais.md');
  const verificadorPath = path.join(baseDir, '.agents', 'workflows', 'verificador_categorizacao.md');

  const revisorReport = runWorkflow(revisorPath, ['--module', moduleName]);
  const verificadorReport = runWorkflow(verificadorPath, ['--module', moduleName]);

  const reportContent = `# Analysis Report – ${moduleName}\n\n## Material Review\n\n${revisorReport}\n\n## Categorization Check\n\n${verificadorReport}\n`;

  const reportFile = path.join(reportsDir, `${moduleName}_report.md`);
  fs.writeFileSync(reportFile, reportContent, { encoding: 'utf-8' });
  return reportFile;
}

function main() {
  const modules = fs.readdirSync(materiaisDir).filter(name => name.startsWith('modulo'));
  const generated = [];
  for (const mod of modules) {
    const report = analyzeModule(mod);
    if (report) generated.push(report);
  }
  console.log('Analysis complete. Reports generated:');
  console.log(generated.join('\n'));
}

main();
