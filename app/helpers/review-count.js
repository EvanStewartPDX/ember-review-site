import Ember from 'ember';

export function reviewCount(params) {
  var restaurant = params[0];

  if(restaurant.get('reviews').get('length') >= 0) {
    return Ember.String.htmlSafe(length);
  }
}

export default Ember.Helper.helper(reviewCount);
