Meteor.startup ->

  Router.route 'Articles',
    path: '/articles'

  Router.route 'ArticlesView',
    path: '/article/:_id'
