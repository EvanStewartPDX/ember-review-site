  import Ember from 'ember';

  export default Ember.Component.extend({

    isShowingModal: false,
     actions: {
       toggleModal() {
         this.toggleProperty('isShowingModal');
       },
       addReview() {
         var params = {
           content: this.get('content') ? this.get('content') : "",
           author: this.get('author ') ? this.get('author') : "",
           rating: this.get('rating') ? this.get('rating') : "",
           restaurant: this.get('restaurant')
         };
       this.set('isShowingModal', false);
       this.sendAction("addReview", params);
       this.set('content', "");
       this.set('author', "");
       this.set('review', "");
       }
     }

  });
