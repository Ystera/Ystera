import authRoutes from "@/modules/auth/routes";
import type { Hono } from "hono";

export const setupRoutes = (api: Hono) => {
    api.route("", authRoutes);
}