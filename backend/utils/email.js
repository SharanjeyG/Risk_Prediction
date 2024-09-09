const nodemailer = require('nodemailer');

const sendCredentials = async (email, loginId, password) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL, // Your email
      pass: process.env.PASSWORD, // Your email password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Your Login Credentials',
    text: `Login ID: ${loginId}, Password: ${password}`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendCredentials };
