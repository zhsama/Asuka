import { z } from "zod";

export type Environment = "development" | "production";

export const mainEnvSchema = z.object({
  PUBLIC_SITE_URL: z.string().url(),
  PUBLIC_SITE_TITLE: z.string(),
  PUBLIC_SITE_AUTHOR: z.string(),
  PUBLIC_SITE_START_YEAR: z.string(),
  PUBLIC_BLOG_URL: z.string().url(),
  PUBLIC_BUILD_ENV: z.enum(["development", "production"]),

  // Open Graph 元数据
  PUBLIC_OG_TITLE: z.string(),
  PUBLIC_OG_DESCRIPTION: z.string(),
  PUBLIC_OG_IMAGE: z.string().url(),
  PUBLIC_OG_URL: z.string().url(),
  PUBLIC_OG_SITE_NAME: z.string(),
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
