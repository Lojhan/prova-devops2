Feature: Create a new product
    This feature lets a user add a new item.

Scenario: Basic item creation scenario
    Given I am on the home page
    When I populate the form
    And I click to add
    Then The list should have a new item