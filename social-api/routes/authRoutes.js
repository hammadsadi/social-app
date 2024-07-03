import express from "express";
import {
  loggedInUser,
  signOut,
  signUp,
  signin,
} from "../controllers/authControllers.js";
import { protectedRoute } from "../middlewares/protectedRoute.js";

// Init Router
const router = express.Router();

// Routes
router.post("/signup", signUp);
router.post("/signin", signin);
router.post("/signout", signOut);
router.get("/me", protectedRoute, loggedInUser);
export default router;
