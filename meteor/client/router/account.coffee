Meteor.startup ->

  Router.route 'login',
    template: 'AccountLogin'
    path: '/login'

  Router.route 'Profile',
    path: '/profile/:_id'
