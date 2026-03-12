import { Router } from "express";
import { CustomerController } from "./customer.controller";
import { authenticateJWT } from "../../middleware/auth.middleware";
import { authorizeRoles } from "../../middleware/role.middleware";
import { ROLES } from "../../constants/roles";

const router = Router();

const customerController = new CustomerController();

router.get(
  "/profile",
  authenticateJWT,
  authorizeRoles(ROLES.CUSTOMER),
  customerController.profile
);

export default router;