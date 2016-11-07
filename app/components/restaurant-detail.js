import Ember from 'ember';

export default Ember.Component.extend({


  cart: Ember.inject.service('favorites-cart'),
  actions: {
  addToFavorites(restaurant) {
        this.get('cart').add(restaurant);
        console.log(restaurant);
      },
      showMap(restaurant) {
        var container = this.$('.map-display')[0];
        var options = {
          center: this.get('map').center(restaurant.get('address'), restaurant.get('zip')),
          zoom: 15

        };
        map = this.get('map').findMap(container, options);
      }
  }
});
