var IndexRoute = Ember.Route.extend({
  redirect: function() {
    var params = Ember.Router.QueryParameters.create({ pricing: 'any', license: 'any', format: 'any' });
    this.transitionTo('search', params);
  }
});

module.exports = IndexRoute;

