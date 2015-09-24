Feature: Rep is able to mark objectives as complete

  As a rep
  I want to view objectives
  So that I can mark their completion

  Background:
    Given I am signed in as "rep"

  Scenario: Rep can view stores
    When I click ".i-track"
    Then I should see "6905" within ".store-number"
    And I should see "0/1" within ".status"
    And I should see "0%" within ".completion"

  Scenario: Rep can view store objectives
    When I navigate to "/itrack/stores"
    And I click ".store-number"
    Then I should see "END CAP" within ".itrack-stores-view .item-wrapper"
    And I should see the element ".ion-ios-circle-outline"
    And I click ".itrack-stores-view .item-wrapper"
    And I should see "NOT COMPLETE" within ".details"

  Scenario: Rep can mark objectives as complete
    When I navigate to "/itrack/stores"
    And I click ".store-number"
    And I should see the element ".ion-ios-circle-outline"
    And I click ".ion-ios-circle-outline"
    Then I should see the element ".ion-checkmark-circled"
    And I click ".itrack-stores-view .item-wrapper"
    And I should see "COMPLETED" within ".details"
    And I navigate to "/itrack/stores"
    And I should see "1/1" within ".status"
    And I should see "100%" within ".completion"

