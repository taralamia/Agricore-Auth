import { api } from "../utils/api";
import { LoginRequest, SignupRequest, AuthResponse } from "../types/auth.types";

export const signup = async (data: SignupRequest) => {
  const response = await api.post<AuthResponse>("/auth/signup", data);
  return response.data;
};

export const login = async (data: LoginRequest) => {
  const response = await api.post<AuthResponse>("/auth/login", data);
  return response.data;
};

export const logout = async () => {
  localStorage.removeItem("token");
};