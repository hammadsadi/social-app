import express from "express";
import { protectedRoute } from "../middlewares/protectedRoute.js";
import {
  createPost,
  createPostComment,
  deletePost,
  getAllPosts,
  getFollowingPosts,
  getLikedPosts,
  postLikeUnLike,
} from "../controllers/createPostControllers.js";

// Init Router
const router = express.Router();

// Create Post
router.get("/all", protectedRoute, getAllPosts);
router.get("/following", protectedRoute, getFollowingPosts);
router.get("/liked/:id", protectedRoute, getLikedPosts);
router.post("/create", protectedRoute, createPost);
router.delete("/:id", protectedRoute, deletePost);
router.post("/likeUnlike/:id", protectedRoute, postLikeUnLike);
router.post("/comment/:id", protectedRoute, createPostComment);

// Export Default
export default router;
