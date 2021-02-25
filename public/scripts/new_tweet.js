

$(document).ready(function() {
 
    $("#tweet-text").on('keyup', () => {

    
      let maxLen = $("#tweet-text").attr("maxLength");
      let charCount = $("#tweet-text").val().trim().length;
      let displayCount = maxLen - charCount;
      $("output").text(displayCount);

    });

});

document.addEventListener("dblclick", (event) => {
  console.log(event);
});