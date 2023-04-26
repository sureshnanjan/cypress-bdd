Feature: Heroku App Demo web aplication for automation scenarios.
  Scenario: Accessing the website
    When I visit Heroku App homepage
    Then I should see 44 examples links
  Scenario: Accessing the website through App Actions
    When I visit Heroku App homepage with App Actions
    
