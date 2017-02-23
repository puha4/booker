import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteEmployee() {
            this.sendAction('action', this.get('employee'));
        }
    }
});
