# Homepage
Template.Homepage.onCreated ->
  Session.set 'isHomepage', true

Template.Homepage.onDestroyed ->
  Session.set 'isHomepage', false

# News
Template.HomepageNews.onCreated ->
  @subscribe 'articles'
  IonSideMenu.snapper?.disable()

Template.HomepageNews.onDestroyed ->
  IonSideMenu.snapper?.enable()

Template.HomepageNews.helpers
  articles: ->
    Articles.find(Template.instance().filterQuery.get(), {sort: {title: 1}})
