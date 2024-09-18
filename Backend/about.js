const express = require('express');
require('dotenv').config();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;
const about = require('./about');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-mail', (req, res) => {
    const { name, mobile, email, carType, pickupLocation, returnLocation, pickUpDate, returnDate } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: `${email}`,
        to: process.env.EMAIL_USER,
        subject: 'New Car Rental Booking Request',
        text: `
        Name: ${name}
        Mobile Number: ${mobile}
        Email: ${email}
        Preferred Car Type: ${carType}
        Pickup Location: ${pickupLocation}
        Return Location: ${returnLocation}
        Pickup Date: ${pickUpDate}
        Return Date: ${returnDate}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});
