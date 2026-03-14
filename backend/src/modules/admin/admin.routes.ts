import { Router } from "express";
import { AdminController } from "./admin.controller";
import { authenticateJWT } from "../../middleware/auth.middleware";
import { authorizeRoles } from "../../middleware/role.middleware";
import { ROLES } from "../../constants/roles";

const router = Router();

const adminController = new AdminController();

router.get(
  "/dashboard",
  authenticateJWT,
  authorizeRoles(ROLES.ADMIN),
  adminController.dashboard
);

export default router;
