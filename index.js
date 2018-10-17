const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const boom = require('boom');

app.use(bodyParser.json()); // for parsing application/json

let TWEETS = [
  { 
    id: 1,
    message: "some message"
  },
  { 
    id: 2,
    message: "some message 2"
  } 
];

let LATEST_ID = 2;

app.get('/tweets', function (req, res) {
  res.send({ data: TWEETS })
})

app.get('/tweets/:id', function (req, res, next) {
  const tweet = TWEETS.find((t) => t.id == req.params.id);
  if (tweet) {
    res.send(tweet);
  } else {
    next(boom.notFound("tweet not found"))
  }
})

app.post('/tweets', function (req, res) {
  const id = ++LATEST_ID;
  const NEW_TWEET = Object.assign({ id }, req.body);
  TWEETS.push(NEW_TWEET);
  res.send(NEW_TWEET);
})

app.delete('/tweets/:id', function (req, res) {
  TWEETS = TWEETS.filter(function(tweet) {
    console.log(tweet.id, req.params.id, tweet.id !== req.params.id)
    return tweet.id != req.params.id;
});

  res.send({deleted: true});
})

app.use(function (req, res, next){
  if (!req.route) {
    next(boom.notFound("route not found"))
  }
})

app.use(function (err, req, res, next) {
  res.status(err.output.statusCode).send(err.output.payload);
})

app.listen(3000)