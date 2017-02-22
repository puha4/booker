import DS from 'ember-data';

export default DS.Model.extend({
    employee: DS.attr('number'),
    boardroom: DS.attr('number'),
    bookedDate: DS.attr('string'),
    bookedDateFrom: DS.attr('string'),
    bookedDateTo: DS.attr('string'),
    specifics: DS.attr('string'),
    recuming: DS.attr('boolean'),
    recumingType: DS.attr('number'),
    recumingWeekOrMonthNumber: DS.attr('number')
    
});