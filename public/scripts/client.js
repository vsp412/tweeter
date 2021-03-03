$(document).ready(function () {


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


  $("#rightSideOfNav").on('click', () => {
    $(".new-tweet").slideToggle(1000);
  });

  const renderTweets = function (tweets) {

    let tweetContainer = $(".tweets-display");
    for (let tweet of tweets) {
      const singleTweet = createTweetElement(tweet);
      tweetContainer.append(singleTweet);
    }
  };

  const escape = function (str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  const createTweetElement = function (tweet) {
    var daysInMilisecs = new Date() - new Date(tweet.created_at);
    var daysInteger = Math.ceil((daysInMilisecs) / (3600 * 24 * 1000))
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
      '<span>' + daysInteger + (daysInteger === 1 ? ' day' : ' days') + ' ago</span>' +
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

  const loadTweets = function () {
    $.ajax('/tweets', { method: 'GET' })
      .then(function (tweets) {
        tweets.sort((a, b) => {
          return b.created_at - a.created_at;
        });
        renderTweets(tweets)

      });
  }

  loadTweets();

  const loadLatestTweet = function () {
    $.ajax('/tweets', { method: 'GET' })
      .then(function (tweets) {
        const singleTweet = createTweetElement(tweets[tweets.length - 1]);
        $('.tweets-display').prepend(singleTweet);
      });
  }


  $("#tweetForm").submit((event) => {
    event.preventDefault();
    if ($("#tweet-text").val().trim() === '') {

      $("#errorTweet1").slideDown();
      $("#errorTweet2").slideUp();



    } else if ($("#tweet-text").val().trim().length > 140) {

      $("#errorTweet2").slideDown();
      $("#errorTweet1").slideUp();



    } else {
      $("#errorTweet2").slideUp();
      $("#errorTweet1").slideUp();
      const tweet = $("#tweetForm").serialize();
      console.log(tweet);
      const tweetPost = $.ajax({
        url: '/tweets',
        method: 'POST',
        data: tweet
      });

      tweetPost.done(() => {

        console.log("ok");
        loadLatestTweet();
        // const singleTweet = createTweetElement(tweet);
        // $('.tweets-display').append(singleTweet);
        // $('.tweets-display').html('');
        // loadTweets();
        $("#tweet-text").val('');
        $("output").val('140');

      });

      tweetPost.fail(() => {
        console.log("Error");
      });
    }

  });

});
