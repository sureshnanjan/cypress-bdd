const CommonPage = require('./CommonPage');
module.exports = class HomePage extends CommonPage{
    constructor(){
        super();
        console.log(typeof CommonPage);
        this.goToHomePage();
        
    }
    
    visitExamplePage(name){
        cy.contains(name).click();
        
    }
}
 





