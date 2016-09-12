var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var path = require('path');

//var portDecision = process.env.PORT || 5000;

app.listen('5000', 'localhost', function(){
  console.log('listening in 5000');
});//end listen

app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
});

app.post('/newJokeSent', urlencodedParser, function(req, res){
  console.log('newJokeSent:', req.body);
  var jokes = [
  {
    whoseJoke: "Huck",
    jokeQuestion: "What's the difference between roast beef and pea soup?",
    punchLine: "Anyone can roast beef."
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs"
  }
];
jokes.push(req.body);
res.send(jokes);
});

app.use(express.static('Public'));
