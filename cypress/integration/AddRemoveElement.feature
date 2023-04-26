Feature: Add Remove Elements reletaed features.
  Scenario: Adding a new element
  Given I enter the Add Remove Page
  When I Add a new Elements
  Then The elements collection should have one more item.