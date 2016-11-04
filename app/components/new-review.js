  import Ember from 'ember';

  export default Ember.Component.extend({

    isShowingModal: false,
     actions: {
       toggleModal() {
         this.toggleProperty('isShowingModal');
       },
       addReview() {
         var params = {
           content: this.get('content'),
           author: this.get('author'),
           rating: this.get('rating'),
           restaurants: this.get('restaurant'),


         };
       this.set('isShowingModal', false);
       this.sendAction("addReview", params);
       this.set('content', "");
       this.set('author', "");
       this.set('taring', "");
       }
     }

  });
