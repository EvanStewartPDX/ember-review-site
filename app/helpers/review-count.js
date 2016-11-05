import Ember from 'ember';

export function reviewCount(params) {
  console.log(params);
  var restaurant = params[0];
  var count = restaurant.get('reviews').get('length');

  // for (var i = 0; i <= .getrestaurant.reviews.length; i++ ) {
  //     count =+ i;
  // }
  return count;
}

export default Ember.Helper.helper(reviewCount);
