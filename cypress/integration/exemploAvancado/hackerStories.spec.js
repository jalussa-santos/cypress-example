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

      cy.contains('More')
        .should('be.visible')
        .click()

      cy.wait('@getNextStories')

      cy.get('.item').should('have.length', 40)
    })

    it('pesquisas através do último termo pesquisado', () => {
      cy.intercept(
        'GET',
        `**/search?query=${newTerm}&page=0`
      ).as('getNewTermStories')

      cy.get('#search')
        .should('be.visible')
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
        .should('be.visible')
        .and('contain', initialTerm)
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
        const stories = require('../../fixtures/stories')
        it('mostra os dados corretos para todas as histórias renderizadas', () => {  
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
            .should('be.visible')
            .click()
    
          cy.get('.item').should('have.length', 1)
        })
    
        context('Ordernar por', () => {
          it('Ordernar por título', () => {
            cy.get('.list-header-button:contains(Title)')
            .as('titleHeader')
            .should('be.visible')
            .click()

          cy.get('.item')
            .first()
            .should('be.visible')
            .and('contain', stories.hits[0].title)
          cy.get(`.item a:contains(${stories.hits[0].title})`)
            .should('have.attr', 'href', stories.hits[0].url)

          cy.get('@titleHeader')
            .click()

          cy.get('.item')
            .first()
            .should('be.visible')
            .and('contain', stories.hits[1].title)
          cy.get(`.item a:contains(${stories.hits[1].title})`)
            .should('have.attr', 'href', stories.hits[1].url)
        })

        it('Ordernar por autor', () => {
          cy.get('.list-header-button:contains(Author)')
            .as('authorHeader')
            .should('be.visible')
            .click()

          cy.get('.item')
            .first()
            .should('be.visible')
            .and('contain', stories.hits[0].author)

          cy.get('@authorHeader')
            .click()

          cy.get('.item')
            .first()
            .should('be.visible')
            .and('contain', stories.hits[1].author)
        })

        it('Ordernar por comentários', () => {
          cy.get('.list-header-button:contains(Comments)')
            .as('commentsHeader')
            .should('be.visible')
            .click()

          cy.get('.item')
            .first()
            .should('be.visible')
            .and('contain', stories.hits[1].num_comments)

          cy.get('@commentsHeader')
            .click()

          cy.get('.item')
            .first()
            .should('be.visible')
            .and('contain', stories.hits[0].num_comments)
        })

        it('Ordernar por pontos', () => {
          cy.get('.list-header-button:contains(Points)')
            .as('pointsHeader')
            .should('be.visible')
            .click()

          cy.get('.item')
            .first()
            .should('be.visible')
            .and('contain', stories.hits[1].points)

          cy.get('@pointsHeader')
            .click()

          cy.get('.item')
            .first()
            .should('be.visible')
            .and('contain', stories.hits[0].points)
        })
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
          .should('be.visible')
          .clear()
      })

      it('não mostra nenhuma história quando nenhuma é retornada', () => {
        cy.get('.item').should('not.exist')
      })
  
      it('digita e pressiona ENTER', () => {
        cy.get('#search')
          .should('be.visible')
          .type(`${newTerm}{enter}`)
  
        cy.wait('@getStories')
  
        cy.get('.item').should('have.length', 2)
        cy.get(`button:contains(${initialTerm})`)
          .should('be.visible')
      })
  
      it('digita e clica no botão enviar', () => {
        cy.get('#search')
          .should('be.visible')
          .type(newTerm)
        cy.contains('Submit')
          .should('be.visible')
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
  
          cy.get('.last-searches')
            .within(() => {
              cy.get('button')
                .should('have.length', 5)
          })
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