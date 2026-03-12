import { Request, Response, NextFunction } from "express";

export function authorizeRoles(...allowedRoles: number[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;

    if (!user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    if (!allowedRoles.includes(user.roleId)) {
      return res.status(403).json({
        message: "Forbidden: You do not have access to this resource",
      });
    }

    next();
  };
}