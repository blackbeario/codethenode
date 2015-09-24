Template.Articles.onCreated ->
  @subscribe 'article', ->
  @filterQuery = new ReactiveVar({_id: {$ne: Meteor.userId()}})

Template.Articles.helpers
  articles: ->
    Articles.find(Template.instance().filterQuery.get(), {sort: {title: 1}})

  fields: ->
    ["title"]
