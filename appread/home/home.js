(function(){
  'use strict';

  // The Office initialize function must be run each time a new page is loaded
  Office.initialize = function(reason){
    jQuery(document).ready(function(){
      app.initialize();

      displayItemDetails();
    });
  };
  
  
    

  // Displays the "Subject" and "From" fields, based on the current mail item
  function displayItemDetails(){
    var item = Office.cast.item.toItemRead(Office.context.mailbox.item);
    jQuery('#subject').text(item.subject);

    var from;
    if (item.itemType === Office.MailboxEnums.ItemType.Message) {
      from = Office.cast.item.toMessageRead(item).from;
    } else if (item.itemType === Office.MailboxEnums.ItemType.Appointment) {
      from = Office.cast.item.toAppointmentRead(item).organizer;
    }

    if (from) {
      jQuery('#from').text(from.displayName);
      jQuery('#from').click(function(){
        app.showNotification(from.displayName, from.emailAddress);
      });
    }
  }
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
          jQuery('#rantInput').animate({opacity: 1.00, fontSize: originalSize },300);
        });
    };
   
