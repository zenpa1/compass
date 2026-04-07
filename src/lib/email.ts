import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEmail(to: string, subject: string, text: string) {
  try {
    const info = await transporter.sendMail({
      from: `"Compass" <${process.env.EMAIL_USER}>`, 
      to: to, 
      subject: subject, 
      text: text, 
    });
    return info;
  } catch (error) {
    console.error("Email failed:", error);
    return null;
  }
}