import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { createDbClient } from './db/client';
import { errorHandler } from './middlewares/error';
import { setupRoutes } from './routes';

type ENV = {
  DATABASE_URL: string,
  JWT_SECRET: string,
}

const app = new Hono<{ Bindings: ENV }>()

// Middlewares
app.use("*", logger())
app.use("*", cors())
app.use("*", async (c, next) => {
  c.set("db", createDbClient(c.env.DATABASE_URL))
  await next()
})

// Routes
const api = new Hono()
setupRoutes(api)
app.route('/api', api)

// Error Handling
app.onError(errorHandler)

// API Health
app.get("/", (c) => c.json({error: false, message: "working" }))

export default app