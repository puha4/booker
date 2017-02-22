import Ember from 'ember';

export default Ember.Component.extend({

    appointment: Ember.inject.service('appointment'),

    didInsertElement() {
        this.showCalendar(this.get('appointments'));
    },

    didUpdateAttrs() {
        this.get('appointment').getAppointments();
        // console.log(this.get('appointments').get('firstObject').get('id'));
        // this._super(...arguments);
        // this.showCalendar(this.get('appointments'));
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

        $('#calendar').fullCalendar({
            events: events
        });
    }
});