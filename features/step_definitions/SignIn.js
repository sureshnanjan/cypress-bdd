const { Given, When, Then }  = require('@cucumber/cucumber');

  Given('A user brings up the signin page', function () {    
    console.log("enter user name and pwd");
  });
  When('A user enters userid and password and clicks', function () {
    console.log("user and pwd");
  });
  Then('A user should be successfully logged into the site', function () {
    console.log("logged in");
  });