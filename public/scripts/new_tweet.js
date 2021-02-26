

$(document).ready(function() {
 
    $("#tweet-text").on('keyup', () => {

    
      const maxLen = 140;
      let charCount = $("#tweet-text").val().trim().length;
      let displayCount = maxLen - charCount;
      $("output").text(displayCount);
      if (displayCount < 0) {
        console.log(displayCount);
        $("output").css({'color':'red'})
      } else {
        $("output").css({'color':'#545149'})
      }
       

    });

    

});

