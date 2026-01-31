import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const { connectDB } = require('./config/db')

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
