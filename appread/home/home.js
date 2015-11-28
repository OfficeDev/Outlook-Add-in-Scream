(function(){
  'use strict';

  // The Office initialize function must be run each time a new page is loaded
  Office.initialize = function(reason){
    jQuery(document).ready(function(){
      app.initialize();
    });
  };
})();

function fadeRant(){
      // Make sure the message shown after a rant it cleared
      jQuery("#rantMessage").css({ opacity: 0.0 });

      // Store the font size I started with, since I am going to revert to it
      var originalSize = jQuery('#rantInput').css('fontSize');
      
      jQuery('#rantInput').animate({ 
        opacity: 0.00,
        fontSize: "1px"
        }, 1500, function(){
          // Animation complete - show message
          jQuery('#rantMessage').animate({opacity: 1.00},500);
          
          // Bring back the rant from the void so that the user can see it
          jQuery('#rantInput').val("");
          jQuery('#rantInput').animate({opacity: 1.00, fontSize: originalSize },300);
        });
    };
   
