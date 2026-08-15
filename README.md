# XPTO---Guia-de-Colaborador


# 1. CONFIGURAÇÃO INICIAL

# Verificar se o Git está instalado
git --version

# Configurar seu nome
git config --global user.name "Seu nome Novato "

# Configurar seu e-mail, garanta que esta sem espaços
git config --global user.email "Seu email Novato" 



# 2. OBTER O PROJETO

# Clonar o repositório da empresa verifique se esta correto o link
git clone [URL_DO_REPOSITORIO](https://github.com/VictorH131/XPTO---Guia-de-Colaborador.git)

# Entrar na pasta do projeto
cd PastaGit-Basico

# Verificar o estado do projeto
git status





# 3. ATUALIZAR A MAIN ANTES DE COMEÇAR

# Ir para a branch principal
git switch main

# Baixar as alterações mais recentes da main, Lembrar de não alterar nada do Main Blz? senão ☠️ 
git pull origin main





# 4. CRIAR UMA BRANCH PARA A SUA TAREFA

# verificar com A chefia oq seria sua função, tipo Qual vai ser a sua branch Pra ver se já não existe
# Caso não exista 
# Criar a branch e entrar nela
git switch -c feature/nome-da-tarefa

# Exemplo:
# git switch -c feature/tela-login  lembrando que isso é um exemplo Ja existe tela de login


# Verificar em qual branch você está
git branch


# COMENTÁRIOS:
# Evita Criar branchs desnecessarias, Verifique antes de Criar





# 5. FAZER AS ALTERAÇÕES NO CÓDIGO

# ALTERE O CÓDIGO DO PROJETO, Por segurança e para evitar Futuras Reclamações da umas duas verificações, 
# para Futuras Promoções Faça Mais Uma Mais minuciosa 

# Depois de terminar, verificar as alterações
git status

# Ver exatamente o que foi alterado
git diff



# 6. ADICIONAR AS ALTERAÇÕES

# Adicionar todos os arquivos modificados
# Adicionar Tudo
git add. 
# Ou Para Maior Especificidade
# Adicionar Especifico
git add caminho/do/BlaBla, caminho/do/Nomearquivo1, caminho/do/NomeGrandedeArquivo


# Conferir o que será enviado no commit
git status




# 7. CRIAR O COMMIT

# Registrar as alterações
git commit -m "Descrição da alteração De maneira Clara E Facil de entender"
# NÃO COLOQUE NOMES COMO "'Agora-vai'; 'Versão-final-2'; 'Consertei-o-bug'; 'Confia-que-o-pai-ta-monstro-Hj'"
# Colque nomes auto-descritivos "'Pagina-php-adu+iconada';'Bug-no-banco-de-dados-resolvido'"

# Exemplo:
# git commit -m "Adiciona tela de login" De novo Se ja existe não incluir




# 8. ENVIAR A BRANCH PARA O SERVIDOR
# Primeiro push dessa branch
git push -u origin feature/nome-da-tarefa

# Exemplo:
# git push -u origin feature/tela-login




# 9. CRIAR O PULL REQUEST

# NÃO é feito por comando Git.
# Acesse o GitHub utilizado pela nossa empresa
# e abra um Pull Request da sua branch para a main.


# Exemplo:
#
# feature/tela-login
#        ↓
#   Pull Request
#        ↓
#       main






# 10. CASO O CODE REVIEW (Luis P) PEÇA ALTERAÇÕES, já que ele sempre verifica o cádigo legal


# Faça as alterações que foram pedidas de forma normal no código.

# Verificar alterações algumas vezes porque não é legal dar varios erros
git status

# Adicionar alterações
git add .

# Criar novo commit
git commit -m "Ajuste No Seu trabalho"

# Enviar novamente
git push


# O Pull Request será atualizado automaticamente.




# 11. APÓS A APROVAÇÃO E MERGE


# Voltar para a main
git switch main

# Atualizar a main local
git pull origin main






# 12. APAGAR A BRANCH LOCAL

# Depois que o trabalho já foi integrado à main
git branch -d feature/nome-da-tarefa

# Exemplo:
# git branch -d feature/tela-login

# dai só esperar a proxima e torcer para não ter um ';' fora do lugar kjjkjkjjkjk
# Boa Sorte >:3




# FLUXO COMPLETO RESUMIDO 

git clone URL_DO_REPOSITORIO

cd NOME_DO_PROJETO

git switch main

git pull origin main

git switch -c feature/nome-da-tarefa

# >>> FAZER ALTERAÇÕES NO CÓDIGO <<<

git status

git diff

# >>> TESTAR O PROJETO <<<

git add .

git commit -m "Descrição da alteração"

git push -u origin feature/nome-da-tarefa

# >>> CRIAR PULL REQUEST <<<

# >>> CODE REVIEW <<<

# >>> FAZER AJUSTES, SE NECESSÁRIO <<<

git add .
git commit -m "Ajusta implementação"
git push

# >>> APROVAÇÃO E MERGE <<<

git switch main

git pull origin main

git branch -d feature/nome-da-tarefa
