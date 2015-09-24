Feature: User is able to view resources

  As a user
  I want to view a list of resources
  So that I can access additional learning

  Background:
    Given I am signed in as "rep"

  Scenario: User can view a resource list
    When I click ".resources"
    Then I should see "LearnTTI" within ".resources a"
