@echo off
cd /d "C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app"
"C:\Users\Usuario-pc\AppData\Roaming\npm\claude.cmd" --print "Execute o workflow '.agents/workflows/deploy_meduni9.md'. Passos: 1) git status 2) git add data/ index.html admin.html 3) git commit -m 'chore: atualizacao periodica automatizada' 4) git push 5) firebase deploy --only hosting. Escreva data/agent_logs/status_deploy.json com o resultado. Se deploy falhar, registre o erro no status JSON com status 'err'." >> ".agents\logs\deploy_%date:~6,4%-%date:~3,2%-%date:~0,2%.txt" 2>&1
