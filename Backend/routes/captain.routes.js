import express from "express";
import isCaptain from "../middlewares/isCaptain.middleware.js";
import {
    registerCaptain,
    loginCaptain,
    loginPage,
    logoutCaptain,
} from "../controllers/captain.controller.js";
const router = express.Router();

router.post("/register", registerCaptain);
router.post("/login", loginCaptain);
router.get("/loginPage", isCaptain, loginPage);
router.post("/logout", isCaptain, logoutCaptain);

export default router;

