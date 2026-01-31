import nodemailer from "nodemailer";

export async function createTransport() {
  // Dacă ai date reale în .env, le folosim
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || "false") === "true", // true doar pentru 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  // Altminteri, fallback automat pe Ethereal (test)
  const testAccount = await nodemailer.createTestAccount();

  return nodemailer.createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
}

export function renderCompanyEmail({ name, email, phone, message }) {
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5">
      <h2>Neue Kontaktanfrage – ABBAS Website</h2>
      <p><b>Name:</b> ${escapeHtml(name)}</p>
      <p><b>Email:</b> ${escapeHtml(email)}</p>
      <p><b>Telefon:</b> ${escapeHtml(phone || "-")}</p>
      <p><b>Nachricht:</b><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      <hr/>
      <p style="color:#666;font-size:12px">Automatisch gesendet von der Website.</p>
    </div>
  `;
}

export function renderClientConfirmEmail({ name }) {
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5">
      <h2>Vielen Dank, ${escapeHtml(name)}!</h2>
      <p>Wir haben Ihre Anfrage erhalten und melden uns schnellstmöglich.</p>
      <p style="color:#666;font-size:12px">
        ABBAS Gebäudereinigung & Hausmeisterservice – München
      </p>
    </div>
  `;
}

// mic helper anti-inject în HTML
function escapeHtml(str) {
  return String(str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
