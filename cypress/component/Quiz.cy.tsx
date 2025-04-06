import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../../client/src/components/quiz';

describe('Quiz Component', () => {
  it('starts the quiz and displays the first question', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();

    // Wait for the questions to load
    cy.get('h2').should('exist');
    cy.get('.btn.btn-primary').should('have.length.at.least', 1);
  });

  it('allows answering all questions and shows score', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();

    // Click first answer for each question
    for (let i = 0; i < 10; i++) {
      cy.get('.btn.btn-primary').first().click();
    }

    cy.contains('Quiz Completed').should('exist');
    cy.contains('Your score:').should('exist');
    cy.contains('Take New Quiz').should('exist');
  });
});
