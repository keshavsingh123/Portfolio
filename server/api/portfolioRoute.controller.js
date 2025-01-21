import nodemailer from "nodemailer";
export const sendEmailController = async (req, res) => {
  try {
    const { name, email, sms } = req.body;

    // Debug: Check if environment variables are loaded
    console.log("Email:", process.env.USER_EMAIL);
    console.log("Password:", process.env.PASS);

    // Configure the Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Use your email provider (e.g., Gmail, Outlook, etc.)
      auth: {
        user: process.env.USER_EMAIL, // Replace with your email
        pass: process.env.PASS, // Replace with your email password or app-specific password
      },
      debug: true, // Show debug logs
      logger: true,
    });

    // Email details
    const mailOptions = {
      from: email,
      to: process.env.USER_EMAIL, // Your receiving email address
      subject: `New Message from ${name}`,
      text: sms,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).send({
      success: true,
      message: "Email Sent Successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(404).send({
      success: false,
      message: "Send Email API Error",
      err,
    });
  }
};
