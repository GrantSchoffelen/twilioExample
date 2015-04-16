var express = require('express');
var router = express.Router();
var cors = require('cors')

var client = require('twilio')("AC055e2c406321688db01756618570376e", "3ed6d61c3e9a141a97903453820f65ba");

/* GET home page. */
router.post('/', function(req, res) {
	console.log('hit response page')
	console.log(req.body)
	
  client.messages.create({
    body: "thanks for responding",
    to: "+16094396656",
    from: "+16096143170"
}, function(err, message) {
    console.log(err)
});

});

module.exports = router;
