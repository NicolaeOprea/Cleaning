import sgMail from "@sendgrid/mail";

const isEmail = (v) => /^\S+@\S+\.\S+$/.test(String(v || ""));

export const sendContactEmails = async ({ name, email, phone, message }) => {
  const API_KEY = process.env.SENDGRID_API_KEY;
  const FROM = process.env.SENDGRID_FROM;
  const TO = process.env.SENDGRID_TO;

  if (!API_KEY) return { ok: false, reason: "missing_sendgrid_api_key" };
  if (!FROM || !isEmail(FROM)) return { ok: false, reason: "invalid_from" };
  if (!TO || !isEmail(TO)) return { ok: false, reason: "invalid_to" };
  if (!email || !isEmail(email)) return { ok: false, reason: "invalid_client_email" };

  sgMail.setApiKey(API_KEY);

  const safeName = String(name || "").trim() || "-";
  const safePhone = String(phone || "").trim() || "-";
  const safeMsg = String(message || "").trim() || "-";

  const htmlOwner = `
    <h2>Neue Anfrage – Website</h2>
    <p><b>Name:</b> ${safeName}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Telefon:</b> ${safePhone}</p>
    <p><b>Nachricht:</b><br/>${safeMsg.replace(/\n/g, "<br/>")}</p>
  `.trim();

  const textOwner = `
Neue Anfrage – Website

Name: ${safeName}
Email: ${email}
Telefon: ${safePhone}

Nachricht:
${safeMsg}
  `.trim();

  const htmlClient = `
    <p>Hallo ${safeName},</p>
    <p><strong>vielen Dank</strong> für Ihre Nachricht! Wir haben Ihre Anfrage erhalten und melden uns so schnell wie möglich bei Ihnen.</p>
    <p>Mit freundlichen Grüßen<br/>Hosseini Reinigungsservice</p>
  `.trim();

  const textClient = `
Hallo ${safeName},

vielen Dank für Ihre Nachricht! Wir haben Ihre Anfrage erhalten und melden uns so schnell wie möglich bei Ihnen.

Mit freundlichen Grüßen
Hosseini Reinigungsservice
  `.trim();

  try {
    await sgMail.send({
      to: TO,
      from: FROM,
      subject: "Neue Anfrage – Website",
      html: htmlOwner,
      text: textOwner,
      replyTo: email,
    });

    await sgMail.send({
      to: email,
      from: FROM,
      subject: "Danke – Wir melden uns in Kürze",
      html: htmlClient,
      text: textClient,
    });

    return { ok: true };
  } catch (err) {
    console.error("=== SENDGRID ERROR START ===");
    console.error("message:", err?.message || err);
    console.error("code:", err?.code);
    console.error("response body:", err?.response?.body);
    console.error("=== SENDGRID ERROR END ===");

    return {
      ok: false,
      reason: "sendgrid_error",
      details: err?.response?.body || err?.message || "Unknown error",
    };
  }
};