import { AppDataSource } from "./data-source";
import { Role } from "../modules/role/role.entity";
import { User } from "../modules/user/user.entity";
import bcrypt from "bcrypt";

async function seed() {
  await AppDataSource.initialize();

  const roleRepo = AppDataSource.getRepository(Role);
  const userRepo = AppDataSource.getRepository(User);

  // Check if roles already exist
  const adminRole =
    (await roleRepo.findOneBy({ name: "ADMIN" })) ||
    roleRepo.create({ name: "ADMIN" });
  const customerRole =
    (await roleRepo.findOneBy({ name: "CUSTOMER" })) ||
    roleRepo.create({ name: "CUSTOMER" });

  await roleRepo.save([adminRole, customerRole]);

  // Check if admin user exists
  const adminExists = await userRepo.findOneBy({ email: "admin@agricore.com" });
  if (!adminExists) {
    const hashedPassword = await bcrypt.hash("admin123", 10);

    const adminUser = userRepo.create({
      name: "Admin",
      email: "admin@agricore.com",
      password: hashedPassword,
      role: adminRole,
      roleId: adminRole.id,
    });

    await userRepo.save(adminUser);
  }

  console.log("Seeding complete!");
  process.exit(0);
}

seed();
