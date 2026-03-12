import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes";
import adminRoutes from "../modules/admin/admin.routes"
import customerRoutes from "../modules/customer/customer.routes"
const router = Router();

router.use("/auth", authRoutes);
router.use("/admin", adminRoutes);
router.use("/customer", customerRoutes);

export default router;