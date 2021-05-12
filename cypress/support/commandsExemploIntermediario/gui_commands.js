/// <reference types="Cypress"/>

Cypress.Commands.add('login',() =>{
    cy.visit('users/sign_in');
    cy.get('[data-qa-selector="login_field"]').type(Cypress.env('user_name'));
    cy.get('[data-qa-selector="password_field"]').type(Cypress.env('user_password'));
    cy.get('[data-qa-selector="sign_in_button"]').click();
});

Cypress.Commands.add('logout',() =>{
    cy.get('.qa-user-avatar').click();
    cy.contains('Sign out').click();
});

Cypress.Commands.add('gui_createProject',project => {
    cy.visit('projects/new');

    cy.get('#project_name').type(project.name);
    cy.get('#project_description').type(project.description);
    cy.get('.qa-initialize-with-readme-checkbox').check();
    cy.contains('Create project').click();
});

Cypress.Commands.add('gui_creatIsuue',isssue => {
    cy.visit(`${Cypress.env('user_name')}/issues/new`);

    cy.get('#project_name').type(project.name);
    cy.get('#project_description').type(project.description);
    cy.get('.qa-initialize-with-readme-checkbox').check();
    cy.contains('Create project').click();
});