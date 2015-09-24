# Client >> Helpers > Validators


class Validators
  trimInput: (value) ->
    return (if value? then value.replace /^\s*|\s*$/g, '' else value)


  isNotEmpty: (value) ->
    return if value? and value isnt '' then true else false


  isLongEnough: (value, length=30) ->
    return if value.length >= length then true else false


  isEmail: (value) ->
    filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    return if filter.test value then true else false


  isValidPassword: (value) ->
    return if value.length >= 3 then true else false


  areValidPasswords: (password, confirm) ->
    if not @isValidPassword password then return false

    return if password isnt confirm then false else false


  checkingInput: (selector, firstCondition, secondCondition, type) ->
    if not firstCondition
      selector.removeClass 'invalid'
      selector.removeClass type
    else if not secondCondition
      selector.addClass 'invalid'
      selector.removeClass type
    else
      selector.addClass type
      selector.removeClass 'invalid'

    return true


  blockForm: (selector) ->
    selector.find('*[type=submit]').attr 'disabled', true

    return true


  unblockForm: (selector, clear=false, remove=false) ->
    if clear is true
      selector[0].reset()

    if remove is true
      selector.find('input, textarea').removeClass 'invalid'

    selector.find('*[type=submit]').attr 'disabled', false
    return true


  redify: (selector) ->
    selector.find(
      'input[type=text], input[type=password], textarea').addClass 'invalid'
    return true


  rumble: (selector, color=false) ->
    selector.jrumble(
      x: 5
      y: 0
      rotation: 0
      speed: 25
      opacity: true
      opacityMin: 0.75
    ).trigger 'startRumble'

    setTimeout (-> selector.trigger('stopRumble')), 500

    if color is 'red' then @redify selector

    @unblockForm selector

    return true


  twinkling: (form, state) ->
    elems = form.find('input[type="text"], textarea, .tags')

    if state is 'success' then elems.addClass('success')
    else elems.addClass('invalid')

    Meteor.setTimeout  ->
      elems.removeClass('success').removeClass('invalid')
    , 500

    return true


@Validators = new Validators
