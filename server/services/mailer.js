import sendGrid from '@sendgrid/mail';

sendGrid.setApiKey(process.env.SEND_GRID_API_KEY);

export const emailSender = async (email, subject, plainText, htmlText) => {
  try {
    const message = {
      to: email,
      from: {
        name: "Hosseini Reinigungsservice",
        email: process.env.SEND_GRID_API_KEY,
      },
      subject,
      text: plainText,
      html: htmlText,
    };

    const [response] = await sendGrid.send(message);
console.log("SEND_GRID_API_KEY:", process.env.SEND_GRID_API_KEY);

    return response.statusCode === 202;
  } catch (err) {
    console.error("SendGrid error:", err?.response?.body || err.message);
    return false;
  }
};
