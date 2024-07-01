import express from "express";
import { signOut, signUp, signin } from "../controllers/authControllers.js";

// Init Router
const router = express.Router();

// Routes
router.post("/signup", signUp);

router.post("/signin", signin);

router.post("/signout", signOut);
export default router;
