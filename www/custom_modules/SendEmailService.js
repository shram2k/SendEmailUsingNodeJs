(function (SendEmailService) {

	var nodemailer = require("nodemailer");
	var _ = require('lodash'); 
	
	/*
		Here we are configuring our SMTP Server details.
		STMP is mail server which is responsible for sending and recieving email.
	
	var smtpTransport = nodemailer.createTransport("SMTP",{
		service: "Gmail",
		auth: {
			user: "",
			pass: ""
		}
	});
*/
	// configuring sendgrid to send emails
	var smtpTransport = nodemailer.createTransport({
        service: 'SendGrid', // no need to set host or port etc.
		auth: {
			user: "emailout",
			pass: "talentfirst"
		}
	});
	

	var defaultOptions = {
        from: 'mailer@test.com',
		subject:'Demo Request',
		text:'',
		html:''
    };

		
    var SendEmail = function(options)
	{
	
		  var mailOptions = _.extend({}, defaultOptions, options);
		
			smtpTransport.sendMail(mailOptions, function(error, response){
				 if(error){
						console.log(error);
						return false;
				 }else{
						return true;
					 }
			});
		  
	}

    

    SendEmailService.SendEmail = function (options, next) {

        return SendEmail(options);

    };

})(module.exports);
