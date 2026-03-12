import { Request, Response } from "express";

export class CustomerController {
  profile = (req: Request, res: Response) => {
    res.json({
      message: "Customer profile data",
      user: req.user,
    });
  };
}