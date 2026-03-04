// server/routes/contact.js (sau cum se numește la tine)
import express from "express";
import { sendContactEmails } from "../services/mailer.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body || {};
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const result = await sendContactEmails({ name, email, phone, message });

    if (!result.ok) {
      return res.status(500).json({ message: "Email could not be sent" });
    }
if (req.body.company) {
  return res.status(400).json({ message: "Spam detected" });
}
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;