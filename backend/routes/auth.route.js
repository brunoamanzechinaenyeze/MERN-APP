import express from "express";
import { Login, Logout, signUp, verifyEmail, forgotPassword } from "../controllers/auth.controller.js";
const router = express.Router()

router.post('/signup', signUp)
router.post('/login', Login)
router.post('/logout', Logout)
router.post("/verify-email", verifyEmail)
router.post('/forgot-password', forgotPassword)
export default router;