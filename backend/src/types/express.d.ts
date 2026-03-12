import { User } from "../modules/user/user.entity";
import { Role } from "../modules/role/role.entity";

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        roleId: number;
        email?: string;
      };
    }
  }
}