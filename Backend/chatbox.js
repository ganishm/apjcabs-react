const express = require('express');
require('dotenv').config();
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

app.post('/send-enquiry', (req, res) => {
    const { user, car, option, date } = req.body;
  
    // Format the date
    const selectedDate = new Date(date);
    const formattedDate = selectedDate.toLocaleDateString('en-US'); // Example: '10/4/2024'
    const formattedTime = selectedDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }); // Example: '08:30 AM'
  
    const adminEmail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Enquiry Received',
      text: `Enquiry details: 
             Name: ${user.name}, 
             Email: ${user.email}, 
             Phone: ${user.number}, 
             Car Model: ${car}, 
             Car Type: ${option}, 
             Date: ${formattedDate}, 
             Time: ${formattedTime}`
    };
  
    const userEmail = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'Your Car Selection Quote',
      text: `Thank you for your interest in our services. Here is the quote for the ${car} you selected.
             Scheduled Date: ${formattedDate}
             Scheduled Time: ${formattedTime}`
      // Add more quote/pricing info as needed
    };
  
    // Send email to admin
    transporter.sendMail(adminEmail, function(error, info){
      if (error) {
        console.log(error);
        res.status(500).send('Error sending email to admin');
      } else {
        // Send email to user
        transporter.sendMail(userEmail, function(error, info) {
          if (error) {
            console.log(error);
            res.status(500).send('Error sending email to user');
          } else {
            res.send('Emails sent successfully');
          }
        });
      }
    });
  });
  
  app.listen(5000, () => console.log('Server started on port 5000'));
