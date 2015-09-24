# Router > Configure


Router.configure
  layoutTemplate: 'Layout'
  loadingTemplate: 'Loading'

  load: ->
    $('body').animate { scrollTop: 0 }, 400
    this.next()


# Router > Plugins

Router.plugin 'auth'
