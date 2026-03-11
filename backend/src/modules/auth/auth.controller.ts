import { Request, Response } from "express";
import { AuthService } from "./auth.service";

const authService = new AuthService();

export class AuthController {
  static async signup(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const user = await authService.signup(name, email, password);
      return res.status(201).json({ message: "User created", user });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}