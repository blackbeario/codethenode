Feature: Ensure user is signed in to access application

  As a user
  I want to login
  So that I can see my data

  Background:
    Given I am a new user
    And I am signed out

  Scenario: User can see login screen
    When I navigate to "/login"
    Then I should see login screen

  Scenario: User is redirected to login screen
    When I navigate to "/products/categories"
    Then I should see login screen

  Scenario: A user can login with valid information
    When I navigate to "/login"
    And I enter correct authentication information
    Then I should be logged in

  Scenario: A user cannot login with invalid information
    When I navigate to "/login"
    And I enter incorrect authentication information
    Then I should not be logged in

