/// <reference types="cypress" />
describe('',()=>{
    it('Simple Text Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/');
        cy.contains('JavaScript Alerts').click();
        cy.contains('Click for JS Alert').click();
        cy.on('window:alert',(text)=>{
            expect(text).to.contains('I am a JS Alert')
            //expect(text).equal('I am a JS Alert');
            return true;

        });
        
    });
    it('Javascript Confirm Alert Cancel', () => {
        cy.visit('https://the-internet.herokuapp.com/');
        cy.contains('JavaScript Alerts').click();
        cy.contains('Click for JS Confirm').click();
        cy.on('window:confirm',(text)=>{
           expect(text).to.contains('JS Confirm');
            return false;
        })
        
    });
    it('Javascript Confirm Alert OK', () => {
        cy.visit('https://the-internet.herokuapp.com/');
        cy.contains('JavaScript Alerts').click();
        cy.contains('Click for JS Confirm').click();
        cy.on('window:confirm',(text)=>{
            expect(text).to.contains('JS Confirm');
            return true;
        })
    });
    // 
    it.only('Javascript Prompt enter Text', () => {
        let myobj = {method1:()=>{}}
        //cy.stub(win, 'prompt').returns('Cypress User');
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts',
        {
            onBeforeLoad(win) {
              // when the application asks for the name
              // return "Cy" using https://on.cypress.io/stub
              cy.stub(win, 'prompt').returns('Cypress User');

              cy.stub()
            }
            
        }
        );
        /*
        cy.contains('JavaScript Alerts').click({
            onBeforeLoad(win) {
              // when the application asks for the name
              // return "Cy" using https://on.cypress.io/stub
              cy.stub(win, 'prompt').returns('Cypress User')
            }
        });
        */
        cy.contains('Click for JS Prompt').click();
        
    });
})