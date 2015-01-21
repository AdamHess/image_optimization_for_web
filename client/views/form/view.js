'use strict';
define(['marionette',
		'handlebars',	
		'text!./template.html'], 
    function(Marionette,
    		 Handlebars,    
    		 FormTemplate
          ) {

    var FormView = Marionette.LayoutView.extend({
       template: Handlebars.compile(FormTemplate)
    });

    return FormView;
});