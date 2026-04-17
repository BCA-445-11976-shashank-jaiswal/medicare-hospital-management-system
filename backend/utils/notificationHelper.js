// backend/utils/notificationHelper.js
import nodemailer from "nodemailer";
import twilio from "twilio";
import 'dotenv/config';

// Nodemailer Transporter Configuration
const transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE || "gmail", // Default to gmail for ease of use
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Twilio Client Configuration
// Only initialize if credentials are provided and look valid (SID starts with AC)
const twilioClient = (
  process.env.TWILIO_ACCOUNT_SID && 
  process.env.TWILIO_ACCOUNT_SID.startsWith("AC") &&
  process.env.TWILIO_AUTH_TOKEN
) ? twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
  : null;

if (!twilioClient && process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_ACCOUNT_SID !== "your_twilio_sid") {
  console.warn("⚠️ Twilio SID provided but invalid (must start with AC). SMS disabled.");
}

/**
 * Send booking confirmation email and SMS
 * @param {Object} data - Appointment details
 */
export const sendAppointmentConfirmation = async (data) => {
  const {
    patientName,
    patientEmail,
    patientPhone,
    doctorName,
    serviceName,
    date,
    time,
    type // 'doctor' or 'service'
  } = data;

  const subject = `Appointment Confirmation - MEDICARE`;
  const entityName = type === 'doctor' ? `Dr. ${doctorName}` : serviceName;

  // 1. Send Email
  if (patientEmail) {
    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #e1e1e1; border-radius: 10px; overflow: hidden;">
        <div style="background-color: #059669; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">MEDICARE</h1>
        </div>
        <div style="padding: 20px; color: #374151;">
          <h2>Booking Confirmed!</h2>
          <p>Dear <strong>${patientName}</strong>,</p>
          <p>Your appointment has been successfully booked at MEDICARE Hospital.</p>
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p><strong>Appointment Details:</strong></p>
          <table style="width: 100%;">
            <tr><td style="padding: 5px 0; color: #6b7280;">Provider:</td><td style="padding: 5px 0;"><strong>${entityName}</strong></td></tr>
            <tr><td style="padding: 5px 0; color: #6b7280;">Date:</td><td style="padding: 5px 0;"><strong>${date}</strong></td></tr>
            <tr><td style="padding: 5px 0; color: #6b7280;">Time:</td><td style="padding: 5px 0;"><strong>${time}</strong></td></tr>
          </table>
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p>Please arrive 15 minutes before your scheduled time.</p>
          <p>If you need to reschedule or cancel, please contact us or use our patient portal.</p>
          <br>
          <p>Thank you for choosing MEDICARE.</p>
        </div>
        <div style="background-color: #f9fafb; padding: 15px; text-align: center; font-size: 12px; color: #9ca3af;">
          &copy; 2026 MEDICARE Hospital Solutions. All rights reserved.
        </div>
      </div>
    `;

    try {
      await transporter.sendMail({
        from: `"MEDICARE Hospital" <${process.env.SMTP_USER}>`,
        to: patientEmail,
        subject,
        html: htmlContent,
      });
      console.log(`✅ Confirmation email sent to ${patientEmail}`);
    } catch (err) {
      console.error(`❌ Failed to send email to ${patientEmail}:`, err.message);
    }
  }

  // 2. Send SMS
  if (patientPhone && twilioClient) {
    const smsMessage = `MEDICARE: Hello ${patientName}, your appointment with ${entityName} is confirmed for ${date} at ${time}. Thank you for choosing us!`;
    
    try {
      await twilioClient.messages.create({
        body: smsMessage,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: `+91${patientPhone}`, // Assuming Indian numbers, prefix accordingly
      });
      console.log(`✅ Confirmation SMS sent to ${patientPhone}`);
    } catch (err) {
      console.error(`❌ Failed to send SMS to ${patientPhone}:`, err.message);
    }
  } else if (!twilioClient) {
    console.log(`⚠️ SMS not sent: Twilio credentials not configured.`);
    // Log message that would have been sent
    console.log(`[MOCK SMS TO ${patientPhone}]: MEDICARE: Hello ${patientName}, your appointment with ${entityName} is confirmed for ${date} at ${time}.`);
  }
};

/**
 * Send contact form submission email and auto-reply
 * @param {Object} data - Contact form details
 */
export const sendContactEmails = async (data) => {
  const { name, email, phone, department, service, message } = data;

  const adminEmail = process.env.SMTP_USER; // Email where you receive inquiries
  const adminSubject = `New Contact Inquiry from ${name} - MEDICARE`;
  const userSubject = `Thank you for contacting MEDICARE!`;

  // 1. Send Email to Admin (Clinic)
  const adminHtml = `
    <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #e1e1e1; border-radius: 10px; overflow: hidden;">
      <div style="background-color: #059669; color: white; padding: 20px; text-align: center;">
        <h2 style="margin: 0;">New Contact Form Submission</h2>
      </div>
      <div style="padding: 20px; color: #374151;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Department:</strong> ${department || "N/A"}</p>
        <p><strong>Service:</strong> ${service || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f3f4f6; padding: 15px; border-radius: 5px; margin-top: 10px;">
          ${message}
        </div>
      </div>
    </div>
  `;

  // 2. Send Auto-Reply to User
  const userHtml = `
    <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #e1e1e1; border-radius: 10px; overflow: hidden;">
      <div style="background-color: #2563eb; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">MEDICARE</h1>
      </div>
      <div style="padding: 20px; color: #374151;">
        <h2>Hello ${name},</h2>
        <p>We've received your inquiry and our team will get back to you shortly.</p>
        <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;">
        <p><strong>Your Message Summary:</strong></p>
        <p><em>"${message.substring(0, 100)}${message.length > 100 ? "..." : ""}"</em></p>
        <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;">
        <p>If you have an emergency, please call us directly at <strong>1234567890</strong>.</p>
        <br>
        <p>Best Regards,<br>The MEDICARE Team</p>
      </div>
    </div>
  `;

  try {
    // Send to Admin
    await transporter.sendMail({
      from: `"MEDICARE System" <${adminEmail}>`,
      to: adminEmail,
      subject: adminSubject,
      html: adminHtml,
    });
    console.log(`✅ Inquiry email sent to admin: ${adminEmail}`);

    // Send Auto-Reply to User
    await transporter.sendMail({
      from: `"MEDICARE Hospital" <${adminEmail}>`,
      to: email,
      subject: userSubject,
      html: userHtml,
    });
    console.log(`✅ Auto-reply sent to ${email}`);

    return { success: true };
  } catch (err) {
    console.error(`❌ Email error:`, err.message);
    throw new Error("Failed to send emails. Please try again later.");
  }
};
