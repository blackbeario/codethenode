Meteor.publish 'article', (tid, tagname) ->
  Articles.find({status: '1'}, sort: {title: 1}, {$and: [
    {field_tags: {$elemMatch: {'tid': tid}}},
    {'field_tags.name': tagname}
  ]}, fields: {title: 1, body: 1, field_tags: 1, field_image: 1})

Meteor.publish 'user', (userId) ->
  user = Users.findOne({_id: this.userId})
