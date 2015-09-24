# Roles:
# anonymous = 1
# authenticated = 2
# administrator = 3

@Users = Meteor.users

Users.helpers

  email: ->
    @emails?[0].address

  # firstName: ->
  #   @profile?.field_user_first_name?.und?[0].value
  #
  # lastName: ->
  #   @profile?.field_user_last_name?.und?[0].value
  #
  # realName: ->
  #   @firstName() + ' ' + @lastName()

  phoneNumber: ->
    @profile?.field_phone?.und?[0]?.value

  street: ->
    @profile?.field_user_street?.und?[0]?.value

  city: ->
    @profile?.field_user_city?.und?[0]?.value

  state: ->
    @profile?.field_user_state?.und?[0]?.value

  zip: ->
    @profile?.field_user_zip?.und?[0]?.value

  # objectiveStatuses: (additionalQuery)->
  #   storeIds = @profile.field_user_stores.und.map( (store)-> store.target_id )
  #   query = {"field_assigned_store.id": {$in: (if storeIds then storeIds else [] )}}
  #   query = _.extend(query, additionalQuery) if additionalQuery
  #   ObjectiveStatuses.find(query)
  #
  # objectivesCount: ->
  #   @objectiveStatuses().count()
  #
  # completed: ->
  #   @objectiveStatuses({field_completed: true}).count()
