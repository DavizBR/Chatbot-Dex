$(document).ready(function() {
    // Function to send a message
    function sendMessage() {
      var message = $("#message-input").val();
      // Code to send the message to your server or handle it locally
      // ...
      // Code to display the message in the chat
      $("#chat-messages").append("<div class='message'>" + message + "</div>");
      // Clear the input field
      $("#message-input").val("");
    }
  
    // Event listener for the send button
    $("#send-button").click(function() {
      sendMessage();
    });
  
    // Event listener for pressing Enter key
    $("#message-input").keypress(function(event) {
      if (event.which === 13) {
        sendMessage();
      }
    });
  });
  