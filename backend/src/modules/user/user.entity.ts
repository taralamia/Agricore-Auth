import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from "typeorm";
import { Role } from "../role/role.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ nullable: true })
  password?: string;

  @Column({ nullable: true })
  googleId!: string;
  
  @Column()
  roleId!: number;
  
  @ManyToOne(() => Role)
  @JoinColumn({ name: "roleId" })
  role!: Role;

  @CreateDateColumn()
  createdAt!: Date;
}