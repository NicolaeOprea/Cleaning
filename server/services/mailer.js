import sendGrid from '@sendgrid/mail';

sendGrid.setApiKey(process.env.SEND_GRID_API_KEY);

export const emailSender = async (email, subject, plainText, htmlText) => {
  try {
    const message = {
      to: email,
      from: {
        name: "Hosseini Reinigungsservice",
        email: process.env.SEND_GRID_EMAIL, // ✅ CORECT
      },
      subject,
      text: plainText,
      html: htmlText,
    };

    const [response] = await sendGrid.send(message);
    return response.statusCode === 202;

  } catch (err) {
    console.error("SendGrid error:", err?.response?.body || err.message);
    return false;
  }
};
