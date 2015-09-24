Feature: User is able to drill down to a product detail screen

  As a user
  I want to find a product
  So that I can view it's data

  Background:
    Given I am signed in as "rep"

  Scenario: User can drill down into product detail
    When I click ".product-library"
    Then I should see "Department: 25" within ".department"
    And I click ".department"
    And I should see "ACCESSORIES" within ".category"
    And I click ".category"
    And I should see "RYOBI" within ".brand"
    And I click ".brand"
    And I should see "Product Name" within ".model"
    And I click ".model"

  Scenario: User can view all product information
    When I navigate to "/products?dept=25&cat=409&brand=408"
    And I click ".model"
    Then I should see "1000642559" within ".product-view .list"
    And I should see "DISPLAY: Yes" within ".product-view .list"
    And I should see "DEPARTMENT: 25" within ".product-view .list"
    And I should see "RYOBI" within ".product-view .list"
    And I should see "ACCESSORIES" within ".product-view .list"
    And I should see "2352-20" within ".product-view .list"
    And I should see "block tag" within ".product-view .list"
    And I should see "pnp h fact tag" within ".product-view .list"
    And I should see "pnp vw fact tag" within ".product-view .list"
    And I should see "pnp v fact tag" within ".product-view .list"
    And I should see "channel card" within ".product-view .list"
    And I should see "fact card" within ".product-view .list"
    And I should see "signage 1" within ".product-view .list"
    And I should see "signage 2" within ".product-view .list"
    And I should see "signage 3" within ".product-view .list"
    And I should see "signage 4" within ".product-view .list"
    And I should see "fixture 1" within ".product-view .list"
    And I should see "fixture 2" within ".product-view .list"
    And I should see "fixture 3" within ".product-view .list"
    And I should see "part 1" within ".product-view .list"
    And I should see "part 2" within ".product-view .list"
    And I should see "part 3" within ".product-view .list"
    And I should see "http://google.com" within ".product-view .list"
    And I should see "CATEGORIES: ACCESSORIES" within ".product-view .list"
