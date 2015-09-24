Meteor.methods
  'getArticles': ->
    return Articles.find()

  'getArticle': (id) ->
    return Articles.findOne { _id: id }
