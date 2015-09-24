Template.Profile.onCreated ->
  userId = Router.current().params._id

Template.Profile.helpers
  user: ->
    Users.findOne({_id: Router.current().params._id})
