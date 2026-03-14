import jwt, { SignOptions } from "jsonwebtoken";
import { env } from "../config/env";

interface JwtPayload {
  userId: string;
  roleId: number;
}

export function generateToken(payload: JwtPayload) {
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
  } as jwt.SignOptions);
}

export function verifyToken(token: string) {
  return jwt.verify(token, env.JWT_SECRET);
}
