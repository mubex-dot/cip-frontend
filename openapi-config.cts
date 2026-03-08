import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "https://vcon-ai-cohort-backend.onrender.com/api/v1/openapi.json",
  apiFile: "./src/app/cipApiSlice.ts",
  apiImport: "cipApiSlice",
  outputFile: "./src/app/app-apis/appApiSlice.ts",
  exportName: "appApi",
  hooks: true,
};

export default config;
