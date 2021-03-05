//file for managing the action when the right side of the nav bar is clicked

$(document).ready(function() {

  $("#rightSideOfNav").on('click', () => {
    $(".new-tweet").slideToggle(1000);
  });

});
