(function() {
  'use strict';

  module.exports = function() {

    var url = require('url');

    this.Before(function(callback) {
      var self = this;
      this.server.call('reset')
        .then(function() {
          self.client.url(url.resolve(process.env.ROOT_URL, "/"))
            .call(callback);
        });
    });
  };
})();
