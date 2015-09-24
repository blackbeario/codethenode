Feature: User is able to view monthly playbooks

  As a user
  I want to view a list of playbooks
  So that I can access the current month's strategy

  Background:
    Given I am signed in as "rep"

  Scenario: User can view a monthly playbook
    When I click ".playbooks"
    Then I should see "JULY - PLAYBOOK" within ".monthly-playbooks a"
