//function to load up tweets in the display area from data storage
const renderTweets = function (tweets) {
  let tweetContainer = $(".tweets-display");
  for (let tweet of tweets) {
    const singleTweet = createTweetElement(tweet);
    tweetContainer.append(singleTweet);
  }
};

//function written in order to escape special characters, and interpret them purely as text, rather than part of a programming script. Implemented to prevent against SQL injection attacks.
const escape = function (str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

//converts miliseconds to integer days
const returnDays = function (timeMS) {
  let daysInMilisecs = new Date() - new Date(timeMS);
  let daysInteger = Math.ceil((daysInMilisecs) / (3600 * 24 * 1000));
  return daysInteger;
}

//returns "day" if 1 day has passed since tweet, else returns "days". 
const daysPlural = function (daysInteger) {
  if (daysInteger === 1) {
    return daysInteger + " day"
  } else {
    return daysInteger + " days";
  }
}

//creates one tweet, and renders it on the screen. accepts raw data as input and plugs it into the tweet body.
const createTweetElement = function (tweet) {
  let daysInteger = returnDays(tweet.created_at);
  let $tweet = '<article class = "tweetArticle">' +
    '<header id = "tweetHeads">' +
    '<div id = "userImgAndName">' +
    '<img src = ' + tweet.user.avatars + ' id = "userImg" />' +
    '<span id = "userName">' + tweet.user.name + '</span>' +
    '</div>' +

    '<div id = "userString">' +
    '<span>' + tweet.user.handle + '</span>' +
    '</div>' +
    '</header>' +

    '<p id = "userTweetContent">' +
    escape(tweet.content.text) +
    '</p>' +
    '<hr id = "userContentDivider">' +

    '<footer id = "tweetFoots">' +
    '<div id = "userTweetTimeAgo">' +
    
    '<span>' + daysPlural(daysInteger) + ' ago</span>' +
    '</div>' +

    '<div class = "userSocialActionSymbols">' +
    '<span class = "userSocialIcons"><i class="fa fa-flag"></i></span>' +
    '<span class = "userSocialIcons"><i class="fa fa-refresh"></i></span>' +
    '<span class = "userSocialIcons"><i class="fa fa-heart"></i></span>' +
    '</div>' +

    '</footer>' +
    '</article>';

  return $tweet;
}

//load tweets asynchronously onto page, in order of most recent on top.
const loadTweets = function () {
  $.ajax('/tweets', { method: 'GET' })
    .then(function (tweets) {
      tweets.sort((a, b) => {
        return b.created_at - a.created_at;
      });
      renderTweets(tweets)
  });
}

//when you create a tweet, this function pushes your tweet onto the display area asynchronously without page refresh. appears on top, being the most recent tweet.
const loadLatestTweet = function () {
  $.ajax('/tweets', { method: 'GET' })
    .then(function (tweets) {
      const singleTweet = createTweetElement(tweets[tweets.length - 1]);
      $('.tweets-display').prepend(singleTweet);
  });
}

//allows tweet to be stored into the database using a post request. resets the input tweet box back to normal thereafter.
const postTweets= function (tweet) {
  const tweetPost = $.ajax({
    url: '/tweets',
    method: 'POST',
    data: tweet
  });
  tweetPost.done(() => {
    //calls the function to render this newly created tweet onto the display area.
    loadLatestTweet();
    $("#tweet-text").val('');
    $("output").val('140');
  });
  tweetPost.fail(() => {
    console.log("Failed!");
  });
}

//tweet input validation is performed here. displays appropriate error messages if input is invalid. proceeds to creating tweet if no errors.
const validateTweet = function (data) {
  if (data.trim() === '') {
    $("#errorTweet1").slideDown();
    $("#errorTweet2").slideUp();
  } else if (data.trim().length > 140) {
    $("#errorTweet2").slideDown();
    $("#errorTweet1").slideUp();
  } else {
    $("#errorTweet2").slideUp();
    $("#errorTweet1").slideUp();
    const tweet = $("#tweetForm").serialize();
    //calls the function to create a tweet using post request
    postTweets(tweet);  
  }
}

$(document).ready(function () {
  //calls the function to populate the display area with tweets upon page load.
  loadTweets();
  $("#tweetForm").submit((event) => {
    event.preventDefault();
    //calls function to validate tweet box input.
    validateTweet($("#tweet-text").val()); 
  });
});
