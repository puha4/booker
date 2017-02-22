import DS from 'ember-data';

export default DS.Model.extend({
    // employee: DS.belongsTo('employee', {async: true}),
    // boardroom: DS.attr('number'),
    bookedDate: DS.attr('date'),
    bookedDateFrom: DS.attr('date'),
    bookedDateTo: DS.attr('date'),
    specifics: DS.attr('string'),
    recuming: DS.attr('boolean'),
    recumingType: DS.attr('string'),
    recumingWeekOrMonthNumber: DS.attr('number')
});