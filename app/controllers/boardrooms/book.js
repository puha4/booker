import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Controller.extend({
    localAppointment: storageFor('appointment'),
    millisecondsInTwoHoursOffset: 7200000,

    actions:{
        updateEmployeeValue(value) {
            let appointment = this.get('appointment');
            appointment.employee = value;
            
            this.set('localAppointment.appointment', appointment);
        },
        
        submit(appointment) {
            console.log(appointment);
            var _this = this;
            
            appointment.save()
                .then(function (appointment) {
                    _this.set('localAppointment.appointment', {});
                    _this.transitionToRoute('boardrooms.boardroom', _this.get('boardroom').id);
                });
        },

        saveToLocal() {
            console.log('save to local fired');
            let boardroomId = this.get('boardroom').id;
            let appointment = this.get('appointment');

            appointment.boardroom = boardroomId;

            this.set('localAppointment.appointment', appointment);
        },

        saveBookedDate(date) {
            let appointment = this.get('appointment');
            appointment.bookedDate = date.format("YYYY-MM-DD HH:mm");

            this.set('localAppointment.appointment', appointment);
        },

        saveBookedDateFrom(date) {
            let appointment = this.get('appointment');

            let bookedDateTimestamp = moment(appointment.bookedDate).valueOf();
            let bookedDateFromTimestamp = moment(date).valueOf();

            let fullDateTimestamp = bookedDateTimestamp + bookedDateFromTimestamp + this.get('millisecondsInTwoHoursOffset');

            appointment.bookedDateFrom = moment(fullDateTimestamp).format("YYYY-MM-DD HH:mm");

            this.set('localAppointment.appointment', appointment);
        },

        saveBookedDateTo(date) {
            let appointment = this.get('appointment');

            let bookedDateTimestamp = moment(appointment.bookedDate).valueOf();
            let bookedDateFromTimestamp = moment(date).valueOf();

            let fullDateTimestamp = bookedDateTimestamp + bookedDateFromTimestamp + this.get('millisecondsInTwoHoursOffset');

            appointment.bookedDateTo = moment(fullDateTimestamp).format("YYYY-MM-DD HH:mm");

            this.set('localAppointment.appointment', appointment);
        }
    }
});