describe('Ticketbox', () => {

  beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"));

  it.only('Checar estado com e-mail inválido', () => {

    cy.get('#email').type('teste@teste.com');
    cy.document().toMatchImageSnapshot();
  });

});