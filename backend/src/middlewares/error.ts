import { Context } from "hono";

export const errorHandler = (err: Error, c: Context) => {
    if (err.name == "ZodError") {
        return c.json({
            error: true,
            message: err.message,
        }, 400)
    }

    return c.json({
        error: true,
        message: err.message,
    }, 500)
}