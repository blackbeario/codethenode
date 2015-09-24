(function () {

  'use strict';

  module.exports = function () {

    var url = require('url');

    this.Given(/^I am a new user$/, function () {
      return this.server.call('reset');
    });

    this.Given(/^I am signed out$/, function (callback) {
      this.client.executeAsync( function(done) {
        Meteor.logout(done);
      })
      .call(callback);
    });

    this.Given(/^I am signed in as "([^"]*)"$/, function (userType, callback) {
      this.client.executeAsync( function(userType, done) {
        Meteor.logout(done);
        Meteor.loginWithPassword(userType, "password1");
      }, userType)
      .waitForExist('h1.username')
      .waitForVisible('.product-library')
      .call(callback);
    });

    this.When(/^I click "([^"]*)"$/, function (selector, callback) {
      this.client.waitForVisible(selector)
        .click(selector)
        .waitForVisible('body *')
        .call(callback);
    });

    this.When(/^I navigate to "([^"]*)"$/, function (relativePath, callback) {
      this.client.url(url.resolve(process.env.ROOT_URL, relativePath))
      .waitForVisible('body *')
      .call(callback);
    });

    this.Then(/^I should see "([^"]*)" within "([^"]*)"$/, function (expectedText, selector, callback) {
      this.client.waitForVisible('body *')
        .getText(selector).should.eventually.contain(expectedText).and.notify(callback);
    });

    this.Then(/^I should see the element "([^"]*)"$/, function (selector, callback) {
      this.client.waitForVisible(selector)
      .call(callback);
    });

    this.Then(/^I should see the title "([^"]*)"$/, function (expectedTitle, callback) {
      this.client.waitForVisible('body *')
      .getTitle().should.become(expectedTitle).and.notify(callback);
    });

  };

})(); 
