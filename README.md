# cypress-example
> Projeto para desenvolver conhecimento na ferramenta cypress

## Como usar
* [Instalação](https://github.com/jalussa-santos/cypress-example/blob/main/README.md#Instalação)
    * [Tecnologias](https://github.com/jalussa-santos/cypress-example/blob/main/README.md#Tecnologias)
    * [Clone](https://github.com/jalussa-santos/cypress-example/blob/main/README.md#Clone)
    * [Execução na interface](https://github.com/jalussa-santos/cypress-example/blob/example-ci/README.md#execu%C3%A7%C3%A3o-na-interface)
    * [Execução modo headless](https://github.com/jalussa-santos/cypress-example/blob/example-ci/README.md#execu%C3%A7%C3%A3o-modo-headless)
    * [Github Actions]()
* [Exemplos](https://github.com/jalussa-santos/cypress-example/blob/main/README.md#Exemplos)   
* [Time](https://github.com/jalussa-santos/cypress-example/blob/main/README.md#Time)

### Instalação

>### Tecnologias
* NodeJS
* NPM
* JavaScript
* Cypress
* Mocha

###### Não possui nenhuma ferramenta na máquina? [Clique aqui](https://github.com/jalussa-santos/cypress-example/wiki/Aprendizados-do-n%C3%ADvel-b%C3%A1sico#tecnologias-para-execu%C3%A7%C3%A3o-do-cypress)

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

Execute comando para abrir a UI do cypress
```
npx cypress open
```

Na UI do cypress
```
- Clicar em </> Tests
- Clicar em Integration tests
- Clicar em exampleBasics
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

>### Github Actions

* Clicar na opção ```Actions``` do repositório
* Clicar em ```Set up this workflow``` do **Node.JS**
* No arquivo, ajustar a versão do node que deseja usar  
```
strategy:
      matrix:
        node-version: [10.x, 12.x, 14.x, 15.x]
```
* No arquivo ajustar os comandos ```run``` para 
```
- run: npm install
- run: npm run test
```

###### Veja mais em [Cypress - Continuous Integration com Github Actions](https://docs.cypress.io/guides/continuous-integration/github-actions#Basic-Setup) e [cypress-io/github-action](https://github.com/marketplace/actions/cypress-io)


### Exemplos

* [Acessar URL](https://github.com/jalussa-santos/cypress-example/issues/3)
* [Preencher campo de texto](https://github.com/jalussa-santos/cypress-example/issues/4)
* [Interagir com selectbox](https://github.com/jalussa-santos/cypress-example/issues/5)
* [Interagir com radiobutton](https://github.com/jalussa-santos/cypress-example/issues/6)
* [Interagir com checkbox](https://github.com/jalussa-santos/cypress-example/issues/7)
* [Criar assertions](https://github.com/jalussa-santos/cypress-example/issues/8)
* [Interagir com button](https://github.com/jalussa-santos/cypress-example/issues/9)
* [Teste end-to-end](https://github.com/jalussa-santos/cypress-example/issues/9)
* [Criar comandos customizados](https://github.com/jalussa-santos/cypress-example/issues/16)

### Time

> Jalussa dos Santos | [Linkedin](https://www.linkedin.com/in/jalussa/) | [Github](https://github.com/jalussa-santos)