import { Context, Next } from "hono";
import { ZodTypeAny } from "zod";

export const validateBody = (schema: ZodTypeAny) => {
  return async (c: Context, next: Next) => {
    const body = await c.req.json()
    const result = schema.safeParse(body)

    if (!result.success) {
      return c.json({
        error: true,
        message: result.error.format(),
      }, 400)
    }

    c.set("validatedBody", result.data)
    await next()
  }
}