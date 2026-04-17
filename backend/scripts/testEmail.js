import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "../.env") });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function testConnection() {
  console.log("Checking credentials in .env...");
  console.log(`Email: ${process.env.SMTP_USER}`);
  console.log(`Password: ${process.env.SMTP_PASS === "your_gmail_app_password" ? "❌ Still using placeholder" : "✅ Password detected (not shown)"}`);

  if (process.env.SMTP_PASS === "your_gmail_app_password") {
    console.error("ERROR: Please replace 'your_gmail_app_password' in backend/.env with your 16-digit Gmail App Password.");
    process.exit(1);
  }

  try {
    console.log("Attempting to connect to Gmail SMTP...");
    await transporter.verify();
    console.log("✅ Success! Gmail connection is valid.");

    console.log("Sending a test email to yourself...");
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: "Medicare Test Email",
      text: "If you are reading this, your Nodemailer setup is working properly!",
    });
    console.log(`✅ Test email sent successfully to ${process.env.SMTP_USER}.`);
  } catch (error) {
    console.error("❌ Connection failed!");
    console.error("Error Detail:", error.message);
    console.log("\nPossible solutions:");
    console.log("1. Ensure 2-Step Verification is ON in your Google Account.");
    console.log("2. Use a 16-digit 'App Password', NOT your normal login password.");
    console.log("3. Ensure there are no spaces in the password in .env.");
  }
}

testConnection();
