import { z } from "zod";

/**
 * 基础环境类型定义
 */
export type Environment = "development" | "production";

/**
 * Blog应用环境变量Schema
 */
export const blogEnvSchema = z.object({
  PUBLIC_SITE_URL: z.string().url(),
  PUBLIC_SITE_TITLE: z.string(),
  PUBLIC_SITE_DESCRIPTION: z.string(),
  PUBLIC_BUILD_ENV: z.enum(["development", "production"]),
  PUBLIC_MAIN_URL: z.string().url(),
});

/**
 * Blog应用环境变量类型
 */
export type BlogEnvironmentConfig = z.infer<typeof blogEnvSchema>;

/**
 * 环境工具类型
 */
export interface EnvironmentUtils {
  isDevelopment: boolean;
  isProduction: boolean;
  currentEnv: Environment;
}

/**
 * 环境变量解析错误类型
 */
export interface EnvironmentError {
  field: string;
  message: string;
  received: unknown;
}
