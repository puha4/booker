import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
    employee: DS.attr('number'),
    boardroom: DS.attr('number'),
    bookedDate: DS.attr('string'),
    bookedDateFrom: DS.attr('string'),
    bookedDateTo: DS.attr('string'),
    specifics: DS.attr('string'),
    recuming: DS.attr('boolean'),
    recumingType: DS.attr('number'),
    recumingWeekOrMonthNumber: DS.attr('number'),

    validations: {
        bookedDate: {
            presence: true,
            length: {minimum: 1, maximum: 50}
        },
        bookedDateFrom: {
            presence: true,
        },
        bookedDateTo: {
            presence: true
        },
        specifics: {
            presence: true,
            length: { minimum: 5 }
        }
    }
    
});