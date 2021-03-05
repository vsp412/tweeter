//javascript file to manage the red scroll icon and its functionality

$(document).ready(function() {
  $("#upScroll").hide();
  $(window).scroll(() => {
    if ($(window).scrollTop() > 0) {
      $("#upScroll").show();
    } else {
      $("#upScroll").hide();
    }
  }); 
    
  $("#upScroll").on('click', () => {
    $("html").animate({
      scrollTop: 0
    });
  });
});
