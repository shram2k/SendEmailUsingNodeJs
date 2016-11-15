
var http = require('http');
var express = require("express");
//require the path nodejs module
var path = require("path");
var SendEmailService = require("./www/custom_modules/SendEmailService");

var app = express();
var path = require('path');
var port = process.env.port || 1337;

var bodyParser = require('body-parser');
app.use( bodyParser.json() );  
 app.use(bodyParser.urlencoded({extended : true}));

//tell express that www is the root of our public web folder
app.use(express.static(path.join(__dirname, 'www')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/www/RequestDemo.html'));
	
});

app.post('/contact', function(request, response){
	
     //console.log(request.body.userName); 
	 //console.log(request.body.userEmail); 
      
	  var options = {
		to:  request.body.userEmail,
		html:'Hi, <br/> ' + request.body.userName + ' has requested for the demo. <br/> Please contact him on ' + request.body.userEmail
	  };
	  var result = SendEmailService.SendEmail(options);
	  
	 
	 /* setTimeout(function(){

		res.send(JSON.stringify({
			Name: request.body.userName || null,
			Email: request.body.userEmail || null
		}));

	}, 1000)*/
      response.end();
});

http.createServer(app).listen(port, function () {
	console.log('Server is running. Point your browser to: http://localhost:' + port);
});
