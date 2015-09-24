# Client >> Account > Login

Template.AccountLogin.onRendered ->

Template.AccountLogin.onCreated ->
  Session.set 'isLogin', true

Template.AccountLogin.onDestroyed ->
  Session.set 'isLogin', false

Template.AccountLogin.events
  'submit form.login-form': (evt) ->
    evt.preventDefault()
    loginForm = $ evt.currentTarget

    username = Validators.trimInput(
      loginForm.find('.username').val().toLowerCase())

    password = loginForm.find('.password').val()

    Validators.blockForm loginForm

    if Validators.isNotEmpty(username) and
       Validators.isLongEnough(username, 3) and
       Validators.isNotEmpty(password) and
       Validators.isValidPassword(password)

      Meteor.loginWithPassword username, password, (err) ->
        if err
          Validators.rumble loginForm

        else
          Validators.unblockForm loginForm

    else
      Validators.rumble loginForm
