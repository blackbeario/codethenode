Feature: Corporate manager is able to view divisions

  As a corporate manager
  I want to view divisions
  So that I can drill down into regions

  Background:
    Given I am signed in as "corporate"

  Scenario: Corporate manager can view a list of divisions
    When I click ".i-track"
    And I click "#divisions"
    Then I should see "N000 - DIVISIONAL LASTNAME" within ".division"
    And I click ".division"
    And I click ".region"
    And I should see "AB01 - Rep LastName" within ".territory"
