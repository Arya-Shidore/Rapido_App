import express from "express";
import isCaptain from "../middlewares/isCaptain.middleware.js";
import {
    registerCaptain,
    loginCaptain,
    loginPage,
} from "../controllers/captain.controller.js";
const router = express.Router();

router.post("/register", registerCaptain);
router.post("/login", loginCaptain);
router.get("/loginPage", isCaptain, loginPage);


export default router;

