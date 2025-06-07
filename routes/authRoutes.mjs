import express from "express";
import { registerUser, loginUser } from "../controllers/auth.mjs";
import { verifyToken } from "../middlewares/VerifyToken.mjs"; // Correct named import

const router = express.Router();

// @route   POST /api/user/register
// @desc    Register user
// @access  Public
router.post("/register", registerUser);

// @route   POST /api/user/login
// @desc    Login user
// @access  Public
router.post("/login", loginUser);

// @route   GET /api/user
// @desc    Get user data
// @access  Private
router.get("/", verifyToken, (req, res) => {
  // You can implement get user data logic here or import a controller function
  res.json({ message: "User data route (protected)" });
});

export default router;