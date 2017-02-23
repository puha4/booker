import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model() {
        return this.store.findAll('employee');
    },
    
    actions: {
        createEmployee(employee) {
            var _this = this;

            employee.save()
                .then(function (employee) {
                    _this.transitionTo('employees.employee', employee);
                });
        },

        updateEmployee(employee) {
            var _this = this;

            employee.save()
                .then(function (employee) {
                    _this.transitionTo('employees.employee', employee);
                });
        },
        
        deleteEmployee(employee) {
            var _this = this;

            employee.destroyRecord()
                .then(function () {
                    _this.transitionTo('employees');
                });
        }
    }
});
