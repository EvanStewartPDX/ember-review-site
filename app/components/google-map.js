import Ember from 'ember';
var map;
export default Ember.Component.extend({

actions: {
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
