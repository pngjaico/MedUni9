@echo off
cd /d "C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app"
"C:\Users\Usuario-pc\AppData\Roaming\npm\claude.cmd" --print "Execute o workflow detalhado em '.agents/workflows/feedback_analysis.md'. Analise o feedback dos usuarios e gere requests acionaveis em data/feedback/requests/. Seja conservador: apenas descreva o problema e a acao sugerida — nao edite arquivos de conteudo. Ao terminar: escreva data/agent_logs/status_feedback.json e faca git commit + push." >> ".agents\logs\feedback_%date:~6,4%-%date:~3,2%-%date:~0,2%.txt" 2>&1
