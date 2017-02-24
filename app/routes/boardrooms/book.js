import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('boardroom', params.boardroom_id);
    },

    setupController(controller, model) {
        let appointment = this.store.createRecord('appointment');
        let localAppointment = controller.get('localAppointment.appointment');

        if (+localAppointment.boardroom === +model.id) {
            appointment.set('employee', localAppointment.employee);
            appointment.set('boardroom', localAppointment.boardroom);
            appointment.set('bookedDate', moment(localAppointment.bookedDate));
            appointment.set('bookedDateFrom', moment(localAppointment.bookedDateFrom));
            appointment.set('bookedDateTo', moment(localAppointment.bookedDateTo));
            appointment.set('specifics', localAppointment.specifics);
            appointment.set('recuming', localAppointment.recuming);
            appointment.set('recumingType', localAppointment.recumingType);
            appointment.set('recumingWeekOrMonthNumber', localAppointment.recumingWeekOrMonthNumber);
        }

        this.store.findAll('employee').then((employees) => {
            controller.set('employees', employees);

            let employee = appointment.get('employee');
            if (employee === '' || employee === undefined || employee === null) {
                appointment.set('employee', employees.get('firstObject.id'));
            }

        });

        let recumingType = appointment.get('recumingType');

        if (recumingType === '' || recumingType === undefined || recumingType === null) {
            appointment.set('recumingType', 1);
        }
        
        controller.set('boardroom', model);
        controller.set('appointment', appointment);
    }
});