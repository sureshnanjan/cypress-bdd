const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');



Given("Application login page displayed", function () {
   this.credentials=[];
});

When("user credentials enterd", function () {
    this.credentials[0] = 10;
    this.credentials[1] = "pwd";
});

Then("user successfully login into application", function () {
    assert.ok(this.credentials[0] ===10 && this.credentials[1] === "pwd", 'Expected us to be prepared to start and also started.');
});
