var SearchRoute = Ember.Route.extend({
  observesParameters: ['pricing', 'license', 'format'],

  model: function() {
    console.log("Model was triggered");
    return Ember.Object.create(this.get('queryParameters'));
  },

  events: {
    apply: function() {
      var params = Ember.Router.QueryParameters.create(this.get('controller.model').getProperties('pricing', 'format', 'license'));
      this.transitionTo('search', params);
    }
  }
});

module.exports = SearchRoute;

