import { z } from "zod";

export type Environment = "development" | "production";

export const mainEnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]),

  PUBLIC_SITE_URL: z.string().url(),
  PUBLIC_SITE_TITLE: z.string(),
  PUBLIC_SITE_AUTHOR: z.string(),
  PUBLIC_SITE_START_YEAR: z.string(),
  PUBLIC_BLOG_URL: z.string().url(),
  PUBLIC_BUILD_ENV: z.enum(["development", "production"]),
});

export type MainEnvironmentConfig = z.infer<typeof mainEnvSchema>;

export interface EnvironmentUtils {
  isDevelopment: boolean;
  isProduction: boolean;
  currentEnv: Environment;
}

export interface EnvironmentError {
  field: string;
  message: string;
  received: unknown;
}
