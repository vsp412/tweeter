//file for managing the action when the right side of the nav bar is clicked. 
$(document).ready(function() {
  //the tweet input box opens and closes on click of the button on top right side of the nav bar.
  $("#rightSideOfNav").on('click', () => {
    $(".new-tweet").slideToggle(1000);
  });
});
