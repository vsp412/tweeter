//javascript file to manage the red scroll icon and its functionality

$(document).ready(function() {

  //the red scroll icon displays only when scrolled down, else, remains hidden
  $("#upScroll").hide();
  $(window).scroll(() => {
    if ($(window).scrollTop() > 0) {
      $("#upScroll").show();
    } else {
      $("#upScroll").hide();
    }
  }); 
  
  //red scroll icon when clicked, takes us back to the top of the page
  $("#upScroll").on('click', () => {
    $("html").animate({
      scrollTop: 0
    });
  });
});
