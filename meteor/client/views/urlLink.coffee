Template.urlLink.events
  'click .urlLink': (e, t) ->
    event.preventDefault()
    ref = window.open(this.href, "_blank", "enableViewportScale=yes")
    