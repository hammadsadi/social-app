import express from "express";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import colors from "colors";
import dotenv from "dotenv";
import connectWithMongoDB from "./config/db.js";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";
// Init Express
const app = express();

// Init Dotenv
dotenv.config();

// Setup Cookie Parser
app.use(cookieParser());

// Global Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Init Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET, // Click 'View Credentials' below to copy your API secret
});

// Server PORT
const PORT = process.env.PORT || 8000;

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

// Listen Server
app.listen(PORT, () => {
  console.log(`Server Is Running On PORT ${PORT}`.bgGreen.black);
  connectWithMongoDB();
});
