import express from "express";
import { protectedRoute } from "../middlewares/protectedRoute.js";
import {
  deleteNotifications,
  getAllNotifications,
} from "../controllers/notificationControllers.js";

// Init Route
const router = express.Router();

// Routing
router.get("/all", protectedRoute, getAllNotifications);
router.delete("/delete", protectedRoute, deleteNotifications);

export default router;
