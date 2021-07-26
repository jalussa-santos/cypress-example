/// <reference types="Cypress"/>

describe('Logout', () => {
  beforeEach(() => cy.login())

  it('sucesso', () => {
    cy.logout()

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}users/sign_in`)
  })
})
