Feature: Batch List

  Scenario: Load batch list
    Given Logged into the system
    When we request the batch list
    Then we receive the list of batch