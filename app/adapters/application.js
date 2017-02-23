import DS from 'ember-data';
import config from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
    host: config.API_URL,
    authorizer: 'authorizer:oauth2-bearer'

    // handleResponse(status, headers, payload, requestData) {
    //     if (status === 400 && payload.errors) {
    //         return new DS.InvalidError(payload.errors);
    //     }
    //
    //     return this._super(...arguments);
    // }
});