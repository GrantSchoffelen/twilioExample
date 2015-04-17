var express = require('express');
var router = express.Router();
var cors = require('cors')

var client = require('twilio')("AC055e2c406321688db01756618570376e", "3ed6d61c3e9a141a97903453820f65ba");

/* GET home page. */
router.post('/', function(req, res) {
	console.log('hit response page')
	console.log(req.body, "bodyyyyyyyyyyyyyyyyyyyyyyy")

	if(req.body.Body.toLowerCase().replace(/\s/g, '') === 'yes'){
        console.log('hit yes')
	
  client.messages.create({
    body: "Great job, keep up the good work!",
    to: "+16094396656",
    from: "+16096143170"
}, function(err, message) {
    console.log(err)
});
}

else if(req.body.Body.toLowerCase().replace(/\s/g, '') === 'no'){
    console.log('hit no')
	
  client.messages.create({
    body: "I hope your feeling alright, would you like me to put you in contact with a super nurse? Enter nurse if you would like to talk to a nurse otherwise you can just ignore this message",
    to: "+16094396656",
    from: "+16096143170"
}, function(err, message) {
    console.log(err)
});
}

else if(req.body.Body.toLowerCase().replace(/\s/g, '') === 'nurse'){
    console.log('hit no')
    
  client.messages.create({
    body: "Stay where you are, Nurse Betty is on the way",
    to: "+16094396656",
    from: "+16096143170"
}, function(err, message) {
    console.log(err)
});
}

});

module.exports = router;
