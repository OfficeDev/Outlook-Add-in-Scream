(function(){
  'use strict';

  // The Office initialize function must be run each time a new page is loaded
  Office.initialize = function(reason){
    jQuery(document).ready(function(){
      app.initialize();
      jQuery('#rantInput').on('input', function() {
        clearMessages();
      });
    });
  };
})();

function fadeRant(){
  // Make sure the message shown after a rant it cleared
  clearMessages();
  
  // Only post if rant message is not empty
  if ($('#rantInput').val() == ''){
    app.showNotification("Nothing to scream","Enter your feelings in the text field before hitting the scream button.");
  }
  else {
  // Store the font size I started with, since I am going to revert to it
  var originalSize = jQuery('#rantInput').css('fontSize');
  
  $('#rantInput').animate({ 
    opacity: 0.00,
    fontSize: "1px"
    }, 1500, function(){
      // Animation complete - show message
      $('#rantMessage').animate({opacity: 1.00},500);
      
      // Show input field again
      $('#rantInput').val('');
      $('#rantInput').animate({opacity: 1.00, fontSize: originalSize },500);
    });
  }
};
    
 function clearMessages() {
   $("#rantMessage").css({ opacity: 0.0 });
   $('#notification-message').hide();
 }
   
