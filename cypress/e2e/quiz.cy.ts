/// <reference types="cypress" />

describe('Tech Quiz E2E Test', () => {
    beforeEach(() => {
      cy.intercept('GET', '/api/questions/random').as('getQuestions');
      cy.visit('/');
    });
  
    it('runs through full quiz flow', () => {
      cy.contains('Start Quiz').click();
      cy.wait('@getQuestions'); // wait for initial quiz questions
  
      for (let i = 0; i < 10; i++) {
        cy.get('.btn.btn-primary').first().click();
      }
  
      cy.contains('Quiz Completed').should('exist');
      cy.contains('Take New Quiz').click();
  
      cy.wait('@getQuestions'); // wait for new quiz to load again
  
      cy.get('h2').should('exist'); // now it's safe to assert
    });
  });
  