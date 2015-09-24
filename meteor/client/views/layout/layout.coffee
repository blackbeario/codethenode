# Client >> Layout > Main


Template.Layout.helpers
  isLogin: ->
    return Session.get 'isLogin'

  isHomepage: ->
    return Session.get 'isHomepage'
