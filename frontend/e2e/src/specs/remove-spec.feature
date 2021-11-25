Feature: Edit a product
    This feature lets a user edit an added item

Scenario: Basic item edit scenario
    Given I have at least one item in my list
    When I press remove
    Then the item should be removed