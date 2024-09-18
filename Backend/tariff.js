// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST route to handle booking form submission
app.post('/send-booking', (req, res) => {
  const { name, email, mobile, carType, pickUpDate, returnDate } = req.body;

  // Create a transporter object with SMTP details
  let transporter = nodemailer.createTransport({
    service: 'gmail', // or use any other email service provider
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Fixed environment variable name
    },
  });

  // Email details
  let mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: 'New Car Booking Request',
    text: `Name: ${name}\nEmail: ${email}\nMobile Number: ${mobile}\nCar Type: ${carType}\nPick Up Date: ${pickUpDate}\nReturn Date: ${returnDate}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error); // Log the error for more details
      return res.status(500).send({ message: 'Error sending email', error });
    }
    console.log('Email sent: ' + info.response);
    res.status(200).send({ message: 'Email sent successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
