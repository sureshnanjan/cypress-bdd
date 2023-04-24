describe('Shadow Dom Concepts',()=>{
    it('By Default the Shadow Dom is not accessible', () => {
        cy.visit('https://the-internet.herokuapp.com/shadowdom');
        cy.get('my-paragraph').first().get('span').should('contain.text','have some');
        cy.get('[data-cy="first_text"]')
        cy.get('my-paragraph').first().shadow().get('p').should('contain.text','have some');
        // p > slot
    });
});