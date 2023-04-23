import { env } from "@/env.mjs";

export const AppServerConfig = {
  database: env.DATABASE_URL,
  nextAuth: {
    url: env.NEXTAUTH_URL,
    secret: env.NEXTAUTH_SECRET,
  },
  smtp: {
    server: env.SMTP_SERVER,
    port: env.SMTP_PORT,
    username: env.SMTP_USERNAME,
    password: env.SMTP_PASSWORD,
    from: env.SMTP_FROM,
  },
};
