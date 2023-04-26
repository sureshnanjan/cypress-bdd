describe('Cookie Handling',()=>{
    beforeEach(()=>{
        cy.setCookie('optimizelyOptOut','true');
    })
    it('Cookies Testing', () => {
        cy.visit('https://the-internet.herokuapp.com/abtest');
        cy.contains('No AB Test').should('have.length.at.least',1);
        
    });
});