// All custom.js

// Pseudocode Steps
// 1. Set a click event on the mobile menu icon
// 2. Once clicked demonstrate jQuery chaining
// 3. Finally demonstrate jQuery callback functions

// Wait until the document is loaded and is ready....
$('document').ready(function(){

  // Select the mobile menu icon, add a click event, trigger an alert
  $('#mobileMenu').click(function(){

    // This is called chaining
    // $('.daily-section').fadeOut(3000).hide(3000).hide(2000).show(2000);

    // This is a callback function pattern
    $('.daily-section').hide(3000, function(){
      $('.map-section').hide(3000, function(){
        $('.favourite-section').hide(3000, function(){
          // Final statement
          $('.footer-section').hide(3000);
        });
      });
    });

  });
  // Click function ENDS

});
// Document ready ENDS
