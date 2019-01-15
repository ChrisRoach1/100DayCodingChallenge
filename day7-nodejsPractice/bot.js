// https://github.com/ttezel/twit for examples
//version 1.0
//Author: Chris Roach

console.log("the bot is starting up:");
var Twit = require("twit");
var array = require("./array.js");
var Quotation = array.Quotation;

var T = new Twit({
  consumer_key: 
  consumer_secret: 
  access_token: 
  access_token_secret:
});

function favorited(eventMsg) {
  console.log("favorited!");
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  favoriteIt("@" + screenName + " Thanks for favoriting! it means so much!");
}

function followed(eventMsg) {
  console.log("followed!");
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  followIt("@" + screenName + " thanks for the follow! :) ");
}

function tweetIt() {
  var whichQuotation = Quotation[Math.floor(Math.random() * Quotation.length)];
  var tweet = {
    status: whichQuotation
  };

  T.post("statuses/update", tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log("Something went wrong!");
    } else {
      console.log("It worked!");
    }
  }
}

function favoriteIt(txt) {
  var tweet = {
    status: txt
  };

  T.post("statuses/update", tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log("Favorite went wrong!");
    } else {
      console.log("Favorite responded to!");
    }
  }
}

function followIt(txt) {
  var tweet = {
    status: txt
  };

  T.post("statuses/update", tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log("Follow went wrong!");
    } else {
      console.log("Follow responded to!");
    }
  }
}

//setting up a user stream
var stream = T.stream("user");

//anytime someone favorites me
stream.on("favorite", favorited);
stream.on("follow", followed);

setInterval(tweetIt, 1000 * 60 * 60 * 6); //milliseconds 1000 = 1 second *60 = 60 seconds etc....
