import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return Ember.RSVP.hash({
            boardroom: this.store.findRecord('boardroom', params.boardroom_id),
            employees: this.store.findAll('employee'),
            appointment: {}
        });
    }
});