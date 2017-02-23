import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import config from '../config/environment';

export default OAuth2PasswordGrant.extend({
    serverTokenEndpoint: config.API_URL + '/oauth/v2/token',

    makeRequest(url, data) {
        data.client_id = config.API_CLIENT_ID;
        data.client_secret = config.API_CLIENT_SECRET;

        return this._super(url, data);
    }
});