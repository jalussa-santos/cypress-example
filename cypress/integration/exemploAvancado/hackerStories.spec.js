describe('Hacker Stories', () => {
  const initialTerm = 'React'
  const newTerm = 'Cypress'
  
  context('Chamando a API real',() => {
    beforeEach(() => {
      cy.intercept({
        method: 'GET',
        pathname: '**/search',
        query: {
          query: initialTerm,
          page: '0'
        }
      }).as('getStories')
      cy.visit('https://wlsf82-hacker-stories.web.app')
      cy.wait('@getStories')
    })

    it('mostra 20 stories, depois as próximas 20 após clicar em "Mais"', () => {
      cy.intercept({
        method: 'GET',
        pathname: '**/search',
        query: {
          query: initialTerm,
          page: '1'
        }
      }).as('getNextStories')
      cy.get('.item').should('have.length', 20)

      cy.contains('More').click()

      cy.wait('@getNextStories')

      cy.get('.item').should('have.length', 40)
    })

    it('pesquisas através do último termo pesquisado', () => {
      cy.intercept(
        'GET',
        `**/search?query=${newTerm}&page=0`
      ).as('getNewTermStories')

      cy.get('#search')
        .clear()
        .type(`${newTerm}{enter}`)

      cy.wait('@getNewTermStories')

      cy.get(`button:contains(${initialTerm})`)
        .should('be.visible')
        .click()

      cy.wait('@getStories')

      cy.get('.item').should('have.length', 20)
      cy.get('.item')
        .first()
        .should('contain', initialTerm)
      cy.get(`button:contains(${newTerm})`)
        .should('be.visible')
    })

  }) 

  context('Mockando a API',() => {
    context('Rodapé e lista de histórias', () => {
      beforeEach(() => {
        cy.intercept({
          method: 'GET',
          pathname: '**/search',
          query: {
            query: initialTerm,
            page: '0',
          }}, 
        {fixture: 'stories'}
        ).as('getStories')
        cy.visit('https://wlsf82-hacker-stories.web.app')
        cy.wait('@getStories')
      })
  
      it('shows the footer', () => {
        cy.get('footer')
          .should('be.visible')
          .and('contain', 'Icons made by Freepik from www.flaticon.com')
      })
    
      context('Lista de histórias', () => {
        //const stories = require('../fixtures/stories')
        it.skip('mostra os dados corretos para todas as histórias renderizadas', () => {  
          cy.get('.item')
            .first()
            .should('be.visible')
            .and('contain', stories.hits[0].title)
            .and('contain', stories.hits[0].author)
            .and('contain', stories.hits[0].num_comments)
            .and('contain', stories.hits[0].points)
          cy.get(`.item a:contains(${stories.hits[0].title})`)
            .should('have.attr', 'href', stories.hits[0].url)

          cy.get('.item')
            .last()
            .should('be.visible')
            .and('contain', stories.hits[1].title)
            .and('contain', stories.hits[1].author)
            .and('contain', stories.hits[1].num_comments)
            .and('contain', stories.hits[1].points)
          cy.get(`.item a:contains(${stories.hits[1].title})`)
            .should('have.attr', 'href', stories.hits[1].url)
        })
        
        it('mostra uma história a menos após descartar a primeira história', () => {
          cy.get('.button-small')
            .first()
            .click()
    
          cy.get('.item').should('have.length', 1)
        })
    
        // Since the API is external,
        // I can't control what it will provide to the frontend,
        // and so, how can I test ordering?
        // This is why these tests are being skipped.
        // TODO: Find a way to test them out.
        context.skip('Order by', () => {
          it('orders by title', () => {})
    
          it('orders by author', () => {})
    
          it('orders by comments', () => {})
    
          it('orders by points', () => {})
        })
      })
    })

    
    context('Pesquisa', () => {
      beforeEach(() => {
        cy.intercept(
          'GET',
          `**/search?query=${initialTerm}&page=0`,
          {fixture:'empty'}
        ).as('getEmptyStories')


        cy.intercept(
          'GET',
          `**/search?query=${newTerm}&page=0`,
          {fixture:'stories'}
        ).as('getStories')

        cy.visit('https://wlsf82-hacker-stories.web.app')
        cy.wait('@getEmptyStories')
  
        cy.get('#search')
          .clear()
      })
  
      it('digita e pressiona ENTER', () => {
        cy.get('#search')
          .type(`${newTerm}{enter}`)
  
        cy.wait('@getStories')
  
        cy.get('.item').should('have.length', 2)
        cy.get(`button:contains(${initialTerm})`)
          .should('be.visible')
      })
  
      it('digita e clica no botão enviar', () => {
        cy.get('#search')
          .type(newTerm)
        cy.contains('Submit')
          .click()
  
        cy.wait('@getStories')
  
        cy.get('.item').should('have.length', 2)
        cy.get(`button:contains(${initialTerm})`)
          .should('be.visible')
      })
  
      context('Últimas buscas', () => {
        
        it('mostra no máximo 5 botões para os últimos termos pesquisados', () => {
          const faker = require('faker')
  
          cy.intercept(
            'GET',
            '**/search**',
            {fixture : 'empty'}
          ).as('getRandomStories')
  
          Cypress._.times(7, () => {
            cy.get('#search')
              .clear()
              .type(`${faker.random.word()}{enter}`)
              cy.wait('@getRandomStories')
          })
  
          cy.get('.last-searches button')
            .should('have.length', 5)
        })
      })
    })
  })
  })  

context('Erros', () => {
  it('Mostra "Algo deu errado ..." em caso de erro do servidor ', () => {
    cy.intercept(
      'GET',
      '**/search**',
      {statusCode: 500}
    ).as('getServidorComFalha')
    
    cy.visit('https://wlsf82-hacker-stories.web.app')
    cy.wait('@getServidorComFalha')

    cy.get('p:contains(Something went wrong ...)')
    .should('be.visible')
  })

  it('Mostra "Algo deu errado ..." no caso de um erro de rede', () => {
    cy.intercept(
      'GET',
      '**/search**',
      {forceNetworkError: true}
    ).as('getRedeComFalha')

    cy.visit('https://wlsf82-hacker-stories.web.app')
    cy.wait('@getRedeComFalha')

    cy.get('p:contains(Something went wrong ...)')
    .should('be.visible')
  })
})