import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('boardroom', params.boardroom_id);
    },

    setupController: function(controller, model) {
        controller.set('boardroom', model);
    },

    actions: {
        // eventClick(id) {
        //
        //     // this.transitionToRoute('boardrooms');
        // },

        renderModal: function(id) {
            var _this = this;

            this.store.findRecord('appointment', id)
                .then(function (appointment) {
                    _this.render('modals/event', {
                        into: 'boardrooms.boardroom',
                        outlet: 'modal',
                        model: appointment
                    });
                });
        },
        removeModal: function() {
            this.disconnectOutlet({
                outlet: 'modal',
                parentView: 'boardrooms.boardroom'
            });
        }
    }
});