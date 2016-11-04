import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
  showMap(restaurant) {
    var container = this.$('.map-display')[0];
    var options = {
    center: this.get('map').center(rental.get('address'), rental.get('zip')),
      zoom: 15
    };
    this.get('map').findMap(container, options);
    }
  }
});
