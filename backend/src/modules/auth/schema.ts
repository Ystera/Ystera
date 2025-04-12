import { z } from "zod"

export const registerSchema = z.object({
    email: z.string().email(),
    username: z.string().min(3),
    password: z.string().min(8).max(50),
});

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;