Feature: Manager is able to view his territories and objectives

  As a manager
  I want to view objectives and territories
  So that I can monitor their statuses

  Background:
    Given I am signed in as "manager"

  Scenario: Manager can view a list of territories
    When I click ".i-track"
    And I click "#territories"
    Then I should see "AB01 - Rep LastName" within ".territory"
    And I should see "0/1" within ".status"
    And I should see "0%" within ".completion"

  Scenario: Manager can view stores by rep
    When I navigate to "/itrack/manager/region/manager"
    And I click ".territory"
    Then I should see "6905" within ".itrack-stores .store-number"
    And I should see "0/1" within ".status"
    And I should see "0%" within ".completion"
    And I click ".store-number"
    And I should see "END CAP" within ".itrack-stores-view .item-wrapper"

  Scenario: Manager can not mark objectives complete
    When I navigate to "/itrack/manager/region/manager"
    And I click ".territory"
    And I click ".store-number"
    And I click ".ion-ios-circle-outline"
    Then I should see the element ".ion-ios-circle-outline"

  Scenario: Manager can view a list of objectives
    When I click ".i-track"
    And I click "#objectives"
    Then I should see "END CAP" within ".objective"
    Then I should see "0/1" within ".status"
    And I should see "0%" within ".completion"

  Scenario: Manager can view stores for an objective
    When I navigate to "/itrack/manager/objectives"
    And I click ".objective"
    Then I should see "6905" within ".store-number"
