import DS from 'ember-data';

export default DS.Model.extend({
    firstname: DS.attr(),
    email: DS.attr()
});