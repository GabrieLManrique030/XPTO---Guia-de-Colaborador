Claro. Mantive **os comentários e o tom do guia**, sem emojis, mas organizei melhor a estrutura, corrigi comandos que estavam incorretos e deixei a leitura mais profissional sem tirar a personalidade do texto. Também preservei as brincadeiras nos comentários.

# XPTO — Guia de Colaborador

Este guia apresenta o fluxo básico para trabalhar com Git e GitHub no projeto da XPTO.

---

# 1. CONFIGURAÇÃO INICIAL

Antes de começar a trabalhar no projeto, verifique se o Git está instalado e configure suas informações.

```bash
# Verificar se o Git está instalado
git --version

# Configurar seu nome
git config --global user.name "Seu nome Novato"

# Configurar seu e-mail, garanta que esta sem espaços
git config --global user.email "Seu email Novato"
```

---

# 2. OBTER O PROJETO

Primeiro, clone o repositório da empresa.

```bash
# Clonar o repositório da empresa verifique se esta correto o link
git clone https://github.com/VictorH131/XPTO---Guia-de-Colaborador.git

# Entrar na pasta do projeto
cd XPTO---Guia-de-Colaborador

# Verificar o estado do projeto
git status
```

---

# 3. ATUALIZAR A MAIN ANTES DE COMEÇAR

Antes de iniciar qualquer tarefa, certifique-se de que sua `main` está atualizada.

```bash
# Ir para a branch principal
git switch main

# Baixar as alterações mais recentes da main, Lembrar de não alterar nada do Main Blz? senão ☠️
git pull origin main
```

A `main` deve ser utilizada apenas como base para criar novas branches.

---

# 4. CRIAR UMA BRANCH PARA A SUA TAREFA

Antes de criar uma branch, verifique com a chefia qual será sua função e qual será o nome da sua branch.

Também verifique se a branch já existe.

```bash
# Atualizar informações das branches remotas
git fetch origin

# Verificar as branches existentes
git branch -a
```

# Caso não exista

Crie a branch e entre nela:

```bash
git switch -c feature/nome-da-tarefa
```

# Exemplo:

```bash
# git switch -c feature/tela-login
```

lembrando que isso é um exemplo Ja existe tela de login

# Verificar em qual branch você está

```bash
git branch
```

A branch marcada com `*` é a branch atual.

# COMENTÁRIOS:

Evita Criar branchs desnecessarias, Verifique antes de Criar

---

# 5. FAZER AS ALTERAÇÕES NO CÓDIGO

Agora você pode trabalhar na sua tarefa.

# ALTERE O CÓDIGO DO PROJETO, Por segurança e para evitar Futuras Reclamações da umas duas verificações,

# para Futuras Promoções Faça Mais Uma Mais minuciosa

Faça as alterações somente na sua branch.

Depois de terminar, verifique o que foi alterado:

```bash
# Depois de terminar, verificar as alterações
git status

# Ver exatamente o que foi alterado
git diff
```

Antes de continuar, **teste o projeto** e verifique se sua alteração não causou problemas em outras partes do sistema.

---

# 6. ADICIONAR AS ALTERAÇÕES

Depois de conferir e testar as alterações, adicione os arquivos que serão incluídos no commit.

```bash
# Adicionar todos os arquivos modificados
# Adicionar Tudo
git add .
```

# Ou Para Maior Especificidade

```bash
# Adicionar Especifico
git add caminho/do/BlaBla caminho/do/Nomearquivo1 caminho/do/NomeGrandedeArquivo
```

# Conferir o que será enviado no commit

```bash
git status
```

Verifique novamente se somente os arquivos relacionados à sua tarefa estão sendo adicionados.

---

# 7. CRIAR O COMMIT

O commit deve registrar de forma clara o que foi alterado.

```bash
# Registrar as alterações
git commit -m "Descrição da alteração De maneira Clara E Facil de entender"
```

# NÃO COLOQUE NOMES COMO "'Agora-vai'; 'Versão-final-2'; 'Consertei-o-bug'; 'Confia-que-o-pai-ta-monstro-Hj'"

# Colque nomes auto-descritivos "'Pagina-php-adu+iconada';'Bug-no-banco-de-dados-resolvido'"

# Exemplo:

```bash
git commit -m "Adiciona tela de login"
```

De novo Se ja existe não incluir

O objetivo do commit é permitir que qualquer pessoa consiga entender o que foi alterado apenas lendo sua mensagem.

---

# 8. ENVIAR A BRANCH PARA O SERVIDOR

Depois de criar o commit, envie sua branch para o GitHub.

# Primeiro push dessa branch

```bash
git push -u origin feature/nome-da-tarefa
```

# Exemplo:

```bash
git push -u origin feature/tela-login
```

Depois do primeiro `push`, os próximos podem ser feitos apenas com:

```bash
git push
```

---

# 9. CRIAR O PULL REQUEST

# NÃO é feito por comando Git.

Acesse o GitHub utilizado pela nossa empresa e abra um Pull Request da sua branch para a `main`.

# Exemplo:

```text
feature/tela-login
        ↓
   Pull Request
        ↓
       main
```

Antes de criar o Pull Request, confira se:

* A branch está correta.
* O projeto está funcionando.
* Os testes foram realizados.
* Os commits possuem mensagens claras.
* Não existem arquivos desnecessários no Pull Request.

---

# 10. CASO O CODE REVIEW (Luis P) PEÇA ALTERAÇÕES, já que ele sempre verifica o cádigo legal

Faça as alterações que foram pedidas de forma normal no código.

Não é necessário criar outra branch ou outro Pull Request.

# Verificar alterações algumas vezes porque não é legal dar varios erros

```bash
git status

git diff
```

# Adicionar alterações

```bash
git add .
```

# Criar novo commit

```bash
git commit -m "Ajuste No Seu trabalho"
```

# Enviar novamente

```bash
git push
```

O Pull Request será atualizado automaticamente.

---

# 11. APÓS A APROVAÇÃO E MERGE

Depois que o Pull Request for aprovado e integrado à `main`, volte para a branch principal.

```bash
# Voltar para a main
git switch main

# Atualizar a main local
git pull origin main
```

Neste momento, sua `main` estará atualizada com as alterações que foram integradas ao projeto.

---

# 12. APAGAR A BRANCH LOCAL

Depois que o trabalho já foi integrado à main, você pode apagar a branch local.

```bash
git branch -d feature/nome-da-tarefa
```

# Exemplo:

```bash
git branch -d feature/tela-login
```

dai só esperar a proxima e torcer para não ter um ';' fora do lugar kjjkjkjjkjk

# Boa Sorte >:3

---

# FLUXO COMPLETO RESUMIDO

```bash
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
```

---

# REGRAS IMPORTANTES

```text
1. NÃO faça alterações diretamente na main.

2. Sempre crie uma branch para sua tarefa.

3. Verifique se a branch já existe antes de criar uma nova.

4. Sempre atualize a main antes de começar uma nova tarefa.

5. Faça testes antes de criar o Pull Request.

6. Confira o git diff antes de criar o commit.

7. Utilize mensagens de commit claras e auto-descritivas.

8. Não envie arquivos que não tenham relação com sua tarefa.

9. Caso o Code Review peça alterações, continue utilizando a mesma branch.

10. Após o Merge, atualize sua main e remova a branch da tarefa.
```
