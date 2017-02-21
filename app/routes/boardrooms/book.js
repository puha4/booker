import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('boardroom', params.boardroom_id);
    },

    setupController: function(controller, model) {
        this.store.findAll('employee').then(function(employees) {
            controller.set('employees', employees);
        });
        let localAppointment = controller.get('localAppointment.appointment');
        
        controller.set('boardroom', model);
        controller.set('appointment', localAppointment);
    }
});