import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
    firstName: DS.attr('string'),
    email: DS.attr(),

    validations: {
        firstName: {
            length: {minimum: 1, maximum: 50}
        },
        email: {
            format: {with: /.*@.*\..*/, message: "must be formatted like an email"}
        }
    }
});