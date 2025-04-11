import { Router } from "express";
import { registerUser, loginUser,loginPage, logoutUser } from "../controllers/user.controller.js";
import isUser from "../middlewares/isUser.middleware.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/loginPage", isUser, loginPage);
router.post("/logout", isUser, logoutUser);

export default router;