import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('boardroom', params.boardroom_id);
    },

    setupController: function(controller, model) {
        let appointment = this.store.createRecord('appointment');
        let localAppointment = controller.get('localAppointment.appointment');

        if (localAppointment.boardroom === model.id) {
            appointment = localAppointment;
        }

        this.store.findAll('employee').then(function(employees) {
            controller.set('employees', employees);
            appointment.employee = employees.get('firstObject').id;
        });
        
        controller.set('boardroom', model);
        controller.set('appointment', appointment);
    }
});