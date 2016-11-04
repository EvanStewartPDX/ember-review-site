import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.inject.service('favorites-cart'),
  actions: {
  addToFavorites(restaurant) {
        this.get('cart').add(restaurant);
        console.log(restaurant);
        }
      }
});
