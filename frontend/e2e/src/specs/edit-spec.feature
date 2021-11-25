Feature: Edit a product
    This feature lets a user edit an added item

Scenario: Basic item edit scenario
    Given I have at least one item in my list
    When I press edit
    And I populate the edit form
    And I click to edit
    Then the list should have my edited item