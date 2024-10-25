const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Allows requests from other origins (for your frontend)

// POST route to handle form submissions
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use Gmail
        auth: {
            user: 'tajrian.arafat.alvi@g.bracu.ac.bd', // Your Gmail address
            pass: 'ufkj cehi sigl vptd'   // Your App password
        }
    });

    // Email options
    const mailOptions = {
        from: email, // Sender email
        to: 'tajrian.arafat.alvi@g.bracu.ac.bd', // Your email
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error occurred:', error.message); // Log detailed error
            res.status(500).send(`Error sending message: ${error.message}`);
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Message sent successfully');
        }
    });
});

app.get('/send', (req, res) => {
    res.send('This route is for form submissions. Please submit the form.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
