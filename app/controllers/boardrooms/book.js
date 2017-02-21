import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        updateValue: function(value) {
            this.set('employee.id', value);
        },
        save() {
            console.log('save');
        }
    }
});