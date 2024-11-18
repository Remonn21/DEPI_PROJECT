import { protectedClient } from "./axios";
import { publicClient } from "./axios";

export const signup = (formData) =>
   publicClient.post("/users/signup", formData);

export const login = (formData) => publicClient.post("/users/login", formData);

export const logout = () => protectedClient.post("/users/logout");
