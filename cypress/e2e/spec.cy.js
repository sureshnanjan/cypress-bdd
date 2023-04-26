/// <reference types="cypress" />
const ABTestingPage = require('../pages/ABTestingPage');
const HomePage = require('../pages/HomePage');
describe('template spec', () => {
  it('passes', () => {
    //cy.visit('https://example.cypress.io')
    const home = new HomePage();
    const abpage = new ABTestingPage();
    ABTestingPage.disableABTesting();
    home.visitExamplePage("A/B Testing");
    abpage.checkHeadingMatches("No A/B Test");
    
      

    
    
  });
  it.skip('API Call for pet is OK', () => {
    //cy.visit('https://example.cypress.io')
    //const home = new HomePage();
    cy.request("https://petstore.swagger.io/v2/pet/findByStatus?status=pending",{status:pending}).then()
    cy.intercept()
  });
})