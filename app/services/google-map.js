import Ember from 'ember';

export default Ember.Service.extend({

actions: {
  googleMaps: window.google.maps,
  findMap(container, options) {
    return new this.googleMaps.Map(container, options);
  },
  center(address, zip) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': address+', '+zip}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {

         return map.setCenter(results[0].geometry.location);

         var marker = new google.maps.Marker({
              map: this.googleMaps,
              position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
      return new this.googleMaps.address(address, zip);
    });
  }
}
});
