import { sign, verify } from "hono/jwt"
import type { JwtPayload } from "@/types/jwt"

const TOKEN_EXPIRATION_TIME = 60 * 60 * 24 * 7 // 1 week

export const signJwt = async (payload: Omit<JwtPayload, "iat" | "exp">, secret: string) => {
  const iat = Math.floor(Date.now() / 1000)
  const exp = iat + TOKEN_EXPIRATION_TIME

  return await sign({...payload, iat, exp}, secret)
}

export const verifyJwt = async (token: string, secret: string) => {
  try {
    const payload = await verify(token, secret)
    return payload as JwtPayload
  } catch (error) {
    return null
  }
}