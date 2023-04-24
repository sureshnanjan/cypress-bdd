describe('',()=>{
    it('Cookies Testing', () => {
        cy.setCookie('optimizelyOptOut','true');
        cy.visit('https://the-internet.herokuapp.com/abtest');
        cy.contains('No AB Test').should('have.length.at.least',1);
        
    });
});