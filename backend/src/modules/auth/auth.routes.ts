import { Router } from "express";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { generateToken } from "../../utils/jwt";
import passport from "passport";
const router = Router();
const authService = new AuthService();
const authController = new AuthController(authService);
router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/logout", authController.logout);
/*
Google OAuth start
*/
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const user = req.user as Express.User;

    if (!req.user) {
      return res.status(401).json({
        message: "Google authentication failed",
      });
    }

    const token = generateToken({
      userId: user.id,
      roleId: user.roleId,
    });

    res.json({
      message: "Google login successful",
      token,
      user,
    });
  }
);
export default router;
