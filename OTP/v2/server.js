const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/send-otp', (req, res) => {
  const email = req.body.email;
  const otpCode = generateOTP();

  sendEmail(email, otpCode)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

async function sendEmail(email, otpCode) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false,
    auth: {
      user: 'your-email@example.com',
      pass: 'your-email-password',
    },
  });

  let info = await transporter.sendMail({
    from: 'hello@ecolegrow.tech',
    to: email,
    subject: 'OTP Verification',
    text: `Your OTP code is: ${otpCode}`,
  });

  console.log('Email sent: ' + info.messageId);
}

function generateOTP() {
  // Generate and return an OTP code here
  return '123456'; // Replace with your actual OTP generation logic
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
