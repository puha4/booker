/* jshint node: true */

module.exports = function(environment) {
  
  var ENV = {
    modulePrefix: 'booker',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
      ENV.API_URL = 'http://localhost:8000';
      ENV.API_CLIENT_ID = '1_436z4gfc3lesgkkoowoosgw8owkgck808cskg04cwkw4o0gwc4';
      ENV.API_CLIENT_SECRET = 'x6nqhx7lzi80ggc84ook8gcs0wk8ksos40ccgk4w4o48gc44c';

      ENV['simple-auth'] = {
          crossOriginWhitelist:['http://localhost:8000']
      };

    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
