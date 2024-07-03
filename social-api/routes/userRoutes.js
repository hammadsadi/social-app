import express from "express";
import { protectedRoute } from "../middlewares/protectedRoute.js";
import {
  getUserProfile,
  userFollowUnFollow,
} from "../controllers/userControllers.js";

// Init Router
const router = express.Router();

// Routing
router.get("/profile/:username", protectedRoute, getUserProfile);
router.post("/follow/:id", protectedRoute, userFollowUnFollow);

export default router;
