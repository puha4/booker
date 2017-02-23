import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('boardroom', params.boardroom_id);
    },

    setupController(controller, model) {
        let appointment = this.store.createRecord('appointment');
        let localAppointment = controller.get('localAppointment.appointment');

        if (+localAppointment.boardroom === +model.id) {
            appointment.employee = localAppointment.employee;
            appointment.boardroom = localAppointment.boardroom;
            appointment.bookedDate = moment(localAppointment.bookedDate);
            appointment.bookedDateFrom = moment(localAppointment.bookedDateFrom);
            appointment.bookedDateTo  = moment(localAppointment.bookedDateTo);
            appointment.specifics = localAppointment.specifics;
            appointment.recuming = localAppointment.recuming;
            appointment.recumingType = localAppointment.recumingType;
            appointment.recumingWeekOrMonthNumber = localAppointment.recumingWeekOrMonthNumber;
        }

        this.store.findAll('employee').then((employees) => {
            controller.set('employees', employees);
            appointment.employee = employees.get('firstObject').id;
        });

        if (appointment.recumingType === '' || appointment.recumingType === undefined || appointment.recumingType === null) {
            appointment.recumingType = 1;
        }
        
        controller.set('boardroom', model);
        controller.set('appointment', appointment);
    }
});