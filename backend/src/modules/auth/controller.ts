import { Context } from "hono";
import { LoginInput, RegisterInput } from "./schema";
import { AuthService } from "./service";
import { error } from "console";

export class AuthController {
    static async register(c: Context) {
        const db = c.get("db")
        const body = c.get("validatedBody") as RegisterInput
        
        const user = await AuthService.register(db, body)

        return c.json({
            error: false,
            message: "User created successfully",
            data: user,
        })
    }
  
    static async login(c: Context) {
        const db = c.get("db")
        const body = c.get("validatedBody") as LoginInput
        const jwtSecret = c.env.JWT_SECRET
        
        const { user, token } = await AuthService.login(db, body, jwtSecret)

        return c.json({
            error: false,
            message: "Login successful",
            data: {
                user: user.email,
                token,
            },
        })
    }

    static async me(c: Context) {
        const db = c.get("db")
        const userPayload = c.get("user")
        const userId = userPayload.userId

        const user = await AuthService.me(db, userId)
        
        if (!user) {
            return c.json({
                error: true,
                message: "User not found",
            }, 404)
        }

        return c.json({
            error: false,
            message: "OK",
            data: {
                email: user.email,
                username: user.username,
                createdAt: user.createdAt,
            },
        })
    }
}