import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.createRecord('employee');
    },

    setupController(controller, model) {
        controller.set('employee', model);
    },
    
    actions: {
        
    }
});