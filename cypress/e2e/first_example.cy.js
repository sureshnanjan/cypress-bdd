// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
//<reference types="../pages/" />
const HomePage = require('../pages/HomePage')
describe('template spec', () => {
  it('Home Page has 44 Examples', () => {
    //cy.visit('/');
    cy.visit('https://the-internet.herokuapp.com/');

    cy.get('#content > ul > li > a').should('have.length', 46);    
    // cy.get(':nth-child(1) > a')
    // #content > ul > li:nth-child(1) > a
    //cy.window().invoke()
  });
  
  it('Home Page has 44 Examples with Page Object Model', () => {
    HomePage.visit();
    HomePage.validate_contents();
    
  });

  it('Use a custom Task', () => {
    cy.task('getTestDataRandomized',{message:'MyMessage'}).then((data) =>{
      cy.visit('https://the-internet.herokuapp.com/');
      cy.get('h1').should('contain.text',data);
    });
  });
  it('Demo the Command Chaining concepts', async () => {
    cy.visit('https://the-internet.herokuapp.com/');
    //let url = cy.url(); // Wrong way 
    cy.get('#content > ul > li').should('have.length',44) // Gets all list items
    cy.get('#content > ul').children().should('have.length',44)
    // expect({a: 1}).have.lenght(44); // Original Chai library style
    cy.get('#content > ul > li').should('have.length',44).and('be.disabled')
    
    //const url = await cy.url(); // Approach 1
    //expect(url).equal('https://the-internet.herokuapp.com/');
    
    // 
    cy.url().then((url) =>{
      expect(url).equal('https://the-internet.herokuapp.com/');
      

    }); 
    it.only('Check Boxes Support', () => {

      cy.visit('https://the-internet.herokuapp.com/');
      cy.get('[type="checkbox"]').first().check();
      cy.get('input').first().should('have.attr','checked');
      
    });
    
    
  });



})