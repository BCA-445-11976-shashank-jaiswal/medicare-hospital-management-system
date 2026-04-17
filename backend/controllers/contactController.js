import { sendContactEmails } from "../utils/notificationHelper.js";

/**
 * Handle Contact Form Submission
 * URL: POST /api/contact
 */
export const submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, department, service, message } = req.body;

    // 1. Basic Validation
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields (Name, Email, Phone, Message).",
      });
    }

    // 2. Email Format Validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    // 3. Phone Validation (10 digits)
    if (!/^\d{10}$/.test(phone)) {
      return res.status(400).json({
        success: false,
        message: "Phone number must be exactly 10 digits.",
      });
    }

    // 4. Send Emails (Admin Notification + User Auto-reply)
    await sendContactEmails({
      name,
      email,
      phone,
      department,
      service,
      message,
    });

    res.status(200).json({
      success: true,
      message: "Success! Your message has been sent. Check your email for confirmation.",
    });
  } catch (error) {
    console.error("Contact Form Error:", error.message);
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong. Please try again later.",
    });
  }
};
