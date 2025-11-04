import type { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";

dotenv.config();

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_HYGRAPH_URL!,
  documents: "src/queries/**/*.ts",
  generates: {
    "src/types/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        useTypeImports: true,
        reactQueryVersion: 5,
        enumsAsTypes: true,
        futureProofEnums: true,
        dedupeFragments: true,
      },
    },
  },
};

export default config;
