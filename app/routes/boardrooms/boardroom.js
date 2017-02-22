import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('boardroom', params.boardroom_id);
    },

    setupController: function(controller, model) {
        controller.set('boardroom', model);
    }
});