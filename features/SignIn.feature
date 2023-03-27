Feature: SignIn
  As an application user
  I want to log in to the website 
  So I can permform business transactions

  Scenario #1: Successful Sign in to the website
    Given A user brings up the signin page
    When A user clicks Sign-in
    And A user enters a valid Username <username> and Pssword <password>
    And A user clicks Login
    Then A user should be successfully logged into the site

  Scenario #2: Unsuccessful Log in to the website
    Given A user brings up the signin pop-up
    When  A user enters a valid Username <username> and Pssword <password>
    And A user clicks Login
    Then A user should not be successfully logged into the site