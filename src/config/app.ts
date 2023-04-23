import { env } from "@/env.mjs";

const environment = env.NEXT_PUBLIC_APP_ENVIRONMENT;

export const AppClientConfig = {
  name: env.NEXT_PUBLIC_APP_NAME,
  description: "",
  url: env.NEXT_PUBLIC_APP_URL,
  environment: {
    value: environment,
    isProduction: environment === "production",
    isStaging: environment === "staging",
    isTest: environment === "test",
    isNotProduction: environment !== "production",
    isDevelopment: ["development", "staging", "test", "local"].includes(
      environment
    ),
  },
};
