Feature: SignIn
  As an application user
  I want to log in to the website 
  So I can permform business transactions

  Scenario: Successful Sign in to the website
    Given A user brings up the signin page
    When A user clicks Sign-in
    And A user enters a valid Username   "Ram.com" and Pssword  "pwd" 
    And A user clicks SingIn
    Then A user should be successfully logged into the site