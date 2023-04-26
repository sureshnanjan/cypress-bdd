/// <reference types="cypress" />
module.exports = class CommonPage{
    // All locators used within the App for Identifying the page elements
    #github_url_identifier = 'a[alt="Fork me on GitHub]';
    #heading_identifier = 'h1'
    #subheading_identifier = "h2"
    #url = 'https://the-internet.herokuapp.com/';

    goToHomePage(){
        console.log(`Navigating to ${this.#url}`);
        cy.visit(this.#url);
    }
    setExpectedTitle(value){
        this.title = value;
        console.log(`setting the values ${this.title}`)

    }

    #getExpectedTitle(){
        return this.title;
    }

    validateDisplayedHeading(){
        cy.get(this.#heading_identifier).should('have.text',this.#getExpectedTitle());

    }

    validateDisplayedSubHeading(){
        //cy.get(this.#title_identifier).should('have.text',this.#getExpectedTitle());

    }

    


}
 
