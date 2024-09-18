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
  const { name, phone, email, pickUpTime, returnTime, vehicleType } = req.body;

  // Create a transporter object with SMTP details
  let transporter = nodemailer.createTransport({
    service: 'gmail', // or use any other email service provider
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // use environment variables in production for safety
    },
  });

  // Email details
  let mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: 'New Booking Request',
    text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nPickup Time: ${pickUpTime}\nReturn Time: ${returnTime}\nVehicle Type: ${vehicleType}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ message: 'Error sending email', error });
    }
    res.status(200).send({ message: 'Email sent successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
