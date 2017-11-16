var express = require('express');
var router = express.Router();

var mongoose = require('mongoose'); //Adds mongoose as a usable dependency
mongoose.connect('mongodb://localhost/dateDB'); //Connects to a mongo database called "commentDB"
var dateSchema = mongoose.Schema({
Budget: String,
Activity: String
});
var Dates = mongoose.model('Dates', dateSchema); //Makes an object from that schema as a model
var db = mongoose.connection; //Saves the connection as a variable to use
db.on('error', console.error.bind(console, 'connection error:')); //Checks for connection errors
db.once('open', function() { //Lets us know when we're connected
console.log('Connected');
});

router.get('/date', function(req, res, next) {
  Dates.find(function(err,dateList) { 
  if (err) return console.error(err); 
  else {
    res.json(dateList);
  }
})

});
router.post('/date', function(req, res, next) {
  var newdate = new Dates(req.body); //[3]
  newdate.save(function(err, post) { //[4]
  if (err) return console.error(err);
   res.sendStatus(200);
  })

});
module.exports = router;
