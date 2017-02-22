import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.query('appointment', {boardroom: params.boardroom_id});
        // return this.store.findRecord('boardroom', params.boardroom_id);
    },

    setupController: function(controller, model) {
        controller.set('appointments', model);

        
        // this.store.query('appointment', {boardroom: model.id}).then(function(appointments) {
        //     controller.set('appointments', appointments);
        // });
    }
});