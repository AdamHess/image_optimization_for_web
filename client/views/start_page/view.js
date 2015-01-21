'use strict';
define(['marionette',
		'handlebars',	
        'jquery',
		'text!./template.html'], 
    function(Marionette,
    		 Handlebars,
             $,             
    		 StartPageTemplate
          ) {

    var StartPage = Marionette.LayoutView.extend({
       template: Handlebars.compile(StartPageTemplate),
       events: {
            'click #create_thumbnails_btn': 'displayThumbnailOptions',
            'click #optimize_images_btn': 'displayImageOptimOptions'
       },
       displayImageOptimOptions: function() {
            this.displayOnlyThisButtonActive('#optimize_images_btn');

       },
       displayThumbnailOptions: function() {
            this.displayOnlyThisButtonActive('#create_thumbnails_btn');

       },
       displayOnlyThisButtonActive: function(button_id) {
            var form_options = this.$el.find('.form_option');
            form_options.each(function() {
                $(this).removeClass('active');
            });
            this.$el.find(button_id).addClass('active');

       }

    });

    return StartPage;
});