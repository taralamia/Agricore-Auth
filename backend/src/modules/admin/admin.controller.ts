import { Request, Response } from "express";

export class AdminController {
  dashboard = (req: Request, res: Response) => {
    res.json({
      message: "Welcome Admin Dashboard",
    });
  };
}