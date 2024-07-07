import express from "express";
import { protectedRoute } from "../middlewares/protectedRoute.js";
import {
  createPost,
  deletePost,
} from "../controllers/createPostControllers.js";

// Init Router
const router = express.Router();

// Create Post
router.post("/create", protectedRoute, createPost);
router.delete("/:id", protectedRoute, deletePost);

// Export Default
export default router;
