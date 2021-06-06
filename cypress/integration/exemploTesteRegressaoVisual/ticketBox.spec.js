describe('Ticketbox', () => {
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"));
    it('Checar o estado inicial da aplicação', () => {
       cy.percySnapshot();      
    });
});