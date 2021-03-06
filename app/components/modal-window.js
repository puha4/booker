import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        save() {
            this.$('.modal').modal('hide');
            this.sendAction('save');
        }
    },
    show: function() {
        this.$('.modal').modal().on('hidden.bs.modal', function() {
            this.sendAction('close');
        }.bind(this));
    }.on('didInsertElement')
});