import Ember from 'ember';

export default Ember.Service.extend({
    store: Ember.inject.service(),
        
    getAppointments(boardroom_id) {
        return this.get('store').query('appointment', {boardroom: boardroom_id});
    }
});
