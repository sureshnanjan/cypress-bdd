/// <reference types="cypress" />
describe('Test For Check boxes',()=>{
    it.only('Check Boxes Support', () => {
        cy.visit('https://the-internet.herokuapp.com/');
        cy.contains('Checkboxes').click();
        cy.get('[type="checkbox"]').first().check();
        // Cypress Best Practices data-cy // Automation Ids
        cy.get('input').first().should('have.attr','checked');
        
    
      });

})