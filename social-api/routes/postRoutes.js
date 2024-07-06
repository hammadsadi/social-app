import express from "express";
import { protectedRoute } from "../middlewares/protectedRoute.js";
import { createPost } from "../controllers/createPostControllers.js";

// Init Router
const router = express.Router();

// Create Post
router.post("/create", protectedRoute, createPost);

// Export Default
export default router;
