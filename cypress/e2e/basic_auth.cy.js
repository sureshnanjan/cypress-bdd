describe('Authentication Scenario',()=>{
    it('Cypress Authentocation with Basic Auth correct credentials',()=>{
        const username = 'admin';
        const password = 'admin';
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth: {
              username,
              password,
            },
          });
          // #content > div > p
        cy.get('#content > div > p').should('contain.text','Congratulations')
        let data = {name:'Value', prop : "propvalue"}
        //expect(data).tp(


    });
    it('Cypress Authentocation with Basic Auth Incorrect credentials',()=>{
      const username = 'admin';
      const password = 'admin';
      cy.visit('https://the-internet.herokuapp.com/basic_auth', {
          auth: {
            username:'incorrect',
            password,
          },
          //failOnStatusCode: false
        });
        // #content > div > p
      cy.get('#content > div > p').should('contain.text','Congratulations')


  });
  it.only('Cypress Authentication with Digest Auth ',()=>{
    const username = 'admin';
    const password = 'admin';
    cy.visit('https://admin:admin@the-internet.herokuapp.com/digest_auth', {
        auth: {
          username,
          password,
        },
        //failOnStatusCode: false
      });
      // #content > div > p
    cy.contains('Digest Auth').should('have.length',1).wrap()


});
})