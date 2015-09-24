Template.ArticlesView.onCreated ->
  @subscribe 'article', Router.current().params._id

Template.ArticlesView.helpers
  article: ->
    Articles.findOne({_id: Router.current().params._id})

  title: -> Articles.findOne({_id: Router.current().params._id}).title
  body: -> Articles.findOne({_id: Router.current().params._id}).body.value
  image: -> Articles.findOne({_id: Router.current().params._id}).field_image.file.uri
  imageAlt: -> Articles.findOne({_id: Router.current().params._id}).field_image.alt
  tags: -> Articles.findOne({_id: Router.current().params._id}).field_tags.name
