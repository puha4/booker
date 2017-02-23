import Ember from 'ember';

export default Ember.Component.extend({
    showErrors: true,

    buttonLabel: function() {
        return (this.get('employee').id) ? 'Edit Employee' : 'Add Employee';
    }.property(),

    formTitle: function () {
        return (this.get('employee').id) ? 'Update employee' : 'Add new employee';
    }.property(),
    
    actions: {
        submit() {
            var _this = this;
            var model = this.get('employee');

            model.validate().then(() => {
                this.sendAction('action', model);
            }).catch(() => {
                _this.set('errors',model.get('errors'));
            });
        }
    }

});
