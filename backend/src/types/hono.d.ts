import type { DB } from '@/db/client';

declare module "hono" {
  interface ContextVariableMap {
    db: DB
  }
}