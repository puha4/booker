import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model() {
        return this.store.findAll('employee');
    },
    
    actions: {
        createEmployee(employee) {
            var _this = this;

            var errors = _this.controllerFor('employees.new').get('errors');

            employee.save()
                .then((employee) => {
                    _this.transitionTo('employees.employee', employee);
                })
                .catch((response) => {
                        console.log(response);
                    // console.log(Ember.$.parseJSON(response));
                        // .forEach(function (error) {
                        //     console.log(error);
                        // });
                });
        },

        updateEmployee(employee) {
            var _this = this;

            employee.save()
                .then((employee) => {
                    _this.transitionTo('employees.employee', employee);
                });
        },
        
        deleteEmployee(employee) {
            var _this = this;

            employee.destroyRecord()
                .then(() => {
                    _this.transitionTo('employees');
                });
        }
    }
});
