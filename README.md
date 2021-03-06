[![pipeline status](https://github.com/jalussa-santos/cypress-example/actions/workflows/cypressExemploCi.js.yml/badge.svg)](https://github.com/jalussa-santos/cypress-example/actions)   [![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/fa97d80b/exemplo-cypress-percy)

# cypress-example
> Projeto para desenvolver habilidades na ferramenta cypress. Veja mais informações das lições aprendidas na [Wiki](https://github.com/jalussa-santos/cypress-example/wiki)

## Como usar
* [Instalação](https://github.com/jalussa-santos/cypress-example/blob/main/README.md#Instalação)
    * [Tecnologias](https://github.com/jalussa-santos/cypress-example/blob/main/README.md#Tecnologias)
    * [Clone](https://github.com/jalussa-santos/cypress-example/blob/main/README.md#Clone)
    * [Execução na interface](https://github.com/jalussa-santos/cypress-example/blob/main/README.md#execu%C3%A7%C3%A3o-na-interface)
    * [Execução modo headless](https://github.com/jalussa-santos/cypress-example/blob/main/README.md#execu%C3%A7%C3%A3o-modo-headless)
    * [Integração contínua](https://github.com/jalussa-santos/cypress-example/blob/main/README.md#integra%C3%A7%C3%A3o-cont%C3%ADnua)
* [Exemplos](https://github.com/jalussa-santos/cypress-example/blob/main/README.md#Exemplos)   
* [Time](https://github.com/jalussa-santos/cypress-example/blob/main/README.md#Time)

### Instalação

>### Tecnologias

* **Nível básico**
    * NodeJS
    * NPM
    * JavaScript
    * Cypress
    * Mocha  

* **Nível Intermediário**
    * Faker

* **Nível Avançado**
    * Faker
    * Cypress localStorage
    * Standardjs

* **Teste de regressão visual**
    * Percy

###### Não possui nenhuma ferramenta na máquina? Ou quer saber mais sobre as ferramentas, veja mais informações em  [Tecnologias para execução do nível básico](https://github.com/jalussa-santos/cypress-example/wiki/Aprendizados-do-n%C3%ADvel-b%C3%A1sico#tecnologias-para-execu%C3%A7%C3%A3o-do-cypress), [Tecnologias para execução do nível intermediário](https://github.com/jalussa-santos/cypress-example/wiki/Aprendizados-do-n%C3%ADvel-intermedi%C3%A1rio#tecnologias-para-execu%C3%A7%C3%A3o) e [Tecnologias para execução de teste de regressão visual](https://github.com/jalussa-santos/cypress-example/wiki/Aprendizados-de-testes-de-regress%C3%A3o-visual#tecnologias-para-execu%C3%A7%C3%A3o)

>### Clone

Clone este repositório para sua máquina local usando comando abaixo:


```
$ git clone https://github.com/jalussa-santos/cypress-example.git
```

>### Execução na interface

Acessar a raiz do repositório
```
$ cd /{diretorio}/cypress-example
```
Execute comando para instalar as dependências listadas na seção de `devDependencies` do arquivo `package.json`

```
npm install
```

Execute comando para abrir a UI do cypress
```
npx cypress open
```

Na UI do cypress
```
- Clicar em </> Tests
- Clicar em Integration tests
- Clicar em exampleBasico
- Clicar em tickets.spec.js
```

>### Execução modo headless 

Acessar a raiz do repositório
```
$ cd /{diretorio}/cypress-example
```
Abrir o ```git bash```
Execute comando 
```
npm test
```
###### Este comando irá executar o comando ``` cypress run ``` configurado em scripts do ``` package.json ```. Veja mais em [Linhas de comando](https://docs.cypress.io/guides/guides/command-line#Commands)

>### Integração Contínua


* [Configuração do yml](https://gitlab.com/jalussa.santos/cypress-example/-/blob/master/.gitlab-ci.yml) para execução do cypress no Gitlab-ci. 
###### Veja mais na Wiki [Configurações Gitlab-CI](https://github.com/jalussa-santos/cypress-example/wiki/Aprendizados-do-n%C3%ADvel-b%C3%A1sico#configura%C3%A7%C3%B5es-gitlab-ci)

* [Configuração do yml](https://github.com/jalussa-santos/cypress-example/blob/main/.github/workflows/node.js.yml) para execução do cypress no Github Actions. 

###### Veja mais na Wiki [Configurações Github Actions](https://github.com/jalussa-santos/cypress-example/wiki/Aprendizados-do-n%C3%ADvel-b%C3%A1sico#configura%C3%A7%C3%B5es-github-actions)

###### Veja mais na Wiki [Integração contínua - Nível intermediário](https://github.com/jalussa-santos/cypress-example/wiki/Aprendizados-do-n%C3%ADvel-intermedi%C3%A1rio#integra%C3%A7%C3%A3o-cont%C3%ADnua)

### Exemplos

* **Nível básico**

    * [Acessar URL](https://github.com/jalussa-santos/cypress-example/issues/3)
    * [Preencher campo de texto](https://github.com/jalussa-santos/cypress-example/issues/4)
    * [Interagir com selectbox](https://github.com/jalussa-santos/cypress-example/issues/5)
    * [Interagir com radiobutton](https://github.com/jalussa-santos/cypress-example/issues/6)
    * [Interagir com checkbox](https://github.com/jalussa-santos/cypress-example/issues/7)
    * [Criar assertions](https://github.com/jalussa-santos/cypress-example/issues/8)
    * [Interagir com button](https://github.com/jalussa-santos/cypress-example/issues/9)
    * [Teste end-to-end](https://github.com/jalussa-santos/cypress-example/issues/9)
    * [Criar comandos customizados](https://github.com/jalussa-santos/cypress-example/issues/16)

* **Nível Intermediário**

    * [Usando faker](https://github.com/jalussa-santos/cypress-example/issues/31)
    * [Usando autocomplete](https://github.com/jalussa-santos/cypress-example/issues/31)
    * [Interagindo com a URL](https://github.com/jalussa-santos/cypress-example/issues/31)
    * [Indentificando elemento com contains](https://github.com/jalussa-santos/cypress-example/issues/31)
    * [Utilizando request do cypress para teste de api](https://github.com/jalussa-santos/cypress-example/issues/33)
    * [Otimizando teste de GUI com chamada a api nas pré-condições](https://github.com/jalussa-santos/cypress-example/issues/34)
    * [Teste de GUI com muitas pré-condições](https://github.com/jalussa-santos/cypress-example/issues/35)
    * [Interagindo com execução a nível de sistema](https://github.com/jalussa-santos/cypress-example/issues/36)
    * [Realizando leitura de arquivo](https://github.com/jalussa-santos/cypress-example/issues/36)

* **Nível Avançado**
    * [Interceptando solicitações e respostas](https://github.com/jalussa-santos/cypress-example/issues/70)
    * [Repetição de execução da função/teste](https://github.com/jalussa-santos/cypress-example/issues/70)
    * [Teste com simulação de erro de servidor e de rede](https://github.com/jalussa-santos/cypress-example/issues/72)
    * [Testando independente api](https://github.com/jalussa-santos/cypress-example/issues/74)
    * [Selecionando elementos de forma mais específica](https://github.com/jalussa-santos/cypress-example/issues/79)
    * [Lendo o localStorage do navegador](https://github.com/jalussa-santos/cypress-example/issues/81)
    * [Simulando um atraso na chamada à API](https://github.com/jalussa-santos/cypress-example/issues/83)
    * [Validando requisições em cache](https://github.com/jalussa-santos/cypress-example/issues/85)
    * [Análise de código e refatoração com standardjs](https://github.com/jalussa-santos/cypress-example/issues/88)


* **Teste de regressão visual**

    * [Criando snapshot](https://github.com/jalussa-santos/cypress-example/issues/49)
    * [Exemplo de validação de estados da aplicação](https://github.com/jalussa-santos/cypress-example/issues/51)
    * [Controlando a renderização](https://github.com/jalussa-santos/cypress-example/issues/53)
    * [Execução na pipeline Github](https://github.com/jalussa-santos/cypress-example/issues/56)
    * [Execução na pipeline Gitlab](https://github.com/jalussa-santos/cypress-example/issues/62)
    * [Integração com cypresspluginsnapshots](https://github.com/jalussa-santos/cypress-example/issues/58)


### Time

> Jalussa dos Santos | [Linkedin](https://www.linkedin.com/in/jalussa/) | [Github](https://github.com/jalussa-santos) | [Gitlab](https://gitlab.com/jalussa.santos)