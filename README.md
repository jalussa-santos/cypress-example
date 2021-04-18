[![pipeline status](https://github.com/jalussa-santos/cypress-example/actions/workflows/node.js.yml/badge.svg)](https://github.com/jalussa-santos/cypress-example/actions)

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
    
###### Não possui nenhuma ferramenta na máquina? [Clique aqui](https://github.com/jalussa-santos/cypress-example/wiki/Aprendizados-do-n%C3%ADvel-b%C3%A1sico#tecnologias-para-execu%C3%A7%C3%A3o-do-cypress)

* **Nível Intermediário**
    * Docker

###### Não possui nenhuma ferramenta na máquina? [Clique aqui](https://github.com/jalussa-santos/cypress-example/wiki/Aprendizados-do-n%C3%ADvel-intermedi%C3%A1rio#tecnologias-para-execu%C3%A7%C3%A3o)

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

>### Integração Contínua


* [Configuração do yml](https://gitlab.com/jalussa.santos/cypress-example/-/blob/master/.gitlab-ci.yml) para execução do cypress no Gitlab-ci. 
###### Veja mais na Wiki [Configurações Gitlab-CI](https://github.com/jalussa-santos/cypress-example/wiki/Aprendizados-do-n%C3%ADvel-b%C3%A1sico#configura%C3%A7%C3%B5es-gitlab-ci)

* [Configuração do yml](https://github.com/jalussa-santos/cypress-example/blob/main/.github/workflows/node.js.yml) para execução do cypress no Github Actions. 

###### Veja mais na Wiki [Configurações Github Actions](https://github.com/jalussa-santos/cypress-example/wiki/Aprendizados-do-n%C3%ADvel-b%C3%A1sico#configura%C3%A7%C3%B5es-github-actions)


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

> Jalussa dos Santos | [Linkedin](https://www.linkedin.com/in/jalussa/) | [Github](https://github.com/jalussa-santos) | [Gitlab](https://gitlab.com/jalussa.santos)