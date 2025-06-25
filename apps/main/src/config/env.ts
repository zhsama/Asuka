import { z } from "zod/v4";

// 定义环境变量的schema
const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  SITE_AUTHOR: z.string().default("zhsama"),
  SITE_URL: z.url().default("http://localhost:4321"),
  SITE_TITLE: z.string().default("Zhsama's Blog"),
  SITE_START_YEAR: z.string().default("2000"),
  BLOG_URL: z.string().url().default("http://localhost:4321/blog"),
});

function parseEnv() {
  const rawEnv = import.meta.env;

  try {
    return envSchema.parse(rawEnv);
  } catch (error) {
    if (error instanceof z.ZodError) {
      error.issues.forEach((issue) => {
        console.error(`  - ${issue.path.join(".")}: ${issue.message}`);
      });
      throw new Error(
        "Environment variable configuration error, please check the .env file"
      );
    }
    throw error;
  }
}

export const env = parseEnv();

export type Env = z.infer<typeof envSchema>;
