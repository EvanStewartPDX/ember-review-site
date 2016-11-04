import Ember from 'ember';

export default Ember.Service.extend({
  googleMaps: window.google.maps,
  findMap(container, options) {
    return new this.googleMaps.Map(container, options);
  },
  center(address, zip) {
    return new this.googleMaps.address_type(address, zip);
  }
});
