import sendGrid from "@sendgrid/mail";

sendGrid.setApiKey(process.env.SEND_GRID_API_KEY);

const isEmail = (v) => /^\S+@\S+\.\S+$/.test(String(v || ""));

export const sendContactEmails = async ({
  name,
  email,
  phone,
  message,
}) => {
  const FROM = process.env.SEND_GRID_FROM; // sender verificat
  const TO = process.env.SEND_GRID_TO;     // inbox firmă

  if (!FROM || !isEmail(FROM)) {
    console.error("SendGrid: invalid SEND_GRID_FROM:", FROM);
    return { ok: false, reason: "invalid_from" };
  }
  if (!TO || !isEmail(TO)) {
    console.error("SendGrid: invalid SEND_GRID_TO:", TO);
    return { ok: false, reason: "invalid_to" };
  }
  if (!email || !isEmail(email)) {
    console.error("SendGrid: invalid client email:", email);
    return { ok: false, reason: "invalid_client_email" };
  }

  const safePhone = phone?.trim() ? phone.trim() : "-";
  const safeMsg = String(message || "").trim();

  // 1) Mail către firmă (tu)
  const subjectOwner = "Neue Anfrage – Website";
  const textOwner =
`Neue Anfrage von Website:

Name: ${name}
Email: ${email}
Telefon: ${safePhone}

Nachricht:
${safeMsg}
`;

  const htmlOwner = `
    <h2>Neue Anfrage von Website</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefon:</strong> ${safePhone}</p>
    <p><strong>Nachricht:</strong></p>
    <p>${safeMsg.replaceAll("\n", "<br/>")}</p>
  `;

  // 2) Confirmare către client
  const subjectClient = "Danke – Wir melden uns in Kürze";
  const textClient =
`Hallo ${name},

vielen Dank für Ihre Nachricht! Wir haben Ihre Anfrage erhalten und melden uns so schnell wie möglich bei Ihnen.

Mit freundlichen Grüßen
Hosseini Reinigungsservice
`;

  const htmlClient = `
    <p>Hallo ${name},</p>
    <p><strong>vielen Dank</strong> für Ihre Nachricht! Wir haben Ihre Anfrage erhalten und melden uns so schnell wie möglich bei Ihnen.</p>
    <p>Mit freundlichen Grüßen<br/>Hosseini Reinigungsservice</p>
  `;

  try {
    // Trimitem două mesaje. "from" rămâne aceeași adresă verificată.
    // Pentru mailul către firmă punem replyTo = client (ca să răspunzi direct).
    const messages = [
      {
        to: TO,
        from: { name: "Hosseini Reinigungsservice", email: FROM },
        replyTo: { email, name },
        subject: subjectOwner,
        text: textOwner,
        html: htmlOwner,
      },
      {
        to: email,
        from: { name: "Hosseini Reinigungsservice", email: FROM },
        subject: subjectClient,
        text: textClient,
        html: htmlClient,
      },
    ];

    const [resp1, resp2] = await Promise.all(messages.map((m) => sendGrid.send(m)));

    const ok = resp1?.[0]?.statusCode === 202 && resp2?.[0]?.statusCode === 202;
    return { ok };
  } catch (err) {
    console.error("SendGrid error:", err?.response?.body || err);
    return { ok: false, reason: "send_failed" };
  }
};