import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Controller.extend({
    localAppointment: storageFor('appointment'),

    actions:{
        updateValue: function(value) {
            this.set('employee.id', value);
        },
        
        save() {
            console.log('save');
        },

        saveToLocal() {
            this.set('localAppointment.appointment', this.get('appointment'));
        }
    }
});