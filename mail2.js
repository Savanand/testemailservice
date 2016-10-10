var Mailgun = require('mailgun').Mailgun;
var express = require("express");
var app = express();

var mg = new Mailgun('key-6eff749e7ba10f3bf73db2612dc9368a');


app.get('/',function(req,res) {
	console.log('Running mail2');
	mg.sendText('aniketpsavanand@gmail.com', ['Thor Aniket<thoraniket@gmail.com>'],
	  'This is the subject from Mailgun',
	  'This is the text',
	  'noreply@example.com', {},
	  function(err) {
	    if (err) console.log('Oh noes: ' + err);
	    else     console.log('Success');
	});

	res.send("sent email successfully from Mailserver2");
});

console.log("Mailserver2/Mailgun running on 8002");

app.listen(8002);