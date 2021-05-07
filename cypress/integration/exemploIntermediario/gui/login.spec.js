/// <reference types="Cypress"/>

describe('Login', () => {
    it('sucesso', () => {
        cy.login();

        cy.get('.qa-user-avatar').should('exist');
    })
});