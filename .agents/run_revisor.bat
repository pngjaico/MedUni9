@echo off
cd /d "C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app"

echo [%date% %time%] Iniciando Agente Revisor de Materiais...

REM Passo 1: Análise estrutural Python (rápido, sem Claude)
python scripts\revisar_materiais.py
if errorlevel 1 (
    echo [ERRO] Script de revisão falhou. Abortando.
    exit /b 1
)

REM Passo 2: Claude revisa uma matéria inteira + gera glossários
"C:\Users\Usuario-pc\AppData\Roaming\npm\claude.cmd" --print --dangerously-skip-permissions "Execute o workflow '.agents/workflows/revisor_materiais.md'. Leia data/agent_logs/status_revisor_materiais.json. Selecione a matéria com maior score (dias_sem_revisao × cobertura). Revise todos os materiais dessa matéria: ortografia, tabelas, fluxos, tamanho. Gere glossário para cada aula em data/glossario/{aula_id}.glossario.json. Gere relatório em data/agent_logs/pendentes/ — não modifique arquivos diretamente." >> ".agents\logs\revisor_%date:~6,4%-%date:~3,2%-%date:~0,2%.txt" 2>&1

REM Passo 3: Re-analisa para confirmar melhora
python scripts\revisar_materiais.py --apenas-relatorio

echo [%date% %time%] Revisor concluído. Log em .agents\logs\
