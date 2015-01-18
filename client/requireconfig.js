require.config({
    map: {
        '*': {
            'css': 'bower_components/require-css/css', //Allows loading css with requirejs
            'text': 'bower_components/text/text' //loading files as text (such as .html or txt files)
        }
    },
    paths: {
        'jquery': 'bower_components/jquery/dist/jquery',
        'handlebars': 'bower_components/handlebars/handlebars',
        'underscore': 'bower_components/underscore/underscore',
        'backbone': 'bower_components/backbone/backbone',
        'backbone.wreqr': 'bower_components/backbone.wreqr/lib/backbone.wreqr'
        'backbone.babysitter': 'bower_components/backbone.babysitter/lib/backbone.babysitter',
        'marionette': 'bower_components/marionette/lib/backbone.marionette',


    },
    shim: {
        'jsuery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'handlebars': {
            exports: 'Handlebars'
        },
        'backbone': {
            exports: 'Backbone',
            deps: ['underscore', 'jquery']
        },
        'marionette': {
            exports: 'Marionette',
            deps: ['backbone', 'backbone.babysitter', 'backbone.wreqr']
        }
    }
});
