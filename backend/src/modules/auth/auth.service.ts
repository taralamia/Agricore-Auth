import { AppDataSource } from "../../database/data-source";
import { User } from "../user/user.entity";
import { Role } from "../role/role.entity";
import bcrypt from "bcrypt";

export class AuthService {
  private userRepo = AppDataSource.getRepository(User);
  private roleRepo = AppDataSource.getRepository(Role);

  async signup(name: string, email: string, password: string) {
    // check if user already exists
    const existing = await this.userRepo.findOneBy({ email });
    if (existing) {
      throw new Error("Email already registered");
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // get CUSTOMER role
    const customerRole = await this.roleRepo.findOneBy({ name: "CUSTOMER" });
    if (!customerRole) throw new Error("Customer role not found");

    const user = this.userRepo.create({
      name,
      email,
      password: hashedPassword,
      role: customerRole,
      roleId: customerRole.id,
    });

    await this.userRepo.save(user);

    // remove password before returning
    delete user.password;
    return user;
  }
}