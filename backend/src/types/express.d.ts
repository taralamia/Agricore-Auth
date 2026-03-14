import "express";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        roleId: number;
        email?: string;
        name?: string;
      };
    }

    interface User {
      id: string;
      roleId: number;
      email?: string;
      name?: string;
    }
  }
}

export {};
