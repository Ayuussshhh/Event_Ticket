import express from "express";
import dotenv from "dotenv";
import passport from "./config/passport.js"; // Adjust the path as necessary
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors"; // Added CORS
import session from "express-session";

import authRoutes from "./routes/auth.route.js";
import eventRoutes from "./routes/event.route.js"; // Fixed the route path
import cartRoutes from "./routes/cart.route.js";
import paymentRoutes from "./routes/payment.route.js";
import analyticsRoutes from "./routes/analytics.route.js";

import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

app.use(cookieParser());

// CORS middleware (you can specify your allowed origins here)
app.use(cors({
  origin: process.env.CLIENT_URL, // for example, allow frontend hosted on this URL
  credentials: true,
}));

app.use(express.json({ limit: "10mb" })); // allows you to parse the body of the request

// Set up express-session middleware
app.use(session({
  secret: 'hi_its_a_secret',
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes); // Fixed route path for events
app.use("/api/cart", cartRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

// Error handling middleware for unexpected errors
app.use((err, req, res, next) => {
  console.error(err.stack); // Log error stack for debugging
  res.status(500).json({ message: "Something went wrong on the server", error: err.message });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    async (req, res) => {
        const { accessToken, refreshToken } = generateTokens(req.user._id);
        await storeRefreshToken(req.user._id, refreshToken);
        setCookies(res, accessToken, refreshToken);
        res.redirect("/");
    }
);

app.get("/auth/logout", (req, res) => {
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    req.logout();
    res.json({ message: "Logged out successfully" });
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
  connectDB(); // Ensure DB connection before the server starts
});
