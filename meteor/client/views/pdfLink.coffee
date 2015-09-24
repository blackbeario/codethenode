Template.pdfLink.events
  'click .pdfLink': (e, t) ->
    event.preventDefault()
    ref = window.open(this.href, "_blank", "enableViewportScale=yes")
    Session.set "pdfOpen", true

    ref.addEventListener 'exit', ->
      Session.set "pdfOpen", false
      console.log("Orientation on exit from pdf is: " + window.orientation)
