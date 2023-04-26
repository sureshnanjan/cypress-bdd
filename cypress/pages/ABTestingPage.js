const CommonPage = require("./CommonPage");

module.exports = class ABTestingPage extends CommonPage{
    #heading_locator
    #paragraph_locator
    constructor(){
        super();
        this.#heading_locator = '#content > div > h3';
        this.#paragraph_locator = '';

    }

    static disableABTesting(){
        cy.setCookie('optimizelyOptOut','true');
    }

    getHeadingText(){
        cy.get(this.#heading_locator).invoke('text').then(value =>{
            cy.wrap(value).as('abtestHeading');
        })
    }

    checkHeadingMatches(expected){
        cy.get(this.#heading_locator).should('have.text',expected);

    }



    
}