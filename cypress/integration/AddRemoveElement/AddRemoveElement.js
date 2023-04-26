/// <reference types="cypress" />
import { Given,When, Then } from 'cypress-cucumber-preprocessor/steps'
// Given I enter the Add Remove Page
 // When I Add a new Elements
  // Then The elements collection should have one more item.
  Given ('I enter the Add Remove Page',()=>{
    cy.visit('https://the-internet.herokuapp.com/add_remove_elements/');
  });
  
  When('I Add a new Elements', () => {
    cy.get('#content > div > button').click();
    });
Then ('The elements collection should have one more item.', ()=>{
    cy.get('.added-manually').should('have.length.above',0);
    });