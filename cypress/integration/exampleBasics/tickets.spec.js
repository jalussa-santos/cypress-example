describe("Tickets",() =>{
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"));

    
    it("Preencher todos os campos de texto",()=>{

        const firstName = "Teste";
        const lastName = "Cypress";

        cy.get('#first-name').type("Teste");
        cy.get("#last-name").type("cypress");
        cy.get("#email").type("testecypress@testes.com.br");
        cy.get("#requests").type("testes123");
        cy.get("#signature").type(`${firstName} ${lastName}`);
    });

    it("Selecionar 2 tickets",() => {
        cy.get("#ticket-quantity").select("2");
    });

    it("Selecionando tipo de ticket 'vip'",() =>{
        cy.get("#vip").check();
    });

    it("Selecionar 'social media' checkbox",() =>{
        cy.get("#social-media").check();
    });
    
    it("Selecionar 'friend' e 'publication, e desmarcar 'friend'",() =>{
        cy.get("#friend").check();
        cy.get("#publication").check();
        cy.get("#friend").uncheck();
    });

    it.only("has 'TICKETBOX' headers's heading",() =>{
        cy.get("header h1").should("contain","TICKETBOX")
    });
});