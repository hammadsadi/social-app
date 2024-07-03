import express from "express";
import { protectedRoute } from "../middlewares/protectedRoute.js";
import { getUserProfile } from "../controllers/userControllers.js";

// Init Router
const router = express.Router();

// Routing
router.get("/profile/:username", protectedRoute, getUserProfile);

export default router;
