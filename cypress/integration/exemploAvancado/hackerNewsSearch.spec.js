describe('Hacker News Search', () => {
  const termo = 'cypress.io'

  beforeEach(() => {
    cy.intercept(
      '**/search?query=redux&page=0&hitsPerPage=100',
      { fixture: 'empty' }
    ).as('empty')
    cy.intercept(
        `**/search?query=${termo}&page=0&hitsPerPage=100`,
        { fixture: 'stories' }
    ).as('stories')

    cy.visit('https://infinite-savannah-93746.herokuapp.com/')
    cy.wait('@empty')
  })

  it('armazena em cache os resultados corretamente', () => {
    const faker = require('faker')
    const palavraRandomica = faker.random.word()
    let count = 0

    cy.intercept(`**/search?query=${palavraRandomica}**`, req => {
      count += 1
      req.reply({ fixture: 'empty' })
    }).as('random')

    cy.search(palavraRandomica).then(() => {
      expect(count, `network calls to fetch ${palavraRandomica}`).to.equal(1)

      cy.wait('@random')

      cy.search(termo)
      cy.wait('@stories')

      cy.search(palavraRandomica).then(() => {
        expect(count, `network calls to fetch ${palavraRandomica}`).to.equal(1)
      })
    })
  })
})
