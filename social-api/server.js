import express from "express";
import authRoutes from "./routes/authRoutes.js";
import colors from "colors";
import dotenv from "dotenv";
import connectWithMongoDB from "./config/db.js";
// Init Express
const app = express();

// Init Dotenv
dotenv.config();

// Server PORT
const PORT = process.env.PORT || 8000;

// Routes
app.use("/api/auth", authRoutes);

// Listen Server
app.listen(PORT, () => {
  console.log(`Server Is Running On PORT ${PORT}`.bgGreen.black);
  connectWithMongoDB();
});
