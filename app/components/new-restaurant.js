import Ember from 'ember';

export default Ember.Component.extend({

showRestaurantForm: false,
actions: {
showRestaurantForm() {
  this.set('showRestaurantForm', true);
},
saveRestaurant() {
  var params = {
      name: this.get('name'),
      address: this.get('address'),
      zip: this.get('zip'),
      image: this.get('image'),
      type: this.get('type')
      };
      this.set('showRestaurantForm', false);
      this.set('name', null);
      this.set('address', null);
      this.set('zip', null);
      this.set('image', null);
      this.set('type', null);

      this.sendAction('addRestaurant', params);
    }
  }

});
