import express from "express";
import { Login, Logout, signUp } from "../controllers/auth.controller.js";
const router = express.Router()

router.post('/signup', signUp)
router.post('/login', Login)
router.post('/logout', Logout)


export default router;