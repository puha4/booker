import Ember from 'ember';

export default Ember.Component.extend({
    appointment : Ember.inject.service(),

    didInsertElement() {
        this._super(...arguments);

        let _this = this;

        $('#calendar').fullCalendar({
            events: [],
            eventClick(calEvent, jsEvent, view) {
                _this.sendAction('action', calEvent.id);
            }
        });

        this.get('appointment').getAppointments(this.get('boardroom').id).then(function (appointments) {
            console.log(appointments.get('firstObject').id);
            _this.showCalendar(appointments);
        });

    },

    didUpdateAttrs() {
        this._super(...arguments);

        let _this = this;
        this.get('appointment').getAppointments(this.get('boardroom').id).then(function (appointments) {
            _this.showCalendar(appointments);
        });
    },

    parseData: function(data){
        return data.map(function(item){
            return {
                id: item.get('id'),
                title:item.get('specifics'),
                start: item.get('bookedDateFrom'),
                end: item.get('bookedDateTo')
            };
        });
    },

    showCalendar: function(data){
        var events = this.parseData(data);

        $('#calendar').fullCalendar('removeEvents');
        $('#calendar').fullCalendar('renderEvents', events, true);
    }
});