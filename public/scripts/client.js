$(document).ready(function(){

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];
  
  const renderTweets = function(tweets) {
  
    let tweetContainer = $(".tweets-display");
    for (let tweet of tweets) {
      const singleTweet = createTweetElement(tweet);
      $(".tweets-display").append(singleTweet);
      
      
      console.log(singleTweet);
  
    } 
    console.log("a");
  
  };
  
  const createTweetElement = function(tweet) {
  
    let $tweet = '<article class = "tweetArticle">'+

                '<header id = "tweetHeads">'+
                  '<div id = "userImgAndName">'+
                    '<img src = "https://i.imgur.com/5fUVPRP.png" id = "userImg" />'+
                    '<span id = "userName">Max</span>'+
                  '</div>'+
                
                  '<div id = "userString">'+
                    '<span>@Max23</span>'+
                  '</div>'+
                '</header>'+

                '<p id = "userTweetContent">'+
                  'jajajajajaj'+
                '</p>'+
                '<hr id = "userContentDivider">'+

                '<footer id = "tweetFoots">'+
                  '<div id = "userTweetTimeAgo">'+
                      '<span>20 days ago</span>'+
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
  
  renderTweets(data);
  
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