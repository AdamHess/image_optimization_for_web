'use strict';
define(['marionette',
		'handlebars',	
		'text!./template.html'], 
    function(Marionette,
    		 Handlebars,
    		 StartPageTemplate
          ) {

    var StartPage = Marionette.LayoutView.extend({
       template: Handlebars.compile(StartPageTemplate),
    });

    return StartPage;
});