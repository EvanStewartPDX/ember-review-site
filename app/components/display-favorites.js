import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.inject.service('favorites-cart'),
  actions: {
    remove(product) {
      this.get('cart').remove(product);
    }
  }

});
