import { Request, Response } from "express";
import { AuthService } from "./auth.service";

const authService = new AuthService();

export class AuthController {
  constructor(private authService: AuthService) {}

  signup = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const user = await this.authService.signup(name, email, password);

      return res.status(201).json({
        message: "User created",
        user,
      });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  };
  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const result = await this.authService.login(email, password);

      return res.status(200).json({
        message: "Login successful",
        ...result,
      });
    } catch (err: any) {
      return res.status(401).json({
        message: err.message || "Invalid credentials",
      });
    }
  };
  logout = async (req: Request, res: Response) => {
    return res.status(200).json({
      message: "Logout successful",
    });
  };
}
