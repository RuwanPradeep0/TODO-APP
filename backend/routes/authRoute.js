import express from "express";
import {forgotPassword, getUserDetails, login, logout, resetPassword, signup, verifyEmail } from "../controllers/authController.js";
import { verifyToken } from "../middleware/verifyToken.js";



const router = express.Router();

router.post("/signup", signup);
router.post("/verify-email", verifyEmail);

router.post("/login", login);

router.post("/logout", logout);

router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

router.get('/getUserDetails', verifyToken, getUserDetails);


export default router;