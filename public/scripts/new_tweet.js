
//function to display character count in red and in negative if it exceeds 140 characters. 
const tweetBoxCharCount = function (data) {
  const maxLen = 140;
  let charCount = data.length;
  let displayCount = maxLen - charCount;
  if (displayCount < 0) {   
    $("output").css({'color':'red'});
  } else {
    $("output").css({'color':'#545149'});
  }
  $("output").text(displayCount); 
}

$(document).ready(function() {
    $("#tweet-text").on('keyup', () => {      
      tweetBoxCharCount($("#tweet-text").val());
    });
});

