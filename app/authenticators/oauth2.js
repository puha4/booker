import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import config from '../config/environment';

export default OAuth2PasswordGrant.extend({
    serverTokenEndpoint: 'http://localhost:8000/oauth/v2/token',

    makeRequest: function(url, data) {
        data.client_id = '1_sifhznfzcdckwkc084kkwkowc4gccgs44cko0gcos8ccgg84w';
        data.client_secret = '4jn45su4f3qcs0cs8kwowc88ggwwwkcsocscc0w0ggo0o0wc80';

        return this._super(url, data);
    }
});