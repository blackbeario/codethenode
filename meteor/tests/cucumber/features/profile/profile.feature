Feature: User is able to view his profile

  As a user
  I want to view my profile
  So that I can see my information

  Background:
    Given I am signed in as "rep"

  Scenario: User can view the correct data in their profile
    When I click ".profile"
    Then I should see "REP LASTNAME" within "h1.title"
    And I should see "18991" within "#employee-id"
    And I should see "AB01" within "#territory-code"
    And I should see "Rep" within "#first-name"
    And I should see "LastName" within "#last-name"
    And I should see "Manager LastName" within "#manager-name"
    # And I should see "123 Test Lane/nAustin, Texas 78758" within "#address"
    And I should see "(123) 456-7890" within "#phone"
    # And I should see "rep@email.com" within "#email"
    And I should see "XL" within "#shirt-size"
    And I should see "1ABC23" within "#vin"
    And I should see "16089" within "#gas-card"
