/// <reference types="Cypress" />

Cypress.Commands.add('cloneViaHttp', project => {
    const domain = Cypress.config('baseUrl').replace('http://', '').replace('/', '')
  
    /*cy.exec(`cd temp/ && git clone git@${domain}:${Cypress.env('user_name')}/${project.name}.git`)*/
    cy.exec(`cd temp/ && git clone http://${domain}/${Cypress.env('user_name')}/${project.name}.git`)
  })