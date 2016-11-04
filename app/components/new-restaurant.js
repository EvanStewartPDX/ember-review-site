import Ember from 'ember';

export default Ember.Component.extend({

  isShowingModal: false,
   actions: {
     toggleModal() {
       this.toggleProperty('isShowingModal');
     },
     addRestaurant() {
       var params = {
         name: this.get('name') ? this.get('name') : "",
         restaurant: this.get('restaurant') ? this.get('restaurant') : "",
         zip: this.get('zip') ? this.get('zip') : "",
         image: this.get('image') ? this.get('image') : "https://dummyimage.com/600x400/000/fff.png&text=??",
         type: this.get('type') ? this.get('type') : "",
       };
     this.set('isShowingModal', false);
     this.sendAction("addRestaurant", params);
     this.set('name', "");
     this.set('address', "");
     this.set('zip', "");
     this.set('image', "");
     this.set('type', "");
     }
   }

});
