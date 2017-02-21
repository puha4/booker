import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('boardroom', params.boardroom_id);
        // return Ember.RSVP.hash({
        //     boardroom: this.store.findRecord('boardroom', params.boardroom_id)
        //     // appointments: this.store.findRecord('appointment', params.boardroom_id, {include: 'all'})
        // });
    },

    setupController: function(controller, model) {
        controller.set('boardroom', model);



        this.store.query('appointment', {boardroom: model.id}).then(function(appointments) {
            controller.set('appointments', appointments);
        });



    }
});