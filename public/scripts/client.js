$(document).ready(function(){

 

  const renderTweets = function(tweets) {
  
    let tweetContainer = $(".tweets-display");
    for (let tweet of tweets) {
      const singleTweet = createTweetElement(tweet);
      tweetContainer.append(singleTweet);
      
    }
  };
  
  const createTweetElement = function(tweet) {
  
    var daysInMilisecs = new Date() - new Date(tweet.created_at);
    var daysInteger = Math.ceil((daysInMilisecs)/(3600 * 24 * 1000))
    let $tweet = '<article class = "tweetArticle">'+

                  '<header id = "tweetHeads">'+
                    '<div id = "userImgAndName">'+
                      '<img src = ' + tweet.user.avatars + ' id = "userImg" />'+
                      '<span id = "userName">' + tweet.user.name + '</span>'+
                    '</div>'+
                  
                    '<div id = "userString">'+
                      '<span>' + tweet.user.handle + '</span>'+
                    '</div>'+
                  '</header>'+

                  '<p id = "userTweetContent">'+
                    tweet.content.text + 
                  '</p>'+
                  '<hr id = "userContentDivider">'+

                  '<footer id = "tweetFoots">'+
                    '<div id = "userTweetTimeAgo">'+
                        '<span>' + daysInteger + (daysInteger === 1 ? ' day' : ' days') + ' ago</span>'+
                    '</div>'+

                    '<div id = "userSocialActionSymbols">'+
                        '<span class = "userSocialIcons"><i class="fa fa-flag"></i></span>'+
                        '<span class = "userSocialIcons"><i class="fa fa-refresh"></i></span>'+
                        '<span class = "userSocialIcons"><i class="fa fa-heart"></i></span>'+
                    '</div>'+

                  '</footer>'+
                '</article>'; 

    return $tweet;
  }
  
  const loadTweets = function() {
    $.ajax('http://localhost:8080/tweets', { method: 'GET' })
    .then(function (tweets) {
      console.log('Success: ', tweets);
      tweets.sort((a, b) => {
        return b.created_at - a.created_at;
      });
      renderTweets(tweets)

    });
  }

  loadTweets();


  $("#tweetForm").submit((event) => {
    event.preventDefault();
    const tweet = $("#tweetForm").serialize();
    console.log(tweet);
    const tweetPost = $.ajax({url: 'http://localhost:8080/tweets', 
            method: 'POST', 
            data: tweet });
    
            
    tweetPost.done(() => {
      console.log("ok");
      $('.tweets-display').html('');
      loadTweets();
      $("#tweetForm").focus();

    });

    tweetPost.fail(() => {
      console.log("hahahah");
    });


  });
   
});


// let $tweet = '<article class = "tweetArticle">'+

//                 '<header id = "tweetHeads">'+
//                   '<div id = "userImgAndName">'+
//                     '<img src = "https://i.imgur.com/5fUVPRP.png" id = "userImg" />'+
//                     '<span id = "userName">Max</span>'+
//                   '</div>'+
                
//                   '<div id = "userString">'+
//                     '<span>@Max23</span>'+
//                   '</div>'+
//                 '</header>'+

//                 '<p id = "userTweetContent">'+
//                   'jajajajajaj'+
//                 '</p>'+
//                 '<hr id = "userContentDivider">'+

//                 '<footer id = "tweetFoots">'+
//                   '<div id = "userTweetTimeAgo">'+
//                       '<span>20 days ago</span>'+
//                   '</div>'+

//                   '<div id = "userSocialActionSymbols">'+
//                       '<span class = "userSocialIcons"><i class="fa fa-flag"></i></span>'+
//                       '<span class = "userSocialIcons"><i class="fa fa-refresh"></i></span>'+
//                       '<span class = "userSocialIcons"><i class="fa fa-heart"></i></span>'+
//                   '</div>'+

//                 '</footer>'+
//                '</article>';   