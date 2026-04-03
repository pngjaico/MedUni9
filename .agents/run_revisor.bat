@echo off
cd /d "C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app"

echo [%date% %time%] Iniciando Agente Revisor de Materiais...

REM Passo 1: Análise estrutural Python (rápido, sem Claude)
python scripts\revisar_materiais.py
if errorlevel 1 (
    echo [ERRO] Script de revisão falhou. Abortando.
    exit /b 1
)

REM Passo 2: Claude corrige os arquivos com problemas
"C:\Users\Usuario-pc\AppData\Roaming\npm\claude.cmd" --print "Execute o workflow '.agents/workflows/revisor_materiais.md'. Leia data/agent_logs/status_padronizador.json, corrija os 8 arquivos de maior score_urgencia: adicione breadcrumb, Pré-Prova, corrija acentuação, preencha data/refs/{aula_id}.refs.json. Faça git commit ao final." >> ".agents\logs\revisor_%date:~6,4%-%date:~3,2%-%date:~0,2%.txt" 2>&1

REM Passo 3: Re-analisa para confirmar melhora
python scripts\revisar_materiais.py --apenas-relatorio

echo [%date% %time%] Revisor concluído. Log em .agents\logs\
