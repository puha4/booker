import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteEmployee: function () {
            this.sendAction('action', this.get('employee'));
        }
    }
});
