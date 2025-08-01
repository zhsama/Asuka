import type { MainEnvironmentConfig, EnvironmentUtils, EnvironmentError } from "@/types/environment";
import { mainEnvSchema } from "@/types/environment";
import { z } from "zod";

function parseMainEnvironment(): MainEnvironmentConfig {
  const rawEnv = import.meta.env;

  try {
    return mainEnvSchema.parse(rawEnv);
  } catch (error) {
    console.error("❌ Main环境变量配置错误:");

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

      throw new Error("Main环境变量配置验证失败，请检查.env文件");
    }

    throw error;
  }
}

function createEnvironmentUtils(env: MainEnvironmentConfig): EnvironmentUtils {
  const isDevelopment = env.PUBLIC_BUILD_ENV === "development";
  const isProduction = env.PUBLIC_BUILD_ENV === "production";

  return {
    isDevelopment,
    isProduction,
    currentEnv: env.PUBLIC_BUILD_ENV,
  };
}

export const env = parseMainEnvironment();
export const envUtils = createEnvironmentUtils(env);

export type Env = MainEnvironmentConfig;

export type { MainEnvironmentConfig } from "@/types/environment";
