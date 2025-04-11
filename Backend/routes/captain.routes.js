import express from "express";
import isCaptain from "../middlewares/isCaptain.middleware.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import {
    registerCaptain,
    loginCaptain,
    loginPage,
} from "../controllers/captain.controller.js";
const router = express.Router();

// Captain routes
router.post("/register", registerCaptain);
router.post("/login", loginCaptain);
router.get("/loginPage", isCaptain, loginPage);
// router.get("/logout", logoutCaptain);


export default router;

