import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
      return this.store.findRecord('restaurant', params.restaurant_id);
  },

  actions: {
    addReview(params){
            var newReview = this.store.createRecord('review', params);
            var restaurant = params.restaurant;
            restaurant.get('reviews').addObject(newReview);
            newReview.save().then(function() {
              return question.save();
            });

            this.transitionTo('restaurant', restaurant.id);
      },
    }
});
