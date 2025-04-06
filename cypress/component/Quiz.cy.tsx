/// <reference types="cypress" />
import React from 'react';
import { mount } from 'cypress/react18'; 
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions/random', {
      fixture: 'questions.json',
    }).as('getQuestions');
  });

  it('starts the quiz and displays the first question', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();

    // Wait for mocked request to complete
    cy.wait('@getQuestions');

    // Check first question renders
    cy.get('h2').should('exist');
    cy.get('.btn.btn-primary').should('have.length.at.least', 1);
  });

  it('allows answering all questions and shows score', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');

    for (let i = 0; i < 1; i++) {
      cy.get('.btn.btn-primary').first().click();
    }

    cy.contains('Quiz Completed').should('exist');
    cy.contains('Your score:').should('exist');
    cy.contains('Take New Quiz').should('exist');
  });
});
