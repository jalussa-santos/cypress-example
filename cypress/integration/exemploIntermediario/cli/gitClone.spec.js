/// <reference types="Cypress" />

const faker = require('faker')

describe('Clonar repositório git', () => {
  const project = {
    name: `project-${faker.random.uuid()}`,
    description: faker.random.words(5)
  }

  beforeEach(() => cy.api_createProject(project))

  it('Com sucesso', () => {
    cy.cloneViaHttp(project)

    cy.readFile(`temp/${project.name}/README.md`)
      .should('contain', `# ${project.name}`)
      .and('contain', project.description)
  })
})
