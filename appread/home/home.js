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
    /* var rantInput = document.getElementById('rantInput');
    var opacity = rantInput.style.opacity;
    
    function frame(){
      opacity = opacity - 0.1;
      rantInput.style.opacity = opacity;
      if (opacity === 0){
        clearInterval(id);
      }
      
      var id = setInterval(frame, 10);
      */
     // app.showNotification("here!","fadeRant");
      jQuery('#rantInput').animate({ opacity: 0.00 }, 2000);
    };
