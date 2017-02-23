import Ember from 'ember';

export default Ember.Component.extend({
    buttonLabel: function() {
        return (this.get('employee').id) ? 'Edit Employee' : 'Add Employee';
    }.property(),

    formTitle: function () {
        return (this.get('book').id) ? 'Update employee' : 'Add new employee';
    }.property(),
    
    actions: {
        submit: function () {            
            this.sendAction('action', this.get('employee'));
        }
    }

});
