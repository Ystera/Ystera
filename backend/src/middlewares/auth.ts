import { verifyJwt } from "@/lib/jwt"
import { Context, Next } from "hono"

export const authMiddleware = async (c: Context, next: Next) => {
    const token = c.req.header("Authorization")?.replace("Bearer ", "")

    if (!token) {
        return c.json({ error: true, message: "Unauthorized: No token provided" }, 401)
    }

    try {
        const jwtSecret = c.env.JWT_SECRET
        const payload = await verifyJwt(token, jwtSecret)
        c.set("user", payload)
        await next()
    } catch (err) {
        return c.json({ error: true, message: 'Invalid or expired token' }, 401)
    }
}