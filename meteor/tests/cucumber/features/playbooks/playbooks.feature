Feature: User is able to view weekly updates

  As a user
  I want to view a list of weekly updates
  So that I can stay up to date

  Background:
    Given I am signed in as "rep"

  Scenario: User can view weekly updates
    When I click ".updates"
    Then I should see "Weekly Update" within ".weekly-updates a"
