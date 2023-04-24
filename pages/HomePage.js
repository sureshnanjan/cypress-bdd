const CommonPage = require('./CommonPage');
class HomePage extends CommonPage.CommonPage{
    constructor(){
        //super();
        goToHomePage();
    }
    visitExamplePage(name){
        cy.contains(name).click();
        switch (name.ToLower()) {
            case "a/b Testing":
                return new ABTestingPage();
                break;
            case "add/remove elements":
                return new AddRemoveElementsPage();
                break;
            default:
                break;
        }
    }
}
module.exports = HomePage;
//exports.HomePage = HomePage;





