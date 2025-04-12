import type { DB } from '@/db/client';
import type { LoginInput, RegisterInput } from './schema';
import { users } from '@/db/schema/users';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import { signJwt } from '@/lib/jwt';

export class AuthService {
  static async register(db: DB, input: RegisterInput) {
    const existingUser = await db
      .query
      .users
      .findFirst({
        where: (users, { eq }) => eq(users.email, input.email)
      })

    if (existingUser) {
      throw new Error('User already exists');
    }
      
    const hashedPassword = await bcrypt.hash(input.password, 10);
    
    const [newUser] = await db
      .insert(users)
      .values({
        ...input,
        password: hashedPassword,
      })
      .returning({
        id: users.id,
        email: users.email,
        username: users.username,
        createdAt: users.createdAt,
      })

    return newUser
  }

  static async login(db: DB, input: LoginInput, jwtSecret: string) {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.email, input.email))

    if (!user || (!await bcrypt.compare(input.password, user.password))) {
      throw new Error('Wrong Email or Password');
    }

    const token = await signJwt({ userId: user.id }, jwtSecret)

    return { user, token }
  }

  static async me(db: DB, userId: string) {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.id, userId))

    if (!user) {
      throw new Error('User not found');
    }

    return user
  }
}