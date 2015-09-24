@Articles = new Meteor.Collection 'article'

DrupalDdp.registerType('article', Articles) if Meteor.isServer
