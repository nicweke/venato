import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";
import { pgEnum } from "drizzle-orm/pg-core";

config({ path: "env" });

export default defineConfig({
  schema: "./src/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});
