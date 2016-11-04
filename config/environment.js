/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'restaurante',
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


    firebase: {
    apiKey: "AIzaSyA1KzTsbnjZJA0mWmfHZ8QnidST-dBM6Hs",
     authDomain: "restaurant-a0ece.firebaseapp.com",
     databaseURL: "https://restaurant-a0ece.firebaseio.com",
     storageBucket: "restaurant-a0ece.appspot.com"
  },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }


  };

  if (environment === 'development') {
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
