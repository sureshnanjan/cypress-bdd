const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');


// login
Given("Application login page displayed", function () {
    this.credentials = { username: 0, password: "password" };
});

When("user credentials enterd", function () {

    let uname = 10;
    let pwd = "pwd";
    if (this.credentials['username'] !== uname || !(this.credentials['password'] === pwd)) {
        this.credentials['username'] = uname;
        this.credentials['password'] = pwd;
        console.log("change");
    } else {
        console.log("no change");
    }

});

Then("user successfully login into application", function () {

    assert.ok(this.credentials['username'] === 10 && this.credentials['password'] === "pwd", 'Expected us to be prepared to start and also started.');
});
