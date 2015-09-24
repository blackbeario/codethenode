Template.search.helpers

Template.search.events

  "keyup #search": (e, t) ->
    updateQuery = Template.instance().parentTemplate().filterQuery
    value = $(e.target).val()
    query = []
    fields = _.map this.fields, (field) ->
      obj = {}
      obj[field] = {$regex: ///#{value}///i}
      query.push(obj)
    query = {$or: query}
    updateQuery.set(query)
