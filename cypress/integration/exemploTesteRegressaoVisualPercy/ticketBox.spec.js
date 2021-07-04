describe('Ticketbox', () => {

   //teste
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"));
    it('Checar o estado inicial da aplicação', () => {
       cy.percySnapshot();      
    });

    it('Checar estado com e-mail inválido', () => {
        cy.get('#email').type('teste.com');
        cy.percySnapshot();      
     });

     it('Checar estado com todos os campos obrigatórios preenchidos', () => {
        const customer = {
            firstName: "João",
            lastName: "Silva",
            email: "joaosilva@example.com"
        };

        cy.preencheCamposObrigatorios(customer);
        cy.percySnapshot();      
     });

     it('Checar estado com nome completo, quantidade de tickets e tipo preenchidos', () => {
        const customer = {
            firstName: "João",
            lastName: "Silva",
        };

        cy.get('#first-name').type(customer.firstName);
        cy.get("#last-name").type(customer.lastName);
        cy.get("#ticket-quantity").select("2");
        cy.get("#vip").check();
        cy.percySnapshot();      
     });

     const sucessoEnvioFormulario = 'Checar mensagem de sucesso ao enviar formulário'
     it(sucessoEnvioFormulario, () => {
      const customer = {
         firstName: "João",
         lastName: "Silva",
         email: "joaosilva@example.com"
     };

     cy.preencheCamposObrigatorios(customer);
     cy.percySnapshot(sucessoEnvioFormulario, {
      percyCSS: `.success span { display: none; }`
   })
   });
});