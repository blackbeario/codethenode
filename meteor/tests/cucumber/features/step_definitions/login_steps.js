(function () {

  'use strict';

  module.exports = function () {

    var url = require('url');
    var rep_username = "rep";
    var password = "password1";


    this.Then(/^I should see login screen$/, function (callback) {
      this.client.waitForVisible('.ionic-body')
        .isVisible('#login-username').should.become(true).and
        .isVisible('#login-password').should.become(true).and
        .isVisible('button[type="submit"]').should.become(true).and
        .notify(callback);
    });

    this.When(/^I enter correct authentication information$/, function (callback) {
      this.client.waitForVisible('#login-username')
        .setValue('#login-username', rep_username)
        .setValue('#login-password', password)
        .click('button[type="submit"]')
        .then(callback);
    });

    this.When(/^I enter incorrect authentication information$/, function (callback) {
      this.client.waitForVisible('#login-username')
        .setValue('#login-username', 'incorrect user')
        .setValue('#login-password', 'wrong password')
        .click('#login-form')
        .call(callback);
    });

    this.Then(/^I should be logged in$/, function (callback) {
      this.client.waitForVisible('* body')
        .isVisible('.homepage-menu')
        .call(callback);
    });

    this.Then(/^I should not be logged in$/, function (callback) {
      this.client.waitForVisible('* body')
        .isVisible('#login-username')
        .call(callback);
    });

  };

})();
