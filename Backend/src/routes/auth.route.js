import express from "express";
import { signup, login, logout, refreshToken, getProfile, oauthCallback } from "../controllers/auth.controller.js"; // Adjusted the path
import { protectRoute } from "../middleware/auth.middleware.js";
import passport from "passport";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken);
router.get("/profile", protectRoute, getProfile);

// OAuth routes
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/login" }), oauthCallback);

export default router;
