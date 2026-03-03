import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowed = [
  "http://localhost:3000",
  "https://cleaning-front.onrender.com",
];
app.use(cors());

app.get("/api/health", (req, res) => res.json({ ok: true }));

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running: ${PORT}`));
