import type { BlogEnvironmentConfig, EnvironmentUtils, EnvironmentError } from "@/types/environment";
import { blogEnvSchema } from "@/types/environment";
import { z } from "zod";

function parseBlogEnvironment(): BlogEnvironmentConfig {
  const rawEnv = import.meta.env;

  try {
    return blogEnvSchema.parse(rawEnv);
  } catch (error) {
    console.error("❌ Blog环境变量配置错误:");

    if (error instanceof z.ZodError) {
      const errors: EnvironmentError[] = error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
        received: "received" in issue ? issue.received : "invalid",
      }));

      errors.forEach((err) => {
        console.error(`  - ${err.field}: ${err.message}`);
        console.error(`    接收到的值: ${err.received}`);
      });

      throw new Error("Blog环境变量配置验证失败，请检查.env文件");
    }

    throw error;
  }
}

function createEnvironmentUtils(env: BlogEnvironmentConfig): EnvironmentUtils {
  const isDevelopment = env.PUBLIC_BUILD_ENV === "development";
  const isProduction = env.PUBLIC_BUILD_ENV === "production";

  return {
    isDevelopment,
    isProduction,
    currentEnv: env.PUBLIC_BUILD_ENV,
  };
}

export const env = parseBlogEnvironment();
export const envUtils = createEnvironmentUtils(env);

export type { BlogEnvironmentConfig } from "@/types/environment";
