const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');



Given("Application login page displayed", function () {
   this.credentials={username:"",password:""};
});

When("user credentials enterd", function () {
    this.credentials={username:10,password:"pwd"};

});

Then("user successfully login into application", function () {
    assert.ok(this.credentials['username'] ===10 && this.credentials['password'] === "pwd", 'Expected us to be prepared to start and also started.');
});
