import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Controller.extend({
    localAppointment: storageFor('appointment'),
    millisecondsInTwoHoursOffset: 7200000,
    showErrors: true,

    actions:{
        updateEmployeeValue(value) {
            let appointment = this.get('appointment');
            appointment.employee = value;
            
            this.saveLocalAppointment(appointment);
        },

        updateRecumingType(value) {
            let appointment = this.get('appointment');
            appointment.recumingType = value;

            this.saveLocalAppointment(appointment);
        },

        submit(appointment) {
            var _this = this;
            
            appointment.bookedDate = appointment.bookedDate.format("YYYY-MMM-DD HH:mm");
            appointment.bookedDateFrom = appointment.bookedDateFrom.format("YYYY-MMM-DD HH:mm");
            appointment.bookedDateTo = appointment.bookedDateTo.format("YYYY-MMM-DD HH:mm");

            appointment.validate().then(() => {
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
            let boardroomId = this.get('boardroom').id;
            let appointment = this.get('appointment');

            appointment.boardroom = boardroomId;

            this.saveLocalAppointment(appointment);
        },

        saveBookedDate(date) {
            let appointment = this.get('appointment');
            appointment.bookedDate = date;

            this.saveLocalAppointment(appointment);
        },

        saveBookedDateFrom(date) {
            let appointment = this.get('appointment');

            let bookedDateTimestamp = moment(appointment.bookedDate).valueOf();
            let bookedDateFromTimestamp = moment(date).valueOf();

            let fullDateTimestamp = bookedDateTimestamp + bookedDateFromTimestamp + this.get('millisecondsInTwoHoursOffset');

            appointment.bookedDateFrom = moment(fullDateTimestamp);

            this.saveLocalAppointment(appointment);
        },

        saveBookedDateTo(date) {
            let appointment = this.get('appointment');

            let bookedDateTimestamp = moment(appointment.bookedDate).valueOf();
            let bookedDateFromTimestamp = moment(date).valueOf();

            let fullDateTimestamp = bookedDateTimestamp + bookedDateFromTimestamp + this.get('millisecondsInTwoHoursOffset');

            appointment.bookedDateTo = moment(fullDateTimestamp);

            this.saveLocalAppointment(appointment);
        }
    },

    saveLocalAppointment(appointment) {
        this.set('localAppointment.appointment', appointment);
    }
});