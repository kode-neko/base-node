/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/example/tpl');
  });

  it('check elements', () => {
    cy.get('h1').should('have.text', 'Título');
    cy.get('#example').should('have.text', 'content');
  });
});
