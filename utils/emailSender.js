import sgMail from "@sendgrid/mail";

const isEmail = (v) => /^\S+@\S+\.\S+$/.test(String(v || ""));

const escapeHtml = (value) =>
  String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const userConfirmationTemplate = ({
  name = "Kunde",
  logoUrl = "https://site-ul-tau.de/logo.png",
}) => `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bestaetigung Ihrer Anfrage</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f4; font-family:Arial, Helvetica, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f4; margin:0; padding:30px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px; max-width:600px; background:#ffffff; border-radius:10px; overflow:hidden;">
          <tr>
            <td style="background:#0f766e; height:8px; font-size:0; line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:40px 35px 20px 35px;">
              <h1 style="margin:0 0 20px 0; font-size:26px; line-height:1.3; color:#1f2937;">
                Vielen Dank fuer Ihre Nachricht
              </h1>

              <p style="margin:0 0 16px 0; font-size:15px; line-height:1.7; color:#374151;">
                Guten Tag <strong>${escapeHtml(name)}</strong>,
              </p>

              <p style="margin:0 0 16px 0; font-size:15px; line-height:1.7; color:#374151;">
                wir bestaetigen hiermit den Eingang Ihrer Anfrage. Vielen Dank, dass Sie sich an
                <strong>Hosseini Reinigung &amp; Hausmeisterservice</strong> gewendet haben.
              </p>

              <p style="margin:0 0 16px 0; font-size:15px; line-height:1.7; color:#374151;">
                Ihre Nachricht wurde erfolgreich an unser Team uebermittelt. Wir werden Ihr Anliegen
                so schnell wie moeglich pruefen und uns zeitnah bei Ihnen melden.
              </p>

              <p style="margin:0 0 16px 0; font-size:15px; line-height:1.7; color:#374151;">
                Falls Ihre Anfrage dringend ist, koennen Sie uns auch direkt telefonisch kontaktieren.
              </p>

              <p style="margin:0 0 8px 0; font-size:15px; line-height:1.7; color:#374151;">
                Mit freundlichen Gruessen
              </p>

              <p style="margin:0; font-size:15px; line-height:1.7; color:#374151;">
                <strong>Ihr Team von Hosseini Reinigung &amp; Hausmeisterservice</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td style="height:25px; font-size:0; line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td align="center" style="padding:0 35px;">
              <img
                src="${escapeHtml(logoUrl)}"
                alt="Hosseini Reinigung"
                style="display:block; margin:0 auto; width:76px; max-width:76px; height:auto; border:0;"
              />
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:18px 35px 35px 35px;">
              <p style="margin:0; font-size:13px; line-height:1.8; color:#6b7280;">
                <strong style="color:#374151;">Hosseini Reinigung &amp; Hausmeisterservice</strong><br />
                Musterstrasse 12<br />
                80331 Muenchen<br />
                Deutschland<br />
                Telefon: +49 123 456789<br />
                E-Mail: kontakt@hosseinireinigungsservice.de
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export const sendContactEmails = async ({ name, email, phone, message }) => {
  const API_KEY = process.env.SENDGRID_API_KEY;
  const FROM = process.env.SENDGRID_FROM;
  const TO = process.env.SENDGRID_TO;
  const LOGO_URL =
    process.env.SENDGRID_LOGO_URL || "http://localhost:3000/logo3.png";

  if (!API_KEY) return { ok: false, reason: "missing_sendgrid_api_key" };
  if (!FROM || !isEmail(FROM)) return { ok: false, reason: "invalid_from" };
  if (!TO || !isEmail(TO)) return { ok: false, reason: "invalid_to" };
  if (!email || !isEmail(email)) {
    return { ok: false, reason: "invalid_client_email" };
  }

  sgMail.setApiKey(API_KEY);

  const safeName = String(name || "").trim() || "Kunde";
  const safePhone = String(phone || "").trim() || "-";
  const safeMsg = String(message || "").trim() || "-";

  const htmlOwner = `
    <h2>Neue Anfrage - Website</h2>
    <p><b>Name:</b> ${escapeHtml(safeName)}</p>
    <p><b>Email:</b> ${escapeHtml(email)}</p>
    <p><b>Telefon:</b> ${escapeHtml(safePhone)}</p>
    <p><b>Nachricht:</b><br/>${escapeHtml(safeMsg).replace(/\n/g, "<br/>")}</p>
  `.trim();

  const textOwner = `
Neue Anfrage - Website

Name: ${safeName}
Email: ${email}
Telefon: ${safePhone}

Nachricht:
${safeMsg}
  `.trim();

  const htmlClient = userConfirmationTemplate({
    name: safeName,
    logoUrl: LOGO_URL,
  }).trim();

  const textClient = `
Hallo ${safeName},

vielen Dank fuer Ihre Nachricht. Wir haben Ihre Anfrage erhalten und melden uns so schnell wie moeglich bei Ihnen.

Falls Ihre Anfrage dringend ist, koennen Sie uns auch direkt telefonisch kontaktieren.

Mit freundlichen Gruessen
Ihr Team von Hosseini Reinigung & Hausmeisterservice
  `.trim();

  try {
    await sgMail.send({
      to: TO,
      from: FROM,
      subject: "Neue Anfrage - Website",
      html: htmlOwner,
      text: textOwner,
      replyTo: email,
    });

    await sgMail.send({
      to: email,
      from: FROM,
      subject: "Bestaetigung Ihrer Anfrage",
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
