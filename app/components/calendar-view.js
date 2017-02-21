import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement: function(){
        $('#calendar').fullCalendar({
            events: [],
        });
    },

    // findModel: function(modelName){
    //     var controller 	= this.get('controllerContent');
    //     var results = this.store.find(modelName);
    //     controller.set('content', results);
    //
    //     var _self = this;
    //
    //     results.then(function(xhr){
    //         _self.showCalendar(xhr.content);
    //     });
    // },
    //
    // parseData: function(data){
    //     return $.map(data, function(item){
    //         return {
    //             title:item.get('label'),
    //             date: item.get('_data.date')
    //         }
    //     })
    // },
    //
    // showCalendar: function(data){
    //     var events = this.parseData(data);
    //
    //     $('#calendar').fullCalendar({
    //         events: events,
    //     });
    // }

    // willDestroyElement: function () {
    //     this.get('fullcalendar').stop();
    // },
    // actions: {
    //     stopCalendar: function () {
    //         this.get('fullcalendar').stop();
    //     }
    // }
});