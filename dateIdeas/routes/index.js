var express = require('express');
var router = express.Router();

var mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/dateDB'); 
var dateSchema = mongoose.Schema({
Budget: String,
Activity: String
});
var Dates = mongoose.model('Dates', dateSchema); 
var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'connection error:')); 
db.once('open', function() { 
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
  var newdate = new Dates(req.body); 
  newdate.save(function(err, post) { 
  if (err) return console.error(err);
   res.sendStatus(200);
  })

});
module.exports = router;
