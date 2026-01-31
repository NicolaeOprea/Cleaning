import nodemailer from "nodemailer";
import { createTransport, renderCompanyEmail, renderClientConfirmEmail } from "../services/mailer.js";

export const sendContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const transporter = await createTransport();

    const toCompany = process.env.COMPANY_INBOX || "kontakt@abbas-service.de";

    // 1) email către firmă
    const infoCompany = await transporter.sendMail({
      from: process.env.MAIL_FROM || "ABBAS Website <no-reply@abbas-service.de>",
      to: toCompany,
      replyTo: email,
      subject: `Neue Anfrage: ${name}`,
      html: renderCompanyEmail({ name, email, phone, message }),
    });

    // 2) confirmare către client
    const infoClient = await transporter.sendMail({
      from: process.env.MAIL_FROM || "ABBAS <no-reply@abbas-service.de>",
      to: email,
      subject: "Wir haben Ihre Anfrage erhalten",
      html: renderClientConfirmEmail({ name }),
    });

    // Dacă e Ethereal, avem preview links
    const previewCompany = nodemailer.getTestMessageUrl(infoCompany);
    const previewClient = nodemailer.getTestMessageUrl(infoClient);

    if (previewCompany || previewClient) {
      console.log("EMAIL PREVIEW (company):", previewCompany);
      console.log("EMAIL PREVIEW (client):", previewClient);
    }

    return res.status(200).json({
      ok: true,
      message: "Contact received",
      preview: { company: previewCompany, client: previewClient },
    });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    return res.status(500).json({ ok: false, message: "Server error", error: err.message });
  }
};

