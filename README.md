**Send Emails using Nodemailer and Sendgrid**

In one of the project, I got requirement to enable user to ask for the demo. This small requirement was required to send email from html page. In order to send emails I had to use some server side technology. I am a .Net developer hence initially thought to put this functionality in c#. However this was a small site with couple of html pages hence instead of migrating all to ASP.Net, I opted NodeJs. s 

>>Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

This repository contains code to send emails using nodemailer and sendgrid.

**How to use on windows (command line):**

Step 1: Install git if not already installed.

Step 2: Open git bash

Step 3: Move to the diretcory where you want to clone the repository

Step 4: type $ git clone https://github.com/shram2k/SendEmailUsingNodeJs <foldername optionally>

Step 5: Once cloning is done, then open command prompt, go to the cloned folder and type npm install. This will install all nodejs modules dependencies.

Step 6: type node app.js. You must see message "Server is running. Point your browser to http://localhost:1337


Step 7: Open web browser and navigate to http://localhost:1337. A web page will appear. Provide data and this should send the emails.


Note: As we are using sendgrid here to send the emails. You must have to provide credentails in www\custom_modules\SendEmailService.js file.

// configuring sendgrid to send emails (provide your credentials here)
	var smtpTransport = nodemailer.createTransport({
        service: 'SendGrid', // no need to set host or port etc.
		auth: {
			user: "",
			pass: ""
		}
	});

>>** You can also install github desktop application to clone and manage the repository**
