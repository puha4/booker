import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('boardroom', params.boardroom_id);
    },

    setupController(controller, model) {
        controller.set('boardroom', model);
    },

    actions: {
        // eventClick(id) {
        //
        //     // this.transitionToRoute('boardrooms');
        // },

        renderModal(id) {
            var _this = this;

            this.store.findRecord('appointment', id)
                .then((appointment) => {
                    _this.render('modals/event', {
                        into: 'boardrooms.boardroom',
                        outlet: 'modal',
                        model: appointment
                    });
                });
        },
        removeModal() {
            this.disconnectOutlet({
                outlet: 'modal',
                parentView: 'boardrooms.boardroom'
            });
        }
    }
});