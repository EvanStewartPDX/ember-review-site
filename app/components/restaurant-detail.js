import Ember from 'ember';

export default Ember.Component.extend({
  fullAddress: Ember.computed('restaurant.address', 'restaurant.zip', function() {
    return this.get('restaurant.address') + ', ' + this.get('restaurant.zip');
  }),
  cart: Ember.inject.service('favorites-cart'),

  actions: {
  addToFavorites(restaurant) {
        this.get('cart').add(restaurant);
        console.log(restaurant);
      }
    }

});
