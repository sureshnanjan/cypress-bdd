const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given("Application login page displayed", function () {
    this.username = "";
    this.password = "";
});

When("user credentials enterd", function () {
    this.username = "rk";
    this.password = "pwd";
});

Then("user successfully login into application", function () {
    assert.ok(this.username ==="rk" && this.password === "pwd", 'Expected us to be prepared to start and also started.');
});
