import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  address: DS.attr(),
  zip: DS.attr(),
  image: DS.attr()
});
