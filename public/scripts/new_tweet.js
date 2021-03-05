

$(document).ready(function() {
 
    $("#tweet-text").on('keyup', () => {

    
      const maxLen = 140;
      let charCount = $("#tweet-text").val().length;
      let displayCount = maxLen - charCount;
      

      
      
      if (displayCount < 0) {
       
        $("output").css({'color':'red'});
      } else {
        $("output").css({'color':'#545149'});
      }

      if (displayCount % 5 === 0) {
      
        $("#tweet-text").append('<br>');
      }



      $("output").text(displayCount);
        
    });

    

});

