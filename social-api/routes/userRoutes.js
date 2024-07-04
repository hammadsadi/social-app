import express from "express";
import { protectedRoute } from "../middlewares/protectedRoute.js";
import {
  getSuggestedUser,
  getUserProfile,
  userFollowUnFollow,
} from "../controllers/userControllers.js";

// Init Router
const router = express.Router();

// Routing
router.get("/profile/:username", protectedRoute, getUserProfile);
router.post("/follow/:id", protectedRoute, userFollowUnFollow);
router.get("/suggested", protectedRoute, getSuggestedUser);

export default router;
