Feature: Divisional manager is able to view her regions

  As a divisional manager
  I want to view regions
  So that I can drill down into territories

  Background:
    Given I am signed in as "divisional"

  Scenario: Divisional manager can view a list of regions
    When I click ".i-track"
    And I click "#regions"
    Then I should see "AB00 - MANAGER LASTNAME" within ".region"
    And I click ".region"
    And I should see "AB01 - Rep LastName" within ".territory"
