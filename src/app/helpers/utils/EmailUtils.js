const nodemailer = require('nodemailer');
const InvariantError = require('../response/InvariantError');

const sendVerificationEmail = async (email, data) => {
  try {
    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "49fc566911c9c3",
          pass: "9854d6adc3b29b"
        }
      });

    const mailOptions = {
      from: 'samcash@support.id',
      to: email,
      subject: 'Email Verification',
      html: `
        <h3>OTP</h3>
        <h2>${data.otp}</h2>
      `
    };

    await transporter.sendMail(mailOptions);
    return {
        message : 'Kode otp telah dikirim ke alamat email anda.'
    }
  } catch (error) {
    console.log(error);
    throw new InvariantError('Failed to send verification email');
  }
};

module.exports = {
  sendVerificationEmail
};
