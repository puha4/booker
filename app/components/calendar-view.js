import Ember from 'ember';

export default Ember.Component.extend({
    appointment : Ember.inject.service(),

    didInsertElement() {
        this._super(...arguments);

        let _this = this;

        $('#calendar').fullCalendar({
            events: [],
            displayEventEnd: true,
            timeFormat: 'H:mm',
            eventClick(calEvent, jsEvent, view) {
                _this.sendAction('action', calEvent.id);
            }
        });

        this.get('appointment').getAppointments(this.get('boardroom.id')).then((appointments) => {
            _this.showCalendar(appointments);
        });

    },

    didUpdateAttrs() {
        this._super(...arguments);

        let _this = this;
        this.get('appointment').getAppointments(this.get('boardroom.id')).then((appointments) => {
            _this.showCalendar(appointments);
        });
    },

    parseData(data) {
        return data.map(function(item){
            return {
                id: item.get('id'),
                title: item.get('specifics'),
                start: moment(item.get('bookedDateFrom')),
                end: moment(item.get('bookedDateTo'))
            };
        });
    },

    showCalendar(data) {
        var events = this.parseData(data);

        $('#calendar').fullCalendar('removeEvents');
        $('#calendar').fullCalendar('renderEvents', events, true);
    }
});