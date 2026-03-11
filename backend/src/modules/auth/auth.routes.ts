import { Router } from "express";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

const router = Router();
const authService = new AuthService();
const authController = new AuthController(authService);
router.post("/signup", authController.signup);
router.post("/login", authController.login);

export default router;