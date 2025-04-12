import { validateBody } from "@/middlewares/validator";
import { Hono } from "hono";
import { loginSchema, registerSchema } from "./schema";
import { AuthController } from "./controller";
import { authMiddleware } from "@/middlewares/auth";

const authRoutes = new Hono()

// Register
authRoutes.post("/register", validateBody(registerSchema), AuthController.register)

// Login
authRoutes.post("/login", validateBody(loginSchema), AuthController.login)

// Me
authRoutes.get("/me", authMiddleware, AuthController.me)

export default authRoutes