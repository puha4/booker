import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('boardroom', params.boardroom_id);
    },

    setupController: function(controller, model) {
        this.store.findAll('employee').then(function(employees) {
            controller.set('employees', employees);
        });
        let appointment = {};
        let localAppointment = controller.get('localAppointment.appointment');

        if (localAppointment.boardroom === model.id) {
            appointment = localAppointment;
        }
        
        controller.set('boardroom', model);
        controller.set('appointment', appointment);
    }
});