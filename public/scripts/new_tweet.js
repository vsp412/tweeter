

$(document).ready(function() {
 
  
  

    $("#tweet-text").on('keyup', () => {

    
      let maxLen = $("#tweet-text").attr("maxLength");
      let charCount = $("#tweet-text").val().length;
      let displayCount = maxLen - charCount;
      $("output").text(displayCount);

    });

  
      
  

});