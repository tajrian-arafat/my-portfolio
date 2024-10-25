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
        service: 'gmail', // Use Gmail for example (you can change this)
        auth: {
            user: 'your-email@gmail.com', // Your Gmail address
            pass: 'your-email-password'   // Your Gmail password (Use an App password instead)
        }
    });

    // Email options
    const mailOptions = {
        from: email, // Sender email
        to: 'your-email@gmail.com', // Recipient email
        subject: `New message from ${name}`,
        text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
        `,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending message');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Message sent successfully');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
