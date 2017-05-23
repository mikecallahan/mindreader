var alexa = require("alexa-app");

var app = new alexa.app("mindreader");

app.launch(function(req,res) {
    // Welcome the user.
    var step = 0;
    var randomnum = 2 * (Math.floor(Math.random() * (50 - 1) + 1));
    var answer = randomnum/2;
    var count = 1;
    res.session("step", step);
    res.session("randomnum", randomnum);
    res.session("answer", answer);
    res.session("count", count);
    res.say("Most people don't know this, but I can be programmed to read minds.  Let me show you.  Get a piece of paper and a pencil.  Say, ok, to continue.");
    res.reprompt("If you're ready to be amazed, say, ok.");
    res.shouldEndSession(false);
    }
);

app.intent("ok", {
        "slots": {},
        "utterances": ["ok"]
    },function(req,res) {
        var step = req.session("step")+1;
        res.session("step", step);
        res.reprompt("Say, ok, to continue.");
        res.shouldEndSession(false); 
        switch(step) {
            case 1:
                res.say("Pick a number between 1 and 100 and then say, ok");
                break;
            case 2:
                res.say("Now, double your number.");
                break;
            case 3:
                res.say("Add " + res.session("randomnum"));
                break;
            case 4:
                res.say("Now take half.");
                break;
            case 5:
                res.say("Subtract the first number you started with, from the number you have now.");
                break;
            default:
                switch(req.session("count")) {
                    case 1:
                        res.say("Ok, this is the hard part.  Concentrate on the number you have now.  I'm trying to read your mind.  I almost have it. ok. Your answer is. <audio src='https://s3-us-west-1.amazonaws.com/alexa13/magic_spell.mp3'/>" + req.session("answer") + ".  I know. Pretty amazing. Right?  Let's do it one more time.  The answers are always different because you can choose different numbers to start with. Just say, again.  Otherwise say, stop.");
                        break;
                    case 2:
                        res.say("This is a little bit harder.  Are you concentrating on your number?.  Wait.  I have it now. Your answer is. <audio src='https://s3-us-west-1.amazonaws.com/alexa13/magic_spell.mp3'/>" + req.session("answer") + ".  Let's do it one more time.  This will really amaze you. I promise. Just say, again.  Otherwise say, stop.");
                        break;
                    case 3:
                        res.say("Oh no. Something is wrong this time.  I'm not getting a good read.  Focus harder on your number. Ok. It's getting clearer now. I see why this one was harder. Your answer is. <audio src='https://s3-us-west-1.amazonaws.com/alexa13/magic_spell.mp3'/> " + req.session("answer") + ".  Unbelievable. Right?  I can do this all day, and your answers are always different. To do another one say, again.  Otherwise say, stop.");
                        break;
                    default:
                    res.say("Ok, this is the hard part.  Concentrate on the number you have now.  I'm trying to read your mind.  I almost have it. ok. Your answer is. <audio src='https://s3-us-west-1.amazonaws.com/alexa13/magic_spell.mp3'/>" + req.session("answer") + ".  I know. Pretty amazing. Right?  Let's do it one more time.  The answers are always different because you can choose different numbers to start with. Just say, again.  Otherwise say, stop.");
                }
                
                res.reprompt("Say again or say stop.");   
        }
    }
);

app.intent("again", {
        "slots": {},
        "utterances": ["again"]
    },function(req,res) {
        var step = 1;
        if (req.session("count") == 2) {
            var randomnum = Math.floor(Math.random() * (500 - 50) + 1);
            	if (randomnum%2 == 0)
                    var randomnum = randomnum + 1;
        } else { 
            var randomnum = 2 * (Math.floor(Math.random() * (500 - 50) + 1));
        }
        var answer = randomnum/2;
        var count = req.session("count")+1;
        res.session("count", count);
        res.session("step", step);
        res.session("randomnum", randomnum);
        res.session("answer", answer);
        res.say("Ok. This time pick any number you want. It doesn't have to be between 1 and 100.   Make it a large number if you want.  You might want to use a calculator.  Go ahead and pick your number.  Say, ok, when you're ready to continue.");
        res.reprompt("Say, ok, when you're ready");
        res.shouldEndSession(false);
    }
);

app.intent("AMAZON.StopIntent", {
        "slots": {},
        "utterances": ["{quit|exit|no thanks|bye|no thank you}"]
    }, function(req,res) {
      res.say("Ok, Talk to you later then.  Have a good day." )
      res.shouldEndSession(true);
    }
);

app.intent("AMAZON.CancelIntent", {
        "slots": {},
        "utterances": []
    }, function(req,res) {
      res.say("Goodbye.")
      res.shouldEndSession(true);
    }
);

app.intent("AMAZON.HelpIntent", {
        "slots": {},
        "utterances": []
    }, function(req,res) {
      res.say("I will show you how I can read minds.  Have a paper and pencil ready, and say, ok, to continue.")
      res.shouldEndSession(false);
    }
);

app.error = function(exception, req, res) {
  res.say("Sorry, something bad happened");
};

module.exports = app;