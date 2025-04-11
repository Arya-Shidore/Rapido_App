import { Router } from "express";
import { registerUser, loginUser,loginPage } from "../controllers/user.controller.js";
import isUser from "../middlewares/isUser.middleware.js";

const router = Router();
// signup login delete
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/loginPage", isUser, loginPage);

export default router;