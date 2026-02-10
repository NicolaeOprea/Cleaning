import express from "express";
import { emailSender } from "../services/mailer.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const subject = `Neue Anfrage – Website`;
  const text = `
Name: ${name}
Email: ${email}
Telefon: ${phone || "-"}
Nachricht:
${message}
  `;

  const html = `
    <h2>Neue Anfrage von Website</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefon:</strong> ${phone || "-"}</p>
    <p><strong>Nachricht:</strong></p>
    <p>${message}</p>
  `;

  const success = await emailSender(
    process.env.SEND_GRID_EMAIL, // unde ajunge emailul
    subject,
    text,
    html
  );

  if (!success) {
    return res.status(500).json({ message: "Email could not be sent" });
  }

  res.status(200).json({ ok: true });
});

export default router;
