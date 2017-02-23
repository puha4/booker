import Ember from 'ember';
import ValidationsEmployeeMixin from 'booker/mixins/validations/employee';
import { module, test } from 'qunit';

module('Unit | Mixin | validations/employee');

// Replace this with your real tests.
test('it works', function(assert) {
  let ValidationsEmployeeObject = Ember.Object.extend(ValidationsEmployeeMixin);
  let subject = ValidationsEmployeeObject.create();
  assert.ok(subject);
});
