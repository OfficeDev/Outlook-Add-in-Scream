/*
 * Copyright (c) Microsoft.  All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global Office */
(function(){
  'use strict';
  // The Office initialize function must be run each time a new page is loaded.
  Office.initialize = function(reason){
    $(document).ready(function(){
      app.initialize();
      
      $('#rantButton').click(fadeRant);
      
      displayTotalRantCount();
      
      // When the user starts typing, clear all visible messages on the screen.
      $('#rantInput').on('input', function() {
        clearMessages();
      });

    });
  };
})();

// Fades whatever the user typed.
function fadeRant(){
    
  // Make sure the message shown after a rant it cleared.
  clearMessages();
  
  // Only post if rant message is not empty.
  if ($('#rantInput').val().trim() === ''){
    app.showNotification('Nothing to scream','Enter your feelings in the text field before hitting the scream button.');
  }
  else {
    // Store the font size you started with, since you're going to revert to it.
    var originalSize = $('#rantInput').css('fontSize');
    
    $('#rantInput').animate({ 
        opacity: 0.00,
        fontSize: '1px'
        }, 1200, function(){
        
        // Animation complete - show message
        $('#rantMessage').animate({opacity: 1.00},600);
        
        // Show input field again
        $('#rantInput').val('');
        $('#rantInput').animate({opacity: 1.00, fontSize: originalSize },600);
        
        incrementRantCount();
        displayTotalRantCount();
        });
  }
}
 
 // Clears notification message and rant message.  
 function clearMessages() {
    $('#rantMessage').css({ opacity: 0.0 });
    $('#notification-message').hide();
 }
 
 function getRantCount() {
    var settings = Office.context.roamingSettings;
    var count = settings.get('rantCount');
   
    // If rantCount has never been set, it'll be null.
    if (isNaN(parseInt(count))) {
        count = 0;
    }
    return count;
 }
 
  // Stores an updated count of the total number of rants this user has 'screamed' into roaming settings.
 // See https://msdn.microsoft.com/EN-US/library/office/fp123509.aspx#PersistRoamingSettingsMailApp
 function incrementRantCount() {
  
    var rantCount = getRantCount();
    rantCount++;
    var settings = Office.context.roamingSettings;
    settings.set('rantCount', rantCount);
    settings.saveAsync(saveSettingsCallback);
 }
 
 function displayTotalRantCount() {
    var total = getRantCount();
   
    $('#rantCountMessage').text('Total number of rants:' + ' ' + total);
 }
 
// Saves all roaming settings.
function saveSettingsCallback(asyncResult) {
    if (asyncResult.status === Office.AsyncResultStatus.Failed) {
      
        // Handle the failure
        var err = asyncResult.error;
        app.showNotification('Failed to update rant count', err.name + ': ' + err.message);
    }
} 
   
