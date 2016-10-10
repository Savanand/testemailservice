
var express = require("express");
var app = express();
var helper = require('sendgrid').mail;

app.get('/',function(req,res) {
    
    console.log("Inside Mailserver1/Sendgrid get method");
        console.log("req object"+ req);
  //  from_email = new helper.Email(req.body.sender);
    from_email = new helper.Email("aniketpsavanand@gmail.com");
//	to_email = new helper.Email(req.body.receiver);
	to_email = new helper.Email("thoraniket@gmail.com");
//	subject = req.body.subject;
	subject = "Test Subject From Sendgrid";
//	content = new helper.Content('text/plain', req.body.content);
	content = new helper.Content('text/plain', "Test Content from Sendgrid");
mail = new helper.Mail(from_email, subject, to_email, content);
	
var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
	var request = sg.emptyRequest({
	  method: 'POST',
	  path: '/v3/mail/send',
	  body: mail.toJSON(),
	});

	sg.API(request, function(error, response) {
	 console.log("Using Mailserver1/Sendgrid to send email");
	  console.log(response.statusCode);
	  console.log(response.body);
	  console.log(response.headers);
	});

	res.send("sent email successfully from Mailserver1");
});

console.log("Mailserver1/Sendgrid running on 8001");

app.listen(8001);
