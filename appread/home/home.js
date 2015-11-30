(function(){
  'use strict';
  
  // The Office initialize function must be run each time a new page is loaded
  Office.initialize = function(reason){
    $(document).ready(function(){
      app.initialize();
      
      // When the user starts typing, clear all visible messages on the screen
      $('#rantInput').on('input', function() {
        clearMessages();
      });

    });
  };
})();

// Fades whatever the user wrote into "the void"
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
    }, 1200, function(){
      // Animation complete - show message
      $('#rantMessage').animate({opacity: 1.00},600);
      
      // Show input field again
      $('#rantInput').val('');
      $('#rantInput').animate({opacity: 1.00, fontSize: originalSize },600);
      
      updateRantCount();
    });
  }
};
 
 // Clears notification message and rant message   
 function clearMessages() {
   $("#rantMessage").css({ opacity: 0.0 });
   $('#notification-message').hide();
 }
 
 // Stores an updated count of the total number of rants this user has "screamed" into roaming settings
 // See https://msdn.microsoft.com/EN-US/library/office/fp123509.aspx#PersistRoamingSettingsMailApp
 function updateRantCount() {
   var settings = Office.context.roamingSettings;
   var rantCount = settings.get("rantCount");
   rantCount++;
   
   // Update UI with this value too
   app.showNotification("Number of rants",rantCount);
   settings.set("rantCount", rantCount);
   settings.saveAsync(saveSettingsCallback);
 }
 
// Saves all roaming settings.
function saveSettingsCallback(asyncResult) {
    if (asyncResult.status == Office.AsyncResultStatus.Failed) {
      
        // Handle the failure
        var err = asyncResult.error;
        app.showNotification("Failed to update Rant Count", err.name + ": " + err.message);
    }
} 
   
