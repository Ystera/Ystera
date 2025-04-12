import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from './schema/index';

export const createDbClient = (databaseUrl: string) => {
  const client = neon(databaseUrl)
  const db = drizzle(client, { schema })

  return Object.assign(db, { $client: client })
}

export type DB = ReturnType<typeof createDbClient>