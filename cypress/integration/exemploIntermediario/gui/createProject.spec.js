/// <reference types="Cypress"/>

const faker = require('faker')

describe('Criar Projeto', () => {
  before(() => cy.login())

  it('sucesso', () => {
    const project = {
      name: `project-${faker.random.uuid()}`,
      description: faker.random.words(5)
    }

    cy.gui_createProject(project)
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}${Cypress.env('user_name')}/${project.name}`)
    cy.contains(project.name).should('be.visible')
    cy.contains(project.description).should('be.visible')
  })
})
