import Ember from 'ember';

export default Ember.Service.extend({

  restaurants: [],

  add(restaurant) {
    this.get('restaurants').pushObject(restaurant);
  },
  includes(restaurant) {
    return this.get('restaurants').includes(restaurant);
  },

  remove(restaurant) {
    this.get('restaurants').removeObject(restaurant);
  }
});
