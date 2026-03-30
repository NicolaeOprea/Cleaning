import "dotenv/config";
import express from "express";

import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";
import contactRoutes from "./routes/contact.js";

const app = express();
app.set("trust proxy", 1);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// health
app.get("/api/health", (req, res) => res.json({ ok: true }));

// rate limit doar pe contact
const contactLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    ok: false,
    reason: "rate_limited",
    message: "Too many requests. Try again later.",
  },
});

app.use("/api/contact", contactLimiter);
app.use("/api/contact", contactRoutes);

// serve React build
app.use(express.static(path.join(__dirname, "client", "build")));

// fallback pentru React Router
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api")) return next();
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// error handler final
app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err?.message);
  console.error(err?.stack);
  res.status(500).json({
    ok: false,
    reason: "server_error",
    message: err?.message || "Server error",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running: ${PORT}`));