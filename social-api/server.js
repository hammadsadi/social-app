import express from "express";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import colors from "colors";
import dotenv from "dotenv";
import connectWithMongoDB from "./config/db.js";
import cookieParser from "cookie-parser";
// Init Express
const app = express();

// Init Dotenv
dotenv.config();

// Setup Cookie Parser
app.use(cookieParser());

// Global Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Server PORT
const PORT = process.env.PORT || 8000;

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// Listen Server
app.listen(PORT, () => {
  console.log(`Server Is Running On PORT ${PORT}`.bgGreen.black);
  connectWithMongoDB();
});
