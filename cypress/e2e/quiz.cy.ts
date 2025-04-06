/// <reference types="cypress" />

describe('Tech Quiz E2E Test', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('runs through full quiz flow', () => {
      cy.contains('Start Quiz').click();
  
      for (let i = 0; i < 10; i++) {
        cy.get('.btn.btn-primary').first().click();
      }
  
      cy.contains('Quiz Completed').should('exist');
      cy.contains('Take New Quiz').click();
      cy.contains('Start Quiz').should('exist');
    });
  });
  