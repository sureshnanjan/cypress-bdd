import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When('I visit Heroku App homepage', () => {

  cy.visit('https://the-internet.herokuapp.com/')

  //hexaware_visit()

})

When('I visit Heroku App homepage with Custom Commands Actions', () => {

  //

})

Then('I should see 44 examples links', () => {

    cy.get('#content > ul > li > a').should('have.length', 44);

})

When('I visit Heroku App homepage with App Actions', ()=>{
  console.log('App Actions done');
})

