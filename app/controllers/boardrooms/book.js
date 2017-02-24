import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Controller.extend({
    localAppointment: storageFor('appointment'),
    millisecondsInTwoHoursOffset: 7200000,
    showErrors: true,

    actions:{
        updateEmployeeValue(value) {
            let appointment = this.get('appointment');
            appointment.set('employee', value);
            
            this.saveLocalAppointment(appointment);
        },

        updateRecumingType(value) {
            let appointment = this.get('appointment');
            appointment.recumingType = value;

            this.saveLocalAppointment(appointment);
        },

        submit(appointment) {
            var _this = this;

            appointment.validate().then(() => {
                appointment.bookedDate = appointment.get('bookedDate').format("YYYY-MMM-DD HH:mm");
                appointment.bookedDateFrom = appointment.get('bookedDateFrom').format("YYYY-MMM-DD HH:mm");
                appointment.bookedDateTo = appointment.get('bookedDateTo').format("YYYY-MMM-DD HH:mm");
                
                appointment.save()
                    .then((appointment) => {
                        _this.set('localAppointment.appointment', {});
                        _this.transitionToRoute('boardrooms.boardroom', _this.get('boardroom').id);
                    });
            }).catch(() => {
                _this.set('errors',appointment.get('errors'));
            });
        },

        saveToLocal() {
            let appointment = this.get('appointment');
            appointment.set('boardroom', this.get('boardroom.id'));

            this.saveLocalAppointment(appointment);
        },

        saveBookedDate(date) {
            let appointment = this.get('appointment');
            appointment.set('bookedDate', date);

            this.saveLocalAppointment(appointment);
        },

        saveBookedDateFrom(date) {
            let appointment = this.get('appointment');

            let bookedDateTimestamp = moment(appointment.get('bookedDate')).valueOf();
            let bookedDateFromTimestamp = moment(date).valueOf();

            let fullDateTimestamp = bookedDateTimestamp + bookedDateFromTimestamp + this.get('millisecondsInTwoHoursOffset');

            appointment.set('bookedDateFrom', moment(fullDateTimestamp));

            this.saveLocalAppointment(appointment);
        },

        saveBookedDateTo(date) {
            let appointment = this.get('appointment');

            let bookedDateTimestamp = moment(appointment.get('bookedDate')).valueOf();
            let bookedDateFromTimestamp = moment(date).valueOf();

            let fullDateTimestamp = bookedDateTimestamp + bookedDateFromTimestamp + this.get('millisecondsInTwoHoursOffset');

            appointment.set('bookedDateTo', moment(fullDateTimestamp));

            this.saveLocalAppointment(appointment);
        }
    },

    saveLocalAppointment(appointment) {
        this.set('localAppointment.appointment', appointment);
    }
});