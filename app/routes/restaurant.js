import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
      return this.store.findRecord('restaurant', params.restaurant_id);
  },

  actions: {
    addReview(params){
    var newReview = this.store.createRecord('review', params);
    var restaurant = params.restaurants;
    restaurant.get('reviews').addObject(newReview);
    newReview.save().then(function() {
      return restaurant.save();
    });

    this.transitionTo('restaurant', restaurant);
},
// showMap(restaurant) {
//   var container = this.$('.map-display')[0];
//   var options = {
//     center: this.get('map').center(restaurant.get('address'), restaurant.get('zip')),
//     zoom: 15
//
//   };
//   map = this.get('map').findMap(container, options);
//     }
  }
});
