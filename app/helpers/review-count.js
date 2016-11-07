import Ember from 'ember';

export function reviewCount(params) {
  console.log(params);
  var restaurant = params[0];
  var count = restaurant.get('reviews').get('length');

  return count;
}

export default Ember.Helper.helper(reviewCount);
