import express from "express";
import { sendContactEmails } from "../utils/emailSender.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (req.body?.company) {
      return res.status(400).json({
        ok: false,
        reason: "spam_detected",
        message: "Spam detected.",
      });
    }

    const { name, email, phone, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        ok: false,
        reason: "missing_fields",
        message: "Bitte alle Pflichtfelder ausfüllen.",
      });
    }

    const result = await sendContactEmails({ name, email, phone, message });

    if (!result || typeof result.ok !== "boolean") {
      return res.status(500).json({
        ok: false,
        reason: "invalid_mailer_result",
        message: "Mailer result invalid.",
      });
    }

    return res.status(result.ok ? 200 : 502).json(result);
  } catch (err) {
    console.error("CONTACT ROUTE ERROR:", err?.message);
    console.error(err?.stack);

    return res.status(500).json({
      ok: false,
      reason: "route_error",
      message: err?.message || "Server error",
    });
  }
});

export default router;

