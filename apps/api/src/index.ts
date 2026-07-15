import express from "express";
import cors from "cors";
import registrationRoutes from "./features/registration/registration.routes.js";

const app = express();
const PORT = 3000;

app.use(cors({
  origin: "http://localhost:5173", // Only allow the web app
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Mount features
app.use("/api", registrationRoutes);

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
