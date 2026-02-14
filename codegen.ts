import type { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";

dotenv.config();

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_HYGRAPH_URL!,
  documents: ["src/queries/**/*.graphql"],
  generates: {
    "src/gql/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
};

export default config;
