import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

import cors from "cors";

const allowed = [
  "http://localhost:3000",
  "https://cleaning-front.onrender.com",
];

app.use(
  cors({
    origin: (origin, cb) => {
      // origin poate fi undefined la curl/postman
      if (!origin) return cb(null, true);
      if (allowed.includes(origin)) return cb(null, true);
      return cb(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/api/health", (req, res) => res.json({ ok: true }));

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running: ${PORT}`));
