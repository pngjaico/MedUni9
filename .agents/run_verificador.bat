@echo off
cd /d "C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app"

echo [%date% %time%] Iniciando Agente Verificador de Categorização...

REM Verifica se há itens não verificados antes de chamar o Claude
python scripts\contar_nao_verificados.py
if errorlevel 1 (
    echo [INFO] Nenhum item novo para verificar. Encerrando.
    exit /b 0
)

REM Claude verifica categorização e gera relatório
"C:\Users\Usuario-pc\AppData\Roaming\npm\claude.cmd" --print --dangerously-skip-permissions "Execute o workflow '.agents/workflows/verificador_categorizacao.md'. Leia data/agent_logs/status_verificador.json para saber quais IDs já foram verificados. Verifique os próximos 25 questões e 25 flashcards não processados. Gere relatório em data/agent_logs/pendentes/verificador_{ts}.json. Não modifique nenhum arquivo de dados." >> ".agents\logs\verificador_%date:~6,4%-%date:~3,2%-%date:~0,2%.txt" 2>&1

echo [%date% %time%] Verificador concluído. Log em .agents\logs\
