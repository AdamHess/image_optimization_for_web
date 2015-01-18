'use strict';
define(['marionette',
        'bootstrap',
        './views/start_page/view'
    ],
    function(Marionette,
       Bootstrap,
        StartPage) {

        var App = Marionette.Application.extend({
            regions: {
                'viewport': '#main_viewport'
            },
            initialize: function() {
                this.viewport.show(new StartPage());

            }
        });


        var myApp = new App();
        myApp.start();

    });