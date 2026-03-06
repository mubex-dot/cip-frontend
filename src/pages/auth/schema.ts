import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Invalid email. Email must be a valid email address"),
  password: z.string().min(1, "Password is required"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
