import Ember from 'ember';

export default Ember.Component.extend({
    appointment : Ember.inject.service(),

    didInsertElement() {
        this._super(...arguments);
        $('#calendar').fullCalendar({
            events: []
        });
        let _this = this;
        this.get('appointment').getAppointments(this.get('boardroom').id).then(function (appointments) {
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
                title:item.get('specifics'),
                start: item.get('bookedDateFrom'),
                end: item.get('bookedDateTo')
            };
        });
    },

    showCalendar: function(data){
        var events = this.parseData(data);
        console.log(events);

        $('#calendar').fullCalendar('removeEvents');
        $('#calendar').fullCalendar('renderEvents', events);
    }
});