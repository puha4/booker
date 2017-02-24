import Ember from 'ember';

const eq = (params) => {
    let selected = (params[0] === params[1]) ? 'selected' : '';

    return selected;
};

export default Ember.Helper.helper(eq);