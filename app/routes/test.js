import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        console.log("model");
        // return this.get('store').findAll('boardroom');
        return [
            {
                title: 'fdfdfdf'
            },
            {
                title: 'hghhhhh'
            }
        ];
    }
});
